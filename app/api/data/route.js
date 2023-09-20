import { ConnectToDB } from "@utils/database";
import { data } from "@data/data";
export const GET = async (request) => {
  try {
    ConnectToDB();
    return new Response(JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};
