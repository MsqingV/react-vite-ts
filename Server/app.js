const express = require('express');
const app = express();
const cors = require('cors');
const fs =  require('fs');
const jwt = require('jsonwebtoken');
const PROT = 3003;
app.use(cors());


app.get('/getLogin' , (req , res) => {
    const {username , password} = req.query;
    const userData = JSON.parse(fs.readFileSync('./data/user.json' , 'utf-8')).data;
    const filterUser = userData.filter(user => user.username === username && user.password === password);
    if(filterUser && filterUser.length > 0) {
        res.send({
            code : 200,
            msg : '登录成功',
            data : {
                token : jwt.sign({
                    username
                } , 'token' , {
                    expiresIn : '1h'
                })
            }
        })
    } else {
        res.send({
            code : 400,
            msg : '登录失败'
        })
    }
})

app.listen(PROT , () => {
    console.log(`server is running on port ${PROT}`);
})