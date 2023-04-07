-- CreateTable
CREATE TABLE "Controller" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP(3) NOT NULL,
    "publicIpAddress" TEXT NOT NULL,
    "privateIpAddress" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Controller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ControllerToRecipe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Controller_name_key" ON "Controller"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ControllerToRecipe_AB_unique" ON "_ControllerToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_ControllerToRecipe_B_index" ON "_ControllerToRecipe"("B");

-- AddForeignKey
ALTER TABLE "_ControllerToRecipe" ADD CONSTRAINT "_ControllerToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Controller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ControllerToRecipe" ADD CONSTRAINT "_ControllerToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
