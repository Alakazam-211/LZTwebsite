import type { Metadata } from "next";
import parse from "html-react-parser";

export const metadata: Metadata = {
  title: "End User License Agreement | LZTEK",
  description: "End User License Agreement - LZTEK",
};

export default function QbEula() {
  const contentHtml = `<main class="PAGE_SECTIONSqhi7k c1rIl3" data-main-content-parent="true" id="PAGE_SECTIONSqhi7k"><!--$--><section><div><div></div><div></div></div><div><!--$--><div><h1>​</h1>
<h1><strong>End User License Agreement - LZTEK Invoice Reconciliation App</strong><br/>
<br/>
Last Updated: October 9, 2025<br/>
<br/>
<strong>1. Agreement</strong><br/>
This End User License Agreement ("Agreement") is between LZTEK, LLC ("Company") and you ("User") for the LZTEK Invoice Reconciliation App ("App").<br/>
<br/>
<strong>2. Purpose</strong><br/>
This App is designed for internal use by LZTEK, LLC to reconcile QuickBooks payment transactions with Quickbase invoices.<br/>
<br/>
<strong>3. License Grant</strong><br/>
The Company grants you a limited, non-exclusive, non-transferable license to use this App solely for the purpose of internal invoice reconciliation.<br/>
<br/>
<strong>4. Permitted Use</strong><br/>
- Read-only access to QuickBooks payment and transaction data<br/>
- Automated matching of payments to internal invoices<br/>
- Internal financial reconciliation and reporting<br/>
<br/>
<strong>5. Data Access</strong><br/>
By authorizing this App, you grant permission to:<br/>
- Access QuickBooks payment transaction data<br/>
- Read account information necessary for reconciliation<br/>
- Store transaction data locally for reconciliation purposes<br/>
<br/>
<strong>6. Restrictions</strong><br/>
You may not:<br/>
- Use this App for any purpose other than internal invoice reconciliation<br/>
- Share App credentials with unauthorized parties<br/>
- Modify or reverse-engineer the App<br/>
<br/>
<strong>7. Data Security</strong><br/>
All data accessed through this App is:<br/>
- Stored securely on internal systems only<br/>
- Protected with industry-standard encryption<br/>
- Never shared with third parties<br/>
- Used solely for invoice reconciliation<br/>
<br/>
<strong>8. Termination</strong><br/>
You may terminate this agreement at any time by revoking the App's access in QuickBooks and deleting local credentials.<br/>
<br/>
<strong>9. No Warranty</strong><br/>
This App is provided "as is" without warranty of any kind.<br/>
<br/>
<strong>10. Contact</strong><br/>
For questions about this Agreement, contact: support@lztek.io</h1></div><!--/$--></div></section><!--/$--></main>`;
  
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

