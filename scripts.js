function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        document.getElementById("appDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("appDownloadButton").disabled = true

    }
    else if (/android/i.test(userAgent)) {
        document.getElementById("link").href = "http://www.cnn.com/"
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.getElementById("link").href = "http://www.google.co.uk"
    }
    else {
        document.getElementById("appDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("appDownloadButton").disabled = true

    }

}
window.onload = getMobileOperatingSystem
