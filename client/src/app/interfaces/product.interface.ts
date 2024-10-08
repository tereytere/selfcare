export enum Category {
    Face = "face",
    Body = "body",
    Mouth = "mouth",
    Hair = "hair",
    Hands = "hands",
    Feet = "feet"
}


export interface Product {
    _id: string;
    name: string;
    brand: string;
    category: "face" | "body" | "mouth" | "hair" | "hands" | "feet";
    properties: string;
    image: string;
    shoplink: string;
    createdAt?: Date;
    updatedAt?: Date;
}
