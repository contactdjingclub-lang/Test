import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daybreak Coffee — Make room for a better morning',
  description: 'Thoughtfully sourced, freshly roasted coffee for slower, brighter mornings.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
