let selectedRow = null;

// show alert

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;


    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container")
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// clear all fields 
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
}

// Add data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //get form values 
    const firstName = document.querySelector("#Firstname").value;
    const lastName = document.querySelector("#LastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    // validate
    if (firstName == "" || lastName == "" || rollNo == "") {
        showAlert("please fill the form first", "danger");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");
            console.log(firstName);
            row.innerHTML = `
             <td>${firstName}</td>
             <td>${lastName}</td>
             <td>${rollNo}</td>
             <td>
                 <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                 <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
             </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("student Added", "success");
        }
        else {
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastNameName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("Student info edited", "info");
        }
        clearFields();
    }
});

// edit data

document.querySelector("#student-list").addEventListener("click",(e)=>{
    target = e.target
    if(target.classList.contains("edit")){
        selectedRow =target.parentElement.parentElement;
        document.querySelector("#FirstName").value = selectedRow.children[0].textContent;
        document.querySelector("#LastName").value = selectedRow.children[1].textContent;
        document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
    }
});

// delete data 

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted ", "danger")
    }
})