const startButton = document.getElementById("start-routine");
const routineContainer = document.getElementById("routine");
const nextDayButton = document.getElementById("next-day");

let currentDay = 1;

startButton.addEventListener("click", () => {
	routineContainer.style.display = "block";
});

nextDayButton.addEventListener("click", () => {
	currentDay++;
	if (currentDay > 2) {
		currentDay = 1;
	}
	updateRoutine();
});

function updateRoutine() {
	const routine = document.querySelectorAll("#routine h2, #routine p");
	routine.forEach(element => {
		element.style.display = "none";
	});
	const day = document.querySelector(`#routine h2:nth-child(${currentDay})`);
	day.style.display = "block";
	const exercises = document.querySelectorAll(`#routine h2:nth-child(${currentDay}) ~ p`);
	exercises.forEach(element => {
		element.style.display = "block";
	});
}

updateRoutine();