function Timer(objOfArgs){
  var contForDiv;
  var contForSpan;
  var divForClear;
  var hour = objOfArgs.hour;
  var min = objOfArgs.min;
  var sec = objOfArgs.sec;
  var ttt;

  renderTimer();
  renderButtons();


  function renderTimer(){
    contForDiv = document.createElement('div');
    document.body.appendChild(contForDiv);
    contForSpan = document.createElement('span');
    contForDiv.appendChild(contForSpan);
    contForSpan.textContent = hour+":"+min+":"+sec;
  }

  function renderButtons(){
    var btnStart = document.createElement('button');
    btnStart.textContent = "start";
    contForDiv.appendChild(btnStart);
    btnStart.addEventListener('click', function(){
      startTimer();
    })
  };

  function countTimer(){
    if ( sec >= 9 && sec < 59) {
      sec++;
    } else if(sec >= 0 && sec < 9){
      sec++;
      sec = "0" + sec;
    }
    else {
      sec = "0" + 0;
      if(min>=0 && min<9){
      min = "0" + min;
      min++;
    }else{
      min++;
    }

    }

    contForSpan.textContent = hour+":"+min+":"+sec;
  }

  function startTimer(){
    if(contForDiv.contains(document.querySelector('#clr')))
      contForDiv.removeChild(document.querySelector('#clr'));

    stopTimer();
    contForDiv.removeChild(contForDiv.childNodes[1]);
    ttt= setInterval(function(){
      countTimer();
    }, 500)
  };

  function stopTimer(){
  var btnStop = document.createElement('button');
  btnStop.classList.add('stp');
  btnStop.textContent = "stop";
  contForDiv.appendChild(btnStop);
  btnStop.addEventListener('click', function(){
    clearInterval(ttt);
    contForDiv.removeChild(contForDiv.childNodes[1]);

    renderButtons();
    // goOnTimer();
    resetTimer();
  });
  };

  function goOnTimer(){
    startTimer();
  };

  function resetTimer(){
    // divForClear = document.createElement('div');
    // document.body.appendChild(divForClear);
    var btnClear = document.createElement('button');
    btnClear.textContent = "clear";
    btnClear.classList.add('stp');
    btnClear.setAttribute('id', 'clr');
    contForDiv.appendChild(btnClear);
    btnClear.addEventListener('click', function(){
      hour= 0;
      min = 0;
      sec = 0;
      contForSpan.textContent = "0"+ hour+":"+"0"+min+":"+"0"+sec;
      contForDiv.removeChild(btnClear);
    })
  };



}
