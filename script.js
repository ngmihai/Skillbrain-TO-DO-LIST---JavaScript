const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const listElement = document.getElementById("list");

const toDoList = [];

const addNewListItem = (textValue) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(textValue));
  li.classList.add("basicCard");
  listElement.appendChild(li);
};

buttonElement.addEventListener("click", () => {
  const value = inputElement.value;
  toDoList.push(value);
  addNewListItem(value);
  inputElement.value = "";
});

// 1)
// La enter sa se execute metoda de adaugare a elementor, la fel ca pe click
// Tips: sa se mute metoda din event listener-ul butonului intr-una separata si apelata din event-ul button-ului si din cel al input-ului
// Pentru input se foloseste event-ul de keydown, se va verifica faptul ca tasta apasata e Enter

// 2)
// De implementat o noua bara de tip input pentru cautarea anumitor task-uri dupa cuvinte
// Tips: se adauga un eventListener pe keydown pe noua bara de cautare si se parseaza toatele elementele din array (cu for) unde se va folosi metoda de la string includes si se vor returna doar task-urile coresponzatoare

// 3)
// Ca utilizator as vrea sa mi se salveze datele introduse si la restart sa fie citite si afisate
// Tip: localStorage
// La pornirea aplicatiei se citeste valoarea din localStorage si se umple array-ul toDoList, dupa care se afiseaza toate elementele (va faceti o metoda de afisare a elementelor pentru intregul array. Se parseaza elementele printr-un for si se apeleaza metoda addNewListItem)

// 4)
// Adaugare buton pe fiecare element li de tip X, colorat specific (de exemplu rosu) la click-ul caruia sa se stearga elementul din DOM, nu sa se ascunda
// Tips: Crearea un element de tip button cu createElement, se adauga ca si child la elementul li (sa nu se uite si event listener-ul)
