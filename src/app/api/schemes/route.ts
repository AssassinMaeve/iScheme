import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Scheme from "@/models/Scheme";

export async function GET() {
  try {
    await connectDB();
    const schemes = await Scheme.find({}).lean();
    return NextResponse.json(schemes); // ✅ returns JSON
  } catch (error) {
    console.error("❌ Error fetching schemes:", error);
    return NextResponse.json(
      { error: "Failed to fetch schemes" },
      { status: 500 }
    );
  }
}
