"use server";
import { redirect, useRouter } from "next/navigation";

export async function sendSearchQuery(formdata: FormData) {
  const searchBar = formdata.get("searchBar");
  if (searchBar) {
      console.log(searchBar);
    redirect(`/Feed?&tri=name-asc&search=${searchBar.toString()}`)
  }
}
