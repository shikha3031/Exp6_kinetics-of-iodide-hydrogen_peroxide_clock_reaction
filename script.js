//process steps function
class chemical {

    emptybeaker = document.getElementById("emptybeaker");
    water = document.getElementById("DISTILLED_-WATER1");
    ML = localStorage.getItem("flask");
    FlaskMl = "";
    lang = localStorage.getItem("lang");
    instruct = document.getElementById("instruction");
    step = 3;
    constructor() {
        //chnage the info language based on user selection
        this.OtherInfoInBasedOnSelectedLanguage();
        //show first instruction default
        this.UpdateInstruction(2);
        //update flask
        this.FlaskOfMl();
    }

    intial_to_middle(elementId, translateX, translateTop = -150, rotateAngle = -20, comebackToIntialPosition) {
        //increase the step
        this.Validate(this.step);
        ++this.step;
        //1st step move to the intial postion to middle position
        let element = document.getElementById(elementId);
        //first it will go on top
        element.style.transition = 'transform 0.5s ease';
        element.style.transform = `translateY(${translateTop}px)`
        //then translate to the middle beaker
        setTimeout(() => {
            element.style.transform = `translatex(${translateX}px) rotate(${rotateAngle}deg)`
        }, 1000);
        //now come back to its initial postion
        setTimeout(() => {
            element.style.transform = `translatex(${comebackToIntialPosition}px)`
            element.setAttribute("src", this.changeImageAsPerSelectedBeaker(elementId)[1]);

            this.changeBeakerImage("fill", 5, elementId);

            setTimeout(() => {
                this.middle_to_final(elementId);
            }, 900);

        }, 1500);
    }

    middle_to_final(elementID) {

        if (this.ML == "a") {
            this.MiddleBeakerAnimation(-80, -50, -40, 10, elementID);
            setTimeout(() => {
                this.final_Beaker_Chemical_Ammount(this.changeImageAsPerSelectedBeaker(elementID)[2])
            }, 1500);
        } else if (this.ML == "b") {
            this.MiddleBeakerAnimation(-80, -50, -40, 10, elementID);
            setTimeout(() => {
                this.final_Beaker_Chemical_Ammount(this.changeImageAsPerSelectedBeaker(elementID)[2])
            }, 1500);
        } else if (this.ML == "c") {
            this.MiddleBeakerAnimation(-80, -50, -40, 10, elementID);
            setTimeout(() => {
                this.final_Beaker_Chemical_Ammount(this.changeImageAsPerSelectedBeaker(elementID)[2])
            }, 1500);
        } else {
            this.MiddleBeakerAnimation(-80, -50, -40, 10, elementID);
            setTimeout(() => {
                this.final_Beaker_Chemical_Ammount(this.changeImageAsPerSelectedBeaker(elementID)[2])
            }, 1500);
        }
    }

    final_Beaker_Chemical_Ammount(step = 1) {
        if (step == 1)
            document.getElementsByClassName("finalFlask")[0].setAttribute("src", "./90mlflask.png");
        else if (step == 2)
            document.getElementsByClassName("finalFlask")[0].setAttribute("src", "./100mlflask.png");
        else if (step == 3)
            document.getElementsByClassName("finalFlask")[0].setAttribute("src", "./115mlflask.png");
        else if (step == 4)
            document.getElementsByClassName("finalFlask")[0].setAttribute("src", "./120mlflask.png");
    }
    MiddleBeakerAnimation(translateY, translateX, rotateAngle, comabackPosition, finalElementId) {
        //top
        this.emptybeaker.style.transition = 'transform 0.5s ease';
        this.emptybeaker.style.transform = `translateY(${translateY}px)`

        setTimeout(() => {
            this.emptybeaker.style.transform = `translatex(${translateX}px) rotate(${rotateAngle}deg)`
        }, 1000);
        //now come back to its initial postion
        setTimeout(() => {
            this.emptybeaker.style.transform = `translatex(${comabackPosition}px)`
            this.changeBeakerImage("empty");
        }, 1500);

        setTimeout(() => {
            //checking the finsl steps
            if (this.isFinalStep(finalElementId))
                this.DoFianlThingsAfterAllChemicalAdded();
        }, 3000);
    }

