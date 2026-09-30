let story1 = [
    "Student is studying.",
    "Student drinks coffee.",
    "Student falls asleep."
];

let story2 = [
    "Student falls asleep.",
    "Student drinks coffee.",
    "Student starts studying."
];


function showStory1() {

    document.getElementById("caption1").innerHTML = story1[0];

    document.getElementById("caption2").innerHTML = story1[1];

    document.getElementById("caption3").innerHTML = story1[2];

    document.getElementById("meaning").innerHTML =
    "The student tries to stay awake but still falls asleep.";
}


function showStory2() {

    document.getElementById("caption1").innerHTML = story2[0];

    document.getElementById("caption2").innerHTML = story2[1];

    document.getElementById("caption3").innerHTML = story2[2];

    document.getElementById("meaning").innerHTML =
    "The student wakes up, drinks coffee, and starts studying.";
}


document.getElementById("story1Button").addEventListener("click", showStory1);

document.getElementById("story2Button").addEventListener("click", showStory2);