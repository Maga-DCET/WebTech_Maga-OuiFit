const editNutritionBtn = document.getElementById('editntrtion');
const nutritionModal = document.getElementById('nutritionModal');
const closeNutritionBtn = document.getElementById('closeNutritionBtn');
const saveNutritionBtn = document.getElementById('saveNutritionBtn');
const editCaloriesInput = document.getElementById('editCalories');
const editProteinInput = document.getElementById('editProtein');
const editFatInput = document.getElementById('editFat');
const editCarbsInput = document.getElementById('editCarbs');
const editFiberInput = document.getElementById('editFiber');
const editProfileBtn = document.getElementById('editprofile');
const weight = document.getElementById('Weight');
const height = document.getElementById('Height');
const age = document.getElementById('Age');
const gender = document.getElementById('Gender');
const editWorkoutBtn = document.getElementById('editwrkout');
const expandWorkoutBtn = document.getElementById('expandwrkt');
const workout = document.getElementById('workouttoday');
const split = document.getElementById('split');
const exercisesList = document.getElementById('exercisesList');
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
const stepsInput = document.getElementById('steps');
const burned = document.getElementById('burned');
const profileModal = document.getElementById('profileModal');
const closeProfileBtn = document.getElementById('closeProfileBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const newWeightInput = document.getElementById('newWeight');
const newHeightInput = document.getElementById('newHeight');
const newAgeInput = document.getElementById('newAge');
const genderMale = document.getElementById('genderMale');
const genderFemale = document.getElementById('genderFemale');
const sedentary = document.getElementById('activitySedentary');
const lightly = document.getElementById('activityLight');
const moderately = document.getElementById('activityModerate');
const very = document.getElementById('activityVery');
const extra = document.getElementById('activityExtra');
const workoutModal = document.getElementById("workoutModal");
const closeWorkoutBtn = document.getElementById("closeWorkoutBtn");
const saveWorkoutBtn = document.getElementById("saveWorkoutBtn");
const pplRadio = document.getElementById('PPLRadio');
const arnoldRadio = document.getElementById('ArnoldRadio');
const ulRadio = document.getElementById('U/LRadio');
const customRadio = document.getElementById('CustomRadio');
const customSplitName = document.getElementById('CustomSplitName');
const workoutDetails = document.getElementById('workoutDetails');
const closeExpandWorkoutBtn = document.getElementById('closeExpandWorkoutBtn');
const logFoodBtn = document.getElementById('logfood');
const logFoodModal = document.getElementById('logFoodModal');
const closeLogFoodBtn = document.getElementById('closeLogFoodBtn');
const foodSelect = document.getElementById('foodSelect');
const foodAmount = document.getElementById('foodAmount');
const logFoodSubmitBtn = document.getElementById('logFoodSubmitBtn');
const previewCalories = document.getElementById('previewCalories');
const previewProtein = document.getElementById('previewProtein');
const previewFat = document.getElementById('previewFat');
const previewCarbs = document.getElementById('previewCarbs');
const previewFiber = document.getElementById('previewFiber');
const customFoodNameInput = document.getElementById('customFoodName');
const customCaloriesInput = document.getElementById('customCalories');
const customProteinInput = document.getElementById('customProtein');
const customFatInput = document.getElementById('customFat');
const customCarbsInput = document.getElementById('customCarbs');
const customFiberInput = document.getElementById('customFiber');
const customMacrosDiv = document.getElementById('customMacrosInput');
const expandNutritionBtn = document.getElementById('expandntrtn');
const expandNutritionModal = document.getElementById('expandNutritionModal');
const closeNutritionExpandBtn = document.getElementById('closeNutritionExpandBtn');

let calnow = 0;
let proteinnow = 0;
let fatnow = 0;
let carbsnow = 0;
let fibernow = 0;
let currentTrackingDate = new Date().toDateString();
let foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];

const daySelects = {
    'sun': {
        'ppl': document.getElementById('SunPPLSelect'),
        'arnold': document.getElementById('SunArnoldSelect'),
        'ul': document.getElementById('SunULSelect'),
        'custom': document.getElementById('SunCustomWorkout')
    },
    'mon': {
        'ppl': document.getElementById('MonPPLSelect'),
        'arnold': document.getElementById('MonArnoldSelect'),
        'ul': document.getElementById('MonULSelect'),
        'custom': document.getElementById('MonCustomWorkout')
    },
    'tue': {
        'ppl': document.getElementById('TuePPLSelect'),
        'arnold': document.getElementById('TueArnoldSelect'),
        'ul': document.getElementById('TueULSelect'),
        'custom': document.getElementById('TueCustomWorkout')
    },
    'wed': {
        'ppl': document.getElementById('WedPPLSelect'),
        'arnold': document.getElementById('WedArnoldSelect'),
        'ul': document.getElementById('WedULSelect'),
        'custom': document.getElementById('WedCustomWorkout')
    },
    'thurs': {
        'ppl': document.getElementById('ThursPPLSelect'),
        'arnold': document.getElementById('ThursArnoldSelect'),
        'ul': document.getElementById('ThursULSelect'),
        'custom': document.getElementById('ThursCustomWorkout')
    },
    'fri': {
        'ppl': document.getElementById('FriPPLSelect'),
        'arnold': document.getElementById('FriArnoldSelect'),
        'ul': document.getElementById('FriULSelect'),
        'custom': document.getElementById('FriCustomWorkout')
    },
    'sat': {
        'ppl': document.getElementById('SatPPLSelect'),
        'arnold': document.getElementById('SatArnoldSelect'),
        'ul': document.getElementById('SatULSelect'),
        'custom': document.getElementById('SatCustomWorkout')
    }
};

