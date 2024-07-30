import express from 'express';
import fs from 'fs'
import {upload} from '../model/upload.js'
const router = express.Router();
router.post('/upload',upload.any(),(req,res)=>{
    console.log(req.files);
    res.send({status:true,url:'/files/images/'+req.files[0].filename})
})
router.post('/anyupload',upload.any(),(req,res)=>{
    console.log(req.files);
    const imgarr = []
    req.files.map(file=>{
        imgarr.push('/files/images/'+file.filename)
    })
    res.send({status:true,url:imgarr})
})
router.get('/images/:slug',(req,res)=>{
    const img = req.params.slug;
    const imagedir = fs.readFileSync('./uploads/'+img)
    res.contentType('image/jpeg');
    res.send(imagedir)
})
export default router;