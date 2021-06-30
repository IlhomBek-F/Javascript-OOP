let data = new Date();
let day = data.getDay();
let hours = data.getHours();

console.log(data);
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let weekDayName = weekday[day];

// Messi
let player = {
  name: "Messi",
  playerImg:
    "https://3.bp.blogspot.com/-JrLXrY_gzGM/Us8rqQqNq9I/AAAAAAAAFAw/ughkZU6W6JI/s1600/Lio+Messi_10.png",
  countryFlag:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_Argentina_%281816%29.svg/1200px-Flag_of_Argentina_%281816%29.svg.png",
  club:
    "https://www.vippng.com/png/full/524-5245161_fc-barcelona-new-logo-png-new-fc-barcelona.png",
  goals: 750,
  foot: "left",
  speed: 94,
  shoot: 94,
  passing: 90,
  backGroundChangeNight:
    "https://www.barcelona.sportland24.ru/upload/iblock/4e7/4e7ef5a15f2dff30c66517279422689d.jpg",
  backGroundChangeDay:
    "https://www.rayburntours.com/wp-content/uploads/2020/03/nou-camp-tour.jpg",
  sayHello: function () {
    return `This is  ${this.name} from Argentina!`;
  },
};

// Ronaldo
let player1 = {
  name: "Ronaldo",
  playerImg:
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f7647861219915.5a6772d953883.png",
  countryFlag:
    "https://38.rs.gov.ru/uploads/language/image/30/flag_portugalii.jpg",
  club: "https://picfiles.alphacoders.com/227/227782.png",
  goals: 800,
  foot: "both",
  speed: 97,
  shoot: 98,
  passing: 92,
};

if (hours > 19) {
  const body = document.querySelector("body");
  body.style.backgroundImage = `url(${player.backGroundChangeNight})`;
} else if (hours > 4) {
  console.log("its getting day");
}

// Updating left side Data

var name2 = document.querySelector(".name-left");
name2.innerText = player.name;

var img = document.querySelector(".country-left");
img.src = player.countryFlag;

var club = document.querySelector(".club-left");
club.src = player.club;

var goals = document.querySelector(".goals-left");
goals.innerText = player.goals;

var foot = document.querySelector(".foot-left");
foot.innerText = player.foot;

var speed = document.querySelector(".speed-left");
speed.innerText = player.speed;

var shoot = document.querySelector(".shoot-left");
shoot.innerText = player.shoot;

var passing = document.querySelector(".passing-left");
passing.innerText = player.passing;

var playerImgRight = document.querySelector(".player-img-left");
playerImgRight.src = player1.playerImg;

// updating right side data

var name1 = document.querySelector(".name-right");
name1.innerText = player1.name;

var img = document.querySelector(".country-right");
img.src = player1.countryFlag;

var club = document.querySelector(".club-right");
club.src = player1.club;

var goals = document.querySelector(".goals-right");
goals.innerText = player1.goals;

var foot = document.querySelector(".foot-right");
foot.innerText = player1.foot;

var speed = document.querySelector(".speed-right");
speed.innerText = player1.speed;

var shoot = document.querySelector(".shoot-right");
shoot.innerText = player1.shoot;

var passing = document.querySelector(".passing-right");
passing.innerText = player1.passing;

var playerImgRight = document.querySelector(".player-img-right");
playerImgRight.src = player.playerImg;

const h1 = document.querySelector("h1");
h1.innerText = player.name + " vs Ronaldo";

const h3 = document.querySelector("h3");
h3.innerText = "Today is " + weekDayName;
