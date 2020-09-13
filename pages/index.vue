<template>
    <client-only>
      <Dropdown />
    </client-only>
  
</template>

<script>
import ClientOnly from 'vue-client-only'

import Dropdown from "../components/Dropdown/Dropdown";
import Table from '../components/Table/Table'

export default {
  
  components: {
    ClientOnly,
    Dropdown,
    Table
  }
};
</script>