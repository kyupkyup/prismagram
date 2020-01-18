import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragments";
export default {
    Query: {
      seeFullPost: async (_, args) => {
        const { id } = args;
        return prisma.post({ id });
      }
    }
  };