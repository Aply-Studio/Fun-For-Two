
let CurrentPl = "Pl1";
let NextPl    = "Pl1";

let PosPl1    = "1";
let PosPl2    = "1";
let PosPl3    = "1";
let PosPl4    = "1";
let PosPl5    = "1";
let PosPl6    = "1";

let randomDiceNumber = "0";

var IntPos        = null;
let CurrentCell   = null;
let NewCell       = null;

let NewPosPl      = "0";

let CurrentGameMode = null;

let SpecialGameMode = false;

let lastScene = "Start";
let delay  = 600;

function ChangeMainTo(newScene){
  var lastMainId = lastScene+"-Main"
  lastMain   = document.getElementById(lastMainId);

  var newMainId  = newScene+"-Main";
  newMain    = document.getElementById(newMainId);

  if (newMainId == "Game"){

  }
  else{
    newMain.style.position = "absolute";
    newMain.style.display = "flex";
    newMain.style.marginTop = "100vh";

    setTimeout(function(){
      newMain.style.marginTop = "0vh";
      newMain.style.position = "absolute";
    }, delay);

    setTimeout(function(){
      lastMain.style.opacity = "0";
    }, delay + 100);

    setTimeout(function(){
      lastMain.style.display = "none";
      lastMain.style.opacity = "1";
    }, delay + 200);

    setTimeout(function(){
      lastScene = newScene;
    }, delay + 300);

  }
}

function ChangeToSettings(){
  lastMain   = document.getElementById('Admin-Main');

  newMain    = document.getElementById('Settings-Main');

  newMain.style.position = "absolute";
  newMain.style.display = "flex";
  newMain.style.marginTop = "100vh";

  setTimeout(function(){
    newMain.style.marginTop = "0vh";
    newMain.style.position = "absolute";
  }, delay);

  setTimeout(function(){
    lastMain.style.opacity = "0";
  }, delay + 100);

  setTimeout(function(){
    lastMain.style.display = "none";
    lastMain.style.opacity = "1";
  }, delay + 200);

  lastScene = "Settings";
}

