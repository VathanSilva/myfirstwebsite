import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import React from "react";
import { Form } from '../components/Form';


export default function Contact() {

  return (
    <div>
      <Head>
        <title>Francis Silva Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/dev.ico" />
      </Head>

      <main className='bg-black'>
        <section className='min-h-screen'>
          <Navbar />
          <div className='text-center'>
            <div className='pt-20'>
              <h2 class="fran" className='text-5xl text-teal-600 font-medium'>Contact</h2>
            </div>
            <div>
			<Form/>
             
				
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  )
}
