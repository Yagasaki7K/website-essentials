let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#lamp');

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
}


darkModeToggle.addEventListener('click', () =>{
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    }else{
        disableDarkMode();
    }
})

function autoDark() {
	var date = new Date();
	var hours = date.getHours();

	if (hours > 5 && hours < 18) {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
}

autoDark();
