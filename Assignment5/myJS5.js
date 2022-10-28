// JAVASCRIPT_ASSIGNMENT-5__CHINMAY_BONDE

const userText = function () {

var text = document.getElementById('userInput').value

  let s = text.split("");

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      default:
        // console.log(s[i]);
        s[i] = String.fromCharCode(s[i].charCodeAt()+1);
        
      case " ":
        break;

      case "z":
        s[i] = "a";

      case "Z":
        s[i] = "A";

      
    }
  }

  document.getElementById("answer").innerHTML=s.join("")
};


