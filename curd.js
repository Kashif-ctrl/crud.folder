var selectedRow = null;

function onFormSubmit() {
  
    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecode(formData);
    } else {
      updateRecord(formData);
    }
    resetForm(formData);
  // const formData=
  // const formData= (fullName,empCode,salry,city)=>{
  //   formData.push({
  //     fullName,
  //     empCode,
  //     salry,
  //     city,
  //   });
  //   localStorage.setItem("newCrud", JSON.stringify(formData));
  // };

 window.localStorage.setItem("newCrud", JSON.stringify(formData));
  // localStorage.setItem("newkey","formData")
  // localStorage.getItem(JSON.parse(formData))
 const ali= JSON.parse(window.localStorage.getItem(formData));
  // console.log(insertNewRecode);
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salry"] = document.getElementById("salry").value;
  formData["city"] = document.getElementById("city").value;

  console.log(formData["fullName"]);

  return formData;
}
function insertNewRecode(data) {
  var table = document
    .getElementById("employeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);

  // console.log(newRow);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empCode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salry;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                  <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
  
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salry").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salry").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salry;
  selectedRow.cells[3].innerHTML = formData.city;
}
function onDelete(td) {
  if (confirm("are you sure to delet this row")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
// function validate() {
//   isValid = true;
//   if (document.getElementById("fullName").value == "") {
//     isValid = false;
//     document.getElementById("fullNamevalidationError").classList.remove("hide");
//   } else {
//     isValid = true;
//     if (
//       !document.getElementById("fullNamevalidationError").classList.contains("hide"))
//       document.getElementById("fullNamevalidationError").classList.add("hide");
    
//   }
//   return isValid;
// }
