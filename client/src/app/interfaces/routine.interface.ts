export interface Routine {
  _id: string;
  name: string;
  category: "face" | "body" | "mouth" | "hair" | "hands" | "feet" | "beard";
  applyschedule: "morning" | "afternoon" | "night" | "other";
  repeat: string[];
  products: string[];
  usesteps?: string[];
  description?: string;
  reviews?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
