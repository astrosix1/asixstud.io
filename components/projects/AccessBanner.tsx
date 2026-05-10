'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface AccessBannerProps {
  projectName: string;
}

/**
 * Banner shown to authenticated users who already have access to a project
 * Encourages them to go to their dashboard instead of subscribing again
 */
export function AccessBanner({ projectName }: AccessBannerProps) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
            <div>
              <p className="text-green-900 font-semibold">
                ✓ You have access to {projectName}
              </p>
              <p className="text-green-700 text-sm">
                Launch the app from your dashboard or continue reading below
              </p>
            </div>
          </div>
          <Link href="/dashboard" className="flex-shrink-0">
            <Button className="gap-2 whitespace-nowrap">
              Go to Dashboard
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
