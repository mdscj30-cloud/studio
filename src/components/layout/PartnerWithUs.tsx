'use client';

import { useEffect } from 'react';

export function RequestConsultation() {
  useEffect(() => {
    const scriptId = 'hubspot-form-script';
    // Check if the script is already on the page
    if (document.getElementById(scriptId)) {
      const existingScript = document.getElementById(scriptId) as HTMLScriptElement;
      if (existingScript.src === 'https://js-na2.hsforms.net/forms/embed/244990625.js') {
        return;
      }
      // If a different hubspot script is loaded, remove it.
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://js-na2.hsforms.net/forms/embed/244990625.js';
    script.defer = true;

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="bg-muted/50 py-16 md:py-24 -mx-container-padding px-container-padding">
        <div className="container">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary">Request a Consultation</h2>
                <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
                    Ready to discuss your startup's future? Fill out the form for a confidential, no-obligation consultation.
                </p>
            </div>
            <div className='max-w-2xl mx-auto mt-8'>
                <div 
                  className="hs-form-frame" 
                  data-region="na2" 
                  data-portal-id="244990625"
                  data-form-id="238fcf1c-3a27-44fc-814e-0ae1e4248355"
                ></div>
            </div>
        </div>
    </section>
  );
}
