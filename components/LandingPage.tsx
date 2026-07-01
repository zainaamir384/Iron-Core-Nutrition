"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, ChevronDown, Clock3, Dna, Droplets, Flame, Leaf, ShieldCheck, Sparkles, Star, Target, TrendingUp, Zap } from "lucide-react";
import { Navbar } from "./Navbar";
import { ActionButton, Reveal, SectionHeading } from "./ui";
import { products, reviews, stacks } from "@/data/site";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const productY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 55]);

  return (
    <section ref={ref} id="home" className="hero noise">
      <div className="hero-grid" />
      <div className="orb orb-red" /><div className="orb orb-blue" />
      <div className="hero-content">
        <motion.div style={{ y: textY }} className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }} className="eyebrow"><span />Performance Fuel For Serious Training</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25, ease: [0.22, 1, 0.36, 1] }}>
            BUILD <em>STRENGTH.</em><br />RECOVER <i>FASTER.</i><br />PERFORM BETTER.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }}>
            Premium formulas engineered for muscle growth, relentless endurance, and the recovery that brings you back stronger.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }} className="button-row">
            <ActionButton>Shop Supplements</ActionButton><ActionButton variant="secondary" href="#stacks">View Stack</ActionButton>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85 }} className="proof-row">
            <div><strong>4.9</strong><span>★★★★★<small>2,400+ reviews</small></span></div>
            <div><strong>30</strong><span>DAY<small>performance promise</small></span></div>
            <div><strong>0</strong><span>FILLERS<small>clean, tested formulas</small></span></div>
          </motion.div>
        </motion.div>
        <motion.div style={{ y: productY }} className="hero-visual">
          <motion.div initial={{ opacity: 0, scale: .92, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.1, delay: .25, ease: [0.22, 1, 0.36, 1] }} className="product-halo">
            <Image src="/images/supplement-lineup.png" fill priority sizes="(max-width: 900px) 100vw, 58vw" alt="Iron Core black supplement product lineup" />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="formula-tag tag-one"><Zap size={16} /> <span>LAB TESTED<small>FORMULAS</small></span></motion.div>
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut" }} className="formula-tag tag-two"><Target size={16} /> <span>BUILT FOR<small>PERFORMANCE</small></span></motion.div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#products"><span>SCROLL TO EXPLORE</span><ChevronDown size={16} /></a>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="heading-row">
          <SectionHeading eyebrow="The Essentials" title="TOP PERFORMANCE ESSENTIALS" />
          <Reveal><p className="side-copy">Built for specific outcomes. Formulated without the noise.</p></Reveal>
        </div>
        <div className="product-grid">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * .1} className="product-card-wrap">
              <motion.article whileHover="hover" className="product-card">
                <span className="product-number">0{i + 1}</span><span className="product-chip">BEST SELLER</span>
                <div className="product-crop"><motion.div variants={{ hover: { scale: 1.08, y: -6 } }} transition={{ duration: .35 }} className="crop-image" style={{ backgroundPosition: `${product.position} center` }} /></div>
                <div className="product-info"><p>{product.benefit}</p><h3>{product.name}</h3><div><strong>{product.price}</strong><button aria-label={`View ${product.name}`}><ArrowRight size={18} /></button></div></div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: TrendingUp, title: "Muscle Growth", copy: "Complete amino profiles and fast-absorbing protein built to support real adaptation.", meta: "25G PROTEIN" },
  { icon: Clock3, title: "Faster Recovery", copy: "Reload, repair, and reduce the time between hard sessions without cutting corners.", meta: "24/7 SUPPORT" },
  { icon: Leaf, title: "Clean Ingredients", copy: "Transparent labels. Clinically useful doses. Absolutely no proprietary fog.", meta: "ZERO FILLERS" },
  { icon: Flame, title: "Strength + Endurance", copy: "More output when the set gets heavy and the session gets long.", meta: "MAX OUTPUT" },
];

function Benefits() {
  return (
    <section id="benefits" className="section benefits-section noise">
      <div className="container benefit-layout">
        <div className="benefit-intro"><SectionHeading eyebrow="The Iron Core Standard" title="WHY ATHLETES CHOOSE IRON CORE" copy="Every formula starts with the work. No hype-first ingredients—only deliberate doses designed around how serious people train." /><Reveal><div className="number-callout"><strong>04</strong><span>NON-NEGOTIABLE<br />PERFORMANCE STANDARDS</span></div></Reveal></div>
        <div className="benefit-list">
          {benefits.map((item, i) => { const Icon = item.icon; return (
            <Reveal key={item.title} delay={i * .08}>
              <article className="benefit-row"><div className="benefit-index">0{i + 1}</div><div className="benefit-icon"><Icon /></div><div><span>{item.meta}</span><h3>{item.title}</h3><p>{item.copy}</p></div><ArrowRight className="benefit-arrow" /></article>
            </Reveal>
          ); })}
        </div>
      </div>
    </section>
  );
}

function Spotlight() {
  const features = ["25g protein per serving", "Fast absorption", "Low sugar", "Great taste", "Built for serious training"];
  return (
    <section className="section spotlight-section">
      <div className="container spotlight">
        <Reveal className="spotlight-visual"><div className="spotlight-lines" /><div className="spotlight-image" /><span className="vertical-copy">FLAGSHIP FORMULA • 01</span><div className="macro"><strong>25G</strong><span>ULTRA-PURE<br />PROTEIN</span></div></Reveal>
        <div className="spotlight-copy"><SectionHeading eyebrow="Flagship Formula" title="ULTRA WHEY ISOLATE" copy="The daily standard for athletes who refuse to leave recovery to chance. Ultra-filtered whey isolate delivers clean, rapid protein with a finish you will actually look forward to." />
          <Reveal delay={.15}><div className="flavor-selector"><span>FLAVOR</span><button className="active">Dark Cocoa</button><button>Vanilla Salt</button></div><div className="feature-list">{features.map((f) => <div key={f}><Check size={16} />{f}</div>)}</div><div className="buy-row"><ActionButton>Buy Now — $54</ActionButton><span>30 servings<br /><small>Ships in 24 hours</small></span></div></Reveal>
        </div>
      </div>
    </section>
  );
}