const exerciseGroups = {
    'sun': document.getElementById('sunexercise-group'),
    'mon': document.getElementById('monexercise-group'),
    'tue': document.getElementById('tueexercise-group'),
    'wed': document.getElementById('wedexercise-group'),
    'thurs': document.getElementById('thursexercise-group'),
    'fri': document.getElementById('friexercise-group'),
    'sat': document.getElementById('satexercise-group')
};

const foodDatabase = {
  chicken: { calories: 165, protein: 31, fat: 3.6, carbs: 0, fiber: 0 },
  rice: { calories: 130, protein: 2.7, fat: 0.3, carbs: 28, fiber: 0.4 },
  egg: { calories: 143, protein: 13, fat: 10, carbs: 1.1, fiber: 0 },
  bread: { calories: 265, protein: 9, fat: 3.2, carbs: 49, fiber: 3.5 },
  milk: { calories: 60, protein: 3.2, fat: 3.3, carbs: 4.7, fiber: 0 },
  beef: { calories: 250, protein: 26, fat: 15, carbs: 0, fiber: 0 },
  pork: { calories: 242, protein: 25, fat: 14, carbs: 0, fiber: 0 },
  oats: { calories: 389, protein: 16.9, fat: 6.9, carbs: 66, fiber: 10.6 }
};

editProfileBtn.addEventListener('click', editProfile);
editWorkoutBtn.addEventListener('click', editWorkout);
closeProfileBtn.addEventListener('click', closeProfile);
saveProfileBtn.addEventListener('click', saveProfile);
closeWorkoutBtn.addEventListener('click', closeWorkout);
saveWorkoutBtn.addEventListener('click', saveWorkout);
expandWorkoutBtn.addEventListener('click', toggleWorkoutDetails);
editNutritionBtn.addEventListener('click', editNutrition);
closeNutritionBtn.addEventListener('click', closeNutrition);
saveNutritionBtn.addEventListener('click', saveNutrition);
foodSelect.addEventListener('change', updateMacrosPreview);
foodAmount.addEventListener('input', updateMacrosPreview);
customCaloriesInput.addEventListener('input', updateMacrosPreview);
customProteinInput.addEventListener('input', updateMacrosPreview);
customFatInput.addEventListener('input', updateMacrosPreview);
customCarbsInput.addEventListener('input', updateMacrosPreview);
customFiberInput.addEventListener('input', updateMacrosPreview);
expandNutritionBtn.addEventListener('click', showExpandedNutrition);
closeNutritionExpandBtn.addEventListener('click', closeExpandedNutrition);

pplRadio.addEventListener('change', function() {
    workoutSplit();
    Object.keys(daySelects).forEach(day => handleDaySelectChange(day));
});
arnoldRadio.addEventListener('change', function() {
    workoutSplit();
    Object.keys(daySelects).forEach(day => handleDaySelectChange(day));
});
ulRadio.addEventListener('change', function() {
    workoutSplit();
    Object.keys(daySelects).forEach(day => handleDaySelectChange(day));
});
customRadio.addEventListener('change', function() {
    workoutSplit();
    Object.keys(daySelects).forEach(day => handleDaySelectChange(day));
});
stepsInput.addEventListener('input', updateCaloriesBurned);
expandWorkoutBtn.addEventListener('click', showExpandedWorkout);
closeExpandWorkoutBtn.addEventListener('click', closeExpandWorkout);
Object.keys(daySelects).forEach(day => {
    daySelects[day].ppl.addEventListener('change', () => toggleExerciseGroup(day));
    daySelects[day].arnold.addEventListener('change', () => toggleExerciseGroup(day));
    daySelects[day].ul.addEventListener('change', () => toggleExerciseGroup(day));
    daySelects[day].custom.addEventListener('input', () => toggleExerciseGroup(day));
});

Object.keys(daySelects).forEach(day => {
    daySelects[day].ppl.addEventListener('change', () => handleDaySelectChange(day));
    daySelects[day].arnold.addEventListener('change', () => handleDaySelectChange(day));
    daySelects[day].ul.addEventListener('change', () => handleDaySelectChange(day));
    daySelects[day].custom.addEventListener('input', () => handleDaySelectChange(day));
});

document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    loadWorkoutData();
    setTodaysWorkout();
});

logFoodBtn.addEventListener('click', () => {
  logFoodModal.style.display = "block";
});

closeLogFoodBtn.addEventListener('click', () => {
  logFoodModal.style.display = "none";
});

