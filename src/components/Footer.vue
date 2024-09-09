<template>
    <div class="bg-[#1f2937]">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div>
                    <span class="text-white  font-bold">Contact Us</span>
                </div>

                <div class="flex justify-end">
                    <div v-for="item in navigation" :key="item.name">
                        <RouterLink :to="item.href" class=" text-white rounded-md px-3 py-2 m-2 text-sm font-medium w-[4rem] text-center">
                            {{ item.name }}
                        </RouterLink>
                    </div>
                </div>
            </div>

            <div class="pl-[rem]">
                <div class="flex gap-2 mt-2 text-white">
                    <a href="https://www.instagram.com/krakenwaterpolo/" target="_blank"><img :src="Insta" alt="instagram" class="h-[2rem]"/></a>
                    <a href="mailto:fgclubkraken@gmail.com"><img :src="Email" alt="instagram" class="h-[2rem]"/></a>
                    <a href="mailto:fgclubkraken@gmail.com">fgclubkraken@gmail.com</a>
                </div>
                <div class="gap-2 mt-2 text-white">
                    <p>Pool Location: Forest Grove City Aquatic Center, 2300 Sunset Dr, Forest Grove, OR 97116</p>
                </div>
            </div>

            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center">🤽 Club Kraken Water Polo © 2024</span>
        </div>
    </div>
</template>

<script setup>
import Insta from '../assets/Instagram_icon.png'
import Email from '../assets/email_icon.png'

const navigation = [
  { name: 'Donate', href: '/donate' },
]
</script>