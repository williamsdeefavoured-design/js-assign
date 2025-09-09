// CREATED A VARIABLE CALLED PERSON TO SHOW SOME DATA IN MY CONSOLE

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


// I TARGETED THE FORM SO I CAN TAKE ALL THE DATA THAT WAS FILLED
const form = document.querySelector('form');


// ONCE THE BUTTON IS CLICKED
form.addEventListener('submit', (e) =>{
  e.preventDefault();

    // IT COLLECTS ALL THE DATA AND SAVES IT IN A VARIABLE AND PREVENTS THE BROWSER FROM RELOADING IMMEDIATELY AND LOSING ALL THE DATA STORED
 const fd = new FormData(form);
 const obj = Object.fromEntries(fd);
 console.log(obj);


    // INPUTS ALL THAT DATA INTO THE BASEPLATE I CREATED TO CARRY EACH INFORMATION FILLED
  for (key in obj) {
            const markup = 
            `<div>
                <span>${key}: ${obj[key]}</span>
            </div>`;
            
            document.getElementById('data').innerHTML += markup;

      // CREATED A VARIABLE TO TARGET THE DIV FOR ALL THE CONTENT... THE DIV HAS A SET STYLE OF OPACITY = 0 AND ZINDEX= 0 AND MADE IT SHOW
            const showMain = document.getElementById('main');
            showMain.style.opacity = '1';
            showMain.style.zIndex = '1';

      // TARGETED THE CONTAINER WRAPPING ALL MY FORM CONTENT AND REDUCED THE OPACITY OF IT
            const blurbg = document.getElementById('blurbg')
            blurbg.style.opacity = '0.5'
        }

})

