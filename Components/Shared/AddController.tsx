import { NextRequest, NextResponse } from "next/server";
import Link from "next/link";

interface AddController {
  id: string;
  name: string;
  location: string;
  ipAddress: string;
  port: string;
  isActive: boolean;
  chefId: string;
}

const DATA_SOURCE_URL = "http://localhost:3000/api/controllers";

async function addController(data: AddController) {
  const response = await fetch(DATA_SOURCE_URL, {
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

export default AddController;
