import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function BlockchainPage() {
  const items = await prisma.blockchainActivity.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 lg:px-8">
      <p className="text-center text-xs font-semibold uppercase text-slate-500">
        Trust layer
      </p>
      <h1 className="mt-2 text-center text-3xl font-bold text-slate-900">
        Blockchain & audit trail
      </h1>
      <p className="mx-auto mt-4 text-center text-slate-600">
        Tourist DID anchoring, E-FIR hashes, and immutable activity — backed by
        SQLite in dev; swap for a real ledger for production.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-bold text-slate-900">Recent on-chain activity</h2>
        <p className="text-sm text-slate-600">
          Same data as <code className="rounded bg-slate-100 px-1">GET /api/blockchain/activity</code>
        </p>
        {items.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            No rows — run <code className="rounded bg-slate-100 px-1">npm run db:seed</code>
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {items.map((row) => (
              <li
                key={row.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm"
              >
                <code className="text-xs text-blue-800">
                  {row.hash.slice(0, 18)}…
                </code>
                <span className="text-slate-700">{row.label}</span>
                {row.touristDid && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs">
                    {row.touristDid}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-8 text-center text-sm text-slate-600">
        <Link
          href="/dashboard/admin"
          className="font-semibold text-blue-700 hover:underline"
        >
          Authority dashboard
        </Link>{" "}
        correlates live tourists with these anchors.
      </p>
    </div>
  );
}