function Stacks() {
  return (
    <section id="stacks" className="section stacks-section noise"><div className="container"><SectionHeading eyebrow="Better Together" title="BUILD YOUR PERFORMANCE STACK" copy="Three proven systems. One clear objective: make every session count." align="center" />
      <div className="stack-grid">{stacks.map((stack, i) => (
        <Reveal key={stack.name} delay={i * .12}><motion.article whileHover={{ y: -8 }} className={`stack-card ${stack.accent}`}><div className="stack-top"><span>{stack.id}</span><strong>{stack.best}</strong></div><div className="mini-products"><div /><div /><div /></div><h3>{stack.name}<br />Stack</h3><p>{stack.items.join("  +  ")}</p><button>Choose Stack <ArrowRight size={18} /></button></motion.article></Reveal>
      ))}</div></div></section>
  );
}

function TrainingFuel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  return (
    <section ref={ref} className="training-section"><div className="training-copy"><Reveal><div className="eyebrow"><span />Made For The Work</div><h2>FUEL EVERY REP.<br /><em>POWER EVERY SESSION.</em></h2><p>Progress is rarely dramatic. It is the next rep, the extra hour of sleep, the meal you prepared, and the decision to show up again. We built Iron Core for that quiet, relentless discipline.</p><div className="training-stats"><div><strong>07</strong><span>DAYS/WEEK<br />COMMITMENT</span></div><div><strong>100%</strong><span>BUILT FOR<br />THE WORK</span></div></div></Reveal></div><div className="training-visual"><motion.div style={{ y }} className="training-image" /><div className="training-scan" /></div></section>
  );
}

const athletes = [
  { name: "Luca Hayes", role: "PRO BODYBUILDER", quote: "The formula matters when every variable matters.", pos: "left" },
  { name: "Maya Chen", role: "STRENGTH COACH", quote: "No magic. Just better support for better work.", pos: "center" },
  { name: "Andre Cole", role: "FITNESS ATHLETE", quote: "Recovery is training. I treat it that way.", pos: "right" },
];

function Athletes() {
  return (
    <section id="athletes" className="section athletes-section"><div className="container"><div className="heading-row"><SectionHeading eyebrow="Iron Core Collective" title="TRUSTED BY REAL ATHLETES" /><Reveal><p className="side-copy">Different disciplines. Same standard.</p></Reveal></div><div className="athlete-grid">{athletes.map((a, i) => <Reveal key={a.name} delay={i * .1}><article className="athlete-card"><div className="athlete-image" style={{ backgroundPosition: a.pos }}><span>0{i + 1}</span></div><div className="athlete-copy"><p>“{a.quote}”</p><div><h3>{a.name}</h3><span>{a.role}</span></div></div></article></Reveal>)}</div></div></section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="section reviews-section noise"><div className="container"><SectionHeading eyebrow="Verified Performance" title="WHAT CUSTOMERS SAY" align="center" /><div className="review-grid">{reviews.map((r, i) => <Reveal key={r.name} delay={i * .1}><article className="review-card"><div className="stars">{[1,2,3,4,5].map(s => <Star key={s} size={15} fill="currentColor" />)}</div><blockquote>“{r.text}”</blockquote><div className="review-footer"><div className="avatar">{r.name[0]}</div><div><strong>{r.name}</strong><span>Verified buyer</span></div><small>{r.product}</small></div></article></Reveal>)}</div></div></section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="final-cta noise"><div className="cta-orb red" /><div className="cta-orb blue" /><Reveal className="cta-content"><div className="eyebrow"><span />Your Next Rep Starts Here</div><h2>READY TO UPGRADE<br />YOUR <em>PERFORMANCE?</em></h2><p>Train harder, recover smarter, and unlock better results with premium supplements built for serious athletes.</p><div className="button-row centered"><ActionButton>Shop Now</ActionButton><ActionButton variant="secondary">Explore Products</ActionButton></div></Reveal></section>
  );
}

function Footer() {
  return (
    <footer><div className="footer-main"><div className="footer-brand"><a href="#home" className="logo"><span className="logo-mark">IC</span><span>IRON CORE<small>NUTRITION</small></span></a><p>Performance nutrition for people who put in the work.</p><div className="socials"><a href="#">IG</a><a href="#">YT</a><a href="#">TK</a></div></div><div className="footer-links"><div><strong>EXPLORE</strong><a href="#products">Products</a><a href="#stacks">Stacks</a><a href="#athletes">Athletes</a></div><div><strong>SUPPORT</strong><a href="#">FAQ</a><a href="#">Shipping</a><a href="#">Returns</a></div><div><strong>CONTACT</strong><a href="mailto:train@ironcore.com">train@ironcore.com</a><span>Mon–Fri / 9–5 EST</span></div></div></div><div className="footer-bottom"><span>© 2026 IRON CORE NUTRITION</span><span>FORMULATED FOR THE RELENTLESS.</span><div><a href="#">PRIVACY</a><a href="#">TERMS</a></div></div></footer>
  );
}

export function LandingPage() {
  return <main><Navbar /><Hero /><Products /><Benefits /><Spotlight /><Stacks /><TrainingFuel /><Athletes /><Reviews /><FinalCTA /><Footer /></main>;
}
