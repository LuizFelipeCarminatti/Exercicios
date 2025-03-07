import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>CRUD Next.js</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
