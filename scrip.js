
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

function task1() {
    const finalPrice = calculateDiscount(200, 20);

    document.getElementById("result1").textContent = finalPrice + " - " + checkPrice(finalPrice);
}


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

function task2() {
    document.getElementById("result2").textContent = getPlayerInfo(player.name, player.level) + " | " + getPlayerHealth(player.health);
}


// Task 3 - Restaurant Order

const menu = ["Burger", "Pizza", "Fries", "Cola"];

function getFood(menu, index) {
    return menu[index];
}

function createOrder(food, drink) {
    return "Your order: " + food + " + " + drink;
}

function task3() {
    const food = getFood(menu, 0);
    const drink = getFood(menu, 3);

    document.getElementById("result3").textContent = createOrder(food, drink);
}


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

function task4() {
    const result = checkScore(student.score);

    document.getElementById("result4").textContent = createStudentResult(student.name, result);
}


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

function task5() {
    const dailyBudget = calculateDailyBudget(
        trip.budget,
        trip.days
    );

    document.getElementById("result5").textContent = dailyBudget + " - " + checkDailyBudget(dailyBudget);
}
