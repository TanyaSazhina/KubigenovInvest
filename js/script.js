"use strict"
$(document).ready(function() {
$('.header__burger').on('click',function(event){
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});





// значение инпутов

const totalCost = document.getElementById('total-cost');

// значение range-инпутов

const totalCostRange = document.getElementById('total-cost-range');


// Все range

const inputsRange = document.querySelectorAll('.input-range')


// Все range

const assignValue = () => {
    totalCost.value = totalCostRange.value
    
}
assignValue();




//рассчет

const totalAmountOfCredit = document.getElementById('an-initial-fee');


//Все кнопки с процентной ставкой

const yearsBtns = document.querySelectorAll('.years__precents')


const years = [
    {
        name:'threeYears',
        precents: 7
    },
    {
        name:'fiveYears',
        precents: 10
    },
    {
        name:'sevenYears',
        precents: 13
    }
]

let currentPrecent = years[0].precents


for (let years of yearsBtns) {
    years.addEventListener('click', () => {
        for (let item of yearsBtns) {
            item.classList.remove('button__active')
        }
        years.classList.add('button__active');
        takeActiveYear(years)
    })
}

const takeActiveYear = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentYear = years.find(years => years.name === dataAttrValue)
    currentPrecent = currentYear.precents;
    calculation(totalCost.value)
    console.log(currentPrecent);
}


for (let input of inputsRange){
    input.addEventListener('input', () => {
    assignValue();
    calculation(totalCost.value)
    })
    
}



const calculation = (totalCost = 0) => {

    let sumkalck;
    let summCalculation;
    let summ = totalCost;
    let interestRate = currentPrecent;
    
    summ= parseInt(summ, 10);
    
    const erttre = function(){
    if(interestRate === 7){
    summCalculation = summ * (1.225043)
    console.log(summCalculation );
    summCalculation = parseInt(summCalculation, 10);
    }else if(interestRate === 10){
    summCalculation = summ * (1.61051)
    }else if(interestRate === 13){
    summCalculation = summ * (2.35260548045)
    }
    
    }
    erttre()
    
    summCalculation = parseInt(summCalculation, 10);
    
    
    
    
    
    
    sumkalck = summCalculation
    const summCalculationArounded = Math.round(sumkalck)
    
    if(summCalculationArounded < 0){
    return false;
    }else{
    totalAmountOfCredit.innerHTML = `${sumkalck}`
    }
    }





const anhors = document.querySelectorAll('a[href*="#"]');

for (let anhor of anhors) {
    anhor.addEventListener('click', function(e){
        e.preventDefault();
        const blockId = anhor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block:"start"
        });
        
    })
}



const modalBbuttons = document.querySelectorAll('[data-modal-button]')
const modalCloseButtons = document.querySelectorAll('[data-modal-close]')
const allModal = document.querySelectorAll('[data-modal]')

modalBbuttons.forEach(function(item){
    item.addEventListener('click', function(){

        const modalId = this.dataset.modalButton
        const modal = document.querySelector('#' + modalId)
        modal.classList.remove('hidden')
        modal.querySelector('.modal-window').addEventListener('click', function(e){
            e.stopPropagation();
        })
 
    })
})

modalCloseButtons.forEach(function(item){
    item.addEventListener('click', function(){
        const modal = this.closest('[data-modal]')
        modal.classList.add('hidden')
        wrapper.classList.remove('overflow')
        body.classList.remove('body_y')
        pagePractice.classList.remove('getintouch__container-blur')
        getintouchContainer.classList.remove('getintouch__container-blur')
    })
})

allModal.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.add('hidden')
        wrapper.classList.remove('overflow')
        body.classList.remove('body_y')
        pagePractice.classList.remove('getintouch__container-blur')
        getintouchContainer.classList.remove('getintouch__container-blur')
    })
})



const mainBlockButtonBorder = document.querySelector('.main-block__button_border');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('.body');
const itempPracticeLink = document.querySelectorAll('.item-practice__link');
const pagePractice = document.querySelector('.practice__container');

mainBlockButtonBorder.addEventListener('click', function(){
    wrapper.classList.add('overflow')
    body.classList.add('body_y')
})

itempPracticeLink.forEach(item =>{
    item.addEventListener('click', function(){
        pagePractice.classList.add('getintouch__container-blur')
    })
})



const itemGetintouchButton = document.querySelectorAll('.item-getintouch__button');
const getintouchContainer = document.querySelector('.getintouch__container');
const contactButton = document.querySelector('.contact__button');


itemGetintouchButton.forEach(item =>{
    item.addEventListener('click', function(){
        getintouchContainer.classList.add('getintouch__container-blur')
    })
})

contactButton.addEventListener('click', function(){
    getintouchContainer.classList.add('getintouch__container-blur')
})



const itemWhoweareText = document.querySelectorAll('.item-whoweare__text');

itemWhoweareText.forEach(item =>{
    item.addEventListener('click', function(){
        item.classList.toggle('white-space')
    })
})


