import { Analytics, getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react';
import { app } from '../../firebaseConfig';

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const analyticsInstance: Analytics = getAnalytics(app);
      setAnalytics(analyticsInstance);
    }
  }, []);

  return analytics;
};