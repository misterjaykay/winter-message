import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Snow from './component/Snow';
import Document, { NextScript } from "next/document";
import React, { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ keyword, setKeyword ] = useState("");

  const handleChange = (e) => {
    let pw = e.target.value;
    setKeyword(pw);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.password.value)
    const data = {
      name: "",
      password: event.target.password.value
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);

    const endpoint = '/api/form';

    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.success}`)
    console.log(result.success, result.error);
  }

  return (
    <section className="container-fluid min-h-screen relative">
      <Head>
        <title>Happy Holidays</title>
        <meta name="description" content="Merry Christmas Robots!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="snow-section" className={styles.formSection}>
          <form className="mx-auto" onSubmit={handleSubmit} >
            <div className="w-full mx-auto text-center py-3">
              <input 
                onChange={handleChange} 
                type="password" 
                id="passwword" 
                name="password" 
                className={styles.winterForm} 
                placeholder="Your Password" 
                required
              />
            </div>
            <div className="w-full mx-auto text-center pb-3">
              <button className={styles.winterBtn}>
                Button
              </button>
            </div>
          </form>
      </div>
      <Snow />
    </section>
  )
}
