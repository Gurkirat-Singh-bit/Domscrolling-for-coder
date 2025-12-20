"use client";

import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <SignUp
          routing="path"
          path="/register"
          signInUrl="/login"
          afterSignUpUrl="/pages/landing"
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm",
              card: "shadow-xl",
            },
          }}
        />
      </div>
    </div>
  );
}
