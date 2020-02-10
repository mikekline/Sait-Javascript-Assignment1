const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green,
        image: 'img/1-1267462282CoNq.jpg'
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black,
        image: 'img/glass-skyscrapers-871279980940uum4.jpg'
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown,
        image: 'img/sand-1623121_1280.jpg'
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue,
        image: 'img/tropical-house-plant.jpg'
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink,
        image: 'img/delicious-meal.jpg'
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue,
        image: 'img/tropical-paradise.jpg'
    }
]


//----------------asignment 1 code--------------------------



const content= document.querySelector('#content');

let html = '';
for (card of data) {
    html = html +  ` 
        <div class="card" style="background: ${card.color};  background-image: url(${card.image}); 
        background-size:100% 70%; background-repeat: no-repeat;">
            <div class="topic">
                <p>${card.topic}</p>
            </div>
             <div class="title">
                 <p>${card.title}</p>
            </div>
            <div class="buy-button">
                <p>Read for ${card.price}</p>
            </div>
        </div>
    `
}

content.innerHTML = html;

