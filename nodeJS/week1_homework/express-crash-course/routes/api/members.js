const express = require('express');
const members = require('../../members');
const uuid = require('uuid');
const router = express.Router();


//gets all members
router.get('/', (req, res)=> res.json(members));

//get single member
router.get('/:id', (req, res) => {
    const found = members.some( member => `${member.id}` === req.params.id )
    if (found) {
        res.json(members.filter((member)=> `${member.id}` === req.params.id))
    } else {
        res.status(400)
        .json({error: {
            code: 404,
            message: `we don't have a member with this id : ${req.params.id} `
        }});
    }
})

//creat member
router.post('/', (req, res) => {
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : 'active'
    }

    if (!newMember.name || !newMember.email){
        return res.status(400).json({msg: "please include name and email"})
    }
    
    if ( members.some(member => member.name === newMember.name || member.email === newMember.email) ) {
        return res.json({error: {
            code: 590,
            msg: 'this name or email has been used before'
        }})
    }

    members.push(newMember);
    res.json(members)
})

//update members
router.put('/:id', (req, res) => {
    const found = members.some( member => `${member.id}` === req.params.id )
    if (found) {
        res.json(members.filter((member)=> `${member.id}` === req.params.id))
    } else {
        res.status(400)
        .json({error: {
            code: 404,
            message: `we don't have a member with this id : ${req.params.id} `
        }});
    }
})


module.exports = router;

