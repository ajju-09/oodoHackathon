import Items from "@/models/Items";
import { auth } from "@clerk/nextjs/server";
import connectDB from "@/lib/db";

export async function POST(req) {
  const { userId } = auth(req);

  console.log("🔐 Authenticated User ID:", userId); // ✅ Check what you're getting

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const data = await req.json();

  try {
    await connectDB();

    const newItem = await Items.create({
      ...data,
      uploadedBy: userId,
    });

    return new Response(JSON.stringify(newItem), { status: 201 });
  } catch (error) {
    console.error("❌ Item creation error:", error);
    return new Response("Failed to create item", { status: 500 });
  }
}
