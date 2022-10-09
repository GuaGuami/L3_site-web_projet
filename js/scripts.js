/*!
* Start Bootstrap - Stylish Portfolio v6.0.4 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-times');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-times');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


/*****************************RAJOUT******************************/

/****ENQUETE****/
/**CAPTCHA**/
function testCaptcha(userID,captchaID){
    if(userID.value == captchaID.value){
        return true;
    }else{
        if(userID.value ==0){
            alert("Veuillez remplir le champ du captcha");
            document.getElementById("userID").style.backgroundColor = "red";
            return false;
        }
        else{
            alert("Vous avez mal saisi le captcha. Veuillez réessayer");
            document.getElementById("userID").style.backgroundColor = "red";
            return false;
        }      
    }
}
/**BOUTON RESET**/
function resetRouge(userID){
    if(document.getElementById("userID").style.backgroundColor == "red"){
        return document.getElementById("userID").style.backgroundColor="#afe6e7";
    }
}
/**Situation où l'année saisie par l'utilisateur dépasse notre année actuelle**/
function comparaisonAnnee(annee){
    dateNow=new Date();
    yearNow=dateNow.getFullYear();

    if(annee.value>yearNow){
        alert("Nous ne sommes pas encore à cette année.");
        return false;
    }else if(annee.value<yearNow-100){
        alert("Mettez la vraie année s'il vous plaît");
        return false;
    }
}

/***ACCUEIL***/
/*CHIFFRES*/
(function() {
  function incrementNumber(node,nb) {

    let sectionNumbers = document.querySelector('.sectionNumbers');   
    let sectionCounter = 0;
    let numbers = document.querySelector("."+node);

    let n = nb;
    let cpt = 0; 
    let delay = 1000; 
    let delta = Math.ceil((delay * 1500) / n);

    function countdownNumbers() {
      numbers.innerHTML = ++cpt;
      if( cpt < n ) { 
        setTimeout(countdownNumbers, numbers);
      }
    }

    document.addEventListener('scroll', function() {
      sectionCounter++;        
      if(sectionCounter == 1) {
        setTimeout(countdownNumbers, numbers);
      }
    }), {passive:true};
  }
  setTimeout(function(){ 
    incrementNumber("number1", 526);
    incrementNumber("number2", 500);
    incrementNumber("number3", 500);
  }, 2000);
})();

/******ONLOAD******/
function hide(ecart,repDomHF){
    document.getElementById("ecart").style.display="none";
    document.getElementById("repDomHF").style.display="none";
    document.getElementById("txMinHF").style.display="none";
}

function hide2(stable,contrat,entreprise){
    document.getElementById("stable").style.display="none";
    document.getElementById("contrat").style.display="none";
    document.getElementById("entreprise").style.display="none";
}

function hide3(salMeanDom,sal_compa,salMoyen){
    document.getElementById("salMeanDom").style.display="none";
    document.getElementById("sal_compa").style.display="none";
    document.getElementById("salMoyen").style.display="none";
}

/*****DISPARITE HOMME/FEMME*****/
function showGraphDisp1(ecartHF,ecart){
    document.getElementById("ecartHF").style.display="none";
    document.getElementById("ecart").style.display="block";
}

function showTableDisp1(ecartHF,ecart){
    document.getElementById("ecartHF").style.display="block";
    document.getElementById("ecart").style.display="none";
}
function showGraphDisp2(repDomHF,partHF){
    document.getElementById("repDomHF").style.display="none";
    document.getElementById("partHF").style.display="block";
}

function showTableDisp2(repDomHF,partHF){
    document.getElementById("repDomHF").style.display="block";
    document.getElementById("partHF").style.display="none";
}

function showGraphDisp3(txMinHF,disp3){
    document.getElementById("txMinHF").style.display="none";
    document.getElementById("disp3").style.display="block";
}

function showTableDisp3(txMinHF,disp3){
    document.getElementById("txMinHF").style.display="block";
    document.getElementById("disp3").style.display="none";
}

