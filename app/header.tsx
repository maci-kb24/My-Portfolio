'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { SlidingNumber } from '@/components/motion-primitives/sliding-number'
import { useEffect, useState } from 'react'

export function Clock() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center gap-0.5 font-mono text-sm text-zinc-600 dark:text-zinc-500'>
      <SlidingNumber value={hours} padStart={true} />
      <span className='text-zinc-500'>:</span>
      <SlidingNumber value={minutes} padStart={true} />
      <span className='text-zinc-500'>:</span>
      <SlidingNumber value={seconds} padStart={true} />
      <span className='text-zinc-500'>|</span>
      <span className='text-zinc-500'>UTC+1</span>
      <span className='text-zinc-500'>|</span>
      <span className='text-zinc-500'>CET</span>
    </div>
  );
}

export function Header() {
  return (
    <header className="mb-8">
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-zinc-600 dark:text-zinc-500 text-sm'>Skopje,Macedonia</p>
        </div>
        <Clock />
      </div>
      <div className='pt-16'>
        <Link href="/" className="font-medium text-black dark:text-white">
          Marjan Stojanovski
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Front End Developer
        </TextEffect>
      </div>
    </header>
  )
}
