import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionPayload } from "@/lib/auth-user";

export async function GET() {
  const session = await getSessionPayload();
  if (!session || session.role !== "ADMIN") {
    return NextResponse.json({ error: "Admin only" }, { status: 401 });
  }

  const [totalTourists, activeAlerts, recentEmergencies, activities] =
    await Promise.all([
      prisma.user.count({ where: { role: "TOURIST" } }),
      prisma.user.count({ where: { role: "TOURIST", status: "EMERGENCY" } }),
      prisma.emergencyEvent.count({
        where: {
          createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
        },
      }),
      prisma.systemActivity.findMany({
        orderBy: { createdAt: "desc" },
        take: 12,
      }),
    ]);

  return NextResponse.json({
    totalTourists,
    activeAlerts,
    recentEmergencies,
    safetyScore: 98.7,
    avgResolutionMin: 1.8,
    activities,
  });
}
