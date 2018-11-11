/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "medication_request_details" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.

*/




const ModelMaster=require('../ModelMaster.js');
const TableName="medication_request_details";


module.exports = class MedicationRequestDetailsModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	
	
	

	
	
	
   insert_medication_request_details(jsonObject_,callback){
 	 const  myModelMaster=new ModelMaster();

    myModelMaster.insert(TableName,jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
 
    }			
	
	
	
	
	
	
	
	
	
   get_all_medication_request_details(callback){
        const  myModelMaster=new ModelMaster();

        myModelMaster.selectAll(TableName,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
		
		

    }		
		
	
	
	
	
	
	
   get_specific_medication_request_details(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.selectSpecific(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }		
	
	
	
	
	
	
	
	
	
	
   batch_medication_request_details_update(jsonObject_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.batch_update(TableName,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }			
	
	
	
	
	
	
   individual_medication_request_details_update(ColumnName,value_,jsonObject_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }			
	
	
	
	
	
	
	
   delete_medication_request_details_record(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.delete(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }		
	
	
	
	
	
	
}
	