<script lang="ts" setup>
const props = defineProps<{
	name: string
	link?: string
}>()
</script>

<template>
	<NuxtLink :to="props.link" class="hero-button-wrapper" role="button" :aria-label="props.name">
		<h2 class="heading">{{ props.name }}</h2>
		<aside class="aside-content">
			<slot />
		</aside>
	</NuxtLink>
</template>

<style scoped>
.hero-button-wrapper {
	@apply font-lucky-body text-3xl xl:text-4xl
	rounded-md overflow-hidden border-2 border-orange-400 flex flex-col-reverse lg:flex-row justify-between items-center
	duration-[200ms]
	hover:border-white hover:shadow-xl hover:scale-[1.02];
	transition-property: transform, box-shadow, border;
}

.heading {
	@apply ml-5;
}

.aside-content {
	@apply w-full lg:w-2/5 flex-shrink-0 bg-orange-300 h-[10rem];
}
</style>