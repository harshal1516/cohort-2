//early return

function getGrade(score){
    if (score>=90 && score<=100) return "A";
    if (score>=80 && score<=89) return "b";
    if (score>=70 && score<=79) return "c";
    if (score>=60 && score<=69) return "d";
    if (score>=33 && score<=59) return "e";
    if (score>=0 && score<=32) return "Fail";
    return "Invalid marks"
}
   console.log(getGrade(85));