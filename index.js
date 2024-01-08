function DisplayAddEmployeeForm() {
  const addEmployeeForm = document.getElementById('addEmployeeForm');
  addEmployeeForm.style.visibility = "visible";
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "visible";
}
function closeEmployeeForm() {
  const addEmployeeForm = document.getElementById('addEmployeeForm');
  addEmployeeForm.style.visibility = "hidden";
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
}
function selectionform(id) {
  const selection = document.getElementById("selctionmenu");
  selection.innerHTML = `  <ul> <a href="/sample.html?id=${id}">
    <li> <i class="fa-solid fa-eye"></i> <span>View Details</span>
    </li>
</a> <a href="#">
    <li onclick="editEmployform('${id}')"> <i class="fa-solid fa-pen"  ></i> <span>Edit</span>
    </li>
</a> <a href="#">
    <li onclick="deleteEmploy('${id}')"> <i class="fa-solid fa-trash"></i> <span>Delete</span>
    </li>
</a>
</ul>`
  selection.style.visibility = "visible";

  document.addEventListener("mousedown", function (event) {
    const isClickInside = selection.contains(event.target);
    if (!isClickInside) {
      selection.style.visibility = "hidden";
    }
  });
  

}
function editEmployform(id) {
  const editingform = document.getElementById("editinglist");
  editingform.style.visibility = "visible";
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "visible";
  updatingform(id)
}
function closeMenu() {
  const canceled = document.getElementById("editinglist")
  canceled.style.visibility = "hidden";
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
}
function Exitpage() {
  const editingform = document.getElementById("editinglist");
  editingform.style.visibility = "hidden";
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
}
function deleteEmploy() {
  const deleteEmploy = document.getElementById("deleteEmploy");
  deleteEmploy.style.visibility = "visible"
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "visible";
}
function closePage() {
  const deleteEmploy = document.getElementById("deleteEmploy");
  deleteEmploy.style.visibility = "hidden"
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
}
function employeadded() {
  const addEmployeeForm = document.getElementById("addEmployeeForm");
  addEmployeeForm.style.visibility = "hidden"
  const overlay = document.getElementById('overlay');
  const employeadded = document.getElementById("employeadded");
  overlay.style.visibility = "visible";
  employeadded.style.visibility = "visible";
  setTimeout(() => {
    overlay.style.visibility = "hidden";
    employeadded.style.visibility = "hidden";
  }, 700);

}



getEmployee();
function getEmployee() {
  fetch("http://localhost:3000/employees")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      let tableData = document.getElementById("tableData");
      let temp = "";

      const employee_number = document.getElementById('employeeNumber');
      employee_number.addEventListener("click", getEmployee);
      const TotalCountOnPage = employee_number.value;

      // /page
      const employeeTotal = document.getElementById("employeeTotal");
      employeeTotal.innerHTML = `of ${data.length}`;
      const totalPages = Math.ceil(data.length / TotalCountOnPage);
      pagination(totalPages);
      const start = TotalCountOnPage * (CurrentPage - 1);
      const end = Math.min(TotalCountOnPage * CurrentPage, data.length);

      for (let i = start; i < end; i++) {
        let employees = data[i]
        temp += `<tr class="employesList">
                                <td>#${i + 1}</td>
                                <td class="doublesection"><img style="width:30px"src="http://localhost:3000/employees/${employees.id}/avatar">
                                ${employees.salutation + "." + " " + employees.firstName +  "  " +employees.lastName}</td>
                                <td>${employees.email}</td>
                                <td>${employees.phone}</td>
                                <td>${employees.gender}</td>
                                <td>${employees.dob}</td>
                                <td>${employees.country}</td>
                                <td><button type="button" class="optionsButton" onclick=selectionform("${employees.id}")>...</button></td>

                                <div class="buttonDropDown" id="selctionmenu">
                                  
                                </div>
                                
                            </tr>
            `

      }
      tableData.innerHTML = temp;

    })

}



