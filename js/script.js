/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const studentsList = document.querySelectorAll("li");
const itemsPerPage = 10;
const firstDiv = document.getElementsByClassName('page')[0];

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
const showPage = (list, page) => {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex =  page * itemsPerPage;

  for (let i = 0; i < list.length; i += 1) {
    if ((i >= startIndex) && i < endIndex) {
        list[i].style.display = "block";
    }else {
      list[i].style.display = 'none';
    }

  }
};
console.log(showPage(studentsList, 1));
/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = list => {
  const numOfPages = list.length / itemsPerPage;
  const div = document.createElement('div');
  const ul = document.createElement('ul');

  div.className = 'pagination';
  firstDiv.appendChild(div);
  div.appendChild(ul);

  for (let i = 0; i < numOfPages; i += 1) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = i + 1;
    link.href = '#';
    ul.appendChild(li);
    li.appendChild(link);
    const activeLink = document.getElementsByTagName('a');
    activeLink[0].className = "pagination";
    link.addEventListener('click', (e) => {

        for (let i = 0; i < activeLink.length; i += 1) {
          activeLink[i].classList.remove('pagination');
}
          const event = e.target;
          event.classList.add('pagination');

          showPage(studentsList, link.textContent)



    });
  }

};

appendPageLinks(studentsList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
