/**
 * Dashboard helper functions
 * Used by dashboard components for formatting and styling
 */

export interface AppLaunchData {
  projectSlug: string;
  projectName: string;
  plan: string;
  expiresAt: string | null;
  appColor?: string;
}

/**
 * Format expiration date to human-readable string
 * e.g., "Expires in 30 days" or "Expires today" or "Expired"
 */
export function formatExpirationDate(expirationDate: string | null): string {
  if (!expirationDate) return 'No expiration';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiry = new Date(expirationDate);
  expiry.setHours(0, 0, 0, 0);

  const daysLeft = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) {
    return 'Expired';
  } else if (daysLeft === 0) {
    return 'Expires today';
  } else if (daysLeft === 1) {
    return 'Expires tomorrow';
  } else if (daysLeft <= 7) {
    return `Expires in ${daysLeft} days`;
  } else if (daysLeft <= 30) {
    const weeks = Math.floor(daysLeft / 7);
    return `Expires in ${weeks} week${weeks > 1 ? 's' : ''}`;
  } else {
    const months = Math.floor(daysLeft / 30);
    return `Expires in ${months} month${months > 1 ? 's' : ''}`;
  }
}

/**
 * Get color for plan tier
 * Used for visual distinction in subscription manager
 */
export function getPlanColor(plan: string): string {
  const planLower = plan.toLowerCase();

  if (planLower.includes('enterprise')) return 'text-purple-600 bg-purple-50';
  if (planLower.includes('pro') || planLower.includes('premium')) return 'text-blue-600 bg-blue-50';
  if (planLower.includes('basic') || planLower.includes('free')) return 'text-slate-600 bg-slate-100';

  return 'text-slate-600 bg-slate-100';
}

/**
 * Get border color for expiration warning
 * Returns border color class based on days remaining
 */
export function getExpirationBorderColor(expirationDate: string | null): string {
  if (!expirationDate) return 'border-slate-200';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiry = new Date(expirationDate);
  expiry.setHours(0, 0, 0, 0);

  const daysLeft = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) {
    return 'border-red-200'; // Expired
  } else if (daysLeft <= 7) {
    return 'border-amber-200'; // Warning
  } else if (daysLeft <= 30) {
    return 'border-yellow-200'; // Caution
  }

  return 'border-slate-200'; // Normal
}

/**
 * Get background color for expiration warning
 * Returns background color class based on days remaining
 */
export function getExpirationBackgroundColor(expirationDate: string | null): string {
  if (!expirationDate) return 'bg-white';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiry = new Date(expirationDate);
  expiry.setHours(0, 0, 0, 0);

  const daysLeft = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) {
    return 'bg-red-50'; // Expired
  } else if (daysLeft <= 7) {
    return 'bg-amber-50'; // Warning
  } else if (daysLeft <= 30) {
    return 'bg-yellow-50'; // Caution
  }

  return 'bg-white'; // Normal
}

/**
 * Check if subscription has expired
 */
export function isExpired(expirationDate: string | null): boolean {
  if (!expirationDate) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiry = new Date(expirationDate);
  expiry.setHours(0, 0, 0, 0);

  return expiry.getTime() < today.getTime();
}

/**
 * Check if subscription is expiring soon (within 7 days)
 */
export function isExpiringSoon(expirationDate: string | null): boolean {
  if (!expirationDate) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiry = new Date(expirationDate);
  expiry.setHours(0, 0, 0, 0);

  const daysLeft = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return daysLeft <= 7 && daysLeft >= 0;
}
