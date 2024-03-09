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
    <form action={setLang} className="">
      <button type="submit" className="min-[320px]:w-[30px] min-[320px]:h-[30px] btn btn-ghost btn-circle align-text-top">
        {lang ? "FR": "EN"}
      </button>
    </form>
  );
}

export default LangManager;
