window.EmpowHerSimulation = {
 answers:[],scores:{},
 render(){
  const root=document.getElementById("simulation-container");const data=EmpowHerData.scenarios;const n=this.answers.length;
  if(n>=data.length){this.showResults();return;}
  const s=data[n];root.innerHTML=`<div class="simulation-progress"><span>Question ${n+1} of ${data.length}</span><div class="meter-track"><div class="meter-fill" style="width:${n/data.length*100}%"></div></div><span>${Math.round(n/data.length*100)}%</span></div><div class="scenario-card"><span class="scenario-number">REAL-WORLD SCENARIO ${String(n+1).padStart(2,"0")}</span><h3>${s.q}</h3><p>${s.context}</p><div>${s.options.map((o,i)=>`<button class="answer-option" data-index="${i}">${String.fromCharCode(65+i)}. ${o.text}</button>`).join("")}</div><p class="small muted">There are no right or wrong answers. Choose what feels natural to you.</p>${n?'<button class="btn btn-secondary btn-sm" id="back-question">← Previous question</button>':""}</div>`;
  root.querySelectorAll(".answer-option").forEach(b=>b.addEventListener("click",()=>{this.answers[n]=Number(b.dataset.index);this.scores[s.options[Number(b.dataset.index)].type]=(this.scores[s.options[Number(b.dataset.index)].type]||0)+1;this.render();}));
  const back=document.getElementById("back-question");if(back)back.addEventListener("click",()=>{const previous=this.answers.pop();const old=data[n-1].options[previous].type;this.scores[old]--;this.render();});
 },
 showResults(){
  const sorted=Object.entries(this.scores).sort((a,b)=>b[1]-a[1]);const primary=EmpowHerData.archetypes[sorted[0]?.[0]||"learner"];const secondary=sorted[1]?EmpowHerData.archetypes[sorted[1][0]]:null;
  localStorage.setItem("empowher_strength",primary.name);localStorage.setItem("empowher_strength_desc",primary.desc);
  document.getElementById("simulation-container").innerHTML=`<div class="scenario-card"><span class="scenario-number">YOUR REFLECTION SUMMARY</span><div class="result-panel"><h4>${primary.icon} ${primary.name}</h4><p>${primary.desc}</p><strong>Areas you could explore</strong><ul>${primary.ideas.map(x=>`<li>${x}</li>`).join("")}</ul>${secondary?`<p><strong>Another strength to explore:</strong> ${secondary.name}</p>`:""}<p class="small">This is a reflection activity, not a formal aptitude test. Explore several options before deciding.</p></div><div class="hero-cta-group"><button class="btn btn-primary" onclick="DishaApp.switchTab('margdarshan')">Explore pathways →</button><button class="btn btn-secondary" onclick="EmpowHerSimulation.restart()">Try again</button><button class="btn btn-outline" onclick="DishaApp.switchTab('pragati')">Make my action card</button></div></div>`;
  DishaApp.updateReadiness();
 },
 restart(){this.answers=[];this.scores={};this.render();}
};