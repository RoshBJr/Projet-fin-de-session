"use server";
import { redirect, usePathname} from "next/navigation";

export async function sendSearchQuery(formdata: FormData, currPath:string) {
  const searchBar = formdata.get("searchBar");
  if (searchBar) {
    if(currPath == '/') currPath = '/Feed';
    redirect(`${currPath}?&tri=name-asc&search=${searchBar.toString()}`)
  }
}
