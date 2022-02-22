// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
      res.status(400).send({ message: '' })
  } else if (req.method === "GET") {
      res.status(400).send({ message: 'Sorry, you cant send a \'GET\' request to this page' })
  }
}