logFoodSubmitBtn.addEventListener('click', () => {
  const selectedFood = foodSelect.value;
  const amount = parseFloat(foodAmount.value);

  if (!selectedFood) {
    alert("Please select a food!");
    return;
  }

  if (isNaN(amount) || amount < 1 || amount > 1000) {
    alert("Please enter a valid amount between 1-1000 grams!");
    foodAmount.focus();
    return;
  }

  if (selectedFood === 'custom') {
    const foodName = customFoodNameInput.value.trim();
    const customCals = parseFloat(customCaloriesInput.value);
    const customProtein = parseFloat(customProteinInput.value);

    if (!foodName) {
      alert("Please enter a name for your custom food!");
      customFoodNameInput.focus();
      return;
    }

    if (isNaN(customCals) || customCals < 0) {
      alert("Please enter valid calories (≥ 0)!");
      customCaloriesInput.focus();
      return;
    }

    if (isNaN(customProtein) || customProtein < 0) {
      alert("Please enter valid protein (≥ 0)!");
      customProteinInput.focus();
      return;
    }

    const customFat = parseFloat(customFatInput.value) || 0;
    const customCarbs = parseFloat(customCarbsInput.value) || 0;
    const customFiber = parseFloat(customFiberInput.value) || 0;

    if (customFat < 0 || customCarbs < 0 || customFiber < 0) {
      alert("Macro values cannot be negative!");
      return;
    }
  }

  addFoodToLog(selectedFood, amount);
});

document.addEventListener('DOMContentLoaded', function() {
  loadProfileData();
  loadWorkoutData();
  setTodaysWorkout();
  loadNutritionData();
});

function addFoodToLog(selectedFood, amount) {
  let food;
  
  if (selectedFood === 'custom') {
    food = {
      name: customFoodNameInput.value.trim(),
      calories: parseFloat(customCaloriesInput.value),
      protein: parseFloat(customProteinInput.value),
      fat: parseFloat(customFatInput.value) || 0,
      carbs: parseFloat(customCarbsInput.value) || 0,
      fiber: parseFloat(customFiberInput.value) || 0
    };
  } else {
    food = {
      name: foodSelect.options[foodSelect.selectedIndex].text.replace(/\(.*\)/, '').trim(),
      ...foodDatabase[selectedFood]
    };
  }

  const multiplier = amount / 100;

  calnow += Math.round(food.calories * multiplier);
  proteinnow += food.protein * multiplier;
  fatnow += food.fat * multiplier;
  carbsnow += food.carbs * multiplier;
  fibernow += food.fiber * multiplier;

  updateNutritionDisplay();
  resetFoodForm();
}

function resetFoodForm() {
  foodSelect.value = "";
  foodAmount.value = "";
  customFoodNameInput.value = "";
  customCaloriesInput.value = "";
  customProteinInput.value = "";
  customFatInput.value = "";
  customCarbsInput.value = "";
  customFiberInput.value = "";
  customMacrosDiv.style.display = 'none';
  logFoodModal.style.display = "none";
}

foodSelect.addEventListener('change', function() {
  if (this.value === 'custom') {
    customMacrosDiv.style.display = 'block';
    customFoodNameInput.value = '';
    customCaloriesInput.value = '';
    customProteinInput.value = '';
    customFatInput.value = '';
    customCarbsInput.value = '';
    customFiberInput.value = '';
  } else {
    customMacrosDiv.style.display = 'none';
  }
  updateMacrosPreview();
});

function editProfile() {
    const savedProfile = JSON.parse(localStorage.getItem('profile')) || {};
    if (savedProfile.weight) newWeightInput.value = savedProfile.weight;
    if (savedProfile.height) newHeightInput.value = savedProfile.height;
    if (savedProfile.age) newAgeInput.value = savedProfile.age;
    if (savedProfile.gender === 'Male') genderMale.checked = true;
    if (savedProfile.gender === 'Female') genderFemale.checked = true;
    if (savedProfile.activityLevel) {
        const activityRadio = document.querySelector(`input[name="activityLevel"][value="${savedProfile.activityLevel}"]`);
        if (activityRadio) activityRadio.checked = true;
    }
    profileModal.style.display = "block";
}

function closeProfile() {
    profileModal.style.display = "none";
}

