import CopyButton from '@/components/CopyButton'
import styles from './styles.module.css'
import LinkInText from '@/components/LinkInText'

export default function Guid() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        使い方
      </h1>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          URLを送信して年賀状を送りましょう！
          <br />
          例)
          <br />
          <LinkInText href="https://newyearscard.moyotsukai.dev/?m=今年もよろしく！😄">
            https://newyearscard.moyotsukai.dev/?m=今年もよろしく！😄
          </LinkInText>
          <div>
            <CopyButton text="https://newyearscard.moyotsukai.dev/?m=%E4%BB%8A%E5%B9%B4%E3%82%82%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%EF%BC%81%F0%9F%98%84" />
          </div>
        </li>
        <li className={styles.listItem}>
          URL末尾の文字列を変えることでメッセージを自由に変更できます。
        </li>
        <li className={styles.listItem}>
          &quot;_&quot;(アンダーバー)で改行できます。
        </li>
        <li className={styles.listItem}>
          メッセージに含まれる絵文字によって背景が変化します。
          <br />
          該当なし→スタイル1
          <br />
          🤗→スタイル2
          <br />
          🥰→スタイル3
          <br />
          😄→スタイル4
        </li>
      </ul>
    </div>
  )
}