<template>
    <div class="min-h-[50rem] bg-[#552B7F]">
        <div class="p-10 ">
            <h1 class="text-white text-[2rem] font-bold md:text-[5rem]">Kraken Water Polo</h1>
            <h1 class="
                text-white text-[1rem] 
                md:pl-10 font-bold md:text-[2rem] 
            ">Youth to Highschool water polo In Forest Grove</h1>
            
            <div class="flex justify-center">
                <img :src="Stock1" class="h-[20rem] mt-[2rem] md:mt-[10rem]" />
            </div>

            <h1 class="text-white text-[2rem] mt-[2rem] md:mt-[10rem]">Upcoming Events: </h1>
            <p class="text-white text-[2rem]">- Open Polo, September 15th</p>
        </div>
    </div>

</template>

<script setup>
import Stock1 from '../assets/stock1.avif'

</script>