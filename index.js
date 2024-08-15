import express from 'express';
// create a new express application instance
const app = express();

// add just below const app =express();
app.use(express.urlencoded({extended: false }))
app.use(express.json())

// create a default route
app.get('/api/Hello', function(req, res){
    const name = req.query.name;
    const surname = req.query.surname;
    res.json({
        message: "Hello, " + name + " " + surname
    });
});

app.post('/api/Hello', function(req, res){
     console.log(req.body);
    const name = req.body.name;
    const surname = req.body.surname;
    res.json({
        message: "Hello, " + name + " " + surname
    });
   
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    
})