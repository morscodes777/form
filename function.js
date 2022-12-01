// Menu Button //
const menuBtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener('click', function(){
        navlinks.classList.toggle('mobile-menu')
});

// Forms //
var input1 = [];
var input2 = [];
var input3 = [];
var input4 = [];
var input5 = [];
var input6 = [];
var input7 = [];
var input8 = [];

var n = 1;
var x = 0;

function submitOk(e) {
        var addInputn = document.getElementById('myResult');
        var newRow = addInputn.insertRow(n);

        input1[x] = document.forms["form"]['fname'].value;
        input2[x] = document.forms["form"]['email'].value;
        input3[x] = document.forms["form"]['number'].value;
        input4[x] = document.forms["form"]['bday'].value;
        input5[x] = document.forms["form"]['nationality'].value;
        input6[x] = document.forms["form"]['gender'].value;
        input7[x] = document.forms["form"]['position'].value;
        input8[x] = document.forms["form"]['salary'].value;

        var cell1 = newRow.insertCell(0);
                cell1.innerHTML = input1[x];
        var cell2 = newRow.insertCell(1);
                cell2.innerHTML = input2[x];
        var cell3 = newRow.insertCell(2);
                cell3.innerHTML = input3[x];
        var cell4 = newRow.insertCell(3);
                cell4.innerHTML = input4[x];
        var cell5 = newRow.insertCell(4);
                cell5.innerHTML = input5[x];
        var cell6 = newRow.insertCell(5);
                cell6.innerHTML = input6[x];
        var cell7 = newRow.insertCell(6);
                cell7.innerHTML = input7[x];
        var cell8 = newRow.insertCell(7);
                cell8.innerHTML = input8[x];

        n++;
        x++;
        event.preventDefault();
}



















const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const bday = document.getElementById('bday');
const nationality = document.getElementById('nationality');
const gender = document.getElementById('gender');
const position = document.getElementById('work position');
const salary = document.getElementById('salary');

form.addEventListener('submit', e => {
        e.preventDefault();

        validateInputs;
})

const setError = (element, message) => {
  const input = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const validEmail = email => {
  const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return re.test(String(email).toLowerCase());
}

const validNumber = number => {
  const re = /^(09)\\d{9}/;
  return re.test(String(number));
}

const validateInputs = () => {
const fnameValue = fname.value.trim();
const emailValue = email.value.trim();
const numberValue = number.value.trim();
const bdayValue = bday.value.trim();
const nationalityValue = nationality.value.trim();
const genderValue = gender.value.trim();
const positionValue = position.value.trim();
const salaryValue = salary.value.trim();

if(fnameValue == '') {
  setError(fname, 'Full name is required');
} else {
  setSuccess(fname);
}

if(emailValue == '') {
      setError(email, 'Email is required');
} else if (!validEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
} else {
      setSuccess(email);
}

if(numberValue == '') {
      setError(number, 'Phone number is required');
} else if (!validNumber(numberValue)) {
      setError(number, 'Provide a valid phone number');
} else {
      setSuccess(number);
}

if(bdayValue == '') {
      setError(bday, 'Birthday is required');
} else {
      setSuccess(bday);
}

if(nationalityValue.selectedIndex == 0) {
      setError(nationality, 'Nationality is required');
}else {
      setSuccess(nationality);
}

if((genderValue[0].checked == false) && (genderValue[1].checked == false)) {
      setError(gender, 'Choose your gender');
} else {
      setSuccess(gender);
}     

if(salaryValue == '') {
      setError(salary, 'Expected salary is required');
} else {
      setSuccess(salary);
}
  
if(positionValue == '') {
      setError(position, 'Choose your position');
} else {
      setSuccess(position);
}
}