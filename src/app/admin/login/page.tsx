"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { useAuth } from "../../ClientBody";


export default function AdminLogin() {
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "pickumrah1455") {
      setIsAuthenticated(true);
      router.replace("/admin");
    } else {
      setError("Wrong username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
     
      <Card className="w-full max-w-sm p-8 shadow-lg border">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input className="w-full rounded-md border" id="username" autoFocus required value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input className="w-full rounded-md border " id="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div className="flex justify-center">
            <Button type="submit" className="w-auto mt-2 rounded-md border border-black hover:bg-black hover:text-white">Sign In</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
