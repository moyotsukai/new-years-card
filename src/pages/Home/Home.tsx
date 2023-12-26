import LinkInText from '@/components/LinkInText'
import styles from './styles.module.css'
import Message from "@/components/Message"

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        謹賀新年
      </h1>
      <Message />
    </div>
  )
}