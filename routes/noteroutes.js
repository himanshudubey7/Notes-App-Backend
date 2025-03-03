const express = require('express');
const router = express.Router();
const Note = require('../models/notes');

//create a note 

router.post('/', async(req, res)=>{
    try{

        const{title, content} = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

// get all notes

router.get('/', async(req,res) =>{
    const notes = await Note.find();
    res.json(notes);
});

//get a single note

router.get('/:id', async(req,res)=> {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message: "note not found!"});
    res.json(note);
});

// update a note

router.put('/:id', async(req, res) => {
    const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updateNote);
});

// delete a note

router.delete('/:id', async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Note deleted!!"});

});

module.exports = router;

