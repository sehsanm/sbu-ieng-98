const express = require('express')
const app = express()
const port = 3000

console.log('--------------------------- NEW APP ')
app.use('/' , (req, res, next)=>{
    console.log('Middleware Called!')
});

app.get('/', (req, res) => {
    console.log('Get method called')    
    res.send('Hello World!')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

