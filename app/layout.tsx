import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | E-Commerce Shop',
    default: 'E-Commerce Shop',
  },
  description: 'An e-commerce shop built with Next.js, Tailwind CSS, and shadcn/ui components.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
