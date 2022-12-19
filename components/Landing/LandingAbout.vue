<template>
	<section class="fit-screen-responsive px-10">
		<article class="prose-wrapper">
			<h2>What is this project?</h2>
			<p>
				The Foxington Vault is a one-person preservation and archival project created by Kuroji Fusky, a collective
				effort
				for
				archiving the entire <em>Lucky's Tale</em> franchise created by Playful Studios in 2014.
			</p>
			<p>
				My goal is to gather as much substantial and public information about its game, mechanics, guides, and coverage
				—
				including the inner workings of the game, decompiling its assets, models, and sounds from its games.
			</p>
			<p>
				<strong>Why?</strong> I believe that any kind of media preservation is vital for any work out there, if it goes
				unnoticed for a
				long time,
				then it's considered lost media. Playful clearly puts the amount of dedication, love, and work they put to this
				franchise and I'm one of the
				lucky
				ones
				(pun intended) who care about the effort they put and decide to document and preserve for their token of their
				hard
				work.
			</p>
		</article>
	</section>
</template>

<style lang="scss" scoped>
h2 {
	@apply font-lucky-bold mb-5 mt-8 leading-snug sm:text-left text-center;
	font-size: max(2.5rem, 2.2vw)
}

.prose-wrapper {
	@apply flex flex-col gap-y-2.5 text-lg xl:text-xl;

	p {
		@apply leading-8;
	}
}
</style>