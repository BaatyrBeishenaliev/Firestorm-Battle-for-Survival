const btnStartGame = document.querySelector('#btn-start');
const move1 = document.querySelector('#go-btn-1');
const move2 = document.querySelector('#go-btn-2');
const move3 = document.querySelector('#go-btn-3');

btnStartGame.addEventListener('click', (event) => {

    alert("Игрок №1 атакует игрока №2")

    event.preventDefault()
    btnStartGame.style.display = 'none'
    move1.style.display = 'inline'
    move2.style.display = 'inline'
    move3.style.display = 'inline'
})

// кнопки активации скиллов

const skillBtn1 = document.querySelector('#skill-btn1')
const skillBtn2 = document.querySelector('#skill-btn2')
const skillBtn3 = document.querySelector('#skill-btn3')
const skillBtn4 = document.querySelector('#skill-btn4')

// игрок №1

skillBtn1.addEventListener('click', function() {
    const skillValue1 = document.querySelector('#skill-value1')
    skillValue1.value -= 20;
    const value1 = document.querySelector('#value1')
    value1.innerHTML = skillValue1.value

    if (value1.innerHTML == 0) {
        alert("У игрока №1 кончилась мана")
    }
})

skillBtn2.addEventListener('click', function() {
    const skillValue1 = document.querySelector('#skill-value1')
    skillValue1.value -= 20;
    const value1 = document.querySelector('#value1')
    value1.innerHTML = skillValue1.value

    if (value1.innerHTML == 0) {
        alert("У игрока №1 кончилась мана")
    }
})

skillBtn3.addEventListener('click', function() {
    const skillValue1 = document.querySelector('#skill-value1')
    skillValue1.value -= 20;
    const value1 = document.querySelector('#value1')
    value1.innerHTML = skillValue1.value

    if (value1.innerHTML == 0) {
        alert("У игрока №1 кончилась мана")
    }
})

skillBtn4.addEventListener('click', function() {
    const skillValue1 = document.querySelector('#skill-value1')
    skillValue1.value -= 20;
    const value1 = document.querySelector('#value1')
    value1.innerHTML = skillValue1.value

    if (value1.innerHTML == 0) {
        alert("У игрока №1 кончилась мана")
    }
})

// игрок №2

const userTwoBtn1 = document.querySelector('#userTwoBtn1')
const userTwoBtn2 = document.querySelector('#userTwoBtn2')
const userTwoBtn3 = document.querySelector('#userTwoBtn3')
const userTwoBtn4 = document.querySelector('#userTwoBtn4')

userTwoBtn1.addEventListener('click', function() {
    const skillValue2 = document.querySelector('#skill-value2')
    skillValue2.value -= 20;
    const value2 = document.querySelector('#value2')
    value2.innerHTML = skillValue2.value

    if (value2.innerHTML == 0) {
        alert("У игрока №2 кончилась мана")
    }
})

userTwoBtn2.addEventListener('click', function() {
    const skillValue2 = document.querySelector('#skill-value2')
    skillValue2.value -= 20;
    const value2 = document.querySelector('#value2')
    value2.innerHTML = skillValue2.value

    if (value2.innerHTML == 0) {
        alert("У игрока №2 кончилась мана")
    }
})

userTwoBtn3.addEventListener('click', function() {
    const skillValue2 = document.querySelector('#skill-value2')
    skillValue2.value -= 20;
    const value2 = document.querySelector('#value2')
    value2.innerHTML = skillValue2.value

    if (value2.innerHTML == 0) {
        alert("У игрока №2 кончилась мана")
    }
})

userTwoBtn4.addEventListener('click', function() {
    const skillValue2 = document.querySelector('#skill-value2')
    skillValue2.value -= 20;
    const value2 = document.querySelector('#value2')
    value2.innerHTML = skillValue2.value

    if (value2.innerHTML == 0) {
        alert("У игрока №2 кончилась мана")
    }
})

// игрок №3

const userThreeBtn1 = document.querySelector('#userThreeBtn1')
const userThreeBtn2 = document.querySelector('#userThreeBtn2')
const userThreeBtn3 = document.querySelector('#userThreeBtn3')
const userThreeBtn4 = document.querySelector('#userThreeBtn4')

userThreeBtn1.addEventListener('click', function() {
    const skillValue3 = document.querySelector('#skill-value3')
    skillValue3.value -= 20;
    const value3 = document.querySelector('#value3')
    value3.innerHTML = skillValue3.value

    if (value3.innerHTML == 0) {
        alert("У игрока №3 кончилась мана")
    }
})

userThreeBtn2.addEventListener('click', function() {
    const skillValue3 = document.querySelector('#skill-value3')
    skillValue3.value -= 20;
    const value3 = document.querySelector('#value3')
    value3.innerHTML = skillValue3.value

    if (value3.innerHTML == 0) {
        alert("У игрока №3 кончилась мана")
    }
})

