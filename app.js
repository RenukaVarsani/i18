const express = require('express');
const app = express();
const I18n= require('i18n');
const path = require('path');
const LanguageDetector = require('i18next-browser-languagedetector')
import { log } from 'console';
import { v4 as uuidv4 } from 'uuid';


I18n.configure({
    locales:['en' , 'hi'],
    directory: path.join(__dirname , 'translation'),
   defaultLocale : 'en'
})

app.use(I18n.init);

app.get('/test' , async(req,res)=>{
    res.send({home:res.__('HOME') , name:res.__('MESSAGE')})
    console.log( uuidv4()) 
})

    app.use(function(req,res,next){
        i18n.setLocale(req,req.headers['abcd']);
        next();
    })




app.listen(8000, ()=>{
   
    console.log("server is running on 8000 port");
})