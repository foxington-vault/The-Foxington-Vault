<template>
	<Container title="Page not found" description="">
		<h1>
			<span id="err-number">404</span>
			<span id="err-msg">Page Not Found</span>
		</h1>
	</Container>
</template>

<style scoped>
h1 {
	@apply flex flex-col items-center;
}

#err-number {
	@apply font-lucky-bold;
	font-size: max(5rem, 7.75vw);
}

#err-msg {
	@apply font-lucky-body;
	font-size: max(1.5rem, 2vw);
}
</style>