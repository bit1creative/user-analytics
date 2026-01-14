import { UserRole, UserGender } from './user.constants';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  gender: UserGender;
  email: string;
  birthDate: Date;
  birthYear: number;
  height: number;
  weight: number;
  role: UserRole;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
