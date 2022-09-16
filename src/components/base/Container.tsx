import Head from "next/head"

export default function Container({
  children,
  wrap,
  summaryLarge,
  title,
  description,
  image,
}: ContainerProps) {
  const wrapContent = wrap ? "wrap-contents" : undefined
  const cardSummary = summaryLarge ? "summary_large_image" : "summary"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content={cardSummary} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <main id={wrapContent}>{children}</main>
    </>
  )
}
