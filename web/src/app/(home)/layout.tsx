import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Laine - Home',
  description: 'All-in-One School Management Solution.',
};

export default function layout({ children }: Readonly<{children: React.ReactNode}>) {
  return children
}
