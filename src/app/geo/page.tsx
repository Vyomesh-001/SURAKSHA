"use client";

import { useState } from "react";
import { Crosshair, MapPin, Navigation, Shield, Wifi } from "lucide-react";

export default function GeoPage() {
  const [pos, setPos] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function enableGps() {
    setBusy(true);
    setMsg(null);
    if (!navigator.geolocation) {
      setMsg("Geolocation not supported in this browser.");
      setBusy(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (p) => {
        const { latitude, longitude, accuracy } = p.coords;
        setPos(`${latitude.toFixed(5)}, ${longitude.toFixed(5)} (±${Math.round(accuracy)}m)`);
        const res = await fetch("/api/location", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lat: latitude,
            lng: longitude,
            address: "Browser GPS fix",
          }),
        });
        if (!res.ok) {
          const d = await res.json().catch(() => ({}));
          setMsg(
            d.error === "Tourist login required"
              ? "Log in as a tourist to sync coordinates to your dashboard."
              : d.error ?? "Could not save location",
          );
        } else {
          setMsg("Location saved to your tourist profile.");
        }
        setBusy(false);
      },
      () => {
        setMsg("Permission denied or unavailable.");
        setBusy(false);
      },
      { enableHighAccuracy: true, timeout: 12000 },
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8">
      <p className="text-center text-xs font-semibold uppercase text-emerald-600">
        Live Location Tracking
      </p>
      <h1 className="mt-2 text-center text-3xl font-bold text-slate-900">
        Geo-Sensing Integration
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
        Real-time location with browser GPS — integrates with{" "}
        <code className="rounded bg-slate-100 px-1">POST /api/location</code> for
        tourist accounts. Swap the map tile for Google Maps JavaScript API in
        production.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <MapPin className="h-4 w-4 text-emerald-600" />
            Live Tourist Location Tracking
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-800">
              Demo
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={enableGps}
              disabled={busy}
              className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
            >
              <Crosshair className="h-3 w-3" />
              Start Real GPS
            </button>
          </div>
        </div>
        <div className="relative h-80 bg-gradient-to-br from-emerald-100 via-sky-100 to-indigo-100">
          <div className="absolute left-4 top-4 max-w-xs rounded-xl bg-white/95 p-3 text-xs shadow-md backdrop-blur">
            <p className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Browser Geolocation Active
            </p>
            <p className="mt-1 text-slate-600">
              Reverse geocoding can plug into Google Maps Geocoding API.
            </p>
            <p className="mt-1 text-slate-500">
              Accuracy: ±3–15 meters (device dependent)
            </p>
            {pos && <p className="mt-2 font-mono text-[11px] text-blue-800">{pos}</p>}
          </div>
          <div className="absolute right-4 top-4 flex flex-col gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
              aria-label="Signal"
            >
              <Wifi className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
              aria-label="Navigate"
            >
              <Navigation className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
              aria-label="Security"
            >
              <Shield className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-8">
            <span className="h-4 w-4 rounded-full bg-emerald-500 shadow-lg ring-4 ring-white" />
            <span className="h-4 w-4 rounded-full bg-emerald-500 shadow-lg ring-4 ring-white" />
          </div>
        </div>
      </div>

      {msg && (
        <p className="mt-4 text-center text-sm text-slate-700" role="status">
          {msg}
        </p>
      )}
    </div>
  );
}
