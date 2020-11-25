<template>
  <v-row align="center" justify="space-around">
    <GraphCard class="ma-4" title="Messages sent per hour" :serie="rate"></GraphCard>
    <GraphCard class="ma-4" title="Bytes sent per hour" :serie="sizeRate"></GraphCard>
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
        .reverse()
        .reduce((buckets: Record[][], cur: Record): Record[][] => {
          if (buckets.length == 0) {
            buckets.push([cur]);
            return buckets;
          }
          const periodStart = (buckets[buckets.length - 1])[0].sentAt;
          if ((periodStart.getTime() - cur.sentAt.getTime()) > 3600000) {
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
    publishersRate() {
      return (this.buckets as Record[][])
        .map((elt: Record[]) => elt.reduce((a: string[], b: Record) => {
          if (!a.includes(b.publisher)) {
            a.push(b.publisher);
          }
          return a;
        }, []))
        .map((elt: string[]) => elt.length);
    },
  },
})
</script>