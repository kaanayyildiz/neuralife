"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

import { useState } from "react";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Error creating user");
        },
        onSuccess: () => {
          window.alert("User created successfully");
        },
      }
    );
  };

  if (session) {
    return (
      <div>
        <h1>User is logged in {session.user.name}</h1>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }
  return (
    <div>
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>Create User</Button>
    </div>
  );
}
