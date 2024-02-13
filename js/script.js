const converter = document.getElementsByClassName("coverter");

isCelcius = true;

const setPage = (page) => {
    scrollTo({
        left:0,
        top: window.innerHeight*page + 84,
        behavior: "smooth"
    })
}


const reverse = () => {
    isCelcius = !isCelcius;
    document.getElementById("input-status").textContent = isCelcius ? "celcius@archlinux" : "fahrenheit@archlinux"
    document.getElementById("output-status").textContent = !isCelcius ? "celcius@archlinux" : "fahrenheit@archlinux"
    tmp = document.getElementById("output").value
    document.getElementById("output").value = document.getElementById("input").value
    document.getElementById("input").value = tmp
}

const convert = (element) => {
    const data = element.value
    const value = data.split("#")[1]
    // console.log(data, data.split('#').length)
    document.getElementById("output").value = isCelcius ? `[fahrenheit@archlinux ~]# ${value} * (9/5) + 32 = ${(value*9/5)+32}` : `[celcius@archlinux ~]# ${value} - 32 * 5/9 = ${(value - 32)*5/9}`;
    
    if (data.split('#').length == 1) {
        reset()
    }
}

const reset = () => {
    document.getElementById('input').value = isCelcius ?  "[celcius@archlinux ~]#" : "[fahrenheit@archlinux ~]#";
    document.getElementById('output').value = !isCelcius ? "[celcius@archlinux ~]#" : "[fahrenheit@archlinux ~]#";
}