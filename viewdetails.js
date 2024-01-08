// viewEmployeeForm//////////////////////
const url = new URL(window.location.href);
const id = url.searchParams.get("id");
console.log("id is:", id);
viewEmployee(id);
async function viewEmployee(id) {
    const response = await fetch(`http://localhost:3000/employees/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    document.getElementById("viewImageEdit").innerHTML = `<img src = "http://localhost:3000/employees/${id}/avatar">`
    let fullName = data.salutation + "." + data.firstName + data.lastName
    document.getElementById("name").innerHTML = fullName;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("gender").innerHTML = data.gender;
    document.getElementById("dateOfBirth").innerHTML = data.dob;
    const [year, month, day] = data.dob.split("-");
    const formattedDate = `${day}-${month}-${year}`
   const age=calculateAge(formattedDate);
    document.getElementById("age").innerHTML = age;
    document.getElementById("mobileNumber").innerHTML = data.phone;
    document.getElementById("qualification").innerHTML = data.qualifications;
    document.getElementById("address").innerHTML = data.address;
    document.getElementById("userName").innerHTML = data.username;
}
//agecalculation//////////////
function calculateAge(formattedDate) {
    let date = new Date(formattedDate);
    let currentDate = new Date();
    console.log("date:", date);
    const timeDiff = currentDate - date;
    const age = Math.floor(timeDiff / (365.24 * 24 * 60 * 60 * 1000)); 
    return age;
}
const editDelete = document.getElementById("editDelete");
editDelete.addEventListener('click', () =>{
  //  delete_employee(id) ;
   deletepopup ();
   
});

const editDelet = document.getElementById("editDelet");
editDelet.addEventListener('click', () => {
  delete_employee(id);
})

function delete_employee(id) {
   fetch( `http://localhost:3000/employees/${id}`, {
       method: 'DELETE',
   }
   ).then(response => response.json())
       .then(data => {
           console.log('API Response:', data);
           window.location.href="index.html";
          
       })
       .catch(error => {
           console.error('Error:', error);
       });
    }
    // delete popup
function deletepopup () {
    const deleteEmployeePopupMenuED = document.getElementById("deleteEmploypopup");
    deleteEmployeePopupMenuED.style.visibility = "visible";
  
    const overlay = document.getElementById("overlay");
    overlay.style.visibility="visible";
  }



//   dlteditemployeee////////////
  function editEmployeeEd(){
    const editEmployeeEd = document.getElementById("editEmployeeEd");
    editEmployeeEd.style.visibility="visible";
    const overlayEd = document.getElementById("overlayEd");
    overlayEd.style.visibility="visible";

    editData(id)
 }
 function cancelEd () {
    const editEmployeeEd = document.getElementById("editEmployeeEd");
    editEmployeeEd.style.visibility="hidden";

    const overlayEd = document.getElementById("overlayEd");
    overlayEd.style.visibility="hidden";

    const deleteEmployeePopupMenuED = document.getElementById("deleteEmployeePopupMenuED");
    deleteEmployeePopupMenuED.style.visibility = "hidden";
 }
