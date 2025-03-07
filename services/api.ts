const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  message?: string;
  token?: string;
}

interface SignupResponse {
  message?: string;
}

interface CaseData {
  haveMedicare: boolean;
  accidentDateTime: string;
  accidentPlace: string;
  policeArrived: boolean;
  policePrecinct: string;
  reportFiled: boolean;
  reportNumber: string;
  accidentDetail: string;
  goingTo: string;
  clientRelation: string;
  theOwner: string;
  witness1: string;
  witness2: string;
  witness1Phone: string;
  witness2Phone: string;
  weather: string;
  roadCondition: string;
  metalInBody: boolean;
  pregnant: boolean;
  injuries: string;
  otherInjuries: string;
  brokenBones: string;
  reasonForMRI: string;
  lostConciousness: boolean;
  medicalInformation: {
    hospitalName: string;
    byEMS: boolean;
    dateAdmitted: string;
    dateReleased: string;
    urgentCareName: string;
    urgentCarePhone: string;
    urgentCareDate: string;
    otherHospitalName: string;
    otherHospitalDate: string;
  };
  employmentInfo: {
    employer: string;
    occupation: string;
    employmentAddress: string;
    onTheBooks: boolean;
    filedIncomeTax: boolean;
    missedTimeFromWork: boolean;
    returnedToWork: boolean;
    accidentHappenedDuringWorkingHours: boolean;
  };
  previousAccidents: {
    dateOfAccident1: string;
    dateOfAccident2: string;
    injuries1: string;
    injuries2: string;
    injuries1Resolved: boolean;
    injuries2Resolved: boolean;
    injuries1Attorney: string;
    injuries2Attorney: string;
  };
  clientIds: number[];
}

export interface ClientData {
  inTakeBy: string;
  referredBy: string;
  firstName: string;
  lastName: string;
  middleName: string;
  address: string;
  city: string;
  state: string;
  sex: string;
  zip: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  homePhone: string;
  workPhone: string;
  ssn: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  relationshipToEmergencyContact: string;
}

export const signup = async (userData: SignupData): Promise<SignupResponse> => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const login = async (credentials: LoginData): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const createClient = async (clientData: ClientData): Promise<any> => {
  const response = await fetch(`${BASE_URL}/client`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clientData),
  });
  return response.json();
};

export const getClient = async (id: number): Promise<any> => {
  const response = await fetch(`${BASE_URL}/client/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const getClients = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/clients`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const updateClient = async (
  id: number,
  clientData: ClientData
): Promise<any> => {
  const response = await fetch(`${BASE_URL}/client/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clientData),
  });
  return response.json();
};

export const createCase = async (caseData: CaseData): Promise<any> => {
  const response = await fetch(`${BASE_URL}/case`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(caseData),
  });
  return response.json();
};

export const getCase = async (id: number): Promise<any> => {
  const response = await fetch(`${BASE_URL}/case/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const getCases = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/cases`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const updateCase = async (
  id: number,
  caseData: CaseData
): Promise<any> => {
  const response = await fetch(`${BASE_URL}/case/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(caseData),
  });
  return response.json();
};

export const linkCaseClient = async (clientIds: number[]): Promise<any> => {
  const response = await fetch(`${BASE_URL}/case-clients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientIds }),
  });
  return response.json();
};

export const deleteCaseClient = async (clientIds: number[]): Promise<any> => {
  const response = await fetch(`${BASE_URL}/case-clients`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientIds }),
  });
  return response.json();
};
