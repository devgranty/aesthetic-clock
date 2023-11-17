const body = document.querySelector('body');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const timeOfDay = document.getElementById('timeOfDay');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const closeFullscreenBtn = document.getElementById('closeFullscreenBtn');
const bgThemeColor = document.querySelectorAll('.bg-theme-color');
const fontThemeColor = document.querySelectorAll('.font-theme-color');

setInterval(() => {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    hour.innerHTML = hours.toString().padStart(2, '0');
    minute.innerHTML = minutes.toString().padStart(2, '0');
    second.innerHTML = seconds.toString().padStart(2, '0');

    // 00 - 11
    if(hours <= 11){
        timeOfDay.innerHTML = `<span class="material-symbols-rounded text-gray-100">cloud</span>`;
    }else if(hours <= 17){ // 12 - 17
        timeOfDay.innerHTML = `<span class="material-symbols-rounded text-yellow-500">sunny</span>`;
    }else if(hours <= 20) {  // 18 - 20
        timeOfDay.innerHTML = `<span class="material-symbols-rounded text-amber-200">wb_twilight</span>`;
    }else if(hours >= 21){ // 21 - 23
        timeOfDay.innerHTML = `<span class="material-symbols-rounded text-amber-100">nightlight</span>`;
    }
}, 1000);

fullscreenBtn.onclick = () => {
    if (body.requestFullscreen) {
        body.requestFullscreen();
        fullscreenBtn.classList.add('hidden');
        closeFullscreenBtn.classList.remove('hidden');
        closeFullscreenBtn.classList.add('flex');
    }else if (body.webkitRequestFullscreen) { /* Safari */
        body.webkitRequestFullscreen();
        fullscreenBtn.classList.add('hidden');
        closeFullscreenBtn.classList.remove('hidden');
        closeFullscreenBtn.classList.add('flex');
    }else if (body.msRequestFullscreen) { /* IE11 */
        body.msRequestFullscreen();
        fullscreenBtn.classList.add('hidden');
        closeFullscreenBtn.classList.remove('hidden');
        closeFullscreenBtn.classList.add('flex');
    }
}

closeFullscreenBtn.onclick = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        fullscreenBtn.classList.remove('hidden');
        closeFullscreenBtn.classList.add('hidden');
        closeFullscreenBtn.classList.remove('flex');
    }else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
        fullscreenBtn.classList.remove('hidden');
        closeFullscreenBtn.classList.add('hidden');
        closeFullscreenBtn.classList.remove('flex');
    }else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
        fullscreenBtn.classList.remove('hidden');
        closeFullscreenBtn.classList.add('hidden');
        closeFullscreenBtn.classList.remove('flex');
    }
}

(() => {
    let lsBgColor = localStorage.getItem("bgColor");
    let lsFontColor = localStorage.getItem("fontColor");

    if(!lsBgColor || !lsFontColor){
        for (let index = 0; index < bgThemeColor.length; index++) {
            bgThemeColor[index].style.backgroundColor = "#171717";
        }
        for (let index = 0; index < fontThemeColor.length; index++) {
            fontThemeColor[index].style.color = "#f3f4f6";
        }
    }else{
        for (let index = 0; index < bgThemeColor.length; index++) {
            bgThemeColor[index].style.backgroundColor = lsBgColor;
        }
        for (let index = 0; index < fontThemeColor.length; index++) {
            fontThemeColor[index].style.color = lsFontColor;
        }
    }
})();