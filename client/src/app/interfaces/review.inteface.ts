export interface Review {
    title: string;
    description: string;
    date?: Date;
    status?: "show" | "hidden";
    stars: 1 | 2 | 3 | 4 | 5;
    author: string;
    createdAt?: Date;
    updatedAt?: Date;
}