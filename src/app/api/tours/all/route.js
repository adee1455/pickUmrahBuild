import { NextResponse } from "next/server";
const { query } = require('../../../../lib/db.cjs');

export const GET = async () => {
  try {
    const tours = await query({
      query: "SELECT * FROM mainTable ORDER BY id DESC",
    });

    return NextResponse.json(tours);
  } catch (e) {
    console.error('Error fetching tours:', e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}; 