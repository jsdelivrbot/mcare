/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/



const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
var dbcredentials;
var port = process.env.PORT || 5000;


    dbcredentials={
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        insecureAuth : true
    }


app.use(express.static('public'));

var con;
app.use((req,res,next)=>{
    con = mysql.createConnection(dbcredentials);
    con.on('error',(err) =>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            console.log(err);                        
        } else {                                      
            //throw err;                                  
        }
    });
    console.log("Connection established");

    next();
});



/*START SON/2018-11-08 15:50 - DEVELOPMENT - These are the patient management route files*/

app.use(require('./routes/patient_management/PatientRoutes.js'));
app.use(require('./routes/patient_management/PatientTypesRoutes.js'));
app.use(require('./routes/patient_management/PatientTypeCategoriesRoutes.js'));
app.use(require('./routes/patient_management/PatientIndividualQualitiesRoutes.js'));
app.use(require('./routes/patient_management/PatientSponsorsRoutes.js'));
app.use(require('./routes/patient_management/PatientCheckUpsRoutes.js'));
app.use(require('./routes/patient_management/PatientConditionRoutes.js'));
app.use(require('./routes/patient_management/PatientCustodianRoutes.js'));
app.use(require('./routes/patient_management/PatientGeneralRecordTypesRoutes.js'));
app.use(require('./routes/patient_management/PatientGeneralRecordTypeCategoriesRoutes.js'));
app.use(require('./routes/patient_management/PatientGeneralRecordsRoutes.js'));
app.use(require('./routes/patient_management/PatientVisitsRoutes.js'));
app.use(require('./routes/patient_management/PatientRevisitsRoutes.js'));
app.use(require('./routes/patient_management/EncountersRoutes.js'));

/*END SON/2018-11-08 15:50 - DEVELOPMENT - These are the patient management route files*/



/*START SON/2018-11-08 16:20 - DEVELOPMENT - These are the procedures route files*/

app.use(require('./routes/procedures/ProcedureTypesRoutes.js'));
app.use(require('./routes/procedures/ProcedureTypeCategoriesRoutes.js'));
app.use(require('./routes/procedures/ProceduresRoutes.js'));
app.use(require('./routes/procedures/PerformedProceduresRoutes.js'));
app.use(require('./routes/procedures/PerformedProcedureRecordTypesRoutes.js'));
app.use(require('./routes/procedures/PerformedProcedureRecordTypeCategoryRoutes.js'));
app.use(require('./routes/procedures/PerformedProcedureRecordsRoutes.js'));

/*END SON/2018-11-09 15:18 - DEVELOPMENT - These are the procedures route files*/



/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the diagnosis route files*/

app.use(require('./routes/diagnosis/DiagnosisRoutes.js'));
app.use(require('./routes/diagnosis/DiagnosisRecordTypesRoutes.js'));
app.use(require('./routes/diagnosis/DiagnosisRecordTypeCategoriesRoutes.js'));
app.use(require('./routes/diagnosis/DiagnosisRecordsRoutes.js'));

/*END SON/2018-11-10 08:17 - DEVELOPMENT - These are the diagnosis route files*/



/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the drugs and medication route files*/

app.use(require('./routes/drugs_and_medication/GenericDrugCategoriesRoutes.js'));
app.use(require('./routes/drugs_and_medication/DrugConfigurationsRoutes.js'));
app.use(require('./routes/drugs_and_medication/MedicationRequestRoutes.js'));
app.use(require('./routes/drugs_and_medication/MedicationRequestDetailsRoutes.js'));
app.use(require('./routes/drugs_and_medication/MedicationAdministrationRoutes.js'));
app.use(require('./routes/drugs_and_medication/MedicationStatementRoutes.js'));

/*END SON/2018-11-11 20:39 - DEVELOPMENT - These are the drugs and medication route files*/



/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the labs and lab operations route files*/

