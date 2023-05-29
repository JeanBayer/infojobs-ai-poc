export interface Candidate {
  id: number;
  email: string;
  emailHash: string;
  key: string;
  hasPhoto: boolean;
  photo: string;
  name: string;
  surname1: string;
  surname2: string;
  fullName: string;
  city: string;
  province: Province;
  publicProfileLink: string;
  status: number;
  validatedMail: number;
  accountCreation: string;
  lastCVUpdate: string;
  extendedBannerAttributes: string;
  subSegment: string;
  doesNotWantNotifications: boolean;
  photoAccepted: boolean;
}

interface Province {
  id: number;
  value: string;
}

export interface Curriculums {
  id: number;
  code: string;
  name: string;
  principal: boolean;
  completed: boolean;
  incompleteSteps: string[];
}
