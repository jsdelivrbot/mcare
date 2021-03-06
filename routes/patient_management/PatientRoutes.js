/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the patient management"s route class.
It receives calls from the "Index.js" and
passes the calls down to the "PatientController" class

*/


const express = require('express');
const router = express.Router();
const PatientController = require('../../controllers/patient_management/PatientController.js');

 
//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});
 
 



router.get('/',function(request,res){
	
   res.send("Hello!Welcome to mcare");
});







router.get('/patient_registration',function(request,response){
    var	jsonObject_ = {
        FacilityId:request.query.FacilityId,
		Surname:request.query.Surname,
		MiddleName:request.query.MiddleName,
		LastName:request.query.LastName,
		PatientPhoneNumber:request.query.PatientPhoneNumber,
		PatientEmail:request.query.PatientEmail,
		PatientPhysicalAddress:request.query.PatientPhysicalAddress,
		PatientDateOfBirth:request.query.PatientDateOfBirth,
		PatientReferenceNo:request.query.PatientReferenceNo,
		ParentId:request.query.ParentId,
		Deceased:request.query.Deceased,
		PatientPicUrl:request.query.PatientPicUrl,
		ActualImage:request.query.ActualImage
      
   };
	
	var myPatientControllerObject=new PatientController();
    myPatientControllerObject.insertPatients(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/get_all_patients',function(request,response){
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.getAllPatients(function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/update_patients',function(request,response){
	
var	jsonObject_ = {
      Surname:request.query.first_name,
      MiddleName:request.query.last_name
   };
	
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.batch_patients_update(jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/get_specific_patients',function(request,response){
   var mKey=request.query.column_name;
   //var mValue=parseInt(request.query.search_value, 10);
   var mValue=request.query.search_value;
   
   var myPatientControllerObject=new PatientController();


    myPatientControllerObject.getSpecificPatients(mKey,mValue,function(request,res){

        var returned_value_=res;

        response.send(returned_value_);
    });

});






router.get('/update_individual_patient',function(request,response){
	
   var column_name=request.query.ColumnName;
   var value_=request.query.ColumnValue;
	
   var	jsonObject_ = {
      Surname:request.query.Surname,
      MiddleName:request.query.MiddleName
   };
	
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.individual_patients_update(column_name,value_,jsonObject_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});






router.get('/delete_individual_patient',function(request,response){
	
    var column_name=request.query.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var value_=request.query.search_value;
	
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.delete_patients_record(column_name,value_,function(request,res){

			var returned_value_=res;
			
			response.send(returned_value_);
        });

});
 
 
module.exports = router;