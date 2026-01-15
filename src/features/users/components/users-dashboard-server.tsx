import { fetchAllUsers } from '../api';
import { UsersDashboard } from './users-dashboard';

export async function UsersDashboardServer() {
  const initialData = await fetchAllUsers();

  return <UsersDashboard initialData={initialData} />;
}
