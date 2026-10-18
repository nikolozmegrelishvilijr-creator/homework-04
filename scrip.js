// Task 1 - Online Store Discount

function calculateDiscount(price, discount) {
    return price - (price * discount / 100);
}

function checkPrice(price) {
    if (price < 100) {
        return "Cheap product";
    } else {
        return "Expensive product";
    }
}

const finalPrice = calculateDiscount(200, 20);
console.log(finalPrice);
console.log(checkPrice(finalPrice));


// Task 2 - Game Player Status

const player = {
    name: "Shadow",
    health: 75,
    level: 12
};

function getPlayerHealth(health) {
    if (health > 0) {
        return "Player is alive";
    } else {
        return "Player is defeated";
    }
}

function getPlayerInfo(name, level) {
    return name + " - Level " + level;
}

console.log(getPlayerInfo(player.name, player.level));
console.log(getPlayerHealth(player.health));


// Task 3 - Restaurant Order

const menu = ["Burger", "Pizza", "Fries", "Cola"];

function getFood(menu, index) {
    return menu[index];
}

function createOrder(food, drink) {
    return "Your order: " + food + " + " + drink;
}

const food = getFood(menu, 0);
const drink = getFood(menu, 3);

console.log(createOrder(food, drink));


// Task 4 - Student Result

const student = {
    name: "Nika",
    score: 78
};

function checkScore(score) {
    if (score >= 50) {
        return "Passed";
    } else {
        return "Failed";
    }
}

function createStudentResult(name, result) {
    return name + ": " + result;
}

const result = checkScore(student.score);

console.log(createStudentResult(student.name, result));


// Task 5 - Travel Budget

const trip = {
    country: "Japan",
    days: 7,
    budget: 2100
};

function calculateDailyBudget(budget, days) {
    return budget / days;
}

function checkDailyBudget(dailyBudget) {
    if (dailyBudget >= 200) {
        return "Comfortable trip";
    } else {
        return "Budget trip";
    }
}

const dailyBudget = calculateDailyBudget(trip.budget, trip.days);

console.log(dailyBudget);
console.log(checkDailyBudget(dailyBudget));