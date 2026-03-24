"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  Brain,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  FileText,
  Heart,
  Lock,
  MapPin,
  Navigation,
  Radio,
  Shield,
  Wifi,
} from "lucide-react";
import { ContactForm } from "@/app/contact/ContactForm";

const heroSlides = [
  {
    title: "Attention Tourists — Stay Alert in High-Risk Zones",
    subtitle: "Real-time alerts and safe corridors for every journey.",
  },
  {
    title: "Are You Safe — Smart Tourist Safety Monitoring 2025",
    subtitle: "India’s next-gen tourist safety stack: blockchain IDs, AI, and SOS.",
  },
  {
    title: "Thank You for Supporting Smart Tourist Safety Monitoring 2025",
    subtitle: "Together we make travel safer with transparent, verifiable protection.",
  },
];

const registryTourists = [
  {
    name: "John Smith",
    did: "DID:0x1a2b3c",
    place: "India Gate",
    city: "New Delhi, India",
    detail: "Rajpath, India Gate, New Delhi",
    status: "Safe" as const,
    acc: "±8m",
    time: "2 min ago",
  },
  {
    name: "Maria Garcia",
    did: "DID:0x4d5e6f",
    place: "Times Square",
    city: "New York, USA",
    detail: "Times Square, New York, NY",
    status: "Safe" as const,
    acc: "±5m",
    time: "1 min ago",
  },
  {
    name: "David Chen",
    did: "DID:0x7g8h9i",
    place: "Big Ben",
    city: "London, United Kingdom",
    detail: "Westminster, London",
    status: "Warning" as const,
    acc: "±12m",
    time: "30 sec ago",
  },
  {
    name: "Sarah Johnson",
    did: "DID:0xj1k2l3",
    place: "Red Fort",
    city: "New Delhi, India",
    detail: "Netaji Subhash Marg, Lal Qila",
    status: "Emergency" as const,
    acc: "±3m",
    time: "Just now",
  },
];

function statusStyle(s: "Safe" | "Warning" | "Emergency") {
  if (s === "Safe") return "bg-emerald-100 text-emerald-800";
  if (s === "Warning") return "bg-amber-100 text-amber-900";
  return "bg-red-100 text-red-800";
}

