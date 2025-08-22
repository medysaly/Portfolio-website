import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mehdi Salhi - Cloud Engineer & Software Developer",
  description: "Portfolio of Mehdi Salhi, a passionate Cloud Engineer and Software Developer specializing in scalable solutions, cloud architecture, and modern web technologies.",
  keywords: ["Cloud Engineer", "Software Developer", "AWS", "TypeScript", "React", "Next.js", "DevOps"],
  authors: [{ name: "Mehdi Salhi" }],
  creator: "Mehdi Salhi",
  publisher: "Mehdi Salhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mehdisalhi.dev"), // Update with your actual domain
  openGraph: {
    title: "Mehdi Salhi - Cloud Engineer & Software Developer",
    description: "Portfolio showcasing cloud engineering projects, software development work, and technical blog posts.",
    url: "https://mehdisalhi.dev",
    siteName: "Mehdi Salhi Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Mehdi Salhi - Cloud Engineer & Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Salhi - Cloud Engineer & Software Developer",
    description: "Portfolio showcasing cloud engineering projects, software development work, and technical blog posts.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-white font-sans antialiased">
        {/* Matrix Background Effect */}
        <div className="matrix-bg" aria-hidden="true" />
        
        {/* Main Layout */}
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>

        {/* Scroll to top button could be added here */}
      </body>
    </html>
  );
}