function RollDice(){

  const dice = document.getElementById("Dice");
  const dicenumber = document.getElementById("DiceFinishNumber");

  GetRandomDiceNumber();
  function GetRandomDiceNumber(){
    randomDiceNumber = Math.floor(Math.random() * (7 - 1)) + 1;
    dicenumber.innerHTML = randomDiceNumber;

    ShowNumber(randomDiceNumber);
  }

  function ShowNumber(number){
    const NumberCanvas = document.getElementById('Game-Number');

    NumberCanvas.innerHTML = '<div class="FlexboxCenterCenter Number-Canvas"><div class="Number-Display"><h1 id="Dice-Number-Display">'+number+'</h1></div></div>';

    NumberCanvas.style.display = "flex";

    setTimeout(function(){NumberCanvas.style.display = "none";}, 1400);
    setTimeout(function(){MovePl(number);}, 1500);
  }
  function MovePl(randomDiceNumber){

    var dice_number = parseInt(randomDiceNumber);

    if      (CurrentPl == "Pl1"){
      IntPos   = parseInt(PosPl1);
      NewPosPl = dice_number+IntPos;

      if (NewPosPl >= 49){
        NewCell       = "Cell49";

        var Current_Pl = document.getElementById(CurrentPl);
        var New_Cell   = document.getElementById(NewCell).children[1];

        New_Cell.appendChild(Current_Pl);

        StopGame();
        return;
      }
      else{
        CurrentCell   = "Cell"+IntPos;
        NewCell       = "Cell"+NewPosPl;

        PosPl1 = parseInt(NewPosPl);
      }
    }
    else if (CurrentPl == "Pl2"){
      IntPos   = parseInt(PosPl2);
      NewPosPl = dice_number+IntPos;

      if (NewPosPl >= 49){
        NewCell       = "Cell49";

        var Current_Pl = document.getElementById(CurrentPl);
        var New_Cell   = document.getElementById(NewCell).children[1];

        New_Cell.appendChild(Current_Pl);

        StopGame();
        return;
      }
      else{
        CurrentCell   = "Cell"+IntPos;
        NewCell       = "Cell"+NewPosPl;

        PosPl2 = parseInt(NewPosPl);
      }
    }
    else if (CurrentPl == "Pl3"){
      IntPos   = parseInt(PosPl3);
      NewPosPl = dice_number+IntPos;

      if (NewPosPl >= 49){
        NewCell       = "Cell49";

        var Current_Pl = document.getElementById(CurrentPl);
        var New_Cell   = document.getElementById(NewCell).children[1];

        New_Cell.appendChild(Current_Pl);

        StopGame();
        return;
      }
      else{
        CurrentCell   = "Cell"+IntPos;
        NewCell       = "Cell"+NewPosPl;

        PosPl3 = parseInt(NewPosPl);
      }
    }
    else if (CurrentPl == "Pl4"){
      IntPos   = parseInt(PosPl4);
      NewPosPl = dice_number+IntPos;

      if (NewPosPl >= 49){
        NewCell       = "Cell49";

        var Current_Pl = document.getElementById(CurrentPl);
        var New_Cell   = document.getElementById(NewCell).children[1];

        New_Cell.appendChild(Current_Pl);

        StopGame();
        return;
      }
      else {
        CurrentCell   = "Cell"+IntPos;
        NewCell       = "Cell"+NewPosPl;

        PosPl4 = parseInt(NewPosPl);
      }
    }
    else if (CurrentPl == "Pl5"){
      IntPos   = parseInt(PosPl5);
      NewPosPl = dice_number+IntPos;

      if (NewPosPl >= 49){
        NewCell       = "Cell49";

        var Current_Pl = document.getElementById(CurrentPl);
        var New_Cell   = document.getElementById(NewCell).children[1];

        New_Cell.appendChild(Current_Pl);

        StopGame();
        return;
      }
      else {
        CurrentCell   = "Cell"+IntPos;
        NewCell       = "Cell"+NewPosPl;

        PosPl5 = parseInt(NewPosPl);
      }
    }
    else if (CurrentPl == "Pl6"){
      IntPos   = parseInt(PosPl6);
      NewPosPl = dice_number+IntPos;

      if (NewPosPl >= 49){
        NewCell       = "Cell49";

        var Current_Pl = document.getElementById(CurrentPl);
        var New_Cell   = document.getElementById(NewCell).children[1];

        New_Cell.appendChild(Current_Pl);

        StopGame();
        return;
      }
      else{
        CurrentCell   = "Cell"+IntPos;
        NewCell       = "Cell"+NewPosPl;

        PosPl6 = parseInt(NewPosPl);
      }
    }

    var Current_Pl = document.getElementById(CurrentPl);
    var New_Cell   = document.getElementById(NewCell).children[1];

    New_Cell.appendChild(Current_Pl);

    setTimeout(function(){GetTask();}, 1500);
    function GetTask(){
      CurrentGameMode = document.getElementById('GameModeSelection').value.replace(/ /g, "");

      var Current_Cell_Task = document.getElementById(NewCell);
      var filteredTasks;
      var Task;

      if (Current_Cell_Task.className == "Board-Cell No-Task"){
        NextTurn();
        return;
      }
      else if (Current_Cell_Task.className == "Board-Cell Easy-Task"){
        filteredTasks = arr_easy.filter((item)=>{
          return item.mode == CurrentGameMode
        })

        Task = filteredTasks[(Math.floor(Math.random() * filteredTasks.length))];
        Task = Task.task;

        if (Task.includes("0,5min") == true){
          ShowTask(true,'0.5', Task);
        }
        else if (Task.includes("1min") == true){
          ShowTask(true,'1', Task);
        }
        else if (Task.includes("1,5min") == true){
          ShowTask(true,'1.5', Task);
        }
        else if (Task.includes("2min") == true){
          ShowTask(true,'2', Task);
        }
        else if (Task.includes("4min") == true){
          ShowTask(true,'4', Task);
        }
        else{
          ShowTask(false,'', Task);
        }
      }
      else if (Current_Cell_Task.className == "Board-Cell Normal-Task"){
        filteredTasks = arr_normal.filter((item)=>{
          return item.mode == CurrentGameMode
        })

        Task = filteredTasks[(Math.floor(Math.random() * filteredTasks.length))];
        Task = Task.task;

        if (Task.includes("0,5min") == true){
          ShowTask(true,'0.5', Task);
        }
        else if (Task.includes("1min") == true){
          ShowTask(true,'1', Task);
        }
        else if (Task.includes("1,5min") == true){
          ShowTask(true,'1.5', Task);
        }
        else if (Task.includes("2min") == true){
          ShowTask(true,'2', Task);
        }
        else if (Task.includes("4min") == true){
          ShowTask(true,'4', Task);
        }
        else{
          ShowTask(false,'', Task);
        }
      }
      else if (Current_Cell_Task.className == "Board-Cell Hard-Task"){
        filteredTasks = arr_hard.filter((item)=>{
          return item.mode == CurrentGameMode
        })

        Task = filteredTasks[(Math.floor(Math.random() * filteredTasks.length))];
        Task = Task.task;

        if (Task.includes("0,5min") == true){
          ShowTask(true,'0.5', Task);
        }
        else if (Task.includes("1min") == true){
          ShowTask(true,'1', Task);
        }
        else if (Task.includes("1,5min") == true){
          ShowTask(true,'1.5', Task);
        }
        else if (Task.includes("2min") == true){
          ShowTask(true,'2', Task);
        }
        else if (Task.includes("4min") == true){
          ShowTask(true,'4', Task);
        }
        else{
          ShowTask(false,'', Task);
        }
      }
      else if (Current_Cell_Task.className == "Board-Cell Hardcore-Task"){
        filteredTasks = arr_hardcore.filter((item)=>{
          return item.mode == CurrentGameMode
        })

        Task = filteredTasks[(Math.floor(Math.random() * filteredTasks.length))];
        Task = Task.task;

        if (Task.includes("0,5min") == true){
          ShowTask(true,'0.5', Task);
        }
        else if (Task.includes("1min") == true){
          ShowTask(true,'1', Task);
        }
        else if (Task.includes("1,5min") == true){
          ShowTask(true,'1.5', Task);
        }
        else if (Task.includes("2min") == true){
          ShowTask(true,'2', Task);
        }
        else if (Task.includes("4min") == true){
          ShowTask(true,'4', Task);
        }
        else{
          ShowTask(false,'', Task);
        }
      }
    }
  }
}

