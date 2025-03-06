"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/services/api";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await signup(formData);
      if (response.token) {
        localStorage.setItem("token", response.token);
        router.push("/dashboard");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-12 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold text-[#031633] mb-2">Try Clio for free</h1>
      <p className="text-gray-600 mb-4">Start a 7-day free trial of Clio.</p>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          required
        />
        <label className="flex items-center gap-2 text-gray-600">
          <input type="checkbox" /> Yes, send me news and updates from Clio
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-md font-semibold transition hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Get Started"}
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        By creating an account, you are agreeing to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
      </p>
      <p className="text-sm mt-5">
        Questions? Call us at <a href="tel:1-234-567-8910" className="text-blue-500">1-234-567-8910</a>
      </p>
    </div>
  );
}