const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

interface SignupData {
  username: string;
  email: string;
  password: string
}

interface LoginData {
  email: string;
  password: string;
}

interface ApiResponse {
  message?: string;
  token?: string;
}

export const signup = async (userData: SignupData): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const login = async (credentials: LoginData): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json(); 
};
