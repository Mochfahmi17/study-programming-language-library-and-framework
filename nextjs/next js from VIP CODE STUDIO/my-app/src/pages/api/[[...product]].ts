import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (Array.isArray(req.query.product) && req.query.product[1]) {
    const data = await retrieveDataById("products", req.query.product[1]);
    res.status(200).json({ success: true, statusCode: 200, data });
  }
  const data = await retrieveData("products");

  res.status(200).json({ success: true, statusCode: 200, data });
}
