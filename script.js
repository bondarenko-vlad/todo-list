let scopeEl = document.querySelector('.scope')
let successfulEl = document.querySelector('.successful')
let activeEl = document.querySelector('.active')
scopeEl.innerHTML = document.querySelectorAll('li').length
successfulEl.innerHTML = document.querySelectorAll('.checked').length
activeEl.innerHTML = Number(scopeEl.innerHTML) - Number(successfulEl.innerHTML)
let newTask = document.querySelector(".new-task");
newTask.onclick = () => {

    let dateObj = new Date()
    let month
    switch (dateObj.getMonth()){
        case 0:
            month='Jan'
            break;
        case 1:
            month='Feb'
            break;
        case 2:
            month='Mar'
            break;
         case 3:
            month='Apr'
            break;
        case 4:
            month='May'
            break;
        case 5:
            month='Jun'
            break;
        case 6:
            month='Jul'
            break;
        case 7:
            month='Aug'
            break;
        case 8:
            month='Sep'
            break;
        case 9:
            month='Oct'
            break;
        case 10:
            month='Nov'
            break;
        case 11:
            month='Dec'
            break;
        
    }
  // создание всех элементов =>
  let li = document.createElement("li");
  let liInfo = document.createElement("div");
  let div = document.createElement("div");
  let option = document.createElement("div");
  option.classList.add("option");
  let date = document.createElement("span");
  date.classList.add("date");
  date.innerHTML = dateObj.getDate()+ ' ' + month + ' ' + dateObj.getFullYear();
  liInfo.classList.add("li-info");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let edit = document.createElement("span");
  edit.classList.add("edit");
  edit.innerHTML = "&#10004;";
  let trash = document.createElement("span");
  trash.classList.add("trash");
  trash.innerHTML = "&#128465;";
  let textarea = document.createElement("textarea");

  // добавление их в документ =>
  document.querySelector("ul").appendChild(li);
  li.appendChild(liInfo);
  li.appendChild(textarea);
  liInfo.appendChild(div);
  liInfo.appendChild(option);
  div.appendChild(checkbox);
  div.appendChild(date);
  option.appendChild(edit);
  option.appendChild(trash);

  // отключение кнопки на время редактирования
  document.querySelector(".new-task").disabled = true;
  document.querySelector('.scope').innerHTML = document.querySelectorAll('li').length

  showStateFunc()
};

document.querySelector("ul").onclick = () => {
  if (event.target.innerHTML == "✔" && newTask.disabled == true) {
    let p = document.createElement("p");
    p.innerHTML = document.querySelector("textarea").value;
    event.target.parentElement.parentElement.parentElement.appendChild(p);
    document.querySelector("textarea").remove();
    event.target.innerHTML = "&#9998;";
    newTask.disabled = false;
    activeEl.innerHTML = Number(scopeEl.innerHTML) - Number(successfulEl.innerHTML)

  } else if (event.target.innerHTML == "✎" && newTask.disabled == false) {
    let textarea = document.createElement("textarea");
    let p = event.target.parentElement.parentElement.parentElement.children[1];
    textarea.value = p.innerHTML;
    event.target.parentElement.parentElement.parentElement.appendChild(textarea);
    p.remove();
    event.target.innerHTML = "&#10004;";
    newTask.disabled = true;
  } else if (event.target.type == "checkbox") {
    let p = event.target.parentElement.parentElement.parentElement.children[1];

    event.target.checked
      ? p.classList.add("checked")
      : p.classList.remove("checked");
      document.querySelector('.successful').innerHTML = document.querySelectorAll('.checked').length
      activeEl.innerHTML = Number(scopeEl.innerHTML) - Number(successfulEl.innerHTML)
    } else if (event.target.className == "trash") {
    event.target.parentElement.parentElement.parentElement.remove();
    newTask.disabled = false;
    document.querySelector('.scope').innerHTML = document.querySelectorAll('li').length
    document.querySelector('.successful').innerHTML = document.querySelectorAll('.checked').length
    activeEl.innerHTML = Number(scopeEl.innerHTML) - Number(successfulEl.innerHTML)
    if (activeEl.innerHTML< 0) activeEl.innerHTML=0
    showStateFunc()
  }
};


function showStateFunc(){
    let showState = document.createElement('p')
    if(document.querySelector('ul').children.length == 0) {
        showState.innerHTML = 'You have any tasks'
        showState.classList.add('showState')
        document.querySelector('ul').appendChild(showState)
    } else {
        document.querySelector('.showState').remove()
    }
}

