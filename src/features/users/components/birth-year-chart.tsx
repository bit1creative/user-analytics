'use client';

import { memo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BirthYearData } from '../utils/statistics';

interface BirthYearChartProps {
  data: BirthYearData[];
  isLoading: boolean;
}

export const BirthYearChart = memo(function BirthYearChart({ data, isLoading }: BirthYearChartProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Birth Year Distribution</CardTitle>
          <CardDescription>Number of users born in each year</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Birth Year Distribution</CardTitle>
        <CardDescription>Number of users born in each year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-primary" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip labelStyle={{ fontWeight: 'bold' }} />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#171717"
                strokeWidth={2}
                dot={{ fill: '#171717', strokeWidth: 2 }}
                activeDot={{ r: 6 }}
                name="Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
});
