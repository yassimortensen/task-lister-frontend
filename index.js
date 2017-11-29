document.getElementById("list").addEventListener("change", (event) => {
  list_id = event.target.value;
  $('#tasks_list').empty();
  fetch('http://localhost:3000/tasks/')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let container = document.getElementById("tasks_list")
      json.forEach( function (task) {
        // debugger;
        if (task.list_id == list_id) {
          let task_item = document.createElement("li");
          task_item.innerText = task.description
          container.appendChild(task_item);
        }
    });
  // request tasks from task api
  //display all tasks with that list_idx
})});

fetch('http://localhost:3000/lists')
  .then(response => response.json())
  .then(json => {
    let container = document.getElementById("list")
    json.forEach( function (list_number) {
      let char = document.createElement("option");
      char.value = list_number.id;
      char.innerText = list_number.title;
      container.appendChild(char);
    })
    // console.log(json)
  })

// let bpi = null;
//
// fetch('https://api.coindesk.com/v1/bpi/historical/close.json').
//   then(response => response.json()).
//   then(json => {
//     const allBpi = json['bpi']
//     // console.log(allBpi)
//
//     let index = 0;
//     for (let date in allBpi) {
//       index++;
//       let table = document.getElementById('bitcoinToUsdTable')
//       let row = table.insertRow(index);
//       let cell1 = row.insertCell(0);
//       let cell2 = row.insertCell(1);
//       cell1.innerHTML = date;
//       cell2.innerHTML = allBpi[date];
//     }
//
//   });
