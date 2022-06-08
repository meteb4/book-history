let elements = [
  { name: "Element1", price: 0, id: 1 },
  { name: "Element2", price: 1.5, id: 2 },
  { name: "Element3", price: 4, id: 3 },
  { name: "Element4", price: 7.5, id: 4 },
  { name: "Element5", price: 12, id: 5 },
  { name: "Element6", price: 17.5, id: 6 },
  { name: "Element7", price: 24, id: 7 },
  { name: "Element8", price: 31.5, id: 8 },
  { name: "Element9", price: 40, id: 9 },
  { name: "Element10", price: 49.5, id: 10 },
];

const TABLEBODY = document.getElementById("tbody");
function render(arr) {
  arr.map((obj) => {
    let newTR = document.createElement("tr");
    for (let i = 0; i < Object.keys(obj).length; i++) {
      let value = document.createElement("td");
      switch (i) {
        case 0:
          value.innerHTML = obj.id;
          newTR.appendChild(value);
          break;
        case 1:
          value.innerHTML = obj.name;
          newTR.appendChild(value);
          break;
        case 2:
          value.innerHTML = obj.price;
          newTR.appendChild(value);
          break;
        default:
          break;
      }
    }
    TABLEBODY.appendChild(newTR);
  });
}

const ID = document.getElementById("ID");
const NAME = document.getElementById("NAME");
const PRICE = document.getElementById("PRICE");

function sort(arr) {}
