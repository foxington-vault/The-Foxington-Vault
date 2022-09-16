import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./CurtainScroll.module.scss"
import GameCarouselContents from "contents/GameCarouselContents"

export default function CurtainScroll() {
  return (
    <div id={styles.wrapper}>
      <div className={styles.root}>
        {GameCarouselContents.map((items) => (
          <CurtainScrollItem
            key={items.title}
            title={items.title}
            image={items.image}
            description={items.description}
						// active
          />
        ))}
      </div>
    </div>
  )
}

interface CurtainItemProps {
  title: string
  image: string
  description: string
  active?: boolean
}

export function CurtainScrollItem({
  title,
  image,
  description,
  active,
}: CurtainItemProps) {
  const [hover, setHover] = useState(false)
  const isActive =
    hover || active ? styles["item-active"].toString() : styles.item.toString()

  useEffect(() => {}, [])

  return (
    <div
      className={isActive}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={title}
    >
      <Image layout="fill" src={image} alt={description} priority />
      <div className={styles.info}>
				<h3>{title}</h3>
        <p>{description}</p>
        <Link href="#">
					More
				</Link>
      </div>
    </div>
  )
}
