import './globals.css'

import { Web3Modal } from '../context/web3modal'

export const metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal'
}

export default function RootLayout({ children } : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  )
}