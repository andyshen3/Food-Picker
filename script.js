var food = [
    'Pamelas',
    'Oishi',
    'Zen Ramen',
    'Love Ramen',
    'Las Palmas',
    'Chipotle',
    'Cafe 33',
    'Everyday Noodles',
    'Sushi Fuku',
    'Costco',
]

function pickFood() {
    var selection = Math.floor(Math.random() * (food.length));
    document.getElementById('food-display').innerHTML = food[selection];
}