"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import "@/styles/globals.css";

export default function AddControllerPage() {
  const { data: session } = useSession();
  
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      location: "",
      ipAddress: "",
      port: "5000",
    },
  });
  console.log(errors);

  return (
    <>
      <div className="sub-container animated fadeInDown">
        <h3>Add Controller</h3>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="controller-form"
        >
          <input
            {...register("name", {
              required: "This is required",
              minLength: { value: 1, message: "Must have a name" },
            })}
            placeholder="name"
            className="controller-form-input"
          />
          <p>{errors.name?.message}</p>
          <input
            {...register("location", { required: "This is required" })}
            placeholder="location"
            className="controller-form-input"
          />
          <p>{errors.location?.message}</p>
          <input
            {...register("ipAddress", {
              required: "This is required",
              maxLength: { value: 15, message: "Must be in IP address format" },
            })}
            placeholder="IP address"
            className="controller-form-input"
          />
          <p>{errors.ipAddress?.message}</p>
          <input
            {...register("port", {
              required: "This is required",
              maxLength: { value: 4, message: "Must be 4 digits" },
            })}
            placeholder="port (use 5000!)"
            className="controller-form-input"
          />
          <p>{errors.port?.message}</p>
          <input type="hidden" name="userId" />
          <input type="submit" className="btn" />
        </form>

        <div className="sub-container-detail">
          <Link href="/controllers">
            <button className="btn">Cancel</button>
          </Link>
        </div>
      </div>
    </>
  );
}
