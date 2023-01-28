//thead Title
newThead.forEach(title => {
    const th = document.createElement('th')
    thead.appendChild(th)
    th.innerHTML = title
    th.classList.add(title)
});

//trainTime

for (let i = 0; i < trainObject.time.hrs.length; i++) {
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    tr.classList.add('time')
    const td = document.createElement('td')
    tr.appendChild(td)
    const tdTime = document.createElement('td')
    tr.appendChild(tdTime)
    const tdNo = document.createElement('td')
    tr.appendChild(tdNo)
    const tdTo = document.createElement('td')
    tr.appendChild(tdTo)
    const tdStatus = document.createElement('td')
    tr.appendChild(tdStatus)
    const tdTrack = document.createElement('td')
    tr.appendChild(tdTrack)
    td.innerHTML = trainObject.time.hrs[i] + ' : ' + trainObject.time.mins[i]
    tdTime.innerHTML = trainObject.train[i]
    tdNo.innerHTML = trainObject.no[i]
    tdTo.innerHTML = trainObject.to[i]
    tdStatus.innerHTML = trainObject.status[0]
    tdTrack.innerHTML = trainObject.track[i]
}