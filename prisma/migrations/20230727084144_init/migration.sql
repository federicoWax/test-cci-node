-- CreateTable
CREATE TABLE "PurchaseOrder" (
    "orderNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "client" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "subtotal" DECIMAL NOT NULL,
    "tax" DECIMAL NOT NULL,
    "total" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderNumber" INTEGER NOT NULL,
    "product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "total" DECIMAL NOT NULL,
    CONSTRAINT "OrderProduct_orderNumber_fkey" FOREIGN KEY ("orderNumber") REFERENCES "PurchaseOrder" ("orderNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);
