const express = require('express');
const sequelize = require('sequelize');
const db = require('../../models');
const country = db['Country'];
const businessArea = db['businessArea'];
const department =db['department'];
const ideaDepartment = db['ideaDepartment'];
const classification1 = db['classification1'];
const classification2 = db['classification2'];
const classification3 = db['classification3'];
const routes = express.Router();

//country REST API
//get
routes.get('/getCountry', async (req, res) => {
    try {
        const result = await country.findAll();
        return res.status(200).json({ Message: result });
    }
    catch (err) {
        return res.status(500).json({ Error: err.message });
    }
})
//post
routes.post('/addCountryData', async (req, res) => {
    try {
        const name = req.body.name
        if (!req.body.name) {
            return res.status(400).json({ Error: "Please Enter the correct Details." });
        }
        else {
            const duplicateData = country.findOne({ where: { name: name } });
            if (!duplicateData) {
                const addData = await country.create({ name: req.body.name });
                return res.status(200).json({ Message: "Country Details Added Sucessfully.", addCountry: addData });
            }
            else {
                return res.status(402).json({ Error: req.body.name + " Already Exist." })
            }
        }
    }
    catch (err) {
        return res.status(500).json({ Error: err.message });
    }
})
routes.put('/updateCountryData/:id', async (req, res) => {
    try {
        // const id = res.params.id
        const name = req.body.name
        if (!req.body.name) {
            return res.status(400).json({ Error: "Please Enter the correct details." });
        }
        else {
            const idExist = await country.findOne({ where: { id: req.params.id } });
            const nameExist = await country.findOne({ where: { name: req.body.name } });
            if (!idExist) {
                return res.status(402).json({ Error: req.params.id + " Does Not Exist." })
            }
            else {
                if (!nameExist) {
                    const updateCountry = await country.update({ name }, { where: { id: req.params.id } });
                    return res.status(200).json({ Message: "Country Details Updated Sucessfully." })
                }
                else {
                    return res.status(402).json({ Error: req.body.name + " Already Exist." });
                }
            }
        }
    }
    catch (err) {
        return res.status(500).json({ Error: err.message });
    }
})
routes.delete('/deleteCountryData/:id', async (req, res) => {
    try {
            const duplicateData = await country.findOne({ where: { id: req.params.id } });
            if (!duplicateData) {
                return res.status(402).json({ Error: req.params.id + " Does not Exist." });
            }
            else {
                const deleteCountry = await country.destroy({ where: { id: req.params.id } });
                return res.status(200).json({ Message: "Country Deleted Successfully." });
            }
        }
    catch (err) {
        return res.status(500).json({ Error: err.message });
    }
})
//businessArea REST API
//get
routes.get('/getBusinessArea',async(req,res)=>{
    try{
        const display = await businessArea.findAll();
        return res.status(200).json({Message:display});
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//post
routes.post('/addBusinessArea',async(req,res)=>{
    try{
        const name = req.body.name
        if(!req.body.name){
            return res.status(400).json({Error:"Please Enter the Correct Details."});
        }
        else{
            const duplicateData = await businessArea.findOne({where:{name:req.body.name}});
            if(!duplicateData){
                const addBusinessArea = await businessArea.create({name: req.body.name});
                return res.status(200).json({Message:"Business Area Added Sucessfully.",addBusinessArea:addBusinessArea});       
            }
            else{
                return res.status(402).json({Error:req.body.name + " Already Exist."})
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
})
//put
routes.put('/updateBusinessArea/:id',async(req,res)=>{
    try{
        const name =req.body.name;
        if(!req.body.name)
        {
            return res.status(402).json({Error:"Please Enter the Correct Details."});
        }
        else{
            const idExist = await businessArea.findOne({where:{id:req.params.id}});
            const nameExist = await businessArea.findOne({where:{name:req.body.name}});
            if(!idExist){
                return res.status(400).json({Error:req.params.id + " Does not Exist."})
            }
            else{
                if(!nameExist){
                    const updateBusinessArea =await businessArea.update({name},{where:{id:req.params.id}});
                    return res.status(200).json({Message:"Business Area Updated Sucessfully."});
                }
                else {
                    return res.status(402).json({ Error: req.body.name + " Already Exist." });
                }
            }  
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//delete
routes.delete('/deleteBusinessArea/:id',async(req,res)=>{
    try{
        const duplicateData = await businessArea.findOne({where:{id:req.params.id}});
        if(!duplicateData){
            return res.status(400).json({Error:req.params.id + " Does Not Exist."});
        }
        else{
            const deleteBusinessArea = await businessArea.destroy({where:{id:req.params.id}});
            return res.status(200).json({Message:"Business Area Deleted Sucessfully."});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//department REST API 
//get
routes.get('/getDepartment',async(req,res)=>{
    try{
        const getDepartment = await department.findAll();
        return res.status(200).json({Message:getDepartment});
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//post
routes.post('/addDepartment',async(req,res)=>{
    try{
        const name = req.body.name
        if(!req.body.name){
            return res.status(400).json({Error:"Please Enter the Correct Details."});
        }
        else{
            const duplicateData = await department.findOne({where:{name:req.body.name}});
            if(!duplicateData){
                const addDepartment = await department.create({name: req.body.name});
                return res.status(200).json({Message:"Department Added Sucessfully.",addDepartment:addDepartment});       
            }
            else{
                return res.status(402).json({Error:req.body.name + " Already Exist."})
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.put('/updateDepartment/:id',async(req,res)=>{
    try{
        const name = req.body.name
        if(!req.body.name){
            return res.status(402).json({Error:"Please Enter the Correct Details."});
        }
        else
        {
            const idExist = await department.findOne({ where: { id: req.params.id } });
            const nameExist = await department.findOne({where:{name:req.body.name}});
            if(!idExist){
                return res.status(400).json({Error:req.params.id +"Does not Exist."});
            }
            else{
                if(!nameExist){
                    const updateDepartment = await department.update({name},{where:{id:req.params.id}});
                    return res.status(200).json({Message:"Department Updated Successfully."});
                }
                else{
                    return res.status(402).json({Error:req.body.name + " Already Exist."})
                }
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.delete('/deleteDepartment/:id',async(req,res)=>{
    try{
        const duplicateData = await department.findOne({where:{id:req.params.id}});
        if(!duplicateData){
            return res.status(400).json({Error:req.params.id + " Does Not Exist."});
        }
        else{
            const deleteDepartment = await department.destroy({where:{id:req.params.id}});
            return res.status(200).json({Message:"Department Deleted Sucessfully."});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});

//ideaDepartment REST API 
//get
routes.get('/getIdeaDepartment',async(req,res)=>{
    try{
        const getIdeaDepartment = await ideaDepartment.findAll();
        return res.status(200).json({Message:getIdeaDepartment});
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//post
routes.post('/addIdeaDepartment',async(req,res)=>{
    try{
        const name = req.body.name
        if(!req.body.name){
            return res.status(400).json({Error:"Please Enter the Correct Details."});
        }
        else{
            const duplicateData = await ideaDepartment.findOne({where:{name:req.body.name}});
            if(!duplicateData){
                const addIdeaDepartment = await ideaDepartment.create({name: req.body.name});
                return res.status(200).json({Message:"IdeaDepartment Added Sucessfully.",addIdeaDepartment:addIdeaDepartment});       
            }
            else{
                return res.status(402).json({Error:req.body.name + " Already Exist."})
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.put('/updateIdeaDepartment/:id',async(req,res)=>{
    try{
        const name = req.body.name
        if(!req.body.name){
            return res.status(402).json({Error:"Please Enter the Correct Details."});
        }
        else
        {
            const idExist = await ideaDepartment.findOne({ where: { id: req.params.id } });
            const nameExist = await ideaDepartment.findOne({where:{name:req.body.name}});
            if(!idExist){
                return res.status(400).json({Error:req.params.id +" Does not Exist."});
            }
            else{
                if(!nameExist){
                    const updateIdeaDepartment = await ideaDepartment.update({name},{where:{id:req.params.id}});
                    return res.status(200).json({Message:"IdeaDepartment Updated Successfully."});
                }
                else{
                    return res.status(402).json({Error:req.body.name + " Already Exist."})
                }
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.delete('/deleteIdeaDepartment/:id',async(req,res)=>{
    try{
        const duplicateData = await ideaDepartment.findOne({where:{id:req.params.id}});
        if(!duplicateData){
            return res.status(400).json({Error:req.params.id + " Does Not Exist."});
        }
        else{
            const deleteIdeaDepartment = await ideaDepartment.destroy({where:{id:req.params.id}});
            return res.status(200).json({Message:"IdeaDepartment Deleted Sucessfully."});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//REST API for classification1
//get
routes.get('/getClassification1Data',async(req,res)=>{
    try{
        const getClassification1Data = await classification1.findAll();
        return res.status(200).json({getClassification1Data:getClassification1Data});
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.get('/getClassification1/:ideaDepartmentId',async(req,res)=>{
    try{
        const idExist = await classification1.findOne({where:{ideaDepartmentId:req.params.ideaDepartmentId}});
        if(!idExist){
            return res.status(400).json({Error:req.params.ideaDepartmentId + " Does not Exist."});
        }
        else{
            const getClassification1 =await classification1.findAll({where:{ideaDepartmentId:req.params.ideaDepartmentId}});
            return res.status(200).json({getClassification1:getClassification1});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.post('/addClassification1',async(req,res)=>{
    try{
        if(!req.body.ideaDepartmentId || ! req.body.name){
            return res.status(400).json("Please Enter the Correct Details.");
        }
        else{
           const nameExist = await classification1.findOne({where:{name:req.body.name}});
           if(!nameExist){
            const addClassification1 = await classification1.create({ideaDepartmentId:req.body.ideaDepartmentId ,name:req.body.name});
            return res.status(200).json({Message:"Classification1 Added Sucessfully.",addClassification1:addClassification1})
           }
           else{
            return res.status(400).json({Error:req.body.name + " Already Exist."});
           }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.put('/updateClassification1',async(req,res)=>{
    try{
        if(!req.body.id || !req.body.name){
            return res.status(400).json({Error:"Please Enter the Correct Details."});
        }
        else{
            const idExist = await classification1.findOne({where:{id:req.body.id}});
            if(!idExist){
                return res.status(400).json({Error:req.body.id+" Does not Exist."});
            }
            else{
                const nameExist = await classification1.findOne({where:{name:req.body.name}});
                if(!nameExist){
                    const updateClassification1 = await classification1.update({name:req.body.name},{where:{id:req.body.id}})
                    return res.status(200).json({Message:"Classification1 Updated Sucessfully."});
                }
                else{
                    return res.status(400).json({Error:req.body.name+" Already Exist."});
                }
               
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.delete('/deleteClassification1/:id',async(req,res)=>{
    try{
        const idExist = await classification1.findOne({where:{id:req.params.id}});
        if(!idExist){
            return res.status(400).json({Error:req.params.id + " Does not Exist."});
        }
        else{
            const deleteClassification1 =  await classification1.destroy({where:{id:req.params.id}});
            return res.status(200).json({Message:"Classification1 Deleted Sucessfully."});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//REST API for classification2
//get
routes.get('/getClassification2Data',async(req,res)=>{
    try{
        const getClassification2Data = await classification2.findAll();
        return res.status(200).json({getClassification2Data:getClassification2Data});
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.get('/getClassification2/:classification1Id',async(req,res)=>{
    try{
        const idExist =await classification2.findOne({where:{classification1Id:req.params.classification1Id}});
        if(!idExist){
            return res.status(400).json({Error:req.params.classification1Id +" Does not Exist."})
        }
        else{
            const getClassification2 = await classification2.findAll({where:{classification1Id:req.params.classification1Id}});
            return res.status(200).json({getClassification2:getClassification2});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.post('/addClassification2',async(req,res)=>{
    try{
        if(!req.body.classification1Id || !req.body.name){
            return res.status(400).json({Error:"Please Enter the Correct Details."});
        }
        else{
            nameExist = await classification2.findOne({where:{name:req.body.name}});
            if(!nameExist){
                const addClassification2 = await classification2.create({classification1Id:req.body.classification1Id ,name:req.body.name})
                return res.status(200).json({Message:"Classification2 Added Sucessfully."});
            }
            else{
                return res.status(400).json({Error:req.body.name + " Already Exist."});
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.put('/updateClassification2',async(req,res)=>{
    try{
        if(!req.body.id || ! req.body.name){
            return res.status(400).json({Error:"Please Enter the Correct Details."});
        }
        else{
            const idExist = await classification2.findOne({where:{id:req.body.id}});
            if(!idExist){
                return res.status(400).json({Error:req.body.id + " Does not Exist."});
            }
            else{
                const nameExist = await classification2.findOne({where:{name:req.body.name}});
                if(!nameExist){
                    const updateClassification2 = await classification2.update({ name:req.body.name},{where:{id:req.body.id}});
                    return res.status(200).json({Message:"Classification2 Updated Sucessfully."});
                }
                else{
                    return res.status(400).json({Error:req.body.name+" Already Exist."});
                }
            }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.delete('/deleteClassification2/:id',async(req,res)=>{
    try{
        const idExist = await classification2.findOne({where:{id:req.params.id}});
        if(!idExist){
            return res.status(400).json({Error:req.params.id + " Does not Exist."});
        }
        else{
            const deleteClassification2 = await classification2.destroy({where:{id:req.params.id}})
            return res.status(200).json({Message:"Classification2 Deleted Sucessfully."});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});



//REST API for classification3
//get
routes.get('/getClassification3Data',async(req,res)=>{
    try{
        const display = await classification3.findAll();
        return res.status(200).json({Message:display});
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//by id
routes.get('/getClassification3/:businessAreaId',async(req,res)=>{
    try{
        const display = await classification3.findOne({where:{businessAreaId:req.params.businessAreaId}});
        console.log("display",display);
        if(!display){
            return res.status(400).json({Error:"ID "+ req.params.businessAreaId + " Does not Exist."})
        }
        else {
          const result =await classification3.findAll({where:{businessAreaId:req.params.businessAreaId}})
            return res.status(200).json({Message:result});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});

routes.post('/addClassification3',async(req,res)=>{
    try{
        if(!req.body.businessAreaId || ! req.body.name){
            return res.status(400).json({Error:"Please Enter the correct details."})
        }
        else{
           const duplicateData = await classification3.findOne({where:{name:req.body.name}});
           if(!duplicateData){
            const addClassification3 = await classification3.create({businessAreaId:req.body.businessAreaId,name: req.body.name});
            return res.status(200).json({Message: "Classification3 Added Sucessfully.",addClassification3:addClassification3});
           }
           else{
            return res.status(402).json({Error:req.body.name + " Already Exist."});
           }
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.put('/updateClassification3',async(req,res)=>{
    try{
        if(!req.body.id || ! req.body.name){
            return res.status(400).json({Error:"Please Enter the Correct Details."});
        }
        else{
            const idExist = await classification3.findOne({where:{id:req.body.id}});
            if(!idExist){
                return res.status(400).json({Error:req.body.id + " Does not Exist."});
            }
            else{
            const nameExist = await classification3.findOne({where:{name:req.body.name}});
            if(!nameExist){
                const updateClassification3 = await classification3.update({name:req.body.name},{where:{id:req.body.id}});
                return res.status(200).json({Message:"Classification3 Updated Sucessully."});
            }
            else{
                return res.status(400).json({Error: req.body.name+ " All ready Exist."});
            } 
        }
    }
}
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
routes.delete('/deleteClassification3/:id',async(req,res)=>{
    try{
        const idExist = await classification3.findOne({where:{id:req.params.id}});
        if(!idExist){
            return res.status(400).json({Error:req.params.id + " Does not Exist."});
        }
        else{
            const deleteClassification3 = await classification3.destroy({where:{id:req.params.id}});
            return res.status(200).json({Message:"Classification3 Deleted Sucessfully."});
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});



module.exports = { routes };