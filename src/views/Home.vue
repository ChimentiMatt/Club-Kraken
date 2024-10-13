<template>
    <div class="min-h-[50rem] bg-[#552B7F] min-h-[80vh]">
        <div class="p-10">
            <h1 class="text-white text-[2rem] font-bold md:text-[5rem]">Kraken Water Polo</h1>
            <h1 class="
                text-white text-[1rem] 
                font-bold md:text-[2rem] 
            ">Forest Grove's Kraken Water Polo Club is a recreational club for all ages and abilities! Practices alternate Sunday's from 4 pm to 6:15 pm at the Forest Grove Aquatic Center.</h1>

            <div class="mt-[2rem] md:mt-[2rem]">
                <h1 class="text-white font-bold mb-[.5rem]">Requirements</h1>
                <h1 class="text-white text-[1rem]">🏊‍♂️ If unable to swim independently must use life jacket</h1>
                <h1 class="text-white text-[1rem]">👶 Open to all ages, and skill levels, kids to masters </h1>
                <h1 class="text-white text-[1rem]">💸 A $5 drop in fee is not required but appreciated</h1>
            </div>

            <div class="">
                <h1 class="text-white mt-[2rem] md:mt-[2rem] font-bold mb-[.5rem]">Upcoming Sundays </h1>
                <div class="">
                    <!-- <p class="text-white">📅 9/15</p>
                    <p class="text-white">📅 9/29</p>
                    <p class="text-white">📅 10/13</p>
                    <p class="text-white">📅 10/27</p>
                    <p class="text-white">📅 11/10</p>
                    <p class="text-white">📅 11/24</p>
                    <p class="text-white">📅 12/08</p>
                    <p class="text-white">📅 12/22</p> -->
                    <p class="text-white">👋 We are currently taking October and November off for the Forest Grove High School Season</p>
                    <a class="text-blue-500" href="https://www.maxpreps.com/or/forest-grove/forest-grove-vikings/water-polo/" target="_blank">Forest Grove High School Water Polo</a>

                    <p></p>
                </div>
            </div>

            <div class="flex justify-center">
                <img :src="Stock1" class="md:h-[30rem] h-[10rem] mt-[2rem] md:mt-[5rem]" />
            </div>

        </div>
    </div>

</template>

<script setup>
import Stock1 from '../assets/stock1.avif'

</script>