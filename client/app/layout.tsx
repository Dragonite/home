import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar";
import { Providers } from "@/components/providers";
import { getGlobalConfig } from "@/lib/api/config";
import { ConfigProvider } from "@/contexts/global-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Haolin Wu - Software & Data Engineer',
  description: 'Portfolio of Haolin Wu, Software & Data Engineer specializing in full-stack development and data solutions.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalConfig = await getGlobalConfig();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Providers>
          <ConfigProvider config={globalConfig}>
            <NavigationBar />
            <main className="pt-32">
              {children}
            </main>
          </ConfigProvider>
        </Providers>
      </body>
    </html>
  );
}