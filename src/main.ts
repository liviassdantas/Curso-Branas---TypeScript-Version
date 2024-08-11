import AccountService, { AccountServiceProduction } from "./Signup";
import API from "./driver";
import { AccountDAODatabase } from "./resources";

const accountDAO = new AccountDAODatabase();
const accountService = new AccountServiceProduction(accountDAO);
const api = new API(accountService);
api.build();
api.start();