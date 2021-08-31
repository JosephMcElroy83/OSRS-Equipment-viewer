async function fetchData() {
  try {
    let res = await axios.get("https://api.osrsbox.com/equipment");
    const data = res.data;
    console.log(data);
    
  } catch (error) {
    console.log(error)
  }
}

//fetchData();

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