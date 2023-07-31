import { PrismaClient } from '@prisma/client';
import { PurchaseOrder } from "../interfaces";

const prisma = new PrismaClient();

export const findManyPurchaseOrder = () => prisma.purchaseOrder.findMany({
  include: {
    products: true,
  },
  orderBy: {
    date: "desc"
  }
});

export const savePurchaseOrder = (purchaseOrder: PurchaseOrder) => {
  return prisma.purchaseOrder.create({
    data: {
      ...purchaseOrder,
      products: {
        create: purchaseOrder.products
      }
    }
  });
}