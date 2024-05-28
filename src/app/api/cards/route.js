import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export const GET = async (req) => {
  if (req.url) {
    const { searchParams } = new URL(req.url);
    const location = searchParams.get('location') || 'all';
    const month = searchParams.get('month') || 'default';
    const sort = searchParams.get('sort') || 'default';
    const searchKey = searchParams.get('search') || '';

    console.log('Location parameter:', location);
    console.log('Month parameter:', month);
    console.log('Sort parameter:', sort);
    console.log('Search key:', searchKey);

    try {
      let queryStr = `SELECT * FROM card WHERE 1`;

      if (location !== 'all') {
        queryStr += ` AND departlocation = ?`;
      }

      if (month !== 'default') {
        queryStr += ` AND monthyear = ?`;
      }

      if (searchKey.trim() !== '') {
        queryStr += ` AND tourName LIKE ?`;
      }

      if (sort === 'lowToHigh') {
        queryStr += ` ORDER BY price ASC`;
      } else if (sort === 'highToLow') {
        queryStr += ` ORDER BY price DESC`;
      }

      const values = [];
      if (location !== 'all') {
        values.push(location);
      }

      if (month !== 'default') {
        values.push(month);
      }

      if (searchKey.trim() !== '') {
        const searchParam = `%${searchKey}%`;
        values.push(searchParam);
      }

      const results = await query({
        query: queryStr,
        values: values,
      });

      console.log("Database results:", results);
      return NextResponse.json(results);
    } catch (e) {
      console.error("Error in GET request:", e);
      return NextResponse.json({ message: e.message }, { status: 500 });
    }
  } else {
    // Handle the logic for other cases
    // You can add specific handling for cases where req.url is not available
  }
};