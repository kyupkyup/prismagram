import { request } from "express";
import { prisma } from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragments";

export default{
    Query:{
        me: async(_, __, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { user } = request;
            return await prisma.user({id: user.id});
        }
    }
};