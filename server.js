const express=require('express');
const app = express();
const port=process.env.PORT||3000;


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render('idex')
})



app.post('/',(req,res)=>{
    console.log(req.body)
    res.redirect('/searchpage')
})
app.get('/searchpage',(req,res)=>{
    res.render('searchpage')
})

app.post('/searchpage',(req,res)=>{

})

app.listen(port)