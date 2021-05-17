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
    res.send(req.body)
})



app.listen(port)