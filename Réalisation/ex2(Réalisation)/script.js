function afficherCompétences() {

const compétences = 
[
{title: "Who is the head coach of FC Barcelona for the 2024-25 season?", code: "c1" },
{title:"Which young player from La Masia became a standout performer for Barcelona in the 2024-25 La Liga season, often playing as a winger?", code: "c2" },
{title:"How many goals did FC Barcelona score in their biggest La Liga win of the 2024-25 season against Real Valladolid?", code: "c3" },
{title:"Which player scored a hat-trick in FC Barcelonas 7-0 victory over Real Valladolid in the 2024-25 La Liga season?", code: "c4" },
{title:"What was the final score in FC Barcelonas first El Clásico of the 2024-25 La Liga season against Real Madrid?", code: "c5" },
{title:"Which player was the top scorer for FC Barcelona in La Liga by mid-season 2024-25, with notable performances in multiple matches?", code: "c6" },
{title:"In which competition did FC Barcelona face Bayern Munich during the 2024-25 season, resulting in a 4-1 loss?", code: "c7" },
{title:"What was the final score in the first El Clásico of the 2024-25 La Liga season, played on October 26, 2024?", code: "c8" },
  ]

  let trueCount = 0;
  let falseCount = 0;
for (let i = 0; i < compétences.length; i++) {// i index //majmo3 de tableau // for hiya boucle
    let done = prompt("entré le code de la compétence" + compétences[i].title);//promt(belssa dyal utulisateur))
    if (done == compétences[i].code) { // bache dakhl reponse dyal utulisateur // boucle fe wst condtion
        trueCount++;
        console.log("GOOD JOB IS TRUE👌 ")
        console.log("score🥶 : "+trueCount)
    } else {
        falseCount++;
        console.log("WRONG ANSWER IS FALSE👎 ")}
        if (falseCount == 3) {
            console.log("GAME OVER YOU LOSE💀")// break 
            break;
        }else if (trueCount > 6 ) { 
            console.log("CONGRATULATION YOU WIN🏆" )
            break
    }
            console.log("resultat : "+trueCount)

 }}
afficherCompétences();