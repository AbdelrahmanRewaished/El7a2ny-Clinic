import express from 'express';
import {addAppointment} from '../../controllers/appointments/addAppointment';
import {filterAppointments} from '../../controllers/appointments/filterAppointments';


const appointmentRouter = express.Router();

appointmentRouter.route("/appointments/").get(filterAppointments).post(addAppointment);


export default appointmentRouter;
