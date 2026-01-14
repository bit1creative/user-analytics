import { config } from '@/config';
import { UsersResponse, UsersApiResponse } from '../types';
import { mapUsersApiResponseToUsersResponse } from '../utils/user.mapper';

const SELECTED_FIELDS = [
  'id',
  'firstName',
  'lastName',
  'email',
  'age',
  'gender',
  'birthDate',
  'weight',
  'height',
  'role',
].join(',');

export async function fetchAllUsers(): Promise<UsersResponse> {
  const response = await fetch(`${config.USERS_API_BASE_URL}/users?limit=0&select=${SELECTED_FIELDS}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const data: UsersApiResponse = await response.json();
  return mapUsersApiResponseToUsersResponse(data);
}
