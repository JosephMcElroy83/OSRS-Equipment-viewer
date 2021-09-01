const equipmentVariables = [
    "attack_crush",
    "attack_magic",
    "attack_ranged",
    "attack_slash",
    "attack_stab",
    "defence_crush",
    "defence_magic",
    "defence_ranged",
    "defence_slash",
    "defence_stab",
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
  "ammo",
  "ring",

]

const imageBackground = document.body.querySelector('.equip-background-img');

let globalData = [];

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
    let filteredWeapons = equip.filter(item => {
      if (item.equipment.slot == "weapon") {
        return item
      }
    })
    console.log(res)
    console.log(equip)
    setTimeout(() => {
      globalData.push(equip);
      console.log(globalData)
    }, 3000)
    // return filterEquip(equip, clickInput);
    
    //call function here to do something with data, passing in equip array
    
  } catch (error) {
    console.log(error)
  }
}
fetchData();

function totalAttack(attackInput) {
  let crush = res
}

// function filterEquip(input, search) {
//   let filter = input.filter(item => {
//     if (item.equipment.slot == search) {
//       return item
//     }
//     return filter;
//   })
// }

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