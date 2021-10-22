

function getInput() {
var nameInput = document.getElementById("customname").value;
Swal.fire("Hey " + nameInput + "!");
};

function answer() {
    var nameInput = document.getElementById("customname").value;
    var numbrequestions = 3;
    var score = 0;
    var answers = ["Duck", "Spicy", "Monster"];

    var question1 = document.querySelector('input[name="question1"]:checked');
    var question2 = document.querySelector('input[name="question2"]:checked');
    var question3 = document.querySelector('input[name="question3"]:checked');
    var question4 = document.querySelector('input[name="question4"]:checked');

    for(i = 1; i<=numbrequestions; i++){
      if(eval('question'+i) == null || eval('question'+i) == ''){

        Swal.fire({
            icon: 'info',
            title: 'Du hast da was vergessen',
            text: "Folgende Antwort fehlt noch: " + i,
          })

        return false;
      }
    }

    for(i = 1; i <=numbrequestions; i++){
      if(eval('question' + i).value == answers[i - 1]){
         score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = '<h3>' + nameInput + ': Du hast<span> ' + score + '</span> von <span>' + numbrequestions + '</span> Punkten erreicht</h3>';
     if(score == numbrequestions){
        Swal.fire({
            icon: 'success',
            title: 'Du hast es geschafft!',
            text: "Du hast " + (score) + " von " + (numbrequestions) + " Punkten erreicht!",
          })
    }else if(score>=1){
        Swal.fire({
            icon: 'info',
            title: 'Better luck next time!',
            text: "Du hast " + score + " von " + numbrequestions + " Punkten erreicht!",
          })
    }else{
        Swal.fire({
        icon: 'error',
            title: '...',
            text: "Du hast alles Falsch..\nSchäm dich!",
    })
    return false;
}
};

