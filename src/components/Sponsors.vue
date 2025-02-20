<template>
    <div class="banner">
        <div class="banner-content" ref="bannerContent">
        <!-- Repeatable images in the banner -->
        <img v-for="(image, index) in images" :key="index" :src="image" :alt="'Image ' + (index + 1)" class="h-[10rem]" />
        <!-- Duplicate images to create a seamless effect -->
        <img v-for="(image, index) in images" :key="'duplicate-' + index" :src="image" :alt="'Duplicate Image ' + (index + 1)" class="h-[10rem]" />
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

// Import your images
import EmeraldFence from '../assets/Emerald.png';
import Beyond from '../assets/Beyond.jpg';
import Jill from '../assets/Jill.png';
import Joe from '../assets/Joe.png';
import Pink from '../assets/pinkspoon.png';
import Fitness from '../assets/fitness.png';
import Fgll from '../assets/fgll.png';
import Kopp from '../assets/kopp.png';
import Gov from '../assets/giv.png'
import Braces from '../assets/braces.png'

export default {
  setup() {
    const bannerContent = ref(null);

    // Use the imported images in an array
    const images = [
      Gov,
      Braces,
      Beyond,
      EmeraldFence,
      Jill,
      Joe,
      Pink,
      Fitness,
      Fgll,
      Kopp,
    ];

    onMounted(() => {
        setTimeout(() => {
            const bannerWidth = bannerContent.value.clientWidth / 2; // Correctly measure the total scrollable width

            gsap.to(bannerContent.value, {
                x: -bannerWidth, // Move left by half of the content width
                duration: 30, // Duration of the scrolling (adjust as needed)
                ease: 'none', // No easing for continuous scrolling
                repeat: -1, // Infinite repeat
            });

        }, 1000)
    });

    return {
      bannerContent,
      images
    };
  }
};
</script>

<style>

.banner {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.banner-content {
  display: flex;
  width: max-content;
}
</style>
