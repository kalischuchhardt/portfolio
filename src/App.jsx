import { useEffect, useState } from "react";
import "./App.css";
import { ArrowUpRight, ExternalLink, Mail, FileText, Send } from "lucide-react";
import BrandIcon from "./BrandIcon";
import { projectsJa } from "./projects.ja";
const projects = [
  {
    id: "phi-sigma-rho",
    url: "https://www.phisigmarhouf.com",
    title: "Phi Sigma Rho",
    subtitle: "Tau Chapter Website",
    type: "FULL-STACK WEB APPLICATION",
    art: "sorority",
    dates: "May 2025 – Present",
    stack: ["MERN Stack", "Figma"],
    description:
      "I’m developing a custom full-stack platform for 80 active sorority members, streamlining day-to-day chapter operations and member management with the MERN stack.",
    highlights: [
      "Designed intuitive, responsive pages from scratch and implemented secure, granular role-based authentication for the Executive Board, Officers, and General Members.",
      "Integrated automated email and SMS notifications to support chapter communication.",
      "Built interactive modules for chapter event sign-ups, attendance records, and participation points.",
    ],
  },
  {
    id: "helping-hand",
    url: "https://github.com/GG1627/helping-hand",
    title: "HelpingHand",
    subtitle: "ASL Learning Smart Glove",
    type: "EMBEDDED SYSTEMS & ACCESSIBILITY",
    art: "glove",
    dates: "February 2026 – Present",
    stack: ["C", "ESP32", "Flutter", "BLE", "ML"],
    description:
      "I’m designing and prototyping a wearable smart glove that supports ASL learning through real-time gesture recognition and tactile guidance.",
    highlights: [
      "Designing a sensor system with flex sensors (ADC) and a 6-axis IMU (I2C) to capture handshape, movement, and orientation for real-time ASL gesture recognition.",
      "Developing low-latency BLE communication on ESP32 using the NimBLE stack, streaming continuous sensor data at 2–5 kbps over stable GATT connections to a mobile client.",
      "Implementing PWM-controlled vibration motors to provide directional guidance for finger positioning through real-time haptic feedback.",
      "Designing a neural network classification pipeline for the ASL alphabet and numbers, targeting 90% recognition accuracy.",
    ],
  },
  {
    id: "my-flow-friend",
    url: "https://devpost.com/software/my-flowfriend",
    title: "MyFlowFriend",
    subtitle: "IoT Health Tracker · 1st Place at WiNGHacks",
    type: "EMBEDDED SYSTEMS & IOT",
    art: "flow",
    dates: "February 2026",
    stack: ["C", "ESP32", "Firebase", "Gemini API"],
    description:
      "A digital pet health tracker built with an ESP32 and a 3.5-inch TFT display. MyFlowFriend earned 1st Place at WiNGHacks, bringing symptom tracking to an interactive companion.",
    highlights: [
      "Engineered firmware in C for high-speed SPI communication and implemented internal RAM double-buffering with TFT_eSprite to eliminate flickering and render smooth UI animations.",
      "Developed asynchronous HTTPS POST requests to sync real-time symptom data with Firebase, managing Wi-Fi state logic for stability on restricted 2.4 GHz enterprise networks.",
      "Integrated the Gemini 2.5 Flash API for low-latency menstrual cycle predictions and an interactive chatbot based on structured daily telemetry and symptom logs.",
    ],
  },
  {
    id: "gatormarket",
    url: "https://github.com/kalischuchhardt/SWE_10776_Group3",
    title: "GatorMarket",
    subtitle: "Frontend Developer",
    type: "FULL-STACK WEB APPLICATION",
    art: "market",
    dates: "August 2025 – January 2026",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "HeroUI",
      "FastAPI",
      "SQLAlchemy",
    ],
    description:
      "A marketplace built for UF students. I developed the frontend with React, TypeScript, and HeroUI, helping students discover listings and connect with sellers.",
    highlights: [
      "Implemented the Home, Login/Register, and Listings pages with search, filter, and sort functionality.",
      "Built dynamic listing detail pages displaying item condition, price, seller information, and descriptions. Integrated protected routes so only authenticated users can view or create listings.",
      "Developed an Admin Dashboard for managing users and listings, including ban and delete actions, with role-based access restricting admin-only routes.",
    ],
  },
  {
    id: "macro",
    url: "https://devpost.com/software/macro-jdry09",
    title: "MACRO",
    subtitle: "Accessible 2D Gaming Controller",
    type: "HARDWARE & ACCESSIBILITY",
    art: "macro",
    dates: "January 2026",
    stack: ["Raspberry Pi Pico", "ADC", "C"],
    description:
      "I designed and developed a 2D gaming controller for users with fine motor skill deficits, combining joystick, button, and piezo inputs to make gameplay more accessible and responsive.",
    highlights: [
      "Integrated joystick, button, and piezo inputs to support precise in-game actions with an intuitive, responsive controller.",
      "Engineered a resistor ladder voltage divider to scale 20–25V piezo outputs to 3.3V for the Pico ADC, applying Ohm’s Law and Kirchhoff’s Voltage Law for accurate sensing.",
      "Focused the controller design on enabling users with motor impairments to participate more fully in gameplay.",
    ],
  },
  {
    id: "safe-steps",
    url: "https://devpost.com/software/safe-steps-s1orwe",
    title: "Safe Steps",
    subtitle: "A narrative-driven safety awareness game.",
    type: "GAME DESIGN & DEVELOPMENT",
    art: "game",
    dates: "February 2025",
    stack: ["GameMaker Studio 2", "Game Maker Language (GML)"],
    description:
      "I developed Safe Steps, a narrative-driven safety awareness game built with GameMaker Studio 2 and GML. Player choices shape the story, with real-time feedback on each decision.",
    highlights: [
      "Implemented branching game state logic with real-time feedback on player decisions to support safety awareness through interactive storytelling.",
      "Delivered a fully playable prototype within 36 hours, demonstrating adaptability, teamwork, and quick mastery of new tools.",
    ],
  },
  {
    id: "midifi",
    url: "https://github.com/kalischuchhardt/MidiFi",
    title: "MidiFi",
    subtitle: "Find music that fits your skill level.",
    type: "SOFTWARE & MUSIC",
    art: "music",
    dates: "August 2024 – December 2024",
    stack: ["C++", "SFML"],
    description:
      "I developed MidiFi to help pianists choose sheet music suited to their skill level. Built with C++ and SFML, it pairs a database of 300 MIDI files with an interactive interface.",
    highlights: [
      "Developed a MIDI parsing algorithm to determine song difficulty across a database of 300 music files.",
      "Used Min and Max Heaps to map MIDI songs to three difficulty levels: Easy, Intermediate, and Hard.",
      "Displayed categorized songs through an interactive SFML interface to help pianists select their next piece to learn.",
    ],
  },
];
const intro =
  "I’m a passionate 5th-year Computer Engineering student at the University of Florida focused on embedded systems, firmware development, digital design, and end-to-end IoT solutions.";
