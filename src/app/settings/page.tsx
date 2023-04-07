import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import "../../styles/globals.css";
import EditControllerPage from "./editController/page";

const prisma = new PrismaClient();

async function fetchControllers() {
  try {
    const controllers = await prisma.controller.findMany();
    return controllers;
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching controllers: + ${error}`);
  }
}

export default async function SettingsPage() {
  try {
    const controllers = await fetchControllers();
    return (
      <>
        
          <div className="sub-container animated fadeInDown">
            
          
          
            <h3>Your Controllers</h3>
            {controllers.map((controller) => (
              <div key={controller.id}>
                <div className="sub-container-detail">
                  <h4>
                    {controller.id}/ {controller.name}
                  </h4>
                  <p>{controller.description}</p>
                  <p>Public IP: {controller.publicIpAddress}</p>
                  <p>Private IP: {controller.privateIpAddress}</p>
                  <p>Active: {controller.isActive ? "Yes" : "No"}</p>
                </div>
              </div>
            ))}

            <div className="sub-container-detail">
              <div className="links">
                <Link href="/settings/editController">
                  <button className="btn">Edit</button>
                </Link>
                <Link href="/settings/addController">
                  <button className="btn">Add New</button>
                </Link>
              </div>
            </div>
          </div>
        
      </>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        <p>Something went wrong error with the fetchControllers function</p>
      </div>
    );
  }
}
