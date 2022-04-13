// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

var disabled = false;
const Themeparks = require("themeparks");


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (disabled===true) {
        res.status(403)
        res.send({ message: "This is an API endoint. You cannot send ANY types of requests to this URL." })
        res.end()
    } else {
        // If request is not a post request, deny access with 403 and message.
        if (req.method !== 'POST') {
            res.status(403)
            res.send({ message: "You can only send POST requests to this API endpoint." })
            res.end()

        // if request is a post request
        } else if (req.method==="POST") {
            const ThorpePark = new Themeparks.Parks.ThorpePark();
            
            // Access wait times by Promise
            const CheckWaitTimes = () => {
                ThorpePark.GetWaitTimes().then((rideTimes) => {
                    rideTimes.forEach((ride) => {
                        // console.log(`${ride.name}: ${ride.waitTime} minutes wait (${ride.status})`);

                    });
                }).catch((error) => {
                    // console.error(error);
                }).then(() => {
                    setTimeout(CheckWaitTimes, 1000 * 60 * 5); // refresh every 5 minutes
                });
            };
            CheckWaitTimes();

            // you can also call GetOpeningTimes on themeparks objects to get park opening hours
            
        }
    }
}
