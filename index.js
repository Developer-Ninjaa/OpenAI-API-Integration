const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const contractsRoutes = require('./routes/contracts');
const sourcingRoutes = require('./routes/sourcing');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/contracts', contractsRoutes);
app.use('/sourcing', sourcingRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
