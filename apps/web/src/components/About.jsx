import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Terminal } from 'lucide-react';

const About = () => (
  <section id="sobre" className="section section-light"><div className="site-shell about-grid">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="section-index">01 / SOBRE</p><h2>Entre a lógica de baixo nível e a experiência na tela.</h2></motion.div>
    <motion.div className="about-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .12 }}>
      <p>Comecei a desenvolver em 2023 e, em 2024, iniciei Engenharia de Computação na PUC-Campinas. Desde então, venho conectando fundamentos de hardware, redes e arquitetura de computadores ao desenvolvimento de aplicações.</p>
      <p>Gosto de projetos que exigem raciocínio técnico e atenção à experiência de quem usa — de Assembly x86 e C a interfaces modernas com React.</p>
      <div className="fact-grid"><div><GraduationCap /><span><strong>Engenharia de Computação</strong>PUC-Campinas</span></div><div><MapPin /><span><strong>Campinas, SP</strong>Brasil</span></div><div><Terminal /><span><strong>Full-stack</strong>Web e sistemas</span></div></div>
    </motion.div>
  </div></section>
);
export default About;