function App() {
  const [page, setPage] = useState(location.hash.slice(1) || "home");
  const [status, setStatus] = useState("");
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem("portfolio-language") === "ja" ? "ja" : "en"; } catch { return "en"; }
  });
  const ja = language === "ja";
  const localizedProjects = projects.map(item => ja ? { ...item, ...projectsJa[item.id] } : item);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = ja ? "ケイリシュッカート | ポートフォリオ" : "Kali Schuchhardt | Portfolio";
    try { localStorage.setItem("portfolio-language", language); } catch { /* Storage may be unavailable. */ }
  }, [language, ja]);
  useEffect(() => {
    const navigate = () => {
      setPage(location.hash.slice(1) || "home");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);
  useEffect(() => {
    if (page === "projects")
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
  }, [page]);
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [page]);
  const project = localizedProjects.find((p) => p.id === page);
  const art = (item) => (
    <a
      className={`project-art ${item.art}`}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ja ? `${item.title}を開く（新しいタブ）` : `Open ${item.title} (opens in a new tab)`}
    >
      <span className="art-external" aria-hidden="true"><ExternalLink size={18} /></span>
      {item.art === "music" ? (
        <>
          <div className="notes">♪ ♫</div>
          <div className="art-word">
            MidiFi<small>{ja ? "次に弾く一曲を。" : "find your next piece."}</small>
          </div>
        </>
      ) : (
        <div className={`${item.art}-preview`} />
      )}
    </a>
  );
  async function sendMessage(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("Sending…");
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kalischuchhardt@ufl.edu",
        { method: "POST", headers: { Accept: "application/json" }, body: data },
      );
      if (!response.ok) throw new Error("Unable to send");
      form.reset();
      setStatus("Message sent! Thanks for reaching out.");
    } catch {
      const subject = encodeURIComponent(
        ja ? `${data.get("name")}様からのお問い合わせ` : `Portfolio message from ${data.get("name")}`,
      );
      const body = encodeURIComponent(
        `${ja ? "お名前" : "Name"}: ${data.get("name")}\n${ja ? "メールアドレス" : "Email"}: ${data.get("email")}\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:kalischuchhardt@ufl.edu?subject=${subject}&body=${body}`;
      setStatus("Opening your email app as a backup…");
    }
  }
  const copyMessage = sendMessage;
  return (
    <>
      <header className="header shell">
        <a className="wordmark" href="#home">
          {ja ? "ケイリシュッカート" : "Kali Schuchhardt"}<span>.</span>
        </a>
        <nav aria-label={ja ? "メインナビゲーション" : "Main navigation"}>
          {[
            ["about", ja ? "私について" : "About"],
            ["experience", ja ? "経験" : "Experience"],
            ["projects", ja ? "プロジェクト" : "Projects"],
            ["contact", ja ? "お問い合わせ" : "Contact Me"],
          ].map(([id, label]) => (
            <a
              key={id}
              className={
                page === id || (id === "projects" && project) ? "active" : ""
              }
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
          <button className="language-toggle" type="button" onClick={() => setLanguage(ja ? "en" : "ja")} aria-label={ja ? "Switch to English" : "日本語に切り替え"} aria-pressed={ja}>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6.5h14M5 17.5h14"/></svg>
            <span lang="en" className={!ja ? "selected" : ""}>EN</span>
            <span className="language-divider" aria-hidden="true"/>
            <span lang="ja" className={ja ? "selected" : ""}>日本語</span>
          </button>
        </nav>
      </header>
      {page === "home" || page === "projects" ? (
        <main>
          <section className="hero shell">
            <div className="hero-copy reveal">
              <p className="eyebrow">{ja ? "エンジニアリングと創造性" : "ENGINEERING MEETS CREATIVITY"}</p>
              <h1>
                {ja ? "こんにちは。" : "Hello,"}
                <br />
                {ja ? "私の名前は" : "my name is"}
                <br />
                <span className="hero-name">{ja ? "ケイリシュッカート" : "Kali Schuchhardt"}<span>.</span></span>
              </h1>
              <p>{ja ? "フロリダ大学でコンピュータ工学を学ぶ5年生です。組み込みシステム、ファームウェア開発、デジタル設計、そして一貫したIoTソリューションの構築に情熱を注いでいます。" : intro}</p>
              <div className="actions">
                <a className="button pink" href="#projects">
                  {ja ? "プロジェクトを見る" : "Explore my projects"}
                </a>
                <a className="button outline" href="#about">
                  {ja ? "私について" : "A little about me"}
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div
                className="hero-photo"
                role="img"
                aria-label={ja ? "あごの下に手を添えて笑うKali" : "Kali smiling with her hands beneath her chin"}
              />
              <p className="caption"></p>
            </div>
          </section>
          <section id="projects" className="projects shell">
            <div className="section-heading reveal">
              <p className="eyebrow">{ja ? "私が作ったもの" : "A FEW THINGS I’VE MADE"}</p>
              <h2>{ja ? "プロジェクト" : "My Projects"}</h2>
              <div className="underline" />
            </div>
            <div className="project-list">
              {localizedProjects.map((item, index) => (
                <article
                  className="project-card reveal"
                  style={{ "--delay": `${index * 90}ms` }}
                  key={item.id}
                >
                  {art(item)}
                  <div className="project-copy">
                    <div className="project-meta">
                      <span>{item.type}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <h3>
                      <a href={`#${item.id}`}>{item.title}</a>
                    </h3>
                    <p className="subtitle">{item.subtitle}</p>
                    {item.dates && (
                      <p className="project-dates">{item.dates}</p>
                    )}
                    <p>{item.description}</p>
                    {item.stack && (
                      <ul className="tech-stack" aria-label={ja ? "使用技術" : "Technology stack"}>
                        {item.stack.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    )}
                    <a
                      className="project-link"
                      href={`#${item.id}`}
                      aria-label={ja ? `${item.title}の詳細を見る` : `View ${item.title} project details`}
                    >
                      {ja ? "詳細を見る" : "View project"} <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="invite shell reveal">
            <p className="eyebrow">{ja ? "ご相談がありますか？" : "HAVE SOMETHING IN MIND?"}</p>
            <h2>{ja ? "思いやりのあるものを一緒に作りましょう。" : "Let’s make something thoughtful."}</h2>
            <a className="button outline" href="#contact">
              {ja ? "お問い合わせ" : "Get in touch"}
            </a>
          </section>
        </main>
      ) : page === "experience" ? (
        <main className="inner shell experience-page">
          <section className="experience-intro reveal">
            <p className="eyebrow">{ja ? "技術とリーダーシップ" : "ENGINEERING & LEADERSHIP"}</p>
            <h1>{ja ? "これまでの経験" : "Experience"}</h1>
            <p>{ja ? "工学、ウェブサイト運営、そして学生組織でのリーダーシップに関する経験をご紹介します。" : "My experience in engineering, website management, and student leadership."}</p>
          </section>
          <section className="experience-timeline" aria-label={ja ? "活動・役職の経験" : "Roles and experience"}>
            {[
              {
                id: 'corrosion', title: ja ? '腐食エンジニア（Co-Op）' : 'Corrosion Engineer (Co-Op)', category: ja ? 'エンジニアリング' : 'ENGINEERING',
                dates: ja ? '2026年5月〜7月' : 'May 2026 – July 2026', organization: 'Colonial Pipeline', location: ja ? 'ジョージア州アルファレッタ' : 'Alpharetta, GA',
                highlights: ja ? [
                  '5年分のパイプラインデータを分析して高リスク地点（5 VAC超）を特定し、遠隔監視装置（RMU）の配置を最適化する交流（AC）監視プログラムを開発しました。',
                  '過去の電流密度と出力電圧の傾向に基づいて統計的な運転警報限界を設定し、1,716台の整流器RMUの警報しきい値を標準化しました。',
                  '仮設の陰極防食クーポンの現場試験を設計・実施し、常設設備と分極減衰の指標を比較してプローブの信頼性を検証しました。',
                ] : [
                  'Developed an alternating current (AC) monitoring program using five years of pipeline data to identify high-risk locations (>5 VAC) and optimize Remote Monitoring Unit (RMU) deployment.',
                  'Standardized alarm thresholds for 1,716 rectifier RMUs, using historical current density and output voltage trends to establish statistically constrained operating alarm limits.',
                  'Designed and executed field tests for temporary cathodic protection coupons, comparing polarization decay metrics with permanent fixtures to verify probe reliability.',
                ],
              },
              {
                id: 'webmaster', title: ja ? 'ウェブマスター' : 'Webmaster', category: ja ? 'ウェブサイト運営' : 'WEBSITE MANAGEMENT',
                dates: ja ? '2026年5月〜現在' : 'May 2026 – Present', organization: ja ? 'Phi Sigma Rho — 工学分野の女性のためのソロリティ' : 'Phi Sigma Rho — Sorority for Women in Engineering', location: ja ? 'フロリダ州ゲインズビル' : 'Gainesville, FL',
                highlights: ja ? [
                  '80名の会員向けに、公開済みのMERN Stackプラットフォームとモバイルアプリを開発するチームを率いています。',
                  '自動通知、イベント管理、直感的なユーザーインターフェースなどの機能開発を統括しています。',
                  'プロジェクトの進行を管理し、ロールベースのアクセスに対応するユーザー認証と管理機能を実装しています。',
                ] : [
                  'Directing a development team building a deployed MERN stack platform and mobile app for 80 members.',
                  'Overseeing feature development, including automated notifications, event tracking, and intuitive user interfaces.',
                  'Managing project timelines and implementing user authentication and administrative controls for role-based access.',
                ],
              },
              {
                id: 'social-affairs', title: ja ? '交流活動担当副会長' : 'Vice President of Social Affairs', category: ja ? 'リーダーシップ' : 'LEADERSHIP',
                dates: ja ? '2025年5月〜2026年5月' : 'May 2025 – May 2026', organization: ja ? 'Phi Sigma Rho — 工学分野の女性のためのソロリティ' : 'Phi Sigma Rho — Sorority for Women in Engineering', location: ja ? 'フロリダ州ゲインズビル' : 'Gainesville, FL',
                highlights: ja ? [
                  '6名のイベント担当者を統括し、支部の主要イベント20件の実施と運営を管理しました。',
                  '出席記録を管理し、相談時間を設け、執行部と連携してリスク管理に取り組みました。',
                ] : [
                  'Oversaw a team of six event chairs to deliver 20 major chapter events and coordinate event logistics.',
                  'Maintained attendance records, held office hours, and coordinated risk management with chapter leadership.',
                ],
              },
            ].map((item) => {
              return <article className={`experience-entry has-photo reveal experience-${item.id}`} key={item.id}>
                <div className="experience-content">
                  <div className="experience-date"><span>{item.dates}</span></div>
                  <p className="eyebrow">{item.category}</p>
                  <h2>{item.title}</h2>
                  <p className="experience-subtitle">{item.organization}<span className="experience-location">{item.location}</span></p>
                  <div className="experience-story">
                    <ul className="contributions">{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                  </div>
                </div>
                    {item.id === 'corrosion' && <figure className="experience-photo">
                      <img src="/assets/corrosion-engineering.jpeg" width="1737" height="3088" loading="lazy" decoding="async" alt={ja ? '保護具を着用し、腐食試験ステーションを指すケイリシュッカート' : 'Kali Schuchhardt wearing protective equipment beside a corrosion test station'} />
                    </figure>}
                    {item.id === 'webmaster' && <figure className="experience-photo">
                      <img src="/assets/webmaster.jpeg" width="3024" height="4032" loading="lazy" decoding="async" alt={ja ? 'パンプキンパッチでかぼちゃを抱えるケイリシュッカート' : 'Kali Schuchhardt holding a pumpkin at a pumpkin patch'} />
                    </figure>}
                    {item.id === 'social-affairs' && <figure className="experience-photo">
                      <img src="/assets/vp-social-affairs.jpeg" width="3024" height="4032" loading="lazy" decoding="async" alt={ja ? 'Phi Rhoの光る文字と風船の前に立つケイリシュッカート' : 'Kali Schuchhardt beside illuminated Phi Rho letters and balloons'} />
                    </figure>}
              </article>;
            })}
          </section>
        </main>
      ) : page === "about" ? (
        <main className="inner shell two-column">
          <section>
            <p className="eyebrow">{ja ? "プロジェクトの背景にいる人" : "THE PERSON BEHIND THE PROJECTS"}</p>
            <h1>{ja ? "私について" : "About me"}</h1>
            <p>{ja ? "フロリダ大学でコンピュータ工学を学ぶ5年生です。組み込みシステム、ファームウェア開発、デジタル設計、そして一貫したIoTソリューションの構築に情熱を注いでいます。" : intro}</p>
            <p>
{ja ? "C/C++、Java、JavaScript、TypeScript、VHDL、Verilogの使用経験があり、SolidWorksの認定資格を取得しています。Intel Quartus PrimeやWaveFormsなどのツールも実際に使用してきました。" : "I have experience working with C/C++, Java, JavaScript, TypeScript, VHDL, and Verilog, and I am certified in SolidWorks. I also have hands-on experience with tools such as Intel Quartus Prime and WaveForms."}
            </p>
            <p>
{ja ? "日本に住んでいた経験があり、日本語を話します。その経験を通じて、文化への視野と適応力を広げてきました。デジタル回路の設計からソフトウェア開発まで、複雑な問題を解き、新しい解決策を生み出すことが好きです。" : "Having lived in Japan, I speak Japanese, which has broadened my cultural perspective and adaptability. I enjoy solving complex problems and building innovative solutions, whether through designing digital circuits or developing software applications."}
            </p>
            <p>
{ja ? "技術力を活かし、エンジニアとしてさらに成長できるインターンシップの機会を探しています。" : "I am actively seeking internship opportunities where I can apply my technical skills and continue to grow as an engineer."}
            </p>
            <a className="button peach" href="#contact">
              {ja ? "つながりましょう" : "Let’s connect"}
            </a>
          </section>
          <div
            className="portrait"
            role="img"
            aria-label={ja ? "ケイリシュッカートのポートレート" : "Portrait of Kali Schuchhardt"}
          />
        </main>
      ) : page === "contact" ? (
        <main className="inner shell two-column">
          <section>
            <p className="eyebrow">{ja ? "会話を始めましょう" : "LET’S START A CONVERSATION"}</p>
            <h1>{ja ? "お問い合わせ" : "Contact me"}</h1>
            <p>
              {ja ? "プロジェクトや機会、またはちょっとしたご挨拶でも大歓迎です。ぜひご連絡ください。" : "Have a project, an opportunity, or just a hello? I’d love to hear from you."}
            </p>
            <form onSubmit={copyMessage} onChange={() => setStatus("")}>
              <label htmlFor="name">{ja ? "お名前" : "Name"}</label>
              <input id="name" name="name" autoComplete="name" required />
              <label htmlFor="email">{ja ? "メールアドレス" : "Email"}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <label htmlFor="message">{ja ? "メッセージ" : "Message"}</label>
              <textarea id="message" name="message" rows="5" required />
              <button type="submit" className="button pink">
                {ja ? "メッセージを送信" : "Send message"} <Send size={16} aria-hidden="true" />
              </button>
              <p className="form-note" role="status">
                {ja ? ({ "Sending…": "送信中…", "Message sent! Thanks for reaching out.": "メッセージを送信しました。お問い合わせありがとうございます。", "Opening your email app as a backup…": "代わりにメールアプリを開きます…" }[status] || status) : status}
              </p>
            </form>
          </section>
          <div
            className="portrait"
            role="img"
            aria-label={ja ? "ケイリシュッカートのポートレート" : "Portrait of Kali Schuchhardt"}
          />
        </main>
      ) : project ? (
        <main className="inner shell detail">
          <a className="back" href="#projects">
            {ja ? "← プロジェクト一覧" : "← All projects"}
          </a>
          <p className="eyebrow">{project.type}</p>
          <h1>
            {project.title}
            {project.art === "sorority" ? (ja ? " Tau支部のウェブサイト" : " Tau Chapter Website") : ""}
          </h1>
          <div className="detail-grid">
            {art(project)}
            <section>
              <h2>{ja ? "プロジェクトについて" : "About this project"}</h2>
              {project.dates && (
                <p className="project-role">
                  {project.subtitle}
                  <br />
                  {project.dates}
                </p>
              )}
              <p>{project.description}</p>
              {project.stack && (
                <ul className="tech-stack" aria-label={ja ? "使用技術" : "Technology stack"}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
              {project.highlights && (
                <>
                  <h2 className="contributions-heading">{ja ? "担当したこと" : "My contributions"}</h2>
                  <ul className="contributions">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}
              <a className="button outline" href="#contact">
                {ja ? "このプロジェクトについて問い合わせる" : "Ask me about this project"}
              </a>
            </section>
          </div>
        </main>
      ) : (
        <main className="inner shell">
          <h1>{ja ? "ページが見つかりません" : "Page not found"}</h1>
          <a href="#home">{ja ? "ホームに戻る" : "Return home"}</a>
        </main>
      )}
      <footer className="footer shell">
        <a className="wordmark" href="#home">
          {ja ? "ケイリシュッカート" : "Kali Schuchhardt"}<span>.</span>
        </a>
        <span>{ja ? "好奇心を添えて、丁寧につくりました。" : "Thoughtfully built, with a little curiosity."}</span>
        <div className="social-links">
          <a href="mailto:kalischuchhardt@ufl.edu"><Mail size={18} aria-hidden="true" />{ja ? "メール" : "Email"}</a>
          <a
            href="https://www.linkedin.com/in/kalischuchhardt984"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandIcon brand="linkedin" /> LinkedIn <ExternalLink size={13} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/kalischuchhardt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandIcon brand="github" /> GitHub <ExternalLink size={13} aria-hidden="true" />
          </a>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer"><FileText size={18} aria-hidden="true" />{ja ? "履歴書" : "Résumé"}<ExternalLink size={13} aria-hidden="true" /></a>
        </div>
        <small>© {new Date().getFullYear()} {ja ? "ケイリシュッカート" : "Kali Schuchhardt"}</small>
      </footer>
    </>
  );
}
export default App;
