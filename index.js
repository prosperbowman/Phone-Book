// 1 one
const contacts = [
    {
    id: 1,
    name: "Prosper",
    photo: "",
    orangeNumber: "0776767678",
    lonestarNumber: "0886787876",
    email: "bowmanprosper@gmail.com",
    address: "St.Peter's",
    dob: "03/03/2020",
    },
    {
    id: 2,
    orangeNumber: "0776764544",
    lonestarNumber: "0884678876",
    email: "bowmanprosper@gmail.com",
    address: "St.Peter's",
    dob: "03/01/2004",
    }
];


// 2 two get todo

function all(){
    return contacts;
}

console.log(all());



function get(email){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].email === email){
            return contacts[i];
        }
    }
    return contacts[num];
}

console.log(get("bowmanprosper@gmail.com"));

// 3 Three

function add(
    name,
    photo,
    orangeNumber,
    lonestarNumber,
    email,
    address,
    dob,
    ){
       const contact = {
        id: contacts.length + 1,
        name: name,
        photo: photo,
        orangeNumber: orangeNumber,
        lonestarNumber: lonestarNumber,
        email: email,
        address: address,
        dob: dob,
       }

       contacts.push(contact);
} 
add("Leroy"," ","0770898778","0880787876","leroy@gmail.com","St.Peter's","03/04/2003");
console.log(contacts);

// 4 delete a contact

console.log(contacts);

function remove(id){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].id === id) contacts.splice(i, 1);
    }
}

remove(1)

console.log(contacts);

// 5 search

function search(value)
{
    const findContact = [];
    value = value.toLowerCase;

    for(let i = 0; i < contacts.length; i++)
    {
        const name = contacts[i].name.toLowerCase();
        if(name.includes(value)){
            findContact.push(contacts[i]);
        }
    }
    return findContact;
}

console.log(search("bowman"));


function render(){
    for(let i = 0; i < contacts.length; i++){
        const list = document.querySelector(".contact-list");
        list.insertAdjacentHTML('beforeend',
        `
        <li>
                <span id="img"><img src="./image/imgfive.jpg"></span>
                <span id="inform">
                    <span class="name">Blama Doe</span>
                    <span class="email">blamadoe@gmail.com
                        <span class="edit"><i class="fa fa-pencil"></i></span>
                        <span class="remove">&#10005;</span>
                    </span>
                </span>
            </li>
        `
        )
    }
}
render();