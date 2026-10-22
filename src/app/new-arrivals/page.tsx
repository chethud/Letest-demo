import { redirect } from "next/navigation";

export default function NewArrivalsPage() {
  redirect("/collection?view=new");
}
