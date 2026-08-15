-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