function saveProfile() {
    const newWeight = newWeightInput.value;
    const newHeight = newHeightInput.value;
    const newAge = newAgeInput.value;
    const WeightData = Number(newWeight);
    const HeightData = Number(newHeight);
    const AgeData = Number(newAge);  

    if (newWeight.trim() === "" || isNaN(WeightData)) {
        alert("Please enter a valid weight between 2.5-300 kg");
        return;
    }
    
    if (WeightData < 2.5 || WeightData > 300) {
        alert("Weight must be between 2.5-300 kg");
        return;
    }

    if (newHeight.trim() === "" || isNaN(HeightData)) {
        alert("Please enter a valid height between 50-250 cm");
        return;
    }
    
    if (HeightData < 50 || HeightData > 250) {
        alert("Height must be between 50-250 cm");
        return;
    }

    if (newAge.trim() === "" || isNaN(AgeData)) {
        alert("Please enter a valid age between 0-120 years");
        return;
    }
    
    if (AgeData < 0 || AgeData > 120) {
        alert("Age must be between 0-120 years");
        return;
    }

    let genderVal = 0;
    let genderText = '';
    
    if (genderMale.checked) {
        genderVal = 5;
        genderText = 'Male';
    } else if (genderFemale.checked) {
        genderVal = -161; 
        genderText = 'Female';
    } else {
        alert("Please select your gender.");
        return;
    }

    let af = 0;
    let proteinm = 0;
    let activityLevel = '';
    
    if (sedentary.checked){
        af = 1.2;
        proteinm = 1.3;
        activityLevel = '1.2';
    } else if (lightly.checked){
        af = 1.375;
        proteinm = 1.7;
        activityLevel = '1.375';
    } else if (moderately.checked){
        af = 1.55;
        proteinm = 2;
        activityLevel = '1.55';
    } else if (very.checked){
        af = 1.725;
        proteinm = 2.2;
        activityLevel = '1.725';
    } else if (extra.checked){
        af = 1.9;
        proteinm = 2.5;
        activityLevel = '1.9';
    } else {
        alert("Please select your activity level.");
        return;
    }

    const weight10 = WeightData * 10;
    const height625 = HeightData * 6.25;
    const age5 = AgeData * 5;
    const bmr1 = weight10 + height625;
    const bmr2 = bmr1 - age5;
    const bmr3 = bmr2 + genderVal;
    const maintenanceCal = bmr3 * af;
    const roundedCal = Math.round(maintenanceCal / 10) * 10;
    
    let maintenanceprotein = WeightData * proteinm;
    maintenanceprotein = Math.floor(maintenanceprotein);
    
    const tdee = maintenanceCal * 0.25;
    let maintenanceFat = tdee / 9;
    maintenanceFat = Math.floor(maintenanceFat);
    
    const carbscal = maintenanceCal * 0.50;
    let maintenancecarbs = carbscal/4;
    maintenancecarbs = Math.floor(maintenancecarbs);
    
    const fibercal = maintenanceCal * 14;
    let maintenanceFiber = fibercal/1000;
    maintenanceFiber = Math.floor(maintenanceFiber);

    weight.textContent = WeightData + ' KG';
    height.textContent = HeightData + ' cm';  
    age.textContent = AgeData + ' years';
    gender.textContent = genderText;
    cal.textContent = calnow + '/' + roundedCal;
    protein.textContent = proteinnow + 'g/' + maintenanceprotein + ' g';
    fat.textContent = fatnow + "g/" + maintenanceFat + 'g';
    carbs.textContent = carbsnow + "g/" + maintenancecarbs + 'g';
    fiber.textContent = fibernow + 'g/' + maintenanceFiber + 'g';

    const profileData = {
        weight: WeightData,
        height: HeightData,
        age: AgeData,
        gender: genderText,
        activityLevel: activityLevel,
        calories: roundedCal,
        protein: maintenanceprotein,
        fat: maintenanceFat,
        carbs: maintenancecarbs,
        fiber: maintenanceFiber,
        manualMacros: false
    }; 

    
    localStorage.setItem('profile', JSON.stringify(profileData));
    closeProfile();
}

function loadProfileData() {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
        if (savedProfile.weight) weight.textContent = savedProfile.weight + ' KG';
        if (savedProfile.height) height.textContent = savedProfile.height + ' cm';
        if (savedProfile.age) age.textContent = savedProfile.age + ' years';
        if (savedProfile.gender) gender.textContent = savedProfile.gender;
        
        if (savedProfile.calories) cal.textContent = calnow + '/' + savedProfile.calories;
        if (savedProfile.protein) protein.textContent = proteinnow + 'g/' + savedProfile.protein + ' g';
        if (savedProfile.fat) fat.textContent = fatnow + 'g/' + savedProfile.fat + ' g';
        if (savedProfile.carbs) carbs.textContent = carbsnow + 'g/' + savedProfile.carbs + ' g';
        if (savedProfile.fiber) fiber.textContent = fibernow + 'g/' + savedProfile.fiber + ' g';
    }
}

function editWorkout() {
    workoutModal.style.display = "block";
    
    Object.keys(daySelects).forEach(day => {
        exerciseGroups[day].style.display = "none";
    });
    
    const savedWorkout = JSON.parse(localStorage.getItem('workout')) || {};
    
    if (savedWorkout.splitType) {
        document.getElementById(`${savedWorkout.splitType}Radio`).checked = true;
        workoutSplit();
        
        if (savedWorkout.splitType === 'Custom') {
            customSplitName.value = savedWorkout.splitName || '';
        }
        
        Object.keys(daySelects).forEach(day => {
            if (savedWorkout[day]) {
                const dayData = savedWorkout[day];
                if (dayData.type === 'ppl') {
                    daySelects[day].ppl.value = dayData.workout;
                } else if (dayData.type === 'arnold') {
                    daySelects[day].arnold.value = dayData.workout;
                } else if (dayData.type === 'ul') {
                    daySelects[day].ul.value = dayData.workout;
                } else if (dayData.type === 'custom') {
                    daySelects[day].custom.value = dayData.workout;
                }
                
                handleDaySelectChange(day);
                
                if (dayData.exercises && dayData.exercises.length > 0) {
                    const checkboxes = exerciseGroups[day].querySelectorAll('input[type="checkbox"]');
                    checkboxes.forEach(checkbox => {
                        checkbox.checked = dayData.exercises.includes(checkbox.value);
                    });
                }
            }
        });
    } else {
        workoutSplit();
    }
}

function closeWorkout() {
    workoutModal.style.display = "none";
}

