const rps_game = document.querySelector('.btn-r');
const wfw_game = document.querySelector('.btn-w');
const title_ = document.querySelector('.title-');

const userDiv = document.querySelector('.user');
const buttons = document.querySelector('.buttons');
const whoIsWin = document.querySelector('.whoiswin')


rps_game.addEventListener('click', () => {
  // adding choices buttons

  const title = document.createElement('h1');
  const text = document.createTextNode('Rock Paper & Scissors');
  title.appendChild(text);
  title_.appendChild(title);
  const btn1 = document.createElement('button');
  const rock = document.createTextNode('rock');
  btn1.classList.add('btn')
  btn1.appendChild(rock);
  buttons.appendChild(btn1);

  const btn2 = document.createElement('button');
  btn2.classList.add('btn')
  const Paper = document.createTextNode('Paper');
  btn2.appendChild(Paper);
  buttons.appendChild(btn2);

  const btn3 = document.createElement('button');
  btn3.classList.add('btn')
  const Scissors = document.createTextNode('scissors');
  btn3.appendChild(Scissors);
  buttons.appendChild(btn3);
   

  // adding play button
  
  const playBtn = document.createElement('button');
  playBtn.classList.add('playbtn')
  const playTxt = document.createTextNode('play');
  playBtn.appendChild(playTxt);
  const playDiv = document.querySelector('.play');
  playDiv.appendChild(playBtn);
  // change user images

  const allBtnsArr = Array.from(document.querySelectorAll('.btn'));
  let newImg;
  allBtnsArr.map((e) => {
  e.addEventListener('click', (ev) => {
    newImg = ev.target.textContent;
    document.querySelector('.user-img').src = './images/user-' + newImg + '.png';
    
  })
  })
  


// play functionality
playBtn.addEventListener('click', () => {
  const ChoicesArr = ['rock', 'Paper', 'scissors'];
  let randomnum =Math.floor((Math.random() * 3) ) ;
  document.querySelector('.computer-img').src = './images/computer-' + ChoicesArr[randomnum] + '.png';


  // checking for tie 
  
  if (newImg === ChoicesArr[randomnum]) {
    whoIsWin.textContent = 'it is a tie';
    return;
  }
   
  // checking for rock
  if (newImg === 'rock') {
    if (ChoicesArr[randomnum] === 'scissors') {
      whoIsWin.textContent = 'player wins..';
      return;
    } else {
      whoIsWin.textContent = 'computer wins..';
      return;
    }
  }

   // checking for paper
   if (newImg === 'Paper') {
    if (ChoicesArr[randomnum] === 'scissors') {
      whoIsWin.textContent = 'computer wins..';
      return;
    } else {
      whoIsWin.textContent = 'player wins..';
      return;
    }
  }

  // checking for scissors
  if (newImg === 'scissors') {
    if (ChoicesArr[randomnum] === 'rock') {
      whoIsWin.textContent = 'computer wins..';
      return;
    } else {
      whoIsWin.textContent = 'player wins..';
      return;
    }
  }
})

})


wfw_game.addEventListener('click', () => {
  const title = document.createElement('h1');
  const text = document.createTextNode('water fire & wood');
  title.appendChild(text);
  title_.appendChild(title);

  const btn1 = document.createElement('button');
  const water = document.createTextNode('water');
  btn1.classList.add('btn')
  btn1.appendChild(water);
  buttons.appendChild(btn1);

  const btn2 = document.createElement('button');
  btn2.classList.add('btn')
  const fire = document.createTextNode('fire');
  btn2.appendChild(fire);
  buttons.appendChild(btn2);

  const btn3 = document.createElement('button');
  btn3.classList.add('btn')
  const wood = document.createTextNode('wood');
  btn3.appendChild(wood);
  buttons.appendChild(btn3);

  // adding play button
  const playBtn = document.createElement('button');
  playBtn.classList.add('playbtn')
  const playTxt = document.createTextNode('play');
  playBtn.appendChild(playTxt);
  const playDiv = document.querySelector('.play');
  playDiv.appendChild(playBtn);
  // change user images

    const allBtnsArr = Array.from(document.querySelectorAll('.btn'));
    let newImg;
    allBtnsArr.map((e) => {
    e.addEventListener('click', (ev) => {
      newImg = ev.target.textContent;
      
      document.querySelector('.user-img').src = './images/user-' + newImg + '.gif';
      
    })
    })
    // play functionality
      playBtn.addEventListener('click', () => {
      const ChoicesArr = ['water', 'fire', 'wood'];
      let randomnum =Math.floor((Math.random() * 3) ) ;
      document.querySelector('.computer-img').src = './images/computer-' + ChoicesArr[randomnum] + '.gif';


  // checking for tie 
  
  if (newImg === ChoicesArr[randomnum]) {
    whoIsWin.textContent = 'it is a tie';
    return;
  }
   
  // checking for rock
  if (newImg === 'water') {
    if (ChoicesArr[randomnum] === 'fire') {
      whoIsWin.textContent = 'player wins..';
      return;
    } else {
      whoIsWin.textContent = 'computer wins..';
      return;
    }
  }

   // checking for paper
   if (newImg === 'fire') {
    if (ChoicesArr[randomnum] === 'wood') {
      whoIsWin.textContent = 'player wins..';
      return;
    } else {
      whoIsWin.textContent = 'computer wins..';
      return;
    }
  }

  // checking for scissors
  if (newImg === 'wood') {
    if (ChoicesArr[randomnum] === 'fire') {
      whoIsWin.textContent = 'computer wins..';
      return;
    } else {
      whoIsWin.textContent = 'player wins..';
      return;
    }
  }
})
    
  
})



