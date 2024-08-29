export interface Product {
    name: string;
    brand: string;
    category: "face" | "body" | "mouth" | "hair" | "hands" | "feet";
    properties: string;
    image: string;
    shoplink: string;
    createdAt?: Date;
    updatedAt?: Date;
}