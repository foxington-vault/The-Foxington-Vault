import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./CurtainScroll.module.scss"

export default function CurtainScroll() {
  return (
    <div id={styles.wrapper}>
      <div className={styles.root}>
        <CurtainScrollItem
          image="https://res.cloudinary.com/skepfusky-dookie/image/upload/v1663249654/cld-sample.jpg"
          description="Description"
        />
        <CurtainScrollItem
          image="https://res.cloudinary.com/skepfusky-dookie/image/upload/v1663249654/cld-sample-2.jpg"
          description="Description"
        />
        <CurtainScrollItem
          image="https://res.cloudinary.com/skepfusky-dookie/image/upload/v1663249654/cld-sample-5.jpg"
          description="Description"
        />
        <CurtainScrollItem
          image="https://res.cloudinary.com/skepfusky-dookie/image/upload/v1663249654/cld-sample-4.jpg"
          description="Description"
        />
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
        <p>{description}</p>
        <div>View on wikipedia, about, game links</div>
      </div>
    </div>
  )
}
