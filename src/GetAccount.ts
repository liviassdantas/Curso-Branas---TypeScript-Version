import AccountDAO from "./resources";
import UseCase from "./UseCase";

export class GetAccount implements UseCase{
	accountDAO: AccountDAO;

	constructor (accountDAO: AccountDAO) {
		this.accountDAO = accountDAO;
	}
	
	async execute (accountId: any): Promise<any> {
		const account = await this.accountDAO.getAccountById(accountId);
		return account;
	}
}