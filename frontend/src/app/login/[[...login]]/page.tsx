/**
 * @license MIT License
 * @author Gurkirat Singh
 * @file page.tsx
 * @file Login page exposing Clerk SignIn component for authentication.
 */

"use client";

import { SignIn } from "@clerk/nextjs";

/**
 * Render the login page using Clerk's SignIn component.
 * @returns {JSX.Element} The login page.
 */
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/register"
          afterSignInUrl="/pages/landing"
          appearance={{
            elements: {
              formButtonPrimary: "bg-primary hover:bg-primary/90 text-sm text-primary-foreground",
              card: "shadow-xl",
            },
          }}
        />
      </div>
    </div>
  );
}
