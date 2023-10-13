import PatientInfo from "../../components/PatientInfo";
import PatientRegisteredFamilyMembers from "../../components/PatientRegisteredFamilyMembers";
import AddFamilyMember from "../../pages/patients/AddFamilyMember";
import Home from "../../pages/patients/Home";
import SearchForDoctors from "../../pages/patients/SearchForDoctors";
import ViewDoctorDetails from "../../pages/patients/ViewDoctorDetails";
import ViewDoctors from "../../pages/patients/ViewDoctors";
import { Route } from "./Route";


export const homeRoute: Route = {
    path: '/patient/:patientId/home',
    component: <Home />   
}
export const viewAllDoctorsRoute: Route = {
    path: '/patient/:patientId/doctors',
    component: <ViewDoctors />   
}
export const viewDoctorDetailsRoute: Route = {
    path: '/patient/:patientId/doctors/:doctorId',
    component: <ViewDoctorDetails />   
}
export const searchForDoctorsRoute: Route = {
    path: '/patient/:patientId/doctors/search',
    component: <SearchForDoctors /> 
}
export const addFamilyMemberRoute: Route = {    
    path: '/patient/:patientId/family-members/add',
    component: <AddFamilyMember />
}
export const patientInfoRoute: Route = {
    path: '/patient/:patientId/info',
    component: <PatientInfo />
}
export const patientFamilyMembersRoute: Route = {
    path: '/patient/:patientId/family-members',
    component: <PatientRegisteredFamilyMembers />
}

const routes: Route[] = [
    homeRoute,
    viewAllDoctorsRoute,
    viewDoctorDetailsRoute,
    searchForDoctorsRoute,
    addFamilyMemberRoute,
    patientInfoRoute,
    patientFamilyMembersRoute,
];

export default routes;