const selectElement = document.querySelector('.cities');
const seattleResult = document.getElementById("seattle-result");
const dallasResult = document.getElementById("dallas-result");
const playaResult = document.getElementById("playa-result");
const strathamResult = document.getElementById("stratham-result");
const parisResult = document.getElementById("paris-result");

selectElement.addEventListener('change', (event) => {
  if (event.target.value === "seattle") {
    let startValue = startTime.value;
    let startDate = new Date(Date.prototype.setHours.apply(new Date(), startValue.split(':')));
    console.log(startDate);
    let endValue = endTime.value;
    seattleResult.textContent = `${startValue} to ${endValue}`;
    dallasResult.textContent = `${startDate.getHours() + 2}:${startDate.getMinutes()} to ${endTime.value}`
  }
});

const startTime = document.getElementById("shift-start");

startTime.addEventListener("input", function() {
  // parisResult.textContent += ` starting at ${startTime.value}`;
}, false);

const endTime = document.getElementById("shift-end");

endTime.addEventListener("input", function() {
  // parisResult.textContent += ` and ending at ${endTime.value}`;
}, false);



// Show current times //

const getPstTime = function() {
  document.getElementById('pst-time').innerHTML = new Date().toLocaleString("en-US",{timeZone:'PST',timeStyle:'short',hourCycle:'h12'});
}

getPstTime();
setInterval(getPstTime,1000);

const getCtTime = function() {
  document.getElementById('ct-time').innerHTML = new Date().toLocaleString("en-US",{timeZone:'CST',timeStyle:'short',hourCycle:'h12'});
}

getCtTime();
setInterval(getCtTime,1000);

const getMxTime = function() {
  document.getElementById('mx-time').innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/Mexico_City',timeStyle:'short',hourCycle:'h12'});
}

getMxTime();
setInterval(getMxTime,1000);

const getEstTime = function() {
  document.getElementById('est-time').innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/New_York',timeStyle:'short',hourCycle:'h12'});
}

getEstTime();
setInterval(getEstTime,1000);

const getCetTime = function() {
  document.getElementById('cet-time').innerHTML = new Date().toLocaleString("en-US",{timeZone:'CET',timeStyle:'short',hourCycle:'h12'});
}

getCetTime();
setInterval(getCetTime,1000);