// function addEmployeeForm() {
//     const salutation = document.getElementById("SelectionMethod").value;
//     const firstName = document.getElementById("addfirstName").value;
//     const lastName = document.getElementById("addLastName").value;
//     const email = document.getElementById("addEmail").value;
//     const addNumber = document.getElementById("addNumber").value;
//     const Dateofbirth = document.getElementById("addDateofbirth").value; // Fix: Capture the value
//     const gender = document.querySelector('input[name="Gender"]:checked').value; // Fix: Select the checked radio button
//     const Qualification = document.getElementById("addQualification").value;
//     const addAddress = document.getElementById("addAddress").value;
//     const country = document.getElementById("addCountry").value;
//     const state = document.getElementById("addState").value;
//     const city = document.getElementById("addCity").value;
//     const pincode = document.getElementById("addPincode").value;

//     const employeeObject = {
//         salutation: salutation,
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         phone: addNumber,
//         dob: Dateofbirth,
//         gender: gender,
//         qualifications: Qualification,
//         address: addAddress,
//         country: country,
//         state: state,
//         city: city,
//         pin: pincode,
//         username: firstName,
//         password: addNumber,
//     };

//     fetch("http://localhost:3000/employees", {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body:employeeObject ,
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then(data => {
//     console.log('Success:', data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });

// }
function addEmployeeForm() {

  const salutation = document.getElementById("SelectionMethod").value;
  const firstName = document.getElementById("addfirstName").value;
  const lastName = document.getElementById("addLastName").value;
  const email = document.getElementById("addEmail").value;
  const addNumber = document.getElementById("addNumber").value;
  const Dateofbirth = document.getElementById("addDateofbirth").value;
  const gender = document.querySelector('input[name="Gender"]:checked').value;
  const Qualification = document.getElementById("addQualification").value;
  const addAddress = document.getElementById("addAddress").value;
  const country = document.getElementById("addCountry").value;
  const state = document.getElementById("addState").value;
  const city = document.getElementById("addCity").value;
  const pincode = document.getElementById("addPincode").value;


  const dob = Dateofbirth;
  const [year, month, day] = dob.split("-");
  const formattedDate = `${day}-${month}-${year}`

  const employeeObject = {
    salutation: salutation,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: addNumber,
    dob: formattedDate,
    gender: gender,
    qualifications: Qualification,
    address: addAddress,
    country: country,
    state: state,
    city: city,
    pin: pincode,
    username: firstName,
    password: addNumber,
  };

  fetch("http://localhost:3000/employees", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employeeObject),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      //////////// img Upload/////////////
      console.log('API Response:', data);
      const uploadImage = document.getElementById("uploadImage");
      const formData = new FormData();
      formData.append("avatar", uploadImage.files[0]);
      console.log("data id:", data.id);
      fetch(`http://localhost:3000/employees/${data.id}/avatar`, {
        method: "POST",
        body: formData
      })
        .then((res) => {
          console.log("Image uploading image:", res);
        })
        .catch((err) => {
          console.log("error uploading image:", err);

        })
    })
    .catch(error => {
      console.error('Error:', error);
    });
  getEmployee();
  closeEmployeeForm();
  employeadded();


}


function deleteEmploy(id) {
  console.log(id);
  const deleteEmploy = document.getElementById("deleteEmploy");
  deleteEmploy.style.visibility = "visible"
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "visible";

  const deletebutton = document.getElementById("deletEmployeeBtn");
  deletebutton.addEventListener('click', () => {
    employeDelete(id);
  })
}

