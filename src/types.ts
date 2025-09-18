type Category = "technical" | "cultural" | "non-technical" | "sports";
type GenderCategory = "MALE" | "FEMALE" | "ALL";
type RegistrationStatus = "ONGOING" | "COMPLETED" | "CANCELLED";
// type Rule = {
//   id: string;
//   name: string;
// };
type Event = {
  id: string;
  name: string;
  category: Category;
  registrationStatus: RegistrationStatus;
  genderCategory: GenderCategory;
  registrationFee: number;
  teamSize: number;
  minTeamSize: number;
  rules: string[];
  thumbnail: string;
  startsOn: string;
  createdAt: string;
  updatedAt: string;
};

type EventRegistration = {
  eventId: string;
  leadEmail: string;
  upiId?: string;
  teamName?: string;
  members: Array<{
    name?: string;
    email: string;
    phone?: string;
  }>;
};
export type { Event, EventRegistration, Category as EventCategory };
