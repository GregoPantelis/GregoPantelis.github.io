function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        document.getElementById("androidappDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("androidappDownloadButton").disabled = true
        document.getElementById("iosappDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("iosappDownloadButton").disabled = true

    }
    else if (/android/i.test(userAgent)) {
        document.getElementById("iosappDownloadButton").innerText = "Android App"
        document.getElementById("iosappDownloadButton").disabled = true
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.getElementById("androidappDownloadButton").innerText = "Android App"
        document.getElementById("androidappDownloadButton").disabled = true
    }
    else {
        document.getElementById("androidappDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("androidappDownloadButton").disabled = true
        document.getElementById("iosappDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("iosappDownloadButton").disabled = true

    }

}
window.onload = getMobileOperatingSystem
