import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
      }
    });

    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      
      // 1. Setup - Transparent but with stroke ready
      gsap.set(path, { 
        strokeDasharray: length, 
        strokeDashoffset: length,
        stroke: "#FF5733", // Start with Orange line
        opacity: 1 
      });

      // 2. Line Drawing Phase
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut"
      })
      
      // 3. Transformation to Logo Color (No Fill)
      .to(path, {
        stroke: "#FFFFFF", // Turn White at the end
        strokeWidth: 14,   // Slightly thicker for the final logo look
        duration: 0.8,
        ease: "power2.out"
      })
      
      // 4. Final Scale & Burst
      .to(containerRef.current, {
        scale: 1.1,
        filter: 'drop-shadow(0 0 30px rgba(255, 87, 51, 0.6))',
        duration: 0.6,
        ease: "back.out(2)"
      })
      
      // 5. Exit
      .to(containerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      })
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut"
      }, "-=0.2");
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  const logoPath = "M333.817352,231.000122 C333.817383,361.136169 333.817383,490.772217 333.817383,620.817749 C355.598145,620.817749 376.967529,620.817749 398.984558,620.817749 C398.984558,505.550446 398.984558,390.503601 398.984558,275.124512 C405.895416,275.124512 412.169067,275.124512 419.143005,275.124512 C419.143005,390.209412 419.143005,505.413177 419.143005,620.943848 C512.614319,620.943848 605.391418,620.943848 698.685730,620.943848 C698.685730,682.650574 698.685730,744.031006 698.685730,805.765503 C599.085938,805.765503 499.345398,805.765503 398.987671,805.765503 C398.987671,751.158447 398.987671,696.448792 398.987671,641.277954 C370.126801,641.277954 341.877167,641.277954 313.367310,641.277954 C313.367310,478.898895 313.367310,316.985657 313.367310,154.663254 C380.799896,154.663254 448.191345,154.663254 516.008362,154.663254 C516.008362,284.633575 516.008362,414.537018 516.008362,544.777954 C509.601379,544.777954 503.171021,544.777954 496.277649,544.777954 C496.277649,421.793884 496.277649,298.719421 496.277649,175.052475 C442.105042,175.052475 388.384705,175.052475 333.817322,175.052475 C333.817322,193.351913 333.817322,211.926010 333.817352,231.000122 z";

  return (
    <div 
      ref={preloaderRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        zIndex: 9999999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div 
        ref={containerRef}
        style={{
          width: '240px',
          height: '240px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg 
          viewBox="0 0 984 974" 
          style={{ width: '100%', height: '100%' }}
        >
          <path 
            ref={pathRef}
            fill="none"
            stroke="#FF5733"
            strokeWidth="12"
            strokeLinecap="round"
            d={logoPath}
          />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