    changeBeakerImage(status, ML = 5, elementId) {
        if (status == "fill") {
            if (elementId == "SodiumThiosulphate1" || elementId == "Hydrogenperoxide1") {
                this.emptybeaker.setAttribute("src", "./5mlbeaker.png");
            } else {
                this.emptybeaker.setAttribute("src", "./10mlbeaker.png");
            }
            // else if (this.ML == "b") {
            //     this.emptybeaker.setAttribute("src", "./10mlbeaker.png");
            // }
            // else if (this.ML == "c") {
            //     this.emptybeaker.setAttribute("src", "./15mlbeaker.png");
            // }
            // else {
            //     this.emptybeaker.setAttribute("src", "./15mlbeaker.png");
            // }
        }
        else
            this.emptybeaker.setAttribute("src", "./emptybeaker.png");
    }
    //this will reduce the ammount of chemical in beaker
    changeImageAsPerSelectedBeaker(elementId) {
        if (elementId == "Sulphuricacid1") {
            return [elementId, "./SulphuricAcid2.png", 1]
        }
        else if (elementId == "SodiumThiosulphate1") {
            return [elementId, "./SodiumThiosulphate2.png", 2]
        }
        else if (elementId == "starchsolution1") {
            return [elementId, "./starchSolHalf.png", 3]
        }
        else if (elementId == "Hydrogenperoxide1") {
            return [elementId, "./H2o2.png", 4]
        }
    }
    //convert flask into the ML
    FlaskOfMl() {
        if (this.ML == "a")
            this.FlaskMl = 5
        else if (this.ML == "b")
            this.FlaskMl = 10
        else if (this.ML == "c")
            this.FlaskMl = 15
        else
            this.FlaskMl = 20
    }
    //showing the instructions
    Instructions(instructionId) {
        if (instructionId == 1) {
            return ["Click on anyone of flask to start the reaction", "प्रतिक्रिया शुरू करने के लिए फ्लास्क में से किसी एक पर क्लिक करें"]
        }
        else if (instructionId == 2) {
            return ["Now click on the distilled water to make the solution 90ml", "अब घोल को 90 मि.ली. बनाने के लिए आसुत जल पर क्लिक करें"]
        }
        else if (instructionId == 3) {
            return [`Now measure ${this.FlaskMl = 10}ml of sulphuric acid to add in the mixture`, `अब मिश्रण में मिलाने के लिए ${this.FlaskMl = 10} मिलीलीटर सल्फ्यूरिक एसिड मापें।`]
        }
        else if (instructionId == 4) {
            return [`Measure ${this.FlaskMl = 5}ml of sodium thiosulphate to add in the solution`, `घोल में मिलाने के लिए ${this.FlaskMl = 5} मिलीलीटर सोडियम थायोसल्फेट मापें`]
        }
        else if (instructionId == 5) {
            return [`Now measure ${this.FlaskMl = 10}ml of start h solution and add it in solution`, `अब स्टार्ट एच सॉल्यूशन का ${this.FlaskMl = 10}ml मापें और इसे सॉल्यूशन में जोड़ें`]
        }
        else if (instructionId == 6) {
            return [`Now measure ${this.FlaskMl = 5}ml of hydrogen peroxide to add into the mixture `, `अब मिश्रण में मिलाने के लिए ${this.FlaskMl = 5}ml हाइड्रोजन पेरोक्साइड मापें`]
        }
        else if (instructionId == 7) {
            return [`Now stir the mixture and immediately start the stop watch`, "अब मिश्रण को हिलाएं और तुरंत स्टॉप वॉच चालू करें"]
        }
    }
    //update the information in instruction box based on slected info
    UpdateInstruction(id) {
        if (this.lang == "hi") {
            this.instruct.innerText = this.Instructions(id)[1];
         
        }
        else {
            this.instruct.innerText = this.Instructions(id)[0];
    
        }
    }
    //other information print based on selected languages
    OtherInfoInBasedOnSelectedLanguage() {
        if (this.lang == "hi") {
            //header text
            document.getElementById("header").innerText = "आयोडाइड हाइड्रोजन पेरोक्साइड क्लॉक रिएक्शन की गतिकी का अध्ययन करने के लिए"
            //instruction
            document.getElementsByClassName("instruct")[0].innerText = "निर्देश"
            document.getElementsByClassName("glov")[0].innerText = "कृपया रासायनिक प्रतिक्रिया शुरू करने से पहले उचित सुरक्षात्मक गियर जैसे दस्ताने, चश्मा और एक लैब कोट पहनना सुनिश्चित करें। किसी भी संभावित खतरे को रोकने और सुरक्षित प्रयोग सुनिश्चित करने के लिए सुरक्षा सावधानियां आवश्यक हैं"
            document.getElementById("ins").innerText = "निर्देश"
            document.getElementById("timer").innerText = "घड़ी"
        }
        else {
            document.getElementById("header").innerText = "TO STUDY THE KINETICS OF IODIDE HYDROGEN PEROXIDE CLOCK REACTION"
            //instruction
            document.getElementsByClassName("instruct")[0].innerText = "INSTRUCTIONS"
            document.getElementsByClassName("glov")[0].innerText = "Please ensure to wear appropriate protective gear such as gloves, goggles, and a lab coat before initiating the chemical reaction. Safety precautions are essential to prevent any potential hazards and ensure a safe experiment";
            document.getElementById("ins").innerText = "INSTRUCTIONS";
            document.getElementById("timer").innerText = "Timer"
        }
    }

