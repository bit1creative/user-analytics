'use client';

import { useState, useMemo } from 'react';
import { useUsersQuery } from '../api';
import { StatisticsCards } from './statistics-cards';
import { BirthYearChart } from './birth-year-chart';
import { UsersTable } from './users-table';
import { calculateUserStatistics, calculateBirthYearDistribution } from '../utils/statistics';

const PAGE_SIZE = 10;

export function UsersDashboard() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useUsersQuery();

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
      <StatisticsCards statistics={statistics} isLoading={isLoading} />

      <BirthYearChart data={birthYearData} isLoading={isLoading} />

      <UsersTable
        users={paginatedUsers}
        total={total}
        page={page}
        pageSize={PAGE_SIZE}
        isLoading={isLoading}
        onPageChange={setPage}
      />
    </div>
  );
}
