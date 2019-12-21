import {prisma} from "../../../../generated/prisma-client";
export default {
    Mutation: {
        createAccount: async(_, args, ) => {
            const {userName, email, firstName="", lastName="", bio="", avatar=""} = args;
            const exists = await prisma.$exists.user({ userName });
            if(exists){
                throw Error("This username is already taken");
            }
            try{
                await prisma.createUser({
                    userName,
                    email,
                    firstName,
                    lastName,
                    bio,
                    avatar
                });
                return true;
            }
            catch(error){
                return false;
            }
        }
    }
}