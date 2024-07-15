{
    /* This route is only to establish the referrence between the User and EndUser 
    
        To Send the Email to other repo's EndUser
    */
  }
  import mongoose from "mongoose";
  import { User } from "../../src/model/User";
  
  export async function GET(req) {
    await mongoose.connect(process.env.MONGO_URL);

    try {
      const  {email}  = await req.query;
  
      console.log(req.query);
      const user = await User.findOne({ email }).populate("email");
      if (!email) {
       const allUsers= await User.find().populate("email");
       return Response.json({data: allUsers})
      }
      if (!user) {
        return new Response(
          JSON.stringify({ status: 404, error: "User not found" }),
          { status: 404 }
        );
      }
      return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
      console.error("Error fetching user:", error);
      return new Response(
        JSON.stringify({ status: 500, error: "Server error" }),
        { status: 500 }
      );
    }
  }
  