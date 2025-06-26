// code 1
const person = {
    name: "rojit",
    age: 19,
    city: "Kathmandu",
    isEmployed: false,
    voter: () => {
       return person.age >= 18;
    }
};
console.log(person.name);
console.log(person.voter());

// code 2
const person2 = {
    title : "learner",
    company: "Tech Corp",
    yearsOfExperience: 5
};
console.log(person2.title);

// code 3 
const videos = [
    {
        title: "Arjit Singh Live Concert",
        subtitle: "Live Performance",
        description: "Bad performance.",
        views: 150000,
        likes: 8000,
        dislikes: 200
    },
    {
        title: "How to sttart coding",
        subtitle: "Beginner's Guide",
        description: "Master in html.",
        views: 120000,
        likes: 7000,
        dislikes: 100
    }
];
console.log(videos[1].title);
console.log(videos[0].views);