function employeDelete(id) {
  fetch(`http://localhost:3000/employees/${id}`, {
    method: 'DELETE',
  });
  closePage();
  getEmployee();
}
// / ........validateForm.............start
function validateForm() {
  const salutation = document.getElementById("SelectionMethod").value;
  console.log("salutation", salutation);
  const firstName = document.getElementById("addfirstName").value;

  const lastName = document.getElementById("addLastName").value;
  const email = document.getElementById("addEmail").value;
  const phone = document.getElementById("addNumber").value;
  const dobInput = document.getElementById("addDateofbirth");
 
  const selectedGender = document.querySelector('input[name="Gender"]:checked');
  const qualifications = document.getElementById("addQualification").value;
  const address = document.getElementById("addAddress").value;
  const country = document.getElementById("addCountry").value;
  const state = document.getElementById("addState").value;
  const city = document.getElementById("addCity").value;
  const pin = document.getElementById("addPincode").value;
  console.log("pin", pin);

  console.log("hiii");
  // regex validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phonePattern = /^\d{10}$/;
  const namePattern = /^[A-Za-z]+$/;
  let isValid = true;
  // image_validation-----------------
  const imageInput = document.getElementById("uploadImage");
  const imageError = document.getElementById("uploadImageError");
  if (imageInput.files.length === 0) {
    imageError.textContent = "Please select an image.";
    isValid = false;
  } else {
    imageError.textContent = "";
  }
  if (salutation === "select") {
    document.getElementById("SelectionMethodError").textContent = "Invalid select";
    isValid = false;
  }
  if (!namePattern.test(firstName)) {
    document.getElementById("addfirstNameError").textContent = "First Name is required";
    isValid = false;
  }
  if (!namePattern.test(lastName)) {
    document.getElementById("addLastNameError").textContent = "Last Name is required";
    isValid = false;
  }
  if (!emailPattern.test(email)) {
    document.getElementById("addEmailError").textContent = "Invalid Email";
    isValid = false;
  }
  if (!phonePattern.test(phone)) {
    document.getElementById("addNumberError").textContent = "Invalid Phone Number";
    isValid = false;
  }
  if (dobInput.value === "") {
    document.getElementById("addDateofbirthError").textContent = "Date of Birth is required";
    isValid = false;
  }
  if (selectedGender) {
    genderError.textContent = "";
  } else {
    genderError.textContent = "Please select a gender";
    isValid = false;
  }
  if (qualifications === "") {
    document.getElementById("addQualificationError").textContent =
      "Qualifications is required";
    isValid = false;
  }
  if (address === "") {
    document.getElementById("addAddressError").textContent = "Address is required";
    isValid = false;
  }
  if (country === "select country") {
    document.getElementById("addCountryError").textContent = "country is required";
    isValid = false;
  }
  if (state === "select state") {
    document.getElementById("addStateError").textContent = "state is required";
    isValid = false;
  }
  if (city === "") {
    document.getElementById("addCityError").textContent = "city is required";
    isValid = false;
  }
  if (pin === "") {
    document.getElementById("addPincodeError").textContent = "pin is required";
    isValid = false;
  }
  document.getElementById("addEmployeeForm").addEventListener("input", (event) => {
    const dataName = event.target.id;
    const errorId = `${dataName}Error`;
    document.getElementById(errorId).textContent = "";
  });

  if (isValid) {
    addEmployeeForm();
  }
}
const maleRadioButton = document.getElementById("addmale");
const femaleRadioButton = document.getElementById("addfemale");
const genderError = document.getElementById("genderError");

maleRadioButton.addEventListener("click", () => {
  genderError.textContent = "";
});

femaleRadioButton.addEventListener("click", () => {
  genderError.textContent = "";
});
//---------------------------- editEmployeeeee-----------------------//

