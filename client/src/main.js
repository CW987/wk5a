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
    //location.reload(true);
}
, 3000)

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
          console.log(i);
    
          const MessageContainer = document.createElement("div");
          MessageContainer.className = "message-container";
          Messageshop.appendChild(MessageContainer);
    
          const date = document.createElement("h4");
          date.textContent = `"${MessageBox[0][i].date}"`;
          MessageContainer.appendChild(date);
    
          
          const MessageText = document.createElement("p");
          MessageText.textContent = `"${MessageBox[0][i].my_note}"`;
          MessageText.className = "message-text";
          MessageContainer.appendChild(MessageText);

          const myexercise = document.createElement("p");
          myexercise.textContent = `"${MessageBox[0][i].exercise}"`;
          myexercise.className = "exercise";
          MessageContainer.appendChild(myexercise);

          const mysets = document.createElement("p");
          mysets.textContent = `"${MessageBox[0][i].sets}"`;
          mysets.className = "exercise";
          MessageContainer.appendChild(mysets);

          const myreps = document.createElement("p");
          myreps.textContent = `"${MessageBox[0][i].reps}"`;
          myreps.className = "exercise";
          MessageContainer.appendChild(myreps);

          const myweight = document.createElement("p");
          myweight.textContent = `"${MessageBox[0][i].weight}"`;
          myweight.className = "exercise";
          MessageContainer.appendChild(myweight);
    
          
    }
      }
      MessagesDetail();
    }
    
    messages();
    


