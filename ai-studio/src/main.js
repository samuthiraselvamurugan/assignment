import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import Lenis from 'lenis';
import { createIcons, icons } from 'lucide';

// The site code below reads these as globals.
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.THREE = THREE;
window.Lenis = Lenis;
window.lucide = { createIcons: () => createIcons({ icons }) };

/* ============================================================
   CONFIG: every piece of personal content lives here.
   Edit this object and the whole site updates.
   Entries marked SAMPLE are example content to replace.
   ============================================================ */
const CONFIG = {
  name: ['Samuthira', 'Selvamurugan'],
  fullName: 'Samuthira Selvamurugan P',
  rollNo: '2026BTAI042',
  section: '403/C',
  roles: ['Creative Developer', 'AI Enthusiast', 'Cloud Learner'],
  intro: 'I build <b>expressive interfaces</b> and experiment with <b>AI, cloud and design</b>, one project at a time.',
  heroPhoto: '', // add an image path here to bring a portrait back into the opening scene
  photo: '',     // add an image path here to show a portrait in the About section
  manifesto: 'I design websites that feel like films. Every scroll is a cut, every click is a scene, and every detail has a reason.',
  manifestoHot: ['films', 'scroll', 'scene'],
  about: {
    title: ['Hello,', "I'm Samuthira"],
    bio: 'I am <b>Samuthira Selvamurugan P</b>, a student who loves turning ideas into interfaces people remember. In 2026 alone I finished <b>18 certificates</b> across cloud, AI and design, and I am always looking for the next thing to build with <b>code, cloud and AI</b>.',
    interests: ['Artificial intelligence', 'Cloud computing', 'Machine learning', 'Web animation', 'UI/UX design', 'AI agents'],
    strengths: ['Fast learner', 'Detail focused', 'Self-driven', 'Curious']
  },
  skills: [ // only the skills you actually have
    { name: 'HTML', cat: 'Markup', icon: 'file-code' },
    { name: 'CSS', cat: 'Styling', icon: 'paintbrush' },
    { name: 'JavaScript', cat: 'Language', icon: 'braces' },
    { name: 'Python', cat: 'Language', icon: 'terminal' },
    { name: 'Java', cat: 'Language', icon: 'coffee' },
    { name: 'C', cat: 'Language', icon: 'cpu' },
    { name: 'React', cat: 'Framework', icon: 'atom' },
    { name: 'UI/UX Design', cat: 'Design', icon: 'figma' },
    { name: 'Git & GitHub', cat: 'Workflow', icon: 'git-branch' },
    { name: 'Artificial Intelligence', cat: 'Domain', icon: 'brain' }
  ],
  // Descriptions and stack badges are written from the project names. Edit them to match the real projects,
  // and add github / live URLs (https://...) to show the buttons.
  projects: [
    { title: 'Aqua Sentinel', kind: 'Monitoring system', art: 'aqua',
      desc: 'A water monitoring project that keeps watch over readings and flags anything unusual before it becomes a problem.',
      stack: ['Python', 'IoT', 'Artificial Intelligence'], github: '', live: '' },
    { title: 'LawRules', kind: 'Legal information', art: 'law',
      desc: 'A project that makes laws and rules easier to find and understand, so people can look up what applies to them without reading pages of legal text.',
      stack: ['React', 'JavaScript', 'Artificial Intelligence'], github: '', live: '' }
  ],
  education: [
    { year: '2026', title: 'Undergraduate student', where: 'Roll No. 2026BTAI042 · Section 403/C',
      desc: 'Where this journey starts: classes, labs and a habit of finishing what I begin.' },
    { year: 'JUN 2026', title: 'Cloud and IoT first steps', where: 'Coursera project courses',
      desc: 'Computer vision with Azure Cognitive Services, Azure IoT Hub and the first Microsoft tools.' },
    { year: 'JUL 2026', title: 'Cloud, data and design', where: 'Coursera project courses',
      desc: 'AWS S3, an Azure virtual machine web server, BigQuery, plus Canva, Easil and PowerPoint design projects.' },
    { year: 'SEP 2026', title: 'Machine learning', where: 'Coursera project courses',
      desc: 'Tweet emotion recognition with TensorFlow, and project management with ClickUp.' },
    { year: 'NOV 2026', title: 'n8n AI Agent Bootcamp', where: 'School of Computational Intelligence, Joy University',
      desc: 'Actively participated in the bootcamp on 3 November 2026, organized with Startup Incubators Club and GenLab.' }
  ],
  certCats: { all: 'All', ai: 'AI & Data', cloud: 'Cloud', design: 'Design', career: 'Career & Tools' },
  certificates: [
 {
  "slug": "n8n-agent-bootcamp",
  "title": "n8n AI Agent Bootcamp",
  "date": "Nov 3, 2026",
  "by": "Dr. Nishi S Das, Dr. Chithra D. Gracia, Ashwin",
  "role": "School of Computational Intelligence, Joy University",
  "verify": "",
  "cat": "ai",
  "issuer": "Joy University",
  "kind": "Certificate of Participation",
  "feat": true
 },
 {
  "slug": "tweet-emotion-recognition-with-tensorflow",
  "title": "Tweet Emotion Recognition with TensorFlow",
  "date": "Sep 3, 2026",
  "by": "Amit Yadav",
  "role": "Instructor",
  "verify": "https://coursera.org/verify/1U28ZZ7041LI",
  "cat": "ai",
  "issuer": "Coursera"
 },
 {
  "slug": "introduction-to-project-management-with-clickup",
  "title": "Introduction to Project Management with ClickUp",
  "date": "Sep 3, 2026",
  "by": "Abby Saey",
  "role": "Subject Matter Expert",
  "verify": "https://coursera.org/verify/7CT3C53V01J3",
  "cat": "career",
  "issuer": "Coursera"
 },
 {
  "slug": "enhancing-communication-with-remind",
  "title": "Enhancing Communication with Remind",
  "date": "Jul 19, 2026",
  "by": "Rachel Lindsay",
  "role": "Educator",
  "verify": "https://coursera.org/verify/ONEXOY7RXRWT",
  "cat": "career",
  "issuer": "Coursera"
 },
 {
  "slug": "azure-create-a-virtual-machine-and-deploy-a-web-",
  "title": "Azure: Create a Virtual Machine and Deploy a Web Server",
  "date": "Jul 18, 2026",
  "by": "Mario Ferraro",
  "role": "Instructor",
  "verify": "https://coursera.org/verify/EBXGRU7TBTEZ",
  "cat": "cloud",
  "issuer": "Coursera"
 },
 {
  "slug": "building-digital-media-using-graphic-design-in-p",
  "title": "Building Digital Media using Graphic Design in PowerPoint",
  "date": "Jul 17, 2026",
  "by": "Lindsey Dumser",
  "role": "Subject Matter Expert",
  "verify": "https://coursera.org/verify/W2XIDC5NA8L5",
  "cat": "design",
  "issuer": "Coursera"
 },
 {
  "slug": "language-arts-confidence-with-storybird",
  "title": "Language Arts Confidence with Storybird",
  "date": "Jul 17, 2026",
  "by": "Rachel Lindsay",
  "role": "Educator",
  "verify": "https://coursera.org/verify/XQQB4DYWNREE",
  "cat": "career",
  "issuer": "Coursera"
 },
 {
  "slug": "working-with-bigquery",
  "title": "Working with BigQuery",
  "date": "Jul 14, 2026",
  "by": "Ikechukwu Nigel Ogbuchi",
  "role": "Subject Matter Expert",
  "verify": "https://coursera.org/verify/ST3E2NTQY7CB",
  "cat": "ai",
  "issuer": "Coursera"
 },
 {
  "slug": "preparation-for-job-interviews",
  "title": "Preparation for Job Interviews",
  "date": "Jul 12, 2026",
  "by": "Dianna Eckford",
  "role": "Director/Manager/Consultant",
  "verify": "https://coursera.org/verify/R2UI6UA59FHW",
  "cat": "career",
  "issuer": "Coursera"
 },
 {
  "slug": "how-to-design-facebook-and-ig-stories-using-canv",
  "title": "How to design Facebook and IG stories using Canva",
  "date": "Jul 12, 2026",
  "by": "Monica I Heredia",
  "role": "Social Media Specialist and Content Creator",
  "verify": "https://coursera.org/verify/YY6DU8GR768B",
  "cat": "design",
  "issuer": "Coursera"
 },
 {
  "slug": "creating-a-free-business-page-with-blogger",
  "title": "Creating a Free Business Page with Blogger",
  "date": "Jul 12, 2026",
  "by": "Julia Arteno",
  "role": "Subject Matter Expert",
  "verify": "https://coursera.org/verify/N0Q56RS7N79N",
  "cat": "career",
  "issuer": "Coursera"
 },
 {
  "slug": "aws-s3-basics",
  "title": "AWS S3 Basics",
  "date": "Jul 12, 2026",
  "by": "Sorabh Kaushik",
  "role": "Cloud Solution Architect",
  "verify": "https://coursera.org/verify/85Y4DVYSA0I5",
  "cat": "cloud",
  "issuer": "Coursera"
 },
 {
  "slug": "getting-started-with-microsoft-onedrive",
  "title": "Getting Started with Microsoft OneDrive",
  "date": "Jul 12, 2026",
  "by": "Jacklyn Sira",
  "role": "Subject Matter Expert",
  "verify": "https://coursera.org/verify/FWM09N0LDZPT",
  "cat": "cloud",
  "issuer": "Coursera"
 },
 {
  "slug": "create-a-departure-and-personal-statement-for-in",
  "title": "Create a Departure and Personal Statement for Interviews",
  "date": "Jul 12, 2026",
  "by": "Dianna Eckford",
  "role": "Director/Manager/Consultant",
  "verify": "https://coursera.org/verify/VPRBA2UJ9ZF1",
  "cat": "career",
  "issuer": "Coursera"
 },
 {
  "slug": "marketing-design-with-easil",
  "title": "Marketing Design with Easil",
  "date": "Jul 12, 2026",
  "by": "Abby Saey",
  "role": "Subject Matter Expert",
  "verify": "https://coursera.org/verify/QJ1WF01KHA8H",
  "cat": "design",
  "issuer": "Coursera"
 },
 {
  "slug": "getting-started-with-microsoft-powerpoint",
  "title": "Getting Started with Microsoft PowerPoint",
  "date": "Jun 27, 2026",
  "by": "Andres Rodriguez",
  "role": "Subject Matter Expert",
  "verify": "https://coursera.org/verify/X8ZWHWC0615R",
  "cat": "design",
  "issuer": "Coursera"
 },
 {
  "slug": "getting-started-with-azure-iot-hub",
  "title": "Getting started with Azure IOT Hub",
  "date": "Jun 27, 2026",
  "by": "Abhishek Jha",
  "role": "Data Science & Business",
  "verify": "https://coursera.org/verify/L2XPW53WIAG4",
  "cat": "cloud",
  "issuer": "Coursera"
 },
 {
  "slug": "build-a-computer-vision-app-with-azure-cognitive",
  "title": "Build a computer vision app with Azure Cognitive Services",
  "date": "Jun 25, 2026",
  "by": "Catalin Popa",
  "role": "Microsoft Azure MVP",
  "verify": "https://coursera.org/verify/0WQMTMFO947T",
  "cat": "ai",
  "issuer": "Coursera"
 }
],
  contact: { // leave a value empty to hide that button; add your profile URLs (https://...) to show them
    email: 'samuthiraselva35@gmail.com',
    github: 'https://github.com/samuthiraselvamurugan',
    linkedin: 'https://www.linkedin.com/in/samuthira-selvamurugan-97bb48431',
    instagram: ''
  }
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ico = n => `<i data-lucide="${n}"></i>`;
function split(el, text) {
  el.textContent = '';
  const words = text.split(' ');
  words.forEach((word, i) => {
    const w = document.createElement('span'); w.className = 'w';
    [...word].forEach(c => { const s = document.createElement('span'); s.className = 'ch'; s.setAttribute('aria-hidden', 'true'); s.textContent = c; w.appendChild(s); });
    el.appendChild(w);
    if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
  });
  return $$('.ch', el);
}
const safeUrl = u => /^https?:\/\//i.test(u) ? u : '';
const A = (url, label, cls, icon) => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${icon ? ico(icon) : ''}${label}</a>`;

/* ---------- render content ---------- */
const NAV = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Journey'], ['certificates', 'Certificates'], ['contact', 'Contact']];
function render() {
  const C = CONFIG, full = C.fullName;
  document.title = C.name.join(' ') + ' Portfolio';
  $('#logoText').textContent = C.name.map(n => n[0]).join('').toUpperCase();
  $('#links').innerHTML = NAV.map(([id, l]) => `<li><a href="#${id}" data-nav data-spy="${id}">${l}</a></li>`).join('');
  $('#sheet').innerHTML = NAV.map(([id, l], i) => `<a href="#${id}" data-nav><span>0${i + 1}</span>${l}</a>`).join('');
  $('#heroName').setAttribute('aria-label', full);
  $('#n1').textContent = C.name[0].toUpperCase(); $('#n2').textContent = C.name[1].toUpperCase();
  $('#footName').textContent = '© 2026 ' + full;
  $('#heroIntro').innerHTML = C.intro;
  $('#heroRole').innerHTML = C.roles.map((r, i) => i % 2 ? `<span>${esc(r)}</span>` : esc(r)).join('<br>') + `<br><span>Roll ${esc(C.rollNo)}</span> · Sec ${esc(C.section)}`;

  // portraits are optional: with no photo the hero is pure typography and About shows a monogram
  const hp = C.heroPhoto || C.photo;
  if (hp) $('#heroPortrait').innerHTML = `<img src="${esc(hp)}" alt="${esc(full)}" width="860" height="1208" fetchpriority="high">`;
  else { $('#heroPortrait').innerHTML = ''; $('#heroPortrait').hidden = true; document.body.classList.add('no-photo'); }
  $('#aboutPortrait').innerHTML = C.photo ? `<img src="${esc(C.photo)}" alt="${esc(full)}" loading="lazy">`
    : `<div class="mono" aria-hidden="true">${esc(C.name.map(n => n[0]).join('').toUpperCase())}</div>`;

  // manifesto
  const hot = C.manifestoHot.map(w => w.toLowerCase());
  $('#mfText').innerHTML = C.manifesto.split(' ').map(w => `<span class="w${hot.includes(w.toLowerCase().replace(/[^a-z]/g, '')) ? ' hot' : ''}">${esc(w)}</span>`).join(' ');

  // about
  $('#aboutTitle').innerHTML = `<span class="mask"><span>${esc(C.about.title[0])}</span></span><span class="mask"><span><em>${esc(C.about.title[1])}</em></span></span>`;
  $('#aboutBio').innerHTML = C.about.bio;
  $('#facts').innerHTML = `
    <div><h4>Student</h4><p>${esc(C.fullName)}<small>Roll No. ${esc(C.rollNo)} · Section ${esc(C.section)}</small></p></div>
    <div><h4>Technical interests</h4><div class="chips">${C.about.interests.map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div></div>
    <div><h4>Strengths</h4><div class="chips">${C.about.strengths.map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div></div>`;
  const pos = ['top:-5%;right:-4%', 'top:30%;left:-6%', 'bottom:22%;right:-6%', 'bottom:-4%;left:8%', 'top:-6%;left:22%'];
  const fi = ['file-code', 'atom', 'brain', 'git-branch', 'braces'];
  $('#floatIcons').innerHTML = fi.map((n, i) => `<span class="float-ico" data-depth="${(i % 3) + 1}" style="${pos[i]}">${ico(n)}</span>`).join('');

  // skills
  $('#skillGrid').innerHTML = C.skills.map(s => `<article class="skill" tabindex="0"><div class="ico">${ico(s.icon)}</div><div><h3>${esc(s.name)}</h3><span>${esc(s.cat)}</span></div></article>`).join('');

  // projects
  const wv = o => `<svg class="wave ${o}" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60Q150 0 300 60T600 60T900 60T1200 60V120H0Z" fill="rgba(111,240,255,${o ? .16 : .1})"/></svg>`;
  const art = {
    aqua: `<div class="art art-aqua"><i class="ring r1"></i><i class="ring r2"></i><i class="ring r3"></i><i class="ring r4"></i><i class="sweep"></i>
      <i class="blip" style="left:61%;top:34%"></i><i class="blip" style="left:35%;top:62%;animation-delay:-1s"></i><i class="blip" style="left:68%;top:66%;animation-delay:-2s"></i><i class="core"></i>${wv('')}${wv('w2')}</div>`,
    law: `<div class="art art-law"><div class="pg p1"></div><div class="pg p2"></div><div class="pg p3"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><u></u></div><b aria-hidden="true">&sect;</b></div>`
  };
  $('#projectList').innerHTML = C.projects.map((p, i) => {
    const gh = safeUrl(p.github), lv = safeUrl(p.live);
    return `<article class="project${i % 2 ? ' flip' : ''}">
      <div class="p-media"><div class="tilt">${art[p.art] || art.aqua}<span class="p-num">${String(i + 1).padStart(2, '0')} / ${String(C.projects.length).padStart(2, '0')}</span></div></div>
      <div class="p-info"><div class="kind">${esc(p.kind)}</div><h3 data-split="${esc(p.title)}" aria-label="${esc(p.title)}">${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p><div class="badges">${p.stack.map(s => `<span class="badge">${esc(s)}</span>`).join('')}</div>
        <div class="btns"${gh || lv ? '' : ' hidden'}>${lv ? A(lv, 'Live demo', 'btn glow', 'arrow-up-right') : ''}${gh ? A(gh, 'GitHub', lv ? 'btn' : 'btn glow', 'github') : ''}</div></div></article>`;
  }).join('');

  // education
  $('#timeline').insertAdjacentHTML('beforeend', C.education.map(e => `<div class="step"><span class="dot"></span><div class="card edu">
    <div class="yr">${esc(e.year)}</div><h3>${esc(e.title)}</h3><div class="where">${esc(e.where)}</div><p>${esc(e.desc)}</p></div></div>`).join(''));

  initCerts();

  // contact
  const c = C.contact;
  $('#bigText').innerHTML = `<span class="bl" style="display:block">Let's build</span><span class="bl l2" style="display:block">something</span><span class="bl" style="display:block"><em>amazing</em>.</span>`;
  if (c.email) $('#mailBox').innerHTML = `<span class="addr" id="addr">${esc(c.email)}</span><button class="copy" id="copyBtn" aria-label="Copy email address">${ico('copy')}</button><a class="btn glow" href="mailto:${esc(c.email)}">${ico('mail')}Send a mail</a>`;
  const soc = [['github', 'GitHub', c.github], ['linkedin', 'LinkedIn', c.linkedin], ['instagram', 'Instagram', c.instagram]].filter(s => safeUrl(s[2]));
  $('#socials').innerHTML = soc.map(([i, l, u]) => `<a class="soc" href="${esc(u)}" target="_blank" rel="noopener noreferrer" aria-label="${l}"><span>${ico(i)}</span>${l}</a>`).join('');
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}


/* ---------- certificates: grid, filters, viewer ---------- */
function initCerts() {
  const C = CONFIG, grid = $('#certGrid'), fl = $('#filters'), lb = $('#lb'), cats = C.certCats;
  const count = k => k === 'all' ? C.certificates.length : C.certificates.filter(c => c.cat === k).length;
  fl.innerHTML = Object.entries(cats).map(([k, l], i) => `<button class="fbtn" data-cat="${k}" aria-pressed="${i === 0}">${esc(l)}<span>${count(k)}</span></button>`).join('');
  grid.innerHTML = C.certificates.map((c, i) => `<button class="cert${c.feat ? ' feat' : ''}" data-i="${i}" data-cat="${c.cat}" aria-label="View certificate: ${esc(c.title)}">
    <span class="c-img"><img src="certs/${c.slug}${c.feat ? '' : '-t'}.jpg" alt="" loading="${i < 4 ? 'eager' : 'lazy'}" decoding="async"></span>
    <span class="c-meta">${c.feat ? `<span class="star">${ico('award')}Featured</span>` : ''}<span class="c-cat">${esc(cats[c.cat])}</span><span class="c-title">${esc(c.title)}</span><span class="c-date">${esc(c.issuer)} · ${esc(c.date)}</span>${c.feat ? '<p class="feat-note">Certificate of Participation, organized by the School of Computational Intelligence, Joy University.</p>' : ''}</span></button>`).join('');
  $('#certLede').textContent = `${C.certificates.length} certificates so far. Open any one to see the full document` + (C.certificates.some(c => c.verify) ? ' and verify it.' : '.');

  fl.addEventListener('click', e => {
    const b = e.target.closest('.fbtn'); if (!b) return;
    $$('.fbtn', fl).forEach(x => x.setAttribute('aria-pressed', x === b));
    const k = b.dataset.cat;
    $$('.cert', grid).forEach(c => { c.hidden = !(k === 'all' || c.dataset.cat === k); });
    const vis = $$('.cert:not([hidden])', grid);
    if (window.gsap && !reduce) gsap.fromTo(vis, { opacity: 0, y: 30, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: .7, stagger: .05, ease: 'power3.out', overwrite: true, clearProps: 'transform' });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
  grid.addEventListener('pointermove', e => {
    const c = e.target.closest('.cert'); if (!c) return;
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  let list = [], cur = 0, last = null;
  const img = $('#lbImg');
  const visible = () => $$('.cert:not([hidden])', grid).map(b => +b.dataset.i);
  function show(i, dir = 0) {
    const c = C.certificates[i]; cur = i;
    img.src = 'certs/' + c.slug + '.jpg'; img.alt = c.title + ' certificate';
    $('#lbTitle').textContent = c.title;
    $('#lbMeta').textContent = [c.kind, c.issuer, c.date, c.by ? c.by + (c.role ? ' (' + c.role + ')' : '') : ''].filter(Boolean).join(' · ');
    const v = $('#lbVerify');
    if (c.verify) { v.hidden = false; v.href = c.verify; v.innerHTML = ico('shield-check') + 'Verify on Coursera'; if (window.lucide) try { lucide.createIcons(); } catch (e) { } } else v.hidden = true;
    $('#lbCount').textContent = String(list.indexOf(i) + 1).padStart(2, '0') + ' / ' + String(list.length).padStart(2, '0');
    if (window.gsap && !reduce) gsap.fromTo(img, { opacity: 0, x: dir * 70, scale: .95 }, { opacity: 1, x: 0, scale: 1, duration: .6, ease: 'power3.out' });
    [-1, 1].forEach(d => { const n = list[(list.indexOf(i) + d + list.length) % list.length]; if (n != null) new Image().src = 'certs/' + C.certificates[n].slug + '.jpg'; });
  }
  function open(i, btn) {
    last = btn; list = visible(); lb.hidden = false;
    document.documentElement.style.overflow = 'hidden'; if (lenis) lenis.stop();
    if (window.gsap && !reduce) { gsap.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: .35 }); gsap.from('.lb-bar', { y: 50, opacity: 0, duration: .7, delay: .1, ease: 'power3.out' }); }
    show(i); $('#lbX').focus();
  }
  function close() {
    const done = () => { lb.hidden = true; document.documentElement.style.overflow = ''; if (lenis) lenis.start(); if (last) last.focus(); };
    if (window.gsap && !reduce) gsap.to(lb, { opacity: 0, duration: .25, onComplete: done }); else done();
  }
  const step = d => { const k = list.indexOf(cur); show(list[(k + d + list.length) % list.length], d); };
  grid.addEventListener('click', e => { const b = e.target.closest('.cert'); if (b) open(+b.dataset.i, b); });
  $('#lbX').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', () => step(-1));
  $('#lbNext').addEventListener('click', () => step(1));
  lb.addEventListener('click', e => { if (e.target.matches('[data-close]') || e.target.matches('.lb-fig')) close(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'Tab') {
      const f = ['#lbX', '#lbPrev', '#lbNext', '#lbVerify'].map(s => $(s)).filter(x => x && !x.hidden);
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  let sx = 0;
  lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1); }, { passive: true });
}

/* ---------- UI: nav, menu, scrolling, copy ---------- */
let lenis = null;
function scrollToTarget(hash) {
  const el = hash === '#top' ? 0 : $(hash);
  if (el === null) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.5, offset: 0 });
  else (el === 0 ? scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }) : el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));
}
function initUI() {
  const nav = $('#nav'), burger = $('#burger'), sheet = $('#sheet'), bar = $('#progress');
  const setMenu = o => { sheet.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); document.documentElement.style.overflow = o ? 'hidden' : ''; };
  burger.addEventListener('click', () => setMenu(!sheet.classList.contains('open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-nav]'); if (!a) return;
    e.preventDefault(); setMenu(false);
    setTimeout(() => scrollToTarget(a.getAttribute('href')), sheet.classList.contains('open') ? 0 : 0);
  });
  const onScroll = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    bar.style.transform = `scaleX(${Math.min(1, scrollY / max)})`;
    nav.classList.toggle('solid', scrollY > 40);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) $$('.links a').forEach(a => a.classList.toggle('on', a.dataset.spy === en.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    NAV.forEach(([id]) => { const s = $('#' + id); if (s) io.observe(s); });
  }
  const copy = $('#copyBtn');
  if (copy) copy.addEventListener('click', async () => {
    const t = $('#toast');
    try { await navigator.clipboard.writeText(CONFIG.contact.email); t.textContent = 'Email copied'; }
    catch (e) { const r = document.createRange(); r.selectNodeContents($('#addr')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); t.textContent = 'Email selected, press copy'; }
    t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 1800);
  });
}