function StopGame(){
  const WinnerCanvas = document.getElementById('Game-Winner');

  AddParticles("Win");

  WinnerCanvas.innerHTML = '<div class="FlexboxCenterCenter Winner-Canvas" onload="confetti();"><div class="FlexboxColumnCenterCenter Winner-Display"><h1 id="Dice-Number-Display">'+CurrentPl+'</h1><h2>hat gewonnen!</h2></div></div>';

  WinnerCanvas.style.display = "flex";

  setTimeout(function(){window.location.reload();}, 5000);
}
function AddParticles(mode) {
  if (mode == "Win"){
    var duration = 1000 * 2000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 160, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }
}
function ShowTask(value,time,Task){

  if (value == true){
    var TaskText = Task;
    const TaskCanvas = document.getElementById('Game-Tasks');

    TaskCanvas.innerHTML = '<div class="FlexboxColumnCenterCenter Popup-Canvas" id="Popup"><div class="Popup-Data"><div class="FlexboxColumnCenterCenter Popup-Task"><h1>Aufgabe</h1><h2>'+ TaskText +'<h2></div><button type="button" class="FlexboxRowCenterCenter Popup-Btn Btn-NotSelectAble" id="Popup-Finish-Btn" onclick="HideTask();"><h1>Fertig</h1><div class="Popup-Btn-Icon"></div></button></div><div class="FlexboxColumnCenterCenter Popup-Timer"><button type="button" class="FlexboxColumnCenterCenter Timer-Btn Timer-SelectAble" onclick="startTimer(this);"><div class="FlexboxCenterCenter Timer-Filler" id="Timer-Filler"><h1 id="TimerText">00:00</h1></div></button></div></div>';

    TaskCanvas.style.display = "flex";

    setTimer(time);
  }
  else{
    var TaskText = Task;
    const TaskCanvas = document.getElementById('Game-Tasks');

    TaskCanvas.innerHTML = '<div class="FlexboxCenterCenter Popup-Canvas" id="Popup"><div class="Popup-Data"><div class="FlexboxColumnCenterCenter Popup-Task"><h1>Aufgabe</h1><h2>'+ TaskText +'<h2></div><button type="button" class="FlexboxRowCenterCenter Popup-Btn Btn-SelectAble" onclick="HideTask();"><h1>Fertig</h1><div class="Popup-Btn-Icon"></div></button></div></div>';

    TaskCanvas.style.display = "flex";
  }
}

