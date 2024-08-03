"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export type FormState = {
  username: string;
  password: string;
} | undefined

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const validationResult = formSchema.safeParse({ username, password });
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }

    try {
      const response = await fetch("http://localhost:3020/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log("Authenticated");
        // Optionally, you can redirect to another page after successful login
        // window.location.href = '/some-page'; // Use this if you want to redirect
        window.location.href = '/dashboard'
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred while logging in");
      console.error("Login error:", err);
    }
  };

  return (
    <Card className="w-[350px] bg-blue-200">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome Back</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <CardFooter className="flex justify-between">
            <Button type="submit" className="w-full">Login</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}

export default Login;
