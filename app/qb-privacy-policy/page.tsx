import type { Metadata } from "next";
import parse from "html-react-parser";

export const metadata: Metadata = {
  title: "Privacy Policy | LZTEK",
  description: "Privacy Policy - LZTEK",
};

export default function QbPrivacyPolicy() {
  const contentHtml = `<main class="PAGE_SECTIONSt99t6 c1rIl3" data-main-content-parent="true" id="PAGE_SECTIONSt99t6"><!--$--><section><div><div></div><div></div></div><div><!--$--><div><h1><br/>
<strong>Privacy Policy - LZTEK Invoice Reconciliation App</strong><br/>
<br/>
Last Updated: October 9, 2025<br/>
<br/>
<strong>Overview</strong><br/>
This Privacy Policy describes how LZTEK Invoice Reconciliation App ("App") collects, uses, and protects your QuickBooks financial data.<br/>
<br/>
<strong>What We Collect</strong><br/>
The App accesses the following from your QuickBooks account:<br/>
- Payment transaction records<br/>
- Customer payment information<br/>
- Invoice-related transaction data<br/>
- Account identifiers for reconciliation<br/>
<br/>
<strong>How We Use Your Data</strong><br/>
Your data is used exclusively for:<br/>
- Invoice Reconciliation: Matching QuickBooks payments to internal Quickbase invoices<br/>
- Financial Reporting: Internal accounting and financial tracking<br/>
- Record Keeping: Maintaining accurate payment records<br/>
<br/>
<strong>Data Storage</strong><br/>
- Location: All data is stored locally on secure internal systems<br/>
- Duration: Data is retained as long as necessary for accounting and reconciliation purposes<br/>
- Security: Protected with encryption and access controls<br/>
<br/>
<strong>Data Sharing</strong><br/>
We DO NOT:<br/>
- Share your data with third parties<br/>
- Sell your information<br/>
- Use your data for marketing<br/>
- Transfer data outside of internal systems<br/>
<br/>
<strong>Your Rights</strong><br/>
You have the right to:<br/>
- Revoke App access at any time through QuickBooks settings<br/>
- Request deletion of stored data<br/>
- Review what data has been accessed<br/>
<br/>
<strong>Third-Party Services</strong><br/>
This App integrates with:<br/>
- QuickBooks: For accessing payment data<br/>
- Quickbase: For storing and matching invoice records<br/>
<br/>
Each service has its own privacy policy that also applies.<br/>
<br/>
<strong>Data Security</strong><br/>
We implement:<br/>
- Secure credential storage<br/>
- Encrypted data transmission<br/>
- Access control and authentication<br/>
- Regular security reviews<br/>
<br/>
<strong>Children's Privacy</strong><br/>
This App is not intended for use by anyone under 18 years of age.<br/>
<br/>
<strong>Changes to This Policy</strong><br/>
We may update this Privacy Policy from time to time. Continued use of the App after changes constitutes acceptance.<br/>
<br/>
<strong>Contact Information</strong><br/>
For privacy questions or concerns, contact:<br/>
- Email: [your email or privacy@lztek.com]<br/>
- Company: LZTEK, LLC<br/>
<br/>
<strong>Compliance</strong><br/>
This App operates in compliance with applicable data protection laws and QuickBooks API Terms of Service.<br/>
 <br/>
Email: support@lztek.io</h1></div><!--/$--></div></section><!--/$--></main>`;
  
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-6">
          {parse(contentHtml)}
        </div>
      </div>
    </div>
  );
}

