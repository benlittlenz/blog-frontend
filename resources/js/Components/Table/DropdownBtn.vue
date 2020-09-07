<template>
  <div>
    <button
      class="focus:outline-none"
      :class="{'animate-btnToggle bg-primary': open === true}"
      @click="toggleClickedState()"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" class="dots-horizontal w-6 h-6">
        <path
          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
        />
      </svg>
    </button>
    <!-- <div class :class="{'bg-red-500': open === true}"></div> -->
    <DropdownMenu :state="open" />
  </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu";
export default {
  components: {
    DropdownMenu
  },

  data() {
    return {
      open: false
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
    toggleClickedState() {
      this.open = !this.open;
    },

    close(event) {
      if (!this.$el.contains(event.target) || event.keyCode === 27) {
        this.open = false;
      }
    }
  }
};
</script>