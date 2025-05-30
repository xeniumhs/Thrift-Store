import express from 'express';
import cors from 'cors';
import vendorRoutes from './routes/vendor.js'; // Note the .js extension

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/vendors', vendorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
