import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jean Miranda" },
    { id: 3, name: "Rogerinho" },
  ];

  return response.json(users);
};
