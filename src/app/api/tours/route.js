import { NextResponse } from "next/server";

const { query } = require('../../../lib/db.cjs');

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  
  console.log('Tour ID:', id);

  if (!id) {
    return NextResponse.json(
      { message: 'Tour ID is required' },
      { status: 400 }
    );
  }

  try {
    // Fetch tour details
    const tours = await query({
      query: "SELECT * FROM mainTable WHERE id = ?",
      values: [id],
    });

    if (tours.length === 0) {
      console.log('No tour found with ID:', id);
      return NextResponse.json(
        { message: 'Tour not found' },
        { status: 404 }
      );
    }

    console.log('Found tour:', tours[0]);
    return NextResponse.json(tours[0]);
  } catch (e) {
    console.error('Error fetching tour:', e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
};
