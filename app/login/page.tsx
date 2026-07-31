import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">
          Sign In
        </h1>

        <LoginForm />
      </div>
    </main>
  );
}