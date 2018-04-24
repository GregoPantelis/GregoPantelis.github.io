function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        document.getElementById("appDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("appDownloadButton").disabled = true

    }
    else if (/android/i.test(userAgent)) {
        document.getElementById("link").href = "http://www.cnn.com/";
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.replace("aibusinessiosPage.html")
    }
    else {
        document.getElementById("appDownloadButton").innerText = "Only available on Android and iOS"
        document.getElementById("appDownloadButton").disabled = true

    }

}
