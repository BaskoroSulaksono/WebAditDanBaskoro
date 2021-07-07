
const finishAudio = document.getElementById("finishAudio");
const countdownEle = document.getElementById('countdown');
let status;
let pomoTime;

let PomoMin = 25*60;
	
function PomoTime(){
	const targetMin = Math.floor(PomoMin/60);
	let targetSecond = PomoMin % 60;
	// if seconds is zero
    targetSecond = targetSecond < 10 ? '0'+ targetSecond : targetSecond;
	
	//console.log(distance);
	countdownEle.innerHTML = `${targetMin}:${targetSecond}`;
	document.title = `${targetMin}:${targetSecond} - ${status}`;
		PomoMin--;  
		if(PomoMin <= 0) 
		{	
			document.title = "0:00";
			countdownEle.innerHTML = "0:00";
			finishAudio.play();
			paused = false;
			started = false;
			clearInterval(pomoTime);
		}
}

// button function
const buttons = document.querySelectorAll(".button");
function StartTimerAutomatic(){
	//coming soon
}

function checkStarted(){
	if(started){
		alert('Harap pause dulu');
		return false;
	}
	else{
		return true;
	}
}

let started = false;
let paused = false;
for(let button of buttons){
	button.addEventListener('click',function(event){
		const target = event.target;
		
		
		if(target.classList.contains('pomo')){
			
			if(checkStarted()){
			PomoMin = 25*60;
			countdownEle.innerHTML = "25:00";
			status="Time To work";
			}
			
		}
		if(target.classList.contains('short')){
			if(checkStarted()){
				PomoMin = 5*60;
				countdownEle.innerHTML = "5:00";
				status="Lets take a break";
			}
		}
		if(target.classList.contains('long')){
			if(checkStarted()){
			PomoMin = 30*60;
			countdownEle.innerHTML = "30:00";
			status="Get Some Rest";
			}
		}

		
		if(target.classList.contains('start')){
			console.log('Start Button!');
			
			paused = false;
			if(started && !paused){
				alert('Waktu telah berjalan');
			}else{
				pomoTime = setInterval(PomoTime,1000);
				started = true;
			}

		}

		if(target.classList.contains('pause')){
			console.log('Pause Button!');
			paused = true;
			started = false;
			let timeLeft = PomoMin;
			PomoMin = timeLeft;
			clearInterval(pomoTime);
		}

	});
}