function HideTask(){
  const TaskCanvas = document.getElementById('Game-Tasks');
  const ShownTask  = TaskCanvas.firstChild;

  if (ShownTask == null){
    return
  }
  else{
    ShownTask.remove()
    setTimeout(function(){TaskCanvas.style.display = "none";  NextTurn();}, 1000);
  }
}

function ToggleBtn(value, btn){
  btn_ID = btn;
  const Btn = document.getElementById(btn_ID);
  if (value == false){
    Btn.className = ''+btn_ID+' Btn-NotSelectAble';
  }
  else if (value == true){
    Btn.className = ''+btn_ID+' Btn-SelectAble';
  }
}

function TogglePopUpBtn(value){
  let PopupBtn = document.getElementById('Popup-Finish-Btn')
  if (value == false){
    PopupBtn.className = 'FlexboxRowCenterCenter Popup-Btn Btn-NotSelectAble';
  }
  else if (value == true){
    PopupBtn.className = 'FlexboxRowCenterCenter Popup-Btn Btn-SelectAble';
  }
}

function TogglePlayer(){
  var CurrentPlLabelId = CurrentPl+"Icon";
  var NextPlLabelId    = NextPl+"Icon";

  var CurrentPlLabel = document.getElementById(CurrentPlLabelId);
  var NextPlLabel = document.getElementById(NextPlLabelId);

  CurrentPlLabel.className = 'FlexboxColumnStartCenter Player-Canvas Player-NotSelected';
  NextPlLabel.className    = 'FlexboxColumnStartCenter Player-Canvas Player-Selected';

  CurrentPl = NextPl;
  NextPl    = null;
}

function NextTurn(){
  const PlayerCount = document.getElementById('PlayerAmounts').value;

  var NextPlNumber = parseInt(CurrentPl.match(/\d/g)) + 1;

  if (NextPlNumber > PlayerCount){
    NextPl = "Pl1";
    TogglePlayer();
  }
  else if(NextPlNumber <= PlayerCount){
    NextPl = "Pl"+NextPlNumber;
    TogglePlayer();
  }

  ToggleBtn(true, "Dice-Btn");
}

var time;
function setTimer(setTime){
  const TimerAnimDuration = document.getElementById('Timer-Filler');

  let min = setTime;
  time = min * 60;

  TimerAnimDuration.style.animationDelay = "9999999999999999999999999999999s";
  TimerAnimDuration.style.animationDuration = time+"s";

  let countdown = document.getElementById('TimerText');

  let minutes = Math.floor(time / 60);
  let seconds   = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  minutes = minutes < 10 ? '0' + minutes : minutes;

  countdown.innerHTML = `${minutes}:${seconds}`;
}