export function LandingPage() {
  const [slide, setSlide] = useState(0);
  const [showAllLocs, setShowAllLocs] = useState(true);
  const s = heroSlides[slide];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="hero-gradient circuit-bg relative overflow-hidden text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 lg:flex-row lg:items-center lg:py-20 lg:px-8">
          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20 lg:block"
            onClick={() => setSlide((i) => (i === 0 ? heroSlides.length - 1 : i - 1))}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20 lg:block"
            onClick={() => setSlide((i) => (i + 1) % heroSlides.length)}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex w-full max-w-md justify-center lg:w-1/2">
            <div className="w-full max-w-xs rounded-3xl bg-slate-900/40 p-8 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-red-600 px-6 py-5 text-center shadow-lg">
                <p className="text-lg font-black tracking-wide">ARE YOU SAFE?</p>
                <div className="mt-3 h-2 w-full rounded-full bg-white/20" />
              </div>
              <p className="mt-4 text-center text-xs text-white/80">
                One-tap SOS · Live location · Authority sync
              </p>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center rounded-full bg-white/10 px-3 py-1 text-sm lg:self-start">
              <Shield className="h-4 w-4" />
              AI · Geo · Blockchain
            </div>
            <h1 className="text-balance text-2xl font-extrabold leading-tight text-white drop-shadow md:text-4xl lg:text-5xl">
              {s.title}
            </h1>
            <p className="text-balance text-lg text-white/90">{s.subtitle}</p>
            <div className="flex justify-center gap-2 pt-2 lg:justify-start">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSlide(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    idx === slide ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Safety Solution */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8" id="download">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
          Advanced Technology Stack
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Comprehensive Safety Solution
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600">
          Our integrated platform combines cutting-edge technologies to provide
          unprecedented tourist safety monitoring and emergency response capabilities.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-blue-600">
              <Lock className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Blockchain Digital IDs</h3>
            <p className="text-sm font-medium text-blue-600">Tamper-proof identity verification</p>
            <p className="mt-3 text-sm text-slate-600">
              Secure, time-bound digital IDs containing KYC data, itinerary, and emergency
              contacts stored on blockchain for immutable verification.
            </p>
            <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Recent Blockchain Activity</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">
                  Live
                </span>
              </div>
              <div className="mt-2 space-y-1 font-mono text-[11px] text-slate-700">
                <div className="flex justify-between">
                  <span>0xa1b2c3…</span>
                  <span className="text-blue-700">Tourist ID</span>
                </div>
                <div className="flex justify-between">
                  <span>0xd4e5f6…</span>
                  <span className="text-blue-700">Location Update</span>
                </div>
                <div className="flex justify-between">
                  <span>0x789abc…</span>
                  <span className="text-blue-700">Safety Alert</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white hover:bg-blue-700"
              >
                Mine New Block
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Brain className="h-8 w-8 text-violet-600" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">AI Anomaly Detection</h3>
            <p className="text-sm font-medium text-violet-600">Real-time behavior monitoring</p>
            <p className="mt-3 text-sm text-slate-600">
              Advanced ML algorithms detect unusual patterns like location drops, prolonged
              inactivity, or route deviations for immediate alerts.
            </p>
            <p className="mt-4 text-xs font-medium text-slate-500">Detection Accuracy</p>
            <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
              <div className="h-2 w-[97.3%] rounded-full bg-violet-500" />
            </div>
            <p className="mt-1 text-right text-xs font-bold text-violet-700">97.3%</p>
            <div className="mt-4 flex justify-between text-center text-xs">
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-slate-500">AI Monitoring</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">0.8s</p>
                <p className="text-slate-500">Response Time</p>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-lg border border-violet-200 bg-violet-50 py-2 text-xs font-semibold text-violet-800 hover:bg-violet-100"
            >
              Process AI Analysis
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <MapPin className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">Geo-Fencing Alerts</h3>
            <p className="text-sm font-medium text-emerald-600">Boundary-based safety zones</p>
            <p className="mt-3 text-sm text-slate-600">
              Virtual boundaries around high-risk areas trigger automatic alerts to tourists
              and authorities when breached.
            </p>
            <div className="mt-4 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 text-center text-xs text-slate-500">
              Geomatics and mapping visualization
              <br />
              (data layers)
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">24 Active Zones</span>
              <button
                type="button"
                className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                Activate Geo-Fence
              </button>
            </div>
          </div>
        </div>

        {/* Emergency / IoT / E-FIR */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Emergency Panic Button</h3>
            <p className="text-sm text-red-600">Instant emergency response</p>
            <p className="mt-3 text-sm text-slate-600">
              One-touch emergency activation sends location, medical info, and alerts to
              authorities and emergency contacts.
            </p>
            <Link
              href="/emergency"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-sm font-bold text-white hover:bg-red-700"
            >
              <Radio className="h-4 w-4" />
              EMERGENCY
            </Link>
          </div>

          <div className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              <Activity className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="mt-4 text-lg font-bold">IoT Smart Band</h3>
            <p className="text-sm text-pink-600">Continuous health monitoring</p>
            <div className="mt-3 rounded-lg bg-sky-50 p-3 text-xs">
              <span className="rounded bg-blue-200 px-1.5 py-0.5 font-semibold">Beta Version</span>{" "}
              <span className="rounded bg-blue-100 px-1.5 py-0.5">Coming Soon</span>
              <p className="mt-2 text-slate-700">
                SOS alerts, fall detection, and blockchain identity on wearable — in testing.
              </p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Wearable device tracks vitals, location, and environmental data with automatic
              emergency detection.
            </p>
            <div className="mt-4 flex gap-4 text-xs text-slate-600">
              <span>
                <Heart className="mr-1 inline h-3 w-3" />
                72 BPM
              </span>
              <span>Normal</span>
              <span className="text-emerald-600">Active</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
              <FileText className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Auto E-FIR Generation</h3>
            <p className="text-sm text-slate-600">Automated incident reporting</p>
            <p className="mt-3 text-sm text-slate-600">
              Automatic Electronic FIR generation for missing persons or emergencies with
              blockchain audit trail.
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li className="flex justify-between">
                Report Generation{" "}
                <span className="rounded bg-amber-200 px-1.5">Automated</span>
              </li>
              <li className="flex justify-between">
                Blockchain Verified <span className="text-emerald-600">✓ Immutable</span>
              </li>
              <li className="flex justify-between">
                Authority Integration{" "}
                <span className="rounded bg-amber-200 px-1.5">Real-time</span>
              </li>
            </ul>
            <a
              href="/api/efir/sample"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-300 py-2.5 text-sm font-semibold hover:bg-slate-50"
            >
              <FileText className="h-4 w-4" />
              View Sample E-FIR
            </a>
          </div>
        </div>
      </section>

      {/* Interactive demos */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase text-slate-500">
            Live System Demonstrations
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-slate-900">
            Interactive Process Visualizations
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Experience real-time demonstrations of our core safety technologies in action.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Blockchain ID Issuance Process</h3>
            <p className="text-sm text-slate-600">Real-time digital identity creation and verification</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Tourist Registration", "Processing"],
                ["KYC Verification", "Pending"],
                ["Blockchain ID Creation", "Pending"],
                ["Location Tracking Active", "Pending"],
              ].map(([title, st], idx) => (
                <div key={title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Step {idx + 1}
                  </p>
                  <h4 className="mt-1 font-semibold text-slate-900">{title}</h4>
                  <span className="mt-2 inline-block rounded-full bg-slate-200 px-2 py-0.5 text-xs">
                    {st}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 border-t border-slate-100 pt-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">1,247</p>
                <p className="text-xs text-slate-600">Active IDs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600">23</p>
                <p className="text-xs text-slate-600">Alerts Today</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">99.9%</p>
                <p className="text-xs text-slate-600">System Uptime</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">Geo-Fencing &amp; Alert System</h3>
            <p className="text-sm text-slate-600">Real-time location monitoring and boundary alerts</p>
            <div className="relative mt-6 h-64 rounded-xl bg-slate-100">
              <div className="absolute left-4 top-4 h-48 w-56 rounded-3xl border-4 border-emerald-500/70 bg-emerald-500/10">
                <span className="absolute left-2 top-2 text-xs font-semibold text-emerald-800">
                  Safe Zone
                </span>
              </div>
              <div className="absolute bottom-8 left-1/4 h-20 w-40 rounded-3xl border-4 border-blue-500/70 bg-blue-500/10">
                <span className="absolute left-2 top-1 text-[10px] font-semibold text-blue-900">
                  Tourist Hub
                </span>
              </div>
              <div className="absolute right-8 top-12 h-56 w-28 rounded-3xl border-4 border-red-500/70 bg-red-500/10">
                <span className="absolute left-1 top-1 text-[10px] font-semibold text-red-900">
                  Restricted Area
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["847", "Active Tourists", "text-blue-600"],
                ["12", "Safe Zones", "text-emerald-600"],
                ["0", "Active Alerts", "text-red-600"],
                ["8", "Checkpoints", "text-violet-600"],
              ].map(([n, l, c]) => (
                <div key={l} className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
                  <p className={`text-2xl font-bold ${c}`}>{n}</p>
                  <p className="text-xs text-slate-600">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <h3 className="text-lg font-bold">Emergency Panic Button System</h3>
            <p className="text-sm text-slate-600">Instant emergency response and location transmission</p>
            <p className="mx-auto mt-6 flex h-28 w-28 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white shadow-xl">
              PANIC
            </p>
            <div className="mx-auto mt-8 max-w-md space-y-2 text-left">
              {[
                "Panic Button Activated",
                "Location Transmitted",
                "Authorities Notified",
                "Emergency Response Dispatched",
              ].map((label, idx) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm"
                >
                  <span>
                    <span className="mr-2 font-bold text-slate-400">{idx + 1}</span>
                    {label}
                  </span>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs">Pending</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Band */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase text-pink-600">
          IoT Health Monitoring
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-slate-900">
          Smart Band Integration
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Real-time health monitoring and environmental data collection through wearable IoT
          devices.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold">
            Beta Version Coming Soon
          </span>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600">
          We are working on a Beta Version of Smart Band integration, which will soon be
          available for testing.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Live Health Metrics</h3>
            <p className="text-sm text-slate-600">Real-time vital signs monitoring</p>
            <div className="mt-4 flex justify-center">
              <span className="rounded-full bg-red-600 px-6 py-2 text-sm font-bold text-white">
                PANIC
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {[
                ["Heart Rate", "72 BPM"],
                ["Temperature", "98.6°F"],
                ["Steps Today", "8,247"],
                ["Battery", "87%"],
                ["Oxygen Level", "98%"],
                ["Stress Level", "23%"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{k}</p>
                  <p className="font-bold text-slate-900">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-amber-50 p-3 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Environmental Data</p>
              <p className="mt-1">
                Air Quality: 85/100 · UV Index: 6.0 · Humidity: 45% · Ambient Temp: 28°C
              </p>
              <p className="mt-2 text-emerald-700">Status: Safe Zone · IoT Connected</p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
            IoT concept visualization — connected devices and data flow
            <p className="mt-4 text-xs font-semibold text-slate-700">All Systems Online</p>
          </div>
        </div>
      </section>

      {/* Geo-Sensing */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase text-emerald-600">
            Live Location Tracking
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-slate-900">
            Geo-Sensing Integration
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600">
            Real-time location tracking with Google Maps integration showing live tourist
            locations, safe zones, and emergency response.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-emerald-600" />
                Live Tourist Location Tracking
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-800">
                  4 Active
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/geo"
                  className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  <Crosshair className="h-3 w-3" />
                  Start Real GPS
                </Link>
                <label className="flex cursor-pointer items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={showAllLocs}
                    onChange={(e) => setShowAllLocs(e.target.checked)}
                  />
                  Show All Locations
                </label>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs">
                  Terrain
                </span>
              </div>
            </div>
            <div className="relative h-80 bg-gradient-to-br from-emerald-100 via-sky-100 to-indigo-100">
              <div className="absolute left-4 top-4 max-w-xs rounded-xl bg-white/95 p-3 text-xs shadow-md backdrop-blur">
                <p className="flex items-center gap-2 font-semibold text-slate-900">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Google Maps API + GPS Active
                </p>
                <p className="mt-1 text-slate-600">Real-time reverse geocoding enabled</p>
                <p className="text-slate-500">Accuracy: ±3–15 meters</p>
              </div>
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                  <Wifi className="h-4 w-4" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                  <Navigation className="h-4 w-4" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
                  <Shield className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap justify-center gap-8">
                {registryTourists.slice(0, showAllLocs ? 4 : 2).map((t) => (
                  <div
                    key={t.did}
                    className="max-w-[140px] rounded-lg bg-white/95 p-2 text-[10px] shadow-md backdrop-blur"
                  >
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-slate-500">ID: {t.did}</p>
                    <p className="text-slate-500">{t.place}</p>
                    <p className="text-slate-600">{t.detail}</p>
                    <p className="text-slate-600">{t.city}</p>
                    <span
                      className={`mt-1 inline-block rounded px-1 text-[9px] font-semibold ${statusStyle(t.status)}`}
                    >
                      {t.status}
                    </span>
                    <span className="text-slate-400"> {t.acc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
              Safe (2)
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-900">
              Warning (1)
            </span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-red-800">
              Emergency (1)
            </span>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold text-slate-900">
              Live Tourist Registry with Real Locations
            </h3>
            <div className="mt-4 space-y-2">
              {registryTourists.map((t) => (
                <div
                  key={t.did}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">ID: {t.did}</p>
                    <p className="text-xs text-slate-600">{t.place}</p>
                    <p className="text-xs text-slate-500">{t.city}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyle(t.status)}`}
                    >
                      {t.status}
                    </span>
                    <p className="text-xs text-slate-500">
                      {t.acc} · {t.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="text-emerald-700">2 Safe Tourists</span>
              <span className="text-amber-700">1 Warnings</span>
              <span className="text-red-700">1 Emergencies</span>
              <span className="text-blue-700">4 Visible</span>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                Live Tracking
              </div>
              <h3 className="font-bold text-slate-900">Geo-Sensing Integration (Google Maps)</h3>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 py-12 text-center">
              <MapPin className="h-10 w-10 text-slate-400" />
              <p className="mt-3 font-semibold text-slate-800">Enable Location Services</p>
              <p className="mt-1 max-w-md text-sm text-slate-600">
                Allow location access to enable real-time zone tracking and safety monitoring.
              </p>
              <Link
                href="/geo"
                className="mt-4 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Enable Location Tracking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-option emergency */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase text-red-600">
          Emergency Response System
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-slate-900">
          Multi-Option Emergency Response
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Advanced emergency system with multiple response options, AI guidance, and
          comprehensive notification services.
        </p>
        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-center font-bold text-slate-900">Emergency Panic Button</h3>
          <p className="mt-2 text-center text-sm text-slate-600">
            Press for immediate emergency assistance with AI guidance.
          </p>
          <div className="mx-auto mt-8 flex h-48 w-48 items-center justify-center rounded-full border-4 border-red-500 bg-white shadow-inner">
            <Link href="/emergency" className="text-center">
              <AlertTriangle className="mx-auto h-10 w-10 text-red-600" />
              <p className="mt-2 text-lg font-black text-red-600">EMERGENCY</p>
            </Link>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Choose from multiple emergency types with AI voice guidance and real-time
            assistance.
          </p>
        </div>
      </section>

      {/* Authority dashboard */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase text-slate-500">
            Real-time Analytics
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-slate-900">
            Authority Dashboard
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Comprehensive real-time monitoring and analytics for tourism authorities and
            emergency response teams.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4">
            {["Overview", "Active Alerts", "Analytics", "Reports"].map((t) => (
              <span
                key={t}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                  t === "Overview"
                    ? "bg-amber-100 text-amber-900"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["15,847", "+12% from last month", "Total Tourists", "text-blue-600"],
              ["3", "Requires immediate attention", "Active Alerts", "text-red-600"],
              ["< 2 min", "Average resolution time", "Resolved Incidents", "text-amber-600"],
              ["98.7%", "Overall safety rating", "Safety Score", "text-rose-600"],
            ].map(([n, sub, title, c]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs text-slate-500">{title}</p>
                <p className={`mt-2 text-3xl font-bold ${c}`}>{n}</p>
                <p className="mt-1 text-xs text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">Safety Statistics</h3>
              <div className="mt-4 space-y-4">
                {(
                  [
                    ["High-Risk Alerts", 15],
                    ["Resolved Incidents", 65],
                    ["Tourists Tracked", 20],
                  ] as const
                ).map(([label, pct]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>{label}</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                      <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">Live Activity Feed</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {(
                  [
                    ["Tourist ID verified", "John Doe — Checkpoint A", "emerald"],
                    ["Geo-fence warning", "Tourist approaching restricted area", "amber"],
                    ["Health data received", "IoT band — Normal vitals", "blue"],
                    ["Emergency alert resolved", "Response team dispatched", "red"],
                  ] as const
                ).map(([a, b, color]) => (
                  <li key={a} className="flex gap-2">
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                        color === "emerald"
                          ? "bg-emerald-500"
                          : color === "amber"
                            ? "bg-amber-500"
                            : color === "blue"
                              ? "bg-blue-500"
                              : "bg-red-500"
                      }`}
                    />
                    <div>
                      <p className="font-medium text-slate-900">{a}</p>
                      <p className="text-xs text-slate-500">{b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/dashboard/admin"
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Open Authority Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase text-slate-500">
          About the System
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-slate-900">
          Revolutionizing Tourist Safety
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Our Smart Tourist Safety Monitoring system ensures that tourists visiting remote and
          high-risk areas are protected through cutting-edge technology integration.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            {[
              ["Blockchain Security", "Tamper-proof digital IDs and immutable audit trails."],
              ["AI-Powered Detection", "Real-time anomaly detection and predictive analytics."],
              ["Geo-Fencing Technology", "Automated boundary monitoring and alert systems."],
              ["IoT Integration", "Smart wearables for continuous health monitoring."],
            ].map(([t, d]) => (
              <div key={t as string}>
                <h3 className="font-bold text-slate-900">{t}</h3>
                <p className="text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200 to-amber-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
              alt="Happy tourist with backpack in scenic mountain landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-slate-200 bg-slate-50 py-16" id="contact">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase text-blue-600">
            Get in Touch
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-slate-900">
            Contact Our Team
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Ready to implement smart tourist safety in your region? Get in touch with our
            experts for consultation and deployment.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-slate-900">Send us a Message</h3>
              <p className="text-sm text-slate-600">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">Emergency Contacts</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li>
                    <p className="text-xs text-slate-500">24/7 Emergency Hotline</p>
                    <p className="font-mono text-slate-900">+1-800-TOURIST-911</p>
                  </li>
                  <li>
                    <p className="text-xs text-slate-500">Crisis Response Center</p>
                    <p>response@touristsafety.gov</p>
                  </li>
                  <li>
                    <p className="text-xs text-slate-500">Technical Support</p>
                    <p>support@smarttouristsafety.com</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">System Status</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    ["Blockchain Network", "Operational"],
                    ["AI Detection System", "Active"],
                    ["IoT Network", "Connected"],
                    ["Emergency Services", "Ready"],
                  ].map(([label, st]) => (
                    <li key={label} className="flex justify-between">
                      <span>{label}</span>
                      <span className="text-emerald-600">{st}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
