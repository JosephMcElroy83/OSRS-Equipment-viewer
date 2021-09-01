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
      console.log(ammoArr);
    }, 2000)
    // return filterEquip(equip, clickInput);
    
    //call function here to do something with data, passing in equip array
    
  } catch (error) {
    console.log(error)
  }
}
fetchData();


async function getIcons() {
  try {
    let res = await axios.get("https://boiling-mountain-84087.herokuapp.com/https://secure.runescape.com/m=itemdb_oldschool/1630405860279_obj_sprite.gif?id=4153");
    let data = res.data
    console.log(res)


  } catch (error) {
    console.log(error)
  }
}
getIcons();


function filterEquip(input, search) {
  input.filter(item => {
    if (item == search) {
      console.log(item);
      return item
    }
  })
}

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
//.filter 
// if category slot = weapon, armor, etc.





//make a tags that link to id of container pertaining to the div that houses each section.

//use data-type to find arr that you need to filter.
//add eventlistener so when you click on, shows data type to tell you what array to filter through
//in event handler filter by whatever input is.