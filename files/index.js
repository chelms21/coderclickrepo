try {

  // general stuff

  var sound = new Howl({
    src: ['coderclicksongs.mp3'],
    loop: true,
    volume: 1.0
  });

  sound.play();

  window.addEventListener('beforeunload', function () {
    save();
  });

  function onloadfunc() {
    load();
  }

  var shop = document.getElementById('shopsection');
  var upgrades = document.getElementById('upgradesection');
  var prestigeshop = document.getElementById('prestigesection');

  shop.style.display = "block";
  upgrades.style.display = "none";
  prestigeshop.style.display = "none";

  document.getElementById('enterdevoptions1').onclick = () => {
    let password = prompt("Please enter dev pasword:", "lol");
    if (password == null || password == "") {
      window.alert("Incorrect password!");
    } else if (password == "dev042109$") {
      window.alert("Correct password!");
    } else {
      window.alert("Incorrect password!");
    }
  };

  /////// ITEMS ///////////

  let counter = 0;
  let clickincome = 1;
  let coders = 0;
  let coderCost = 10;
  let coderStartCost = 10;
  let coderincome = 0;
  let robots = 0;
  let robotCost = 100;
  let robotStartCost = 100;
  let robotincome = 0;
  let gamedevs = 0;
  let gamedevCost = 1000;
  let gamedevStartCost = 1000;
  let gamedevincome = 0;
  let hackers = 0;
  let hackerCost = 10000;
  let hackerStartCost = 10000;
  let hackerincome = 0;
  let companies = 0;
  let companyCost = 100000;
  let companyStartCost = 100000;
  let companyincome = 0;
  let gamedistribs = 0;
  let gamedistribCost = 1000000;
  let gamedistribStartCost = 1000000;
  let gamedistribincome = 0;


  let neededmoney;

  function notenoughalert(type) {
    if (type == prestige) {
      neededmoney = prestigecost - counter;
      alert(`You do not have enough money to prestige! You need ${neededmoney} more money to prestige.`)
    }
    else if (type == coder) {
      neededmoney = coderCost - counter;
      alert(`You do not have enough money to get a coder! You need ${neededmoney} more money to get a coder.`)
    }
    else if (type == robot) {
      neededmoney = robotCost - counter;
      alert(`You do not have enough money to get a robot! You need ${neededmoney} more money to get a robot.`)
    }
    else if (type == gamedev) {
      neededmoney = gamedevCost - counter;
      alert(`You do not have enough money to get a game dev! You need ${neededmoney} more money to get a game dev.`)
    }
    else if (type == hacker) {
      neededmoney = hackerCost - counter;
      alert(`You do not have enough money to get a hacker! You need ${neededmoney} more money to get a hacker.`)
    }
    else if (type == company) {
      neededmoney = companyCost - counter;
      alert(`You do not have enough money to get a company! You need ${neededmoney} more money to get a company.`)
    }
    else if (type == gamedistrib) {
      neededmoney = gamedistribCost - counter;
      alert(`You do not have enough money to get a game distributor! You need ${neededmoney} more money to get a game distributor.`)
    } else {
      return alert('Error');
    }
  }

  document.getElementById('button').onclick = () => {
    counter = counter + clickincome;
    document.getElementById('clicks').innerText = counter;
  };

  let buttonelement = document.getElementById("button").style;

  function buttonclick() {
    counter = counter + clickincome;
    document.getElementById('clicks').innerText = counter;
  }

  document.getElementById('getcoder').onclick = () => {
    if (counter < coderCost) {
      return notenoughalert(coder);
    } else {
      coders = coders + 1;
      coderincome = coderincome + 1;
      counter = counter - coderCost;
      document.getElementById('clicks').innerText = counter;
      coderCost = coderCost + 5;
      document.getElementById('coderCost').innerText = coderCost;
      document.getElementById('coders').innerText = coders;
      document.getElementById('coderincome').innerText = coderincome;
    }
  }

  document.getElementById('getrobot').onclick = () => {
    if (counter < robotCost) {
      return notenoughalert(robot);
    } else {
      robots = robots + 1;
      robotincome = robotincome + 10;
      counter = counter - robotCost;
      document.getElementById('clicks').innerText = counter;
      robotCost = robotCost + 50;
      document.getElementById('robotCost').innerText = robotCost;
      document.getElementById('robots').innerText = robots;
      document.getElementById('robotincome').innerText = robotincome;
    }
  }

  document.getElementById('getgamedev').onclick = () => {
    if (counter < gamedevCost) {
      return notenoughalert(gamedev);
    } else {
      gamedevs = gamedevs + 1;
      gamedevincome = gamedevincome + 50;
      counter = counter - gamedevCost;
      document.getElementById('clicks').innerText = counter;
      gamedevCost = gamedevCost + 500;
      document.getElementById('gamedevCost').innerText = gamedevCost;
      document.getElementById('gamedevs').innerText = gamedevs;
      document.getElementById('gamedevincome').innerText = gamedevincome;
    }
  }

  document.getElementById('gethacker').onclick = () => {
    if (counter < hackerCost) {
      return notenoughalert(hacker);
    } else {
      hackers = hackers + 1;
      hackerincome = hackerincome + 250;
      counter = counter - hackerCost;
      document.getElementById('clicks').innerText = counter;
      hackerCost = hackerCost + 5000;
      document.getElementById('hackerCost').innerText = hackerCost;
      document.getElementById('hackers').innerText = hackers;
      document.getElementById('hackerincome').innerText = hackerincome;
    }
  }

  document.getElementById('getcompany').onclick = () => {
    if (counter < companyCost) {
      return notenoughalert(company);
    } else {
      companies = companies + 1;
      companyincome = companyincome + 1000;
      counter = counter - companyCost;
      document.getElementById('clicks').innerText = counter;
      companyCost = companyCost + 10000;
      document.getElementById('companyCost').innerText = companyCost;
      document.getElementById('companies').innerText = companies;
      document.getElementById('companyincome').innerText = companyincome;
    }
  }

  document.getElementById('getgamedistrib').onclick = () => {
    if (counter < gamedistribCost) {
      return notenoughalert(gamedistrib);
    } else {
      gamedistribs = gamedistribs + 1;
      gamedistribincome = gamedistribincome + 10000;
      counter = counter - gamedistribCost;
      document.getElementById('clicks').innerText = counter;
      gamedistribCost = gamedistribCost + 500000;
      document.getElementById('gamedistribCost').innerText = gamedistribCost;
      document.getElementById('gamedistribs').innerText = gamedistribs;
      document.getElementById('gamedistribincome').innerText = gamedistribincome;
    }
  }

  ////////// UPGRADES //////////

  ///////// PRESTIGE SHOP STUFF //////////

  ////////// OTHER ///////////////

  function dancingpancake(number) {
    counter = counter + number;
    document.getElementById('clicks').innerText = counter;
  }

  let result;

  function prestige_confirm() {
    var returnVal = comfirm("Are you sure you want to prestige?");
    if (returnVal == false) {
      return result = false;
    } else {
      return result = true;
    }
  }

  let totalincome = 0;

  let prestigelevel = 1;
  let prestigecost = 1000000;
  let prestigepoints = 0;

  document.getElementById('prestigepoints').innerText = prestigepoints;

  function dancingpancake2(number) {
    prestigepoints = prestigepoints + number;
    document.getElementById('prestigepoints').innerText = prestigepoints;
  }

  function dancingpancake3(number) {
    prestigelevel = prestigelevel + number;
    clickincome = clickincome + number;
    prestigecost = 500000 * prestigelevel + 500000;
    document.getElementById('clicks').innerText = counter;
    document.getElementById('clickincome').innerText = clickincome;
    document.getElementById('prestigelevel').innerText = prestigelevel;
    document.getElementById('prestigecost').innerText = prestigecost;
    document.getElementById('coderCost').innerText = coderCost;
    document.getElementById('coders').innerText = coders;
    document.getElementById('coderincome').innerText = coderincome;
    document.getElementById('robotCost').innerText = robotCost;
    document.getElementById('robots').innerText = robots;
    document.getElementById('robotincome').innerText = robotincome;
    document.getElementById('gamedevCost').innerText = gamedevCost;
    document.getElementById('gamedevs').innerText = gamedevs;
    document.getElementById('gamedevincome').innerText = gamedevincome;
    document.getElementById('hackerCost').innerText = hackerCost;
    document.getElementById('hackers').innerText = hackers;
    document.getElementById('hackerincome').innerText = hackerincome;
    document.getElementById('companyCost').innerText = companyCost;
    document.getElementById('companies').innerText = companies;
    document.getElementById('companyincome').innerText = companyincome;
  }

  function dancingpancake4(number) {
    counter = number;
    document.getElementById('clicks').innerText = counter;
  }

  document.getElementById('prestige').onclick = () => {
    if (counter < prestigecost) {
      return notenoughalert(prestige);
    } else {
      if (confirm('Are you sure you want to prestige?')) {
      counter = 0;
      coders = 0;
      coderCost = coderStartCost;
      coderincome = 0;
      robots = 0;
      robotCost = robotStartCost;
      robotincome = 0;
      gamedevs = 0;
      gamedevCost = gamedevStartCost;
      gamedevincome = 0;
      hackers = 0;
      hackerCost = hackerStartCost;
      hackerincome = 0;
      companies = 0;
      companyCost = companyStartCost;
      companyincome = 0;
      gamedistribs = 0;
      gamedistribCost = gamedistribStartCost;
      gamedistribincome = 0;
      prestigelevel = prestigelevel + 1;
      clickincome = clickincome + 1;
      prestigecost = prestigecost + 500000;
      document.getElementById('clicks').innerText = counter;
      document.getElementById('prestigelevel').innerText = prestigelevel;
      document.getElementById('prestigecost').innerText = prestigecost;
      document.getElementById('coderCost').innerText = coderCost;
      document.getElementById('coders').innerText = coders;
      document.getElementById('coderincome').innerText = coderincome;
      document.getElementById('robotCost').innerText = robotCost;
      document.getElementById('robots').innerText = robots;
      document.getElementById('robotincome').innerText = robotincome;
      document.getElementById('gamedevCost').innerText = gamedevCost;
      document.getElementById('gamedevs').innerText = gamedevs;
      document.getElementById('gamedevincome').innerText = gamedevincome;
      document.getElementById('hackerCost').innerText = hackerCost;
      document.getElementById('hackers').innerText = hackers;
      document.getElementById('hackerincome').innerText = hackerincome;
      document.getElementById('companyCost').innerText = companyCost;
      document.getElementById('companies').innerText = companies;
      document.getElementById('companyincome').innerText = companyincome;
      document.getElementById('gamedistribCost').innerText = gamedistribCost;
      document.getElementById('gamedistribs').innerText = gamedistribs;
      document.getElementById('gamedistribincome').innerText = gamedistribincome;
    }
  }
}

window.setInterval(function () {
  dancingpancake(coderincome)
}, 1000);

window.setInterval(function () {
  dancingpancake(robotincome)
}, 1000);

window.setInterval(function () {
  dancingpancake(gamedevincome)
}, 1000);

window.setInterval(function () {
  dancingpancake(hackerincome)
}, 1000);

window.setInterval(function () {
  dancingpancake(companyincome)
}, 1000);

window.setInterval(function () {
  dancingpancake(gamedistribincome)
}, 1000);

window.setInterval(function () {
  totalincome = coderincome + robotincome + gamedevincome + hackerincome + companyincome + gamedistribincome;
  document.getElementById('totalincome').innerText = totalincome;
}, 100);

document.getElementById('save').onclick = () => {
  store.set('savegame', {
    "counter": counter,
    "clickincome": clickincome,
    "coders": coders,
    "coderCost": coderCost,
    "coderincome": coderincome,
    "robots": robots,
    "robotCost": robotCost,
    "robotincome": robotincome,
    "gamedevs": gamedevs,
    "gamedevCost": gamedevCost,
    "gamedevincome": gamedevincome,
    "hackers": hackers,
    "hackerCost": hackerCost,
    "hackerincome": hackerincome,
    "companies": companies,
    "companyCost": companyCost,
    "companyincome": companyincome,
    "gamedistribs": gamedistribs,
    "gamedistribCost": gamedistribCost,
    "gamedistribincome": gamedistribincome,
    "prestigecost": prestigecost,
    "prestigelevel": prestigelevel
  });
  alert("Saved!")
}

function save() {
  store.set('savegame', {
    "counter": counter,
    "clickincome": clickincome,
    "coders": coders,
    "coderCost": coderCost,
    "coderincome": coderincome,
    "robots": robots,
    "robotCost": robotCost,
    "robotincome": robotincome,
    "gamedevs": gamedevs,
    "gamedevCost": gamedevCost,
    "gamedevincome": gamedevincome,
    "hackers": hackers,
    "hackerCost": hackerCost,
    "hackerincome": hackerincome,
    "companies": companies,
    "companyCost": companyCost,
    "companyincome": companyincome,
    "gamedistribs": gamedistribs,
    "gamedistribCost": gamedistribCost,
    "gamedistribincome": gamedistribincome,
    "prestigecost": prestigecost,
    "prestigelevel": prestigelevel
  });
}

document.getElementById('load').onclick = () => {
  var sd = store.get('savegame');
  counter = sd.counter;
  clickincome = sd.clickincome;
  coders = sd.coders;
  coderCost = sd.coderCost;
  coderincome = sd.coderincome;
  robots = sd.robots;
  robotCost = sd.robotCost;
  robotincome = sd.robotincome;
  gamedevs = sd.gamedevs;
  gamedevCost = sd.gamedevCost;
  gamedevincome = sd.gamedevincome;
  hackers = sd.hackers;
  hackerCost = sd.hackerCost;
  hackerincome = sd.hackerincome;
  companies = sd.companies;
  companyCost = sd.companyCost;
  companyincome = sd.companyincome;
  gamedistribs = sd.gamedistribs;
  gamedistribCost = sd.gamedistribCost;
  gamedistribincome = sd.gamedistribincome;
  prestigecost = sd.prestigecost;
  prestigelevel = sd.prestigelevel;
  document.getElementById('clicks').innerText = counter;
  document.getElementById('clickincome').innerText = clickincome;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('companyCost').innerText = companyCost;
  document.getElementById('companies').innerText = companies;
  document.getElementById('companyincome').innerText = companyincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
  alert("Loaded!")
}

function load() {
  var sd = store.get('savegame');
  counter = sd.counter;
  clickincome = sd.clickincome;
  coders = sd.coders;
  coderCost = sd.coderCost;
  coderincome = sd.coderincome;
  robots = sd.robots;
  robotCost = sd.robotCost;
  robotincome = sd.robotincome;
  gamedevs = sd.gamedevs;
  gamedevCost = sd.gamedevCost;
  gamedevincome = sd.gamedevincome;
  hackers = sd.hackers;
  hackerCost = sd.hackerCost;
  hackerincome = sd.hackerincome;
  companies = sd.companies;
  companyCost = sd.companyCost;
  companyincome = sd.companyincome;
  gamedistribs = sd.gamedistribs;
  gamedistribCost = sd.gamedistribCost;
  gamedistribincome = sd.gamedistribincome;
  prestigecost = sd.prestigecost;
  prestigelevel = sd.prestigelevel;
  document.getElementById('clicks').innerText = counter;
  document.getElementById('clickincome').innerText = clickincome;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('companyCost').innerText = companyCost;
  document.getElementById('companies').innerText = companies;
  document.getElementById('companyincome').innerText = companyincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
  document.getElementById('clicks').innerText = counter;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('prestigepoints').innerText = prestigepoints;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('companyCost').innerText = companyCost;
  document.getElementById('companies').innerText = companies;
  document.getElementById('companyincome').innerText = companyincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
}

document.getElementById('reset').onclick = () => {
  counter = 0;
  coders = 0;
  coderCost = coderStartCost;
  coderincome = 0;
  robots = 0;
  robotCost = robotStartCost;
  robotincome = 0;
  gamedevs = 0;
  gamedevCost = gamedevStartCost;
  gamedevincome = 0;
  hackers = 0;
  hackerCost = hackerStartCost;
  hackerincome = 0;
  companies = 0;
  companyCost = companyStartCost;
  companyincome = 0;
  gamedistribs = 0;
  gamedistribCost = gamedistribStartCost;
  gamedistribincome = 0;
  prestigecost = 1000000;
  prestigelevel = 1;
  clickincome = 1;
  document.getElementById('clicks').innerText = counter;
  document.getElementById('prestigecost').innerText = prestigecost;
  document.getElementById('prestigelevel').innerText = prestigelevel;
  document.getElementById('coderCost').innerText = coderCost;
  document.getElementById('coders').innerText = coders;
  document.getElementById('coderincome').innerText = coderincome;
  document.getElementById('robotCost').innerText = robotCost;
  document.getElementById('robots').innerText = robots;
  document.getElementById('robotincome').innerText = robotincome;
  document.getElementById('gamedevCost').innerText = gamedevCost;
  document.getElementById('gamedevs').innerText = gamedevs;
  document.getElementById('gamedevincome').innerText = gamedevincome;
  document.getElementById('hackerCost').innerText = hackerCost;
  document.getElementById('hackers').innerText = hackers;
  document.getElementById('hackerincome').innerText = hackerincome;
  document.getElementById('companyCost').innerText = companyCost;
  document.getElementById('companies').innerText = companies;
  document.getElementById('companyincome').innerText = companyincome;
  document.getElementById('gamedistribCost').innerText = gamedistribCost;
  document.getElementById('gamedistribs').innerText = gamedistribs;
  document.getElementById('gamedistribincome').innerText = gamedistribincome;
  store.remove('savegame')
  alert('Reset!')
}

document.getElementById('gotolinks1').onclick = () => {
  window.location.replace("/linksandabout.html");
}

document.getElementById('gotolinks2').onclick = () => {
  window.location.replace("/linksandabout.html");
}

document.getElementById('gotolinks3').onclick = () => {
  window.location.replace("/linksandabout.html");
}

} catch (error) {
  console.error(error)
}