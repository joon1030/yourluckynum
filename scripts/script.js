
const Scene = require('Scene');
const Time = require('Time');

const TouchGestures = require('TouchGestures');

(async function() {

const [plane, material, text] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('3dText0')
  ]);
  

function getRandomNum() { 
  return Math.floor(Math.random() * 9) // 0 ~ 9
}


TouchGestures.onTap(plane).subscribe(function () {
	const countdownTimer = Time.setInterval(function () {
  	text.text = "your lucky\nnumber is...." + getRandomNum();   
  }, 100);

	
  Time.setTimeout(function () {
  	        Time.clearInterval(countdownTimer);
  	}, 5000);
  })
})();

