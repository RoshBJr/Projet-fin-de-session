"use server";
import { redirect } from "next/navigation";

/** 
 * fonction pour gérer les requêtes de recherche dans l'url
*/

export async function sendSearchQuery(formdata: FormData, currPath:string ) {
  const searchBar = formdata.get("searchBar");
  if (searchBar) {
    if(currPath == '/') currPath = '/Feed';
    return redirect(`${currPath}?&tri=name-asc&search=${searchBar.toString()}`)
  } else {
    redirect(`${currPath}?&tri=name-asc`)
  }
}