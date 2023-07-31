import { PurchaseOrder } from "../interfaces";
import { savePurchaseOrder } from "../repositories/purchaseOrder";

export const createPurchaseOrder = async (purchaseOrder: PurchaseOrder) => {
  try {
    const tax = 0.16;
    const subtotal = purchaseOrder.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const total = subtotal + (subtotal * tax);

    purchaseOrder = {
      ...purchaseOrder,
      tax,
      subtotal,
      total,
      products: purchaseOrder.products.map(p => ({ ...p, total: p.price + (p.price * tax) }))
    };

    return await savePurchaseOrder(purchaseOrder);
  } catch (error) {
    console.log(error);
    throw new Error("Error al guardar la orden de compra.");
  }
}