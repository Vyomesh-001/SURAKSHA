import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionPayload } from "@/lib/auth-user";

function computeSteps(createdAt: Date): string[] {
  const elapsed = Date.now() - createdAt.getTime();
  const stepMs = 1800;
  const completed = Math.min(Math.floor(elapsed / stepMs) + 1, 4);
  const labels = ["pending", "pending", "pending", "pending"];
  for (let i = 0; i < completed; i++) {
    labels[i] = "complete";
  }
  return labels;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSessionPayload();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const ev = await prisma.emergencyEvent.findUnique({
    where: { id },
    include: { user: { select: { id: true, name: true } } },
  });

  if (!ev) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (session.role === "TOURIST" && ev.userId !== session.sub) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const steps = computeSteps(ev.createdAt);

  await prisma.emergencyEvent.update({
    where: { id },
    data: { stepsJson: JSON.stringify(steps) },
  });

  return NextResponse.json({
    id: ev.id,
    steps,
    createdAt: ev.createdAt,
    lat: ev.lat,
    lng: ev.lng,
    userName: ev.user.name,
  });
}
