-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cep" INTEGER,
    "home_number" INTEGER NOT NULL,
    "home_adress" TEXT
);

-- CreateTable
CREATE TABLE "Deliveryman" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_id" TEXT NOT NULL,
    "deliveryman_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Order_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "Deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductOrders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "ProductOrders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductOrders_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
