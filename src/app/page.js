'use client'

import Image from 'next/image';
import Header from './components/header';
import 'animate.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Detach the scroll event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className="">
      <Header />
      <section className='text-center pt-20 first-section mt-10 container mx-auto'>
        <h1 className="text-5xl text-center font-black pt-24 mb-10">Welcome to FriendManager</h1>
        <h1 className="text-xl text-center mb-5">Turn keys into conversations instantly</h1>
        <button className="btn btn-rounded text-white launch-btn">LAUNCH APP</button>
      </section>
      <section className='text-center py-100 second-section container mx-auto py-24'>
        <Image src="/assets/mobile-chat.png" alt="phone" width="500" height="500" className='mx-auto' priority={false} />
      </section>
      <section className='text-center my-10 feature-section '>
        <div className='container mx-auto py-10'>
          <h1 className="text-5xl text-center font-black my-24">Features</h1>
          <div className='container mx-auto sm:px-48 px-10 '>
            <div className={`flex flex-col sm:flex-row items-center justify-around my-28 animate__animated ${scrollY > 300 ? 'animate__backInRight animate__delay-0.5s' : ''}`} >
              <div className='sm:w-1/2 w-full'><Image src="/assets/3.jpg" alt="phone1" width="400" height="400" className='mx-auto my-5' /></div>
              <div className='sm:w-1/2 w-full'>
                <h2 className='text-center sm:text-left text-2xl font-bold mb-5'>Real-Time Group Management</h2>
                <p className='text-center sm:text-left'>The moment a key is bought, the holder is added. Sell a key? They are instantly removed. FriendManager ensures your Telegram group remains exclusive and up-to-date, all in real-time.</p>
              </div>
            </div>
            <div className={`flex flex-col sm:flex-row-reverse items-center justify-around my-28 animate__animated ${scrollY > 800 ? 'animate__backInLeft animate__delay-1s' : ''}`}>
              <div className='sm:w-1/2 w-full'><Image src="/assets/4.jpg" alt="phone1" width="400" height="400" className='mx-auto my-5' /></div>
              <div className='sm:w-1/2 w-full'>
                <h2 className='text-center sm:text-left text-2xl font-bold mb-5'>One Unified Group Chat</h2>
                <p className='text-center sm:text-left'>With FriendManager, all your key holders come together in one place, fostering a dynamic community.</p>
              </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center justify-around my-28 animate__animated ${scrollY > 1300 ? 'animate__backInRight animate__delay-1s' : ''}`}>
              <div className='sm:w-1/2 w-full'><Image src="/assets/5.jpg" alt="phone1" width="400" height="400" className='mx-auto my-5' /></div>
              <div className='sm:w-1/2 w-full'>
                <h2 className='text-center sm:text-left text-2xl font-bold mb-5'>Automated Admin Powers</h2>
                <p className='text-center sm:text-left'>FriendManager bot takes over the administrative duties, allowing you to focus solely on engaging with your community without the management headaches.</p>
              </div>
            </div>
            <div className={`flex flex-col sm:flex-row-reverse items-center justify-around my-28 animate__animated ${scrollY > 1800 ? 'animate__backInLeft animate__delay-1s' : ''}`}>
              <div className='sm:w-1/2 w-full'><Image src="/assets/6.jpg" alt="phone1" width="400" height="400" className='mx-auto my-5' /></div>
              <div className='sm:w-1/2 w-full'>
                <h2 className='text-center sm:text-left text-2xl font-bold mb-5'>Enhanced Engagement</h2>
                <p className='text-center sm:text-left'>With instantaneous access adjustments, ensure that your friends never miss a moment and that only current keyholders remain in the chat.</p>
              </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center justify-around my-28 animate__animated ${scrollY > 2300 ? 'animate__backInRight animate__delay-1s' : ''}`}>
              <div className='sm:w-1/2 w-full'><Image src="/assets/7.jpg" alt="phone1" width="400" height="400" className='mx-auto my-5' /></div>
              <div className='sm:w-1/2 w-full'>
                <h2 className='text-center sm:text-left text-2xl font-bold mb-5'>Secure and Efficient</h2>
                <p className='text-center sm:text-left'>Built with the best security protocols, ensuring your group remains protected, while also offering a smooth user experience for both influencers and friends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto'>
          <div className='flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between pb-10'>
            <div className=''>
              COPYRIGHT © 2023
            </div>
            <div className='flex '>
              <a className="navbar-item" href='https://x.com/friendsmanager1?s=21' target='_blank'><span className="hidden sm:block">Twitter</span><Image src="/assets/twitter.svg" alt="Logo" width="25" height="25" className="sm:hidden block" /></a>
              <a className="navbar-item" href='https://t.me/friendmanager1'><span className="hidden sm:block">Telegram</span><Image src="/assets/telegram.svg" alt="Logo" width="25" height="25" className="sm:hidden block" /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
