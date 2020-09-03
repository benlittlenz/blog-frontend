<template>
  <div class="space-y-1">
    <label id="listbox-label" class="block text-sm leading-5 font-medium text-gray-700">
      <slot name="SelectLabel"></slot>
    </label>
    <div class="relative">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button
          type="button"
          @click="openDropdown"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        >
          <div class="flex items-center space-x-3">
            <span v-if="value" class="block truncate">{{ value }}</span>
            <span v-else class="block truncate text-gray-500">
                Type or click to select an item
            </span>
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </span>

      <!-- Select popover, show/hide based on select state. -->
      <div v-show="isOpen" class="absolute mt-1 w-full rounded-md bg-white shadow-lg h-64 w-64">
        <ul
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          class="rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5 h-56"
        >
          <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
          -->
          <li
            tabindex="0"
            @click="select(d)"
            id="listbox-item-0"
            role="option"
            v-for="d in data"
            v-bind:key="d.id"
            class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            <div class="flex items-center space-x-3">
              <span
                class="block truncate"
                v-bind:class="{ 
                'font-normal' : !isSelected(d.company) , 'font-semibold' 
                : isSelected(d.company)}"
              >{{ d.company }}</span>
            </div>

            <!--
              Checkmark, only display for selected option.
              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
            <span v-show="isSelected(d)" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>
          
          <!-- More options... -->
        </ul>
        <div v-show="isOpen" slot="afterList">
          <button type="button" class="flex justify-center align-center w-full outline-none px-2 py-3 border-none bg-pink-500 text-white">
            <a href="#" class="font-semibold flex items-center text-sm leading-5 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" class="plus-circle mr-3 h-5 w-5 text-white">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clip-rule="evenodd"
                />
              </svg>
              Add Customer
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  props: {
    data: Array,
    value: String,
    type: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    isSelected(value) {
      //console.log(value)
      return this.value === value;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    openDropdown() {
      this.isOpen = true;
    },
    select(value) {
      this.isOpen = false;
      this.$emit("valueSelect", value);
    }
  }
};
</script>

<style>

</style>