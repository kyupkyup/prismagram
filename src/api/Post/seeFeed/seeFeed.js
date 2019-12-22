import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default{
    Query:{
        seeFeed: async(_, __, {request, isAuthenticated}) =>{
            isAuthenticated(request);

            const {user} = request;
            const following = await prisma.user({id: user.id}).followings();
            console.log(following.length + "팔로워");

            const post = await prisma.posts({
                where:{
                    user_every :{
                        id_in: [...following.map(user => user.id) , user.id]
                    }
                },
                orderBy: "createdAt_DESC"
                        });
            console.log(post);
            return post;

        }
    }
}