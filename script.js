
function atualiza(){

var topleft = document.getElementById("topleft").value;
var bottomleft = document.getElementById("bottomleft").value;
var topright = document.getElementById("topright").value;
var bottomright = document.getElementById("bottomright").value;
var border = document.getElementById('border')
border.style.borderBottomRightRadius = bottomright+"%";
border.style.borderBottomLeftRadius = bottomleft+"%";
border.style.borderTopRightRadius = topright+"%";
border.style.borderTopLeftRadius = topleft+"%";







var digabottomright = bottomright+"%"
var digabottomleft = bottomleft+"%";
var digatopright = topright+"%";
var digatopleft = topleft+"%";


var elementos = document.getElementById("elementos");
elementos.value = "border:" +digabottomleft +" / "+ digabottomright
+" / "+ digatopleft +" / "+ digatopright;



console.log("topleft:"+topleft);
console.log("bottomleft:"+bottomleft);
console.log("topright:"+topright);
console.log("bottomright:"+bottomright);


}

function myFunction() {
    /* Get the text field */
    /* Select the text field */
    elementos.select();
    elementos.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + elementos.value;
} 
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}