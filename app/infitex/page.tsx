import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infitex | LZTEK",
  description: "Infitex - Software solution by LZTEK.",
};

export default function Infitex() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-heading-48 mb-8">Infitex</h1>
        <p className="text-copy-18 mb-6">
          Infitex software solution by LZTEK.
        </p>
        <p className="text-copy-14">
          For more information about Infitex, please contact us at{" "}
          <a href="mailto:inquiry@lztek.io" className="text-blue-600 hover:underline">
            inquiry@lztek.io
          </a>
        </p>
      </div>
    </div>
  );
}
