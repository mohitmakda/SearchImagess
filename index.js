
// const accessKey = "nR1ldQArSLys250quyo9sV4iMEu3bhF7jchAulYusFw";

// const formEl = document.querySelector("form")
// const inputEl = document.querySelector("#sResults")
// const searchResults = document.querySelector(".sResults")
// const showMore = document.querySelector("#showMoreButton")

// let inputData = ""
// let page = 1;

// async function searchImages(){
//     inputData= inputEl.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     const results = data.results

//     if(page===1){
//         searchResults.innerHTML=""
//     }

//     results.map((results)=>{
//         const imageWrapper = document.createElement('div')
//         imageWrapper.classList.add("sResult")
//         const image = document.createElement('img')
//         image.src=results.urls.small
//         image.alt=results.alt.description;


//         const imageLink = document.createElement('a')
//         imageLink.href=results.links.html;
//         imageLink.target="_blank";
//         imageLink.textContent=results.alt_description

//         imageWrapper.appendChild(image)
//         imageWrapper.appendChild(imageLink)
//         imageWrapper.appendChild(imageWrapper)
//     })
//     page++;
//     if(page>1){
//         showMore.style.display="block"
//     }
// }
// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     page=1;
//     searchImages();
// })

// showMore.addEventListener("click",()=>{
//     // event.preventDefault();
//     // page=1;
//     searchImages();
// })


const accessKey = "nR1ldQArSLys250quyo9sV4iMEu3bhF7jchAulYusFw";

const formEl = document.querySelector("form");
const inputEl = document.querySelector("#sResults");
const searchResults = document.querySelector(".sResults");
const showMore = document.querySelector("#showMoreButton");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => { // Changed parameter name from "results" to "result"
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("sResult");
    const image = document.createElement("img");
    image.src = result.urls.small; // Changed "results" to "result"
    image.alt = result.alt_description; // Changed "results" to "result"

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html; // Changed "results" to "result"
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description; // Changed "results" to "result"

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper); // Changed "imageWrapper" to "searchResults"
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages();
});
