"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Navigate to a specific page on load
    router.push('/foods');
  }, []);

  return (
    <div>
      {/* Home Page */}
    </div>
  )
};

export default HomePage;
