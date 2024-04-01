// // let Obj={
// //     Employee_Fname:"",
// //     Employee_Lname:"",
// //     Manager_Fname:"",
// //     Manager_Lname:"",
// //     Task:"",
// //     Task_ID:"",
// //     stat:"",
// //     add_Notes:"",
// //     ins:"",
// // }

function getSelectedRadioValue(name) {
    let radioButtons = document.getElementsByName(name);
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            return radioButton.value;
        }
    }
    return null;
}
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let Obj = {
        Employee_Fname: document.getElementById("emp1").value,
        Employee_Lname: document.getElementById("emp2").value,
        Manager_Fname: document.getElementById("man1").value,
        Manager_Lname: document.getElementById("man2").value,
        Task: document.getElementById("task").value,
        Task_ID: document.getElementById("task_id").value,
        stat: getSelectedRadioValue("Status"),
        add_Notes: document.getElementById("Notes").value,
        ins: document.getElementById("instructions").value
    };
    console.log(Obj)
});


// console.log(Obj);

// console.log(clear)
// submitBtn.addEventListener("click",()=>{
//     let Employee_Fname=document.getElementById("emp1").value
//     alert(Employee_Fname)
// })

// let submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     let selectedStatus = getSelectedRadioValue("Status");
//     console.log(selectedStatus);
// });

// function getSelectedRadioValue(name) {
//     let radioButtons = document.getElementsByName(name);
//     for (let radioButton of radioButtons) {
//         if (radioButton.checked) {
//             return radioButton.value;
//         }
//     }
//     return null; // or some default value
// }
