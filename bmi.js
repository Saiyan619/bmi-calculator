
let weigh = document.getElementById('weight');
let length = document.getElementById('height');
let result = document.getElementById('output-no');
let changeTheme = document.querySelector('.change-theme');
let container = document.querySelector('.container');
let head = document.querySelector('.header');


let mass = weigh;
let long = length;
long.value = " ";
mass.value = " ";
document.querySelector('#comment').style.display = 'none';


changeTheme.addEventListener('click', function () {
    head.classList.toggle('active');
    container.classList.toggle('active');
});


document.querySelector('#calc').addEventListener('click',function() {
    let Bmi = result;

    //CALCULATIOM FOR THE BMI
    Bmi.value = (mass.value / (long.value * long.value) * (10000)).toFixed(2);

    document.querySelector('#refresh').addEventListener('click',function() {
        long.value = " ";
        mass.value = " ";
        Bmi.value = " ";

        document.querySelector('#comment').style.display = 'none';
    
    })

     
    
        if (Bmi.value < 18 || Bmi.value > 25) {
            document.querySelector('#comment').style.display = 'block';
        } 
        if (Bmi.value >= 18 && Bmi.value <= 25) {
            document.querySelector('#comment').style.display = 'block';
            document.querySelector('#comment').textContent = 'YOU HAVE A GOOD BMI !!!';
            document.querySelector('#comment').style.color = 'green';
        } 
        else{
            document.querySelector('#comment').textContent = 'YOU HAVE A BAD BMI THINK ABOUT YOUR LIFE !!!';
            document.querySelector('#comment').style.color = 'red';
        }
        
    
    
})



