"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Home", "Products", "Benefits", "Stacks", "Athletes", "Reviews", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="logo" aria-label="Iron Core Nutrition home">
          <span className="logo-mark">IC</span><span>IRON CORE<small>NUTRITION</small></span>
        </a>
        <nav className="desktop-nav">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
        <a className="nav-cta" href="#products">SHOP NOW <span>↗</span></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-nav" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {links.map((link, i) => <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .05 }} key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}<span>0{i + 1}</span></motion.a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
