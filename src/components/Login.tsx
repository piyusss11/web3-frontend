import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"; 
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LocalHost}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      localStorage.setItem("authToken", token);
      console.log("Logged in successfully and token saved");
      toast({
        description: "Redirecting to your Dashboard",
        title: "Login Successfully",
        variant: "default",
      });

      setTimeout(() => {
      window.location.reload();
      }, 2000); 
    } catch (error) {
      console.log("Login failed:", error);
      toast({
        description: "Invalid email or password. Please try again.",
        title: "Login Failed",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2"
                required
              />
            </div>
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
