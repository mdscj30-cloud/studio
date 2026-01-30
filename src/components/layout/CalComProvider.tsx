'use client';

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

export function CalComProvider() {
    useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#5A2D82"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);
  
  return null;
}
