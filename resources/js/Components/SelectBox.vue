<template>
  <transition
    enter-active-class="transition ease-in duration-200"
    leave-active-class="transition ease-out duration-200"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  >
    <div v-show="state" class="absolute mt-1 rounded-md bg-white shadow-lg h-64 w-64">
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5 h-56"
      >
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
      <div v-show="state" slot="afterList">
        <button
          type="button"
          class="flex justify-center align-center w-full outline-none px-2 py-3 border-none bg-pink-500 text-white"
        >
          <a href="#" class="font-semibold flex items-center text-sm leading-5 text-white">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="plus-circle mr-3 h-5 w-5 text-white"
            >
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
  </transition>
</template>

<script>
export default {
  name: "SelectBox",
  props: {
    data: Array,
    value: String,

    state: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      isOpen: false,
      company: ''
    };
  },
  methods: {
    isSelected(value) {
      //console.log(value)
      return this.company === value;
    },

    select(value) {
      console.log(value);
      this.isOpen = false;
      this.$emit("valueSelect", value);
    }
  }
};
</script>

<style>
</style>