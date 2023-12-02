<script setup lang="ts">
const SITE_NAME = "The Foxington Vault"
const DESCRIPTION =
  "A non-profit digital archive and preservation project for archiving the entire Lucky's Tale franchise!"

useSeoMeta({
  title: `Under Construction | ${SITE_NAME}`,
  description: DESCRIPTION,
  ogTitle: "Under Construction",
  ogDescription: DESCRIPTION,
  ogSiteName: SITE_NAME,
  ogType: "website",
  twitterTitle: `Under Construction | ${SITE_NAME}`,
  twitterDescription: DESCRIPTION,
})
</script>

<template>
  <div class="text-white font-inter bg-orange-500">
    <div class="h-screen px-8 grid place-items-center font-lucky-body">
      <article
        class="pt-16 text-center prose-p:text-2xl prose-p:my-2 mx-auto max-w-screen-xl"
      >
        <h2 class="font-lucky-head text-5xl my-6">Under construction</h2>
        <p>
          The Foxington Vault is an archive project and a source of all Lucky's
          Tale things!
        </p>
        <p>
          Created by Kuroji Fusky on November 2021, The Foxington Vault aims to
          collect all information about its games, history, fan-generated
          content, and reliable resources to everything related to Lucky's Tale.
          Including physical merch items, lost media, easter eggs, and all that
          good stuff!
        </p>
        <p>Opening sometime in mid-2024.</p>
      </article>
    </div>
    <footer class="bg-orange-50 text-orange-950">
      <div class="py-8 px-8 text-sm mx-auto max-w-screen-2xl">
        <div class="text-center">
          <p>
            <strong>The Foxington Vault</strong> is an archive project and fan
            site run by an individual. This site is non-profit and does not
            claim any of the assets and copyrights used on the website and is
            not affiliated with Playful Studios, and is used for non-commerical
            and informational purposes.
          </p>
          <p>
            Text contents from the
            <NuxtLink
              to="https://luckys-tale.fandom.com"
              target="_blank"
              external
              class="text-orange-900 hover:text-orange-500 underline"
              >Lucky's Tale Wiki</NuxtLink
            >
            is licensed under
            <NuxtLink
              to="https://www.fandom.com/licensing"
              external
              target="_blank"
              rel="noreferrer"
              class="text-orange-900 hover:text-orange-500 underline"
              >CC-BY-SA</NuxtLink
            >.
          </p>
          <p id="copyright" class="pt-4">
            &copy; 2021-2024 The Foxington Vault Project
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
