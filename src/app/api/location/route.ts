import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSessionPayload } from "@/lib/auth-user";

const bodySchema = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string().optional(),
});

export async function POST(req: Request) {
  const session = await getSessionPayload();
  if (!session || session.role !== "TOURIST") {
    return NextResponse.json({ error: "Tourist login required" }, { status: 401 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: session.sub },
    data: {
      lat: parsed.data.lat,
      lng: parsed.data.lng,
      address: parsed.data.address,
      locationTrackingStatus: "Complete",
    },
  });

  return NextResponse.json({ ok: true });
}
