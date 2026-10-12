window.EmpowHerData = {
 scenarios: [
  {q:"Your school is preparing a small mela. What would you naturally enjoy doing?", context:"A team is setting up a school event and needs different kinds of help.", options:[
   {text:"Plan the tasks and make sure everyone knows what to do.",type:"organizer"},
   {text:"Make posters, decorations or an attractive stall.",type:"creator"},
   {text:"Talk to visitors and explain what the stall offers.",type:"communicator"},
   {text:"Check materials, solve setup problems and make things work.",type:"problemSolver"}]},
  {q:"A neighbour's solar lamp has stopped working. What would you try first?",context:"You have permission to help, and an adult is nearby.",options:[
   {text:"Look carefully for a simple issue and ask an experienced person for guidance.",type:"problemSolver"},
   {text:"Find clear instructions and follow the steps carefully.",type:"learner"},
   {text:"Bring people together to get the right help and tools.",type:"organizer"},
   {text:"Explain the problem clearly to someone who can repair it.",type:"communicator"}]},
  {q:"Your class has to prepare a group presentation by tomorrow.",context:"Everyone has different ideas and limited time.",options:[
   {text:"Create a simple visual story or design the slides.",type:"creator"},
   {text:"Divide the work and keep track of time.",type:"organizer"},
   {text:"Present the ideas and make the audience interested.",type:"communicator"},
   {text:"Check facts, spot gaps and improve the final answer.",type:"problemSolver"}]},
  {q:"A younger student is confused about a maths topic.",context:"You have a little time to help them.",options:[
   {text:"Explain it in a different, easy-to-understand way.",type:"communicator"},
   {text:"Draw a picture or make an example to show the idea.",type:"creator"},
   {text:"Work through the steps and find where they got stuck.",type:"problemSolver"},
   {text:"Help them make a small practice plan.",type:"organizer"}]},
  {q:"Your family wants to compare two training courses.",context:"One is closer to home, while another may have different opportunities.",options:[
   {text:"Compare fees, duration, travel and entry requirements.",type:"organizer"},
   {text:"Ask current students or teachers about their experience.",type:"communicator"},
   {text:"Look up the subjects and practical work in each course.",type:"learner"},
   {text:"Think about which hands-on tasks I would enjoy practising.",type:"problemSolver"}]}
 ],
 archetypes:{
  organizer:{name:"The Planner",icon:"🧭",desc:"You may enjoy coordinating tasks, managing time and turning ideas into a practical plan.",ideas:["Project coordination","Business and commerce","Operations and logistics","Event planning"]},
  creator:{name:"The Creator",icon:"🎨",desc:"You may enjoy visual thinking, making things and expressing ideas in different ways.",ideas:["Design and media","Craft and product making","Architecture-related exploration","Creative technology"]},
  communicator:{name:"The Communicator",icon:"💬",desc:"You may enjoy explaining ideas, listening to people and building connections.",ideas:["Teaching and training","Sales and customer support","Community work","Languages and media"]},
  problemSolver:{name:"The Practical Problem-Solver",icon:"🛠️",desc:"You may enjoy investigating how things work and solving real-world challenges.",ideas:["ITI and technical trades","Engineering pathways","Repair and maintenance","Applied science"]},
  learner:{name:"The Curious Learner",icon:"🔎",desc:"You may enjoy researching, learning new processes and building knowledge step by step.",ideas:["Science and research","Health-related pathways","Data and computing","Further academic study"]}
 },
 pathways:[
  {id:"science",name:"Class 11–12: Science",type:"academic",icon:"🔬",tag:"Academic",duration:"Usually 2 years",cost:"Varies by school",entry:"Class 10 completion; subject and marks rules vary",desc:"Explore science subjects and possible future study in engineering, health, pure science, computing and more.",next:"Ask about subject combinations, labs, entrance requirements and local school options."},
  {id:"commerce",name:"Class 11–12: Commerce",type:"academic",icon:"📊",tag:"Academic",duration:"Usually 2 years",cost:"Varies by school",entry:"Class 10 completion; school rules vary",desc:"Explore business, accounting, economics, finance and entrepreneurship.",next:"Ask about mathematics options, accounting subjects and nearby colleges."},
  {id:"arts",name:"Class 11–12: Humanities / Arts",type:"academic",icon:"📚",tag:"Academic",duration:"Usually 2 years",cost:"Varies by school",entry:"Class 10 completion; school rules vary",desc:"Explore languages, history, geography, social sciences, public service and creative fields.",next:"Compare available subjects and the future courses they can lead to."},
  {id:"polytechnic",name:"Polytechnic Diploma",type:"vocational",icon:"⚙️",tag:"Technical diploma",duration:"Often 3 years after Class 10",cost:"Institution-dependent",entry:"State and institution admission rules apply",desc:"A practical technical route in areas such as mechanical, civil, electrical, electronics or computing.",next:"Verify approved institutions, total fees, lab facilities, placements and lateral-entry rules."},
  {id:"iti",name:"ITI / Trade Training",type:"vocational",icon:"🔧",tag:"Skill-based",duration:"Often 6 months–2 years, trade-dependent",cost:"Government institutes may be lower-cost",entry:"Trade-specific age and education requirements apply",desc:"Hands-on trade training such as electrician, fitter, mechanic, welder or other approved trades.",next:"Check institute recognition, trade availability, apprenticeship links, tools and safety training."},
  {id:"health",name:"Allied Health / Paramedical Exploration",type:"vocational",icon:"🩺",tag:"Health-related",duration:"Depends on the approved course",cost:"Varies widely",entry:"Course-specific eligibility and recognised-institute rules apply",desc:"Explore health support careers, but only enrol in courses that meet applicable recognition and eligibility rules.",next:"Confirm recognition, required subjects, clinical training, licensing and total cost before applying."}
 ],
 scholarships:[
  {id:"nmms",name:"National Means-cum-Merit Scholarship (NMMS)",icon:"🎓",categories:["General","SC/ST","OBC/EBC","Minority"],girls:false,desc:"A merit-cum-means scholarship route for eligible students, subject to the current scheme guidelines and selection process.",check:"Check the current Ministry of Education guidelines, state/UT notification, exam schedule, income rules and school eligibility.",link:"https://scholarships.gov.in/"},
  {id:"nsp",name:"National Scholarship Portal schemes",icon:"🇮🇳",categories:["SC/ST","OBC/EBC","Minority","General"],girls:false,desc:"The National Scholarship Portal lists multiple central and other scholarship schemes; each has its own rules.",check:"Use the scheme-wise eligibility checker and confirm the active application window.",link:"https://scholarships.gov.in/"},
  {id:"yasasvi",name:"PM-YASASVI-related support",icon:"📘",categories:["OBC/EBC","SC/ST"],girls:false,desc:"Government support programmes may be available for eligible groups; scheme names, coverage and current rules can change.",check:"Verify the currently active scheme, class eligibility, income limits and application route on official government pages.",link:"https://socialjustice.gov.in/"},
  {id:"girl",name:"State-level support for girls",icon:"🌷",categories:["General","SC/ST","OBC/EBC","Minority"],girls:true,desc:"Some states offer incentives or education support for girls. Availability differs by state and year.",check:"Ask your school and district education office for current state schemes and required documents.",link:"https://www.india.gov.in/"}
 ],
 quests:[
  {id:"interest",icon:"🧠",title:"List three interests",desc:"Write down three school subjects or real-world activities you enjoy, and why."},
  {id:"adult",icon:"🗣️",title:"Ask a trusted adult",desc:"Talk to a teacher, parent or counsellor about two possible pathways after Class 10."},
  {id:"compare",icon:"📋",title:"Compare two courses",desc:"Compare entry rules, duration, total cost, travel and future options for two local courses."},
  {id:"documents",icon:"🗂️",title:"Make a document checklist",desc:"Ask a trusted adult which documents are needed for school admission or a scholarship. Never share document numbers publicly."},
  {id:"skill",icon:"🛠️",title:"Practise one useful skill",desc:"Try a small task such as a spreadsheet, presentation, basic repair observation or communication exercise."},
  {id:"plan",icon:"📅",title:"Set a 30-day goal",desc:"Choose one realistic step to complete this month and decide when you will do it."}
 ]
};