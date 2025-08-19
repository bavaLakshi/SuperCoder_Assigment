import React from "react";
import BasicButton from "../atoms/BasicButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">My App</h1>
      <BasicButton>Login</BasicButton>
    </header>
  );
}
