import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from './users-api';
import { UsersResponse } from '../types';

interface UseUsersQueryOptions {
  initialData?: UsersResponse;
}

export function useUsersQuery(options?: UseUsersQueryOptions) {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
    staleTime: 5 * 60 * 1000,
    initialData: options?.initialData,
  });
}
