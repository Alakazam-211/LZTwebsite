import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LZTEK",
  description: "LZTEK Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function ScannerPrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-heading-48 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-copy-14">
          <section>
            <h2 className="text-heading-24 mb-4">Introduction</h2>
            <p>
              LZTEK, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal data such as name, email address, phone number, and mailing address</li>
              <li>Usage data including information about how you access and use our website</li>
              <li>Device information such as IP address, browser type, and operating system</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist us in operating our website and conducting our business</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children under 18. If you become aware that a child has provided us with personal 
              information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>LZTEK, LLC</strong><br />
              Email: <a href="mailto:inquiry@lztek.io" className="text-blue-600 hover:underline">inquiry@lztek.io</a><br />
              Website: <a href="https://www.lztek.io" className="text-blue-600 hover:underline">www.lztek.io</a>
            </p>
          </section>

          <section className="pt-4 border-t">
            <p className="text-copy-12 text-gray-500">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
