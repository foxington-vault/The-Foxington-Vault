<script lang="ts" setup>
import { footerItems } from './NavItems';
</script>

<template>
	<footer class="fit-screen-responsive wrapper">
		<div class="lucky-sit">
			<CldImg />
		</div>
		<div class="link-container">
			<div v-for="item, index in footerItems" :key="index">
				<h2 class="heading">{{ item.heading }}</h2>
				<div role="list" class="list-col">
					<NuxtLink :to="liItem.link" v-for="liItem, index in item.links" :key="index" role="listitem">
						{{ liItem.name }}
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="disclaimer-lower-third">
			<p>
				<strong>The Foxington Vault</strong> is a dedicated archive project
				and fansite run by a group of dedicated volunteers.
				<strong>The Foxington Vault</strong> does not pertain any of the
				contents nor copyright used on the website and has no direct
				affiliation with Playful Studios whatsoever.
			</p>
			<p id="copyright">
				© {{ new Date().getFullYear() }} The Foxington Vault - a project by Kuroji Fusky.
			</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.wrapper {
	@apply grid px-10 py-12 gap-8;
}

.lucky-sit {
	@apply h-[13.5rem] px-10 relative top-14 flex justify-end;
}

.link-container {
	@apply rounded-xl bg-orange-600 text-gray-100 px-7 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5;

	.heading {
		@apply font-lucky-bold text-[1.7rem] mb-0.5;
	}
}

.list-col {
	@apply flex flex-col gap-y-0.5 items-start;
}

.disclaimer-lower-third {
	@apply flex flex-col gap-y-2 text-center;

	p {
		@apply text-sm;
	}
}
</style>