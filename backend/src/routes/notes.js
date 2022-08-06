const express=require('express');

const Notes=require('./../models/notes');
const router=express.Router();



router.post('/list/:userid', async function (req, res) {

    var notes = await Notes.find({ userid: req.params.userid });

    res.json(notes);


});


router.get('/list', async function (req, res) {

    var notes = await Notes.find();

    res.json(notes);


});


router.post('/add', async function (req, res) {
    await Notes.deleteOne({ id: req.body.id });// deletes notes if morethan 1 notes created with same id


    const newNote = Notes({
        id: req.body.id,
        userid: req.body.id,
        title: req.body.title,
        content: req.body.content


    });

    await newNote.save();
    const response = { message: "New Note Created! " + `id: ${req.body.id}` };
    res.json(response);



});
router.post('/delete', async function (req, res) {

    await Notes.deleteOne({ id: req.body.id });
    const response = { messages: 'Notes deleted ' + `${req.body.id}` };
    res.json(response);







});
module.exports=router; 