userThreeBtn3.addEventListener('click', function() {
    const skillValue3 = document.querySelector('#skill-value3')
    skillValue3.value -= 20;
    const value3 = document.querySelector('#value3')
    value3.innerHTML = skillValue3.value

    if (value3.innerHTML == 0) {
        alert("У игрока №3 кончилась мана")
    }
})

userThreeBtn4.addEventListener('click', function() {
    const skillValue3 = document.querySelector('#skill-value3')
    skillValue3.value -= 20;
    const value3 = document.querySelector('#value3')
    value3.innerHTML = skillValue3.value

    if (value3.innerHTML == 0) {
        alert("У игрока №3 кончилась мана")
    }
})

// урон

const randomNumForHealth = Math.floor(Math.random() * 50) + 10; // урон по здоровью
const randomNumForArmour = Math.floor(Math.random() * 70) + 10; // урон по броне
const randomNumForFlash = Math.floor(Math.random() * 30) + 10; // энергия минус

move1.addEventListener('click', function(event) {

    event.preventDefault();

    // значение атрибутов с типом string
    const damageHealth = document.querySelector('#damage-health');
    const damageArmour = document.querySelector('#damage-armour');
    const damageFlash = document.querySelector('#damage-flash');

    // преобразование string в number
    const damageHealthParseInt = parseInt(damageHealth.textContent);
    const damageArmourParseInt = parseInt(damageArmour.textContent);
    const damageFlashParseInt = parseInt(damageFlash.textContent);

    const resultHealth = damageHealthParseInt - randomNumForHealth;
    const resultArmour = damageArmourParseInt - randomNumForArmour;
    const resultFlash = damageFlashParseInt - randomNumForFlash;

    damageHealth.textContent = `${resultHealth} %`;
    damageArmour.textContent = `${resultArmour} %`;
    damageFlash.textContent = `${resultFlash} %`;

    if (resultHealth < 0) {
        alert("Игрок №2 проигрывает")
    }

    window.setTimeout(() => {
        alert("Теперь игрок №2 атакует игрока №3")
    }, 1000)
})

// игрок №2 наносит урон игроку №3

move2.addEventListener('click', function(event) {

    event.preventDefault();

    // значение атрибутов с типом string
    const userThreeHealth = document.querySelector('#userThreeHealth');
    const userThreeArmour = document.querySelector('#userThreeArmour');
    const userThreeFlash = document.querySelector('#userThreeFlash');

    // преобразование string в number
    const userThreeHealthParseInt = parseInt(userThreeHealth.textContent);
    const userThreeArmourParseInt = parseInt(userThreeArmour.textContent);
    const userThreeFlashParseInt = parseInt(userThreeFlash.textContent);

    const resultThreeHealth = userThreeHealthParseInt - randomNumForHealth;
    const resultThreeArmour = userThreeArmourParseInt - randomNumForArmour;
    const resultThreeFlash = userThreeFlashParseInt - randomNumForFlash;

    userThreeHealth.textContent = `${resultThreeHealth} %`;
    userThreeArmour.textContent = `${resultThreeArmour} %`;
    userThreeFlash.textContent = `${resultThreeFlash} %`;

    if (resultThreeHealth < 0) {
        alert("Игрок №2 проигрывает")
    }

    window.setTimeout(() => {
        alert("Теперь игрок №3 атакует игрока №1")
    }, 1000)
})

// игрок №3 наносит урон игроку №1

move3.addEventListener('click', function(event) {

    event.preventDefault();

    // значение атрибутов с типом string
    const userDamageHealth = document.querySelector('#user-damage-health');
    const userDamageArmour = document.querySelector('#user-damage-armour');
    const userDamageFlash = document.querySelector('#user-damage-flash');

    // преобразование string в number
    const userDamageHealthParseInt = parseInt(userDamageHealth.textContent);
    const userDamageArmourParseInt = parseInt(userDamageArmour.textContent);
    const userDamageFlashParseInt = parseInt(userDamageFlash.textContent);

    const resultDamageHealth = userDamageHealthParseInt - randomNumForHealth;
    const resultDamageArmour = userDamageArmourParseInt - randomNumForArmour;
    const resultDamageFlash = userDamageFlashParseInt - randomNumForFlash;

    userDamageHealth.textContent = `${resultDamageHealth} %`;
    userDamageArmour.textContent = `${resultDamageArmour} %`;
    userDamageFlash.textContent = `${resultDamageFlash} %`;

    if (resultDamageHealth < 0) {
        alert("Игрок №3 проигрывает")
    }

    window.setTimeout(() => {
        alert("Теперь игрок №1 атакует игрока №2")
    }, 1000)
})