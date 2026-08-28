import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = {
  'SIEM & Analytics': ['IBM QRadar', 'Microsoft Sentinel', 'Splunk', 'Incident Response'],
  'Endpoint Security': ['CrowdStrike Falcon', 'SentinelOne', 'Trend Micro HBSS'],
  'Detection Engineering': ['Correlation Rules', 'Alert Tuning', 'KQL', 'SPL', 'AQL', 'Log Parsing'],
  'Vulnerability Management': ['Tenable Nessus', 'Vulnerability Assessment', 'Patch Validation'],
  'Threat Intelligence': ['MITRE ATT&CK', 'MISP', 'Threat Hunting'],
  'Networking & OS': ['TCP/IP', 'DNS', 'DHCP', 'HTTP/HTTPS', 'VPN', 'Firewalls', 'Windows Server', 'Linux'],
  'Cloud & Frameworks': ['Microsoft Azure', 'AWS', 'NIST CSF', 'CIS Controls', 'ISO 27001', 'OWASP Top 10'],
};

const certifications = [
  ['SC-500', 'Microsoft Certified: Cloud and AI Security Engineer Associate', 'Jul 2026'],
  ['SC-300', 'Microsoft Certified: Identity and Access Administrator Associate', 'Jun 2026'],
  ['SC-200', 'Microsoft Certified: Security Operations Analyst Associate', 'Jun 2025'],
  ['SEC+', 'CompTIA Security+', '2023'],
  ['CEH', 'EC-Council Certified Ethical Hacker (CEH v12)', '2023'],
];

const experience = [
  { role: 'Cyber Security Engineer', company: 'Cloud4C Services', location: 'Hyderabad', dates: 'Jul 2024 — Present', points: [
    'Deployed, configured and administered IBM QRadar across 500+ managed client environments.',
    'Administered Tenable Nessus, SentinelOne, CrowdStrike Falcon and Trend Micro HBSS across 10,000+ endpoints.',
    'Onboarded and troubleshot 1,000+ log sources across Windows, Linux, network devices and security appliances.',
    'Developed and tuned 50+ SIEM correlation rules, dashboards and alerts, reducing false positives by 50% across 200+ use cases.',
    'Managed vulnerability lifecycle for 5,000+ assets, reducing average scan-to-remediation time from 30 to 12 days.',
    'Prepared governance reporting supporting 10+ audit and compliance engagements and authored 50+ SOPs/runbooks.'
  ]},
  { role: 'Cyber Security Intern', company: 'Cloud4C Services', location: 'Hyderabad', dates: 'Feb 2024 — May 2024', points: [
    'Participated in end-to-end deployment of MISP, including provisioning, hardening, configuration, testing and production deployment.',
    'Installed and configured MISP on Ubuntu Linux with web server, database, PHP dependencies and application configuration.',
    'Integrated MISP with MITRE ATT&CK, VirusTotal and AlienVault OTX for threat intelligence and IOC enrichment.',
    'Configured roles, organizations, sharing groups, taxonomies and event-sharing policies for structured collaboration.'
  ]}
];

