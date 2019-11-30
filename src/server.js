
import dotenv from "dotenv";
import path from "path"
import "./env"
import {
    GraphQLServer
}from "graphql-yoga";
import logger from "morgan";
import schema  from "./schema";
import utils from "./utils";
import {sendSecretMail} from "./utils";
import passport from "passport";
import "./passport";
import { authenticateJwt } from "./passport";
import {isAuthenticated} from "./middleware";
// sendSecretMail("rudduqdl1@gmail.com", 123);

const PORT = process.env.PORT || 4000;



const server = new GraphQLServer(
    {
        schema,
        context: (
            {
                request , isAuthenticated
            }
        ) => ({request})
    }
);

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start(
    {port:PORT}, () => console.log(`Server running on http://localhost:${PORT}`)
);