let TimerInterval;
let timer_ended = false;

function startTimer(self){
  self.className = 'FlexboxColumnCenterCenter Timer-Btn Timer-NotSelectAble';

  var TimerAnimDuration = document.getElementById('Timer-Filler');
  TimerAnimDuration.style.animationDelay = "2s";
  timer_ended = false;
  TimerInterval = setInterval(updateTimer, 1000);
}
function updateTimer(){
  if (time >= 0 && timer_ended == false){
    let AlarmSound1 = document.getElementById('10s-Alarm');
    let AlarmSound2 = document.getElementById('1s-Alarm');
    AlarmSound1.volume = "0.25";
    AlarmSound2.volume = "0.25";

    if (time <= 10){
      AlarmSound1.play();
    }
    if (time <= 0) {
      AlarmSound2.play();
    }
    let countdown = document.getElementById('TimerText');

    let minutes = Math.floor(time / 60);
    let seconds   = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
  }
  else if(time <= 0 && timer_ended == false){
    timer_ended = true
    TogglePopUpBtn(true);
    clearInterval(TimerInterval);
  }
}

function Load_GameModes(){
  let Selection_GameModes      = document.getElementById('GameModeSelection');

  if (SpecialGameMode == true){
    Selection_GameModes.innerHTML += '<option>Special</option>';
  }
}

let Task_Current_GameMode;
function Load_Options(){
  Task_Current_GameMode        = document.getElementById('GameModeSelection').value;
  let Task_Selection_GameModes = document.getElementById('DifficultySelection');

  if (Task_Current_GameMode == "Trink Spiel"){
    Task_Selection_GameModes.innerHTML = '<option>Normal</option><option>Schwer</option><option>Hardcore</option>';
  }
  else if (Task_Current_GameMode == "Warheit oder Pflicht"){
    Task_Selection_GameModes.innerHTML = '<option>Einfach</option><option>Normal</option><option>Schwer</option><option>Hardcore</option>';
  }
  else if (Task_Current_GameMode == "Special"){
    Task_Selection_GameModes.innerHTML = '<option>Normal</option><option>Schwer</option><option>Hardcore</option>';
  }
}

function Load_Tasks(){
  Task_Current_GameMode        = document.getElementById('GameModeSelection').value;
  let Task_Title_GameMode      = document.getElementById('SelectedGameMode');
  let Task_Selection_GameModes = document.getElementById('TaskDiffiSelection');
  let Task_List                = document.getElementById('TaskList');

  Task_Title_GameMode.innerHTML = Task_Current_GameMode;

  if (Task_Current_GameMode == "Trink Spiel"){
    Task_Selection_GameModes.innerHTML = '<option>Normal</option><option>Schwer</option><option>Hardcore</option>';
  }
  else if (Task_Current_GameMode == "Warheit oder Pflicht"){
    Task_Selection_GameModes.innerHTML = '<option>Einfach</option><option>Normal</option><option>Schwer</option><option>Hardcore</option>';
  }
  else if (Task_Current_GameMode == "Special"){
    Task_Selection_GameModes.innerHTML = '<option>Normal</option><option>Schwer</option><option>Hardcore</option>';
  }

  Task_Current_GameMode = Task_Current_GameMode.replace(/ /g, "");

  AddTasks(Task_Current_GameMode);
}

