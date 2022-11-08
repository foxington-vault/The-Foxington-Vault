import ReactMarkdown from "react-markdown"
import Container from "@/components/Base/Container"
import Volunteer from "@/components/Volunteer"
import faq from "./faq"

export default function Home() {
  return (
    <Container
      title="Coming Soon | The Foxington Vault: A Lucky's Tale Archive Project"
      description="..."
    >
      <section>images</section>
      <LandingSection heading="About this project">
        <p>
          The <strong>Foxington Vault</strong> is a one-person preservation and
          archival project created by skepfusky, a collective effort for
          archiving the entire <em>Lucky's Tale</em> franchise created by
          Playful Studios in 2014.
        </p>
        <p>
          I decided to refresh this said project after a year of self-taught web
          development; starting to pile as much as I could initially find before
          opening this website!
        </p>
        <p>
          My goal is to gather as much substantial and public information about
          its game, mechanics, guides, and coverage — including the inner
          workings of the game, decompiling its assets, models, and sounds from
          its games.
        </p>
        <p>
          Initially launched as <em>The Lucky Treehouse</em> - noting from one
          of the moderators from the official Discord server; fearing that there
          would be a possible first-class action lawsuit from Nintendo for
          having the word "treehouse" from the name, I quickly abandoned it.
        </p>
      </LandingSection>
      <LandingSection heading="Why?">
        <p>
          I believe that any kind of media preservation is vital for any work
          out there, if it goes unnoticed for a long time, then it's considered
          lost media.
        </p>
        <p>
          Playful clearly puts the amount of dedication, love, and work they put
          to this franchise and I'm one of the <em>lucky</em> ones (pun
          intended) who care about the effort they put and decide to document
          and preserve for their token of their hard work.
        </p>
      </LandingSection>
      <LandingSection heading="Archive contents">
        <p>
          There are rules on what's going on in the archive and what's not. Due
          to my constant paranoia on the legal mumbo jumbo, things are subject
          to change over time but here's what I'm currently accepting these
          items from the archive:
        </p>
        <ul className="grid gap-3 list-disc list-inside">
          <li>Public coverage of the games themselves</li>
          <li>General info about the game: characters, lore, etc.</li>
          <li>
            The team and development behind <em>Lucky's Tale</em>
          </li>
          <li>
            Images of physical items, this includes: purchased merchandise,
            physical scanned game copy (optionally any game platforms and/or
            regions etc.) — I'm aiming for any high-quality scans as much as
            possible
          </li>
          <li>
            Written guides — with the connections I have, I can grant permission
            to use and include them in the archive
          </li>
          <li>
            Audio bites and game graphics using certain Unity decompiler(s)
          </li>
          <li>Promotional and other content provided on the media kits</li>
        </ul>
        <p>
          Here's what I'm <strong className="text-red-600">not</strong>{" "}
          including on the archive:
        </p>
        <ul className="grid gap-3 list-disc list-inside">
          <li>
            <strong>Fanart</strong> - even with full credit, things may be
            complicated in terms of copyright
          </li>
          <li>
            <strong>Full decompiled source code</strong> - I think this should
            be obvious
          </li>
        </ul>
      </LandingSection>
      <LandingSection heading="I need your help!">
        <p>
          I'm just a 20-year-old unemployed hobbyist that currently has no job,
          only living off to Ko-fi donations, YouTube, and music streams revenue
          whilst keeping this project, website, and entire infrastructure all by
          myself.
        </p>
        <p>
          Despite my high skill ceiling in web development, design, and general
          high-level programming; I'm no expert game dev and I'm learning
          specifically to reverse-engineer Unity games for the sake of this
          archival project, especially with its VR counterparts, which I don't
          have copies of currently.
        </p>
        <p>
          I have legally bought both SLT and NSLT on Steam, and I use those to
          reverse engineer and possibly decompile them for this project, but I'm
          way far off from just decompiling assets from those games for the sake
          of this project.
        </p>
        <p>
          I'm taking the time to learn learn to reverse-engineer Unity games and
          learning the basic C# knowledge for the sake of this archival project,
          especially with its VR counterparts, which I don't have copies of
          currently.
        </p>
        <p>
          I also need physical items that I can't obtain normally such as
          physical game copies and purchased items from the{" "}
          <a
            href="https://store.playfulstudios.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="underline text-orange-500 hover:text-orange-700"
          >
            official store
          </a>
          ; especially those listed in{" "}
          <a
            href="#archive-contents"
            className="underline text-orange-500 hover:text-orange-700"
          >
            Archive contents
          </a>
          .
        </p>
      </LandingSection>
      {/* <LandingSection heading="Volunteers">
        <div className="grid grid-cols-1 gap-5 place-items-center">
          <Volunteer name="TBA">hee hee</Volunteer>
        </div>
      </LandingSection> */}
      <LandingSection heading="Frequently Asked Questions">
        {faq.map((item, index) => (
          <FAQ key={index} question={item.question} answer={item.answer} />
        ))}
      </LandingSection>
      <section className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-10 pb-5 flex flex-col gap-y-2.5 md:gap-y-3 text-base lg:text-lg">
        <p className="text-center">
          If there are any suggestions, it be the website layout, request
          for additional content to the franchise/archives, or any inquery - feel free to
          email me, skepfoosky15@gmail.com!
        </p>
      </section>
    </Container>
  )
}

interface LandingSectionProps extends LayoutProps {
  heading?: string
  alternate?: boolean
}

function LandingSection(props: LandingSectionProps) {
  const idParse = props.heading
    ?.replace(/\s/g, "-")
    .replace(/!|\?/g, "")
    .toLowerCase()

  return (
    <section id={idParse}>
      <article className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-10 pb-5 flex flex-col gap-y-2.5 md:gap-y-3 text-base lg:text-lg">
        <div>
          <h2 className="font-lucky-bold text-3xl lg:text-4xl drop-shadow-md">
            <a href={`#${idParse}`} className="hover:underline">
              {props.heading}
            </a>
          </h2>
        </div>
        {props.children}
      </article>
    </section>
  )
}

interface FAQProps {
  question?: string
  answer?: string
}

function FAQ(props: FAQProps) {
  const parse = props.question
    ?.replace(/\s/g, "-")
    .replace(/!|\?/g, "")
    .toLowerCase()

  return (
    <div
      id={parse}
      className="flex flex-col gap-2 pt-3 pb-5 mb-5 border-b-2 border-orange-300"
    >
      <h3 className="font-lucky-body text-orange-500">
        <a href={`#${parse}`} className="hover:underline cursor-pointer">
          {props.question}
        </a>
      </h3>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a className="text-orange-700 hover:underline" {...props}></a>
          ),
        }}
      >
        {props.answer ?? ""}
      </ReactMarkdown>
    </div>
  )
}
