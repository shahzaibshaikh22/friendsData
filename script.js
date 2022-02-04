const myData = [
  {
    id: 1,
    name: "Shahzaib",
    age: 24,
    image: "./images/shahzaib.jpg",
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
  {
    id: 2,
    name: "Shah Sameen",
    age: 23,
    image: "./images/shahsameen.jpg",
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
  {
    id: 3,
    name: "Hammad",
    age: 22,
    image: './images/hammad.jpg',
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
  {
    id: 4,
    name: "Ahmed",
    age: 21,
    image: "./images/ahmed.jpg",
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
  {
    id: 5,
    name: "M.khizer",
    age: 20,
    image: "./images/khizar.jpg",
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
  {
    id: 6,
    name: "Sameer",
    age: 26,
    image: './images/sameer.jpg',
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
  {
    id: 7,
    name: "Uzair Ahmed",
    age: 26,
    image: './images/uzair.jpg',
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
  {
    id: 8,
    name: "Kaif Rao",
    age: 26,
    image: './images/kaif.jpg',
    batch: "2k20",
    depart: "BSIT",
    inst: "MIT",
    semester: "2nd"
  },
];
const allData = document.querySelector(".card-container");
// console.log(allData);
myData.map((data) => {
    allData.innerHTML+=`<div class="card">
            <h2>Student Info</h2>
            <img src="${data.image}" alt="">
            <ul>
                <li>${data.name}</li>
                <li>Age <span>${data.age}</span></li>
                <li>Semester <span>${data.semester}</span></li>
                <li>Batch <span>${data.batch}</span></li>
                <li>Department <span>${data.depart}</span></li>
                <li>Institute <span>${data.inst}</span></li>
            </ul>
        </div> `
});
