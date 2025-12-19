import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constrx | LZTEK",
  description: "Constrx - Construction management software by LZTEK.",
};

export default function Constrx() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-heading-48 mb-8">Constrx</h1>
        <p className="text-copy-18 mb-6">
          Construction management software solution by LZTEK.
        </p>
        <p className="text-copy-14">
          For more information about Constrx, please contact us at{" "}
          <a href="mailto:inquiry@lztek.io" className="text-blue-600 hover:underline">
            inquiry@lztek.io
          </a>
        </p>
      </div>
    </div>
  );
}

