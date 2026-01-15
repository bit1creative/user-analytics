'use client';

import { useState, useMemo } from 'react';
import { RefreshCw } from 'lucide-react';
import { useUsersQuery } from '../api';
import { UsersResponse } from '../types';
import { StatisticsCards } from './statistics-cards';
import { BirthYearChart } from './birth-year-chart';
import { UsersTable } from './users-table';
import { calculateUserStatistics, calculateBirthYearDistribution } from '../utils/statistics';
import { Button } from '@/components/ui/button';

const PAGE_SIZE = 10;

interface UsersDashboardProps {
  initialData: UsersResponse;
}

export function UsersDashboard({ initialData }: UsersDashboardProps) {
  const [page, setPage] = useState(1);
  const { data, isFetching, refetch } = useUsersQuery({ initialData });

  const users = useMemo(() => data?.users ?? [], [data?.users]);
  const total = data?.total ?? 0;

  const statistics = useMemo(() => (users.length > 0 ? calculateUserStatistics(users) : null), [users]);

  const birthYearData = useMemo(() => calculateBirthYearDistribution(users), [users]);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return users.slice(start, start + PAGE_SIZE);
  }, [users, page]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <Button onClick={() => refetch()} disabled={isFetching}>
          <RefreshCw className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <StatisticsCards statistics={statistics} isLoading={isFetching} />

      <BirthYearChart data={birthYearData} isLoading={isFetching} />

      <UsersTable
        users={paginatedUsers}
        total={total}
        page={page}
        pageSize={PAGE_SIZE}
        isLoading={isFetching}
        onPageChange={setPage}
      />
    </div>
  );
}
