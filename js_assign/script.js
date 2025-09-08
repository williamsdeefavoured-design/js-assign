const person = {
    name : "Williams David",
    age : 18,
    city : "Ado-Ekiti",
    email : "williamsdeefavoured@gmail.com",
    phone : "08052300622",
    skill : "Fullstack Engineer",

    introduce() {
      console.log(`Hi there, my name is ${person.name}, and I'm ${person.age}, I stay in the city of ${person.city}.
        I am a professional ${person.skill} and I can assure you that I can handle your web apps or mobile apps with ease. You can reach me through ${person.phone}`);
    }
};

person.introduce();


const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
 const fd = new FormData(form);
 const obj = Object.fromEntries(fd);
 console.log(obj);
 
  for (key in obj) {
            const markup = 
            `<div>
                <span>${key}: ${obj[key]}</span>
            </div>`;
            
            document.getElementById('data').innerHTML += markup;
            const showMain = document.getElementById('main');
            showMain.style.opacity = '1';
            showMain.style.zIndex = '1';

            const blurbg = document.getElementById('blurbg')
            blurbg.style.opacity = '0.5'
        }
//  const json = JSON.stringify(obj);
//  localStorage.setItem('form', json);

// //  window.location.href = "confirm.html"
 
})
