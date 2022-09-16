import Link from "next/link"
import ReactMarkdown from "react-markdown"
import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className="mx-auto max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-10 ">
        <div
          className="grid grid-flow-col gap-x-5"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          <div role="list" className="flex flex-col">
            <h3>Official links</h3>
          </div>
          <div role="list" className="flex flex-col">
            <h3>Community</h3>
            <Link href="#" passHref>
              <a>
                <span>logo</span>
                <span>Link</span>
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-y-2.5">
            <h3>Gams</h3>
          </div>
        </div>
        <hr className="my-3 border-orange-400" />
        <div className="grid grid-flow-col gap-10 text-sm">
          <div className="flex flex-col gap-y-2.5">
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} className="underline text-orange-400"></a>
                ),
              }}
            >
              **DISCLAIMER: The Foxington Vault** is an open source archival project created
              by [@skepfuskyjs](https://twitter.com/skepfuskyjs) as an effort to
              archive any _Lucky's Tale_ IP by Playful Studios. TFV has no forms
              of affiliation, association, nor endorsement by Playful by any
              means to provide original sources but does cite sources from a
              third-party.
            </ReactMarkdown>
            <ReactMarkdown>
              TFV also does not own the rights to any of the contents of this
              website and is mainly used as informational and archival purposes
              only. All community-generated content goes to their respective
              owners.
            </ReactMarkdown>
          </div>
          <p>{`© 2021-${new Date().getFullYear()} The Foxington Vault`}</p>
        </div>
      </div>
    </footer>
  )
}
