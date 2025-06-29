// let studyPromise = new Promise(function (resolve, reject) {
//     let studied = false;

//     if (studied) {
//         resolve("📘 You passed the exam!");
//     } else {
//         reject("❌ You failed. Try again.");
//     }
// });

// studyPromise
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err));

// Food delivery
// Online orders
// Exams (pass/fail)

let food_deliery = new Promise(function (resolve, reject) {
    let deliver = true;
    if (deliver) {
        resolve("food deliver sucessfully")
    }
    else {
        reject("pending plz wait ")
    }
});
food_deliery
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));