function AddTasks(current_GameMode){
  const Task_List = document.getElementById('TaskList');

  Task_List.innerHTML = '';

  var EasyArrayTasks = arr_easy.filter((item)=>{
    return item.mode == current_GameMode
  })

  var NormalArrayTasks = arr_normal.filter((item)=>{
    return item.mode == current_GameMode
  })

  var HardArrayTasks = arr_hard.filter((item)=>{
    return item.mode == current_GameMode
  })

  var HardcoreArrayTasks = arr_hardcore.filter((item)=>{
    return item.mode == current_GameMode
  })

  let Task_Diffi;

  for (i=0; i<EasyArrayTasks.length;i++){

    Task_Diffi = "Einfach";

    Task_List.innerHTML += '<div class="FlexboxRowSpaceAroundCenter Task-Shown" id="ShownTask"><div class="FlexboxColumnStartCenter Task-Mode-Info"><div class="FlexboxRowCenterCenter Task-Sown-Info"><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+current_GameMode+'</h1><h1>‏‏‎ ‎-‏‏‎ ‎</h1><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+Task_Diffi+'</h1></div><div class="Task-Shown-Text"><h1 id="TaskGameMode">'+ EasyArrayTasks[i].task +'</h1></div></div><button onclick="Task_RemoveTask(this);" type="button" class="Task-RemoveBtn" id="RemoveTaskBtn">✖</button></div>';
  }
  for (i=0; i<NormalArrayTasks.length;i++){

    Task_Diffi = "Normal";

    Task_List.innerHTML += '<div class="FlexboxRowSpaceAroundCenter Task-Shown" id="ShownTask"><div class="FlexboxColumnStartCenter Task-Mode-Info"><div class="FlexboxRowCenterCenter Task-Sown-Info"><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+current_GameMode+'</h1><h1>‏‏‎ ‎-‏‏‎ ‎</h1><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+Task_Diffi+'</h1></div><div class="Task-Shown-Text"><h1 id="TaskGameMode">'+ NormalArrayTasks[i].task +'</h1></div></div><button type="button" class="Task-RemoveBtn" id="RemoveTaskBtn" onclick="Task_RemoveTask(this);">✖</button></div>';
  }
  for (i=0; i<HardArrayTasks.length;i++){

    Task_Diffi = "Schwer";

    Task_List.innerHTML += '<div class="FlexboxRowSpaceAroundCenter Task-Shown" id="ShownTask"><div class="FlexboxColumnStartCenter Task-Mode-Info"><div class="FlexboxRowCenterCenter Task-Sown-Info"><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+current_GameMode+'</h1><h1>‏‏‎ ‎-‏‏‎ ‎</h1><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+Task_Diffi+'</h1></div><div class="Task-Shown-Text"><h1 id="TaskGameMode">'+ HardArrayTasks[i].task +'</h1></div></div><button type="button" class="Task-RemoveBtn" id="RemoveTaskBtn" onclick="Task_RemoveTask(this);">✖</button></div>';
  }
  for (i=0; i<HardcoreArrayTasks.length;i++){

    Task_Diffi = "Hardcore";

    Task_List.innerHTML += '<div class="FlexboxRowSpaceAroundCenter Task-Shown" id="ShownTask"><div class="FlexboxColumnStartCenter Task-Mode-Info"><div class="FlexboxRowCenterCenter Task-Sown-Info"><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+current_GameMode+'</h1><h1>‏‏‎ ‎-‏‏‎ ‎</h1><h1 class="TaskSettingsGameMode" id="TaskSettingsGameMode">'+Task_Diffi+'</h1></div><div class="Task-Shown-Text"><h1 id="TaskGameMode">'+ HardcoreArrayTasks[i].task +'</h1></div></div><button type="button" class="Task-RemoveBtn" id="RemoveTaskBtn" onclick="Task_RemoveTask(this);">✖</button></div>';
  }
}

