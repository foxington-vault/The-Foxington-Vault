<template>
  <LazyTheBaseNavbar />
  <Container title="Page not found" description="" class="err-container">
    <div>
      <h1 id="err-msg">Page Not Found</h1>
      <p>
        Archive and website is still under construction, most parts of the pages
        are still incomplete.
      </p>
    </div>
  </Container>
  <LazyTheBaseFooter />
</template>

<style scoped>
.err-container {
  @apply grid place-items-center h-[90vh];
}
h1 {
  @apply flex flex-col items-center;
}

#err-msg {
  @apply font-lucky-body;
  font-size: max(1.5rem, 2vw);
}
</style>
