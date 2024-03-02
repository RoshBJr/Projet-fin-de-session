import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/code/actions";

export default async function Page() {
  const session = await getSession();
  return (
    <section className="mt-[120px]">
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/login");
        }}
      >
        <input type="email" placeholder="Email" />
        <input type="password"/>
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/login");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}