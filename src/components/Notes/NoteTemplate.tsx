interface NoteTemplateProps extends LayoutProps {
  title: string
}

export function NoteTemplate(props: NoteTemplateProps) {
  return <div id="toast">{props.children}</div>
}
