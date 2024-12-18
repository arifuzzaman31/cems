<template>
  <div class="summary">
    <h2>Summary</h2>
    <div>
      <label>Base Currency</label>
      <select v-model="baseCurrency">
        <option v-for="(rate, code) in exchangeRates" :key="code" :value="code">
          {{ code }}
        </option>
      </select>
      <button class="btn mt-3" @click="fetchSummary">Get Summary</button>
    </div>
    <div v-if="summary">
      <h3>Total: {{ summary.total }} {{ summary.baseCurrency }}</h3>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { exchangeRates } from "@/util/helper.js";

export default {
  setup() {
    const store = useStore();
    const baseCurrency = ref("USD");
    const summary = ref(null);

    const fetchSummary = async () => {
      await store.dispatch("fetchSummary", baseCurrency.value);
      summary.value = store.getters.summaryData;
    };

    return {
      baseCurrency,
      summary,
      fetchSummary,
      exchangeRates,
    };
  },
};
</script>

<style scoped>
/* Add some basic styling */
</style>
