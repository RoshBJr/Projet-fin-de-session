import Link from "next/link";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
async function LangManager() {
  const lang = cookies().get('lang')?.value;

  async function setLang() {
    'use server'
    const cookieStore = cookies();
    if(cookieStore.get('lang')) {
      cookieStore.delete('lang');
    } else {
      cookieStore.set('lang', "en");
    }
    revalidatePath('/');
  }

  return (
    <form action={setLang}>
      <button type="submit" className="btn btn-ghost btn-circle">
        {lang ? "FR": "EN"}
      </button>
    </form>
  );
}

export default LangManager;
