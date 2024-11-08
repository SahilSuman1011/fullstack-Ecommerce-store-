const express = require('express');
const cors = require('cors');
const response = await axios.get('http://localhost:5000/api/products');

const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
