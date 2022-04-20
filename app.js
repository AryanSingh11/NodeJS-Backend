const express=require('express');
const bodyParser=require('body-parser');
const adminData=require('./routes/admin')
const shopRoutes=require('./routes/shop');
const path=require('path');
const ejs= require('ejs');

const app=express();

app.set('view engine','ejs');
app.set('views','views');
//app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}));

// app.use('/', (req, res,next)=>{
//     //console.log('This will always run');
//     next();
// })

// app.use('/add-product',(req, res, next)=>{
//     res.send('<html><body><form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add product</button></form></body></html>')


// });

// //<html><body><form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add product</button></input></form></body></html>
// app.post('/product',(req, res, next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);

// app.use('/', (req, res,next)=>{
//     res.send('<h1>Hello from express!</h1>')
// })

// const server= http.createServer(app); 
// server.listen(3000); 
//below code does the job of above 2 lines

app.use((req,res,next)=>{
    //res.sendFile(path.join(__dirname,'views','404.html'))
    res.status(404).render('404',{pageTitle:'Page not found'});
})

app.listen(3000);
