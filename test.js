(function(){
    console.log("hello");
    const el=document.getElementById("buttons")
    var aTag=document.createElement('a')
    aTag.setAttribute('href',"yourLink")
    aTag.textContent="Link Text"
    el.appendChild(aTag)
})() 