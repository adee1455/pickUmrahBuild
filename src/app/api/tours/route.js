import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const GET = async (req, res) => {
  try {
    const results = await query({
      query: "select * from tourPage",
    });

    console.log(results);

    return NextResponse.json(results);
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
};
