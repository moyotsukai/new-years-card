import styles from './styles.module.css'

export default function Guid() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        このサイトの使い方
      </h1>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          URLを送信して年賀状を送りましょう！
        </li>
        <li className={styles.listItem}>
          URL末尾の文字列を変えることでメッセージを自由に変更できます。
          <br /><br />
          例)
          <br />
          https://moyotsukai.dev/newyearscard?m=今年もよろしく！
        </li>
        <li className={styles.listItem}>
          "_"(アンダーバー)で改行できます。
        </li>
      </ul>
    </div>
  )
}