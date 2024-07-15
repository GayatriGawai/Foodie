

import mongoose from "mongoose";
import { User } from "../../../model/User";

export async function GET(req) {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const users = await User.find(); // Fetch all user data

    return Response.json(users);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