function saveWorkout() {
    let splitType = '';
    if (pplRadio.checked) splitType = 'PPL';
    else if (arnoldRadio.checked) splitType = 'Arnold';
    else if (ulRadio.checked) splitType = 'Upper/Lower';
    else if (customRadio.checked) splitType = 'Custom';
    
    const workoutData = {
        splitType: splitType,
        splitName: customRadio.checked ? customSplitName.value : splitType
    };
    
    Object.keys(daySelects).forEach(day => {
        let dayWorkout = {};
        let workoutValue = '';
        let workoutType = '';
        
        if (pplRadio.checked) {
            workoutValue = daySelects[day].ppl.value;
            workoutType = 'ppl';
        } 
        else if (arnoldRadio.checked) {
            workoutValue = daySelects[day].arnold.value;
            workoutType = 'arnold';
        } 
        else if (ulRadio.checked) {
            workoutValue = daySelects[day].ul.value;
            workoutType = 'ul';
        }
        else if (customRadio.checked) {
            workoutValue = daySelects[day].custom.value;
            workoutType = 'custom';
        }
        
        if (workoutValue.toLowerCase() === 'rest') {
            dayWorkout = {
                type: workoutType,
                workout: 'Rest',
                exercises: []
            };
            const checkboxes = exerciseGroups[day].querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        } else {
            dayWorkout = {
                type: workoutType,
                workout: workoutValue,
                exercises: getSelectedExercises(day)
            };
        }
        
        workoutData[day] = dayWorkout;
    });
    
    localStorage.setItem('workout', JSON.stringify(workoutData));
    loadWorkoutData();
    setTodaysWorkout();
    workoutModal.style.display = "none";
}

function getSelectedExercises(day) {
    const checkboxes = exerciseGroups[day].querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function loadWorkoutData() {
    const savedWorkout = JSON.parse(localStorage.getItem('workout'));
    if (savedWorkout) {
        split.textContent = savedWorkout.splitName || savedWorkout.splitType || 'N/A';
        
        Object.keys(daySelects).forEach(day => {
            if (savedWorkout[day]) {
                const dayElement = document.getElementById(day);
                if (savedWorkout[day].workout && savedWorkout[day].workout !== 'rest') {
                    dayElement.textContent = savedWorkout[day].workout;
                } else {
                    dayElement.textContent = 'Rest';
                }
            }
        });
    }
}

function workoutSplit() {
    Object.keys(daySelects).forEach(day => {
        daySelects[day].ppl.style.display = "none";
        daySelects[day].arnold.style.display = "none";
        daySelects[day].ul.style.display = "none";
        daySelects[day].custom.style.display = "none";
        exerciseGroups[day].style.display = "none";
        daySelects[day].custom.value = "";
    });

    customSplitName.style.display = "none";
    customSplitName.value = "";

    if (pplRadio.checked || arnoldRadio.checked || ulRadio.checked) {
        Object.keys(daySelects).forEach(day => {
            daySelects[day].ppl.value = "Rest";
            daySelects[day].arnold.value = "Rest";
            daySelects[day].ul.value = "Rest";
        });
    }

    if (pplRadio.checked) {
        Object.keys(daySelects).forEach(day => {
            daySelects[day].ppl.style.display = "block";
        });
    } 
    else if (arnoldRadio.checked) {
        Object.keys(daySelects).forEach(day => {
            daySelects[day].arnold.style.display = "block";
        });
    } 
    else if (ulRadio.checked) {
        Object.keys(daySelects).forEach(day => {
            daySelects[day].ul.style.display = "block";
        });
    }
    else if (customRadio.checked) {
        customSplitName.style.display = "block";
        Object.keys(daySelects).forEach(day => {
            daySelects[day].custom.style.display = "block";
        });
    }
}

function toggleExerciseGroup(day) {
    const group = exerciseGroups[day];
    let showExercises = false;
    
    if (pplRadio.checked && daySelects[day].ppl.value !== 'rest') {
        showExercises = true;
    } 
    else if (arnoldRadio.checked && daySelects[day].arnold.value !== 'rest') {
        showExercises = true;
    } 
    else if (ulRadio.checked && daySelects[day].ul.value !== 'rest') {
        showExercises = true;
    }
    else if (customRadio.checked && daySelects[day].custom.value.trim() !== '') {
        showExercises = true;
    }
    
    group.style.display = showExercises ? "block" : "none";
}

function setTodaysWorkout() {
    const days = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];
    const today = new Date().getDay();
    const todayDay = days[today];
    
    const savedWorkout = JSON.parse(localStorage.getItem('workout'));
    if (savedWorkout && savedWorkout[todayDay]) {
        const todayWorkout = savedWorkout[todayDay];
        workout.textContent = todayWorkout.workout === 'Rest' ? 'Rest Day' : todayWorkout.workout;
        
        exercisesList.innerHTML = '';
        if (todayWorkout.workout === 'Rest' || !todayWorkout.exercises || todayWorkout.exercises.length === 0) {
            exercisesList.innerHTML = '<li>No exercises - Rest Day</li>';
        } else {
            todayWorkout.exercises.forEach(exercise => {
                const li = document.createElement('li');
                li.textContent = exercise;
                exercisesList.appendChild(li);
            });
        }
    }
}

