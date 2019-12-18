import { secretGenerator, generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        requestSecret: async(_, args) => {
            const {email} = args;
            const loginSecret = generateSecret();
            console.log(loginSecret);

            try{
                console.log(sendSecretMail(email, loginSecret));
                await sendSecretMail(email, loginSecret);
                console.log(email);
                await prisma.updateUser({
                    data:{loginSecret}, where:{email}
                });
                return true;
            }
            catch{
                return false;
            }
       
        }
    }
};