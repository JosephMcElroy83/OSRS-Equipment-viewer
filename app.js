const attackVariables = [
    "attack_crush",
    "attack_magic",
    "attack_ranged",
    "attack_slash",
    "attack_stab"
]

const defenceVariables = [
    "defence_crush",
    "defence_magic",
    "defence_ranged",
    "defence_slash",
    "defence_stab"
]

const damageVariables = [
    "magic_damage",
    "melee_strength",
    "ranged_strength",
    "prayer"
]

const equipmentSlots = [
  "head",
  "body",
  "legs",
  "feet",
  "hands",
  "weapon",
  "2h",
  "shield",
  "cape",
  "neck",
  "ring",
  "ammo"
]

const imageBackground = document.body.querySelector('.equip-background-img');

let globalData = [];
let headArr = [];
let bodyArr = [];
let legsArr = [];
let feetArr = [];
let handsArr = [];
let weaponArr = [];
let twoHandArr = [];
let shieldArr = [];
let capeArr = [];
let neckArr = [];
let ringArr = [];
let ammoArr = [];
let allitemsArr = [];


async function fetchData() {
  try {
    let res = await axios.get("https://api.osrsbox.com/equipment");
    const data = res.data;
    var equip = res.data._items
    let endPoint = data._links.last.href.split("=")[1];
    for (let i = 2; i <= endPoint; i++) {
      let res = await axios.get(`https://api.osrsbox.com/equipment/?page=${i}`)
      equip = [...equip, ...res.data._items]
    }
    //console.log(equip[0]);
    setTimeout(() => {
      equip.forEach(item => {
        if (item.equipment.slot == "head") {
          headArr.push(item); 
        }
        if (item.equipment.slot == "body") {
          bodyArr.push(item);
        }
        if (item.equipment.slot == "legs") {
          legsArr.push(item);
        }
        if (item.equipment.slot == "feet") {
          feetArr.push(item);
        }
        if (item.equipment.slot == "hands") {
          handsArr.push(item);
        }
        if (item.equipment.slot == "weapon") {
          weaponArr.push(item);
        }
        if (item.equipment.slot == "2h") {
          twoHandArr.push(item);
        }
        if (item.equipment.slot == "shield") {
          shieldArr.push(item);
        }
        if (item.equipment.slot == "cape") {
          capeArr.push(item);
        }
        if (item.equipment.slot == "neck") {
          neckArr.push(item);
        }
        if (item.equipment.slot == "ring") {
          ringArr.push(item);
        }
        if (item.equipment.slot == "ammo") {
          ammoArr.push(item);
        }
      })
    
    
      globalData.push(equip);
      console.log(headArr);
    }, 2000)
    // return filterEquip(equip, clickInput);
    
    //call function here to do something with data, passing in equip array
    
  } catch (error) {
    console.log(error)
  }
}
fetchData();

const weaponsPlaceholder = document.getElementById('equipment');
const headButton = document.querySelector('#head-img');
const headItemDiv = document.querySelector('#head-item');

async function getIcons(id, div) {
  try {
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${id}`);
    let getIcon = res.data.item.icon
    console.log(getIcon)
    let img = new Image();
    img.src = getIcon;
    img.classList.add('icon');
    div.append(img);

  } catch (error) {
    console.log(error)
  }
}
//getIcons(4151);


let searchInput = document.querySelector('#item-search');
let searchList = document.querySelector('#item-list')

headButton.addEventListener("click", () => {
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = headArr.filter(item => { //chagne headARr
      let splitItem = item.name.split(" ")
      if (splitItem.includes(e.target.value)) {
        return item
      }
    })
    console.log(filteredItems)
    filteredItems.forEach(item => {
      let itemName = document.createElement('h5');
      console.log(itemName)
      itemName.innerText = item.name;
      itemName.addEventListener("click", () => {
        allitemsArr.push(item)
        filteredItems = headArr; //change headArr
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, headItemDiv) //headItemDiv needs change
      })
      searchList.append(itemName);
    })
  })
  //selector comes up
  //return of select 
  // let item = headArr[2].id
  // getIcons(item, headItemDiv)
  
  console.log()
})


  //console.log(headArr);


//modify html, background imgs not divs, double check css styling, copy paste down.










// async function fetchSpecific(category, slot, style, value) {
//   try {
//     let res = await axios.get(`https://api.osrsbox.com/${category}?where={ "equipment.slot": "${slot}", "duplicate": false, "equipment.${style}": { "$gte": ${value} } }`)
//     let data = res.data;
//     console.log(data)
//     data.forEach((item, index) => {
//       let div = document.createElement('div');
//       document.body.append(div);
//       div.classList.add('data');
//       div.innerText = (item[index].equipment, item[index].id, item[index].release_date);
//     }
//     )
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchSpecific('weapons', '2h', 'ranged_strength', '20');

//----------NOTES----------

//use data-type to find arr that you need to filter.
//add eventlistener so when you click on, shows data type to tell you what array to filter through
//in event handler filter by whatever input is.