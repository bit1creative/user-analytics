import { UserApiResponse, UsersApiResponse } from '../types/user-api.types';
import { User, UsersResponse } from '../types/user';
import { UserRole, UserGender } from '../types/user.constants';

function mapRole(role: string): UserRole {
  const normalizedRole = role.toLowerCase();
  if (normalizedRole === UserRole.ADMIN) return UserRole.ADMIN;
  if (normalizedRole === UserRole.MODERATOR) return UserRole.MODERATOR;
  return UserRole.USER;
}

function mapGender(gender: string): UserGender {
  return gender.toLowerCase() === UserGender.FEMALE ? UserGender.FEMALE : UserGender.MALE;
}

export function mapUserApiToUser(apiUser: UserApiResponse): User {
  const birthDate = new Date(apiUser.birthDate);

  return {
    id: apiUser.id,
    firstName: apiUser.firstName,
    lastName: apiUser.lastName,
    fullName: `${apiUser.firstName} ${apiUser.lastName}`,
    age: apiUser.age,
    gender: mapGender(apiUser.gender),
    email: apiUser.email,
    birthDate,
    birthYear: birthDate.getFullYear(),
    height: apiUser.height,
    weight: apiUser.weight,
    role: mapRole(apiUser.role),
  };
}

export function mapUsersApiResponseToUsersResponse(apiResponse: UsersApiResponse): UsersResponse {
  return {
    users: apiResponse.users.map(mapUserApiToUser),
    total: apiResponse.total,
    skip: apiResponse.skip,
    limit: apiResponse.limit,
  };
}
