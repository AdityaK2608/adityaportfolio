import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const toolStream = [
  ['QRADAR', 'SIEM', 'correlation-engine', 'ONLINE'],
  ['NESSUS', 'VULN', 'asset-scanner', 'SCANNING'],
  ['CROWDSTRIKE', 'EDR', 'endpoint-telemetry', 'ONLINE'],
  ['SENTINELONE', 'EDR', 'threat-response', 'ONLINE'],
  ['MISP', 'CTI', 'ioc-enrichment', 'SYNCING'],
  ['MITRE ATT&CK', 'THREAT', 'technique-mapping', 'READY'],
  ['AZURE', 'CLOUD', 'identity-security', 'ONLINE'],
  ['LINUX', 'OS', 'security-operations', 'ONLINE'],
];

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
  { role: 'Cyber Security Engineer', company: 'Cloud4C Services', location: 'Hyderabad', dates: 'Jul 2024 — Present', points: ['Deployed, configured and administered IBM QRadar across 500+ managed client environments.','Administered Tenable Nessus, SentinelOne, CrowdStrike Falcon and Trend Micro HBSS across 10,000+ endpoints.','Onboarded and troubleshot 1,000+ log sources across Windows, Linux, network devices and security appliances.','Developed and tuned 50+ SIEM correlation rules, dashboards and alerts, reducing false positives by 50% across 200+ use cases.','Managed vulnerability lifecycle for 5,000+ assets, reducing average scan-to-remediation time from 30 to 12 days.','Prepared governance reporting supporting 10+ audit and compliance engagements and authored 50+ SOPs/runbooks.'] },
  { role: 'Cyber Security Intern', company: 'Cloud4C Services', location: 'Hyderabad', dates: 'Feb 2024 — May 2024', points: ['Participated in end-to-end deployment of MISP, including provisioning, hardening, configuration, testing and production deployment.','Installed and configured MISP on Ubuntu Linux with web server, database, PHP dependencies and application configuration.','Integrated MISP with MITRE ATT&CK, VirusTotal and AlienVault OTX for threat intelligence and IOC enrichment.','Configured roles, organizations, sharing groups, taxonomies and event-sharing policies for structured collaboration.'] }
];

function Matrix() {
  useEffect(() => {
    const canvas = document.querySelector('#matrix'); if (!canvas) return;
    const ctx = canvas.getContext('2d'); let raf; const chars='01{}[]<>/\\$#@*+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const resize=()=>{canvas.width=window.innerWidth;canvas.height=canvas.parentElement.offsetHeight}; resize();
    let columns=Math.ceil(canvas.width/14), drops=Array(columns).fill(0).map(()=>Math.random()*-60);
    const draw=()=>{ctx.fillStyle='rgba(3,7,9,.075)';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(0,245,160,.24)';ctx.font='13px monospace';drops.forEach((y,i)=>{ctx.fillText(chars[(Math.random()*chars.length)|0],i*14,y*14);if(y*14>canvas.height&&Math.random()>.975)drops[i]=0;drops[i]+=.5});raf=requestAnimationFrame(draw)}; draw();
    window.addEventListener('resize',resize); return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize)};
  },[]); return <canvas id="matrix" aria-hidden="true"/>;
}

function LiveTerminal() {
  const [lines,setLines]=useState([]); const [cmd,setCmd]=useState('');
  const source=useMemo(()=>['[OK] QRADAR correlation engine loaded','[OK] NESSUS asset inventory synchronized','[OK] CROWDSTRIKE endpoint telemetry active','[OK] SENTINELONE response channel ready','[OK] MISP threat-intel feeds synchronized','[OK] MITRE ATT&CK technique map loaded','[OK] Azure identity telemetry connected','[OK] security monitoring initialized'],[]);
  useEffect(()=>{let i=0;const id=setInterval(()=>{setLines(v=>[...v.slice(-5),source[i%source.length]]);i++},950);return()=>clearInterval(id)},[source]);
  const submit=e=>{e.preventDefault();const q=cmd.trim().toLowerCase();let out=q==='help'?'commands: about | skills | tools | contact | clear':q==='tools'?'tools: QRADAR NESSUS CROWDSTRIKE SENTINELONE MISP MITRE ATT&CK AZURE LINUX':q==='skills'?'security domains: SIEM / EDR / CTI / VULN / CLOUD / NETWORKING':q==='contact'?'secure channel: singhaditya2608@gmail.com':q==='about'?'Aditya Kumar — Cyber Security Engineer':q==='clear'?null:`command not found: ${q}`;if(q==='clear'){setLines([])}else setLines(v=>[...v.slice(-4),`> ${cmd}`,`  ${out}`]);setCmd('')};
  return <div className="terminal"><div className="terminal-head"><span><i/>LIVE SECURITY TERMINAL</span><span>PID 2608 · STREAMING</span></div><div className="terminal-body">{lines.map((x,i)=><div key={i} className={x.startsWith('>')?'cmd':''}>{x}</div>)}<form onSubmit={submit}><span className="prompt">sec@aditya:~$</span><input aria-label="Terminal command" value={cmd} onChange={e=>setCmd(e.target.value)} autoComplete="off" spellCheck="false"/></form></div></div>;
}

function Radar(){return <div className="radar" aria-label="Security monitoring visualization"><div className="radar-sweep"/><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><b className="blip b1"/><b className="blip b2"/><b className="blip b3"/><span className="radar-label">SOC / LIVE</span></div>}

