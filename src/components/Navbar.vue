<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center ">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              <div class="w-screen absolute left-0">
                <h1 class="text-white font-bold text-[1.5rem]">Club Kraken Water Polo</h1>
              </div>

            </DisclosureButton>
          </div>
          <img class="hidden sm:block h-[2rem]" :src="Kraken" alt="Kraken Logo" />
          <div class="flex align-center items-center justify-center sm:items-stretch sm:justify-start ">
            <!-- <div class="flex flex-shrink-0 items-center"></div> -->

            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4" >
                <div class="flex items-center">
                  <h1 class="text-white font-bold text-center text-[2rem] mr-[2rem]">Club Kraken Water Polo</h1>
                </div>
                <div v-for="item in navigation" :key="item.name" class="flex">
                  <RouterLink :to="item.href" class="text-white rounded-md px-3 py-2 m-2 text-sm font-medium text-center">
                      {{ item.name }}
                  </RouterLink>
                </div>
              </div>
            </div>

          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->
  
            <!-- Profile dropdown -->
            <!-- <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu> -->
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="flex flex-col space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" class="text-gray-300 hover:bg-gray-700 hover:text-white">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

  import Kraken from '../assets/Kraken.png'
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Donate', href: '/donate' },
    // { name: 'About', href: '/about' },
  ]
  </script>