const accordion = document.querySelector(".accordion-homepage");

const content = `<h3 role="button">
                    My New FAQ
                </h3>`;

const section = document.createElement("section");

section.classList.add("parent");

section.innerHTML = content;

accordion.appendChild(section);