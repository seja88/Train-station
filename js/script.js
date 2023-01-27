// The numbers represent train departure times in minutes from midnight.

// 1. Using a loop, output all of the values one by one to the console.
// 2. Change your code so that instead of just minutes it outputs the correct time. E.g for 500 it is 8:20.
// 3. Instead of outputting the results to the console create a website with a div and output the times to the div using textContent property.
// 4. Instead of the div use an unordered list and use its innerHTML property to fill it with items displaying the times.

const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

// 1.
// departures.forEach(element => {
//     console.log(element);
// });
 const ul = document.createElement('ul')

 document.body.appendChild(ul)
//element=every element of array (departures)
departures.forEach(element => {
    //2.
    let hours = Math.floor(element / 60)
    let minutes = element - (hours * 60)
    let result = hours + ':' + minutes
    //3.
    // const div = document.createElement('div')
    // document.body.appendChild(div)
    // div.textContent = result

    //4.
    const li = document.createElement('li')
    document.body.appendChild(li)
    li.innerHTML = 'Departure time: '+ result + ' Platform: X.'
    li.style.listStyle = 'none'
    li.style.margin = '1em'

});