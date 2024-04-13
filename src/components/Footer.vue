<template>
    <div class="bg-[#1f2937]">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <!-- <img :src="Kraken" class="h-8" alt="Flowbite Logo" /> -->
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Contact Us</span>
                </a>

                <div class="flex">
                    <div v-for="item in navigation" :key="item.name">
                        <RouterLink :to="item.href" class="text-white rounded-md px-3 py-2 m-2 text-sm font-medium w-[4rem] text-center">
                            {{ item.name }}
                        </RouterLink>
                    </div>
                </div>
            </div>

            <div class="pl-[rem]">
                <div class="flex gap-2 mt-2 text-white">
                    <img :src="Insta" alt="instagram" class="h-[2rem]"/>
                    <img :src="Email" alt="instagram" class="h-[2rem]"/>
                </div>
                <div class="gap-2 mt-2 text-white">
                    
                    <p>Address: Forest Grove City Aquatic Center, 2300 Sunset Dr, Forest Grove, OR 97116</p>
                    <p>FGclubKraken@gmail.com</p>
                </div>
            </div>

            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
    </div>
</template>

<script setup>
import Kraken from '../assets/Kraken.png'
import Insta from '../assets/Instagram_icon.png'
import Email from '../assets/email_icon.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'About', href: '/about' },
  { name: 'Schedule', href: '/schedule' },
]
</script>