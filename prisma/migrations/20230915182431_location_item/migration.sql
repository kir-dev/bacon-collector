-- CreateTable
CREATE TABLE "LocationItem" (
    "token" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "accuracy" DOUBLE PRECISION NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "altitude" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LocationItem_token_key" ON "LocationItem"("token");
