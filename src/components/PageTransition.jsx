import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const PageTransition = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      // Check if it's a relative internal link
      if (href && href.startsWith("/") && anchor.target !== "_blank") {
        e.preventDefault();
        e.stopPropagation();
        
        if (isAnimating.current) return;
        isAnimating.current = true;

        const panels = containerRef.current.children;
        
        // Start from right, completely hidden
        gsap.set(panels, { scaleX: 0, transformOrigin: "right" });
        
        // Animate IN: Right to Left sweeping
        gsap.to(panels, {
          scaleX: 1,
          stagger: 0.08,
          ease: "expo.inOut",
          duration: 0.8,
          onComplete: () => {
            // Change the screen once fully covered
            navigate(href);
            window.scrollTo(0, 0);
            
            // Animate OUT: Continue moving left (origin becomes left)
            gsap.set(panels, { transformOrigin: "left" });
            gsap.to(panels, {
              scaleX: 0,
              stagger: 0.08,
              ease: "expo.inOut",
              duration: 0.8,
              delay: 0.1,
              onComplete: () => {
                isAnimating.current = false;
              }
            });
          }
        });
      }
    };

    // Use capture phase to intercept before React Router does
    document.addEventListener("click", handleLinkClick, true);
    return () => document.removeEventListener("click", handleLinkClick, true);
  }, [navigate]);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div className="transition-panel" style={{ flex: 1, background: "#111111", transform: "scaleX(0)" }} />
      <div className="transition-panel" style={{ flex: 1, background: "#1a1a1a", transform: "scaleX(0)" }} />
      <div className="transition-panel" style={{ flex: 1, background: "#F05A28", transform: "scaleX(0)" }} />
      <div className="transition-panel" style={{ flex: 1, background: "#050505", transform: "scaleX(0)" }} />
    </div>
  );
};

export default PageTransition;
