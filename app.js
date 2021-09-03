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
//use reduce

const attackCrush = document.querySelector('#attackcrush')
const attackMagic = document.querySelector('#attackmagic')
const attackRanged = document.querySelector('#attackranged')
const attackSlash = document.querySelector('#attackslash')
const attackStab = document.querySelector('#attackstab')
const defenceCrush = document.querySelector('#defencecrush')
const defenceMagic = document.querySelector('#defencemagic')
const defenceRanged = document.querySelector('#defenceranged')
const defenceSlash = document.querySelector('#defenceslash')
const defenceStab = document.querySelector('#defencestab')
const damageMelee = document.querySelector('#damagemelee')
const damageRanged = document.querySelector('#damageranged')
const damageMagic = document.querySelector('#damagemagic')
const prayerBonus = document.querySelector('#prayerbonus')


function getStats() {
  //update html with new var
  let attack_stab = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.attack_stab
      ), 0)
      attackStab.innerText = attack_stab
  
  let attack_slash = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.attack_slash
      ), 0)
      attackSlash.innerText = attack_slash
  
  let attack_crush = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.attack_crush
      ), 0)
      attackCrush.innerText = attack_crush
  
  let attack_magic = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.attack_magic
      ), 0)
      attackMagic.innerText = attack_magic
    
  let attack_ranged = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.attack_ranged
      ), 0)
      attackRanged.innerText = attack_ranged
  
  let defence_stab = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.defence_stab
      ), 0)
      defenceStab.innerText = defence_stab
  
  let defence_slash = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.defence_slash
      ), 0)
      defenceSlash.innerText = defence_slash
  
  let defence_crush = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.defence_crush
      ), 0)
      defenceCrush.innerText = defence_crush
  
  let defence_ranged = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.defence_ranged
      ), 0)
      defenceRanged.innerText = defence_ranged
  
  let defence_magic = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.defence_magic
      ), 0)
      defenceMagic.innerText = defence_magic
  
  let damage_melee = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.melee_strength
      ), 0)
      damageMelee.innerText = damage_melee
  
  let damage_ranged = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.ranged_strength
      ), 0)
      damageRanged.innerText = damage_ranged
  
  let damage_magic = allitemsArr.reduce((acc, item) => (
      acc += item.equipment.magic_damage
      ), 0)
      damageMagic.innerText = damage_magic
        

}


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
const bodyButton = document.querySelector('#body-img');
const bodyItemDiv = document.querySelector('#body-item');
const legsButton = document.querySelector('#legs-img');
const legsItemDiv = document.querySelector('#legs-item');
const feetButton = document.querySelector('#feet-img');
const feetItemDiv = document.querySelector('#feet-item');
const weaponsButton = document.querySelector('#weapons-img');
const weaponsItemDiv = document.querySelector('#weapons-item');
const shieldsButton = document.querySelector('#shields-img');
const shieldsItemDiv = document.querySelector('#shields-item');
const capeButton = document.querySelector('#cape-img');
const capeItemDiv = document.querySelector('#cape-item');
const handsButton = document.querySelector('#hands-img');
const handsItemDiv = document.querySelector('#hands-item');
const neckButton = document.querySelector('#neck-img');
const neckItemDiv = document.querySelector('#neck-item');
const ringButton = document.querySelector('#ring-img');
const ringItemDiv = document.querySelector('#ring-item');
const ammoButton = document.querySelector('#ammo-img');
const ammoItemDiv = document.querySelector('#ammo-item');


async function getIcons(id, div) {
  getStats();
  try {
    let res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${id}`);
    let getIcon = res.data.item.icon
    console.log(getIcon)
    let img = new Image();
    img.src = getIcon;
    img.classList.add('icon');
    div.append(img);

  } catch (error) {
    let img = new Image();
    img.src = "images/error404.png";
    img.classList.add('icon');
    div.append(img);
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
    filteredItems = headArr.filter(item => { 
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
        filteredItems = headArr;
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, headItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log(allitemsArr)
})
//BODY
bodyButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = bodyArr.filter(item => { 
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
        filteredItems = bodyArr;
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, bodyItemDiv)
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})
//LEGS
legsButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = legsArr.filter(item => { 
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
        filteredItems = legsArr;
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, legsItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})
//FEET
feetButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = feetArr.filter(item => { 
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
        filteredItems = feetArr;
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, feetItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})
//WEAPONS
weaponsButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = weaponArr.filter(item => { 
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
        filteredItems = weaponArr; 
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, weaponsItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})
//SHIELDS
shieldsButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = shieldsArr.filter(item => { 
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
        filteredItems = shieldsArr; 
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, shieldsItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})

//CAPE
capeButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = capeArr.filter(item => { 
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
        filteredItems = capeArr; 
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, capeItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})

//HANDS
handsButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = handsArr.filter(item => { 
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
        filteredItems = handsArr; 
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, handsItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})

//NECK
neckButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = neckArr.filter(item => { 
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
        filteredItems = neckArr; 
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, neckItemDiv)
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})

//RING
ringButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = ringArr.filter(item => { 
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
        filteredItems = ringArr; 
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, ringItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})

//AMMO
ammoButton.addEventListener("click", () => { 
  console.log(searchInput)
  let filteredItems = headArr
  searchInput.style.display = "block";
  searchList.style.display = "block";
  searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchList.innerHTML = "";
    filteredItems = ammoArr.filter(item => { 
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
        filteredItems = ammoArr; 
        searchInput.value = "";
        searchList.innerHTML = "";
        searchInput.style.display = "none";
        searchList.style.display = "none";
        getIcons(item.id, ammoItemDiv) 
      })
      searchList.append(itemName);
    })
  })
  
  console.log()
})


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