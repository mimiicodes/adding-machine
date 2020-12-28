const backspace = () => {
    var num = document.querySelector("#output").value;
    document.querySelector("#output").value = num.substr (0, num.length - 1);
};