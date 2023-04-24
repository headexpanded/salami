'use client';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import '@/styles/globals.css';

export default function AddControllerPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return (
        <div>
          <p>Unauthenticated</p>
        </div>
      );
    },
  });

  const DATA_SOURCE_URL = 'http://localhost:3000/api/controllers';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      location: '',
      ipAddress: '',
      port: '',
      isActive: false,
      recipeId: '1',
      userId: session?.user?.id,
    },
    mode: 'onSubmit',
    shouldFocusError: true,
  });
  console.log(errors);

  return (
    <>
      <div className="sub-container animated fadeInDown">
        <h3>Add Controller, {session?.user?.name}</h3>
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log('HERE IS THE DATA: ', JSON.stringify(data));
            alert(JSON.stringify(data));
            const req = new Request(DATA_SOURCE_URL, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'content-type': 'application/json',
              },
            });

            fetch(req)
              .then((response) => {
                if (response.status === 201) {
                  return response.json();
                } else {
                  throw new Error(
                    "This still doesn't work: " + response.status
                  );
                }
              })
              .then((response) => {
                console.debug(response);
              })
              .catch((error) => {
                console.error(error);
              });
          })}
          /* const res = await fetch(DATA_SOURCE_URL, {
              headers : {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(data),
            });
            console.log(res.body)
          })} */
          className="controller-form"
        >
          <input
            {...register('name', {
              required: 'This is required',
              minLength: { value: 1, message: 'Must have a name' },
            })}
            placeholder="name"
            className="controller-form-input"
          />
          <p>{errors.name?.message}</p>
          <input
            {...register('location', { required: 'This is required' })}
            placeholder="location"
            className="controller-form-input"
          />
          <p>{errors.location?.message}</p>
          <input
            {...register('ipAddress', {
              required: 'This is required',
              maxLength: { value: 15, message: 'Must be in IP address format' },
              //pattern: /^([0-9]{1,3}\.){3}[0-9]{1,3}\.[0-9]{2,3}$/,
            })}
            placeholder="IP address"
            className="controller-form-input"
          />
          <p>{errors.ipAddress?.message}</p>
          <input
            {...register('port', {
              required: 'This is required',
              maxLength: { value: 4, message: 'Must be 4 digits' },
            })}
            placeholder="port (use 5000!)"
            className="controller-form-input"
          />
          <p>{errors.port?.message}</p>
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
