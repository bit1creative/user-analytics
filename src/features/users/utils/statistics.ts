import { User, UserRole, UserGender } from '../types';

export interface UserStatistics {
  totalUsers: number;
  medianAge: number;
  averageWeight: number;
  averageHeight: number;
  genderDistribution: { male: number; female: number };
  roleDistribution: { admin: number; moderator: number; user: number };
}

function calculateMedian(values: number[]): number {
  if (values.length === 0) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
}

function calculateAverage(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

export function calculateUserStatistics(users: User[]): UserStatistics {
  const ages = users.map((u) => u.age);
  const weights = users.map((u) => u.weight);
  const heights = users.map((u) => u.height);

  const genderDistribution = users.reduce(
    (acc, user) => {
      if (user.gender === UserGender.MALE) acc.male++;
      else if (user.gender === UserGender.FEMALE) acc.female++;
      return acc;
    },
    { male: 0, female: 0 },
  );

  const roleDistribution = users.reduce(
    (acc, user) => {
      if (user.role === UserRole.ADMIN) acc.admin++;
      else if (user.role === UserRole.MODERATOR) acc.moderator++;
      else acc.user++;
      return acc;
    },
    { admin: 0, moderator: 0, user: 0 },
  );

  return {
    totalUsers: users.length,
    medianAge: calculateMedian(ages),
    averageWeight: Math.round(calculateAverage(weights) * 10) / 10,
    averageHeight: Math.round(calculateAverage(heights) * 10) / 10,
    genderDistribution,
    roleDistribution,
  };
}

export interface BirthYearData {
  year: number;
  count: number;
}

export function calculateBirthYearDistribution(users: User[]): BirthYearData[] {
  const yearCounts = users.reduce<Record<number, number>>((acc, user) => {
    acc[user.birthYear] = (acc[user.birthYear] || 0) + 1;
    return acc;
  }, {});

  const years = Object.keys(yearCounts)
    .map(Number)
    .sort((a, b) => a - b);

  if (years.length === 0) return [];

  const minYear = years[0];
  const maxYear = years[years.length - 1];
  const result: BirthYearData[] = [];

  for (let year = minYear; year <= maxYear; year++) {
    result.push({ year, count: yearCounts[year] || 0 });
  }

  return result;
}
