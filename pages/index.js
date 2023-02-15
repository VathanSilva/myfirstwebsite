import Head from 'next/head'
import {AiFillYoutube, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev.png";
import React from "react";
import Typewriter from 'typewriter-effect';
import { Skills } from '../components/Skills';
import { Softwares } from '../components/Softwares';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Home() {

  const UnoptimizedImage = (props) => {
    return <Image {...props} unoptimized />
  };


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

          
          <div className='relative justify-center top-16 mx-auto bg-gradien-to-b m-auto from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
          <div className='text-center'>
            <div className='pt-20'>
              <h2 class="fran" className='text-5xl text-teal-600 font-medium'>Francis Silva</h2>
            </div>
            <div class="type" className='text-2xl py-2'>
              <Typewriter
                options={{
                  strings: ["I'm a Developer.", "I'm a Designer.", "I'm a Video Editor."],
                  autoStart: true,
                  loop: true,
                  pauseFor: ['5000']
                }}
              />
            </div>
            <p className='text-md leading-8 text-white text-2xl'>
            B.Sc. (General) - Electronics & Embedded Systems (R)
            </p>
            <p className='text-md m-auto mx-5 leading-8 text-white'>I’m an enthusiastic individual presently seeking for the role of intern or an associate in the IT and Electronics sector. 
              My primary interest lies in graphic design and project management. Being a selfmotivated, fast learner, I can multitask 
              and handle responsibilities from different job roles elegantly. I also consider myself a person with strong communication 
              skills both orally and in written forms. Thus, I actively engage in teamwork and am willing to contribute my best in any 
              tasks assigned for me.
            </p>
          </div>
          <div className='text-5xl mt-5 flex justify-center gap-16'>
            <a href="https://www.linkedin.com/in/vathan-silva/"><AiFillLinkedin color="#0a66c2"/></a>
            <a href="https://www.youtube.com/channel/UCzWYas0cWXTT1YFgZQhLUyQ"><AiFillYoutube color="#ff0000"/></a>
            <a href="https://github.com/VathanSilva"><AiFillGithub color="#ffffff"/></a>
          </div>
        
          <br/>
        
          <div>
            <div className='mt-4'>
              <Skills/>
            </div>
            <div className='mt-5'>
              <Softwares/>
            </div>
          </div>
        
        </section>
        <Footer />
      </main>
    </div>
  )
}
