const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const question = [
    {"question":"What is 5 X 5","ans1":20,"ans2":10,"ans3":25,"ans4":30,"correct":25},
    {"question":"What is 7 X 5","ans1":20,"ans2":10,"ans3":25,"ans4":35,"correct":35},
    {"question":"What is 9 X 3","ans1":27,"ans2":10,"ans3":25,"ans4":30,"correct":27},
    {"question":"What is 4 X 7","ans1":20,"ans2":10,"ans3":28,"ans4":30,"correct":28},
    {"question":"What is 2 X 5","ans1":20,"ans2":10,"ans3":25,"ans4":30,"correct":10},
];

app.get('/',(req,res,next)=>{
    res.json({status: true, question});
});

app.listen(3000, ()=>{
    console.log("server has started at 3000");
});