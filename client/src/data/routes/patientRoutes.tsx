import PrescriptionsPage from "../../pages/patients/prescriptions/ViewPrescriptions";
import AddFamilyMember from "../../pages/patients/family-members/AddFamilyMember";
import Home from "../../pages/patients/Home";
import SearchForDoctors from "../../pages/patients/doctor-interactions/SearchForDoctors";
import ViewAppointments from "../../pages/patients/appointments/ViewAppointments";
import ViewDoctorDetails from "../../pages/patients/doctor-interactions/ViewDoctorDetails";
import ViewDoctors from "../../pages/patients/doctor-interactions/ViewDoctors";
import { Route } from "../../types";
import MedicalHistory from "../../pages/patients/medicalHistory/medicalHistory";
import AddRegisteredFamilyMember from "../../pages/patients/family-members/AddRegisteredFamilyMember";
import UpdatePassword from "../../pages/general/UpdatePassword";
import HealthPackageList from "../../components/healthPackageList";
import YourPage from "../../pages/patients/health-packages/HealthPackageStatus";
import SubscribedPackageBenefits from "../../pages/patients/health-packages/subscribedPackageBenefits";
import FamilyMemberPage from "../../pages/patients/family-members/FamilyMemberPage";
import ViewWallet from "../../pages/patients/wallet/ViewWallet";
import CreateWallet from "../../pages/patients/wallet/CreateWallet";
import PatientPaymentPage from "../../pages/patients/health-packages/HealthPackagePayment";
import FamilyMembersComponent from "../../pages/patients/family-members/FamilyMembers";
import HealthPackageDetailsPage from "../../pages/patients/health-packages/HealthPackagesOptions";
import AppointmentBooking from "../../pages/patients/appointments/AppointmentBooking";
import AppointmentPayment from "../../pages/patients/appointments/AppointmentsPayment";
import PatientDoctorsPage from "../../pages/patients/doctor-interactions/ViewPatientDoctors";
import ChatsView from "../../features/chats/ChatsView";
import PrescriptionCheckout from "../../pages/patients/prescriptions/components/CheckoutStepper";
import UserRole from "../../types/enums/UserRole";
import FollowUpRequestsPage from "../../pages/patients/appointments/FollowUpRequests";
import AppointmentsSchedule from "../../features/appointments/AppointmentsSchedule";
import FamilyMemberInfo from "../../pages/patients/family-members/FamilyMemberInfo";
import PrescriptionInfo from "../../pages/patients/prescriptions/DependentFamilyMemberPrescriptionInfo";
import PrescriptionList from "../../pages/patients/prescriptions/DependentFamilyMemberPrescriptions";
import MedicineInfo from "../../pages/patients/prescriptions/MedicineInfo";
import RegisteredPrescriptionsComponent from "../../pages/patients/prescriptions/RegisteredFamilyMemberPrescription";
import PatientRegisteredFamilyMemberRequests from "../../pages/patients/family-members/PatientRegisteredFamilyMemberRequests";


export const patientDashboardRoute: Route = {
  path: "/patient/dashboard",
  element: <Home/>
};

export const familyMemberPageRoute: Route = {
  path: "/patient/family-member-page",
  element: <FamilyMemberPage  />
};

export const familyMembersRoute: Route = {
   path: "/patient/all-family-members",
   element: <FamilyMembersComponent />,
};

export const cancelSubscriptionRoute: Route = {
   path: "/patient/CancelSubscription",
   element: <YourPage />,
};
export const subscribedPackageBenefitsRoute: Route = {
   path: "/patient/subscribed-package-benefits",
   element: <SubscribedPackageBenefits />,
};
export const viewAllDoctorsRoute: Route = {
   path: "/patient/doctors",
   element: <ViewDoctors />,
};
export const viewDoctorDetailsRoute: Route = {
   path: "/patient/doctors/:doctorId",
   element: <ViewDoctorDetails />,
};
export const searchForDoctorsRoute: Route = {
   path: "/patient/doctors/search",
   element: <SearchForDoctors />,
};
export const addFamilyMemberRoute: Route = {
   path: "/patient/family-members/add",
   element: <AddFamilyMember />,
};

export const addRegisteredFamilyMemberRoute: Route = {
   path: `/patient/family-members/add-registered`,
   element: <AddRegisteredFamilyMember />,
};

export const patientFamilyMembersRoute: Route = {
   path: "/patient/family-members",
   element: <PatientRegisteredFamilyMemberRequests />,
};

export const patientAppointmentsRoute: Route = {
   path: "/patient/appointments",
   element: <ViewAppointments />,
};
export const patientDoctorAppointmentDetailsRoute: Route = {
   path: "patient/appointment/:appointmentId",
   element: <ViewAppointments />,
};

