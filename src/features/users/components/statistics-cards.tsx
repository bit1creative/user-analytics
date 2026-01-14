'use client';

import { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, Scale, Ruler, Calendar } from 'lucide-react';
import { UserStatistics } from '../utils/statistics';

interface StatisticsCardsProps {
  statistics: UserStatistics | null;
  isLoading: boolean;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
}

function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-primary text-xs">{description}</p>}
      </CardContent>
    </Card>
  );
}

function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-1 h-8 w-16" />
        <Skeleton className="h-3 w-32" />
      </CardContent>
    </Card>
  );
}

export const StatisticsCards = memo(function StatisticsCards({ statistics, isLoading }: StatisticsCardsProps) {
  if (isLoading || !statistics) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Users"
        value={statistics.totalUsers}
        icon={<Users className="text-primary h-4 w-4" />}
        description={`${statistics.genderDistribution.male} male, ${statistics.genderDistribution.female} female`}
      />
      <StatCard
        title="Median Age"
        value={`${statistics.medianAge} years`}
        icon={<Calendar className="text-primary h-4 w-4" />}
      />
      <StatCard
        title="Average Weight"
        value={`${statistics.averageWeight} kg`}
        icon={<Scale className="text-primary h-4 w-4" />}
      />
      <StatCard
        title="Average Height"
        value={`${statistics.averageHeight} cm`}
        icon={<Ruler className="text-primary h-4 w-4" />}
      />
    </div>
  );
});
