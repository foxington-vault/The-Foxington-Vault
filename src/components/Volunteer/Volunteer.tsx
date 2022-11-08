import ReactMarkdown from "react-markdown"

interface VolunteerProps {
  name?: string
  img?: string
	children?: string
}

export default function Volunteer(props: VolunteerProps) {
  return (
    <div id="volunteer-item" className="p-6 flex flex-col items-center gap-4 border border-orange-500 rounded-md">
      <div className="aspect-square w-[10rem]">
        <div className="relative w-full h-full">img component</div>
      </div>
      <article>
        <strong role="heading" aria-level={2}>
          {props.name}
        </strong>
        <ReactMarkdown>{props.children ?? ""}</ReactMarkdown>
      </article>
    </div>
  )
}
