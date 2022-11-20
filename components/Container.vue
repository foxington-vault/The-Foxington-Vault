<script lang="ts" setup>
const props = defineProps<{
	title: string
	description: string
	class?: string
}>()

useHead({
	title: props.title,
	meta: [
		{ name: "description", content: props.description },
		{ property: "og:title", content: props.title },
		{ property: "og:description", content: props.description },
		{ property: "og:type", content: "website" },
		{ name: "twitter:title", content: props.title },
		{ name: "twitter:description", content: props.description },
		{ name: "twitter:card", content: "summary_large_image" },
	]
})
</script>

<template>
	<main id="page-container" :class="class">
		<slot />
	</main>
</template>