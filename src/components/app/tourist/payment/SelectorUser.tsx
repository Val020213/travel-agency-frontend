'use client';

import { useEffect, useState } from 'react';
import { tourist } from '@/lib/entities';
import { FetchTourists } from '@/lib/data/data';

export function SelectUser() {
  const [tourist, setTourist] = useState<tourist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    FetchTourists().then((tourists) => {
      setTourist(tourists);
    });
    setLoading(false);
  }, [loading]);

  return (
    <div>
      <select
        name='touristID'
        className='w-full p-2 border border-gray-300 dark:border-gray-400 rounded-md'
      >
        {tourist.map((tourist) => (
          <option key={tourist.id} value={tourist.id}>
            {tourist.username}
          </option>
        ))}
      </select>
    </div>
  );
}
