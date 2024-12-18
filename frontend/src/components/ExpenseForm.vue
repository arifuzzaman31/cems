<template>
  <div class="expense-form">
    <h2>Add Expense</h2>
    <form @submit.prevent="submitExpense">
      <div class="form-group">
        <label>Description</label>
        <input v-model="description" type="text" required />
      </div>
      <div class="form-group">
        <label>Amount</label>
        <input v-model.number="amount" type="number" required />
      </div>
      <div class="form-group">
        <label>Currency</label>
        <select v-model="currency" required>
          <option
            v-for="(rate, code) in exchangeRates"
            :key="code"
            :value="code"
          >
            {{ code }}
          </option>
        </select>
      </div>
      <button class="btn" type="submit">Add Expense</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { exchangeRates } from "@/util/helper.js";

export default {
  setup() {
    const store = useStore();
    const description = ref("");
    const amount = ref(0);
    const currency = ref("USD");

    const submitExpense = () => {
      store.dispatch("addExpense", {
        description: description.value,
        amount: amount.value,
        currency: currency.value,
      });
      description.value = "";
      amount.value = 0;
      currency.value = "USD";
    };

    return {
      description,
      amount,
      currency,
      submitExpense,
      exchangeRates,
    };
  },
};
</script>

<style scoped>
</style>
