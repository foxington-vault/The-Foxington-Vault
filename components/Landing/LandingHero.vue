<script lang="ts" setup>
import FoxingtonVaultLogo from '../Logos/FoxingtonVaultLogo.vue';

</script>

<template>
	<section id="hero-banner">
		<FoxingtonVaultLogo class="logo-responsive" />
		<h2>Coming soon...</h2>
	</section>
</template>

<style lang="scss" scoped>
#hero-banner {
	@apply bg-orange-300 flex flex-col justify-center items-center h-[60vh];
}

.logo-responsive {
	@media (min-width: 1024px) {
		--size: 6.5rem;
		--relative-size: 45%;
	}

	@media (min-width: 1400px) {
		--size: 4.5rem;
		--relative-size: 32%;
	}

	width: calc(var(--relative-size, 50%) + var(--size, 10rem));
	height: 35vh;
}

h2 {
	@apply font-lucky-bold text-3xl;
}
</style>