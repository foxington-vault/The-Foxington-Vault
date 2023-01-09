<script lang="ts" setup>
import { footerItems } from "./NavItems"
</script>

<template>
  <footer class="relative">
    <div class="wrapper">
      <div class="lucky-sit">
        <CldImg file-name="lucky-stare-custom.png" />
      </div>
      <div class="footer-link-group">
        <div class="project-group">
          <p>
            <strong>The Foxington Vault</strong> is a dedicated archive project
            and fansite run by a group of dedicated volunteers. The Foxington
            Vault does not pertain any of the contents nor copyright used on the
            website and has no direct affiliation with Playful Studios
            whatsoever.
          </p>
        </div>
        <div class="nav-group-items">
          <div v-for="(item, index) in footerItems" :key="index">
            <h2 class="heading">{{ item.heading }}</h2>
            <div role="list" class="list-col">
              <NuxtLink
                :to="liItem.link"
                v-for="(liItem, index) in item.links"
                :key="index"
                role="listitem"
              >
                {{ liItem.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="lower-third">
        <p id="copyright">
          © {{ new Date().getFullYear() }} The Foxington Vault - a passion
          project created and currently maintained by
          <NuxtLink
            to="https://kurofusky.xyz/"
            target="_blank"
            class="text-orange-500 underline"
            >Kuroji Fusky</NuxtLink
          >{{ "." }}
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
        />
      </svg>
    </div>
    <div class="filler" aria-hidden="true"></div>
  </footer>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply grid px-10 py-8 gap-8;
}

.curve-filler {
  @apply bottom-2/3 absolute left-0 right-0 -z-[1];
  transform: rotateY(180deg);

  svg {
    @apply w-full h-[6.5rem];

    > path {
      @apply fill-orange-200;
    }
  }
}

.filler {
  @apply bottom-0 absolute left-0 right-0 -z-[1] bg-orange-200 h-2/3;
}

.lucky-sit {
  @apply h-[13.5rem] px-10 relative top-14 flex justify-end;
}

.footer-link-group {
  @apply rounded-xl bg-orange-600 text-gray-100 px-9 py-8 flex flex-col md:flex-row justify-between gap-14;

  .heading {
    @apply font-lucky-bold text-[1.7rem] mb-0.5;
  }
}

.project-group {
  @apply w-full md:w-4/12;
}

.nav-group-items {
  @apply w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6;
}

.list-col {
  @apply flex flex-col gap-y-0.5 items-start;
}

.lower-third {
  @apply flex flex-col gap-y-2 text-center;
}
</style>
