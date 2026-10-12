window.DishaApp = {
 currentFilter:"all",
 switchTab(tab){
  document.querySelectorAll(".tab-section").forEach(s=>s.classList.toggle("active",s.id==="tab-"+tab));
  document.querySelectorAll(".nav-tab-btn").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  if(tab==="pragati"){EmpowHerReport.render();EmpowHerReport.refresh();}
  window.scrollTo({top:0,behavior:"smooth"});
 },
 readiness(){
  const quests=JSON.parse(localStorage.getItem("empowher_quests")||"[]").length;
  const discovered=localStorage.getItem("empowher_strength")?1:0;
  return Math.min(100,20+Math.round(discovered*30)+Math.round(quests/EmpowHerData.quests.length*50));
 },
 updateReadiness(){
  const score=this.readiness();
  ["header-readiness-score","hero-readiness-percent"].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=score+"%";});
  const bar=document.getElementById("hero-readiness-bar-fill");if(bar)bar.style.width=score+"%";
  EmpowHerReport.refresh();
 },
 renderPathways(){
  const list=EmpowHerData.pathways.filter(p=>this.currentFilter==="all"||p.type===this.currentFilter);
  document.getElementById("pathways-grid").innerHTML=list.map(p=>`<article class="content-card"><div class="card-topline"><div class="card-icon">${p.icon}</div><span class="tag">${p.tag}</span></div><h3>${p.name}</h3><p>${p.desc}</p><div class="detail-list"><div class="detail-row"><strong>Duration:</strong> ${p.duration}</div><div class="detail-row"><strong>Cost:</strong> ${p.cost}</div><div class="detail-row"><strong>Entry:</strong> ${p.entry}</div></div><p><strong>What to do next:</strong> ${p.next}</p><button class="btn btn-secondary btn-sm" onclick="DishaApp.showPathwayTips('${p.id}')">Questions to ask →</button></article>`).join("");
 },
 filterPathways(filter){this.currentFilter=filter;document.querySelectorAll(".filter-btn-path").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));this.renderPathways();},
 showPathwayTips(id){const p=EmpowHerData.pathways.find(x=>x.id===id);this.openModal("Before choosing: "+p.name,`<p>Take these questions to a trusted teacher, counsellor or institution:</p><ul><li>Is this course/institution officially recognised?</li><li>What are the current entry requirements and deadlines?</li><li>What is the full cost, including transport, materials and exam fees?</li><li>What further-study and employment options are realistic?</li><li>Are there scholarships, fee concessions or hostel support?</li></ul><p><strong>Pathway note:</strong> ${p.next}</p>`);},
 renderScholarships(){
  const cat=document.getElementById("filter-sc-category").value,gender=document.getElementById("filter-sc-gender").value;
  const list=EmpowHerData.scholarships.filter(s=>(cat==="all"||s.categories.includes(cat))&&(gender!=="girls"||s.girls));
  document.getElementById("scholarships-grid").innerHTML=list.length?list.map(s=>`<article class="content-card"><div class="card-topline"><div class="card-icon">${s.icon}</div><span class="tag">${s.girls?"Girls-focused info":"Scheme awareness"}</span></div><h3>${s.name}</h3><p>${s.desc}</p><div class="detail-row"><strong>Verify:</strong> ${s.check}</div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:auto"><button class="btn btn-secondary btn-sm" onclick="DishaApp.openModal('Application checklist',${JSON.stringify(s.check).replace(/'/g,"&#39;")})">Checklist</button><a class="btn btn-outline btn-sm" style="color:#2458d3;border-color:#d7dff3" href="${s.link}" target="_blank" rel="noopener noreferrer">Official portal ↗</a></div></article>`).join(""):'<div class="empty-state">No schemes match these filters. Try “All categories”.</div>';
 },
 filterScholarships(){this.renderScholarships();},
 resetScholarshipFilters(){document.getElementById("filter-sc-category").value="all";document.getElementById("filter-sc-gender").value="all";this.renderScholarships();},
 showCscHelp(){this.openModal("How to apply safely",`<p>A Common Service Centre (CSC) or school office may help you understand application steps, but always verify the scheme first.</p><ol><li>Start from the official portal linked on the scheme page.</li><li>Check class, income, category, marks, domicile and deadline rules.</li><li>Ask a parent/guardian or trusted teacher to help review the form.</li><li>Use only required documents on the official application process. Never share OTPs or passwords with anyone.</li><li>Keep the application/reference receipt if one is provided.</li><li>Do not pay an unknown person who promises guaranteed selection.</li></ol><p>Scheme details and deadlines change. The website does not submit applications or verify eligibility.</p>`);},
 renderQuests(){
  const done=JSON.parse(localStorage.getItem("empowher_quests")||"[]");
  document.getElementById("quests-grid").innerHTML=EmpowHerData.quests.map(q=>`<article class="quest-card ${done.includes(q.id)?"completed":""}"><div class="card-topline"><div class="card-icon">${q.icon}</div><span class="tag">${done.includes(q.id)?"Completed":"Practical quest"}</span></div><h3>${q.title}</h3><p>${q.desc}</p><label class="quest-check"><input type="checkbox" data-quest="${q.id}" ${done.includes(q.id)?"checked":""}> Mark as completed</label></article>`).join("");
  document.querySelectorAll("[data-quest]").forEach(c=>c.addEventListener("change",()=>{let current=JSON.parse(localStorage.getItem("empowher_quests")||"[]");if(c.checked&&!current.includes(c.dataset.quest))current.push(c.dataset.quest);if(!c.checked)current=current.filter(x=>x!==c.dataset.quest);localStorage.setItem("empowher_quests",JSON.stringify(current));this.renderQuests();this.updateReadiness();}));
 },
 askAssistant(topic){
  const answers={
   after10th:"There is no single best route for everyone. Compare Class 11–12, Polytechnic, ITI and recognised skill-based courses. Think about your interests, eligibility, costs, travel, learning style and future options. Discuss the shortlist with a trusted teacher or counsellor.",
   polytechnicVsIti:"Polytechnic is usually a longer technical diploma with broader engineering subjects; ITI focuses on specific practical trades and is often shorter. Exact durations and entry rules vary. Compare local institute recognition, hands-on facilities, costs and progression options.",
   scholarshipTips:"1) Use official government portals. 2) Check eligibility and deadlines carefully. 3) Keep only the required documents ready with a trusted adult. Never share OTPs/passwords or pay someone promising guaranteed selection.",
   lowBudget:"Ask about government schools and colleges, fee concessions, scholarships, hostel/transport support and apprenticeships. Compare total cost—not just tuition—and confirm every scheme and course with an official source before applying."
  };
  const el=document.getElementById("assistant-response");el.textContent=answers[topic]||"Ask a teacher or counsellor to help you compare your options.";},
 triggerAudioNarration(){const active=document.querySelector(".tab-section.active");if(!active)return;EmpowHerSpeech.speak(active.innerText.slice(0,3000));},
 toggleLanguage(){this.openModal("Language support",`<p>This demo's main interface is in English. A Hindi language toggle is planned, but full translations are not included in this version yet.</p><p>For a live deployment, add reviewed translations for all prompts, pathway descriptions, scholarship notes and screen-reader labels before advertising the site as bilingual.</p>`);},
 openModal(title,html){document.getElementById("modal-title").textContent=title;const content=document.getElementById("modal-content");if(typeof html==="string"&&html.startsWith("<"))content.innerHTML=html;else content.textContent=html;document.getElementById("generic-modal").classList.add("open");},
 closeModal(){document.getElementById("generic-modal").classList.remove("open");},
 init(){
  document.querySelectorAll(".nav-tab-btn").forEach(b=>b.addEventListener("click",()=>this.switchTab(b.dataset.tab)));
  this.renderPathways();this.renderScholarships();this.renderQuests();EmpowHerSimulation.render();this.updateReadiness();
  if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
 }
};
document.addEventListener("DOMContentLoaded",()=>DishaApp.init());
document.addEventListener("keydown",e=>{if(e.key==="Escape")DishaApp.closeModal();});