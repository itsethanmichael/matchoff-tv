function addClickListeners () {
    
    let yt = document.getElementById("youtube");
    let tw = document.getElementById("twitch");
    let ig = document.getElementById("instagram");
    
    yt.addEventListener(
        
        "click", function () {

            window.open("https://youtube.com/@matchofftv");

        }
    
    )

    tw.addEventListener(

        "click", function () {

            window.open("https://twitch.tv/matchofftv");

        }

    )

    ig.addEventListener(

        "click", function () {

            window.open("https://instagram.com/matchofftv");

        }

    )

}

addClickListeners();