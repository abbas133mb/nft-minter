'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultConfig,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit'

import { WagmiProvider } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

// حتماً projectId معتبر از WalletConnect بگیر و اینجا بذار
const config = getDefaultConfig({
  appName: 'My NFT Airdrop',
  projectId: 'YOUR_PROJECT_ID', // ← این را از WalletConnect بگیر
  chains: [polygon],
  ssr: true,
})

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}
