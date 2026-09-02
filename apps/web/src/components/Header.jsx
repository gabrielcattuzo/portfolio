import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const links = [['Sobre', '#sobre'], ['Competências', '#habilidades'], ['Projetos', '#projetos'], ['Contato', '#contato']];
const Header = () => {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 24); addEventListener('scroll', onScroll); return () => removeEventListener('scroll', onScroll); }, []);
  return <header className={scrolled ? 'header scrolled' : 'header'}><div className="site-shell nav-wrap"><a className="brand" href="#inicio"><span>GC</span><div>Gabriel Cattuzo<small>software developer</small></div></a><nav>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a className="nav-github" href="https://github.com/gabrielcattuzo" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button></div><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</motion.div>}</AnimatePresence></header>;
};
export default Header;
