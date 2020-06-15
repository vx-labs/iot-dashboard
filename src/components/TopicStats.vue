<template>
  <v-row justify="space-around">
    <GraphCard title="Messages sent per hour" :serie="rate"></GraphCard>
    <GraphCard title="Bytes sent per hour" :serie="sizeRate"></GraphCard>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Record } from '@/store/types';
import GraphCard from '@/components/GraphCard.vue';
export default Vue.extend({
  components: { GraphCard },
  computed: {
    ...mapGetters([
      'selectedTopicRecords',
    ]),
    buckets() {
      return (this.selectedTopicRecords as Record[])
        .reduce((buckets: Record[][], cur: Record): Record[][] => {
          if (buckets.length == 0) {
            buckets.push([cur]);
            return buckets;
          }
          const periodStart = (buckets[buckets.length - 1])[0].timestamp;
          if (periodStart - cur.timestamp >= 3600 * 1000000000) {
            buckets.push([cur]);
          } else {
            buckets[buckets.length - 1].push(cur);
          }
          return buckets;
        }, []);
    },
    rate() {
      return (this.buckets as Record[][])
        .map((elt: Record[]) => elt.length);
    },
    sizeRate() {
      return (this.buckets as Record[][])
        .map((elt: Record[]) => elt.reduce((a, b) => a + b.payload.length, 0));
    },
  },
})
</script>