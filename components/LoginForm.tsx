"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/actions";

type LoginFormProps = {
  callbackUrl: string;
};

export function LoginForm({
  callbackUrl,
}: LoginFormProps) {
  const [errorMessage, formAction, isPending] =
    useActionState(authenticate, undefined);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
  <div className="w-full max-w-md rounded-lg bg-white p-3 shadow-lg">
        <h2 className="mb-1 text-center text-3xl font-bold text-slate-900">Sign In</h2>
        <p className="mb-1 text-center text-slate-600">
        Access the Sacrament Meeting Planner
        </p>
    <form action={formAction}>
      <input
        type="hidden"
        name="callbackUrl"
        value={callbackUrl}
      />
      <div>
            <label htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >Email</label>

        <input
          id="email"
          name="email"
          type="email"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-1 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <div>
            <label htmlFor="password"
            className="mb-1 block text-sm font-medium text-slate-700">
              Password
              
        </label>

        <input
          id="password"
          name="password"
          type="password"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-1 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <button
        type="submit"
            aria-disabled={isPending}
            className="w-full rounded-md bg-sky-700 px-4 py-1 font-medium text-white transition hover:bg-sky-800 disabled:opacity-50"
      >
        {isPending
          ? "Signing In..."
          : "Sign In"}
      </button>

      {errorMessage && (
            <p role="alert"
              className="rounded bg-red-50 p-3 text-sm text-red-700"
            >{errorMessage}</p>
      )}
        </form>
      </div>
      </div>
  );
}