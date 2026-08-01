import { LoginForm } from "@/components/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-slate-100">
      <LoginForm
        callbackUrl={params.callbackUrl ?? "/"}
      />
    </main>
  );
}