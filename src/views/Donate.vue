<template>
    <div class="flex flex-col mt-[3rem] p-2 md:mt-[10rem] mb-[10rem] text-center text-[2rem]">
  
        <h1>We are a non-profit organization, so donations keep us running and kids in the pool.</h1>
   
        <div class="flex justify-center mt-[5rem]">
            <img class=" w-[15rem]" :src="Venmo" alt="Kraken Logo" />

        </div>
        <p>Please donate if you can through our <a href="https://venmo.com/u/kraken_waterpolo" class="text-blue-500">Venmo</a></p>

        
        <h1 class="mt-[5rem] mb-[1rem]">Thank you to  our sponsors!</h1>

        <a href="https://www.emeraldfdc.com/" target="_blank" class="text-blue-500">Emerald Fence and Deck</a>
        <a href="https://www.facebook.com/BeyondEtched/" target="_blank" class="text-blue-500">Beyond Etchedk</a>
        <a href="https://www.statefarm.com/agent/us/or/forest-grove/jill-verboort-r9n5q4t4rak" target="_blank" class="text-blue-500">Jill Verboort / State Farm</a>
        <a href="https://www.jonesstevedoring.com/" target="_blank" class="text-blue-500">Jones Stevedoring Company</a>
        <a href="https://www.pinkspoonfg.com/" target="_blank" class="text-blue-500">Pink Spoon</a>
        <a href="https://fitness1440.com/forest-grove/" target="_blank" class="text-blue-500">Fitness 1440</a>
        <a href="https://www.fglittleleague.com/" target="_blank" class="text-blue-500">FG Little League</a>
        <a href="https://www.koppconstruction.com/" target="_blank" class="text-blue-500">Kopp Construction</a>

   </div>
</template>

<script setup>
import Kraken from '../assets/Kraken.png'
import Venmo from '../assets/venmo.png'

</script>