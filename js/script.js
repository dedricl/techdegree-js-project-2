/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Global variables that store the DOM elements
// needed to reference and/or manipulate.


const studentsList = document.querySelectorAll("li");
const itemsPerPage = 10;




// Create the `showPage` function to hide all of the items in the
// list except for the ten you to show on the current page.



const showPage = (list, page) => {
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;

  for (let i = 0; i < list.length; i += 1) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};

// Create the `appendPageLinks function` to generate the pagination buttons.

const appendPageLinks = list => {
  const numOfPages = list.length / itemsPerPage;
  const firstDiv = document.getElementsByClassName("page")[0];
  const div = document.createElement("div");
  const ul = document.createElement("ul");


  //To append the pagination buttons.
  div.className = "pagination";
  firstDiv.appendChild(div);
  div.appendChild(ul);

  for (let i = 0; i < numOfPages; i += 1) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = i + 1;
    link.href = "#";
    ul.appendChild(li);
    li.appendChild(link);
    const activeLink = document.getElementsByTagName("a");
    activeLink[0].className = "active";


    //To add functionality the pagination buttons.


    link.addEventListener("click", e => {
      for (let i = 0; i < activeLink.length; i += 1) {
        activeLink[i].classList.remove("active");
      }
      const event = e.target;
      event.classList.add("active");

      showPage(studentsList, link.textContent);
    });
  }
};

showPage(studentsList, 1); // To show the first 10 students
appendPageLinks(studentsList);
