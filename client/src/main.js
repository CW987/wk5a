const workoutdiary = document.querySelector(".input-form");


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
      console.log(MessageBox);
      async function MessagesDetail() {
       for (let i = 0; i < MessageBox[0].length; i++) {
          //console.log(i);
    
          const MessageContainer = document.createElement("div");
          MessageContainer.className = "message-container";
          
    
          const date = document.createElement("h4");
         const date1 = new Date(`${MessageBox[0][i].date}`)
         const dateStr = date1.toLocaleString('en-US', {
            timeZone: 'America/New_York'
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

          const deleteComment = document.createElement("button");
          deleteComment.textContent = `Delete ${MessageBox[0][i]}`
          deleteComment.className = "deleteComment"
          MessageContainer.appendChild(deleteComment)


          Messageshop.appendChild(MessageContainer);
    
          
    }
      }
      MessagesDetail();
    }
    
    messages();
    
