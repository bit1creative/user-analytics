import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from './users-api';

export function useUsersQuery() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
    staleTime: 5 * 60 * 1000,
  });
}
