window.EmpowHerSpeech = {
 speak(text){ if(!("speechSynthesis" in window)){alert("Audio narration is not supported in this browser.");return;} window.speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.lang="en-IN";u.rate=.95;window.speechSynthesis.speak(u); },
 stop(){if("speechSynthesis" in window)window.speechSynthesis.cancel();}
};