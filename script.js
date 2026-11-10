const P=[['home','HOME','🏠'],['about','ABOUT','🧍'],['education','LIBRARY','📚'],['skills','SKILLS','💎'],['projects','CHEST','📦'],['certificates','CERTS','🏆'],['contact','VILLAGE','🏘']];
const $=id=>document.getElementById(id);
$('hb').innerHTML=P.map(p=>`<button data-p="${p[0]}" title="${p[1]}"><em>${p[2]}</em>${p[1]}</button>`).join('');
$('hr').innerHTML='<i class="h"></i>'.repeat(10);
function go(n){const e=$('p-'+n);e&&e.scrollIntoView({behavior:'smooth',block:'start'})}
function setActive(n){document.querySelectorAll('#hb button').forEach(b=>b.classList.toggle('on',b.dataset.p===n));$('lv').textContent='LV '+(P.findIndex(p=>p[0]===n)+1)}
document.querySelectorAll('#hb button').forEach(b=>b.onclick=()=>go(b.dataset.p));
// skills
const S=[['Py','Python','dia','Scripting & core programming. Also my main language for ML work.'],['Git','Git','irn','Version control.'],['GH','GitHub','irn','Code hosting and collaboration.'],['Fl','Flask','eme','Python web framework.'],['SQL','MySQL / SQL','dia','Complex queries, joins, database design — my strongest skill.'],['Np','NumPy','gld','Numerical computing in Python.'],['Pd','Pandas','gld','Data analysis and cleaning.'],['Sk','Scikit-learn','eme','Machine learning in Python.'],['CV','Computer Vision','red','Image and gesture recognition.'],['</>','HTML','red','Web page structuring.'],['C','C','irn','Procedural programming.']];
$('inv').innerHTML=S.map((s,i)=>`<button class="slot" data-i="${i}"><b class="${s[2]}" style="color:#000">${s[0]}</b>${s[1].split(' ')[0]}</button>`).join('');
document.querySelectorAll('.slot').forEach(b=>b.onclick=()=>{document.querySelectorAll('.slot').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');const s=S[b.dataset.i];$('tip').innerHTML=`<h4>${s[1]}</h4><p style="color:#ddd">${s[3]}</p>`;addXP()});
// projects
// certs & achievements
const C=[['Software Engineering','NPTEL Online Certification, IIT Kharagpur (Swayam) · Jul – Oct 2025','dia'],['The Rapid Learning Advantage','Victory with Ash (training program by Ashraf Mufareh) · Aug 28, 2026','eme'],['QuizOff 2026','India\'s Biggest AI Quiz · CampusCrew x Unstop','gld'],['Virtual Internship in AI & ML (120 hrs)','SmartBridge Educational Services, in collaboration with APSCHE · Aug 2026','dia']];
$('certs').innerHTML=C.map((c,i)=>`<div class="adv" style="animation-delay:${i*.12}s"><div class="ic ${c[2]}">★</div><div><small>Advancement Made!</small><h4>${c[0]}</h4><p>${c[1]}</p></div></div>`).join('');
const A=[['Medal Winner — "Ffsal" Competition',''],['Winner — Prompt Engineering Competition',''],['The Rapid Learning Advantage','Victory with Ash · Aug 28, 2026'],['QuizOff 2026: India\'s Biggest AI Quiz','CampusCrew x Unstop'],['Virtual Internship in AI & ML (120 hrs)','SmartBridge Educational Services, with APSCHE · Aug 2026']];
$('achs').innerHTML=A.map((a,i)=>`<div class="adv" style="animation-delay:${i*.12}s"><div class="ic gld">🏅</div><div><small>Goal Reached!</small><h4>${a[0]}</h4><p>${a[1]}</p></div></div>`).join('');
// contact form
// xp / day-night / particles
let xp=0;function addXP(){xp=Math.min(100,xp+10)}
let night=false;function setT(n){night=n;document.body.dataset.t=n?'night':'day'}
$('dn').onclick=()=>setT(!night);setInterval(()=>setT(!night),45000);
const cols=['#7f3','#4ee6e0','#ffe45c','#2ecc5a'];
for(let i=0;i<14;i++){const d=document.createElement('i');d.className='pt';d.style.cssText=`left:${Math.random()*100}vw;background:${cols[i%4]};animation-duration:${10+Math.random()*14}s;animation-delay:-${Math.random()*20}s`;document.body.appendChild(d)}
const pgs=[...document.querySelectorAll('.page')];
pgs.slice(0,-1).forEach(p=>p.insertAdjacentHTML('afterend','<div class="sep"></div>'));
document.querySelectorAll('.page>*:not(.hero)').forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const ao=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id.slice(2))}),{rootMargin:'-45% 0px -50% 0px'});
pgs.forEach(p=>ao.observe(p));
let tk=0;addEventListener('scroll',()=>{if(tk)return;tk=requestAnimationFrame(()=>{tk=0;const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;$('xpb').style.width=(m>0?y/m*100:0)+'%';document.documentElement.style.setProperty('--py',y);$('bt').classList.toggle('show',y>500)})},{passive:true});
$('bt').onclick=()=>scrollTo({top:0,behavior:'smooth'});
const PAL={K:'#1b1b1b',W:'#fff',Y:'#ffd43b',B:'#3776ab',O:'#f05032',D:'#d0d0d0',G:'#3fbf4f',N:'#1d4f7a',P:'#f29111',T:'#8fd0ff',L:'#4d77cf',R:'#1a3a6b',S:'#c58a63',H:'#24292e'};
const K2=[
['Python',['..BBBB..','..BWBB..','.BBBBBB.','YYYYBBB.','.BBBYYYY','.YYYYYY.','..YYWY..','..YYYY..'],'Scripting & core programming — the language behind my AI/ML work.'],
['Git',['...OO...','..OOOO..','.OOWOOO.','OOOWOOOO','OOOWWWOO','.OOWOOO.','..OOOO..','...OO...'],'Version control for tracking changes and working with others.'],
['GitHub',['H..HH..H','HHHHHHHH','HHWHHWHH','HHHHHHHH','HHHHHHHH','.HHHHHH.','..HHHH..','..H..H..'],'Hosting code, collaborating and showcasing projects.'],
['Flask API',['..DDDD..','...DD...','...DD...','..GGGG..','.GGGGGG.','.GGWGGG.','GGGGGGGG','GGGGGGGG'],'Building Python web apps and APIs.'],
['MySQL',['.PPPPPP.','PBBBBBBP','NNNNNNNN','BBBBBBBB','NNNNNNNN','BBBBBBBB','NNNNNNNN','.BBBBBB.'],'Relational databases: complex queries, joins and database design.'],
['NumPy',['...TT...','.TTTTTT.','TTTTTTTT','LLLLRRRR','LLLLRRRR','LLLLRRRR','.LLLRRR.','...LR...'],'Numerical computing and array maths in Python.'],
['Pandas',['KK....KK','KKWWWWKK','.WWWWWW.','WKKWWKKW','WWWKKWWW','WWWWWWWW','.WWKKWW.','..WWWW..'],'Data analysis, cleaning and manipulation.'],
['Scikit-learn',['..OOOO..','.OOOOOB.','OOWWOOBB','OOWOOOBB','OOOOOBBB','.OOOBBB.','..BBBB..','........'],'Machine learning models in Python.'],
['Computer Vision',['........','..WWWW..','.WWBBWW.','WWBKKBWW','WWBKKBWW','.WWBBWW.','..WWWW..','........'],'Image and gesture recognition, as in my Hand Gesture-Based Subway Surfers Controller.'],
['Problem Solving',['..YYYY..','.YYYYYY.','.YYWYYY.','.YYYYYY.','..YYYY..','..DDDD..','..DDDD..','...DD...'],'Strong logical reasoning and analytical thinking.'],
['Communication',['WWWWWWWW','WWWWWWWW','WKWKWKWW','WWWWWWWW','WWWWWWWW','.WWWWWW.','..WW....','..W.....'],'Effective communicator.'],
['Team Collaboration',['.SS..SS.','.SS..SS.','BBBBGGGG','BBBBGGGG','BBBBGGGG','.BB..GG.','.BB..GG.','.KK..KK.'],'Collaborative, team-oriented approach.']];
function ico(m){let r='';m.forEach((row,y)=>[...row].forEach((c,x)=>{if(c!=='.')r+=`<rect x="${x}" y="${y}" width="1" height="1" fill="${PAL[c]}"/>`}));return `<svg viewBox="0 0 8 8" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`}
$('inv').innerHTML=K2.map((s,i)=>`<div class="cell"><button class="sk" data-i="${i}" aria-label="${s[0]}">${ico(s[1])}</button><span>${s[0]}</span></div>`).join('');
document.querySelectorAll('.sk').forEach(b=>b.onclick=()=>{document.querySelectorAll('.sk').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');const s=K2[b.dataset.i];$('tip').innerHTML=`<h4>${s[0]}</h4><p style="color:#ddd">${s[2]}</p>`;addXP()});
const PT=['Developed a touch-free game controller that uses a camera to capture hand movements and recognize gestures.','Mapped recognized gestures to Subway Surfers actions, including moving left, moving right, jumping, and sliding.','Connected gesture recognition with game commands to provide an interactive alternative to keyboard controls.','Applied computer vision concepts to a real-time gaming use case, focusing on gesture detection and input mapping.'];
$('chests').innerHTML='<button class="bigchest" id="chest" aria-label="Open featured project"><div class="fbadge">\u25c6 FEATURED PROJECT \u25c6</div><div class="bc"></div><div class="ct">HAND GESTURE-BASED<br>SUBWAY SURFERS CONTROLLER</div><div class="hint">\u25bc CLICK TO OPEN \u25bc</div></button>';
$('mb').classList.add('fp');
function cm(){$('md').classList.remove('on')}
$('chest').onclick=()=>{$('mb').innerHTML=`<div class="fbadge" style="margin-bottom:14px">\u25c6 FEATURED PROJECT \u25c6</div><h2>Hand Gesture-Based Subway Surfers Controller</h2><div class="ticons"><span class="ti">${ico(K2[0][1])}Python</span><span class="ti">${ico(K2[8][1])}Computer Vision</span><span class="ti">Hand Gesture Recognition</span></div><ul>${PT.map(x=>`<li><p>${x}</p></li>`).join('')}</ul><div class="lk"><button class="btn" id="cl">Close</button></div>`;$('md').classList.add('on');$('cl').onclick=cm;addXP()};
$('md').onclick=e=>{if(e.target.id==='md')cm()};
addEventListener('keydown',e=>{if(e.key==='Escape')cm()});
const ICM={mail:['KKKKKKKK','KKWWWWKK','KWKWWKWK','KWWKKWWK','KWWWWWWK','KWWWWWWK','KWWWWWWK','KKKKKKKK'],gh:K2[2][1],li:['BBBBBBBB','BWBBBBBB','BBBBBBBB','BWBWWWBB','BWBWBBWB','BWBWBBWB','BWBWBBWB','BBBBBBBB']};
document.querySelectorAll('.bi').forEach(e=>e.innerHTML=ico(ICM[e.dataset.ic]));
setActive('home');
