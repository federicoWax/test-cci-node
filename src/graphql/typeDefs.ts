const typeDefs = `#graphql
  type PurchaseOrder {
    id: ID
    orderNumber: Int
    date: String
    client: String
    address: String
    subtotal: Float
    tax: Float
    total: Float
    products: [OrderProduct]
  }

  type OrderProduct {
    id: ID
    orderNumber: Int
    product: String
    quantity: Int
    price: Float
    total: Float
  }

  input OrderProductInput {
    product: String
    quantity: Int
    price: Float
    total: Float
  }

  input PurchaseOrderInput {
    date: String
    client: String
    address: String
    subtotal: Float
    tax: Float
    total: Float
    products: [OrderProductInput]
  }

  type Query {
    purchaseOrders: [PurchaseOrder]
  }

  type Mutation {
    createPurchaseOrderWithProducts(data: PurchaseOrderInput!): PurchaseOrder
  }
`;

export default typeDefs;
