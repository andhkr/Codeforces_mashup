const express = require('express')
const app = express()
const port = 3000

const users=[];

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup', (req, res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const user ={
    name,
    email,
  };
  users.push(user);
  res.send("your data added an your data is:\n");
  console.log(users);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log(users);