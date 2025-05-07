import { NextResponse } from "next/server";
const { query } = require('../../../../lib/db.cjs');

export const PUT = async (req) => {
  try {
    const data = await req.json();
    const { id, ...tourData } = data;

    if (!id) {
      return NextResponse.json(
        { message: 'Tour ID is required' },
        { status: 400 }
      );
    }

    // Build the SET clause dynamically based on provided fields
    const setClause = Object.keys(tourData)
      .map(key => `${key} = ?`)
      .join(', ');
    
    const values = [...Object.values(tourData), id];

    const result = await query({
      query: `UPDATE mainTable SET ${setClause} WHERE id = ?`,
      values: values,
    });

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: 'Tour not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Tour updated successfully' });
  } catch (e) {
    console.error('Error updating tour:', e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}; 