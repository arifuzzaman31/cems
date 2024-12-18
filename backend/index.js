import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
const PORT = 3001;
import expenseCtrl from "./controller/expenseController.js";

app.use(bodyParser.json());

app.post('/api/expenses', expenseCtrl.store);
app.get('/api/expenses', expenseCtrl.getAll);
app.get('/api/summary', expenseCtrl.getSummary);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});