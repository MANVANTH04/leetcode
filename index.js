import express from 'express';
const app = express();
const port = 3000;
import flash from 'express-flash';
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import questionsarray from './questionsarray.js';
const questions = questionsarray();


app.set('view engine', 'ejs');

const users = [ ];





app.get('/', (req, res) => {
    res.send('gandu');
    }
);


app.get('/login',(req,res)=>{  
    res.render('login');
});

app.post('/login',(req,res)=>{
   res.send('login successful');
   res.render('questions',{questions});
});


app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',(req,res)=>{
    if (req.body.password != req.body.password2){
        // res.alert('passwords do not match');
        app.use(flash("error","passwords do not match"));
        
    }
    else{users.push(
        {username : req.body.username,
        password : req.body.password}
    );
    console.log(users);
    res.render('questions', {questions});
   } 
})

app.get('/questions',(req,res)=>{
    res.render('questions',{questions});
})

app.get('/admin',(req,res)=>{
    res.render('login');
})

// in admin post page. we have to check if the username and password are correct. 
//if they are then we have to render the admin page. else we have to render the 
//login page again with a flash message saying that the username or password is incorrect.

app.post('/admin',(req,res)=>{  
    if (req.body.username == 'admin' && req.body.password == 'admin'){
        res.render('admin');
    }})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);