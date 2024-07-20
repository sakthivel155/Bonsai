
  // accordion dropdown
  // let questions = document.querySelectorAll('.question');
  //   questions.forEach(question => {
  //       question.addEventListener('click', function() {
  //           this.nextElementSibling.classList.toggle('show');
  //       });
  //   });

  const titles = document.querySelectorAll('.list-item'); 
    titles.forEach((title)=>{
        title.addEventListener('click',function(){
           
            titles.forEach((item)=>{
               
                if(item !== this && item.classList.contains('show')){
                  item.classList.toggle('show');
                }
            });
            title.classList.toggle('show');
        });
    });