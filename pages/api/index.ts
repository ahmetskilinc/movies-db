import type { NextApiRequest, NextApiResponse } from "next";

const Index = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method === "OPTIONS") {
		return res.status(200).send("ok");
	}
};

export default Index;
