// // The numbers represent train departure times in minutes from midnight.

// // 1. Using a loop, output all of the values one by one to the console.
// // 2. Change your code so that instead of just minutes it outputs the correct time. E.g for 500 it is 8:20.
// // 3. Instead of outputting the results to the console create a website with a div and output the times to the div using textContent property.
// // 4. Instead of the div use an unordered list and use its innerHTML property to fill it with items displaying the times.
// // 1.
// // departures.forEach(element => {
// //     console.log(element);
// // });
// //  const ul = document.createElement('ul')

// //  document.body.appendChild(ul)
// //element=every element of array (departures)
// // departures.forEach(element => {
// //     //2.
// //     let hours = Math.floor(element / 60)
// //     let minutes = element - (hours * 60)
// //     let result = hours + ':' + minutes
// //     //3.
// //     // const div = document.createElement('div')
// //     // document.body.appendChild(div)
// //     // div.textContent = result

// //     //4.
// //     const li = document.createElement('li')
// //     document.body.appendChild(li)
// //     li.innerHTML = result
// //     li.style.listStyle = 'none'
// // });

// //STAGE 2
// //1.
// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];
// const newDepartures = [];
// const newThead = ['Time', 'Train', 'No', 'To', 'Status', 'Track']
// // const trainObject = {
// //     // time: {
// //     //     hrs: trainHours,
// //     //     mins: trainMinutes,
// // },
// //     train: trainName,
// //     no: trainNumber,
// //     to: trainDestination,
// //     status: trainDelay,
// //     track: trainTrack
// // };
// // console.log(trainObject);




// const container = document.createElement('div')
// document.body.appendChild(container)
// container.classList.add('main')
// const h1 = document.createElement('h1')
// container.appendChild(h1)
// h1.textContent = 'TRAIN DEPARTURES'
// const time = document.createElement('h2');
// container.appendChild(time);
// const table = document.createElement('table')
// container.appendChild(table)
// const thead = document.createElement('thead')
// table.appendChild(thead)
// const tbody = document.createElement('tbody')
// table.appendChild(tbody)


// const calculation = (element) => {
//     let hours = Math.floor(element / 60)
//     let minutes = element - (hours * 60)
//     let result = hours + ':' + minutes
//     return result
// }

// departures.forEach(element => {
//     let x = calculation(element)
//     newDepartures.push(x);
// });

// newDepartures.forEach(element => {
//     const tr = document.createElement('tr')
//     tbody.appendChild(tr)
//     const td = document.createElement('td')
//     tr.appendChild(td)
//     tr.classList.add('time')
//     td.innerHTML = element
// });

// newThead.forEach(title => {
//     const th = document.createElement('th')
//     thead.appendChild(th)
//     th.innerHTML = title
// });

//HTML SCRIPT
const divMain = document.createElement('div')
document.body.appendChild(divMain)
divMain.id = 'main'
const heading = document.createElement('div')
document.body.appendChild(heading)
heading.id = 'main__heading'
heading.classList.add('main__heading')
const divTime = document.createElement('div')
heading.appendChild(divTime)
divTime.id = 'clock'
divTime.classList.add('clock')
const h1Main = document.createElement('h1')
heading.appendChild(h1Main)
h1Main.textContent = 'TRAIN DEPARTURES'

