// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import Championship from "../../types/Championship";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Championship[]>
) {
    let response: Championship[] = [];
    response.push({id: 1, year: 2020});
    response.push({id: 2, year: 2022});
    response.push({id: 3, year: 2023});
    res.status(200).json(response);
}
