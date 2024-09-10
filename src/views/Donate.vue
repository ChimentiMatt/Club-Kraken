<template >
    <div class="">

        <h1 class="text-[1.5rem] md:text-[3rem] pl-10 pr-10 mt-[5rem]"> <strong>A non-profit organization ran by volunteers</strong> </h1>
        <h1 class="md:text-[1.5rem] pl-10  pr-10">Donations and sponsorships help us with...</h1>
        <div class="pl-4">
    
            <h1 class="md:text-[1.5rem] pl-10 ">🏊 basic pool time rentals</h1>
            <h1 class="md:text-[1.5rem] pl-10 ">🤽‍♂️ youth equipment</h1>
            <h1 class="md:text-[1.5rem] pl-10 ">🔧 gear replacements</h1>
            <h1 class="md:text-[1.5rem] pl-10 ">📆 tournaments</h1>
            <h1 class="md:text-[1.5rem] pl-10 ">🎉 and more</h1>
        </div>

        <h1 class="md:text-[2rem] pl-10 pr-10 mt-[3rem] md:mt-[7rem] md:text-center font-bold">We have multiple sponsorships levels to fit your financial commitment. </h1>
        <h1 class="md:text-[1.5rem] pl-10  pr-10 mt-2 md:text-center">Email fgclubkraken@gmail.com for the exact amounts and additional tax deduction information..</h1>

        <div class="flex flex-col p-2 mb-[10rem] mt-[2rem] text-center text-[2rem]">
            <div class="flex justify-center">
                <img class="w-[15rem]" :src="Venmo" alt="qr code" />
            </div>
            
            <div class="md:flex md:justify-center  mt-[2rem] r">
                <p class="pr-10 md:pr-0 pl-10 pr-10">Please donate if you can through</p> 
                <a href="https://venmo.com/u/kraken_waterpolo" class="text-blue-500 text-cen md:pl-2 flex justify-center"> Venmo</a>
            </div>
            
            <h1 class="mt-[7rem] mb-[1rem] font-bold">Thank you to  our sponsors!</h1>
            
            <div class="md:text-[2rem] text-[1.5rem] flex flex-col">
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
    </div>
</template>

<script setup>
import Kraken from '../assets/Kraken.png'
import Venmo from '../assets/venmo.png'

</script>