/* ---------- WebGL: a starfield that travels with the scroll ---------- */
function initScene() {
  if (!window.THREE) return;
  const cv = $('#bg'); let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true, powerPreference: 'high-performance' }); } catch (e) { return; }
  const small = innerWidth < 720;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.5 : 1.8));
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(55, 1, .1, 300);
  cam.position.set(0, 0, 16);

  const sc = document.createElement('canvas'); sc.width = sc.height = 64;
  const g = sc.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(sc);

  const N = small ? 900 : 2200, P = new Float32Array(N * 3), Cl = new Float32Array(N * 3);
  const pal = ['#ff6a1a', '#ff6a1a', '#f6b93b', '#ffffff', '#6ff0ff'].map(h => new THREE.Color(h));
  for (let i = 0; i < N; i++) {
    P[i * 3] = (Math.random() - .5) * 74; P[i * 3 + 1] = 24 - Math.random() * 150; P[i * 3 + 2] = (Math.random() - .5) * 54 - 8;
    const c = pal[Math.floor(Math.random() * pal.length)]; Cl[i * 3] = c.r; Cl[i * 3 + 1] = c.g; Cl[i * 3 + 2] = c.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(P, 3)); geo.setAttribute('color', new THREE.BufferAttribute(Cl, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: small ? .5 : .42, map: tex, vertexColors: true, transparent: true, opacity: .85, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(pts);

  const wire = (geom, color, op) => new THREE.Mesh(geom, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: op, depthWrite: false }));
  const knot = wire(new THREE.TorusKnotGeometry(3.4, .9, small ? 90 : 160, 10), 0xff6a1a, .32); knot.position.set(0, 0, -4); scene.add(knot);
  const ico = wire(new THREE.IcosahedronGeometry(3.2, 1), 0xf6b93b, .28); ico.position.set(small ? 4 : 9, -30, -6); scene.add(ico);
  const ring = wire(new THREE.TorusGeometry(5, .08, 8, 90), 0xf6b93b, .5); ring.position.set(0, -92, -3); scene.add(ring);
  const ring2 = wire(new THREE.TorusGeometry(7.5, .05, 8, 120), 0xff6a1a, .4); ring2.position.set(0, -92, -3); scene.add(ring2);
  if (small) knot.scale.setScalar(.7);

  const resize = () => { renderer.setSize(innerWidth, innerHeight, false); cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); };
  resize(); addEventListener('resize', resize);
  let tx = 0, ty = 0, mx = 0, my = 0;
  addEventListener('pointermove', e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; }, { passive: true });

  const draw = t => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight), p = Math.min(1, scrollY / max);
    cam.position.y += (-p * 90 - cam.position.y) * .08;
    mx += (tx - mx) * .05; my += (ty - my) * .05;
    cam.position.x = mx * 2.4; cam.rotation.y = -mx * .1; cam.rotation.x = -my * .06;
    knot.rotation.x = t * .00016; knot.rotation.y = t * .00022;
    ico.rotation.x = t * .0002; ico.rotation.y = -t * .00026;
    ring.rotation.x = 1.1 + t * .00012; ring2.rotation.y = t * .00018; ring2.rotation.x = .6;
    pts.rotation.y = t * .000018;
    renderer.render(scene, cam);
  };
  if (reduce) { draw(0); return; }
  const loop = t => { if (!document.hidden) draw(t); requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
}

