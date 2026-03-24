"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  MapPin,
  Phone,
  Shield,
  Siren,
} from "lucide-react";

const steps = [
  { key: "panic", label: "Panic Button Activated", icon: AlertTriangle },
  { key: "loc", label: "Location Transmitted", icon: MapPin },
  { key: "auth", label: "Authorities Notified", icon: Phone },
  { key: "dispatch", label: "Emergency Response Dispatched", icon: Shield },
];

export default function EmergencyPage() {
  const [session, setSession] = useState<"unknown" | "in" | "out">("unknown");
  const [busy, setBusy] = useState(false);
  const [evId, setEvId] = useState<string | null>(null);
  const [stepState, setStepState] = useState<string[] | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((d) => {
        if (d.user?.role === "TOURIST") setSession("in");
        else setSession("out");
      })
      .catch(() => setSession("out"));
  }, []);

  useEffect(() => {
    if (!evId) return;
    const t = setInterval(async () => {
      const r = await fetch(`/api/emergency/${evId}`);
      if (!r.ok) return;
      const d = await r.json();
      setStepState(d.steps ?? []);
    }, 800);
    return () => clearInterval(t);
  }, [evId]);

  async function triggerPanic() {
    setBusy(true);
    setHint(null);
    let lat: number | undefined;
    let lng: number | undefined;
    let accuracy: number | undefined;
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      await new Promise<void>((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
            accuracy = pos.coords.accuracy;
            resolve();
          },
          () => resolve(),
          { enableHighAccuracy: true, timeout: 8000 },
        );
      });
    }

    const res = await fetch("/api/emergency", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lat, lng, accuracy }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setHint(
        data.error === "Tourist login required"
          ? "Please log in as a tourist (User login) to trigger a live SOS with your account."
          : data.error ?? "Request failed",
      );
      setBusy(false);
      return;
    }
    setEvId(data.emergency?.id ?? null);
    setStepState(["pending", "pending", "pending", "pending"]);
    setBusy(false);
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-14 text-center">
      <p className="text-xs font-semibold uppercase text-red-600">
        Emergency Response System
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Emergency Panic Button System
      </h1>
      <p className="mt-2 text-slate-600">
        Instant emergency response and location transmission — demo workflow
        advances on the server clock.
      </p>

      {session === "out" && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
          Tip: sign in via <strong>Login → Tourist</strong> to record SOS against
          your profile and notify the authority feed.
        </p>
      )}

      <button
        type="button"
        onClick={triggerPanic}
        disabled={busy}
        className="relative mx-auto mt-10 flex h-44 w-44 flex-col items-center justify-center rounded-full bg-red-600 text-white shadow-xl ring-4 ring-red-200 transition hover:bg-red-700 disabled:opacity-70"
      >
        <Siren className="h-10 w-10" />
        <span className="mt-2 text-lg font-black tracking-wider">PANIC</span>
      </button>

      {hint && (
        <p className="mt-6 text-sm text-red-600" role="alert">
          {hint}
        </p>
      )}

      <div className="mt-10 space-y-3 text-left">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const st = stepState?.[idx];
          const done = st === "complete";
          return (
            <div
              key={s.key}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">{idx + 1}</span>
                <Icon className={`h-5 w-5 ${done ? "text-emerald-600" : "text-slate-400"}`} />
                <span className="text-sm font-medium text-slate-800">{s.label}</span>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  done ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600"
                }`}
              >
                {done ? "Complete" : "Pending"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
