import * as React from 'react';
import { cn } from '@/lib/utils';

function Button({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'bg-background hover:bg-secondary inline-flex h-8 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Button };
