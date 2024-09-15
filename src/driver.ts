import express from "express";
import Signup from "./Signup";
import GetAccount from "./GetAccount";

export default class API {
	app: any;

	constructor (readonly signup: Signup, readonly getAccount: GetAccount) {
		this.app = express();
		this.app.use(express.json());

	}

	build () {
		this.app.post("/signup", async (req: any, res: any) => {
			const input = req.body;
			try {
				const output = await this.signup.execute(input);
				res.json(output);
			} catch (e: any) {
				res.status(422).json({
					message: e.message
				});
			}
		});
		
		this.app.get("/accounts/:accountId", async (req: any, res: any) => {
			const accountId = req.params.accountId;
			const output = await this.getAccount.execute(accountId);
			res.json(output);
		});
		
		
	}

	start () {
		this.app.listen(3000);
	}
}