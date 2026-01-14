'use client';

import { Palmtree } from 'lucide-react';

export default function ErrorPage() {
  return (
    <div className="grid h-screen place-items-center">
      <div>
        <Palmtree className="text-primary mb-4 h-16 w-16" />
        <h2 className="mb-2 text-xl font-semibold">Sorry, users are on vacation!</h2>
        <p className="text-primary max-w-md text-sm">
          We couldn&apos;t load the user data right now. Please try again later or check your connection.
        </p>
      </div>
    </div>
  );
}
