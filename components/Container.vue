<script lang="ts" setup>
const route = useRoute()

const URL_PATH = `https://www.foxingtonvault.com${route.fullPath}`

const props = defineProps<{
  title: string
  description: string
  class?: string
  nowrap?: boolean
}>()

useHead({
  title: props.title,
  meta: [
    { name: "description", content: props.description },
    { property: "og:title", content: props.title },
    { property: "og:description", content: props.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: URL_PATH },
    { name: "twitter:title", content: props.title },
    { name: "twitter:description", content: props.description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: URL_PATH },
  ],
  link: [{ rel: "canonical", href: URL_PATH }],
})
</script>

<template>
  <main
    id="__root-page-container"
    :data-root-wrap-contents="!props.nowrap"
    :class="class"
  >
    <slot />
  </main>
</template>

<style>
[data-root-wrap-contents="true"] {
  @apply mx-auto max-w-screen-2xl px-6;
}
</style>
