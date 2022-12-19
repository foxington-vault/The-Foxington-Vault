<script setup>
import FoxingtonVaultLogo from './Logos/FoxingtonVaultLogo.vue';
import { navbarItems } from './NavItems'
</script>

<template>
	<div class="fit-screen-responsive navbar-container">
		<header id="navbar-contents">
			<NuxtLink href="/" class="relative flex items-center gap-x-1">
				<FoxingtonVaultLogo horizontal class="w-[20rem]" />
				<span class="wip-badge">WIP</span>
			</NuxtLink>
			<nav>
				<ul>
					<li v-for="menus in navbarItems.root" :key="menus" class="nav-list-item">
						<NuxtLink :href="menus.link">{{ menus.name }}</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<style lang="scss" scoped>
.navbar-container {
	@apply mx-auto max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl;
}

#navbar-contents {
	@apply flex justify-between items-center px-10 py-8;

	ul {
		@apply flex gap-x-1;
	}

}
nav a {
	@apply px-4 py-6;
}

.nav-list-item {
	@apply font-lucky-body text-[1.65rem] leading-[0];
}

.wip-badge {
	@apply text-sm flex items-center font-lucky-body pt-0.5 px-1 rounded-md text-white bg-red-600;
}
</style>