const Discord = require('discord.js');
const client = new Discord.Client();

var menu = [
  ["Idly, Bonda", "Biriyani, Juice", "Noodles"],
  ["Dosa", "Normal", "Chappathi/Parotta"],
  ["Dosa", "Rose/Badam Milk", "Idly, Fruits"],
  ["Puttu, Uppuma, Banana", "Fried Item", "Poori/Chappathi"],
  ["Uppuma", "Normal", "Chappathi/Dosa"],
  ["Pongal", "Juice", "Fried Rice"],
  ["Paniyaram", "Normal", "Chappathi/Poori"]
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

function getItem(day, x) {

  var todaysMenu = menu[day];

  var checkingTheTime = [Math.abs(7 - x), Math.abs(13 - x), Math.abs(19 - x)];

  var whichMeal = 99;

  for (var i = 0; i < checkingTheTime.length; i++) {
    if (checkingTheTime[i] < whichMeal)
      whichMeal = checkingTheTime[i];

  }

  console.log("Getting the meal for " + whichMeal + " on " + day);

  var whichMealWord = "Breakfast";

  if(whichMeal === 1) whichMealWord = "Lunch";
  if(whichMeal === 2) whichMealWord = "Dinner";

  return (whichMealWord + "'s " + menu[day][whichMeal] + ".");
}

client.on('message', msg => {
  if (msg.content === '!mess') {

    console.log("Mess request detected.")

    var todayDate = new Date();

    msg.reply(getItem(todayDate.getDay(), todayDate.getHours()));
  }
})

client.login('NDUzNjA5NzY3Mzc4NjE2MzQw.Dfmg_w.hJsuCkm207ccmkGlL3EeneDQW5M');
