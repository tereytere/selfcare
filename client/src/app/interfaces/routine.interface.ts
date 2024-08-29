

export interface Routine {
    name: string;
    category: "face" | "body" | "mouth" | "hair" | "hands" | "feet";
    applyschedule: "morning" | "afternoon" | "night" | "other";
    repeat: string[];
    products: string[];
    usesteps?: string[];
    description?: string;
    reviews?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}