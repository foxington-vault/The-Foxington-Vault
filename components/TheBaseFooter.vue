<script lang="ts" setup>
import navFooter from "./BaseFooterItems"
</script>

<template>
	<div id="footer-root">
		<div class="h-[13.5rem] px-10 flex justify-end relative">
			<CldImg />
			<div class="absolute -bottom-6 left-0 right-0 h-[60%] bg-gradient-to-t from-orange-800 -z-[1]" aria-hidden="true">
			</div>
		</div>
		<div class="bg-orange-800 text-white">
			<footer id="wrapper">
				<div class="link-container">
					<div v-for="item, index in navFooter" :key="index">
						<h2 class="font-lucky-bold text-[1.65rem] mb-0.5">{{ item.heading }}</h2>
						<div role="list" class="flex flex-col gap-y-0.5 items-start">
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
						© {{ new Date().getFullYear() }} The Foxington Vault - a project by Kuroji Fusky. Archive Under
						Construction
					</p>
				</div>
			</footer>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#wrapper {
	@apply mx-auto max-w-screen-2xl grid px-10 py-12 gap-3;
}

.link-container {
	@apply rounded-xl bg-orange-600 px-7 py-6 grid grid-cols-4 gap-3;
}

.disclaimer-lower-third {
	@apply flex flex-col gap-y-2;

	p {
		@apply text-sm;
	}
}
</style>