<script lang="ts" setup>
import HeroButton from '../Buttons/HeroButton.vue';
</script>

<template>
	<section class="fit-screen-responsive px-10">
		<h2>Browse contents</h2>
		<div class="btn-containers">
			<HeroButton name="Games" link="/games" />
			<HeroButton name="Characters" link="/characters" />
			<HeroButton name="Guides & Achievements" link="/achievements" />
			<HeroButton name="Behind the Scenes" link="/behind-the-scenes" />
			<HeroButton name="Community" link="/community" />
			<HeroButton name="About this project" link="/about" />
		</div>
	</section>
</template>

<style scoped>
h2 {
	@apply font-lucky-bold text-3xl my-4;
}

.btn-containers {
	@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4;
}
</style>