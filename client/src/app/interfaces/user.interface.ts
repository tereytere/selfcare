export interface User {
  _id: string;
  name: string;
  email: string;
  about?: string;
  password: string;
  location: string;
  role: 'admin' | 'user';
  image?: string;
  routines?: string[];
}
