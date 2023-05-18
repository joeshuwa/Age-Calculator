const button = document.getElementById("button");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const feedback = document.getElementById('feedback');
const reply = document.getElementById('reply');
const response = document.getElementById('response')

button.addEventListener('click', (event)=>{
    event.preventDefault();
    const monthValue = monthInput.value;
    const dayValue = dayInput.value;
    const yearValue =yearInput.value;
    const label = document.querySelectorAll('.label');

// RESPONSE PARAGRAPH RESET
    feedback.innerHTML = '';
    response.innerHTML = '';
    reply.innerHTML = '';

    //RESET INPUT FIELD STYLE IF VALID
    yearInput.style.borderColor = "";
    monthInput.style.borderColor = "";
    dayInput.style.borderColor = "";


// ANSWER PARAGRAPH RESET

    

    // CONDITIONS FOR INPUTTING ALPHABETS INSTEAD OF NUMBERS
    if(isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)){
        one.innerHTML='-- days';
        two.innerHTML='-- months';
        three.innerHTML='-- years';
        return; 
    }

    // CONDITIONS FOR AN EMPTY INPUT FIELD

    if(yearValue === "" || dayValue === '' || monthValue === ""){
        label.forEach((e)=>{e.classList.add('active');
        e.style.color = "red"});
        monthInput.style.borderColor = "red";
        dayInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        feedback.innerHTML= 'This field is required';
        response.innerHTML =  'This field is required';
        reply.innerHTML = 'This field is required';
        return;
    }



    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentDay = currentDate.getDate();
        console.log(currentDay);

    // CONDITIONS IF INPUT FIELD VALUE EXCEEDS  NORMAL
    if(yearValue > currentYear){
        feedback.innerHTML = "Must be in the past"
        label.forEach((e)=>{e.classList.add('active')});
        yearInput.style.borderColor = "red";
        return;
        
    }

    if(monthValue > 12){
        reply.innerHTML = "Must be a valid month"
        label.forEach((e)=>{e.classList.add('active')});
        monthInput.style.borderColor = "red";
        return;
    }

    const daysInMonthValue = daysInMonth(monthValue, yearValue);

    if(dayValue > daysInMonthValue){
        response.innerHTML = "Input a valid date";
        label.forEach((e)=>{e.classList.add('active')});
        dayInput.style.borderColor = "red";
        return;
    }
    
    
    let ageDay = currentDay - dayValue;
    let ageMonth = currentMonth - monthValue;
    let ageYear = currentYear - yearValue;

    if(ageDay < 0){
        ageDay += daysInMonth(monthValue, yearValue);
        ageMonth--;
    }

    if(ageMonth < 0) {
        ageMonth += 12;
        ageYear--;
    }

    three.innerHTML = `${ageYear} `;
    two.innerHTML = `${ageMonth} `;
    one.innerHTML = `${ageDay} `;

// Add the "result" class to the result elements
    three.classList.add('result');
    two.classList.add('result');
    one.classList.add('result');

     // LABEL RESET
    label.forEach((e)=>{e.classList.remove('active')});

}
) 
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
