const editProfileBtn = document.getElementById('editprofile');
const editWorkoutBtn = document.getElementById('editwrkout');
const expandWorkoutBtn = document.getElementById('expandwrkt');
const editNutritionBtn = document.getElementById('editntrtion');
const expandNutritionBtn = document.getElementById('expandntrtn');
const logFoodBtn = document.getElementById('logfood');
const stepsInput = document.getElementById('steps');
const historyBtn = document.getElementById('history');
const weight = document.getElementById('Weight');
const height = document.getElementById('Height');
const age = document.getElementById('Age');
const workout = document.getElementById('workouttoday');
const split = document.getElementById('split');
const sun = document.getElementById('sun');
const mon = document.getElementById('mon');
const tue = document.getElementById('tue');
const wed = document.getElementById('wed');
const thurs = document.getElementById('thurs');
const fri = document.getElementById('fri');
const sat = document.getElementById('sat');
const cal = document.getElementById('cal');
const protein = document.getElementById('protein');
const fat = document.getElementById('fat');
const carbs = document.getElementById('carbs');
const fiber = document.getElementById('fiber');
const burned = document.getElementById('burned');
const profileModal = document.getElementById('profileModal');
const closeProfileBtn = document.getElementById('closeProfileBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const newWeightInput = document.getElementById('newWeight');
const newHeightInput = document.getElementById('newHeight');
const newAgeInput = document.getElementById('newAge');
const calnow = 0;
const genderMale = document.getElementById('genderMale');
const genderFemale = document.getElementById('genderFemale');
const gender = document.getElementById('Gender');
const sedentary = document.getElementById('activitySedentary');
const lightly = document.getElementById('activityLight');
const moderately = document.getElementById('activityModerate');
const very = document.getElementById('activityVery');
const extra = document.getElementById('activityExtra');
const proteinnow = 0;
const fatnow = 0;
const carbsnow = 0;
const fibernow = 0;
const workoutModal = document.getElementById("workoutModal");
const closeWorkoutBtn = document.getElementById("closeWorkoutBtn");
const saveWorkoutBtn = document.getElementById("saveWorkoutBtn");







editProfileBtn.addEventListener('click', editProfile);
editWorkoutBtn.addEventListener('click', editWorkout);
//expandWorkoutBtn.addEventListener('click', handleInteraction);
//editNutritionBtn.addEventListener('click', handleInteraction);
//expandNutritionBtn.addEventListener('click', handleInteraction);
//logFoodBtn.addEventListener('click', handleInteraction);
//stepsInput.addEventListener('input', handleInteraction);
//historyBtn.addEventListener('click', handleInteraction);
closeProfileBtn.addEventListener('click', closeProfile);
saveProfileBtn.addEventListener('click', saveProfile);
closeWorkoutBtn.addEventListener('click', closeWorkout);
saveWorkoutBtn.addEventListener('click', saveWorkout);

function editProfile(){
    profileModal.style.display = "block";
}

function closeProfile() {
    profileModal.style.display = "none";
    console.log("Close button clicked");
}

function saveProfile() {
    const newWeight = newWeightInput.value;
    const newHeight = newHeightInput.value;
    const newAge = newAgeInput.value;
    const WeightData = Number(newWeight);
    const HeightData = Number(newHeight);
    const AgeData = Number(newAge);  

    if (!isNaN(WeightData) && WeightData > 0) {
        weight.textContent = WeightData + ' KG';
    } else if (newWeight.trim() !== "") {
        alert("Please enter a valid weight");
        
    }

    if (!isNaN(HeightData) && HeightData > 0) {
        height.textContent = HeightData + ' cm';  
    } else if (newHeight.trim() !== "") {
        alert("Please enter a valid height");
        
    }

    if (!isNaN(AgeData) && AgeData > 0) {
        age.textContent = AgeData + ' years';  
    } else if (newAge.trim() !== "") {
        alert("Please enter a valid age");
    }

    let genderVal = 0
    

    if (genderMale.checked) {
        genderVal = 5;
        gender.textContent = 'Male'
    } else if (genderFemale.checked) {
        genderVal = -161; 
        gender.textContent = 'Female'
    } else {
        alert("Please select your gender.");
        return;
    }

    let af = 0;
    let proteinm = 0;
    if (sedentary.checked){
        af = 1.2;
        proteinm = 1.3;
    }

    else if (lightly.checked){
        af = 1.375;
        proteinm = 1.7;
    }

    else if (moderately.checked){
        af = 1.55;
        proteinm = 2;
    }

    else if (very.checked){
        af = 1.725;
        proteinm = 2.2;
    }

    else if (extra.checked){
        af = 1.9;
        proteinm = 2.5;
    }
    const weight10 = WeightData * 10;
    const height625 = HeightData * 6.25;
    const age5 = AgeData * 5;
    const bmr1 =  weight10 + height625;
    const bmr2 = bmr1 - age5;
    const bmr3 = bmr2 + genderVal;
    const maintenanceCal = bmr3 * af;
    const roundedCal = Math.round(maintenanceCal / 10) * 10;
    cal.textContent = calnow + '/' + roundedCal;

    let maintenanceprotein = WeightData * proteinm;
    maintenanceprotein = Math.floor(maintenanceprotein);
    protein.textContent = proteinnow + 'g/' + maintenanceprotein + ' g';

    const tdee = maintenanceCal * 0.25;
    let maintenanceFat = tdee / 9;
    maintenanceFat = Math.floor(maintenanceFat);
    fat.textContent = fatnow + "g/" + maintenanceFat + 'g';


    const carbscal = maintenanceCal * 0.50;
    let maintenancecarbs = carbscal/4;
    maintenancecarbs = Math.floor(maintenancecarbs);
    carbs.textContent = carbsnow + "g/" + maintenancecarbs + 'g'

    const fibercal = maintenanceCal * 14;
    let maintenanceFiber = fibercal/1000;
    maintenanceFiber = Math.floor(maintenanceFiber);
    fiber.textContent = fibernow + 'g/' +maintenanceFiber + 'g'
 }



    
    


function editWorkout(){
    workoutModal.style.display = "block";

}

function closeWorkout(){
    workoutModal.style.display = "none";
}

function workoutSplit(){
    if (pplradio.checked){
    ppl.style.display = "block";
    }

    else if (arnoldradio.checked){

    }
}

function saveWorkout(){

}