let users = []; 

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  
  const token = Math.random().toString(36).substring(7);
  res.status(200).json({ token });
};

const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
 
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.status(201).json({ message: 'Registration successful' });
};

module.exports = {
  login,
  register
};
