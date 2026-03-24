import Link from "next/link";
import { Shield, User } from "lucide-react";

export default function LoginHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold text-slate-900">
        Choose how you sign in
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
        Authority accounts use the admin console for monitoring and analytics.
        Tourist accounts access personal safety, location, and SOS tools.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Link
          href="/login/admin"
          className="group rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-sm transition hover:border-blue-400 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-slate-900">
            Authority (Admin)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Live registry, geo-fencing overview, alerts, and authority dashboard.
          </p>
          <span className="mt-6 inline-block text-sm font-semibold text-blue-700 group-hover:underline">
            Go to admin login →
          </span>
        </Link>

        <Link
          href="/login/user"
          className="group rounded-2xl border-2 border-emerald-200 bg-white p-8 shadow-sm transition hover:border-emerald-400 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <User className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-slate-900">
            Tourist (User)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Your status, KYC progress, geo-sensing, and emergency panic flow.
          </p>
          <span className="mt-6 inline-block text-sm font-semibold text-emerald-700 group-hover:underline">
            Go to tourist login →
          </span>
        </Link>
      </div>
    </div>
  );
}