/*****ZOOM SUR LES FEMMES*****/
function showGraphF1(partF,stable){
    document.getElementById("partF").style.display="none";
    document.getElementById("stable").style.display="block";
}
function showTableF1(partF,stable){
    document.getElementById("partF").style.display="block";
    document.getElementById("stable").style.display="none";
}


function showGraphF2(contratF,contrat){
    document.getElementById("contratF").style.display="none";
    document.getElementById("contrat").style.display="block";
}
function showTableF2(contratF,contrat){
    document.getElementById("contratF").style.display="block";
    document.getElementById("contrat").style.display="none";
}


function showGraphF3(entrepriseF,entreprise){
    document.getElementById("entrepriseF").style.display="none";
    document.getElementById("entreprise").style.display="block";
}
function showTableF3(entrepriseF,entreprise){
    document.getElementById("entrepriseF").style.display="block";
    document.getElementById("entreprise").style.display="none";
}

/*****SALAIRE*****/
function showGraphS1(salMeanDom,sal1){
    document.getElementById("salMeanDom").style.display="none";
    document.getElementById("sal1").style.display="block";
}
function showTableS1(salMeanDom,sal1){
    document.getElementById("salMeanDom").style.display="block";
    document.getElementById("sal1").style.display="none";
}


function showGraphS2(compSalMeanMed,sal_compa){
    document.getElementById("compSalMeanMed").style.display="none";
    document.getElementById("sal_compa").style.display="block";
}
function showTableS2(compSalMeanMed,sal_compa){
    document.getElementById("compSalMeanMed").style.display="block";
    document.getElementById("sal_compa").style.display="none";
}


function showGraphS3(evolutionSalMean,salMoyen){
    document.getElementById("evolutionSalMean").style.display="none";
    document.getElementById("salMoyen").style.display="block";
}
function showTableS3(evolutionSalMean,salMoyen){
    document.getElementById("evolutionSalMean").style.display="block";
    document.getElementById("salMoyen").style.display="none";
}

// SEARCH //
function show (fen){
    document.getElementById("fen").style.display="block";
    
}

function clo (fen){
    if (document.getElementById("fen").style.display="block") {
            document.getElementById("fen").style.display = "none";
    }
} 

/**SIMULATION dans SALAIRE**/

function simulation(userAnnee,userSalaire){
    var salMean;
    var salMed ;
    var year;

    if(document.getElementById("userAnnee").value==2011){
         salMean =28916.67;
        salMed =27950;
            if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        }else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
    }else if(document.getElementById("userAnnee").value==2012){
         salMean =27713.73;
            salMed =26950;
             if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        } else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
}
    else if(document.getElementById("userAnnee").value==2013){
        salMean =28023.73;
            salMed =27000;
             if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        } else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
}
    else if(document.getElementById("userAnnee").value==2014){
         salMean =28180.83;
            salMed =27800;
             if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        } else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
}
    else if(document.getElementById("userAnnee").value==2015){
         salMean =28322.03;
            salMed =28100;
             if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        } else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
}
    else if(document.getElementById("userAnnee").value==2016){
        salMean=28943.80;
        salMed =28100;
        if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        } else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
}
    else if(document.getElementById("userAnnee").value==2017){
         salMean =29827.12;
            salMed =29600;
            if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        } else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
}
    else if(document.getElementById("userAnnee").value==2018){
        salMean =30069.81;
        salMed =29650;
         if (document.getElementById("userSalaire").value >= salMed) {
            alert("Vous faites partie des 50% des salariés à toucher plus du salaire médian");
            document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        } else{
            if (document.getElementById("userSalaire").value < salMed) {
                if (document.getElementById("userSalaire").value < salMean) {
                    alert("Vous faites partie des salariés à toucher moins du salaire moyen. Travaillez davantage !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
        
                }
                else{
                    alert("Vous faites partie des salariés à toucher plus du salaire moyen. Continuez dans ce sens !");
                    document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
                }
            }
    }
        
    }else{
        alert("Que les années entre 2011 à 2018");
        document.getElementById("userAnnee").value="";
                    document.getElementById("userSalaire").value="";
    }
}

