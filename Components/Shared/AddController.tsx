import Link from "next/link";

interface AddController {
  id: number;
  name: string;
  location: string;
  publicIPAddress: string;
  port: number;
  isActive: boolean;
  chefId: number;
  recipeId: number;
}

async function addController(data: AddController) {
  const response = await fetch("/api/controllers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const newController = await response.json();
    return newController;
  } else {
    console.log(response);
    throw new Error("Error adding controller: ${response.statusText}");
  }
}
