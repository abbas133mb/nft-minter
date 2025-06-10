'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { polygon } from '@wagmi/core/chains'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const inter = Inter({ subsets: ['latin'] })

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'My NFT Airdrop',
  projectId: 'YOUR_PROJECT_ID',
  chains,
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
