import LinkInText from '../LinkInText'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.link}>
        <LinkInText href="/guide">
          年賀状を送る
        </LinkInText>
      </div>
      <div className={styles.copy}>
        &copy; 2023 Shintaro Aoi
      </div>
    </footer>
  )
}