//thead Title
newThead.forEach(title => {
    const th = document.createElement('th')
    thead.appendChild(th)
    th.innerHTML = title
    th.classList.add(title)
});

//delay

// for (let i = 0; i < trainObject.time.hrs.length; i++) {
//     const tr = document.createElement('tr')
//     tbody.appendChild(tr)
//     tr.classList.add('time')
//     const td = document.createElement('td')
//     tr.appendChild(td)
//     const tdTime = document.createElement('td')
//     tr.appendChild(tdTime)
//     const tdNo = document.createElement('td')
//     tr.appendChild(tdNo)
//     const tdTo = document.createElement('td')
//     tr.appendChild(tdTo)
//     const tdStatus = document.createElement('td')
//     tr.appendChild(tdStatus)
//     const tdTrack = document.createElement('td')
//     tr.appendChild(tdTrack)
//     const tdButton = document.createElement('td')
//     tr.appendChild(tdButton)
//     const button = document.createElement('button')
//     tdButton.appendChild(button)
//     button.innerHTML = 'Change Status'
//     td.innerHTML = trainObject.time.hrs[i] + ' : ' + trainObject.time.mins[i]
//     tdTime.innerHTML = trainObject.train[i]
//     tdNo.innerHTML = trainObject.no[i]
//     tdTo.innerHTML = trainObject.to[i]
//     tdStatus.innerHTML = trainObject.status[0]
//     tdTrack.innerHTML = trainObject.track[i]
//     button.addEventListener('click', function() {
//         if (tdStatus.innerHTML === 'OnTime') {
//             tdStatus.innerHTML = 'Delayed'
//             trainObject.status[0] = 'Delayed'
//         } else {
//             tdStatus.innerHTML = 'OnTime'
//             trainObject.status[0] = 'OnTime'
//         }
//         console.log(trainObject.status);
//     });
//     }

for (let i = 0; i < trainObject.time.hrs.length; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.classList.add("time");
    const td = document.createElement("td");
    tr.appendChild(td);
    const tdTime = document.createElement("td");
    tr.appendChild(tdTime);
    const tdNo = document.createElement("td");
    tr.appendChild(tdNo);
    const tdTo = document.createElement("td");
    tr.appendChild(tdTo);
    const tdStatus = document.createElement("td");
    tr.appendChild(tdStatus);
    const tdTrack = document.createElement("td");
    tr.appendChild(tdTrack);
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);
    const button = document.createElement("button");
    tdButton.appendChild(button);
    button.innerHTML = "Change Status";
    td.innerHTML = trainObject.time.hrs[i] + " : " + trainObject.time.mins[i];
    tdTime.innerHTML = trainObject.train[i];
    tdNo.innerHTML = trainObject.no[i];
    tdTo.innerHTML = trainObject.to[i];
    tdStatus.innerHTML = trainObject.status[0];
    tdTrack.innerHTML = trainObject.track[i];
    button.addEventListener("click", function() {
      if (tdStatus.innerHTML === "OnTime") {
        tdStatus.innerHTML = "Delayed";
        trainObject.status[0] = "Delayed";
      } else {
        tdStatus.innerHTML = "OnTime";
        trainObject.status[0] = "OnTime";
      }
      console.log(trainObject.status);
      tdStatus.innerHTML = "";
      const input = document.createElement("input");
      input.type = "text";
      tdStatus.appendChild(input);
      input.focus();
      input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          tdStatus.removeChild(input);
          tdStatus.innerHTML = `${input.value}min delay`;
        }
      });
    });
  }

resetButton.addEventListener("click", function() {
  location.reload();
});

   
      
            
      