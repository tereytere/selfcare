export enum Category {
    Face = "face",
    Body = "body",
    Mouth = "mouth",
    Hair = "hair",
    Hands = "hands",
    Feet = "feet"
}


export interface Product {
    name: string;
    brand: string;
    category: Category;
    properties: string;
    image: string;
    shoplink: string;
    createdAt?: Date;
    updatedAt?: Date;
}