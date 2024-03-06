import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/code/actions";
import Link from "next/link";

export default async function Page() {
  const session = await getSession();
  return (
    <section className="mt-[120px] flex-grow">
      {
        session ?
        <div>
          <h2>Vous êtes connecté</h2>
          <form
            action={async () => {
              "use server";
              await logout();
              redirect("/login");
            }}
          >
            <button type="submit">Logout</button>
          </form>
        </div>
        :
        <div>
          <form
            action={async (formData) => {
              "use server";
              await login(formData);
              redirect("/login");
            }}
          >
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" />
            <br />
            <button type="submit">Login</button>
          </form>
          <Link href='/signin'>Sign In</Link>
        </div>
      }
    </section>
  );
}
