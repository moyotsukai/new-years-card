'use client'

import Background from '@/components/Background'
import styles from './styles.module.css'
import Message from "@/components/Message"
import { useSearchParams } from 'next/navigation'
import { backgroundStyle } from '@/feature/cardStyle'

export default function Home() {
  const searchParams = useSearchParams()
  const message = searchParams?.get("m")
  const style = backgroundStyle(message ?? "")
  const isTextColorWhite = style === 1

  return (
    <div className={isTextColorWhite ? styles.textWhite : styles.textBlack}>
      <h1 className={styles.title}>
        謹賀新年
      </h1>
      <Message />
      <Background style={style} />
    </div>
  )
}