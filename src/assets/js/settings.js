const body = document.querySelector('body');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const bgColorInput = document.getElementById('bgColorInput');
const fontColorInput = document.getElementById('fontColorInput');
const bgThemeColor = document.querySelectorAll('.bg-theme-color');
const fontThemeColor = document.querySelectorAll('.font-theme-color');

document.querySelectorAll('input').forEach(input => {
    input.onchange = () => {
        saveSettingsBtn.removeAttribute('disabled');
    }
});

const saveSettings = () => {
    localStorage.setItem("bgColor", bgColorInput.value);
    localStorage.setItem("fontColor", fontColorInput.value);
    alert('Your settings has been saved successfully.');
}


const resetSettings = () => {
    localStorage.clear();
    bgColorInput.value = "#171717";
    fontColorInput.value = "#f3f4f6";
    alert('Settings reset successful.');
}


(() => {
    let lsBgColor = localStorage.getItem("bgColor");
    let lsFontColor = localStorage.getItem("fontColor");

    if(!lsBgColor || !lsFontColor){
        bgColorInput.value = "#171717";
        fontColorInput.value = "#f3f4f6";
    }else{
        bgColorInput.value = lsBgColor;
        fontColorInput.value = lsFontColor;
    }
})();


setInterval(() => {
    for (let index = 0; index < bgThemeColor.length; index++) {
        bgThemeColor[index].style.backgroundColor = bgColorInput.value;
    }
    for (let index = 0; index < fontThemeColor.length; index++) {
        fontThemeColor[index].style.color = fontColorInput.value;
    }
}, 100);