function Bold()
{
    var texte = document.getElementById("article-body");
    var weight = texte.style.fontWeight;
    if(weight == 'bold')
    {
        texte.style.fontWeight = 'normal';

    }
    else
    {
        texte.style.fontWeight = 'bold';
    }
}

function italic()
{
    var texte = document.getElementById("article-body");
    var fontStyle = texte.style.fontStyle;
    if(fontStyle == 'italic')
    {
    texte.style.fontStyle = 'normal';
    }
    else 
    {
    texte.style.fontStyle = 'italic'
    }
}

function underline()
{
    var texte = document.getElementById("article-body")
    if(texte.style.textDecoration == "underline")
    {
        texte.style.textDecoration = "";
    }
    else
    {
        texte.style.textDecoration = "underline";

    }
}

var changeFont = function(font){
    console.log(font.value)
      document.getElementById("article-body").style.fontFamily = font.value;
}

var fontSizeDD = document.getElementById('fontSizeDD');
fontSizeDD.onchange = function () {
    var texte = document.getElementById("article-body")
    texte.style.fontSize = this.value +"px";
}