const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];
const newThead = ['Time', 'Train', 'No', 'To', 'Status', 'Track']
const trainHours = departures.map(element => Math.floor(element / 60));
const trainMinutes = departures.map(element => element - (Math.floor(element / 60) * 60));
const trainName = ['Acela Express', 'New Haven Line', 'Shore Line East', 'N.E. Regional', 'Shuttle', 'N.E. Regional', 'New Haven Line', 'Shore Line East', 'New Haven Line', 'Acela Express', 'New Haven Line', 'N.E. Regional', 'New Haven Line']
const trainNumber = [2153, 1541, 1606, 190, 490, 95, 1545, 1610, 1549, 2150, 1551, 170, 1553]
const trainDestination = ['Washington DC', 'Grand Central Terminal', 'Old Saybrook', 'Boston South Station', 'Springfield', 'Newport News', 'Grand Central Terminal', 'Old Saybrook', 'Grand Central Terminal', 'Boston South Station', 'Grand Central Terminal', 'Boston South Station', 'Grand Central Terminal']
const trainDelay = ['OnTime']
const trainTrack = [2, 14, 12, 1, 3, 2, 8, 10, 14, 1, 8, 2, 14]
const trainObject = {
    time: {
        hrs: trainHours,
        mins: trainMinutes,
    },
    train: trainName,
    no: trainNumber,
    to: trainDestination,
    status: trainDelay,
    track: trainTrack
};