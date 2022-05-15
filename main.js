
       //--------------------toggle sidebar --------------------------------------------

       let sidebar = document.querySelector(".sidebar");
       let main = document.querySelector("main");
       function togside() {
           sidebar.classList.toggle("show");
           main.classList.toggle("move")
       }

       let cut=document.querySelector(".cut");
       cut.addEventListener("click",()=>{
           sidebar.classList.remove("show");
           main.classList.remove("move")
       })

        //--------------------add new logic --------------------------------------------

       let edit = document.querySelector('.edit-txt');
       let valarr = ['e','f',"g",'h',"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
       let index=0;
       let addnew = document.querySelector('.addnew')
       function adchoice(params) {
           
           if (index<=21) {
               let nwitm=`   <div style="display:flex;align-items:center;margin-bottom: 30px;">
                           <label onclick="togglebg(this)"
                               style="padding: 12px 10px;display: flex;justify-content: center;align-items: center;flex-direction: column;"><span>${valarr[index]}</span> <div class="round"> </div><i class="fas fa-check"></i></label>
                           <textarea style="width: 100%;resize: none;border-radius: 5px;" name="" id="" cols="30"
                               rows="6"></textarea>
                       </div>`
                edit.insertAdjacentHTML("beforeend",nwitm);
                index++;
           }else{
               params.innerText="max limit reached"
           }
           }
       

       let label=edit.querySelectorAll("label");  
           label.forEach(function(params) {
           params.addEventListener("click",(e)=>{
           e.currentTarget.classList.toggle("ok");  
           })
       })  
      
       function togglebg(params) {
           params.classList.toggle("ok")
       }