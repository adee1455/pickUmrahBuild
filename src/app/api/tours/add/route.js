import { NextResponse } from "next/server";
const { query } = require('../../../../lib/db.cjs');

export const POST = async (req) => {
  try {
    const data = await req.json();
    
    // Validate required fields
    const requiredFields = ['tourname', 'touradd', 'departdate', 'arrivaldate', 'departlocation', 'price', 'days', 'type'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // First, get the last ID from the table
    const lastIdResult = await query({
      query: "SELECT MAX(id) as lastId FROM mainTable",
    });

    const nextId = (lastIdResult[0]?.lastId || 0) + 1;

    // Add the ID to the data
    const dataWithId = {
      id: nextId,
      ...data
    };

    // Build the INSERT query dynamically based on provided fields
    const fields = Object.keys(dataWithId);
    const placeholders = fields.map(() => '?').join(', ');
    const values = Object.values(dataWithId);

    const result = await query({
      query: `INSERT INTO mainTable (${fields.join(', ')}) VALUES (${placeholders})`,
      values: values,
    });

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: 'Failed to add tour' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: 'Tour added successfully',
      id: nextId
    });
  } catch (e) {
    console.error('Error adding tour:', e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}; 