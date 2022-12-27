<script lang="ts" setup>
const route = useRoute()

const URL_PATH = `https://www.foxingtonvault.com${route.fullPath}`

const props = defineProps<{
	title: string
	description: string
	class?: string
	nowrap?: boolean
}>()

const detectWrap = !props.nowrap ? "wrap-contents" : ""
const detectClass = !props.class ? detectWrap : `${detectWrap} ${props.class}`

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
	link: [
		{ rel: "canonical", href: URL_PATH }
	]
})
</script>

<template>
	<main id="page-container" :class="detectClass">
		<slot />
	</main>
</template>

<style>
.wrap-contents {
	@apply mx-auto max-w-screen-2xl px-6;
}
</style>