<template>
  <section class="wrapper">
    <h2>Questions and Answers</h2>
    <div class="grid gap-y-4 w-full mt-10">
      <FAQItem title="What is The Foxington Vault?">
        <p>
          <strong>The Foxington Vault</strong> is a non-profit open source
          digital archive project created by Kuroji Fusky, a collective effort
          for archiving the entire Lucky's Tale franchise created by Playful
          Studios in 2014.
        </p>
        <p>
          My goal for this project is to gather as much substantial and public
          information about its game, mechanics, guides, and coverage —
          including the inner workings of the game, decompiling its assets,
          models, and sounds from its games.
        </p>
      </FAQItem>
      <FAQItem title="Is the archive open?"> no lol </FAQItem>
      <FAQItem title="What are the archive contents?">
        <p>
          There are rules on what's going on in the archive and what's not. Due
          to my constant paranoia on the legal mumbo jumbo, things are subject
          to change over time but here's what I'm currently accepting these
          items from the archive:
        </p>
        <ul>
          <li>
            Public coverage of the games themselves (i.e. articles and videos
            written about the franchise itself)
          </li>
          <li>General info about the game: characters, lore, etc.</li>
          <li>The team and development behind <em>Lucky's Tale</em></li>
          <li>Images of physical items</li>
          <li>
            Written guides — with the connections I have, I can grant permission
            to use and include them in the archive
          </li>
          <li>
            Audio bites and game graphics using certain Unity decompiler(s)
          </li>
          <li>Promotional and other content provided on the media kit</li>
        </ul>
        <p>Here's what I'm <strong>NOT</strong> including:</p>
        <ul>
          <li>
            Fanart — even with full credit, things may be complicated in terms
            of copyright
          </li>
          <li>Full decompiled source code — I think this should be obvious</li>
        </ul>
      </FAQItem>
      <FAQItem title="But... why was this project created in the first place?">
        <article class="flex flex-col gap-2.5">
          <p>
            Not a lot of people know about the games or vaguely remember seeing
            it somewhere else, and I believe that any kind of media preservation
            is vital for any work out there, if it goes unnoticed for a long
            time, then it's considered lost media.
          </p>
          <p>
            This is the sole reason why I created this project; to provide a
            brim of Lucky information from various sources and to keep this
            platform game to retain longer relevance and interest supplemented
            with community-curated content. (with some exceptions)
          </p>
          <p>
            Playful clearly puts the amount of dedication, love, and work they
            put to this franchise and I'm one of the <em>lucky</em> ones (pun
            intended) who care about the effort they put and decide to document
            and preserve for their token of their hard work.
          </p>
        </article>
      </FAQItem>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg px-10 py-12 flex flex-col items-center;
}

h2 {
  @apply font-lucky-bold;
  font-size: max(2.5rem, 2.25vw);
}
</style>
