<template >
    <div class="">

        <h1 class="text-[3rem] pl-10 mt-[5rem]"> <strong>We are a non-profit organization ran by volunteers</strong> </h1>
        <h1 class="text-[2rem] pl-10 ">Donations and sponsorships help us with basic pool time rentals 🏊, gear replacements, youth equipment 🤽‍♂️, tournaments📆, and more 😊.</h1>
        
        <div class="flex flex-col p-2 mb-[10rem] text-center text-[2rem]">
            <div class="flex justify-center mt-[5rem]">
                <img class=" w-[15rem]" :src="Venmo" alt="qr code" />
            </div>
            
            <p class="mt-[3rem]">Please donate if you can through our <a href="https://venmo.com/u/kraken_waterpolo" class="text-blue-500">Venmo</a></p>
            
            <h1 class="mt-[7rem] mb-[1rem] font-bold">Thank you to  our sponsors!</h1>
            
            <a href="https://www.emeraldfdc.com/" target="_blank" class="text-blue-500">Emerald Fence and Deck</a>
            <a href="https://www.facebook.com/BeyondEtched/" target="_blank" class="text-blue-500">Beyond Etched</a>
            <a href="https://www.statefarm.com/agent/us/or/forest-grove/jill-verboort-r9n5q4t4rak" target="_blank" class="text-blue-500">Jill Verboort / State Farm</a>
            <a href="https://www.jonesstevedoring.com/" target="_blank" class="text-blue-500">Jones Stevedoring Company</a>
            <a href="https://www.pinkspoonfg.com/" target="_blank" class="text-blue-500">Pink Spoon</a>
            <a href="https://fitness1440.com/forest-grove/" target="_blank" class="text-blue-500">Fitness 1440</a>
            <a href="https://www.fglittleleague.com/" target="_blank" class="text-blue-500">FG Little League</a>
            <a href="https://www.koppconstruction.com/" target="_blank" class="text-blue-500">Kopp Construction</a>
        </div>
    </div>
</template>

<script setup>
import Kraken from '../assets/Kraken.png'
import Venmo from '../assets/venmo.png'

</script>