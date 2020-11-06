<template>
  <div class="linechart">
    <div style="width: 100%" :id="id"></div>
  </div>
</template>
<script>
import Dygraph from 'dygraphs'
import 'dygraphs/dist/dygraph.css'


export default {
  name: 'Linechart',
  props: ['records', 'id'],
  data() {
    return {
      plot: null,
      options: {
        labels: ['Time', "Value"],
      },
    }
  },
  watch: {
    records() {
      if (this.plot !== null && this.records !== undefined && this.records !== null) {
        this.plot.updateOptions({ 'file': this.records, ...this.options });
      }
    },
  },
  mounted: function () {
    // concat label div to options
    this.plot = new Dygraph(
      // containing div
      document.getElementById(this.id),
      this.records,
      this.options,
    );
  }
}
</script>

<style>
.legend {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    vertical-align: bottom;
}
.dygraph-xlabel {
    display: flex;
    justify-content: center;
}

.linechart {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>
