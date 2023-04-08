-- CreateTable
CREATE TABLE "RecipeSettings" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "temp" INTEGER NOT NULL,
    "humidity" INTEGER NOT NULL,
    "tempOff" INTEGER NOT NULL,
    "tempOn" INTEGER NOT NULL,
    "hours" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "RecipeSettings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecipeSettings" ADD CONSTRAINT "RecipeSettings_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
