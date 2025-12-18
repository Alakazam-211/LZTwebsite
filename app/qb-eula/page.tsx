import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quickbase EULA | LZTEK",
  description: "Quickbase End User License Agreement - LZTEK.",
};

export default function QbEula() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-heading-48 mb-8">End User License Agreement</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-copy-14">
          <section>
            <h2 className="text-heading-24 mb-4">Introduction</h2>
            <p>
              This End User License Agreement (&quot;EULA&quot;) is a legal agreement between you and LZTEK, LLC 
              (&quot;LZTEK,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) for the use of our Quickbase 
              software applications and services.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">License Grant</h2>
            <p>
              Subject to your compliance with the terms of this EULA, LZTEK grants you a limited, non-exclusive, 
              non-transferable license to access and use our software applications for your internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Restrictions</h2>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, modify, or create derivative works of the software</li>
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Rent, lease, lend, or sublicense the software</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>Use the software for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Intellectual Property</h2>
            <p>
              The software and all intellectual property rights therein are and remain the exclusive property of LZTEK 
              and its licensors. This EULA does not grant you any rights to use LZTEK&apos;s trademarks, service marks, 
              or logos.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Termination</h2>
            <p>
              This EULA is effective until terminated. Your rights under this EULA will terminate automatically without 
              notice if you fail to comply with any of its terms. Upon termination, you must cease all use of the software 
              and destroy all copies in your possession.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Disclaimer of Warranties</h2>
            <p>
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
              BUT NOT LIMITED TO THE IMPLIED WARRANTIES of MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND 
              NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LZTEK BE LIABLE FOR ANY SPECIAL, 
              INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER ARISING OUT OF OR RELATED TO YOUR USE OR 
              INABILITY TO USE THE SOFTWARE.
            </p>
          </section>

          <section>
            <h2 className="text-heading-24 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this EULA, please contact us at:
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
