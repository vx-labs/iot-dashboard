<template>
  <DeviceList title="Devices"></DeviceList>
</template>

<script lang="ts">
import Vue from 'vue'

import DeviceList from '@/components/DeviceList.vue';
export default Vue.extend({
  name: 'Devices',
  components: { DeviceList },
});
</script>