function Matrix() {
  useEffect(() => {
    const canvas = document.querySelector('#matrix'); if (!canvas) return;
    const ctx = canvas.getContext('2d'); let animation; const chars = '01{}[]<>/\\$#@*+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ'; const font = 13;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = canvas.parentElement.offsetHeight; };
    resize(); let columns = Math.ceil(canvas.width / font); let drops = Array(columns).fill(1).map(() => Math.random() * -50);
    const draw = () => { ctx.fillStyle = 'rgba(5,8,11,.09)'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle='rgba(0,245,160,.28)'; ctx.font=`${font}px monospace`; for(let i=0;i<drops.length;i++){ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*font,drops[i]*font);if(drops[i]*font>canvas.height&&Math.random()>.975)drops[i]=0;drops[i]+=.45;} animation=requestAnimationFrame(draw); };
    draw(); window.addEventListener('resize', resize); return () => { cancelAnimationFrame(animation); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas id="matrix" aria-hidden="true" />;
}

function App() {
  const [typed, setTyped] = useState(''); const [dark, setDark] = useState(true); const target='Aditya Kumar — Cyber Security Engineer';
  useEffect(() => { let i=0; const timer=setInterval(()=>{setTyped(target.slice(0,i));i+=1;if(i>target.length)clearInterval(timer)},45);return()=>clearInterval(timer)},[]);
  useEffect(() => { const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);
  return <div className={dark?'app dark':'app light'}>
    <header className="nav"><a className="brand" href="#top"><span className="prompt">./</span>aditya<span className="accent">@sec</span></a><nav>{['about','skills','certifications','experience','contact'].map(x=><a key={x} href={`#${x}`}>{x}</a>)}</nav><button className="theme" onClick={()=>setDark(v=>!v)} aria-label="Toggle theme">{dark?'☼':'☾'}</button></header>
    <main id="top">
      <section className="hero"><Matrix/><div className="hero-content"><div className="terminal-line"><span className="accent">&gt;</span> whoami</div><h1>{typed}<span className="cursor">_</span></h1><p>Enterprise security platform engineering, SIEM administration, vulnerability management and endpoint security.</p><div className="hero-meta"><span>HYDERABAD, INDIA</span><span>•</span><span>2+ YEARS</span></div><div className="actions"><a className="btn primary" href="#contact">Initialize Contact</a><a className="btn" href="/adityaportfolio/resume.pdf" download>Download CV</a><a className="btn" href="https://github.com/AdityaK2608" target="_blank" rel="noreferrer">GitHub ↗</a></div></div><div className="scroll-hint">scroll_to_explore ↓</div></section>
      <section id="about" className="section reveal"><div className="section-label">01 / about</div><div className="about-grid"><div><h2>Security, systems,<br/><span className="accent">and visibility.</span></h2></div><p>Cyber Security Engineer with 2+ years of experience in enterprise security platform engineering, specializing in SIEM administration, vulnerability management and endpoint security. Hands-on experience spans IBM QRadar across 500+ MSSP client environments, plus Tenable Nessus, CrowdStrike Falcon, SentinelOne and Trend Micro HBSS.</p></div></section>
      <section id="skills" className="section reveal"><div className="section-label">02 / capabilities</div><h2>Security stack<span className="accent">_</span></h2><div className="skill-grid">{Object.entries(skills).map(([group,items])=><article className="skill-card" key={group}><div className="scan"><span>{group}</span><span className="scan-bar"/></div><div className="tags">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></section>
      <section id="certifications" className="section reveal"><div className="section-label">03 / credentials</div><h2>Certifications<span className="accent">_</span></h2><div className="cert-list">{certifications.map(([code,name,date])=><article className="cert" key={code}><div className="cert-code">{code}</div><div><strong>{name}</strong><small>Issued {date}</small></div><span className="verified">CERT</span></article>)}</div></section>
      <section id="experience" className="section reveal"><div className="section-label">04 / experience</div><h2>Operational history<span className="accent">_</span></h2><div className="timeline">{experience.map((job,idx)=><article className="job" key={job.role}><div className="job-marker">0{idx+1}</div><div className="job-main"><div className="job-head"><div><h3>{job.role}</h3><p>{job.company} · {job.location}</p></div><time>{job.dates}</time></div><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
      <section id="contact" className="section contact reveal"><div className="section-label">05 / contact</div><h2>Open a secure channel<span className="accent">_</span></h2><div className="contact-box"><div><div className="terminal-line"><span className="accent">&gt;</span> ./connect --with Aditya</div><p>For cybersecurity opportunities, security engineering conversations or professional collaboration.</p></div><div className="contact-links"><a href="mailto:singhaditya2608@gmail.com">singhaditya2608@gmail.com</a><a href="https://linkedin.com/in/adityak2608" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/AdityaK2608" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Aditya Kumar</span><span>built with React + Vite</span><span className="accent">security engineer</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
