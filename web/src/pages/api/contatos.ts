import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        {
            nome: 'Pessoa 1',
            idade: 25,
        },
        {
            nome: 'Pessoa 2',
            idade: 32,
        },
    ]);
}
