"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/api";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login({ email, password });
      if (response.token) {
        localStorage.setItem("token", response.token);
        router.push("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md bg-white p-8 mt-12 mx-auto rounded-lg shadow-lg">
      <h1 className="text-3xl text-[#031633] font-bold mb-2">Login to Clio</h1>
      <p className="text-sm text-gray-600 mb-6">Access your account below.</p>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md transition hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4">
        Forgot your password?{" "}
        <a href="#" className="text-blue-500 hover:underline cursor-pointer">
          Reset it here
        </a>
        .
      </p>
      <p className="text-sm mt-5">
        Need help? Contact support at{" "}
        <a
          href="tel:1-888-858-2546"
          className="text-blue-500 hover:underline cursor-pointer"
        >
          1-888-858-2546
        </a>
        .
      </p>
    </div>
  );
}
