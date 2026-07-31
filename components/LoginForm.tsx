"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/actions";

export function LoginForm() {
  const [errorMessage, formAction, isPending] =
    useActionState(authenticate, undefined);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          required
        />
      </div>

      <button
        type="submit"
        aria-disabled={isPending}
      >
        {isPending
          ? "Signing In..."
          : "Sign In"}
      </button>

      {errorMessage && (
        <p role="alert">{errorMessage}</p>
      )}
    </form>
  );
}