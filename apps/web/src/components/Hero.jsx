import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';

const techLines = [['01', 'Python', 'automação · sistemas · APIs'], ['02', 'C / Assembly', 'baixo nível · arquitetura'], ['03', 'React / Node', 'interfaces · aplicações web']];

const Hero = () => (
  <section id="inicio" className="hero-section">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <div className="site-shell hero-grid">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <span className="eyebrow"><span className="status-dot" /> Disponível para novos projetos</span>
        <h1>Engenharia,<br /><span>código e produto.</span></h1>
        <p className="hero-lead">Sou Gabriel Cattuzo, estudante de Engenharia de Computação e desenvolvedor full-stack em Campinas. Transformo ideias em software claro, funcional e bem construído.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projetos">Explorar projetos <ArrowDownRight size={18} /></a><a className="button button-ghost" href="mailto:gabriel@cattuzo.com">Falar comigo <Mail size={18} /></a></div>
        <div className="social-row"><a href="https://github.com/gabrielcattuzo" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/gabrielcattuzo/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div>
      </motion.div>
      <motion.div className="code-panel" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }}>
        <div className="panel-top"><div><i /><i /><i /></div><span>gabriel.profile</span><span>UTF-8</span></div>
        <div className="panel-body"><p><b>const</b> developer = {'{'}</p><p className="indent">name: <em>'Gabriel Cattuzo'</em>,</p><p className="indent">focus: [<em>'web'</em>, <em>'systems'</em>, <em>'low-level'</em>],</p><p className="indent">learning: <em>'always'</em>,</p><p>{'}'};</p></div>
        <div className="tech-list">{techLines.map(([number, title, desc]) => <div key={number}><span>{number}</span><strong>{title}</strong><small>{desc}</small></div>)}</div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#sobre"><span>role para descobrir</span><ArrowDownRight size={17} /></a>
  </section>
);
export default Hero;
