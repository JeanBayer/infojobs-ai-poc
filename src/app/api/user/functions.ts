import axios from "axios";
import type { CVText, Experience, Info, Skill } from "@/types/user";
import type { Candidate, Curriculums } from "./type";

const BASE_URL = "https://api.infojobs.net/api";
const CANDIDATE_ENDPOINT = `${BASE_URL}/6/candidate`;
const CURRICULUMS_ENDPOINT = `${BASE_URL}/2/curriculum`;
const CV_TEXT_ENDPOINT = (code: string) =>
  `${BASE_URL}/1/curriculum/${code}/cvtext`;
const SKILL_ENDPOINT = (code: string) =>
  `${BASE_URL}/2/curriculum/${code}/skill`;
const EXPERIENCE_ENDPOINT = (code: string) =>
  `${BASE_URL}/1/curriculum/${code}/experience`;

const CLIENT_ID = process.env.INFOJOBS_CLIENT_ID;
const CLIENT_SECRET = process.env.INFOJOBS_CLIENT_SECRET;
const BASIC_TOKEN = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
  "base64"
);

async function getData<T>(endpoint: string, accessToken: string) {
  const { data } = await axios<T>(endpoint, {
    headers: {
      Authorization: `Basic ${BASIC_TOKEN},Bearer ${accessToken}`,
    },
  });

  return data;
}

export async function getCandidate(accessToken: string): Promise<Info> {
  const candidateApi = await getData<Candidate>(
    CANDIDATE_ENDPOINT,
    accessToken
  );
  const candidate = {
    id: candidateApi?.id,
    email: candidateApi?.email,
    photo: candidateApi?.photo,
    name: candidateApi?.name,
    surname1: candidateApi?.surname1,
    surname2: candidateApi?.surname2,
    fullName: candidateApi?.fullName,
    city: candidateApi?.city,
    province: candidateApi?.province,
  };

  return candidate;
}

export async function getCurriculums(accessToken: string) {
  const curriculums = await getData<Curriculums[]>(
    CURRICULUMS_ENDPOINT,
    accessToken
  );
  return curriculums;
}

export async function getCVText(
  code: string,
  accessToken: string
): Promise<CVText> {
  const { cvtext } = await getData<{ cvtext: CVText }>(
    CV_TEXT_ENDPOINT(code),
    accessToken
  );
  return cvtext;
}

export async function getSkill(
  code: string,
  accessToken: string
): Promise<Skill> {
  const skill = await getData<Skill>(SKILL_ENDPOINT(code), accessToken);
  return skill;
}

export async function getExperience(
  code: string,
  accessToken: string
): Promise<Experience[]> {
  const { experience } = await getData<{ experience: Experience[] }>(
    EXPERIENCE_ENDPOINT(code),
    accessToken
  );
  return experience;
}
