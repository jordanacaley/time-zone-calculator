// const x = new Date().toLocaleString("en-US",{timeZone:'Asia/Kolkata',timeStyle:'short',hourCycle:'h12'});

// console.log(x);

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