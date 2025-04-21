var gameData = {
    wood: 0,
    woodPerClick: 1,
    woodPerClickCost: 5,
    totemGod1: 0,
    churchBuilt: 0,
    churchCost: 100
}

var mainGameLoop = window.setInterval(function() {
    if(gameData.churchBuilt >= 1){
        worshipGod1()
    }
  }, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("WorshipperSave", JSON.stringify(gameData))
  }, 15000)

function saveGameManually(){
    localStorage.setItem("WorshipperSave", JSON.stringify(gameData))
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function worshipGod1() {
    gameData.wood += gameData.woodPerClick
    document.getElementById("woodSummoned").innerHTML = gameData.wood + " Wood Summoned"
}

function totemGod1(){
    if (gameData.wood >= gameData.woodPerClickCost){
        gameData.wood -= gameData.woodPerClickCost
        gameData.totemGod1++ 
        gameData.woodPerClick += 1
        gameData.woodPerClickCost *= 2
    }
    else{
        document.getElementById("buildTotem").innerHTML = "Need " + gameData.woodPerClickCost + " Wood"
        delay(1000).then(() => document.getElementById("buildTotem").innerHTML = "Build Totem")
    }
    document.getElementById("totemGod1").innerHTML = gameData.totemGod1 + " Totem Created"
    document.getElementById("woodSummoned").innerHTML = gameData.wood + " Wood Summoned"
}

function buildChurch(){
    if (gameData.wood >= gameData.churchCost && gameData.churchBuilt < 1){
        gameData.wood -= gameData.churchCost
        gameData.churchBuilt = 1 
        document.getElementById("buildChurch").innerHTML = "Church Built"
    }
    else if (gameData.wood < gameData.churchCost && gameData.churchBuilt < 1) {
        document.getElementById("buildChurch").innerHTML = "Need " + gameData.churchCost + " Wood"
        delay(1000).then(() => document.getElementById("buildChurch").innerHTML = "Build Church")
    }
    document.getElementById("woodSummoned").innerHTML = gameData.wood + " Wood Summoned"
}

  //game = file://C:\Users\Diego\Desktop\Incremental\index.html