function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://i.imgur.com/AbzUitZ.png") 
    {
        document.getElementById("imgClickAndChange").src = "https://i.imgur.com/BwAPQdH.png";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#1b2836";
        document.getElementsByTagName("div")[0].style.color = "white";
        document.getElementsByTagName("div")[3].style.color = "white";
        document.getElementsByTagName("font")[0].style.color = "white";
        document.getElementsByTagName("font")[1].style.color = "white";
        document.getElementsByTagName("font")[2].style.color = "white";
        document.getElementsByTagName("hr")[1].style.color = "white";
        document.getElementsById("copyright")[1].style.color = "white";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "https://i.imgur.com/AbzUitZ.png";
        document.location.reload(true);
    }
    
}