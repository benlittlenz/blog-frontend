<template>
  <div class>
    <div class="flex mx-auto mt-2 w-64 rounded-md">
      <div class="flex-1 px-1">
        <div>
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
                  <span v-if="selectedCompany" class="block truncate">{{ selectedCompany }}</span>
                  <span v-else class="block truncate text-gray-500">Click to select a customer</span>
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
          </div>
          <SelectBox
            type="company"
            :companies="customers"
            :state="isListOpen"
            v-model="selectedCompany"
            v-on:valueSelect="onCompanySelect"
            v-on:openModal="openModal"
          ></SelectBox>
        </div>
      </div>
    </div>
    <div v-if="modalOpen">
      <Modal @close="modalOpen = false" />
    </div>
    <Notification /> 
  </div>
</template>

<script>
import SelectBox from "./SelectBox";
import Modal from "./Modal";
import Notification from "./Notification";

export default {
  components: {
    SelectBox,
    Modal,
    Notification
  },

  data() {
    return {
      selectedCompany: "",
      isListOpen: false,
      modalOpen: false,
      customers: [
        { company: "Textron", name: "gfgfd" },
        { company: "Centene", name: "gfgfd" },
        { company: "Huntsman", name: "gfgfd" },
        { company: "Wynn Resorts", name: "gfgfd" },
        { company: "Entergy", name: "gfgfd" },
        { company: "Mondelez International", name: "gfgfd" },
        { company: "Realogy Holdings", name: "gfgfd" },
        { company: "Stryker", name: "gfgfd" },
        { company: "Builders FirstSource", name: "gfgfd" },
        { company: "Marathon Petroleum", name: "gfgfd" }
      ]
    };
  },

  created() {
    window.addEventListener("click", this.close);
    window.addEventListener("keyup", this.close);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.close);
    window.removeEventListener("keyup", this.close);
  },

  methods: {
    onCompanySelect(value) {
      this.selectedCompany = value.company;
      this.isListOpen = false;
    },

    openModal(value) {
      //console.log(value);
      this.isListOpen = false;
      this.modalOpen = true;
      //console.log(this.modalOpen);
    },

    closeDropdown() {
      this.isListOpen = false;
    },

    openDropdown() {
      this.isListOpen = true;
    },

    close(event) {
      if (!this.$el.contains(event.target) || event.keyCode === 27) {
        this.isListOpen = false;
      }
    }
  }
};
</script>