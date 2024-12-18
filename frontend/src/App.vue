<template>
  <div id="app" class="container">
    <h1>Expense Tracker</h1>
    <div class="flex-row">
      <section class="">
        <ExpenseForm />
      </section>
      <section class="flex-column mb-3">
        <ExpenseList />
        <Summary />
      </section>
    </div>
  </div>
</template>

<script>
import ExpenseForm from "./components/ExpenseForm.vue";
import ExpenseList from "./components/ExpenseList.vue";
import Summary from "./components/Summary.vue";

export default {
  components: {
    ExpenseForm,
    ExpenseList,
    Summary,
  },
};
</script>

<style>
/* Add some global styling */
</style>
