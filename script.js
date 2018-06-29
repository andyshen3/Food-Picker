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
    'Spam',
    "David's noodles"
    "that one thai place with the huge servings"
]

function pickFood() {
    var selection = Math.floor(Math.random() * (food.length));
    document.getElementById('food-display').innerHTML = food[selection];
}
