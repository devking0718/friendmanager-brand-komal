import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FriendManager',
  description: 'Turn keys into conversations instantly',
  image: '/assets/metatag.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://friend-manager.netlify.app/" />
        <meta property="og:title" content="FriendManager" />
        <meta property="og:description" content="Turn keys into conversations instantly" />
        <meta property="og:image" content="/assets/metatags.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://friend-manager.netlify.app/" />
        <meta property="twitter:title" content="FriendManager" />
        <meta property="twitter:description" content="Turn keys into conversations instantly" />
        <meta property="twitter:image" content="/assets/metatags.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
