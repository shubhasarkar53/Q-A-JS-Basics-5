const questions = document.querySelectorAll(".questions");
// console.log(questions);

questions.forEach(function(question){
    //  console.log(question);
    const btn = question.querySelector(".btn");
    // console.log(btn);

    btn.addEventListener("click",function(){
        console.log(question);
        // console.log(question.classList.toggle("active"));

        questions.forEach(function(element){
            if(element !== question){
                element.classList.remove("active");
            }
        })



        question.classList.toggle("active");


    })




})
