<template>
  <div class="expense-list mt-2">
    <h2>Expense List</h2>
    <ul>
      <li v-for="expense in expenses" :key="expense.id">
        {{ expense.description }} - {{ expense.amount }} {{ expense.currency }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchExpenses");
    });
    const expenses = computed(() => store.getters.expensesList);
    // console.log(expenses);
    return { expenses };
  },
};
</script>

<style scoped>
.expense-list {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}

.expense-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

span {
  font-size: 1rem;
  color: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .expense-list {
    padding: 15px;
  }

  .expense-item {
    flex-direction: column;
    align-items: flex-start;
  }

  span {
    margin-bottom: 5px;
  }
}
</style>
