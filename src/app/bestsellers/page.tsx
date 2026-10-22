import { redirect } from "next/navigation";

export default function BestsellersPage() {
  redirect("/collection?view=bestsellers");
}
