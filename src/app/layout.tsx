import type { Metadata } from 'next'
import { Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import styles from './styles.module.css'
import Footer from '@/components/Footer'

const noto = Noto_Serif_JP({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: '謹賀新年'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${noto.className} ${styles.container}`}>
        <main className={styles.content}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
