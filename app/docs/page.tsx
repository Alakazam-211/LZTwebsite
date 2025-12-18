import GeistCard from '@/components/GeistCard';

export default function Docs() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl grid-container relative">
        <div className="text-center mb-12">
          <h1 className="text-heading-48 mb-4">Documentation</h1>
          <p className="text-copy-18">
            Documentation and resources for our hosting services.
          </p>
        </div>

        <GeistCard className="p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-24 mb-4">Getting Started</h2>
              <p className="text-copy-14 mb-4">
                Welcome to LZTEK hosting services documentation. This section will be updated 
                with guides and resources to help you get started with our hosting platform.
              </p>
            </div>

            <div>
              <h3 className="text-heading-20 mb-3">Supported Platforms</h3>
              <ul className="list-disc list-inside space-y-2 text-copy-14">
                <li>Vercel - Modern web deployment</li>
                <li>Netlify - JAMstack hosting</li>
                <li>Capacitor - Cross-platform mobile apps</li>
                <li>Supabase - Backend as a service</li>
                <li>Firebase - Google's mobile platform</li>
              </ul>
            </div>

            <div>
              <h3 className="text-heading-20 mb-3">App Store Deployment</h3>
              <p className="text-copy-14">
                We support deployment to both Apple App Store and Google Play Store. 
                Contact us to learn more about our mobile app hosting services.
              </p>
            </div>
          </div>
        </GeistCard>
      </div>
    </div>
  );
}
