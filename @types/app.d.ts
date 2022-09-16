declare interface LayoutProps {
	children?: React.ReactElement
}

declare interface ContainerProps extends LayoutProps {
  wrap?: boolean
  summaryLarge?: boolean
  title?: string
  description?: string
  image?: string
}
