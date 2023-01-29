///if link is expired please change the link
const url = "https://crudcrud.com/api/1e157e3fa69d44129180279efbaedc21/abc";
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const list = document.getElementById("list");

function addList(a, b, c, d) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<th>${a}</th>
    <td>${b}</td>
    <td>${c}</td>
    <td><button value='${d}'>Edit</button></td>
    <td><button value='${d}'>XXX</button></td>`;

  return tr;
}

axios.get(url).then((res) => {
  const users = res.data;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const row = addList(user.name, user.email, user.phone, user._id);
    list.appendChild(row);
   // console.log(user._id, "--->", user);
  }
});

form.addEventListener("submit", (e) => {
  // e.preventDefault();
  // const row=addList(name.value,email.value,phone.value);
  // list.appendChild(row);
  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };
  axios.post(url, data).then((res) => {
    location.reload();
    window.onload = function () {
      location.reload(true);
    };
  });

  // })

  form.reset();
});

// list.addEventListener('click',(e)=>{
//     if(e.target.tagName==='BUTTON'){
//         const btn=e.target;
//         if(btn.textContent==='XXX'){
//             console.log("Hellow world!!!");
//         }
//     }
// })

//-----------Button in Action-------------------
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const btn = e.target;
    if (btn.textContent === "XXX") {
      axios.delete(`${url}/${btn.value}`).then((res) => {
        location.reload();

        console.log("Delete success!!!");
      });
    }
  }
});
