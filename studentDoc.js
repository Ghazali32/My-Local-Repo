const { json } = require("express");
const e = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const student = [{
    name : 'Ghazali',
    department : 'CSE',
    subjects : [{
        pass : true
    },
    {
        pass : false
    },
    {
        pass : true
    }]
}]

app.get('/students',(req,res) =>{ //This method gets ther details of the student object
    const name = student[0].name;
    const subjects = student[0].subjects.length;
    let subjectsPassed = 0;
    let subjectFailed = 0;
    for(let i = 0; i<subjects; i++)
    {
        if(student[0].subjects[i].pass)
        {
            subjectsPassed+=1;
        }
    }
    subjectFailed = subjects - subjectsPassed;
    res.json({
        name,
        subjects,
        subjectsPassed,
        subjectFailed
    });
});

app.post('/students',(req,res) =>{
    //This post method add subjects in the subject object 
    const isPassed = req.body.isPassed;
    student[0].subjects.push({
        pass : isPassed
    });

    res.json({
        msg : "Subject added"
    })
})

app.put('/students',(req,res) =>{
    //This method updates the subject object and make the student passed in all the subjects 
    for(let i = 0; i<student[0].subjects.length; i++)
    {
        student[0].subjects[i].pass = true;
    }

    res.json({
        msg : "Student passed in all subjects"
    })
})

app.delete('/students',(req,res) =>{
    //This method updates the subject object and removed the subject in which student is failed
    let isTrue = false;
    isPassedSubjects(isTrue);
    if(isTrue){
        let NewSub = [];
    for(let i = 0; i<student[0].subjects.length; i++)
    {
        if(student[0].subjects[i].pass)
        {
            NewSub.push({
                pass : true
            })
        }
    }
    student[0].subjects = NewSub;
    res.json({
        msg : "all the subject which was failed is removed"
    });
    }else{
        res.status(411).json({
            msg : "Student already passed in all the subjects"
        });

    }
    
})

function isPassedSubjects(isTrue){
    for(let i = 0; i<student[0].subjects.length; i++)
    {
        if(student[0].subjects[i].pass)
        {
            isTrue = true;
        }
    }
    return isTrue;
}


app.listen(3000, ()=>{
    console.log('Student detail system can Now be viewed on 3000');
});

//write a function in js to sort an array