    movementOfSelectedBeaker(elementId) {

        if (elementId == "Sulphuricacid1") {
            chemicals.intial_to_middle(elementId, -160, -150, -50, 20);
            this.UpdateInstruction(4);
        }
        else if (elementId == "SodiumThiosulphate1") {
            chemicals.intial_to_middle(elementId, -331, -150, -50, 12);
            this.UpdateInstruction(5);
        }
        else if (elementId == "starchsolution1") {
            chemicals.intial_to_middle(elementId, -482, -150, -50, 12);
            this.UpdateInstruction(6);
        }
        else if (elementId == "Hydrogenperoxide1") {
            chemicals.intial_to_middle(elementId, -640, -150, -50, 12);
            this.UpdateInstruction(7);
        }
    }

    DirectAnimationForDistillerWater() {
        this.Validate(2);
        this.UpdateInstruction(3);

        if (this.ML == "a") {
            this.DistillerWaterAnimataion(-110, -80, -40, 10)
        } else if (this.ML == "b") {
            this.DistillerWaterAnimataion(-110, -80, -40, 10)
        } else if (this.ML == "c") {
            this.DistillerWaterAnimataion(-110, -80, -40, 10)
        } else {
            this.DistillerWaterAnimataion(-110, -80, -40, 10)
        }
    }

    DistillerWaterAnimataion(translateX, translateY, rotateAngle, comebackPosition) {
        //top
        this.water.style.transition = 'transform 0.9s ease';
        this.water.style.transform = `translateY(${translateY}px)`

        setTimeout(() => {
            this.water.style.transform = `translatex(${translateX}px) rotate(${rotateAngle}deg)`
        }, 1000);

        //now come back to its initial postion
        setTimeout(() => {
            this.water.style.transform = `translatex(${comebackPosition}px)`
            this.final_Beaker_Chemical_Ammount(1);
            this.water.setAttribute("src", "./DISTILLED_-WATER2.png")
        }, 1500);
    }

    isFinalStep(elementId) {
        if (elementId == "Hydrogenperoxide1")
            return true;
        else
            return false
    }

    //clicking on stir
    stirAnimation(elementID) {
        document.getElementById(elementID).classList.add("transform-stir");
        setTimeout(() => {
            document.getElementById(elementID).classList.remove("transform-stir");
        }, 3000);
    }

    DoFianlThingsAfterAllChemicalAdded() {
        this.makeBeakerBlue();
        this.StopTimer();
    }

    makeBeakerBlue() {
        let beaker = document.getElementById("flask20ml");
        console.log(this.FlaskMl, this.ML);
        if (this.FlaskMl == 5) {
            setTimeout(() => {
                beaker.setAttribute('src', "./90mlflask.png")
                this.completeReactionInstruction();
            }, 265000);

        } else if (this.FlaskMl == 10) {
            setTimeout(() => {
                beaker.setAttribute('src', "./100mlflask.png")
                this.completeReactionInstruction();
            }, 138000);

        } else if (this.FlaskMl == 15) {
            setTimeout(() => {
                beaker.setAttribute('src', "./115mlflask.png")
                cthis.ompleteReactionInstruction();
            }, 96000);

        } else if (this.FlaskMl == 20) {
            setTimeout(() => {
                beaker.setAttribute('src', "./120mlflask.png")
                this.completeReactionInstruction();
            }, 74000);

        }
    }


