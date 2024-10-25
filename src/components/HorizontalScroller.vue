<template>
  <div>
    <h3>AWS skill-centre certs</h3>
    <div
    class="relative flex flex-col bg-transparent overflow-hidden"
  >
    <div class="w-full max-w-3xl mx-auto px-2 md:px-4 py-16">
      <div class="text-center">
        <!-- Logo Carousel animation -->
        <div
          class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
          ref="carousel"
        >
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li v-for="(logo, index) in logos" :key="index">
              <img :src="logo.src" :alt="logo.alt" class="h-36" />
            </li>
          </ul>
        </div>
        <!-- End: Logo Carousel animation -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert1.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert2.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert3.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert4.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert5.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert6.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert7.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert8.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert9.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert10.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert11.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert12.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert13.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert14.png",
          alt: "AWS Certificate",
        },
        {
          src: "https://siphochris.github.io/images/images/certs/aws-cert15.png",
          alt: "AWS Certificate",
        },
      ],
    };
  },
  mounted() {
    const carousel = this.$refs.carousel;
    const ul = carousel.querySelector("ul");
    // Duplicate the list for seamless animation
    ul.insertAdjacentHTML("afterend", ul.outerHTML);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

/* Custom Tailwind classes for animation */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-infinite-scroll {
    @apply animate-[infinite-scroll_25s_linear_infinite];
  }
}

/* Define keyframes for infinite scroll */
@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* Basic styling for body */
body {
  font-family: "Inter", sans-serif;
}
</style>