app.use(require('./routes/laboratory/LabCategoriesRoutes.js'));
app.use(require('./routes/laboratory/LabsRoutes.js'));
app.use(require('./routes/laboratory/TestOrderTypesRoutes.js'));
app.use(require('./routes/laboratory/TestOrderTypeCategoryRoutes.js'));
app.use(require('./routes/laboratory/TestOrdersRoutes.js'));
app.use(require('./routes/laboratory/SpecimenTypesRoutes.js'));
app.use(require('./routes/laboratory/SpecimenRoutes.js'));
app.use(require('./routes/laboratory/SpecimenRecordCategoriesRoutes.js'));
app.use(require('./routes/laboratory/SpecimenRecordsRoutes.js'));

/*END SON/2018-11-10 08:17 - DEVELOPMENT - These are the labs and lab operations route files*/



/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the radiology operation route files*/

app.use(require('./routes/radiology/RadiologyRoutes.js'));
app.use(require('./routes/radiology/RadiologyOrderTypesRoutes.js'));
app.use(require('./routes/radiology/RadiologyOrdersRoutes.js'));
app.use(require('./routes/radiology/RadiologyOrderResultCategoriesRoutes.js'));
app.use(require('./routes/radiology/RadiologyOrderResultsRoutes.js'));

/*END SON/2018-11-10 08:17 - DEVELOPMENT - These are the radiology operation route files*/




/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the ward operation route files*/

app.use(require('./routes/wards/WardTypesRoutes.js'));
app.use(require('./routes/wards/WardTypeCategoryRoutes.js'));
app.use(require('./routes/wards/WardsRoutes.js'));
app.use(require('./routes/wards/BedTypeRoutes.js'));
app.use(require('./routes/wards/BedGroupRoutes.js'));
app.use(require('./routes/wards/BedsRoutes.js'));
app.use(require('./routes/wards/BedAllocationRoutes.js'));
app.use(require('./routes/wards/BedAllocationDaysRoutes.js'));

/*END SON/2018-11-10 08:17 - DEVELOPMENT - These are the ward operation route files*/





/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the appointments and scheduling  route files*/

app.use(require('./routes/appointments_and_scheduling/AppointmentTypesRoutes.js'));
app.use(require('./routes/appointments_and_scheduling/AppointmentsRoutes.js'));
app.use(require('./routes/appointments_and_scheduling/AppointmentTypeCategoryRoutes.js'));
app.use(require('./routes/appointments_and_scheduling/SlotTypesRoutes.js'));
app.use(require('./routes/appointments_and_scheduling/SlotTypeCategoryRoutes.js'));
app.use(require('./routes/appointments_and_scheduling/SlotsRoutes.js'));
app.use(require('./routes/appointments_and_scheduling/SchedulesRoutes.js'));
app.use(require('./routes/appointments_and_scheduling/ExpectedAppointmentActivitiesRoutes.js'));

/*END SON/2018-11-10 08:17 - DEVELOPMENT - These are the appointments and scheduling  route files*/





/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the finance and billing  route files*/

app.use(require('./routes/finance_and_billing/SponsorTypesRoutes.js'));
app.use(require('./routes/finance_and_billing/SponsorsRoutes.js'));
app.use(require('./routes/finance_and_billing/ClaimsRoutes.js'));

/*END SON/2018-11-10 08:17 - DEVELOPMENT - These are the finance and billing  route files*/





/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the department configuration  route files*/

app.use(require('./routes/departments/DepartmentTypesRoutes.js'));
app.use(require('./routes/departments/DepartmentTypeCategoriesRoutes.js'));
app.use(require('./routes/departments/DepartmentsRoutes.js'));

/*END SON/2018-11-10 08:17 - DEVELOPMENT - These are the department configuration  route files*/





/*START SON/2018-11-10 08:17 - DEVELOPMENT - These are the user management  route files*/

app.use(require('./routes/user_management/UsersRoutes.js'));





app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Listening on "+port);
});