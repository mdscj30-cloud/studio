
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions | N consulting',
  description: 'Read the terms and conditions for using the N consulting website and services.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
            <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
                <FileText className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
              Please read these terms carefully before using our services.
            </p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
            <p className="lead text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>Welcome to N consulting. These terms and conditions outline the rules and regulations for the use of N consulting's Website, located at this domain.</p>
            <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use N consulting if you do not agree to all of the terms and conditions stated on this page.</p>

            <h2>1. Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, N consulting and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>

            <h2>2. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
                <li>Publishing any Website material in any other media;</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                <li>Publicly performing and/or showing any Website material;</li>
                <li>Using this Website in any way that is or may be damaging to this Website;</li>
                <li>Using this Website in any way that impacts user access to this Website;</li>
                <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
            </ul>

            <h2>3. No Warranties</h2>
            <p>This Website is provided "as is," with all faults, and N consulting expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>

            <h2>4. Limitation of Liability</h2>
            <p>In no event shall N consulting, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. N consulting, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.</p>

            <h2>5. Indemnification</h2>
            <p>You hereby indemnify to the fullest extent N consulting from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

            <h2>6. Severability</h2>
            <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>

            <h2>7. Variation of Terms</h2>
            <p>N consulting is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>

            <h2>8. Governing Law & Jurisdiction</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.</p>
        </div>
      </div>
    </>
  );
}
