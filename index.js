const Discord = require('discord.js');
const client = new Discord.Client();
var CronJob = require('cron').CronJob;

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
  var whichMealIndex = 99;

  console.log('The hour is ' + x)

  console.log("The length of the array is " + checkingTheTime.length)

  for (var i = 0; i < checkingTheTime.length; i++) {
    console.log("checking if " + checkingTheTime[i] + " is less than " + whichMeal)
    if (checkingTheTime[i] < whichMeal) {
      console.log(checkingTheTime[i] + " is less than " + whichMeal)
      whichMeal = checkingTheTime[i];
      whichMealIndex = i;
    }

  }

  console.log("Getting the meal for " + whichMealIndex + " on " + day);

  var whichMealWord = "Breakfast";

  if(whichMealIndex === 1) whichMealWord = "Lunch";
  if(whichMealIndex === 2) whichMealWord = "Dinner";

  return (whichMealWord + "'s " + menu[day][whichMealIndex] + ".");
}

client.on('message', msg => {
  if (msg.content === '!mess') {

    console.log("Mess request detected.")

    var todayDate = new Date();

    msg.reply(getItem(todayDate.getDay(), todayDate.getHours()));
  }

  if(msg.content === '!isitwednesday') {

    console.log("Wednesday check requested.");

    var todayDate = new Date();

    console.log("todayDate.getDay() is " + todayDate.getDay());

    if(todayDate.getDay() === 3) {
      msg.channel.send({file : "https://i.kym-cdn.com/photos/images/newsfeed/001/091/264/665.jpg"});
    }
  }

})

var job = new CronJob('0 20 * * * *', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
    client.channels.get('412502989983711267').send("Time to eat!");
    client.channels.get('412502989983711267'.send(getItem(todayDate.getDay(), todayDate.getHours())));

  }, function () {
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */
);

var job = new CronJob('0 7 * * * *', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
    client.channels.get('412502989983711267').send("Time to eat!");
    client.channels.get('412502989983711267'.send(getItem(todayDate.getDay(), todayDate.getHours())));

  }, function () {
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */
);

var job = new CronJob('0 14 * * * 1-5', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
    client.channels.get('412502989983711267').send("Time to eat!");
    client.channels.get('412502989983711267'.send(getItem(todayDate.getDay(), todayDate.getHours())));

  }, function () {
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */
);

var job = new CronJob('0 13 * * * 6-7', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
    client.channels.get('412502989983711267').send("Time to eat!");
    client.channels.get('412502989983711267'.send(getItem(todayDate.getDay(), todayDate.getHours())));

  }, function () {
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */
);

var job = new CronJob('0 7 * * * 3', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  client.channels.get('412502989983711267').send({file : "https://i.kym-cdn.com/photos/images/newsfeed/001/091/264/665.jpg"});
  }, function () {
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */
);

client.login('NDUzNjA5NzY3Mzc4NjE2MzQw.Dfmg_w.hJsuCkm207ccmkGlL3EeneDQW5M');