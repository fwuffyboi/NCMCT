// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { rawListeners } from 'process'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
      res.status(405).send({ message: 'You can\'t send a POST request to this URL.' })
      res.end()
  } else if (req.method === "GET") {
      res.status(200).send({
        1: "This is the API index page. If you got here by accident, dont worry, you didnt break anything.",
        2: "If you're here on purpose, here are the usable URL's with our API.",
        
        urls: {
          "compose": {
            1: "compose/post",
            2: "compose/status",
            3: "compose/reply"
          },

          "stats": {
            1: "stats/accounts",
            2: "stats/replys",
            3: "stats/posts",
            4: "stats/statuses",
            5: "stats/server-uptime",
          },

          "account": {
            1: "account/signup",
            2: "account/signin", 
            3: "account/destroy",
            4: "account/change-password",
            5: "account/edit"
          },

          "forms": {
            1: "forms/therewasanerror"
          },
        },
      
      }
    )
      res.end()
    // res.status(400).send({ message: 'This is the API index page. If you got here by accident, dont worry, you didnt break anything. If you\'re here o purpose, here are the usable URL\'s with our API.' })
  }
}