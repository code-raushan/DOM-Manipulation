const lang = document.querySelectorAll("#SIvCob a");

const section = document.querySelector("#SIvCob");

for(let i=0; i<lang.length; i+=2){ 
      section.removeChild(lang[i]);
    };
