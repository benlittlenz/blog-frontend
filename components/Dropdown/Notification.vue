<template>
  <transition
    enter-active-class="transition ease-in duration-800"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  >
    <div
      class="fixed inset-0 flex items-end justify-center px-4 py-6 sm:p-6 sm:items-start sm:justify-end"
    >
      <div class="max-w-xs w-full bg-white shadow-lg rounded-lg">
        <div class="rounded-lg shadow-xs">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex">
                <svg viewBox="0 0 20 20" fill="currentColor" class="check w-6 h-6 text-green-600">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1">
                <p
                  class="text-sm leading-5 font-medium text-gray-900"
                >Customer successfully created!</p>
                <p class="mt-1 text-sm leading-5 text-gray-500"></p>
              </div>
              <button
                class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500"
                @click="$emit('closeNotification')"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "notification"
};
</script>