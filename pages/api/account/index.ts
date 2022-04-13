// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
      res.status(403)
      res.send({ message: "This is an API endoint. You cannot send ANY types of requests to this URL." })
      res.end()
  
    } else {
    res.status(403)
    res.send({ message: "This is an API endoint. You cannot send ANY types of requests to this URL." })
    res.end()
  }
}
