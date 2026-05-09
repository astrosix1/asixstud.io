'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export function LaunchGeoIntelButton() {
  const [href, setHref] = useState('https://geointel.asix.live');

  useEffect(() => {
    const buildUrl = async () => {
      if (!supabase) return;
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.access_token && session?.refresh_token) {
          // Pass tokens in hash so GeoIntel can call setSession() directly.
          // Hash is never sent to servers — safe to include tokens here.
          const hash =
            `#access_token=${encodeURIComponent(session.access_token)}` +
            `&refresh_token=${encodeURIComponent(session.refresh_token)}`;
          setHref(`https://geointel.asix.live${hash}`);
        }
      } catch {
        // Leave href as plain geointel.asix.live if session can't be read
      }
    };
    buildUrl();
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button size="lg" className="gap-2 px-8" variant="outline">
        Launch GeoIntel
        <ArrowRight size={18} />
      </Button>
    </a>
  );
}
