'use client'

import CopyButton from '@/components/CopyButton'
import styles from './styles.module.css'
import LinkInText from '@/components/LinkInText'
import React, { useState } from 'react'

export default function Guid() {
  const [message, setMessage] = useState<string>("")
  const encodedMessage = encodeURI(message).replace("%0A", "_")

  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        URLで年賀状を送ろう！
      </h1>
      <ul className={styles.guideContainer}>
        <li className={styles.listItem}>
          <p className={styles.text}>
            メッセージを入力しましょう！
          </p>
          <textarea
            value={message}
            placeholder="メッセージを入力"
            onChange={onChangeMessage}
            className={styles.textarea}
          />
        </li>
        <li className={styles.listItem}>
          <p className={styles.text}>
            URLをコピーして年賀状を送信しましょう！
          </p>
          <div className={styles.text}>
            <LinkInText href={`https://newyearscard.moyotsukai.dev/?m=${encodedMessage}`}>
              {`https://newyearscard.moyotsukai.dev/?m=${encodedMessage}`}
            </LinkInText>
          </div>
          <div className={styles.text}>
            <CopyButton text={`https://newyearscard.moyotsukai.dev/?m=${encodedMessage}`} />
          </div>
        </li>
      </ul>
      <div className={styles.divider} />
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          メッセージに含まれる絵文字によって背景のデザインが変化します。
          <br />
          ・該当なし→スタイル1
          <br />
          ・🤗→スタイル2
          <br />
          ・🥰→スタイル3
          <br />
          ・😄→スタイル4
        </li>
        <li className={styles.listItem}>
          例）
          <br />
          <p className={styles.text}>
            <LinkInText href={`https://newyearscard.moyotsukai.dev/?m=${"あけましておめでとう！"}`}>
              {`https://newyearscard.moyotsukai.dev/?m=${"あけましておめでとう！"}`}
            </LinkInText>
          </p>
          <p className={styles.text}>
            <LinkInText href={`https://newyearscard.moyotsukai.dev/?m=${"今年もよろしく🤗"}`}>
              {`https://newyearscard.moyotsukai.dev/?m=${"今年もよろしく🤗"}`}
            </LinkInText>
          </p>
          <p className={styles.text}>
            <LinkInText href={`https://newyearscard.moyotsukai.dev/?m=${"今年もよろしくね🥰"}`}>
              {`https://newyearscard.moyotsukai.dev/?m=${"今年もよろしくね🥰"}`}
            </LinkInText>
          </p>
          <p className={styles.text}>
            <LinkInText href={`https://newyearscard.moyotsukai.dev/?m=${"今年もよろしくお願いいたします😄"}`}>
              {`https://newyearscard.moyotsukai.dev/?m=${"今年もよろしくお願いいたします😄"}`}
            </LinkInText>
          </p>
        </li>
      </ul>
    </div>
  )
}