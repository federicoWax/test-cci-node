import { PrismaClient } from '@prisma/client';
import { PurchaseOrder } from "../interfaces";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    purchaseOrders: () => {
      return prisma.purchaseOrder.findMany({
        include: {
          products: true,
        },
      });
    },
  },
  Mutation: {
    createPurchaseOrderWithProducts: async (_: any, { data }: { data: PurchaseOrder }) => {


    },
  },
};

export default resolvers;