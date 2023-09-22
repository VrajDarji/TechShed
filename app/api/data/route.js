import { ConnectToDB } from "@utils/database";
import { data } from "@data/data";

// Connect to the database when your application starts

export const GET = async (req) => {
  try {
    // Now you can use the Data model to fetch data
    ConnectToDB();
    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};
