import { login, logout, signIn } from '@/code/actions';
import { redirect } from 'next/navigation';
import React from 'react'

export default function SignIn() {
  return (
    <div className='mt-[120px] flex-grow'>
          <form
            action={async (formData) => {
              "use server";
              await signIn(formData);
              redirect("/login");
            }}
          >
            <input type="text" name="username" placeholder="name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" />
            <br />
            <button type="submit">Create User</button>
          </form>
    </div>
  )
}
