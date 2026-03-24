import { redirect } from "next/navigation";
import { getSessionPayload } from "@/lib/auth-user";

export const dynamic = "force-dynamic";

export default async function DashboardEntryPage() {
  const s = await getSessionPayload();
  if (!s) redirect("/login");
  if (s.role === "ADMIN") redirect("/dashboard/admin");
  redirect("/dashboard/user");
}