function toggleWorkoutDetails() {
    workoutDetails.classList.toggle('collapsed');
    workoutDetails.classList.toggle('expanded');
    expandWorkoutBtn.textContent = workoutDetails.classList.contains('collapsed') ? 'Expand' : 'Collapse';
}

function updateCaloriesBurned() {
    const steps = parseInt(stepsInput.value) || 0;
    const calories = Math.round(steps * 0.04);
    burned.textContent = calories + ' cal';
    
    const stepData = {
        date: new Date().toISOString().split('T')[0],
        steps: steps,
        calories: calories
    };
    
    let stepsHistory = JSON.parse(localStorage.getItem('stepsHistory')) || [];
    stepsHistory.push(stepData);
    localStorage.setItem('stepsHistory', JSON.stringify(stepsHistory));
}

function showExpandedWorkout() {
    const savedWorkout = JSON.parse(localStorage.getItem('workout'));
    if (!savedWorkout) {
        alert("No workout data saved yet!");
        return;
    }

    const days = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];
    const today = new Date().getDay();
    const todayDay = days[today];
    
    if (savedWorkout[todayDay]) {
        const todayWorkout = savedWorkout[todayDay];
        document.getElementById('expandedTodayWorkout').textContent = 
            todayWorkout.workout.toLowerCase() === 'rest' ? 'Rest Day' : todayWorkout.workout;
    }
    
    document.getElementById('expandedCurrentSplit').textContent = 
        savedWorkout.splitName || savedWorkout.splitType || 'N/A';

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const dayKeys = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];
    
    dayNames.forEach((day, index) => {
        const dayElement = document.getElementById(`expanded${day}`);
        const workoutText = dayElement.querySelector('.day-workout');
        const exercisesContainer = dayElement.querySelector('.day-exercises');
        
        const dayKey = dayKeys[index];
        if (savedWorkout[dayKey]) {
            const dayWorkout = savedWorkout[dayKey];
            workoutText.textContent = dayWorkout.workout.toLowerCase() === 'rest' ? 'Rest Day' : dayWorkout.workout;
            
            exercisesContainer.innerHTML = '';
            if (dayWorkout.exercises && dayWorkout.exercises.length > 0) {
                dayWorkout.exercises.forEach(exercise => {
                    const exerciseEl = document.createElement('div');
                    exerciseEl.textContent = exercise;
                    exercisesContainer.appendChild(exerciseEl);
                });
            } else {
                exercisesContainer.innerHTML = '<div>No exercises</div>';
            }
        }
    });
    
    expandWorkoutModal.style.display = "block";
}

function closeExpandWorkout() {
    expandWorkoutModal.style.display = "none";
}

function handleDaySelectChange(day) {
    const isPPL = pplRadio.checked;
    const isArnold = arnoldRadio.checked;
    const isUL = ulRadio.checked;
    const isCustom = customRadio.checked;

    let shouldShowExercises = false;
    let workoutValue = "";

    if (isPPL) {
        workoutValue = daySelects[day].ppl.value.toLowerCase();
        shouldShowExercises = workoutValue !== "rest";
    }
    else if (isArnold) {
        workoutValue = daySelects[day].arnold.value.toLowerCase();
        shouldShowExercises = workoutValue !== "rest";
    }
    else if (isUL) {
        workoutValue = daySelects[day].ul.value.toLowerCase();
        shouldShowExercises = workoutValue !== "rest";
    }
    else if (isCustom) {
        workoutValue = daySelects[day].custom.value.trim().toLowerCase();
        shouldShowExercises = workoutValue !== "" && workoutValue !== "rest";
    }

    exerciseGroups[day].style.display = shouldShowExercises ? "block" : "none";
    
    if (!shouldShowExercises) {
        clearDayExercises(day);
    }
}

