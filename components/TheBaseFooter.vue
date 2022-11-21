<template>
  <div id="footer-root">
    <div class="h-[13.5rem] px-10 flex justify-end relative">
      <CldImg />
      <div
        class="absolute -bottom-6 left-0 right-0 h-[60%] bg-gradient-to-t from-orange-600 -z-[1]"
        aria-hidden="true"
      ></div>
    </div>
    <div class="bg-orange-500 text-white">
      <div id="footer-container" class="mx-auto max-w-screen-2xl">
        <footer
          class="flex flex-col text-center justify-between px-10 py-12 gap-3"
        >
          <p>
            <strong>The Foxington Vault</strong> is a dedicated archive project
            and fansite run by a group of dedicated volunteers.
            <strong>The Foxington Vault</strong> does not pertain any of the
            contents nor copyright used on the website and has no direct
            affiliation with Playful Studios whatsoever.
          </p>
          <p>
            This archive project and all its images are hosted on Cloudinary and
            other third-party sources, website hosted on Vercel.
          </p>
          <p id="copyright" class="text-sm">
            © {{ new Date().getFullYear() }} The Foxington Vault - archive still
            under construction; maintained by @kuroji_fusky.js
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>
