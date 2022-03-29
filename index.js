// code your solution here
// function superbowlWin(array) {
//     if (array.find(item => item.result === 'W')) {
//         return item.year
//     } else {
//         return undefined
//     }
// }

// function superbowlWin(array) {
//     const isWin = array.find(item => item.result === 'W')
//     if (isWin === true) {
//         return item.year
//     } else {
//         return undefined
//     }
// }

// function superbowlWin(array) {
//     array.find(item => item.result === 'W')
//     return item.year
// }

// function superbowlWin(array) {
//     let win = array.find(item => item.result === 'W')
//     if (win.result === 'W') {
//         return win.year
//     }
//     else {
//         return array.find(item => item.result === 'W')
//     }
// }

function superbowlWin(array) {
    if (array.find(item => item.result === 'W')) {
        return array.find(item => item.result === 'W').year
    } else {
        return undefined
    }
}