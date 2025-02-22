import type React from "react"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF0000" />
        <meta httpEquiv="X-Frame-Options" content="ALLOWALL" />
        <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
        <title>Airtel 10GB Free Data Giveaway</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

