import './globals.css';

export const metadata = {
  title: 'Orthotix',
  description: 'Physiotherapy Equipment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
