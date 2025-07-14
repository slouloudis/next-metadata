import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// to create metadata, you just need to export a constant called 'metadata'
// if you don't create more of these objects per page, it will just default to this page
export const metadata = {
  title: "Userz",
  description: "Userz is the best social media app around. Get to know other Uszers now!",
  openGraph: {
    title: 'Userz on openGraph',
    description: 'This is an opengraph description',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h2>Userz</h2>
        {children}
      </body>
    </html>
  );
}
