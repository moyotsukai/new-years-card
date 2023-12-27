'use client'

import React, { useState } from 'react'
import styles from './styles.module.css'

export default function CopyButton({
  text
}: {
  text: string
}) {
  const [title, setTitle] = useState<"URLをコピー" | "コピーしました">("URLをコピー")

  const onClick = () => {
    navigator.clipboard?.writeText(text)
    setTitle("コピーしました")
    setTimeout(() => {
      setTitle("URLをコピー")
    }, 1000)
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  )

}