function editinglist(id) {
  const salutation = document.getElementById("editSelection").value;
  const firstName = document.getElementById("editFirstName").value;
  const lastName = document.getElementById("editLastName").value;
  const email = document.getElementById("editEmail").value;
  const addNumber = document.getElementById("editNumber").value;
  const Dateofbirth = document.getElementById("editDob").value;
  const gender = document.querySelector('input[name="editgender"]:checked').value;
  const Qualification = document.getElementById("editQualification").value;
  const addAddress = document.getElementById("editAddress").value;
  const country = document.getElementById("editCountry").value;
  const state = document.getElementById("editSate").value;
  const city = document.getElementById("editCity").value;
  const pincode = document.getElementById("editPincode").value;
  const dob = Dateofbirth;

  const [year, month, day] = dob.split("-");
  const formattedDate = `${day}-${month}-${year}`
//////////////////////////////////////

  const updateingEmployee = {
    salutation: salutation,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: addNumber,
    dob: formattedDate,
    gender: gender,
    qualifications: Qualification,
    address: addAddress,
    country: country,
    state: state,
    city: city,
    pin: pincode,
    username: firstName,
    password: addNumber,
  };
  fetch(`http://localhost:3000/employees/${id}`, {
    method: "PUT",

    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(updateingEmployee)
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('success:', data);
      location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // edit pic upload
  const editingImage = document.getElementById("editingImage");
  if (editingImage.files.length > 0) {
    const formData = new FormData();
    formData.append("avatar", editingImage.files[0]);
    // upload
    fetch(`http://localhost:3000/employees/${id}/avatar`, {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  closeMenu();
  getEmployee();

}
// // editvalidation//////////////
function editvalidation(id) {
  const salutation = document.getElementById("editSelection").value;
  console.log("salutation", salutation);
  const firstName = document.getElementById("editFirstName").value;
  const lastName = document.getElementById("editLastName").value;
  const email = document.getElementById("editEmail").value;
  const phone = document.getElementById("editNumber").value;
  const dobInput = document.getElementById("editDob");
  const qualifications = document.getElementById("editQualification").value;
  const address = document.getElementById("editAddress").value;
  const country = document.getElementById("editCountry").value;
  const state = document.getElementById("editSate").value;
  const city = document.getElementById("editCity").value;
  const pin = document.getElementById("editPincode").value;
  console.log("pin", pin);

  console.log("hiii");
  // regex validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phonePattern = /^\d{10}$/;
  const namePattern = /^[A-Za-z]+$/;
  let isValid = true;
  // image_validation-----------------
  // const imageInput = document.getElementById("uploadImage");
  // const imageError = document.getElementById("imageError");
  // if (imageInput.files.length === 0) {
  //   imageError.textContent = "Please select an image.";
  //   isValid = false;
  // } else {
  //   imageError.textContent = "";
  // }
  if (salutation === "select") {
    document.getElementById("editSelectionError").textContent = "Invalid select";
    isValid = false;
    console.log("isValid1");
  }
  if (!namePattern.test(firstName)) {
    document.getElementById("editFirstNameError").textContent = "First Name is required";
    isValid = false;
    console.log("isValid2");
  }
  if (!namePattern.test(lastName)) {
    document.getElementById("editLastNameError").textContent = "Last Name is required";
    isValid = false;
    console.log("isValid3");
  }
  if (!emailPattern.test(email)) {
    document.getElementById("editEmailError").textContent = "Invalid Email";
    isValid = false;
    console.log("isValid4");
  }
  if (!phonePattern.test(phone)) {
    document.getElementById("editNumberError").textContent = "Invalid Phone Number";
    isValid = false;
    console.log("isValid5");
  }
  if (dobInput.value === "") {
    document.getElementById("editDobError").textContent = "Date of Birth is required";
    isValid = false;
    console.log("isValid6");
  }
  // if (selectedGender) {
  //   genderError.textContent = "";
  // } else {
  //   genderError.textContent = "Please select a gender";
  //   isValid = false;
  //   console.log("isValid7");
  // }
  if (qualifications === "") {
    document.getElementById("editQualificationError").textContent =
      "Qualifications is required";
    isValid = false;
    console.log("isValid8");
  }
  if (address === "") {
    document.getElementById("editAddressError").textContent = "Address is required";
    isValid = false;
    console.log("isValid9");
  }
  if (country === "select country") {
    document.getElementById("editCountryError").textContent = "country is required";
    isValid = false;
    console.log("isValid10");
  }
  if (state === "select state") {
    document.getElementById("editSateError").textContent = "state is required";
    isValid = false;
    console.log("isValid10");
  }
  if (city === "") {
    document.getElementById("editCityError").textContent = "city is required";
    isValid = false;
    console.log("isValid11");
  }
  if (pin === "") {
    document.getElementById("editPincodeError").textContent = "pin is required";
    isValid = false;
    console.log("isValid12");
  }
  document.getElementById("editinglist").addEventListener("input", (event) => {
    const dataName = event.target.id;
    const errorId = `${dataName}Error`;
    document.getElementById(errorId).textContent = "";
  });
  console.log("isValid", isValid);
  if (isValid) {
    console.log("true");
    editinglist(id);
  }
}
//   const maleRadioButton = document.getElementById("editmale");
// const femaleRadioButton = document.getElementById("editfemale");
// const genderError = document.getElementById("genderError");

// maleRadioButton.addEventListener("click", () => {
//   genderError.textContent = "";
// });

// femaleRadioButton.addEventListener("click", () => {
//   genderError.textContent = "";
// });




function updatingform(id) {
  fetch(`http://localhost:3000/employees/${id}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('success:', data);
      const editImage = document.getElementById("editImage");
      editImage.src = `http://localhost:3000/employees/${id}/avatar`;
      document.getElementById("editSelection").value = data.salutation;
      document.getElementById("editFirstName").value = data.firstName;
      document.getElementById("editLastName").value = data.lastName;
      document.getElementById("editEmail").value = data.email;
      document.getElementById("editNumber").value = data.phone;

      const dob = data.dob;
      const [year, month, day] = dob.split("-");
      const formattedDate = `${day}-${month}-${year}`
      document.getElementById("editDob").value = formattedDate;
      document.querySelector(`input[name="editgender"][value="${data.gender}"]`).checked = true;
      console.log("hahahaa");
      document.getElementById("editQualification").value = data.qualifications;
      document.getElementById("editAddress").value = data.address;
      document.getElementById("editCountry").value = data.country;
      document.getElementById("editSate").value = data.state;
      document.getElementById("editCity").value = data.city;
      document.getElementById("editPincode").value = data.pin;
      // edit image section

    })
  // editimageSection/////////////////////////


  
  const saveEditForm = document.getElementById('saveEditForm');
  saveEditForm.addEventListener("click", () => {
    editvalidation(id);
    // editinglist();
    // getEmployee();

  })
}



function searchInput() {
  let searchValue = document.getElementById("searchInput").value;
  searchValue = searchValue.toLowerCase();
  let rows = document.getElementsByTagName("tr");
  let employeeNotFound = document.getElementById("employeeNotFound");
  let found = false;
  for (let i = 1; i < rows.length; i++) {
    if (!rows[i].innerHTML.toLowerCase().includes(searchValue)) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
      found = true;
    }
  }
  if (found) {
    employeeNotFound.style.display = "none";
  } else {
    employeeNotFound.style.display = "block";
  }
}
////////////////////// uploadImage///////////////////////////////
const upload_File = document.getElementById("uploadImage");
upload_File.addEventListener("change", uploadImage);
function uploadImage() {
  const imgLink = URL.createObjectURL(upload_File.files[0]);
  const imgview = document.getElementById("image");
  imgview.src = imgLink
}

////pagenation////////////////////////////////////////////////////////
var CurrentPage = 1;
function pagination(totalPages) {
  var pgnum = document.getElementById("Page_Num_Btns");
  let temp = '';
  for (let i = 1; i <= totalPages; i++) {
    temp += `<button id="page${i}">${i}</button>`;
  }
  pgnum.innerHTML = temp;
  pgnum.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      const pageNumber = parseInt(e.target.textContent);
      if (!isNaN(pageNumber)) {
        CurrentPage = pageNumber;
        getEmployee();
      }
    }
  });
  var pageLeftButton = document.getElementById("pageleft");
  var pageRightButton = document.getElementById("pageright");
  if (CurrentPage === 1) {
    pageLeftButton.classList.add('hidden');
  } else {
    pageLeftButton.classList.remove('hidden');
  }
  if (CurrentPage === totalPages) {
    pageRightButton.classList.add('hidden');
  } else {
    pageRightButton.classList.remove('hidden');
  }
  pageLeftButton.addEventListener("click", function () {
    if (CurrentPage > 1) {
      CurrentPage--;
      getEmployee();
    }
  });
  pageRightButton.addEventListener("click", function () {
    if (CurrentPage < totalPages) {
      CurrentPage++;
      getEmployee();
    }
  });
  const actionButton = document.getElementById(`page${CurrentPage}`);
  actionButton.classList.add('active');
}
/////////////// popupemployeeForm//////////////////////
function closeEmployeePopup() {
  const employeadded = document.getElementById("employeadded");
  employeadded.style.visibility = "hidden";
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";

}


//////////////// editimageupload-section/////////////////////////////
let selectedimage = document.getElementById("editImage");
let editimageupload = document.getElementById("editingImage");
editimageupload.onchange = function () {
  selectedimage.src = URL.createObjectURL(editimageupload.files[0]);
  selectedimage.style.width = "230px";
  editimageupload.style.height = "134px";
}

