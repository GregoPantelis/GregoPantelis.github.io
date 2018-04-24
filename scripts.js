function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        document.getElementById("link").href = "http://www.cnn.com/";
    }
    else if (/android/i.test(userAgent)) {
        document.getElementById("link").href = "http://www.cnn.com/";
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.getElementById("link").href = "http://www.cnn.com/";
    }
    else {
        document.getElementById("link").href = "http://www.cnn.com/";
    }

}
window.onload = getMobileOperatingSystem
