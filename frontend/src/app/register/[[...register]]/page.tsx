/**
 * @license MIT License
 * @author Gurkirat Singh
 * @file page.tsx
 * @file Register page wrapping Clerk SignUp component used to create a new account.
 */

"use client";

import { SignUp } from "@clerk/nextjs";

/**
 * Render the registration page using Clerk's SignUp component.
 * @returns {JSX.Element} The register page.
 */
export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignUp
          routing="path"
          path="/register"
          signInUrl="/login"
          afterSignUpUrl="/pages/landing"
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
