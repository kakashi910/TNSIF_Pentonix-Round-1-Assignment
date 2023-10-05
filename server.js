const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const secretKey = 'my-secret-key';

app.use(express.json());
app.post('/login', (req, res) => {
  
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'password') {
    
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    
    res.json({ token });
  } else {
 
    res.status(401).json({ error: 'Invalid username or password' });
  }
});
app.get('/protected', (req, res) => {
  
  const token = req.headers['authorization'];
  
  try {
    const decoded = jwt.verify(token, secretKey);
  
    res.json({ message: 'Welcome, ' + decoded.username });
  } catch (error) {
    
    res.status(401).json({ error: 'Invalid token' });
  }
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});