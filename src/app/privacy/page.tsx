
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Nexa Consultancy',
  description: 'Learn how Nexa Consultancy collects, uses, and protects your personal data when you use our website and services.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto py-16 md:py-24 text-center">
            <div className="inline-block bg-primary-foreground/10 p-4 rounded-full mb-4">
                <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
              Your privacy is important to us.
            </p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
            <p className="lead text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>Nexa Consultancy ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <h3>Personal Data</h3>
            <p>Personally identifiable information, such as your name, email address, and telephone number, and other details that you voluntarily give to us when you fill out a contact form or other forms on our website.</p>
            <h3>Derivative Data</h3>
            <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. Our chatbot functionality may also store conversation history to improve user experience.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
                <li>Respond to your inquiries and provide you with information about our services.</li>
                <li>Send you marketing and promotional communications, with your consent.</li>
                <li>Improve our website, services, and marketing efforts.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>We do not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We may share information we have collected about you in certain situations:</p>
            <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including email delivery (e.g., Resend), hosting services, and AI-powered services (e.g. for our chatbot).</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>We may use cookies and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.</p>
            
            <h2>6. Your Rights</h2>
            <p>You have the right to request access to the personal data we hold about you, to request that we rectify or erase it, and to object to our processing of it. To make such a request, please use the contact information provided below.</p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            
            <h2>8. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>
                <strong>Nexa Consultancy</strong><br />
                Email: <a href="mailto:hello@nexaconsultancy.com">hello@nexaconsultancy.com</a>
            </p>
        </div>
      </div>
    </>
  );
}