export const patientPrescriptions: Route = {
   path: "/patient/prescriptions",
   element: <PrescriptionsPage />,
};

export const patientMedicalHistoryRoute: Route = {
   path: "/patient/medical-history",
   element: <MedicalHistory />,
};

export const patientUpdatePasswordRoute: Route = {
   path: "/patient/update-password",
   element: <UpdatePassword />,
};
export const healthPackagesOptionsRoute: Route = {
   path: "/patient/health-packages-options",
   element: <HealthPackageList />,
};
export const patientWalletRoute: Route = {
   path: "/patient/wallet",
   element: <ViewWallet />,
};


export const patientFamilyMemberInfoRoute: Route = {
  path: "/patient/family-member-info",
  element: <FamilyMemberInfo />
};


export const RegisteredPrescriptionsRoute: Route = {
  path: "/patient/all-family-members/family-members/registered/prescriptions/:memberId",
  element: <RegisteredPrescriptionsComponent />
};

export const createPatientWalletRoute: Route = {
  path: "/patient/wallet/create",
  element: <CreateWallet />
};

export const checkoutRoute: Route = {
  path: "/patient/payment",
  element: <PatientPaymentPage />
};

export const healthPackageOptionsRDRoute: Route = {
  path: `/patient/Health-Packages-Options`,
  element: <HealthPackageDetailsPage />
};

export const healthPackagePaymentRoute: Route = {
  path: `/patient/health-package/:packageId/payment`,
  element: <PatientPaymentPage />
};

export const appointmentBookingRoute: Route = {
  path: "/patient/appointments/booking",
  element: <AppointmentBooking />
};

export const appointmentPaymentRoute: Route = {
  path: "/patient/appointments/:doctorId/payment",
  element: <AppointmentPayment />
};

export const patientDoctorsRoute: Route = {
  path: "/patient/my-doctors",
  element: <PatientDoctorsPage />
};

export const chatsRoute: Route = {
  path: "/patient/chat",
  element: <ChatsView />
};

export const followUpRequestsRoute: Route = {
  path: "/patient/follow-up-requests",
  element: <FollowUpRequestsPage />
};

export const patientAppointmentSchedulingRoute: Route = {
  path: "/patient/appointment-scheduling",
  element: <AppointmentsSchedule />
};

export const PrescriptionPaymentRoute: Route = {
   path: "patient/prescriptions/payment/:prescriptionId",
   element: <PrescriptionCheckout />,
 
};

const routes: Route[] = [
   patientDashboardRoute,
   viewAllDoctorsRoute,
   viewDoctorDetailsRoute,
   searchForDoctorsRoute,
   addFamilyMemberRoute,
   addRegisteredFamilyMemberRoute,
   patientFamilyMembersRoute,
   patientAppointmentsRoute,
   patientDoctorAppointmentDetailsRoute,
   patientPrescriptions,
   patientMedicalHistoryRoute,
   patientUpdatePasswordRoute,
   patientPrescriptions,
   patientMedicalHistoryRoute,
   healthPackagesOptionsRoute,
   cancelSubscriptionRoute,
   subscribedPackageBenefitsRoute,
   familyMembersRoute,
   familyMemberPageRoute,
   patientWalletRoute,
   createPatientWalletRoute,
   checkoutRoute,
   healthPackageOptionsRDRoute,
   healthPackagePaymentRoute,
   appointmentBookingRoute,
   appointmentPaymentRoute,
   patientDoctorsRoute,
   chatsRoute,
   PrescriptionPaymentRoute,
  patientDashboardRoute,
  viewAllDoctorsRoute,
  viewDoctorDetailsRoute,
  searchForDoctorsRoute,
  addFamilyMemberRoute,
  addRegisteredFamilyMemberRoute,
  patientFamilyMemberInfoRoute,
  patientAppointmentsRoute,
  patientDoctorAppointmentDetailsRoute,
  patientPrescriptions,
  // patientDependentFamilyMemberPrescriptions,
  // patientDependentFamilyMemberPrescriptionInfo,
  // patientPrescriptionInfo,
  // patientPrescriptionMedicineInfo,
  patientMedicalHistoryRoute,
  patientUpdatePasswordRoute,
  patientMedicalHistoryRoute,
  healthPackagesOptionsRoute,
  cancelSubscriptionRoute,
  subscribedPackageBenefitsRoute,
  familyMembersRoute,
  familyMemberPageRoute,
  patientWalletRoute,
  createPatientWalletRoute,
  checkoutRoute,
  healthPackageOptionsRDRoute,
  healthPackagePaymentRoute,
  appointmentBookingRoute,
  appointmentPaymentRoute,
  patientDoctorsRoute,
  chatsRoute,
  followUpRequestsRoute,
  patientAppointmentSchedulingRoute,
  RegisteredPrescriptionsRoute
];

export default routes;
