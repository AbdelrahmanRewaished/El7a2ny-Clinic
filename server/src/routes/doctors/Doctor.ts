import express from 'express';
import { updateDoctor } from '../../controllers/doctors/updateDoctor';
import { getDoctor } from '../../controllers/doctors/getDoctor'
import { getAppointmentsWithAllPatients } from '../../controllers/doctors/getAllAppointments';
import { getRegisteredPatients } from '../../controllers/doctors/getRegisteredPatients';
import { getAppointmentDetails } from '../../controllers/doctors/getAppointmentDetails';
import { getDoctorById } from '../../controllers/patients/getDoctorById';
import getRegisteredPatientDetails from '../../controllers/doctors/getRegisteredPatientDetails';
import { UserRole } from "../../types/UserRole";
import { authorizeUser } from '../../middlewares/authorization';
import { authenticateUser } from '../../middlewares/authentication';
import { getPatientInfo } from '../../controllers/patients/getPatientInfo';
import { getAllPatients } from '../../controllers/patients/getAllPatients';
import { getContractStatus } from '../../controllers/doctors/getContractStatus';
import { updateDoctorContractStatus } from '../../controllers/doctors/updateContractStatus';


const doctorRouter = express.Router();

doctorRouter.use(authenticateUser);
doctorRouter.use(authorizeUser(UserRole.DOCTOR));

doctorRouter
.get('/contract', getContractStatus)

.patch('/contract',updateDoctorContractStatus)

.patch('/account', updateDoctor)

.get('/patients', getAllPatients)

.get('/allDetails', getDoctor)

.get('/patients', getRegisteredPatients)

.get('/patients/:patientId', getRegisteredPatientDetails)

.get('/appointments', getAppointmentsWithAllPatients)

.get('/appointments/:appointmentId', getAppointmentDetails)

.get('', getDoctorById)


export default doctorRouter;
