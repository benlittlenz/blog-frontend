<template>
  <transition
    enter-active-class="transition ease-in duration-200"
    
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  >
    <div v-show="state" class="absolute mt-1 rounded-md bg-white shadow-lg h-64 w-64">
      <ul
        class="rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5 h-56"
      >
        <li
          tabindex="0"
          @click="select(d)"
          v-for="d in companies"
          v-bind:key="d.id"
          class="group flex items-center px-4 py-2 text-sm leading-5 focus:outline-none focus:bg-gray-100"
          :class="selected == d.company ? 'font-semibold bg-pink-400 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
        >
          <div class="flex items-center space-x-3">
            <span
              class="block truncate"
              
            >{{ d.company }}</span>
          </div>
        </li>
      </ul>
      <div v-show="state" slot="afterList">
        <button
          type="button"
          class="flex justify-center align-center w-full outline-none px-2 py-3 border-none bg-pink-500 text-white"
          @click="toggle(true)"
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
    companies: Array,
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
      modalOpen: false,
      selected: ''
    };
  },
  methods: {
    select(value) {
      this.isOpen = false;
      this.$emit("valueSelect", value);
      this.selected = value.company;
    },

    toggle(value) {
      this.$emit('openModal', value)
    }
  }
};
</script>

<style>
</style>