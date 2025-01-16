const workoutdiary = document.querySelector("#input-form");


function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(workoutdiary);
  const formValues = Object.fromEntries(formData);


  
  fetch("http://localhost:8080/new-data", {
   
    method: "POST",
   
    headers: {
      "Content-Type": "application/json",
    },
 
    body: JSON.stringify({formValues}),

  });
  console.log(formValues);
  setTimeout(workoutdiary.onsubmit = function(){
   alert("Message submitted!")
    location.reload(true);
})

}
workoutdiary.addEventListener("submit", handleSubmitMessageForm);

const Messageshop = document.getElementById("message");
let MessageBox = [];

async function messages() {
    const response = await fetch(
        "http://localhost:8080/comments"
      );
      const data = await response.json();
      MessageBox.push(data);
      //console.log(MessageBox);
      async function MessagesDetail() {
       for (let i = 0; i < MessageBox[0].length; i++) {
          //console.log(i);
    
          const MessageContainer = document.createElement("div");
          MessageContainer.className = "message-container";
          MessageContainer.setAttribute("data-id", MessageBox[0][i].id);
          
    
          const date = document.createElement("h4");
         const date1 = new Date(`${MessageBox[0][i].date}`)
         const dateStr = date1.toLocaleString('en-US', {
            timeZone: "Europe/London"
          })
          const date2 = new Date (dateStr)
          var dd = date2.getDate();
          var yyyy = date2.getFullYear();
          var mm = date2.getMonth()+1
         // console.log(dd + "/"+mm + "/"+ yyyy)
          const date3 = dd + "/"+mm+"/"+yyyy
          date.textContent = date3;
          MessageContainer.appendChild(date);
    
          
          const MessageText = document.createElement("p");
          MessageText.textContent = `${MessageBox[0][i].my_note}`;
          MessageText.className = "message-text";
          MessageContainer.appendChild(MessageText);

          const myexercise = document.createElement("p");
          myexercise.textContent = `Exercise: ${MessageBox[0][i].exercise}`;
          myexercise.className = "exercise";
          MessageContainer.appendChild(myexercise);

          const mysets = document.createElement("p");
          mysets.textContent = `Sets: ${MessageBox[0][i].sets}`;
          mysets.className = "sets";
          MessageContainer.appendChild(mysets);

          const myreps = document.createElement("p");
          myreps.textContent = `Reps: ${MessageBox[0][i].reps}`;
          myreps.className = "reps";
          MessageContainer.appendChild(myreps);

          const myweight = document.createElement("p");
          myweight.textContent = `Weight: ${MessageBox[0][i].weight}`;
          myweight.className = "weight";
          MessageContainer.appendChild(myweight);


          const deleteButton = document.createElement("button");
          deleteButton.textContent = `Delete comment`
          deleteButton.className = "deleteButton"
          MessageContainer.appendChild(deleteButton)

          Messageshop.appendChild(MessageContainer);
    }
      }
      MessagesDetail();
    }
    
    messages();


const messasgeID = document.getElementById("message");
messasgeID.addEventListener("click", function (e){
  console.log(e.target.classList)
  if (e.target.classList.contains("deleteButton")){
    const messageContainer = e.target.closest(".message-container"); // Find the parent div of the comment
    const dataId = messageContainer.getAttribute("data-id"); // Get the comment ID

    const response = fetch(`http://localhost:8080/delete-data${dataId}`, { //the client is trying to send a DELETE request to the /delete-data route on the backend server 
      method: "DELETE"
    });
    if (response.ok){
      messageContainer.remove();
      alert("Comment deleted successfully");
    } else {
      alert("Error: Comment unable to be deleted")
    }
  }
})


    const filtremessagebutton = document.getElementById("list")
    const filtrebox = document.getElementById("message1");
    let filtre = [];
    
    async function filtremessages() {
        const response = await fetch(
            "http://localhost:8080/comments"
          );
          const data = await response.json();
          filtre.push(data);
     //     console.log(filtre);

        
          async function MessagesDetailfiltre() {
           for (let i = 0; i < filtre[0].length; i++) {
          
           const date1 = new Date(`${filtre[0][i].date}`)
           const dateStr = date1.toLocaleString('en-US', {
              timeZone: "Europe/London"
            })
            const date2 = new Date (dateStr)
            var dd = date2.getDate();
            var yyyy = date2.getFullYear();
            var mm = date2.getMonth()+1
           // console.log(dd + "/"+mm + "/"+ yyyy)
            const date3 = yyyy + "-"+mm+"-"+dd

           var t;
           t = document.getElementById("filterdate").value; 
           const newT = new Date(t);          
                var dd1 = newT.getDate();
               var yyyy1 = newT.getFullYear();
               var mm1 = newT.getMonth()+1
               const filterT = yyyy1 + "-"+mm1+"-"+dd1
         
            

           if (filterT === date3){
         
              const MessageContainer = document.createElement("div");
              MessageContainer.className = "message-container";
              filtrebox.appendChild(MessageContainer);

              const date = document.createElement("h4");
              const date1 = new Date(`${filtre[0][i].date}`)
              const dateStr = date1.toLocaleString('en-US', {
                  timeZone: "Europe/London"
               })
               const date2 = new Date (dateStr)
               var dd = date2.getDate();
               var yyyy = date2.getFullYear();
               var mm = date2.getMonth()+1
              // console.log(dd + "/"+mm + "/"+ yyyy)
               const date3 = dd + "/"+mm+"/"+yyyy
               date.textContent = date3;
               MessageContainer.appendChild(date);

              const FiltreText = document.createElement("p");
              FiltreText.textContent = `${filtre[0][i].my_note}`;
              FiltreText.className = "message-text";
              MessageContainer.appendChild(FiltreText);

              const myexercise = document.createElement("p");
              myexercise.textContent = `Exercise: ${filtre[0][i].exercise}`;
              myexercise.className = "exercise";
              MessageContainer.appendChild(myexercise);
    
              const mysets = document.createElement("p");
              mysets.textContent = `Sets: ${filtre[0][i].sets}`;
              mysets.className = "sets";
              MessageContainer.appendChild(mysets);
    
              const myreps = document.createElement("p");
              myreps.textContent = `Reps: ${filtre[0][i].reps}`;
              myreps.className = "reps";
              MessageContainer.appendChild(myreps);
    
              const myweight = document.createElement("p");
              myweight.textContent = `Weight: ${filtre[0][i].weight}`;
              myweight.className = "weight";
              MessageContainer.appendChild(myweight);

              
        
            
          }
        }
        
        
    }
        MessagesDetailfiltre(filtre);
      }

      function clear() {
        filtrebox.innerHTML = null;
      }

      filtremessagebutton.addEventListener("click",filtremessages);
      filtremessagebutton.addEventListener("click",clear);



