import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from './user.typeDefs.js';
import transactiontypeDef from "./transaction.typeDefs.js";


const mergeTypesDefs = mergeTypeDefs([userTypeDef, transactiontypeDef]);

export default mergeTypesDefs;