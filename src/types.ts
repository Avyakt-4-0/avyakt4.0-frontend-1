type Category = "technical" | "cultural" | "non-technical" | "sports";
type GenderCategory = "MALE" | "FEMALE" | "ALL";
type RegistrationStatus = "ONGOING" | "COMPLETED" | "CANCELLED";
type Rule = {
  id: string;
  name: string;
};
type Event = {
  id: string;
  name: string;
  category: Category;
  registrationStatus: RegistrationStatus;
  genderCategory: GenderCategory;
  registrationFee: number;
  teamSize: number;
  rules: Rule[];
  thumbnail: string;
  startsOn: string;
  createdAt: string;
  updatedAt: string;
};

export type { Event };
