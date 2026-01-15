import { Suspense } from 'react';
import { UsersDashboardServer, DashboardSkeleton } from '@/features/users';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">User Analytics Dashboard</h1>
          <p className="text-primary text-sm">Analyze and manage user data</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <Suspense fallback={<DashboardSkeleton />}>
          <UsersDashboardServer />
        </Suspense>
      </main>
    </div>
  );
}
