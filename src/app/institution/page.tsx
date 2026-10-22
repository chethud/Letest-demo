import { redirect } from "next/navigation";

/** Legacy route - About Us now lives at /about-us. */
export default function InstitutionPage() {
  redirect("/about-us");
}
