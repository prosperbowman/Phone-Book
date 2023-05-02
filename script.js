// const phonebook = {
//     contacts: [
//     {
//         id: 1,
//         name: "Prosper",
//         photo: "",
//         orangeNumber: "0776767678",
//         lonestarNumber: "0886787876",
//         email: "bowmanprosper@gmail.com",
//         address: "St.Peter's",
//         dob: "03/03/2020",
//     },
//     {
//         id: 2,
//         name: "Leroy",
//         photo: "",
//         orangeNumber: "0776764544",
//         lonestarNumber: "0884678876",
//         email: "bowmanprosper@gmail.com",
//         address: "St.Peter's",
//         dob: "03/01/2004",
//     },
// ],

//     all: function(){
//         return contacts;
//     }

// }


// display in DOM


const reset_btn = document.querySelector("#button");
const save_btn = document.querySelector("#save");
const cancel_btn = document.querySelector("#cancel");
const edit_btn = document.querySelector(".edit");
const remove_btn = document.querySelector("remove");
const contacts = document.querySelector("#contacts");

// /---------------------------------------------------------------------------------------/

const file = document.querySelector("#file");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const orangeNumber = document.querySelector("#orangeNumber");
const lonestarNumber = document.querySelector("#lonestarNumber");
let fileImageArray = [];
const imageEl = document.querySelector("#img");

// /-------------------------------------------------------------------------------------------/

let ContactArray = [];
// let id = 0;


function Contact(file, fullname, email, orangeNumber, lonestarNumber){
	this.file = file;
	this.fullname = fullname;
	this.email = email;
	this.orangeNumber = orangeNumber;
	this.lonestarNumber = lonestarNumber;
}

// document.addEventListener('DOMContentLoaded', function(){
// 	ContactArray = [
// 		{
// 			file: this.images,
// 			fullname: "Prosper Bowman",
// 			email: "bowmanprosperousjr@gmail.com",
// 			orangeNumber: "0770107481",
// 			lonestarNumber: "0880343432",
// 		}
// 	]
//     displayRecord();
// });

file.addEventListener("change", () => {
	const inputFile = file.files;
	// console.log(inputFile);
    displayimage();
    // addToList(inputFile);
    resetInputs();
}
);

function displayimage(){
    let images = "";

    fileImageArray.forEach((images) => {
        images += `
            <li class="contacts">
                <span id="img">${URL.createObjectURL(images)}</span>
                    <span id="inform">
                    <span class="name">Blama Doe</span>
                    <span class="address">blamadoe@gmail.com</span>
                    <span class="orangeNumber">0770100000 /
                    <span class="lonestarNumber">0880868788</span>
                    <span class="edit"><i class="fa fa-pencil"></i></span>
                    <span class="remove">&#10005;</span>
                    </span>
                    </span>
            </li>    
        
        `
    })
        imageEl.innerHTML = images;
        inputFile.innerHTML = images;

}


save_btn.addEventListener('click', function (event)
{
	const contacter = new Contact(file.inputFile, fullname.value, email.value, orangeNumber.value, lonestarNumber.value);
	ContactArray.push(contacter);


	addToList(contacter);
})

// function displayRecord(){
//     ContactArray.forEach(function(singleContact){
//         addToList(singleContact);
//     });
// }

function addToList(item){

    // let images = "";

    // fileImageArray.forEach((images) => {
    //     images += `
    //         <li class="contacts">
    //             <span id="img"><img src="${URL.createObjectURL(images)}" alt="image">${URL.createObjectURL(images)}</span>
    //                 <span id="inform">
    //                 <span class="name">Blama Doe</span>
    //                 <span class="address">blamadoe@gmail.com</span>
    //                 <span class="orangeNumber">0770100000 /
    //                 <span class="lonestarNumber">0880868788</span>
    //                 <span class="edit"><i class="fa fa-pencil"></i></span>
    //                 <span class="remove">&#10005;</span>
    //                 </span>
    //                 </span>
    //         </li>    
        
    //     `
    // })
    //     imageEl.innerHTML = images;

    //     inputFile = images;

        const RecordDiv = document.createElement('div');
        RecordDiv.classList.add('listContact');
        RecordDiv.innerHTML = `
        		<ol id="contacts">
                    <li class="contacts">
                        <span id="img">${item.file}</span>
                        <span id="inform">
                            <span class="name">${item.fullname}</span>
                            <span class="address">${item.email}</span>
                            <span class="orangeNumber">${item.orangeNumber} / 
                                <span class="lonestarNumber">${item.lonestarNumber}</span>
                                <span class="edit"><i class="fa fa-pencil"></i></span>
                                <span class="remove">&#10005;</span>
                            </span>
                        </span>
                    </li>
                    <hr>
                </ol> 
        `;
        contacts.appendChild(RecordDiv);
        resetInputs();
    }


function resetInputs() {
	file.value = "";
    fullname.value = "";
    email.value = "";
    orangeNumber.value = "";
    lonestarNumber.value = "";
}

// buttonEl.addEventListener('click', function(event){
//     let langs = ['input','input'];

//     let nodes = langs.map(lang => {
//     let input = document.createElement("li");
//     input.textContent = lang;
//     return input;
//     });

//     buttonEl.append(...nodes);
// });

