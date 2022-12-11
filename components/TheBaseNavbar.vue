<script setup>
import FoxingtonVaultLogo from './Logos/FoxingtonVaultLogo.vue';
import { navbarItems } from './NavItems'
</script>

<template>
	<div id="navbar-container">
		<header id="navbar-contents">
			<NuxtLink href="/" class="relative flex items-center gap-x-1">
				<FoxingtonVaultLogo horizontal class="w-[20rem]" />
				<span
					class="text-sm flex items-center font-lucky-body pt-0.5 px-1 rounded-sm text-white bg-orange-400">WIP</span>
			</NuxtLink>
			<nav>
				<ul v-for="menus in navbarItems.root" :key="menus">
					<li class="font-lucky-body text-xl">
						<NuxtLink :href="menus.link">{{ menus.name }}</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<style lang="scss" scoped>
#navbar-container {
	@apply mx-auto max-w-screen-2xl;
}

#navbar-contents {
	@apply flex justify-between items-center px-10 py-5;

	nav {
		@apply flex gap-9
	}
}
</style>