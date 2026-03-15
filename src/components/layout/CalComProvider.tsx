'use client';

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function CalComProvider() {
    useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#5A2D82"}},"hideEventTypeDetails":false,"layout":"month_view"});

      // Track booking successful as a GA4 conversion
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'booking_successful', {
              event_category: 'conversion',
              event_label: 'Discovery Call Booked',
            });
          }
        },
      });

      // Track when Cal.com modal opens (engagement signal)
      cal("on", {
        action: "linkReady",
        callback: () => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'booking_intent', {
              event_category: 'engagement',
              event_label: 'Booking Modal Opened',
            });
          }
        },
      });
    })();
  }, []);

  return null;
}
