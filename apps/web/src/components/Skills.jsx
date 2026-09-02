import { motion } from 'framer-motion';
import { Braces, Cpu, Database, Network } from 'lucide-react';
const areas = [
  { icon: Braces, title: 'Desenvolvimento web', text: 'Interfaces responsivas e aplicações completas.', tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js'] },
  { icon: Cpu, title: 'Sistemas e baixo nível', text: 'Software próximo ao hardware e seus fundamentos.', tags: ['C', 'C++', 'Assembly x86', 'VHDL'] },
  { icon: Database, title: 'Back-end e dados', text: 'APIs, regras de negócio e persistência.', tags: ['Python', 'Java', 'SQL', 'Firebase'] },
  { icon: Network, title: 'Infraestrutura', text: 'Base acadêmica em redes, Linux e arquitetura.', tags: ['Git', 'Linux', 'Redes', 'Sockets'] },
];
const Skills = () => <section id="habilidades" className="section section-dark"><div className="site-shell"><div className="section-heading"><div><p className="section-index">02 / COMPETÊNCIAS</p><h2>Ferramentas são meios.<br />Resolver é o objetivo.</h2></div><p>Uma base que atravessa diferentes camadas do software, da interface ao hardware.</p></div><div className="skills-grid">{areas.map((area, index) => <motion.article key={area.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><area.icon /><span className="card-number">0{index + 1}</span><h3>{area.title}</h3><p>{area.text}</p><div>{area.tags.map(tag => <span key={tag}>{tag}</span>)}</div></motion.article>)}</div></div></section>;
export default Skills;