function Task_RemoveTask(self){
  let Task_Parent = self.parentNode;
  let Task_Diffi  = Task_Parent.firstChild.firstChild.lastChild.innerHTML;
  let Task_Text   = Task_Parent.firstChild.lastChild.firstChild.innerHTML;

  if (Task_Diffi == "Einfach"){
    arr_easy = arr_easy.filter(item => item.task !== Task_Text)

    AddTasks(Task_Current_GameMode);
  }
  else if (Task_Diffi == "Normal"){
    arr_normal = arr_normal.filter(item => item.task !== Task_Text)

    AddTasks(Task_Current_GameMode);
  }
  else if (Task_Diffi == "Schwer"){
    arr_hard = arr_hard.filter(item => item.task !== Task_Text)

    AddTasks(Task_Current_GameMode);
  }
  else if (Task_Diffi == "Hardcore"){
    arr_hardcore = arr_hardcore.filter(item => item.task !== Task_Text)

    AddTasks(Task_Current_GameMode);
  }
}

function Task_AddTask(self){
  let Task_Parent = self.parentNode;
  let Task_Diffi  = Task_Parent.children[0].value;
  let Task_Text   = Task_Parent.children[1].value;

  if (Task_Diffi == "Einfach"){
    arr_easy.push({mode:Task_Current_GameMode.replace(/ /g, ""),task:Task_Text})
  }
  else if (Task_Diffi == "Normal"){
    arr_normal.push({mode:Task_Current_GameMode.replace(/ /g, ""),task:Task_Text})
  }
  else if (Task_Diffi == "Schwer"){
    arr_hard.push({mode:Task_Current_GameMode.replace(/ /g, ""),task:Task_Text})
  }
  else if (Task_Diffi == "Hardcore"){
    arr_hardcore.push({mode:Task_Current_GameMode.replace(/ /g, ""),task:Task_Text})
  }

  AddTasks(Task_Current_GameMode);

  Task_Parent.children[1].value = "";
}

function ToggleAdminMenu(){
  let StartMenuCanvas = document.getElementById('Start-Main');

  StartMenuCanvas.innerHTML += '<div class="FlexboxCenterCenter Start-Login" id="Start-Login"><div class="FlexboxCenterCenter Login-Canvas"><div class="FlexboxColumnStartCenter Login-Data"><h1>Admin Login</h1><input type="text" placeholder="Username" class="Login-Input" id="AdminUsername"><input type="password" placeholder="Password" class="Login-Input" id="AdminPassword"><button type="button" class="FlexboxCenterCenter Login-Btn" onclick="CheckLoginData();"><h1>Login</h1></button></div></div></div>';
}

function CheckLoginData(){
  let Username = document.getElementById('AdminUsername').value;
  let Password = document.getElementById('AdminPassword').value;

  if (Username == "Admin"){

    if (Password == "01.01.2023"){

      let Body = document.getElementById('body');

      let Settings = "Settings";

      Body.innerHTML += '<div class="FlexboxCenterEnd Section-Canvas Admin-Menu" id="Admin-Main"><div class="FlexboxColumnStartCenter Admin-Canvas"><div class="Admin-Logo Image-Cover"></div><div class="FlexboxColumnCenterCenter Admin-Title Title-Canvas"><h1>FUN FOR TWO</h1><h2>AdminPanel</h2></div><ul class="Admin-List"><li class="FlexboxRowSpaceMaxCenter Admin-List-Item"><h2>Special Gamemode</h2><input type="checkbox" onclick="ToggleSpecialGameMode();" class="Admin-List-Checkbox"></li></ul><button class="Admin-CloseBtn" onclick="DeleteAdminPanel();ChangeToSettings();Load_Options();Load_GameModes();" type="button"><h1>Schließen</h1></button></div></div>';

      setTimeout(function(){ChangeMainTo('Admin');}, delay + 1000);
    }
    else{

    }
  }
  else{

  }
}

function ToggleSpecialGameMode(){
  if (SpecialGameMode == true){
    SpecialGameMode = false;
  }
  else if (SpecialGameMode == false){
    SpecialGameMode = true;
  }
}

function DeleteAdminPanel(){
  let AdminPanel = document.getElementById('Admin-Main');

  setTimeout(function(){AdminPanel.remove();}, delay + 2000);
}
