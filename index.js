const express = require('express');
const app = express();
const port = 8000;
const data = require("./db.json");
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/thumbnails', (req, res) => {
  res.json(data.thumpnails);
});

app.get('/designs', (req, res) => {
  res.json(data.designs);
});

app.get('/profiles', (req, res) => {
  res.json(data.profiles);
});

app.get('/login', (req, res) => {
    const { email, password } = req.query;
    console.log('Email:', email, 'Password:', password); // Debugging
    
    const user = data.users.find(
      user => user.email === email && user.password === password
    );
  
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
