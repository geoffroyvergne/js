import type { NextApiRequest, NextApiResponse } from 'next'
import { ResponseData } from '../../../src/app/models';
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ code: 200, message: 'Debug echo !' })
}
