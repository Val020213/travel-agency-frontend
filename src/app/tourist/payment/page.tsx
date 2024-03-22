'use client';
import { useSearchParams } from 'next/navigation';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';

export default function Page() {
  const searchParams = useSearchParams();
  const offerType = searchParams.get('offerType');
  const offerId = searchParams.get('offerId');

  return (<div><ProgressManager step={3} />

  </div>
  );
}
