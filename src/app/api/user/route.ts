import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import {
  getCandidate,
  getCurriculums,
  getCVText,
  getSkill,
  getExperience,
} from "./functions";
import type { User } from "@/types/user";

const accessToken = "1a3a2c02-d2c3-40c8-99c5-d2e66ea64a62";

export async function GET(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const { accessToken } = session;
  if (!accessToken) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const info = await getCandidate(accessToken);
  const curriculums = await getCurriculums(accessToken);

  const CV_CODE = curriculums[0].code;
  if (!CV_CODE) return new NextResponse("Unauthorized", { status: 401 });

  const cvtext = await getCVText(CV_CODE, accessToken);
  const skill = await getSkill(CV_CODE, accessToken);
  const experience = await getExperience(CV_CODE, accessToken);

  const user: User = {
    info,
    cvtext,
    skill,
    experience,
  };

  return NextResponse.json(user);
}
