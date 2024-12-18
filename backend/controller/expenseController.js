import db from "../util/db.js";
import { exchangeRates, isValidCurrency, formatAmount } from "../util/helper.js";

const expenseCtrl = {

    store: async (req, res) => {
        const { description, amount, currency } = req.body;
        if (!description || typeof description !== 'string') {
            return res.status(400).json({ error: 'Invalid or missing description' });
        }
        if (!amount || typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ error: 'Invalid or missing amount' });
        }
        if (!currency || !isValidCurrency(currency)) {
            return res.status(400).json({ error: 'Unsupported or missing currency' });
        }
        const formattedAmount = formatAmount(amount, currency);
        db.run(`INSERT INTO expenses (description, amount, currency) VALUES (?, ?, ?)`,
            [description, formattedAmount, currency],
            function (err) {
                if (err) {
                    return res.status(500).json({ error: 'Failed to add expense' });
                }
                res.status(201).json({ id: this.lastID, description, amount: formattedAmount, currency });
            }
        );
    },
    getAll: async (req, res) => {
        try {
            db.all(`SELECT * FROM expenses`, (err, rows) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to fetch expenses' });
                }
                res.status(200).json(rows);
            });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    getSummary: async (req, res) => {
        try {
            const { baseCurrency } = req.query;

            if (!baseCurrency || !isValidCurrency(baseCurrency)) {
                return res.status(400).json({ error: 'Unsupported or missing baseCurrency' });
            }

            db.all(`SELECT amount, currency FROM expenses`, (err, rows) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to fetch expenses for summary' });
                }

                let total = 0;
                rows.forEach(({ amount, currency }) => {
                    const rate = exchangeRates[currency];
                    total += amount / rate;
                });

                const baseRate = exchangeRates[baseCurrency];
                const convertedTotal = total * baseRate;

                res.status(200).json({ baseCurrency, total: formatAmount(convertedTotal, baseCurrency) });
            });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};

export default expenseCtrl;
