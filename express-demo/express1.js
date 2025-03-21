import express from 'express'

const app = express();

app.get('', (req, res)=>{
    res.send('Hello Praveen S Kalawad');
});

app.get('/about', (req, res)=>{
    let name = req.query.name;
    res.send(`This is about page ${name}`);
})

app.get('/help', (req, res)=>{
    res.send('This is help page');
})

app.listen(4500);