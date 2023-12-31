import Home from "../../pages/doctors/Home";
import UpdateAccountInfo from "../../pages/doctors/UpdateAccountInfo";
import ViewAppointments from "../../pages/doctors/ViewAppointments";
import ViewDoctorPatients from "../../pages/doctors/ViewDoctorPatients";
import PatientSearch from "../../pages/doctors/SearchForPatients";
import { Route } from "../../types";
import ViewAvailableTimeSlots from "../../pages/doctors/ViewAvailableTimeSlots";
import AddAvailableTimeSlots from "../../pages/doctors/AddAvailableTimeSlots";
import UpdatePassword from "../../pages/general/UpdatePassword";
import PatientList from "../../pages/doctors/PatientList";
import PatientInfo from "../../pages/doctors/PatientInfo";

export const allPatientsRoute: Route = {
  path: "/doctor/patients",
  element: <PatientList />
};

export const patientInfoRoute: Route = {
  path: "/patient/info",
  element: <PatientInfo />
};

import ViewWallet from "../../pages/doctors/wallet/ViewWallet";
import ViewRegisteredPatientData from "../../pages/doctors/RegistredPatientData/ViewRegisteredPatientData";
import CreateWallet from "../../pages/doctors/wallet/CreateWallet";
import ChatsView from "../../features/chats/ChatsView";
import PrescriptionList from "../../pages/patients/prescriptions/PrescriptionList";
import DoctorSchedule from "../../features/appointments/AppointmentsSchedule";
import FollowUpRequestsPage from "../../pages/doctors/FollowUpRequests";
import VideoCall from "../../pages/doctors/VideoCall";
export const doctorDashboardRoute: Route = {
  path: "/doctor/dashboard",
  element: <Home />
};

export const updateAccountInfoRoute: Route = {
  path: "/doctor/account/update",
  element: <UpdateAccountInfo />
};

export const doctorAppointmentsRoute: Route = {
  path: "/doctor/appointments",
  element: <ViewAppointments />
};

export const doctorPrescriptionList: Route = {
  path: "/doctor/prescriptions/view",
  element: <PrescriptionList />
};

export const doctorAppointmentDetailsRoute: Route = {
  path: "/doctor/appointment/:appointmentId",
  element: <ViewAppointments />
};

export const doctorRegisteredPatientsRoute: Route = {
  path: "/doctor/patients",
  element: <ViewDoctorPatients />
};

export const doctorRegisteredPatientDetailsRoute: Route = {
  path: "/doctor/patient/:patientId",
  element: <ViewRegisteredPatientData />
};

export const patientSearchRoute: Route = {
  path: "/doctor/patient/search",
  element: <PatientSearch />
};

export const doctorAvailableTimeSlotsRoute: Route = {
  path: "/doctor/available-time-slots",
  element: <ViewAvailableTimeSlots />
};

export const addDoctorAvailableTimeSlotsRoute: Route = {
  path: "/doctor/add-available-time-slots",
  element: <AddAvailableTimeSlots />
};

export const doctorUpdatePasswordRoute: Route = {
  path: "/doctor/update-password",
  element: <UpdatePassword />
};

export const doctorWalletRoute: Route = {
  path: "/doctor/wallet",
  element: <ViewWallet />
};

export const doctorWalletCreationRoute: Route = {
  path: "/doctor/wallet/create",
  element: <CreateWallet />
};

export const doctorChatsRoute: Route = {
  path: "/doctor/chat",
  element: <ChatsView />
};

export const doctorScheduleRoute: Route = {
  path: "/doctor/schedule",
  element: <DoctorSchedule />
};

export const followUpRequestsRoute: Route = {
  path: "/doctor/follow-up-requests",
  element: <FollowUpRequestsPage />
};

export const videoCallRoute: Route = {
  path: "/doctor/meeting",
  element: <VideoCall />
};

const routes: Route[] = [
  doctorDashboardRoute,
  updateAccountInfoRoute,
  doctorAppointmentsRoute,
  doctorAppointmentDetailsRoute,
  doctorPrescriptionList,
  doctorRegisteredPatientsRoute,
  doctorRegisteredPatientDetailsRoute,
  patientSearchRoute,
  doctorAvailableTimeSlotsRoute,
  addDoctorAvailableTimeSlotsRoute,
  doctorUpdatePasswordRoute,
  doctorWalletRoute,
  doctorWalletCreationRoute,
  doctorChatsRoute,
  doctorScheduleRoute,
  followUpRequestsRoute,
  videoCallRoute
];

export default routes;