    StopTimer() {

    }

    completeReactionInstruction() {
        if (this.lang == "hi") {
            this.instruct.innerText = "प्रतिक्रिया पूरी हुई";
        }
        else {

            this.instruct.innerText = "Reaction completed";
        }

    }

    //function for the validation
    Validate(step) {

        Array.from(document.getElementsByClassName("step")).forEach((e, index) => {
            if ((index + 1) != step)
                e.classList.add("cursor");
            else
                e.classList.remove("cursor");
        })

    }
}



var chemicals = new chemical();

chemicals.Validate(1);
//on click event for the rest of four of the chemicles which is going to thorugh the middle bicker
Array.from(document.getElementsByClassName('clk')).forEach(e => {

    e.addEventListener("click", (event) => {

        chemicals.movementOfSelectedBeaker(event.target.id)

    })
    //click event for the distilled water

    document.getElementById("DISTILLED_-WATER1").addEventListener('click', (e) => {
        chemicals.DirectAnimationForDistillerWater();
    })
})
//clicking on stir
document.getElementById("stir").addEventListener('click', (e) => {
    chemicals.stirAnimation("stir")
});

//pop up
function openPopup() {
    document.getElementById("popup").style.display = "flex";


}

function closePopup() {
    let flask = document.getElementById('flask');
    let lang = document.getElementById('lang');

    localStorage.clear();
    localStorage.setItem("flask", flask.value)
    localStorage.setItem("lang", lang.value)
    document.getElementById("popup").style.display = "none";

}

//timer
let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (chemicals.lang == "hi") {
        chemicals.instruct.innerText = "कृपया प्रतिक्रिया पूरी होने तक प्रतीक्षा करें";
    }
    else {

        chemicals.instruct.innerText = "Please wait for completion of reaction";
    }
    timer = setInterval(function () {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        document.getElementById("stopwatch").innerText = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;

        if (localStorage.getItem("flask") == 'a') {
            setTimeout(() => {
                clearInterval(timer);
                document.getElementById("stopwatch").innerText = "00:04:25:00"
                stopStopwatch();
            }, 265000);
        }
        else if (localStorage.getItem("flask") == 'b') {
            setTimeout(() => {
                clearInterval(timer);
                document.getElementById("stopwatch").innerText = "00:02:18:00"
                stopStopwatch();
            }, 138000);
        }
        else if (localStorage.getItem("flask") == 'c') {
            setTimeout(() => {
                clearInterval(timer);
                document.getElementById("stopwatch").innerText = "00:01:36:00"
                stopStopwatch();
            }, 96000);
        }
        else if (localStorage.getItem("flask") == 'd') {
            setTimeout(() => {
                clearInterval(timer);
                document.getElementById("stopwatch").innerText = "00:01:14:00"
                stopStopwatch();
            }, 74000);
        }
    }, 10);
}

function stopStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("stopwatch").innerText = "00:00:00:00";
}

document.getElementById("flask20ml").addEventListener("mouseover", function (e) {
    if (localStorage.getItem("flask") == 'a') {
        chemicals.ML = "a";
        chemicals.FlaskOfMl();
        document.getElementById("flask20ml").setAttribute("title", "Flask A 5ML");
    }
    else if (localStorage.getItem("flask") == 'b') {
        chemicals.ML = "b";
        chemicals.FlaskOfMl();
        document.getElementById("flask20ml").setAttribute("title", "Flask B 10ML");
    }
    else if (localStorage.getItem("flask") == 'c') {
        chemicals.ML = "c";
        chemicals.FlaskOfMl();
        document.getElementById("flask20ml").setAttribute("title", "Flask C 15ML");
    }
    else if (localStorage.getItem("flask") == 'd') {
        chemicals.ML = "d";
        chemicals.FlaskOfMl();
        document.getElementById("flask20ml").setAttribute("title", "Flask D 20ML");
    }

})

