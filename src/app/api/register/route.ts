import { NextResponse } from "next/server";
import {User} from '../../../model/User'
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

export async function POST(req:Request) {
  try {
  const body = await req.json();

  const { email, password } = body;
  if (!email) {
    return NextResponse.json({ msg: "Invalid Field" }, { status: 400 });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return NextResponse.json({ msg: "User already exists" }, { status: 409 });
  }

  const hashPassword = await bcrypt.hash(password, 10);


    const user = new User({ email, password: hashPassword });
    await user.save();
    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    const response=NextResponse.json({msg:"User created successfully"},{status:201})
    response.cookies.set('token',token)  //This is how we save the token in cookies
    return response;
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
 
}
