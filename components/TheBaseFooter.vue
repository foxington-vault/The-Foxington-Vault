<script lang="ts" setup>
import { footerItems } from "./NavItems"
</script>

<template>
  <footer class="relative">
    <div class="wrapper">
      <div class="lucky-sit">
        <CldImg file-name="lucky-stare-custom.png" />
      </div>
      <div class="link-container"></div>
      <div class="disclaimer-lower-third">
        <p>
          <strong>The Foxington Vault</strong> is a dedicated archive project
          and fansite run by a group of dedicated volunteers.
          <strong>The Foxington Vault</strong> does not pertain any of the
          contents nor copyright used on the website and has no direct
          affiliation with Playful Studios whatsoever.
        </p>
        <p id="copyright">
          © {{ new Date().getFullYear() }} The Foxington Vault - a project by
          Kuroji Fusky.
        </p>
      </div>
    </div>
    <div aria-hidden="true" class="curve-filler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="fill-orange-200"
        />
      </svg>
    </div>
    <div class="filler"></div>
  </footer>
</template>

<style lang="scss" scoped>
.curve-filler {
  @apply bottom-1/3 absolute left-0 right-0 -z-[1];
  transform: rotateY(180deg);

  svg {
    @apply w-full h-[6.5rem];
  }
}

.filler {
  @apply bottom-0 absolute left-0 right-0 -z-[1] bg-orange-200 h-1/3;
}

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
