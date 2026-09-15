import { useEffect, useState } from 'react'
import './App.css'
const projects = [
  {
    id: 'phi-sigma-rho', url: 'https://www.phisigmarhouf.com', title: 'Phi Sigma Rho', subtitle: 'Tau Chapter Website',
    type: 'FULL-STACK WEB APPLICATION', art: 'sorority',
    dates: 'May 2025 – Present',
    stack: ['MERN Stack', 'Figma'],
    description: 'I’m developing a custom full-stack platform for 80 active sorority members, streamlining day-to-day chapter operations and member management with the MERN stack.',
    highlights: [
      'Designed intuitive, responsive pages from scratch and implemented secure, granular role-based authentication for the Executive Board, Officers, and General Members.',
      'Integrated automated email and SMS notifications to support chapter communication.',
      'Built interactive modules for chapter event sign-ups, attendance records, and participation points.',
    ],
  },
  {
    "id": "helping-hand",
    "url": "https://github.com/GG1627/helping-hand",
    "title": "HelpingHand",
    "subtitle": "ASL Learning Smart Glove",
    "type": "EMBEDDED SYSTEMS & ACCESSIBILITY",
    "art": "glove",
    "dates": "February 2026 – Present",
    "stack": [
      "C",
      "ESP32",
      "Flutter",
      "BLE",
      "ML"
    ],
    "description": "I’m designing and prototyping a wearable smart glove that supports ASL learning through real-time gesture recognition and tactile guidance.",
    "highlights": [
      "Designing a sensor system with flex sensors (ADC) and a 6-axis IMU (I2C) to capture handshape, movement, and orientation for real-time ASL gesture recognition.",
      "Developing low-latency BLE communication on ESP32 using the NimBLE stack, streaming continuous sensor data at 2–5 kbps over stable GATT connections to a mobile client.",
      "Implementing PWM-controlled vibration motors to provide directional guidance for finger positioning through real-time haptic feedback.",
      "Designing a neural network classification pipeline for the ASL alphabet and numbers, targeting 90% recognition accuracy."
    ]
  },
  {
    "id": "my-flow-friend",
    "url": "https://devpost.com/software/my-flowfriend",
    "title": "MyFlowFriend",
    "subtitle": "IoT Health Tracker · 1st Place at WiNGHacks",
    "type": "EMBEDDED SYSTEMS & IOT",
    "art": "flow",
    "dates": "February 2026",
    "stack": [
      "C",
      "ESP32",
      "Firebase",
      "Gemini API"
    ],
    "description": "A digital pet health tracker built with an ESP32 and a 3.5-inch TFT display. MyFlowFriend earned 1st Place at WiNGHacks, bringing symptom tracking to an interactive companion.",
    "highlights": [
      "Engineered firmware in C for high-speed SPI communication and implemented internal RAM double-buffering with TFT_eSprite to eliminate flickering and render smooth UI animations.",
      "Developed asynchronous HTTPS POST requests to sync real-time symptom data with Firebase, managing Wi-Fi state logic for stability on restricted 2.4 GHz enterprise networks.",
      "Integrated the Gemini 2.5 Flash API for low-latency menstrual cycle predictions and an interactive chatbot based on structured daily telemetry and symptom logs."
    ]
  },
  {
    id: 'gatormarket', url: 'https://github.com/kalischuchhardt/SWE_10776_Group3', title: 'GatorMarket', subtitle: 'Frontend Developer',
    type: 'FULL-STACK WEB APPLICATION', art: 'market',
    dates: 'August 2025 – January 2026',
    stack: ['React', 'TypeScript', 'JavaScript', 'HeroUI', 'FastAPI', 'SQLAlchemy'],
    description: 'A marketplace built for UF students. I developed the frontend with React, TypeScript, and HeroUI, helping students discover listings and connect with sellers.',
    highlights: [
      'Implemented the Home, Login/Register, and Listings pages with search, filter, and sort functionality.',
      'Built dynamic listing detail pages displaying item condition, price, seller information, and descriptions. Integrated protected routes so only authenticated users can view or create listings.',
      'Developed an Admin Dashboard for managing users and listings, including ban and delete actions, with role-based access restricting admin-only routes.',
    ],
  },
  {
    "id": "macro",
    "url": "https://devpost.com/software/macro-jdry09",
    "title": "MACRO",
    "subtitle": "Accessible 2D Gaming Controller",
    "type": "HARDWARE & ACCESSIBILITY",
    "art": "macro",
    "dates": "January 2026",
    "stack": [
      "Raspberry Pi Pico",
      "ADC",
      "C"
    ],
    "description": "I designed and developed a 2D gaming controller for users with fine motor skill deficits, combining joystick, button, and piezo inputs to make gameplay more accessible and responsive.",
    "highlights": [
      "Integrated joystick, button, and piezo inputs to support precise in-game actions with an intuitive, responsive controller.",
      "Engineered a resistor ladder voltage divider to scale 20–25V piezo outputs to 3.3V for the Pico ADC, applying Ohm’s Law and Kirchhoff’s Voltage Law for accurate sensing.",
      "Focused the controller design on enabling users with motor impairments to participate more fully in gameplay."
    ]
  },
  {
    id: 'safe-steps', url: 'https://devpost.com/software/safe-steps-s1orwe', title: 'Safe Steps', subtitle: 'A narrative-driven safety awareness game.',
    type: 'GAME DESIGN & DEVELOPMENT', art: 'game',
    dates: 'February 2025',
    stack: ['GameMaker Studio 2', 'Game Maker Language (GML)'],
    description: 'I developed Safe Steps, a narrative-driven safety awareness game built with GameMaker Studio 2 and GML. Player choices shape the story, with real-time feedback on each decision.',
    highlights: [
      'Implemented branching game state logic with real-time feedback on player decisions to support safety awareness through interactive storytelling.',
      'Delivered a fully playable prototype within 36 hours, demonstrating adaptability, teamwork, and quick mastery of new tools.',
    ],
  },
  {
    id: 'midifi', url: 'https://github.com/kalischuchhardt/MidiFi', title: 'MidiFi', subtitle: 'Find music that fits your skill level.',
    type: 'SOFTWARE & MUSIC', art: 'music',
    dates: 'August 2024 – December 2024',
    stack: ['C++', 'SFML'],
    description: 'I developed MidiFi to help pianists choose sheet music suited to their skill level. Built with C++ and SFML, it pairs a database of 300 MIDI files with an interactive interface.',
    highlights: [
      'Developed a MIDI parsing algorithm to determine song difficulty across a database of 300 music files.',
      'Used Min and Max Heaps to map MIDI songs to three difficulty levels: Easy, Intermediate, and Hard.',
      'Displayed categorized songs through an interactive SFML interface to help pianists select their next piece to learn.',
    ],
  },
]
const intro = 'I’m a 4th-year Computer Engineering student at the University of Florida with a passion for object-oriented programming, digital circuits, and creative technology.'
function App() {
  const [page, setPage] = useState(location.hash.slice(1) || 'home')
  const [status, setStatus] = useState('')
  useEffect(() => { const navigate = () => { setPage(location.hash.slice(1) || 'home'); window.scrollTo(0, 0) }; window.addEventListener('hashchange', navigate); return () => window.removeEventListener('hashchange', navigate) }, [])
  useEffect(() => { if(page === 'projects') document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}) }, [page])
  const project = projects.find(p => p.id === page)
  const art = (item) => <a className={`project-art ${item.art}`} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} (opens in a new tab)`}>{item.art === 'music' ? <><div className="notes">♪ ♫</div><div className="art-word">MidiFi<small>find your next piece.</small></div></> : <div className={`${item.art}-preview`} />}</a>
  async function copyMessage(event) { event.preventDefault(); const data = new FormData(event.currentTarget); try { await navigator.clipboard.writeText(`From: ${data.get('name')} <${data.get('email')}>\n\n${data.get('message')}`); setStatus('Message copied. It has not been sent.') } catch { setStatus('Copy was unavailable. Please select and copy your message manually.') } }
  return <>
    <header className="header shell"><a className="wordmark" href="#home">Kali Schuchhardt<span>.</span></a><nav aria-label="Main navigation">{[['about','About'],['projects','Projects'],['contact','Contact Me']].map(([id,label]) => <a key={id} className={page === id || (id === 'projects' && project) ? 'active' : ''} href={`#${id}`}>{label}</a>)}</nav></header>
    {page === 'home' || page === 'projects' ? <main>
      <section className="hero shell"><div className="hero-copy"><p className="eyebrow">ENGINEERING MEETS CREATIVITY</p><h1>Hello, my name is<br/>Kali Schuchhardt<span>.</span></h1><p>{intro}</p><p>Driven by curiosity, I love turning complex problems into thoughtful, innovative solutions.</p><div className="actions"><a className="button pink" href="#projects">Explore my projects ↗</a><a className="button outline" href="#about">A little about me</a></div></div><div className="hero-visual"><div className="hero-photo" role="img" aria-label="Kali smiling with her hands beneath her chin"/><p className="caption">A curious mind. A creative heart.</p></div></section>
      <section id="projects" className="projects shell"><div className="section-heading"><p className="eyebrow">A FEW THINGS I’VE MADE</p><h2>Selected projects</h2><div className="underline"/></div><div className="project-list">{projects.map((item,index) => <article className="project-card" key={item.id}>{art(item)}<div className="project-copy"><div className="project-meta"><span>{item.type}</span><span>0{index+1}</span></div><h3><a href={`#${item.id}`}>{item.title}</a></h3><p className="subtitle">{item.subtitle}</p>{item.dates && <p className="project-dates">{item.dates}</p>}<p>{item.description}</p>{item.stack && <ul className="tech-stack" aria-label="Technology stack">{item.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>}<a className="project-link" href={`#${item.id}`} aria-label={`View ${item.title} project details`}>View project <span aria-hidden="true">↗</span></a></div></article>)}</div></section>
      <section className="invite shell"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s make something thoughtful.</h2><a className="button outline" href="#contact">Get in touch ↗</a></section>
    </main> : page === 'about' ? <main className="inner shell two-column"><section><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h1>About me</h1><p>{intro}</p><p>I have experience working with Python, C/C++, Java, VHDL, and R, and I am certified in SolidWorks. I also have hands-on experience with tools such as Intel Quartus Prime and WaveForms.</p><p>Having lived in Japan, I speak Japanese, which has broadened my cultural perspective and adaptability. I enjoy solving complex problems and building innovative solutions, whether through designing digital circuits or developing software applications.</p><p>I am actively seeking internship opportunities where I can apply my technical skills and continue to grow as an engineer.</p><a className="button peach" href="#contact">Let’s connect ↗</a></section><div className="portrait" role="img" aria-label="Portrait of Kali Schuchhardt"/></main> : page === 'contact' ? <main className="inner shell two-column"><section><p className="eyebrow">LET’S START A CONVERSATION</p><h1>Contact me</h1><p>Have a project, an opportunity, or just a hello? I’d love to hear from you.</p><form onSubmit={copyMessage} onChange={() => setStatus('')}><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required/><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required/><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" required/><p className="form-note">Direct delivery isn’t connected yet. Copy your message to save it for sending.</p><button type="submit" className="button pink">Copy message ↗</button><p className="form-note" role="status">{status}</p></form></section><div className="portrait" role="img" aria-label="Portrait of Kali Schuchhardt"/></main> : project ? <main className="inner shell detail"><a className="back" href="#projects">← All projects</a><p className="eyebrow">{project.type}</p><h1>{project.title}{project.art === 'sorority' ? ' Tau Chapter Website' : ''}</h1><div className="detail-grid">{art(project)}<section><h2>About this project</h2>{project.dates && <p className="project-role">{project.subtitle}<br />{project.dates}</p>}<p>{project.description}</p>{project.stack && <ul className="tech-stack" aria-label="Technology stack">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>}{project.highlights && <><h2 className="contributions-heading">My contributions</h2><ul className="contributions">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></>}<a className="button outline" href="#contact">Ask me about this project ↗</a></section></div></main> : <main className="inner shell"><h1>Page not found</h1><a href="#home">Return home</a></main>}
    <footer className="footer shell"><a className="wordmark" href="#home">Kali Schuchhardt<span>.</span></a><span>Thoughtfully built, with a little curiosity.</span><a href="#contact">Say hello ↗</a><small>© {new Date().getFullYear()} Kali Schuchhardt</small></footer>
  </>
}
export default App
