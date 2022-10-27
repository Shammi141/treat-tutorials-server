const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const tutorial = require('./data/tutorial.json');

app.get('/', (req, res) =>{
    res.send('tutorial api running')
});

//all getting category data
app.get('/tutorial-category', (req, res) =>{
    res.send(categories);
});

//getting categoryId based data
app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const categoryTutorial = tutorial.filter(t => t.category_id === id);
    res.send(categoryTutorial);
});

//showing all tutorials for home page
app.get('/tutorial', (req, res) =>{
    res.send(tutorial);
});

//getting tutorial data
app.get('/tutorial/:id', (req, res) =>{
    const id = req.params.id;
    const selectedTutorial = tutorial.find(t => t._id === id);
    res.send(selectedTutorial);
});




app.listen(port,  () => {
    console.log('tutorials server is running on port');
});