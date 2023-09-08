const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9040;

app.use(express.static(path.join(__dirname, 'home/antino/Desktop/project/my-frontend-app/build')));

app.get('/', (req, res) => {
  res.send('Vardaan from Antino serving data through backend');
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});