/* ---------- Motion: one unique choreography per scene ---------- */
function initMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const step = (name, fn) => { try { fn(); } catch (e) { console.warn('motion:' + name, e); } };
  const desktop = innerWidth >= 900;

  if (window.Lenis) step('lenis', () => {
    lenis = new Lenis({ lerp: .1, wheelMultiplier: .95 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  });

  // SCENE 1: hero, letters flip in, portrait zooms out of a blur
  step('hero', () => {
    const c1 = split($('#n1'), CONFIG.name[0].toUpperCase()), c2 = split($('#n2'), CONFIG.name[1].toUpperCase());
    const fit = () => {
      const wr = $('.hero .wrap'), cs = getComputedStyle(wr), W = (Math.min(wr.clientWidth, innerWidth) - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)) * .96, cap = document.body.classList.contains('no-photo') ? innerHeight * .3 : $('#stage').clientHeight * .4;
      ['#n1', '#n2'].forEach(s => { const el = $(s); el.style.fontSize = '100px'; const w = el.getBoundingClientRect().width || 1; el.style.fontSize = Math.min(100 * W / w, cap) + 'px'; });
    };
    fit(); addEventListener('resize', fit); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('#nav', { y: -40, opacity: 0, duration: 1.2 }, .2)
      .from('.hero .glow', { scale: .3, opacity: 0, duration: 2.4, ease: 'power2.out', stagger: .3 }, 0)
      .from('#welcome .w', { y: 24, opacity: 0, stagger: .14, duration: 1.1 }, .3)
      .from('#heroPortrait', { scale: 1.45, opacity: 0, filter: 'blur(22px)', duration: 2.2, ease: 'expo.out' }, .35)
      .from(c1, { yPercent: 110, rotationX: -100, opacity: 0, transformOrigin: '50% 100% -40px', stagger: .07, duration: 1.3 }, .7)
      .from(c2, { yPercent: -110, rotationX: 100, opacity: 0, transformOrigin: '50% 0% -40px', stagger: .07, duration: 1.3 }, 1)
      .from('.intro > *', { y: 36, opacity: 0, stagger: .16, duration: 1.1 }, 1.9);
    const st = { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true };
    gsap.to('#n1', { yPercent: -34, ease: 'none', scrollTrigger: st });
    gsap.to('#n2', { yPercent: 18, ease: 'none', scrollTrigger: st });
    gsap.to('#heroPortrait', { yPercent: -4, scale: 1.06, transformOrigin: '50% 100%', ease: 'none', scrollTrigger: st });
    gsap.to('.hero .glow', { yPercent: 40, opacity: .2, ease: 'none', scrollTrigger: st });
    gsap.to('.intro', { opacity: 0, y: -40, ease: 'none', scrollTrigger: { trigger: '#hero', start: '55% top', end: 'bottom top', scrub: true } });
  });

  // SCENE 2: manifesto, pinned; words light up one by one
  step('manifesto', () => {
    const words = $$('#mfText .w'); $('#mfText').classList.add('armed');
    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    words.forEach((w, i) => tl.to(w, { color: w.classList.contains('hot') ? '#f6b93b' : '#f5f1ea', duration: 1 }, i * .55));
    tl.from('#mfTag', { opacity: 0, x: -40, duration: 1.5 }, 0);
    ScrollTrigger.create({ trigger: '#manifesto', start: 'top top', end: () => '+=' + Math.round(innerHeight * (desktop ? 1.7 : 1.3)), pin: true, scrub: .6, animation: tl, anticipatePin: 1 });
  });

  // SCENE 3: about, clip-path reveal and text rising from masks
  step('about', () => {
    const t = { trigger: '#about', start: 'top 68%' };
    gsap.from('#aboutPortrait', { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.25, duration: 1.7, ease: 'expo.out', scrollTrigger: t });
    gsap.to('#aboutPortrait svg, #aboutPortrait img', { yPercent: -7, scale: 1.12, ease: 'none', scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from('#aboutTitle .mask > span', { yPercent: 115, rotation: 4, duration: 1.3, stagger: .15, ease: 'power4.out', scrollTrigger: t });
    gsap.from('#aboutBio', { y: 40, opacity: 0, filter: 'blur(8px)', duration: 1.3, delay: .3, ease: 'power3.out', scrollTrigger: t });
    gsap.from('#facts > div', { y: 40, opacity: 0, stagger: .15, duration: 1, delay: .5, ease: 'power3.out', scrollTrigger: t });
    gsap.from('.float-ico', { scale: 0, rotation: -40, opacity: 0, stagger: .12, duration: 1.1, delay: .6, ease: 'back.out(2)', scrollTrigger: t });
    $$('.float-ico').forEach(el => {
      gsap.to(el, { x: 'random(-14,14)', y: 'random(-20,20)', rotation: 'random(-9,9)', duration: 'random(2.6,4.2)', repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to(el, { yPercent: -35 * el.dataset.depth, ease: 'none', scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  });

  // SCENE 4: skills, cards fly in from depth, then drift; cursor tilt
  step('skills', () => {
    const cards = $$('.skill');
    gsap.from(cards, {
      opacity: 0, z: -420, rotationX: -55, y: 90, transformPerspective: 900, duration: 1.4, ease: 'power4.out',
      stagger: { amount: 1, from: 'random' }, scrollTrigger: { trigger: '#skillGrid', start: 'top 82%' },
      onComplete: () => cards.forEach(c => gsap.to(c, { y: 'random(-9,9)', duration: 'random(2.4,4)', repeat: -1, yoyo: true, ease: 'sine.inOut' }))
    });
    cards.forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', x * 100 + '%'); card.style.setProperty('--my', y * 100 + '%');
        gsap.to(card, { rotationY: (x - .5) * 16, rotationX: -(y - .5) * 16, transformPerspective: 800, duration: .5, ease: 'power2.out', overwrite: 'auto' });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: .8, ease: 'power3.out' }));
    });
  });

  // SCENE 5: projects, each scrubs in with scale and a slight rotation
  step('projects', () => {
    $$('.project').forEach((p, i) => {
      const media = $('.p-media', p), tilt = $('.tilt', p), art = $('.art', p), h3 = $('h3', p);
      const dir = p.classList.contains('flip') ? 1 : -1;
      gsap.fromTo(media, { scale: .8, rotation: dir * 4, y: 90, opacity: .15 }, { scale: 1, rotation: 0, y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: p, start: 'top 88%', end: 'top 38%', scrub: .7 } });
      gsap.fromTo(art, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'bottom top', scrub: true } });
      const chars = split(h3, h3.dataset.split.toUpperCase());
      const t = { trigger: p, start: 'top 62%' };
      gsap.from(chars, { yPercent: 120, rotationX: -80, opacity: 0, transformOrigin: '50% 100%', stagger: .035, duration: 1.1, ease: 'power4.out', scrollTrigger: t });
      gsap.from($$('.kind,.p-info p,.badge,.btn', p), { y: 30, opacity: 0, stagger: .07, duration: .9, delay: .25, ease: 'power3.out', scrollTrigger: t });
      if (desktop) {
        tilt.addEventListener('pointermove', e => {
          const r = tilt.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
          gsap.to(tilt, { rotationY: x * 14, rotationX: -y * 12, transformPerspective: 1100, duration: .6, ease: 'power2.out', overwrite: 'auto' });
        });
        tilt.addEventListener('pointerleave', () => gsap.to(tilt, { rotationX: 0, rotationY: 0, duration: .9, ease: 'power3.out' }));
      }
    });
  });

  // SCENE 6: education, glowing line draws, years count up
  step('education', () => {
    gsap.to('#railFill', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#timeline', start: 'top 62%', end: 'bottom 72%', scrub: .5 } });
    $$('.step').forEach((s, i) => {
      const card = $('.card', s), dot = $('.dot', s), yr = $('.yr', s);
      const side = innerWidth < 760 ? 1 : (i % 2 ? 1 : -1);
      const t = { trigger: s, start: 'top 72%' };
      gsap.from(card, { x: side * 90, opacity: 0, filter: 'blur(10px)', duration: 1.3, ease: 'power4.out', scrollTrigger: t });
      gsap.from(dot, { scale: 0, duration: .8, ease: 'back.out(3)', scrollTrigger: t });
      gsap.from(yr, { yPercent: 100, opacity: 0, duration: 1, ease: 'power4.out', scrollTrigger: t });
    });
  });

  // SCENE 7: certificates, cards rise in with depth; cursor tilt on desktop
  step('certs', () => {
    gsap.from('#filters .fbtn', { y: 24, opacity: 0, stagger: .07, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '#filters', start: 'top 90%' } });
    $$('.cert').forEach(c => {
      gsap.from(c, { opacity: 0, y: 80, rotationX: -22, transformPerspective: 900, duration: 1.2, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 93%' } });
      if (desktop && !c.classList.contains('feat')) {
        c.addEventListener('pointermove', e => {
          const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
          gsap.to(c, { rotationY: x * 9, rotationX: -y * 8, transformPerspective: 900, duration: .5, ease: 'power2.out', overwrite: 'auto' });
        });
        c.addEventListener('pointerleave', () => gsap.to(c, { rotationX: 0, rotationY: 0, duration: .8, ease: 'power3.out' }));
      }
    });
  });

  // SCENE 8: contact, words slam in from the camera, horizon rises
  step('contact', () => {
    const chars = [];
    $$('#bigText .bl').forEach(el => {
      const html = el.innerHTML; // keep the <em> wrapper for the last line
      if (el.querySelector('em')) { chars.push(...split($('em', el), $('em', el).textContent)); }
      else chars.push(...split(el, el.textContent));
    });
    const t = { trigger: '#contact', start: 'top 55%' };
    gsap.from(chars, { scale: 2.8, opacity: 0, filter: 'blur(22px)', stagger: .035, duration: 1.3, ease: 'expo.out', scrollTrigger: t });
    gsap.from('.c-row > *, .soc', { y: 40, opacity: 0, stagger: .1, duration: 1, delay: .6, ease: 'power3.out', scrollTrigger: t });
    gsap.fromTo('#horizon', { yPercent: 45, opacity: .1 }, { yPercent: 0, opacity: .9, ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'center center', scrub: true } });
    gsap.from('.foot', { opacity: 0, duration: 1.2, scrollTrigger: { trigger: '.foot', start: 'top 98%' } });
  });

  addEventListener('load', () => ScrollTrigger.refresh());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
}

/* ---------- boot ---------- */
render();
initUI();
initScene();
if (!reduce) initMotion();
