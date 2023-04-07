import React from "react";
import { PrismaClient } from "@prisma/client";
import "../../styles/globals.css";

const prisma = new PrismaClient();

async function fetchControllers() {
  const controllers = await prisma.controller.findMany();
  return controllers;
}

export default async function SettingsPage() {
  const controllers = await fetchControllers();
  return (
    <>
      <div className="sub-container">
        <h3>Your Controllers</h3>

        {controllers.map((controller) => (
          <div key={controller.id}>
            <div className="sub-container-detail">
              <p>Controller Name: {controller.name}</p>
              <p>Description: {controller.description}</p>
              <p>Public IP: {controller.publicIpAddress}</p>
              <p>Private IP: {controller.privateIpAddress}</p>
              <p>Active: {controller.isActive ? "Yes" : "No"}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
