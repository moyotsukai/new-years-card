import styles from './styles.module.css'

export default function Background({
  style
}: {
  style: number
}) {
  const backgroundStyle = style === 1 ? styles.style1
    : style === 2 ? styles.style2
      : style === 3 ? styles.style3
        : style === 4 ? styles.style4
          : styles.style1

  return (
    <div className={`${styles.background} ${backgroundStyle}`} />
  )
}