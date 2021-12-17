let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect router to record model
let record = require('../models/record');

module.exports.showContacts = (req,res,next)=>{
    record.find((err,listRecords)=>{
        if (err) 
        {
            return console.error(err);
        }
        else
        {
            //console.log(listRecords);

            res.render('record/records', {title: 'List of Business Contacts', ListRecords: listRecords, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.showAddContacts = (req,res,next)=>{
    res.render('record/add', {title: 'Add a Contact', displayName: req.user ? req.user.displayName : ''});
};

module.exports.updateAddContact = (req,res,next)=>{
    let newRecord = record({
        "name": req.body.name,
        "phoneNo": req.body.phoneNo,
        "email": req.body.email,
       
    });

    record.create(newRecord,(err,record)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/list-contacts');
            //console.log('Contact Added');
        }
    });

};

module.exports.showContacts = (req,res,next)=> {
    res.render('record/take', {title: 'Add a Contact', displayName: req.user ? req.user.displayName : ''})
}


module.exports.deleteContacts= (req,res,next)=>{
    let id = req.params.id;

    record.remove({_id:id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/list-contacts');
            //console.log('Contact Removed');
        }
    })
};