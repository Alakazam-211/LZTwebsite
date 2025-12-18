import type { Metadata } from "next";
import GeistCard from "@/components/GeistCard";

export const metadata: Metadata = {
  title: "Contact Sightline | LZTEK",
  description: "Contact our sales team or get support for Sightline. We're here to help.",
};

export default function SightlineContact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-heading-48 mb-12 text-center">We would love to hear from you.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Sales */}
          <GeistCard className="p-8 text-center">
            <h2 className="text-heading-24 mb-6">Contact Sales</h2>
            <p className="text-copy-14 mb-6 text-gray-600">
              Interested in Sightline? Contact our sales team to find the perfect plan for your business.
            </p>
            <a
              href="mailto:inquiry@lztek.io?subject=I'm interested in Sightline."
              className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Email Sales
            </a>
          </GeistCard>

          {/* Contact Support */}
          <GeistCard className="p-8 text-center">
            <h2 className="text-heading-24 mb-6">Contact Support</h2>
            <p className="text-copy-14 mb-6 text-gray-600">
              Need help with Sightline? Our support team is here to assist you with any questions or issues.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:support@lztek.io?subject=I'd like some help with ..."
                className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors w-full"
              >
                Email Support
              </a>
              <a
                href="https://discord.gg/zNCZnKNXEv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-black text-black hover:bg-gray-100 transition-colors w-full"
              >
                Join Discord
              </a>
            </div>
          </GeistCard>
        </div>
      </div>
    </div>
  );
}
