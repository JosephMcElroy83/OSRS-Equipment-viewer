async function fetchData() {
  try {
    let res = await axios.get("https://api.osrsbox.com/equipment");
    const data = res.data;
    let equip = res.data._items
    let endPoint = data._links.last.href.split("=")[1];
    for (let i = 2; i <= endPoint; i++) {
      let res = await axios.get(`https://api.osrsbox.com/equipment/?page=${i}`)
      equip = [...equip, ...res.data._items]
    }
    //console.log(equip[0]);
    let filteredItems = equip.filter(item => {
      if (item.equipment.slot == "weapon") {
        return item
      }
    })
    console.log(filteredItems)
    //call function here to do something with data, passing in equip array
  } catch (error) {
    console.log(error)
  }
}

fetchData();

async function fetchSpecific(category, slot, style, value) {
  try {
    let res = await axios.get(`https://api.osrsbox.com/${category}?where={ "equipment.slot": "${slot}", "duplicate": false, "equipment.${style}": { "$gte": ${value} } }`)
    let data = res.data;
    console.log(data)
    data.forEach((item, index) => {
      let div = document.createElement('div');
      document.body.append(div);
      div.classList.add('data');
      div.innerText = (item[index].equipment, item[index].id, item[index].release_date);
    }
    )
  } catch (error) {
    console.log(error)
  }
}

//fetchSpecific('weapons', '2h', 'ranged_strength', '20');

//.filter 
// if category slot = 

