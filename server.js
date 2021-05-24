const express=require('express');
const app = express();
const port=process.env.PORT||3000;

const users=[{user1: 'john'},{ user1: 'nike'}]

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render('idex')
})



app.post('/',(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    bcrypt.hash(req.body.password)

    res.redirect('/searchpage')
    console.log(users)

})

app.get('/searchpage',(req,res)=>{
    res.render('searchpage')
})


app.post('/searchpage',(req,res)=>{
    
       
        console.log()
            res.send(req.body.query)
        })
        
app.get('/profile',(req,res)=>{
    res.render('profile')
})



app.listen(port,()=>{console.log('listening on port')})