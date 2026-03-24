import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    reportId: "E-FIR-DEL-2025-88421",
    generatedAt: new Date().toISOString(),
    blockchainHash: "0xefir9a8b7c6d5e4f3210fedcba9876543210abcd",
    immutable: true,
    complainant: {
      name: "John Smith",
      did: "DID:0x1a2b3c",
      contact: "+91-XXXX-XXXX",
    },
    incident: {
      type: "Missing person / distress signal",
      location: "Approx. India Gate precinct, New Delhi",
      coordinates: { lat: 28.6129, lng: 77.2295 },
    },
    authorityRouting: "Delhi Police Control + Tourism Helpline",
    auditTrail: "Anchored on consortium ledger — verification OK",
  });
}
