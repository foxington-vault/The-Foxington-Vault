<template>
  <section class="wrapper">
    <h2>Questions and Answers</h2>
    <div class="grid w-full mt-10 gap-y-4">
      <FAQItem title="What is The Foxington Vault?">
        <p>
          <strong>The Foxington Vault</strong> is a non-profit open source
          digital archive project created by Kuroji Fusky, a collective effort
          for archiving the entire <em>Lucky's Tale</em> franchise created by
          Playful Studios in 2014.
        </p>
        <p>
          My goal for this project is to gather as much substantial and public
          information about its game, mechanics, guides, and coverage —
          including the inner workings of the game, decompiling its assets,
          models, and sounds from its games.
        </p>
      </FAQItem>
      <FAQItem title="Why is it called The Foxington Vault?">
        <p>
          Initially launched as <em>The Lucky Treehouse</em> on November 30,
          2021 - noting from one of the moderators from the official Discord
          server.
        </p>
        <p>
          Fearing that there would be a possible first-class action lawsuit from
          Nintendo for having the word "treehouse" from the name and with nobody
          seemed to be interested about the project from the official Discord
          server, I quickly abandoned it.
        </p>
      </FAQItem>
      <FAQItem title="What does the archive contain?">
        <p>
          Asides directly from dumping it from the Internet Archive, there are
          rules on what's going on in the archive and what's not. Due to my
          constant paranoia on the legal mumbo jumbo, things are subject to
          change over time but here's what I'm currently accepting these items
          from the archive:
        </p>
        <ul class="list-disc list-inside">
          <li>
            {{
              "Public coverage of the games themselves (i.e. articles and videos written about the franchise itself)"
            }}
          </li>
          <li>General info about the game: characters, lore, etc.</li>
          <li>The team and development behind <em>Lucky's Tale</em></li>
          <li>Images of physical items</li>
          <li>
            {{
              "Written guides — with the connections I have, I can grant permission to use and include them in the archive"
            }}
          </li>
          <li>
            {{
              "Audio bites and game graphics using certain Unity decompiler(s)"
            }}
          </li>
          <li>Promotional and other content provided on the media kit</li>
        </ul>
        <p>Here's what I'm <strong>NOT</strong> including:</p>
        <ul class="list-disc list-inside">
          <li>
            Fanart — even with full credit, things may be complicated in terms
            of copyright - although, the content itself will be displayed under
            the Community page
          </li>
          <li>Full decompiled source code — I think this should be obvious</li>
        </ul>
      </FAQItem>
      <FAQItem title="Is the archive currently open?">
        <p>
          This project is still relatively new and the
          <strong>archive is still under construction</strong>, there aren't of
          pages still available yet being the state of this website being still
          barebones. However, this project is 100%
          <NuxtLink
            to="https://github.com/foxington-vault"
            class="text-orange-400 underline"
          >
            {{ "open source" }}
          </NuxtLink>
          and anyone is free to contribute to the project! We'll announce it
          once the archive is open for everyone!
        </p>
      </FAQItem>
      <FAQItem title="What was The Foxington Vault built on?">
        <p>
          The website is built from a web framework based on Vue.js, and is
          hosted on Vercel; the images are hosted on Cloudinary and the archived
          images are hosted under a self-hosted CDN via Cloudflare.
        </p>
        <p>
          The actual bundling of archives are automated entirely with Python to
          be served by offline or local browsing and to be updated through the
          Internet Archive.
        </p>
        <p>
          Unforunately, I'm just a 20-year-old freelancer on the internet
          providing the free sources to host the entire site and resources.
        </p>
      </FAQItem>
      <FAQItem title="Why was this project created in the first place?">
        <p>
          There are cases that not a lot of people know about the games they saw
          or vaguely remember seeing it somewhere else, and I believe that any
          kind of media preservation is vital for any work out there, if it goes
          unnoticed for a long time, then it's considered lost media.
        </p>
        <p>
          This is the sole reason why I created this project; to provide a brim
          of Lucky information from various sources and to keep this platform
          game to retain longer relevance and interest supplemented with
          community-curated content. (with some exceptions)
        </p>
        <p>
          Playful clearly puts the amount of dedication, love, and work they put
          to this franchise and I'm one of the <em>lucky</em> ones (pun
          intended) who care about the effort they put and decide to
          occasionally document and preserve for their token of their hard work.
        </p>
      </FAQItem>
      <FAQItem
        title="Will you provide other languages for international audiences?"
      >
        Of course lmao
      </FAQItem>
      <FAQItem title="Can I contact you for any inqueries or suggestions?">
        <p>
          You can contact me directly on Twitter
          <NuxtLink
            to="https://twitter.com/kurojifusky"
            target="_blank"
            class="text-orange-500 underline"
            >@kurojifusky</NuxtLink
          >
          or by email at
          <NuxtLink
            to="mailto:hello@foxingtonvault.com"
            class="text-orange-500 underline"
            >hello@foxingtonvault.com</NuxtLink
          >.
        </p>
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
