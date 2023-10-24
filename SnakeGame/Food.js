import { onSnake, expandSnake } from './Snake.js';
import { randomGridPosition } from './Grid.js';  

let food = getRandomFoodPosition();  
const expansionRate = 1;

export function update() {
    if(onSnake(food)){
        expandSnake(expansionRate);
        food = randomGridPosition();
    }
}

export function draw(canvas) { 
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        canvas.appendChild(foodElement);

}

function getRandomFoodPosition() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}