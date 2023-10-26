import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../../css/PatientRegistrationFormStyle.css';
import { config } from '../../utils/config';

interface FormData {
  username: string;
  password: string;
  email: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  mobileNumber: string;
  emergencyContact: {
    fullname: string;
    mobileNumber: string;
    relationToPatient: string;
  };
  deliveryAddresses: string[];
  healthRecords: Buffer[];
  
  dependentFamilyMembers: {
    name: string;
    nationalId: string;
    age: number;
    gender: string;
    relation: string;

  }[];
  registeredFamilyMembers: {
    id: string;
    relation: string;
  }[];


  // ... (other attributes)
}

const PatientRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: '',
    name: '',
    dateOfBirth: '',
    gender: '',
    mobileNumber: '',
    emergencyContact: {
      fullname: '',
      mobileNumber: '',
      relationToPatient: '',
    },
    deliveryAddresses: [],
    healthRecords: [],

    dependentFamilyMembers: [],
    registeredFamilyMembers: []
    // ... (other attributes)
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  type FormState = {
    username: string;
    password: string;
    email: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    mobileNumber: string;
    emergencyContact: {
      fullname: string;
      mobileNumber: string;
      relationToPatient: string;
    };
    deliveryAddresses: [],
    healthRecords: [],
    subscribedPackage: {
      packageId: '5f8a2b5c5f4c3d2a1b0e4f5d',
      startDate: '2023-10-14',
      endDate: '2023-10-14',
      status: 'unsubscribed',
    },
    dependentFamilyMembers: [],
    registeredFamilyMembers: []
    // Add the rest of the properties to match your FormData
  };
  
  
  const handleEmergencyContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => {
      const updatedData: FormData = { ...prevData };
  
      if (name.startsWith("emergencyContact.")) {
        const fieldName = name.split(".")[1];
        (updatedData.emergencyContact as any)[fieldName] = value;
      } else {
        (updatedData as any)[name] = value;
      }
  
      return updatedData;
    });
  };
  
  const [error, setError] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {      
      await fetch(`${config.serverUri}/patients/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error: any) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username*: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter Your Username"
            required
          />
        </div>
        <div>
          <label>Password*: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div>
          <label>Email*: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label>Name*: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Your Full Name"
            required
          />
        </div>
        <div>
          <label>Date of Birth*: </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Gender*: </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleGenderChange}
            required
          >
            <option value="choose your gender">choose your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Mobile Number*: </label>
          <input
            type="number"
            name="mobileNumber"
            min="0"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter Your Mobile Number"
            required
          />
        </div>
        <div>
          <label>Emergency Contact*: </label>
            <input
              type="text"
              name="emergencyContact.fullname"
              value={formData.emergencyContact.fullname}
              onChange={handleEmergencyContactChange}
              placeholder="Full Name"
              required
            />
            <input
              type="number"
              name="emergencyContact.mobileNumber"
              value={formData.emergencyContact.mobileNumber}
              onChange={handleEmergencyContactChange}
              placeholder="Mobile Number"
              required
            />
            <input
              type="text"
              name="emergencyContact.relationToPatient"
              value={formData.emergencyContact.relationToPatient}
              onChange={handleEmergencyContactChange}
              placeholder="Relation to Patient"
              required
            />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <p style={{color: 'red'}}>{error}</p>
    </div>
  );
};

export default PatientRegistrationForm;