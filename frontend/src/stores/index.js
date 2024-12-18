import { createStore } from "vuex";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export default createStore({
    state: {
        expenses: [],
        summary: null,
    },
    mutations: {
        setExpenses(state, expenses) {
            state.expenses = expenses;
        },
        addExpense(state, expense) {
            state.expenses.push(expense);
        },
        setSummary(state, summary) {
            state.summary = summary;
        },
    },
    actions: {
        async fetchExpenses({ commit }) {
            try {
                const { data } = await axios.get(`${API_BASE_URL}/api/expenses`);
                commit("setExpenses", data);
            } catch (error) {
                console.error("Failed to fetch expenses:", error);
            }
        },
        async addExpense({ commit }, expense) {
            try {
                const { data } = await axios.post(`${API_BASE_URL}/api/expenses`, expense);
                commit("addExpense", data);
            } catch (error) {
                console.error("Failed to add expense:", error);
            }
        },
        async fetchSummary({ commit }, baseCurrency) {
            try {
                const { data } = await axios.get(`${API_BASE_URL}/api/summary`, {
                    params: { baseCurrency },
                });
                commit("setSummary", data);
            } catch (error) {
                console.error("Failed to fetch summary:", error);
            }
        },
    },
    getters: {
        totalExpenses: (state) => state.expenses.length,
        expensesList: (state) => state.expenses,
        summaryData: (state) => state.summary,
    },
});
