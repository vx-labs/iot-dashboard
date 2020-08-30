<script>
import Vue from "vue";
import { Line } from "vue-chartjs";

export default Vue.extend({
  name: 'timeline',
  props: ["records"],
  extends: Line,
  watch: {
    records() {
      this.$data._chart.data.datasets[0].data = this.parsedLogs;
      this.$data._chart.update();
    }
  },
  computed: {
    parsedLogs() {
      return this.records.map(elt => ({
        t: new Date(elt.timestamp/1000000),
        y: atob(elt.payload),
      }));
    },
  },
  mounted() {
    this.renderChart(
      {
        datasets: [
          {
            label: "Records",
            data: this.parsedLogs,
          },
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              time: {
                minUnit: "minute",
                round: "minute"
              }
            }
          ]
        }
      }
    );
  }
});

</script>

<style>
</style>