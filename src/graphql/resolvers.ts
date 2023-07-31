import { PurchaseOrder } from "../interfaces";
import { findManyPurchaseOrder } from "../repositories/purchaseOrder";
import { createPurchaseOrder } from "../services/purchaseOrder";

const resolvers = {
  Query: {
    getPurchaseOrders: async () => {
      try {
        return await findManyPurchaseOrder();
      } catch (error) {
        console.log(error);
        throw new Error('Error al obtener las órdenes de compra.');
      }
    },
  },
  Mutation: {
    createPurchaseOrder: async (_: any, { data }: { data: PurchaseOrder }) => {
      try {
        return await createPurchaseOrder(data);
      } catch (error) {
        throw error;
      }
    },
  },
};

export default resolvers;