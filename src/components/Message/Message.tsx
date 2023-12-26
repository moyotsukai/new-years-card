'use client'

import BreakedText from '../BreakedText'
import styles from './styles.module.css'
import { useSearchParams } from 'next/navigation'

export default function Message() {

  const searchParams = useSearchParams()
  const message = searchParams.get("m")

  return (
    <h2 className={styles.message}>
      <BreakedText text={message ?? ""} rule={/(_)/} />
    </h2>
  )
}