function App(){
  const [typed,setTyped]=useState(''); const [dark,setDark]=useState(true); const target='Aditya Kumar — Cyber Security Engineer';
  useEffect(()=>{let i=0;const t=setInterval(()=>{setTyped(target.slice(0,i));i++;if(i>target.length)clearInterval(t)},42);return()=>clearInterval(t)},[]);
  useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>o.observe(x));return()=>o.disconnect()},[]);
  return <div className={dark?'app dark':'app light'}>
    <header className="nav"><a className="brand" href="#top"><span className="prompt">./</span>aditya<span className="accent">@sec</span></a><nav>{['about','skills','certifications','experience','contact'].map(x=><a key={x} href={`#${x}`}>{x}</a>)}</nav><button className="theme" onClick={()=>setDark(v=>!v)}>{dark?'LIGHT_MODE':'DARK_MODE'}</button></header>
    <main id="top">
      <section className="hero"><Matrix/><div className="scanlines"/><div className="hud-corners"/><div className="hero-content">
        <div className="status-row"><span className="live-dot"/> SYSTEM OPERATIONAL <span className="sep">//</span> SECURITY PROFILE <span className="accent">ACTIVE</span></div>
        <div className="hero-layout"><div className="hero-copy"><div className="terminal-line"><span className="accent">&gt;</span> whoami</div><h1>{typed}<span className="cursor">_</span></h1><p>Enterprise security platform engineering, SIEM administration, vulnerability management and endpoint security.</p><div className="hero-meta"><span>HYDERABAD, INDIA</span><span>•</span><span>2+ YEARS</span><span>•</span><span>BLUE TEAM</span></div><div className="actions"><a className="btn primary" href="#contact">Initialize Contact</a><a className="btn" href="/adityaportfolio/resume.pdf" download>Download CV</a><a className="btn" href="https://github.com/AdityaK2608" target="_blank" rel="noreferrer">GitHub ↗</a></div></div><div className="hero-side"><Radar/><div className="metric-grid"><div><strong>500+</strong><small>CLIENT ENV</small></div><div><strong>10K+</strong><small>ENDPOINTS</small></div><div><strong>1K+</strong><small>LOG SOURCES</small></div><div><strong>50+</strong><small>SIEM RULES</small></div></div></div></div>
        <div className="tool-console"><div className="console-title"><span>TOOLCHAIN TELEMETRY</span><span className="streaming">● STREAMING</span></div><div className="tool-grid">{toolStream.map(([name,type,service,status],i)=><div className="tool-log" key={name}><span className="log-time">{`0${i+1}:2${i}:0${i}`}</span><span className="ok">[OK]</span><strong>{name}</strong><span className="log-type">{type}</span><span className="service">{service}</span><span className="state">{status}</span></div>)}</div></div>
        <LiveTerminal/>
      </div><div className="scroll-hint">scroll_to_explore ↓</div></section>

      <section id="about" className="section reveal"><div className="section-label">01 / about</div><div className="about-grid"><div><h2>Security, systems,<br/><span className="accent">and visibility.</span></h2></div><p>Cyber Security Engineer with 2+ years of experience in enterprise security platform engineering, specializing in SIEM administration, vulnerability management and endpoint security. Hands-on experience spans IBM QRadar across 500+ MSSP client environments, plus Tenable Nessus, CrowdStrike Falcon, SentinelOne and Trend Micro HBSS.</p></div></section>
      <section id="skills" className="section reveal"><div className="section-label">02 / capabilities</div><h2>Security stack<span className="accent">_</span></h2><div className="skill-grid">{Object.entries(skills).map(([group,items],i)=><article className="skill-card" key={group}><div className="scan"><span>{`SCAN_0${i+1}`} · {group}</span><span className="scan-bar"/></div><div className="tags">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></section>
      <section id="certifications" className="section reveal"><div className="section-label">03 / credentials</div><h2>Certifications<span className="accent">_</span></h2><div className="cert-list">{certifications.map(([code,name,date])=><article className="cert" key={code}><div className="cert-code">{code}</div><div><strong>{name}</strong><small>Issued {date}</small></div><span className="verified">VERIFIED</span></article>)}</div></section>
      <section id="experience" className="section reveal"><div className="section-label">04 / experience</div><h2>Operational history<span className="accent">_</span></h2><div className="timeline">{experience.map((job,idx)=><article className="job" key={job.role}><div className="job-marker">0{idx+1}</div><div className="job-main"><div className="job-head"><div><h3>{job.role}</h3><p>{job.company} · {job.location}</p></div><time>{job.dates}</time></div><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
      <section id="contact" className="section contact reveal"><div className="section-label">05 / contact</div><h2>Open a secure channel<span className="accent">_</span></h2><div className="contact-box"><div><div className="terminal-line"><span className="accent">&gt;</span> ./connect --with Aditya</div><p>For cybersecurity opportunities, security engineering conversations or professional collaboration.</p></div><div className="contact-links"><a href="mailto:singhaditya2608@gmail.com">singhaditya2608@gmail.com</a><a href="https://linkedin.com/in/adityak2608" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/AdityaK2608" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    </main><footer><span>© {new Date().getFullYear()} Aditya Kumar</span><span>built with React + Vite</span><span className="accent">SECURITY PROFILE: ONLINE</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
