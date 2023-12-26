import Link from 'next/link'
import styles from './styles.module.css'

export default function LinkInText({
  href,
  children
}: {
  href: "/" | "/guid",
  children: React.ReactNode
}) {
  return (
    <Link href={href} className={styles.link} >
      {children}
    </Link>
  )
}