function clearDayExercises(day) {
    const checkboxes = exerciseGroups[day].querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function editNutrition() {
    const savedProfile = JSON.parse(localStorage.getItem('profile')) || {};
    
    if (savedProfile.calories) editCaloriesInput.value = savedProfile.calories;
    if (savedProfile.protein) editProteinInput.value = savedProfile.protein;
    if (savedProfile.fat) editFatInput.value = savedProfile.fat;
    if (savedProfile.carbs) editCarbsInput.value = savedProfile.carbs;
    if (savedProfile.fiber) editFiberInput.value = savedProfile.fiber;
    
    nutritionModal.style.display = "block";
}

function closeNutrition() {
    nutritionModal.style.display = "none";
}

function saveNutrition() {
    const newCalories = parseInt(editCaloriesInput.value);
    const newProtein = parseInt(editProteinInput.value);
    const newFat = parseInt(editFatInput.value);
    const newCarbs = parseInt(editCarbsInput.value);
    const newFiber = parseInt(editFiberInput.value);

    if (isNaN(newCalories) || newCalories < 800 || newCalories > 10000) {
        alert("Please enter valid calories between 800-10000");
        editCaloriesInput.focus();
        return;
    }

    if (isNaN(newProtein) || newProtein < 20 || newProtein > 500) {
        alert("Please enter valid protein between 20-500g");
        editProteinInput.focus();
        return;
    }

    if (isNaN(newFat) || newFat < 10 || newFat > 300) {
    alert("Please enter valid fat between 10-300g");
    editFatInput.focus();
    return;
}

    if (isNaN(newCarbs) || newCarbs < 20 || newCarbs > 1000) {
        alert("Please enter valid carbs between 20-1000g");
        editCarbsInput.focus();
        return;
    }

    if (isNaN(newFiber) || newFiber < 10 || newFiber > 100) {
        alert("Please enter valid fiber between 10-100g");
        editFiberInput.focus();
        return;
    }

    cal.textContent = calnow + '/' + newCalories;
    protein.textContent = proteinnow + 'g/' + newProtein + ' g';
    fat.textContent = fatnow + "g/" + newFat + 'g';
    carbs.textContent = carbsnow + "g/" + newCarbs + 'g';
    fiber.textContent = fibernow + 'g/' + newFiber + 'g';

    const savedProfile = JSON.parse(localStorage.getItem('profile')) || {};
    savedProfile.calories = newCalories;
    savedProfile.protein = newProtein;
    savedProfile.fat = newFat;
    savedProfile.carbs = newCarbs;
    savedProfile.fiber = newFiber;
    
    localStorage.setItem('profile', JSON.stringify(savedProfile));
    closeNutrition();
}

function updateMacrosPreview() {
  const selectedFood = foodSelect.value;
  const amount = parseFloat(foodAmount.value) || 0;
  const foodName = selectedFood === 'custom' ? customFoodNameInput.value.trim() || "Custom Food" : selectedFood;

  if (selectedFood && amount > 0) {
    let food;
    
    if (selectedFood === 'custom') {
      food = {
        name: foodName,
        calories: parseFloat(customCaloriesInput.value) || 0,
        protein: parseFloat(customProteinInput.value) || 0,
        fat: parseFloat(customFatInput.value) || 0,
        carbs: parseFloat(customCarbsInput.value) || 0,
        fiber: parseFloat(customFiberInput.value) || 0
      };
    } else {
      food = {
        name: foodSelect.options[foodSelect.selectedIndex].text.replace(/\(.*\)/, '').trim(),
        ...foodDatabase[selectedFood]
      };
    }
    
    const multiplier = amount / 100;
    
    document.getElementById('previewFoodName').textContent = foodName;
    previewCalories.textContent = Math.round(food.calories * multiplier);
    previewProtein.textContent = (food.protein * multiplier).toFixed(1);
    previewFat.textContent = (food.fat * multiplier).toFixed(1);
    previewCarbs.textContent = (food.carbs * multiplier).toFixed(1);
    previewFiber.textContent = (food.fiber * multiplier).toFixed(1);
  } else {
    document.getElementById('previewFoodName').textContent = "No food selected";
    previewCalories.textContent = "0";
    previewProtein.textContent = "0";
    previewFat.textContent = "0";
    previewCarbs.textContent = "0";
    previewFiber.textContent = "0";
  }
}

function updateNutritionDisplay() {
  const savedProfile = JSON.parse(localStorage.getItem('profile')) || {};
  cal.textContent = calnow + '/' + (savedProfile.calories || 0);
  protein.textContent = proteinnow.toFixed(1) + 'g/' + (savedProfile.protein || 0) + ' g';
  fat.textContent = fatnow.toFixed(1) + 'g/' + (savedProfile.fat || 0) + ' g';
  carbs.textContent = carbsnow.toFixed(1) + 'g/' + (savedProfile.carbs || 0) + ' g';
  fiber.textContent = fibernow.toFixed(1) + 'g/' + (savedProfile.fiber || 0) + ' g';
}

function loadNutritionData() {
  const savedData = localStorage.getItem('nutritionTracking');
  if (savedData) {
    const data = JSON.parse(savedData);
    const savedDate = new Date(data.lastUpdated).toDateString();
    const today = new Date().toDateString();
    
    if (savedDate === today) {
      calnow = data.calories || 0;
      proteinnow = data.protein || 0;
      fatnow = data.fat || 0;
      carbsnow = data.carbs || 0;
      fibernow = data.fiber || 0;
    }
  }
  updateNutritionDisplay();
}

function saveNutritionData() {
  const data = {
    calories: calnow,
    protein: proteinnow,
    fat: fatnow,
    carbs: carbsnow,
    fiber: fibernow,
    lastUpdated: new Date().toISOString()
  };
  localStorage.setItem('nutritionTracking', JSON.stringify(data));
}

function addFoodToLog(selectedFood, amount) {
  let food;
  
  if (selectedFood === 'custom') {
    food = {
      name: customFoodNameInput.value.trim(),
      calories: parseFloat(customCaloriesInput.value),
      protein: parseFloat(customProteinInput.value),
      fat: parseFloat(customFatInput.value) || 0,
      carbs: parseFloat(customCarbsInput.value) || 0,
      fiber: parseFloat(customFiberInput.value) || 0
    };
  } else {
    food = {
      name: foodSelect.options[foodSelect.selectedIndex].text.replace(/\(.*\)/, '').trim(),
      ...foodDatabase[selectedFood]
    };
  }

  const multiplier = amount / 100;

  calnow += Math.round(food.calories * multiplier);
  proteinnow += food.protein * multiplier;
  fatnow += food.fat * multiplier;
  carbsnow += food.carbs * multiplier;
  fibernow += food.fiber * multiplier;

  updateNutritionDisplay();
  saveNutritionData();
  resetFoodForm();
}

function checkDailyReset() {
  const today = new Date().toDateString();
  if (currentTrackingDate !== today) {
    resetNutritionValues();
    currentTrackingDate = today;
  }
}

function resetNutritionValues() {
  calnow = 0;
  proteinnow = 0;
  fatnow = 0;
  carbsnow = 0;
  fibernow = 0;
  
  const today = new Date().toDateString();
  foodLog = foodLog.filter(food => new Date(food.date).toDateString() === today);
  localStorage.setItem('foodLog', JSON.stringify(foodLog));
  
  updateNutritionDisplay();
  saveNutritionData();
}

function showExpandedNutrition() {
  const profile = JSON.parse(localStorage.getItem('profile')) || {};
  document.getElementById('expandedCalories').textContent = calnow;
  document.getElementById('expandedCaloriesGoal').textContent = profile.calories || 0;
  document.getElementById('expandedProtein').textContent = proteinnow.toFixed(1);
  document.getElementById('expandedProteinGoal').textContent = profile.protein || 0;
  document.getElementById('expandedFat').textContent = fatnow.toFixed(1);
  document.getElementById('expandedFatGoal').textContent = profile.fat || 0;
  document.getElementById('expandedCarbs').textContent = carbsnow.toFixed(1);
  document.getElementById('expandedCarbsGoal').textContent = profile.carbs || 0;
  document.getElementById('expandedFiber').textContent = fibernow.toFixed(1);
  document.getElementById('expandedFiberGoal').textContent = profile.fiber || 0;

  updateFoodLogTable();
  
  expandNutritionModal.style.display = "block";
}

function closeExpandedNutrition() {
  expandNutritionModal.style.display = "none";
}

function updateFoodLogTable() {
  const tbody = document.getElementById('foodLogBody');
  tbody.innerHTML = '';

  const today = new Date().toDateString();
  const todaysFoods = foodLog.filter(food => 
    new Date(food.date).toDateString() === today
  );

  todaysFoods.forEach((food, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${food.name}</td>
      <td>${food.amount}g</td>
      <td>${Math.round(food.calories)}</td>
      <td>${food.protein.toFixed(1)}</td>
      <td>${food.fat.toFixed(1)}</td>
      <td>${food.carbs.toFixed(1)}</td>
      <td><button class="remove-food-btn" data-index="${index}">Remove</button></td>
    `;
    tbody.appendChild(row);
  });

  document.querySelectorAll('.remove-food-btn').forEach(button => {
    button.addEventListener('click', function() {
      removeFoodItem(this.dataset.index);
    });
  });
}

function addFoodToLog(selectedFood, amount) {
  let food;
  
  if (selectedFood === 'custom') {
    food = {
      name: customFoodNameInput.value.trim(),
      amount: amount,
      calories: parseFloat(customCaloriesInput.value) * (amount/100),
      protein: parseFloat(customProteinInput.value) * (amount/100),
      fat: parseFloat(customFatInput.value) * (amount/100) || 0,
      carbs: parseFloat(customCarbsInput.value) * (amount/100) || 0,
      fiber: parseFloat(customFiberInput.value) * (amount/100) || 0,
      date: new Date().toISOString()
    };
  } else {
    food = {
      name: foodSelect.options[foodSelect.selectedIndex].text.replace(/\(.*\)/, '').trim(),
      amount: amount,
      calories: foodDatabase[selectedFood].calories * (amount/100),
      protein: foodDatabase[selectedFood].protein * (amount/100),
      fat: foodDatabase[selectedFood].fat * (amount/100) || 0,
      carbs: foodDatabase[selectedFood].carbs * (amount/100) || 0,
      fiber: foodDatabase[selectedFood].fiber * (amount/100) || 0,
      date: new Date().toISOString()
    };
  }

  foodLog.push(food);
  localStorage.setItem('foodLog', JSON.stringify(foodLog));

  calnow += Math.round(food.calories);
  proteinnow += food.protein;
  fatnow += food.fat;
  carbsnow += food.carbs;
  fibernow += food.fiber;

  updateNutritionDisplay();
  saveNutritionData();
  resetFoodForm();
}

function removeFoodItem(index) {
  const removedFood = foodLog[index];
  
  calnow -= Math.round(removedFood.calories);
  proteinnow -= removedFood.protein;
  fatnow -= removedFood.fat;
  carbsnow -= removedFood.carbs;
  fibernow -= removedFood.fiber;
  
  foodLog.splice(index, 1);
  localStorage.setItem('foodLog', JSON.stringify(foodLog));
  
  updateFoodLogTable();
  updateModalMacros();
  
  saveNutritionData();
}

function updateModalMacros() {
  document.getElementById('expandedCalories').textContent = calnow;
  document.getElementById('expandedProtein').textContent = proteinnow.toFixed(1);
  document.getElementById('expandedFat').textContent = fatnow.toFixed(1);
  document.getElementById('expandedCarbs').textContent = carbsnow.toFixed(1);
  document.getElementById('expandedFiber').textContent = fibernow.toFixed(1);
}
