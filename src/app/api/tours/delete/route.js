import { NextResponse } from "next/server";
const { query } = require('../../../../lib/db.cjs');

export const DELETE = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { message: 'Tour ID is required' },
        { status: 400 }
      );
    }

    const result = await query({
      query: "DELETE FROM mainTable WHERE id = ?",
      values: [id],
    });

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: 'Tour not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Tour deleted successfully' });
  } catch (e) {
    console.error('Error deleting tour:', e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}; 