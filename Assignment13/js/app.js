const title = document.getElementById("title");
const des = document.getElementById("des");

const hobbies = document.getElementById("hobbies");

function onClick() {
  const li = document.createElement("li");

  li.innerText = ` Title : ${title.value} :Description : ${des.value}`;

  hobbies.appendChild(li);
}