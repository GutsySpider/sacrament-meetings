import { logout } from "@/lib/auth-actions";

export function SignOutButton() {
  return (
    <form action={logout}>
      <button type="submit">
        Sign Out
      </button>
    </form>
  );
}