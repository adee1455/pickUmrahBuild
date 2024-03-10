import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export const GET = async (req, res) => {
  try {
    const results = await query({
      query: "select * from card",
    });

    console.log(results);

    return NextResponse.json(results);
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
};

// import { query } from "../../../lib/db";

// export default async function handler(req, res) {
//   try {
//     // Parse query parameters for pagination
//     const { page = 1, limit = 5 } = req.query;

//     // Convert page and limit to numbers
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);

//     // Calculate offset based on page and limit
//     const offset = (pageNumber - 1) * limitNumber;

//     // Query database for a specific range of records
//     const results = await query({
//       query: "SELECT * FROM card LIMIT ?, ?",
//       values: [offset, limitNumber],
//     });

//     // Return the results
//     res.status(200).json(results);
//   } catch (error) {
//     // Return error response if there's an error
//     res.status(500).json({ message: error.message });
//   }
// }

// import { query } from "../../../lib/db";

// export default async function handler(req, res) {
//   try {
//     // Parse query parameters for pagination
//     const { page = 1, limit = 5 } = req.query;

//     // Convert page and limit to numbers
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);

//     // Calculate offset based on page and limit
//     const offset = (pageNumber - 1) * limitNumber;

//     // Query database for a specific range of records
//     const results = await query({
//       query: "SELECT * FROM card LIMIT ?, ?",
//       values: [offset, limitNumber],
//     });

//     // Return the results
//     res.status(200).json(results);
//   } catch (error) {
//     // Return error response if there's an error
//     res.status(500).json({ message: error.message });
//   }
// }
