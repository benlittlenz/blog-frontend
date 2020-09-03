<template>
  <div class="flex mt-2 w-64 rounded-md">
    <div class="flex-1 px-1">
      <div class>
        <SelectBox
          type="company"
          :data="customers"
          v-model="selectedCompany"
          v-on:valueSelect="onCompanySelect"
        ></SelectBox>
      </div>
    </div>
  </div>
</template>

<script>
import SelectBox from "./SelectBox";
export default {
  components: {
    SelectBox
  },

  data() {
    return {
      selectedCompany: "",
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

  methods: {
    onCompanySelect(value) {
      this.selectedCompany = value.company;
    }
  }
};
</script>