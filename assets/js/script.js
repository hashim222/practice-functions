const btnClick = $('.btn')
const displayOne = $('#box-1')
const displayTwo = $('#box-2')

btnClick.click(() => {
    shownNumber()
});



function shownNumber() {
    let one = displayOne.text(randomNumGenerator())[0].innerText
    let two = displayTwo.text(randomNumGenerator())[0].innerText

    // if (parseInt(one) > parseInt(two)) {
    //     // $('#one').text('Human won')
    //     $('#one').text('hello')
    // } else {
    //     // $('#two').text('Computer won')
    //     $('#two').text('world')
    // }
    // $('#one').text('Human won')
    document.getElementById('one').innerHTML = 'human one'
}

function randomNumGenerator() {
    const generateNum = Math.floor(Math.random() * 100)
    return generateNum
}