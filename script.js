 const body = document.querySelector('#body')
 const changeFont = document.querySelector('.changeFont');
 const goToAuguryList = document.querySelector('.buttonToAuguryList');
 const wheel = document.querySelector('.wheel');
 const startButton = document.querySelector('.buttonSpin');
 const goButton = document.querySelector('.goButton')
 const displayMessage = document.querySelector('.displayMessage');
//  const displayNumber = document.querySelector('.displayNumber');
 const goToSecondWheelScreen = document.querySelector('.goToSecondWheelScreen');
 const clickCharacterText = document.querySelector('#clickCharacterText');
 const SecondWheelScreenGoBack = document.querySelector(`.SecondWheelScreenGoBack`);
 const characterImage = document.querySelector('#characterImage');
 const animalWheel = document.querySelector('#secondWheel');
 const displayAuguryCoordinates = document.querySelector('#displayAuguryCoordinates');
 const clickOnAnimal = document.querySelector('#clickOnAnimal');
 const firstScreenH1 = document.querySelector('#firstScreenTitles');
 const insertAuguryText = document.querySelector('#auguryText');
 const menuBtn = document.querySelector('#menu')
 const showMenu = document.querySelector('#menuScreen')
 const menuTopLine = document.querySelector('#menuTopLine')
 const menuMiddleLine = document.querySelector('#menuMiddleLine')
 const menuBottomLine = document.querySelector('#menuBottomLine')
 const inMenuContent = document.querySelector('.inMenuContent')
 const secondMenuContent = document.querySelector('#secondMenuContent')
 const sybillaPicture = document.querySelector('#sybillaPicture')
 const sybillaName = document.querySelector('#sybillaName')
 const dmuch1 = document.querySelector('#dmuch1')
 const goBackInfo = document.querySelector('#goBackInfo')
 const opisPostaci = document.querySelector('#opisPostaci')
 const heartEmpty = document.querySelector("#heartEmpty")
 const heartFull = document.querySelector("#heartFull")
 const sybillaPictureDiv = document.querySelector("#sybillaPictureDiv")
//  const usu?? = document.querySelector('#clear')
 const tekstUlubionejWr????by = document.querySelector(".ulubioneWr????by1")
 const checkBox = document.querySelector('.checkBox')
 const checkBoxEmpty = document.querySelector('#checkBoxEmpty')
 const checkBoxFull = document.querySelector('#checkBoxFull')
 const przejd??DoWr????b = document.querySelector('#przejd??DoWr????b')
 const zeroScreen = document.querySelector('#zeroScreen')
 const fortunaZero = document.querySelector('#fortunaZero')
 const section0 = document.querySelector('#section0')

 // przyciski menu
 const zasadyGry = document.querySelector('#zasadyGry')
 const oAplikacji = document.querySelector('#oAplikacji')
 const oFortunie = document.querySelector('#oFortunie')
 const odAutora = document.querySelector('#odAutora')
 const ulubioneWr????by = document.querySelector('#ulubioneWr????by')
 const drzeworyty = document.querySelector('#drzeworyty')
 const wr????DoPocz??tku = document.querySelector('#wr????DoPocz??tku')
 const menuSecondContent = document.querySelector('#menuSecondContent')
 const goBackDiv = document.querySelector('#goBackDiv')

let numbersCheck = 0
let checkFirstScreenTrue = 0

//menu
menuBtn.addEventListener('click',() => {
    if (showMenu.style.display === "none"){
        showMenu.style.display = "flex";
        showMenu.classList.add('menuScrollUp')
        showMenu.classList.remove('menuScrollDown')
        menuTopLine.classList.add('menuTopLineTransition');
        menuMiddleLine.classList.add('menuMiddleLineTransition');
        menuBottomLine.classList.add('menuBottomLineTransition');

    } else {
        showMenu.classList.add('menuScrollDown')
        showMenu.classList.remove('menuScrollUp')
        menuTopLine.classList.remove('menuTopLineTransition');
        menuMiddleLine.classList.remove('menuMiddleLineTransition');
        menuBottomLine.classList.remove('menuBottomLineTransition');
        setTimeout (function () {
            showMenu.style.display = "none";
            menuSecondContent.style.display = "none";
            removeAllChildNodes(tekstUlubionejWr????by);
            secondMenuContent.style.display = "flex"
            }, 900);
    }
    tekstUlubionejWr????by.style.display = "none";
});

if (localStorage.getItem('checkFirstScreenTrue') === "1"){
    zeroScreen.remove()
    console.log("r??wna si?? 1")
}else{
    console.log("r??wna si?? 0")
}

isCheckBoxFull = false;

checkBoxEmpty.addEventListener('click', () => {
    checkBoxEmpty.style.display = "none";
    checkBoxFull.style.display = "block";
    isCheckBoxFull = true;
    console.log(isCheckBoxFull);
});

checkBoxFull.addEventListener('click', () => {
    checkBoxFull.style.display = "none";
    checkBoxEmpty.style.display = "block";
    isCheckBoxFull = false
    console.log(isCheckBoxFull)
});

// fortunaZero.addEventListener('click', () => {

//     section0.scroll({ 
//         top: section0.scroll(0, 90 * window.innerHeight/100),
//         behavior: 'smooth', 
//       });
//       console.log("aaa");
// });


var elem = document.getElementById("zasadyZabawy");


var topPos = elem.offsetTop

fortunaZero.onclick = function () {
    console.log('click')
  scrollTo(document.getElementById('section0'), topPos-30, 90 * window.innerHeight/100);   
}
    
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};





przejd??DoWr????b.addEventListener('click', () => {
    if (isCheckBoxFull === true){
        localStorage.setItem('checkFirstScreenTrue', JSON.stringify(1));
    }else{
    console.log("Ok1.")};
    document.getElementById("firstScreen").scrollIntoView();
});

wr????DoPocz??tku.addEventListener('click', () => {
    resetValues();
    showMenu.classList.add('menuScrollDown');
    showMenu.classList.remove('menuScrollUp');
    menuTopLine.classList.remove('menuTopLineTransition');
    menuMiddleLine.classList.remove('menuMiddleLineTransition');
    menuBottomLine.classList.remove('menuBottomLineTransition');
    setTimeout (function () {
        showMenu.style.display = "none";
        }, 900);
    console.log(localStorage.getItem('checkFirstScreenTrue'))
});

sybillaPicture.addEventListener('click', () => {
    resetValues()
});


changeFont.addEventListener('click',() => {
    if (body.style.fontFamily == "unifrakturmaguntiabook"){
        body.style.fontFamily = "beryliumregular";
        body.style.lineHeight = "1.1";
        // body.classList.add("modernFontProprties");
        // body.classList.remove("frakturFontProperties");
        tekstUlubionejWr????by.classList.add("modernFontProprties");
        tekstUlubionejWr????by.classList.remove("frakturFontProperties");
        insertAuguryText.classList.add("modernFontProprties");
        insertAuguryText.classList.remove("frakturFontProperties"); 
        opisPostaci.classList.add("modernFontProprties");
        opisPostaci.classList.remove("frakturFontProperties");
        changeFont.innerHTML = "<u>Zmie?? kr??j na fraktur??</u>";
        changeFont.style.fontSize = "22px"
        changeFont.style.fontFamily = "unifrakturmaguntiabook";
    } else {
        body.style.fontFamily = "unifrakturmaguntiabook";
        // body.classList.add("frakturFontProperties");
        // body.classList.remove("modernFontProprties");
        tekstUlubionejWr????by.classList.remove("modernFontProprties");
        tekstUlubionejWr????by.classList.add("frakturFontProperties");
        insertAuguryText.classList.remove("modernFontProprties");
        insertAuguryText.classList.add("frakturFontProperties");
        opisPostaci.classList.remove("modernFontProprties");
        opisPostaci.classList.add("frakturFontProperties");
        changeFont.innerHTML = "<u>Zmnie?? kr??j na antykw??</u>";
        changeFont.style.fontFamily = "beryliumregular";
        changeFont.style.fontSize = "18px"
    }
});

function showSecondMenu (){
    menuSecondContent.style.display = "flex"
}

function hideSecondMenu (){
    menuSecondContent.style.display = "none"
}

document.querySelectorAll('.menuItem').forEach(item => {
    item.addEventListener('click', event => {
        showSecondMenu()
        menuSecondContent.classList.add('menuScrollLeft')
        menuSecondContent.classList.remove('menuScrollRight')
    })
});

goBackDiv.addEventListener ('click', event => {
    menuSecondContent.classList.add('menuScrollRight')
    menuSecondContent.classList.remove('menuScrollLeft')
    setTimeout (function () {
        menuSecondContent.style.display = "none";
        removeAllChildNodes(tekstUlubionejWr????by);
        secondMenuContent.style.display = "flex";
        tekstUlubionejWr????by.style.display = "none";
        }, 800);
});

function removeAllChildNodes(parent) {
    // ulubioneWr????by1.style.display = "none";
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }};

zasadyGry.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent);
    secondMenuContent.innerHTML = '<img src="nauka.png" style="width: 98%"><div>Gracz na pocz??tku wybiera jedn?? z 21 wr????b, a nast??pnie jest kierowany do ko??a fortuny. By zakr??ci?? ko??em, nale??y klikn???? przycisk "Zakr????". Po zakr??ceniu ko??a pojawia si?? ekran z postaci??, na kt??r?? nale??y nacisn????, by przej???? dalej. Kolejne ko??o obraca si?? automatycznie, by pozna?? wr????b??, nale??y nacisn???? w tarcz?? ko??a.</div>';
});


oAplikacji.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent)
    secondMenuContent.innerHTML += '<img src="dmuchacz.png"><div>Niniejsza aplikacja jest pr??b?? przeniesienia do ??wiata wirtualnego pochodz??cego z lat ok. 1561???1577 <a target="_blank" href="https://www.digitale-sammlungen.de/en/view/bsb00117329?page=1,2" >wydania ksi????ki</a> do wr????b Stanis??awa z Bochnie. Mechanika rozgrywki zaproponowana przez XVI wiecznego tw??rc?? pozosta??a niezmieniona, gracz dalej wybiera jedno z 21  pyta??, a nast??pnie przechodzi przez kolejne etapy do przepowiedni. Jednak zamiast rzuca?? fizycznymi ko????mi, powierza sw??j los cyberbogini, kt??ra obraca ko??o fortuny w wybrane przez siebie miejsce.<br><br>Projekt aplikacji nawi??zuje do krakowskiego wydania <i>Fortuny albo szcz????cia</i>, kt??re zdigitalizowane zosta??o przez Bayerische Staatsbibliothek. T??a stanowi?? oryginalne karty edycji Drukarni ??azarzowej, elementy interfejsu zbudowane s?? z wykorzystanych przez ??azarza Andrysowicza drzeworyt??w, obydwa fonty wyst??puj??ce w apliakcji: UnifrakturMaguntia i Berylium nawi??zuj?? do dawnych kroj??w pisma.<br><br>Zmodernizowany tekst przepowiedni, pytania oraz nazwy os??b i miejsc podane zosta??y za wspomnianym wydaniem. Pokuszono si?? o przybli??enie postaci uj??tych na drzeworytach i wyja??nienie kontekstu, jaki wprowadzaj??. Wszystkie informacje o oryginalnej <i>Fortunie</i> podawane s?? za wydaniem <a target="_blank" href="https://ksiegarnia.pwn.pl/Fortuna-albo-szczescie,130842766,p.html"><i>Fortuny</i> autorstwa prof. Justyny Kilia??czyk-Zi??by</a>.<br><br>Histori?? powstania aplikacji prze??ledzi?? mo??na w <a>serwisie Behance.net</a><br><br>Dzi??kuj?? wszystkim, kt??rzy pomogli mi w tym projekcie, szczeg??lnie moim siostrom i mojej Laurce.<br><br>Jan ??aborowski 2022<br><a href="mailto:zaborowski.janko@gmail.com">zaborowski.janko@gmail.com</a></div>'
});

odAutora.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent)
secondMenuContent.innerHTML = '<img src="nauka.png" style="width: 98%"><h2 style="padding-bottom: 15px">Wprowadzaj??ce teksty Stanis??awa z Bochnie</h2><h4>Nauka szukania w tych ksi??gach</h4><div>Kto b??dzie chcia?? mie?? krotofil?? na tych ksi??gach, patrzaj??e napis??w nad pierwszymi ko??y, kt??re s?? z kostkami, a ptaki we ??rzodku maj??. O czym b??dzie napis nad kt??rym ko??em, o to mie?? dwiema kostkami na onym??e kole, a tam kt??ry?? szanc na dwu kostkach stanie, ten w kole najdziesz i przecz??iesz, co napisano przeciwko onemu szancowi. Tedy?? uka??e do drugich k????, kt??re s?? z zwierz??ty, szuka?? kt??regokolwiek miasteczka. Tam, gdy je najdziesz, przeczci, co przeciwko onemu miasteczku napisano, tedy?? za?? uka??e do Sybille kt??rejkolwiek, wiersz kt??rykolwiek, a tam si?? dowiesz, co si?? w tej rzeczy stanie, o kt??r???? miota??. Na przyk??ad: je??li chcesz wiedzie??, d??ugo li ??yw b??dziesz, rzu????e dwiema kostkami na kole, w kt??rym jest g??siorek. Je??li zezy stan??, tedy id?? do ko??a, na kt??rym jest sobol, a szukaj miasta Bochnie, potym id?? do Sybile pierwszej (bo?? tam uka??e), przecz??isz wiersz pierwszy,  tak si?? dowiesz, d??ugo li ??yw masz by??. Tym??e te?? obyczajem insze rzeczy, mietaj??c, sprawowa?? b??dziesz. A pami??taj, ka??dy, c????cikolwiek na tych ksi????kach stanie, b??d?? dobrze, b??d?? ??le, aby?? tey nie wierzy??, ale to mia?? za krotofil?? a za ??miech.</div><h4>Ka??demu, kt??ry tych ksi????ek u??ywa?? ku krotofili b??dzie </h4><div id="wierszOdAutora" class ="modernFontProprties">Aby ka??dy wiedzie?? o tym raczy??,<br/>Kt??rykolwiek ty ksi????ki b??dzie baczy??,<br/>I?? prze krotofile s?? z??o??one, <br/>Od Stanis??awa z Bochnie wymy??lone.<br/>Nie trzeba w nich nadzieje pok??ada??,<br/>Cho?? komu dobrze b??dzie przypada??,<br/>Bo miejsca nie maj?? gus??a, czary<br/>Mi??dzy lud??mi krze??cija??skej wiary.<br/>A je??li te?? komu co ??miesznego stanie,<br/>Nie m??w: ???Bodaj zabi?? za twoje sk??adanie???.</div>'
});


oFortunie.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent)
secondMenuContent.innerHTML = '<img src="dmuchacz.png"><div>Stanis??aw z Bochnie, zwany te?? Stanis??awem Kleryk??, by?? polskim renesansowym poet??. Pochodzi?? ze ??redniozamo??nej rodziny mieszcza??skiej. Od 1519 roku odbywa?? studia wy??sze na Akademii Krakowskiej, gdzie najprawdopodobniej zetkn???? si?? z tw??rczo??ci?? autor??w takich jak: Andrzej Frycz Modrzewski, Miko??aj Rej, Stanis??aw Hozjusz. Od 1529 roku zwi??za?? si?? z dworem kr??lewskim Zygmunta Starego, szybko robi??c karier??. Wed??ug niekt??rych, np. prof. Henryka Barycza, to w??a??nie Stanis??awowi z Bochnie powinno przys??ugiwa?? miano ojca nowo??ytnej literatury polskiej. Do dzi?? jednak zachowa??o si?? jednak bardzo niewiele utwor??w poety.</br>Jednym z kilku dzie??, kt??re dotar??y do naszych czas??w, jest w??a??nie <i>Fortuna</i>. Jej pierwodruk mia?? miejsce najprawdopodobniej ok. roku 1531, nie znamy jednak ??adnego jego fragmentu. Ksi????ka ta wpisuje si?? w nurt literatury wr????biarskiej, kt??rej tradycja si??ga a?? do czas??w antycznych i kt??ra osi??gn????a niezwyk???? popularno???? w ??redniowieczu. ??wiadcz?? o tym wielokrotne wznowienia <i>Fortuny</i>, kt??re szybko zaczytywano. Zabawne przepowiednie czytali zar??wno mieszanie, jak i rzemie??lnicy mieszkaj??cy z dala od miast, kobiety, jak i m????czy??ni. By??a to jedna z pierwszych ksi????ek skierowanych do szerokiej publiczno??ci oraz jedna z pierwszych ksi????ek w ca??o??ci napisanych w j??zyku polskim.</br>Po wi??cej informacji o tej arcyciekawej ksi????ce zapraszam do <a target="_blank" href="https://pressto.amu.edu.pl/index.php/b/article/download/27954/28187">artyku??u prof. Justyny Kilia??czyk-Zi??by</a> oraz do wydania <i>Fortuny</i> w jej opracowaniu (Krak??w, 2015).</div>'
});



// koniec menu



function resetValues (){
    document.getElementById("firstScreen").scrollIntoView();
    displayMessage.innerHTML = "";
    // displayNumber.innerHTML = "-";
    winningSymbolNr=0;
    deg=0;
    actualDeg=0;
    degAnim=0;
    goToSecondWheelScreen.style.display = "none"
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    wheel.style.transition = 'none';
    startButton.style.pointerEvents = 'auto';
    displayAuguryCoordinates.innerHTML = '';
    displayAuguryCoordinates.style.display = 'none';
    clickOnAnimal.innerHTML="";
    clickOnAnimal.style.display="none";
    setTimeout (function () {
        sybillaName.style.display = "none";
        sybillaPictureDiv.style.display = "none";          
        insertAuguryText.style.display = "none";
        goBackInfo.style.display = "none";
        sybillaPicture.src = "";
        sybillaName.innerHTML = "";
        insertAuguryText.innerHTML="";
        }, 300);
}

goToAuguryList.addEventListener('click',() => {
    resetValues();
});

function getWheel(wheelNumber){
    document.getElementById("imageid").src=`wheels/wheelcut${wheelNumber}.png`;
    currentWheelSelected = wheelNumber;
    document.getElementById("secondScreen").scrollIntoView();
    displayMessage.innerHTML = "-";
    winningSymbolNr=0;
    goToSecondWheelScreen.style.display = "none";
    firstScreenH1.innerHTML = firstScreenTitles[wheelNumber];
    
}


function przejd??DalejZLandingScreena(){
    document.getElementById("secondScreen").scrollIntoView();

}


(function wheelSpin() {

 
    let deg = 0;
    let zoneSize = 17.14285714285714; // deg


    const handleWin = (actualDeg) => {
        winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    }

    goButton.style.pointerEvents = 'none';


    startButton.addEventListener('click',() => {
        displayMessage.innerHTML = "-";
        startButton.style.pointerEvents = 'none';
        goButton.style.pointerEvents = 'none';
        deg = Math.floor(1000 + Math.random() * 2000);
        wheel.style.transition = 'all 2s ease';
        wheel.style.transform = `rotate(${deg}deg)`;
        dmuch1.style.display = "block";
    });

    wheel.addEventListener('transitionend', () => {
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
        handleWin(actualDeg);
        // Pokazanie numer??w ko??ci
        // displayNumber.innerHTML = symbolZones[winningSymbolNr];
        // Tekst z tarczy pierwszej;
        messageChoose = wheelText[currentWheelSelected][winningSymbolNr];
        displayMessage.innerHTML = messageChoose;
       // Zmiana tekstu w buttonie do przej??cia do trzeciej sekcji
        clickCharacterText.innerHTML = `*<span class="element">Kliknij w obrazek</span> ${postaci[currentWheelSelected]}, by uda?? si?? do miasta`;
        //Poka?? bohatera
        characterImage.src = `characterPictures/characterPicture${currentWheelSelected}.png`;
        goButton.style.pointerEvents = 'auto';
        opisPostaci.innerHTML = `${opisyPostaci[currentWheelSelected]}`;
        // displayAugury.innerHTML = `${tekstTestowy1[currentWheelSelected][winningSymbolNr]}`;
        //Wy??apanie zwier??cia i miasta
        animalSplit = messageChoose.split(' ');
        animal = animalSplit[2];
        citySplit = messageChoose.split(' ');
        city = citySplit[4];

        currentCity=animalWheels[animal][city];
        document.getElementById("secondWheel").src=`animalWheels/${animal}.png`;

        setTimeout (function () {
            goToSecondWheelScreen.style.display = "flex";
            startButton.style.pointerEvents = 'auto';
            }, 1000);
        SecondWheelScreenGoBack.addEventListener('click',() => {
            goToSecondWheelScreen.style.display = "none";
            });
        });

        // Ekran 3
        characterImage.addEventListener('click',() => {
            animalWheel.style.pointerEvents = 'none';
            document.getElementById("thirdScreen").scrollIntoView();
        setTimeout (function () {
            degAnim = zoneSize*currentCity[1];
            animalWheel.style.transition = 'all 2s ease-out';
            animalWheel.style.transform = `rotate(${-degAnim}deg)`;
            }, 1500);
            console.log(currentCity[0]);
            animalWheel.style.cursor = "default";
        });

        animalWheel.addEventListener('transitionend', () => {
            animalWheel.style.pointerEvents = 'auto'
            animalWheel.style.cursor = "pointer"
            displayAuguryCoordinates.innerHTML=`${currentCity[0]}`;
            clickOnAnimal.innerHTML=`<span><span class="element">*Kliknij w tarcz??</span> ${animal}, by przje???? do Sybilli i pozna?? swoj?? przysz??o????</span>`;
            clickOnAnimal.style.display="flex";
            displayAuguryCoordinates.style.display = "flex";
            animalWheel.addEventListener('click',() => {
                document.getElementById("fourthScreen").scrollIntoView();
                //Wzi??cie numer??w Sybilli i wierszy
                sybillaSplit=currentCity[0].split(' ');
                sybillaNr=sybillaSplit[1];
                wierszNr=sybillaSplit[3];
                slicedSybillaNr=sybillaNr.slice(0,-1);
                slicedWierszNr=wierszNr.slice(0,-1);
                //Przygotowanie do ulubionch
                numbersCheck = (slicedSybillaNr + '-' + slicedWierszNr);
                zmie??Serce()

                

                //Pokazanie Diva z wr????b?? i obrazka
                convertSybillaNr = sybillaNrConversion[slicedSybillaNr];
                sybillaPicture.src = `characterPictures/characterPicture${convertSybillaNr}.png`;
                sybillaName.innerHTML = sybillaNames[slicedSybillaNr];
                insertAuguryText.innerHTML=wr????by[slicedSybillaNr][slicedWierszNr];
                
                setTimeout (function () {
                    sybillaName.style.display = "flex";
                    }, 200);
                setTimeout (function () {
                        sybillaPictureDiv.style.display = "flex";
                    }, 600); 
                setTimeout (function () {
                        insertAuguryText.style.display = "flex";
                    }, 1100);
                    setTimeout (function () {
                        goBackInfo.style.display = "flex"
                    }, 1200);
                    
            });  

            
        });

        // Dodaj do ulubionych

items = [];
// if (itemsRetrieved.includes(numbersCheck)){
//     console.log("Jest")
// }else{
//     // Tu zdobi?? tak, ??eby blokowa??o 
// };

function dodaj (){
if (itemsRetrievedNew?.includes(numbersCheck)){
    console.log(numbersCheck);
    heartEmpty.style.display = "block";
    heartFull.style.display = "none";
}else{
    console.log(numbersCheck); 
    console.log(itemsRetrievedNew);
    heartEmpty.style.display = "none";
    heartFull.style.display = "block";
    itemsRetrievedNew.push(slicedSybillaNr + '-' + slicedWierszNr);
    localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
}};  

function sprawdzenie () {
    checkStorage = localStorage.getItem('list');
    if (checkStorage === null){
        localStorage.setItem('list', JSON.stringify(items));
        console.log("Lista nie istnieje, dodano")
    }else{
        console.log("Lista istnieje")
    }
}

function dodajDoUlubionych() {
        sprawdzenie ();
        itemsRetrievedNew = JSON.parse(localStorage.getItem('list'));
        dodaj ();
    };

function usu??ZUlubionych() {
    let itemsRetrievedNew = JSON.parse(localStorage.getItem('list'));
    let index = itemsRetrievedNew.indexOf(slicedSybillaNr + "-" + slicedWierszNr);
    itemsRetrievedNew.splice(index, 1);
    console.log(index)
    localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
    console.log("Ok.");
    heartEmpty.style.display = "block";
    heartFull.style.display = "none";
}

// usu??.addEven tListener('click',() => {
//     window.localStorage.clear();
//     console.log("Usuni??to pami????");
//     sprawdzenie();
//     zmie??Serce();
// });  

heartEmpty.addEventListener('click',() => {
    dodajDoUlubionych ()
});  

heartFull.addEventListener('click',() => {
    usu??ZUlubionych()
});  

ulubioneWr????by.addEventListener('click',() => {
    removeAllChildNodes(secondMenuContent);
    tekstUlubionejWr????by.style.display = "flex";
    secondMenuContent.style.display = "none";
    poka??UlubioneP??tla()
})

})();
    
function myFunction(a) {
    let itemsRetrievedNew = JSON.parse(localStorage.getItem('list'));;
    let test = itemsRetrievedNew.splice(a, 1);
    localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
    removeAllChildNodes(tekstUlubionejWr????by);
    poka??UlubioneP??tla()
    console.log("Ok.");    
}

function poka??Ulubione(){
    arrayUlubione = window.localStorage.getItem('list');
    arrayFromString = JSON.parse(arrayUlubione.split(','));
    console.log(arrayFromString);
    let ulubioneDiv;
    let ulubioneDivContainer;
    let ulubioneDivName;
    let ulubioneDivContent;

    arrayFromString.forEach(function (objectNumber, index) {

        let splittedNumbers = objectNumber.split('-');
        console.log(splittedNumbers);
        splittedNumberSybilla = splittedNumbers[0];
        splittedNumberWiersz = splittedNumbers[1];
        
        ulubioneDiv = document.createElement('div');
        ulubioneDiv.className = 'results';
        ulubioneDiv.id=`results${index}`

        ulubioneDivName = document.createElement('span');
        ulubioneDivName.innerHTML+=`Sybilla ${splittedNumberSybilla}, wiersz ${splittedNumberWiersz}:<br/>`;
        ulubioneDivName.className = 'ulubioneDivName';
        ulubioneDivName.innerHTML += `<img src='Del.png' id='deleteImg${index}' onclick = 'myFunction(${index})' style='width: 20px; height: 20px'>`;
        
        ulubioneDivContent = document.createElement('span');
        ulubioneDivContent.className = 'ulubioneDivContent';
        ulubioneDivContent.innerHTML+=wr????by[splittedNumberSybilla][splittedNumberWiersz];

        tekstUlubionejWr????by.appendChild(ulubioneDiv);
        document.querySelector(`#results${index}`).appendChild(ulubioneDivName);
        document.querySelector(`#results${index}`).appendChild(ulubioneDivContent);
        console.log("Halo jak")
        });



        function usu??ZUlubionychZUlubionych() {
            arrayFromString.splice(index, 1);

            // localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
        }
};

function zmie??Serce (){
    itemsRetrieved = JSON.parse(localStorage.getItem('list'));

    if (itemsRetrieved?.includes(numbersCheck)){
        console.log("Jest");
        heartEmpty.style.display = "none";
        heartFull.style.display = "block";
    }else{
        console.log("Nie jest");
        heartEmpty.style.display = "block";
        heartFull.style.display = "none";
    }};

function poka??UlubioneP??tla(){
    console.log(localStorage.getItem('list'))
    if (localStorage.getItem('list') === "[]"){
        tekstUlubionejWr????by.innerHTML = "<h4>Nie masz ulubionych wr????b. Dodaj je za pomoc?? serduszka w prawym g??rnym rogu Sybilli.<h4>";
        console.log("Ulubionep??tlaop1")
    }else{
    poka??Ulubione()}
    zmie??Serce()}



    const symbolZones = {
        1: "1 1",
        2: "2 1",
        3: "2 2",
        4: "3 1",
        5: "3 2",
        6: "3 3",
        7: "4 1",
        8: "4 2",
        9: "4 3",
        10: "4 4",
        11: "5 1",
        12: "5 2",
        13: "5 3",
        14: "5 4",
        15: "5 5",
        16: "6 1",
        17: "6 2",
        18: "6 3",
        19: "6 4",
        20: "6 5",
        21: "6 6"
    }    

    const tekstTestowy1 = {
        1:{
            0: "Zakr???? ko??em",
            2: "Lorem 1 ipsum 2",
            3: "Lorem 1 ipsum 3",
            4: "Lorem 1 ipsum 4",
            5: "Lorem 1 ipsum 5",
            6: "Lorem 1 ipsum 6",
            7: "Lorem 1 ipsum 7",
            8: "Lorem 1 ipsum 8",
            9: "Lorem 1 ipsum 9",
            1: "Lorem 1 ipsum 1",
            10: "Lorem 1 ipsum 10",
            11: "Lorem 1 ipsum 11",
            12: "Lorem 1 ipsum 12",
            13: "Lorem 1 ipsum 13",
            14: "Lorem 1 ipsum 14",
            15: "Lorem 1 ipsum 15",
            16: "Lorem 1 ipsum 16",
            17: "Lorem 1 ipsum 17",
            18: "Lorem 1 ipsum 18",
            19: "Lorem 1 ipsum 19",
            20: "Lorem 1 ipsum 20",
            21: "Lorem 1 ipsum 21",
            },
        2:{
            0: "Zakr???? ko??em",
            1: "Lorem 2 ipsum 1",
            2: "Lorem 2 ipsum 2",
            3: "Lorem 2 ipsum 3",
            4: "Lorem 2 ipsum 4",
            5: "Lorem 2 ipsum 5",
            6: "Lorem 2 ipsum 6",
            7: "Lorem 2 ipsum 7",
            8: "Lorem 2 ipsum 8",
            9: "Lorem 2 ipsum 9",
            10: "Lorem 2 ipsum 10",
            11: "Lorem 2 ipsum 11",
            12: "Lorem 2 ipsum 12",
            13: "Lorem 2 ipsum 13",
            14: "Lorem 2 ipsum 14",
            15: "Lorem 2 ipsum 15",
            16: "Lorem 2 ipsum 16",
            17: "Lorem 2 ipsum 17",
            18: "Lorem 2 ipsum 18",
            19: "Lorem 2 ipsum 19",
            20: "Lorem 2 ipsum 20",
            21: "Lorem 2 ipsum 21",
            }
    }

    const postaci = {
        1: "Nestora",
        2: "Num?? Pompiliusza",
        3: "Tullusa Hostiliusza",
        4: "Tymoteusza",
        5: "Fabiusza",
        6: "Alcestisa i Admetusza",
        7: "Orestesa i Pyladesa",
        8: "Narsesa",
        9: "Kalchasa",
        10: "Gygesa",
        11: "Euryjalusa",
        12: "Ventidiusa Bassusa",
        13: "Niobe",
        14: "Helen??",
        15: "Aspazj??",
        16: "Chinoe",
        17: "Krezusa",
        18: "Toraniusa",
        19: "Jazona",
        20: "Polikratesa",
        21: "??mier??",
    }

    const wheelText = {
            1: { //Tarcza 1 G??siorek
                1: "Id?? do Kozy mi??st?? Osmolin", // 1 1
                2: "Id?? do Bar??n?? mi??st?? Opol??", // 1 2
                3: "Id?? do Borsuk?? mi??st?? Pod??ycz??", // 2 2
                4: "Id?? do Tchorz?? mi??st?? Swierc??w", // 1 3
                5: "Id?? do Wiewi??rki miast Przeworsko", // 2 3
                6: "Id?? do L????ice mi??st?? Striy", // 3 3
                7: "Id?? do Z??i??c?? mi??st?? Mie????isko", // 1 4
                8: "Id?? do Krzeczk?? mi??st?? Z??wichost", // 2 4
                9: "Id?? do Nowogr??dk?? mi??st?? Rzesz??w", // 3 4
                10: "Id?? do Rosomak?? mi??st?? Szelech??w", // 4 4
                11: "Id?? do Kr??lik?? mi??st?? Szyrniki", // 1 5
                12: "Id?? do Popielice mi??st?? Brz????ek", // 2 5
                13: "Id?? do Gronost??i?? mi??st?? Kozprza", // 3 5
                14: "Id?? do Nied??wiedzia mi??st?? Sanok", // 4 5
                15: "Id?? do Wydry mi??st?? Lutomiersko", // 5 5
                16: "Id?? do Liszki mi??st?? Czyrsk", // 1 6
                17: "Id?? do Wilk?? mi??st?? Cz??rnk??w", // 2 6
                18: "Id?? do Kuny mi??st?? Zyd??cz??w", // 3 6
                19: "Id?? do Bobru mi??st?? Chmielnik", // 4 6
                20: "Id?? do Rysi?? mi??st?? Grodek", // 5 6
                21: "Id?? do Sobol?? mi??st?? Bochnia" // 6 6
            },

            2: { //Tarcza 2 Go????b
                1: "Id?? do Sobol?? mi??st?? Ko??irynek",
                2: "Id?? do Kozy mi??st?? Ro??an",
                3: "Id?? do Bar??n?? mi??st?? Mogilnic??",
                4: "Id?? do Borsuk?? mi??st?? St????yc??",
                5: "Id?? do Tchorz?? miasta Ro??tyn",
                6: "Id?? do Wiewi??rki mi??st?? Striyk??w",
                7: "Id?? do L????ice mi??st?? Kulit??w",
                8: "Id?? do Z??i??c?? mi??st?? O??ieczno",
                9: "Id?? do Krzeczk?? mi??st?? Rubiesz??w",
                10: "Id?? do Nowogr??dk?? mi??st?? Urz??d??w",
                11: "Id?? do Rosomak?? mi??st?? W??wrzinczyce",
                12: "Id?? do Kr??lik?? mi??st?? Tuchola",
                13: "Id?? do Popielice mi??st?? Che??m",
                14: "Id?? do Gronost??i?? mi??st?? Szczyrcz",
                15: "Id?? do Nied??wiedzia mi??st?? P??niec",
                16: "Id?? do Wydry mi??st?? Ciechan??w",
                17: "Id?? do Liszki mi??st?? Lepno",
                18: "Id?? do Wilk?? mi??st?? Legonice",
                19: "Id?? do Kuny mi??st?? Op??towice",
                20: "Id?? do Bobru mi??st?? Be????yce",
                21: "Id?? do Rysi?? mi??st?? Fordan"
            },

            3: { //Tarcza 1 Orze??
                1: "Id?? do Rysi?? mi??st?? ??ubin", // 1 1
                2: "Id?? do Sobol?? mi??st?? K??szk??w", // 1 2
                3: "Id?? do Kozy mi??st?? Sz??rk??w", // 2 2
                4: "Id?? do Bar??n?? mi??st?? Rypin", // 1 3
                5: "Id?? do Borsuk?? miast Buk", // 2 3
                6: "Id?? do Tchorz?? mi??st?? Zwole??", // 3 3
                7: "Id?? do Wiewi??rki mi??st?? Rzemie??", // 1 4
                8: "Id?? do L????ice mi??st?? Leszko", // 2 4
                9: "Id?? do Z??i??c?? mi??st?? Radomskie", // 3 4
                10: "Id?? do Krzeczk?? mi??st?? Proszkowice", // 4 4
                11: "Id?? do Nowogr??dk?? mi??st?? Tr??bowla", // 1 5
                12: "Id?? do Rosomak?? mi??st?? Opalenic??", // 2 5
                13: "Id?? do Kr??lik?? mi??st?? Oleszko", // 3 5
                14: "Id?? do Popielice mi??st?? Szczebrzeszyn", // 4 5
                15: "Id?? do Gronost??i?? mi??st?? Wolborz", // 5 5
                16: "Id?? do Nied??wiedzia mi??st?? R??w??", // 1 6
                17: "Id?? do Wydry mi??st?? G??rwolin", // 2 6
                18: "Id?? do Liszki mi??st?? Bi??le", // 3 6
                19: "Id?? do Wilk?? mi??st?? G??bic??", // 4 6
                20: "Id?? do Kuny mi??st?? Syroczko", // 5 6
                21: "Id?? do Bobru mi??st?? Kobylno" // 6 6
            },

            4: { //Tarcza 4 P??pug??
                1: "Id?? do Wilk?? mi??st?? Op??towek", // 1 1
                2: "Id?? do Kuny mi??st?? Krzesz??w", // 1 2
                3: "Id?? do Bobru mi??st?? Bircza", // 2 2
                4: "Id?? do Rysi?? mi??st?? Dobczyce", // 1 3
                5: "Id?? do Sobol?? miast?? Go??og??ry", // 2 3
                6: "Id?? do Kozy mi??st?? Solec", // 3 3
                7: "Id?? do Bar??n?? mi??st?? Wid??w??", // 1 4
                8: "Id?? do Borsuk?? mi??st?? Krocko", // 2 4
                9: "Id?? do Tchorz?? mi??st?? Mosin??", // 3 4
                10: "Id?? do Wiewi??rki mi??st?? Wysoki??", // 4 4
                11: "Id?? do L????ice mi??st?? Boles????wiec", // 1 5
                12: "Id?? do Z??i??c?? mi??st?? Kra??nik", // 2 5
                13: "Id?? do Krzeczk?? mi??st?? Ko??o", // 3 5
                14: "Id?? do Nowogr??dk?? mi??st?? Brzysk??", // 4 5
                15: "Id?? do Rosomak?? mi??st?? Zychlin", // 5 5
                16: "Id?? do Kr??lik?? mi??st?? P??cz??n??w", // 1 6
                17: "Id?? do Popielice mi??st?? B??bimost", // 2 6
                18: "Id?? do Gronost??i?? mi??st?? Przedb??rz", // 3 6
                19: "Id?? do Nied??wiedzia mi??st?? Ostrowia", // 4 6
                20: "Id?? do Wydry mi??st?? Drzewic??", // 5 6
                21: "Id?? do Liszki mi??st?? Gosty??" // 6 6
            },

            5: { //Tarcza 5 S??owik
                1: "Id?? do Nied??wiedzia mi??st?? Pako????", // 1 1
                2: "Id?? do Wydry mi??st?? Inow????dz", // 1 2
                3: "Id?? do Liszki mi??st?? Msk??w", // 2 2
                4: "Id?? do Wilk?? mi??st?? M??rgonin", // 1 3
                5: "Id?? do Kuny miast?? ????biszyn", // 2 3
                6: "Id?? do Bobru mi??st?? Dubiecko", // 3 3
                7: "Id?? do Rysi?? mi??st?? K??od??w??", // 1 4
                8: "Id?? do Sobol?? mi??st?? Brzostek", // 2 4
                9: "Id?? do Kozy mi??st?? Sokal", // 3 4
                10: "Id?? do Bar??n?? mi??st?? Smotrzyc", // 4 4
                11: "Id?? do Borsuk?? mi??st?? W??w??lnic??", // 1 5
                12: "Id?? do Tchorz?? mi??st?? Grzegorz??w", // 2 5
                13: "Id?? do Wiewi??rki mi??st?? Klecz??w", // 3 5
                14: "Id?? do L????ice mi??st?? Kufl??w", // 4 5
                15: "Id?? do Z??i??c?? mi??st?? B??dzy??", // 5 5
                16: "Id?? do Krzeczk?? mi??st?? W??od??imi??rz", // 1 6
                17: "Id?? do Nowogr??dk?? mi??st?? Ho??bok", // 2 6
                18: "Id?? do Rosomak?? mi??st?? Szyszk??w", // 3 6
                19: "Id?? do Kr??lik?? mi??st?? Tyr??w??", // 4 6
                20: "Id?? do Popielice mi??st?? W??soczyn", // 5 6
                21: "Id?? do Gronost??i?? mi??st?? B??rczyn" // 6 6
            },

            6: { //Tarcza 6 Wron??
                1: "Id?? do Bobru mi??st?? Strzelec", // 1 1
                2: "Id?? do Rysi?? mi??st?? S????wk??w", // 1 2
                3: "Id?? do Sobol?? mi??st?? Kwiatk??w", // 2 2
                4: "Id?? do Kozy mi??st?? Kurnik", // 1 3
                5: "Id?? do Bar??n?? miast?? K??mionk??", // 2 3
                6: "Id?? do Borsuk?? mi??st?? Sz??motu??y", // 3 3
                7: "Id?? do Tchorz?? mi??st?? Ko??omyia", // 1 4
                8: "Id?? do Wiewi??rki mi??st?? St??ro??cianki", // 2 4
                9: "Id?? do L????ice mi??st?? J??s??owiec", // 3 4
                10: "Id?? do Z??i??c?? mi??st?? Go????in", // 4 4
                11: "Id?? do Krzeczk?? mi??st?? Chodecz", // 1 5
                12: "Id?? do Nowogr??dk?? mi??st?? Gieln??w", // 2 5
                13: "Id?? do Rosomak?? mi??st?? Ch??ciny", // 3 5
                14: "Id?? do Kr??lik?? mi??st?? R??dz??n??w", // 4 5
                15: "Id?? do Popielice mi??st?? Mielec", // 5 5
                16: "Id?? do Gronost??i?? mi??st?? Kur??w", // 1 6
                17: "Id?? do Nied??wiedzia mi??st?? K??obucko", // 2 6
                18: "Id?? do Wydry mi??st?? Strze????w", // 3 6
                19: "Id?? do Liszki mi??st?? Z??bno", // 4 6
                20: "Id?? do Wilk?? mi??st?? Pi??tek", // 5 6
                21: "Id?? do Kuny mi??st?? Borek" // 6 6
            },

            7: { //Tarcza 7 Synog??rlic??
                1: "Id?? do Liszki mi??st?? Brzysk??", // 1 1
                2: "Id?? do Wilk?? mi??st?? Kostrzyn", // 1 2
                3: "Id?? do Kuny mi??st?? Zw??radz", // 2 2
                4: "Id?? do Bobru mi??st?? Secemin", // 1 3
                5: "Id?? do Rysi?? miast?? Hucha??", // 2 3
                6: "Id?? do Sobol?? mi??st?? Zduny", // 3 3
                7: "Id?? do Kozy mi??st?? Rypno", // 1 4
                8: "Id?? do Bar??n?? mi??st?? W??rt??", // 2 4
                9: "Id?? do Borsuk?? mi??st?? Trzemeszno", // 3 4
                10: "Id?? do Tchorz?? mi??st?? Szr??kowo", // 4 4
                11: "Id?? do Wiewi??rki mi??st?? Liw", // 1 5
                12: "Id?? do L????ice mi??st?? Sulei??w", // 2 5
                13: "Id?? do Z??i??c?? mi??st?? W??sosze", // 3 5
                14: "Id?? do Krzeczk?? mi??st?? W??kocko", // 4 5
                15: "Id?? do Nowogr??dk?? mi??st?? Sie??iech??w", // 5 5
                16: "Id?? do Rosomak?? mi??st?? Kolno", // 1 6
                17: "Id?? do Kr??lik?? mi??st?? Rychwa??", // 2 6
                18: "Id?? do Popielice mi??st?? Sielu??", // 3 6
                19: "Id?? do Gronost??i?? mi??st?? Gorzk??w", // 4 6
                20: "Id?? do Nied??wiedzia mi??st?? Wrze??nia", // 5 6
                21: "Id?? do Wydry mi??st?? Ko??ieg??owy" // 6 6
            },
            
            8: { //Tarcza 8 Srok??
                1: "Id?? do Wydry mi??st?? Ryszkowo", // 1 1
                2: "Id?? do Liszki mi??st?? S??mbor", // 1 2
                3: "Id?? do Wilk?? mi??st?? Ni????nkowice", // 2 2
                4: "Id?? do Kuny mi??st?? G??rk??", // 1 3
                5: "Id?? do Bobru miast?? Lubomla", // 2 3
                6: "Id?? do Rysi?? mi??st?? B??bic??", // 3 3
                7: "Id?? do Sobol?? mi??st?? D??ierg??w", // 1 4
                8: "Id?? do Kozy mi??st?? W??growiec", // 2 4
                9: "Id?? do Bar??n?? mi??st?? Pokrzywnic??", // 3 4
                10: "Id?? do Borsuk?? mi??st?? Skrzynno", // 4 4
                11: "Id?? do Tchorz?? mi??st?? Niebylec", // 1 5
                12: "Id?? do Wiewi??rki mi??st?? S??pelbork", // 2 5
                13: "Id?? do L????ice mi??st?? Den??w", // 3 5
                14: "Id?? do Z??i??c?? mi??st?? Grod??ec", // 4 5
                15: "Id?? do Krzeczk?? mi??st?? S??upia", // 5 5
                16: "Id?? do Nowogr??dk?? mi??st?? J??wor??w", // 1 6
                17: "Id?? do Rosomak?? mi??st?? Przyr??w", // 2 6
                18: "Id?? do Kr??lik?? mi??st?? Opor??w", // 3 6
                19: "Id?? do Popielice mi??st?? Staw", // 4 6
                20: "Id?? do Gronost??i?? mi??st?? Stemberg", // 5 6 ???
                21: "Id?? do Nied??wiedzia mi??st?? Z??rnowiec" // 6 6
            },
            
            9: { //Tarcza 9 Kruk
                1: "Id?? do Borsuk?? mi??st?? ??????cut", // 1 1
                2: "Id?? do Tchorz?? mi??st?? Wolbran", // 1 2
                3: "Id?? do Wiewi??rki mi??st?? J??rocin", // 2 2
                4: "Id?? do L????ice mi??st?? Kieb??ow", // 1 3
                5: "Id?? do Z??i??c?? miast?? R??ina", // 2 3
                6: "Id?? do Krzeczk?? mi??st?? Nowytarg", // 3 3
                7: "Id?? do Nowogr??dk?? mi??st?? Gowocz??w", // 1 4
                8: "Id?? do Rosomak?? mi??st?? Trz??i??l", // 2 4
                9: "Id?? do Kr??lik?? mi??st?? B??bin", // 3 4
                10: "Id?? do Popielice mi??st?? Z????oszce", // 4 4
                11: "Id?? do Gronost??i?? mi??st?? J??rz??b", // 1 5
                12: "Id?? do Nied??wiedzia mi??st?? Bucz??c", // 2 5
                13: "Id?? do Wydry mi??st?? Horynin", // 3 5
                14: "Id?? do Liszki mi??st?? G??rno", // 4 5
                15: "Id?? do Wilk?? mi??st?? M????ogoszcz", // 5 5
                16: "Id?? do Kuny mi??st?? Z??kroczym", // 1 6
                17: "Id?? do Bobru mi??st?? Chodel", // 2 6
                18: "Id?? do Rysi?? mi??st?? La??ko", // 3 6
                19: "Id?? do Sobol?? mi??st?? Fry??lno", // 4 6
                20: "Id?? do Kozy mi??st?? Kierno??ia", // 5 6 ???
                21: "Id?? do Bar??n?? mi??st?? Szczekocin" // 6 6
            },
            
            10: { //Tarcza 10 Krogulec
                1: "Id?? do Rosomak?? mi??st?? J??ros??aw", // 1 1
                2: "Id?? do Kr??lik?? mi??st?? Ryn??rz??w", // 1 2
                3: "Id?? do Popielice mi??st?? Wyszkowo", // 2 2
                4: "Id?? do Gronost??i?? mi??st?? Przec??aw", // 1 3
                5: "Id?? do Nied??wiedzia miast?? Sleszyn", // 2 3
                6: "Id?? do Wydry mi??st?? R??tno", // 3 3
                7: "Id?? do Liszki mi??st?? Zb??szyn", // 1 4
                8: "Id?? do Wilk?? mi??st?? La??k??rz??w", // 2 4
                9: "Id?? do Kuny mi??st?? Jw??nowice", // 3 4
                10: "Id?? do Bobru mi??st?? Z??rszyn", // 4 4
                11: "Id?? do Rysi?? mi??st?? Ryd??in??", // 1 5
                12: "Id?? do Sobol?? mi??st?? Dobrogoszcz", // 2 5
                13: "Id?? do Kozy mi??st?? Koszyczki", // 3 5
                14: "Id?? do Bar??n?? mi??st?? K??nin", // 4 5
                15: "Id?? do Borsuk?? mi??st?? Che??mno", // 5 5
                16: "Id?? do Tchorz?? mi??st?? Lubacz??w", // 1 6
                17: "Id?? do Wiewi??rki mi??st?? Stawiszyn", // 2 6
                18: "Id?? do L????ice mi??st?? Wielu??", // 3 6
                19: "Id?? do Z??i??c?? mi??st?? Rywotycz", // 4 6
                20: "Id?? do Krzeczk?? mi??st?? Cz??omniki", // 5 6 ???
                21: "Id?? do Nowogr??dk?? mi??st?? G????boczek" // 6 6
            },
            
            11: { //Tarcza 11 Kur
                1: "Id?? do Nowogr??dk?? mi??st?? Janowiec", // 1 1
                2: "Id?? do Rosomak?? mi??st?? Grocholice", // 1 2
                3: "Id?? do Kr??lik?? mi??st?? Sk??pe", // 2 2
                4: "Id?? do Popielice mi??st?? Glini??ny", // 1 3
                5: "Id?? do Gronost??i?? miast?? Odal??now", // 2 3
                6: "Id?? do Nied??wiedzia mi??st?? Pilc??", // 3 3
                7: "Id?? do Wydry mi??st?? Wr??nki", // 1 4
                8: "Id?? do Liszki mi??st?? T??rczyn", // 2 4
                9: "Id?? do Wilk?? mi??st?? Kielce", // 3 4
                10: "Id?? do Kuny mi??st?? Czyrkaszno", // 4 4
                11: "Id?? do Bobru mi??st?? Olesznic??", // 1 5
                12: "Id?? do Rysi?? mi??st?? Wi??ni??", // 2 5
                13: "Id?? do Sobol?? mi??st?? Plesz??w", // 3 5
                14: "Id?? do Kozy mi??st?? K????i????", // 4 5
                15: "Id?? do Bar??n?? mi??st?? G??odkowice", // 5 5
                16: "Id?? do Borsuk?? mi??st?? Bobrowniki", // 1 6
                17: "Id?? do Tchorz?? mi??st?? Czucz", // 2 6
                18: "Id?? do Wiewi??rki mi??st?? Grzymisz??w", // 3 6
                19: "Id?? do L????ice mi??st?? Milczyce", // 4 6
                20: "Id?? do Z??i??c?? mi??st?? Pczew", // 5 6 ???
                21: "Id?? do Krzeczk?? mi??st?? H??licz" // 6 6
            },
            
            12: { //Tarcza 12 Soko??
                1: "Id?? do Krzeczk?? mi??st?? Ropczyce", // 1 1
                2: "Id?? do Nowogr??dk?? mi??st?? F??lk??w", // 1 2
                3: "Id?? do Rosomak?? mi??st?? Lopienno", // 2 2
                4: "Id?? do Kr??lik?? mi??st?? Tyczyn", // 1 3
                5: "Id?? do Popielice miast?? Lut??w", // 2 3
                6: "Id?? do Gronost??i?? mi??st?? Smigiel", // 3 3
                7: "Id?? do Nied??wiedzia mi??st?? My??sk", // 1 4
                8: "Id?? do Wydry mi??st?? Olsztynek", // 2 4
                9: "Id?? do Liszki mi??st?? P????kpie", // 3 4
                10: "Id?? do Wilk?? mi??st?? Che??m??a", // 4 4
                11: "Id?? do Kuny mi??st?? M????w??", // 1 5
                12: "Id?? do Bobru mi??st?? Mi??os??aw", // 2 5
                13: "Id?? do Rysi?? mi??st?? Tuch??w", // 3 5
                14: "Id?? do Sobol?? mi??st?? Turobin", // 4 5
                15: "Id?? do Kozy mi??st?? Wieczb??rz", // 5 5
                16: "Id?? do Bar??n?? mi??st?? Sk??win??", // 1 6
                17: "Id?? do Borsuk?? mi??st?? Szorstyn", // 2 6
                18: "Id?? do Tchorz?? mi??st?? I????w", // 3 6
                19: "Id?? do Wiewi??rki mi??st?? Smiel??w", // 4 6
                20: "Id?? do L????ice mi??st?? Zywiec", // 5 6 ???
                21: "Id?? do Z??i??c?? mi??st?? Wilczyno" // 6 6
            },
            
            13: { //Tarcza 13 Kurop??tw??
                1: "Id?? do Z??i??c?? mi??st?? Sk????a", // 1 1
                2: "Id?? do Krzeczk?? mi??st?? Namys??ow", // 1 2
                3: "Id?? do Nowogr??dk?? mi??st?? Biel??wy", // 2 2
                4: "Id?? do Rosomak?? mi??st?? Ko??min", // 1 3
                5: "Id?? do Kr??lik?? miast?? Wil??n??w", // 2 3
                6: "Id?? do Popielice mi??st?? Kurzel??w", // 3 3
                7: "Id?? do Gronost??i?? mi??st?? Busko", // 1 4
                8: "Id?? do Nied??wiedzia mi??st?? Powidz", // 2 4
                9: "Id?? do Wydry mi??st?? Mi??dzych??d", // 3 4
                10: "Id?? do Liszki mi??st?? M??k??w", // 4 4
                11: "Id?? do Wilk?? mi??st?? Dukl??", // 1 5
                12: "Id?? do Kuny mi??st?? Tyszkowice", // 2 5
                13: "Id?? do Bobru mi??st?? Wyszk??w", // 3 5
                14: "Id?? do Rysi?? mi??st?? Ostr??w", // 4 5
                15: "Id?? do Sobol?? mi??st?? Szymb??rk", // 5 5
                16: "Id?? do Kozy mi??st?? K????imierz", // 1 6
                17: "Id?? do Bar??n?? mi??st?? Krzemieniec", // 2 6
                18: "Id?? do Borsuk?? mi??st?? Wyszogr??d", // 3 6
                19: "Id?? do Tchorz?? mi??st?? Stobnica", // 4 6
                20: "Id?? do Wiewi??rki mi??st?? Krasnostaw", // 5 6 ???
                21: "Id?? do L????ice mi??st?? Pincz??w" // 6 6
            },
            
            14: { //Tarcza 14 Kuku??k??
                1: "Id?? do Gronost??i?? mi??st?? S??owacz??w", // 1 1
                2: "Id?? do Nied??wiedzia mi??st?? Bodzi????in", // 1 2
                3: "Id?? do Wydry mi??st?? Nowotaniec", // 2 2
                4: "Id?? do Liszki mi??st?? Pi????", // 1 3
                5: "Id?? do Wilk?? miast?? Wieliczk??", // 2 3
                6: "Id?? do Kuny mi??st?? Chrzan??w", // 3 3
                7: "Id?? do Bobru mi??st?? Pobied??isk??", // 1 4
                8: "Id?? do Rysi?? mi??st?? Rym??n??w", // 2 4
                9: "Id?? do Sobol?? mi??st?? Krotyszyn", // 3 4
                10: "Id?? do Kozy mi??st?? Brudzowo", // 4 4
                11: "Id?? do Bar??n?? mi??st?? W??soszyn", // 1 5
                12: "Id?? do Borsuk?? mi??st?? Pomorz??ny", // 2 5
                13: "Id?? do Tchorz?? mi??st?? I??????", // 3 5
                14: "Id?? do Wiewi??rki mi??st?? Brzoz??w", // 4 5
                15: "Id?? do L????ice mi??st?? Sol", // 5 5
                16: "Id?? do Z??i??c?? mi??st?? Frystag", // 1 6
                17: "Id?? do Krzeczk?? mi??st?? Grzebo????w", // 2 6
                18: "Id?? do Nowogr??dk?? mi??st?? Czch??w", // 3 6
                19: "Id?? do Rosomak?? mi??st?? G??s??w??", // 4 6
                20: "Id?? do Kr??lik?? mi??st?? S??d??isz??w", // 5 6 ???
                21: "Id?? do Popielice mi??st?? Stesz??w" // 6 6
            },
            
            15: { //Tarcza 15 Drop
                1: "Id?? do Kr??lik?? mi??st?? Pie??sko", // 1 1
                2: "Id?? do Popielice mi??st?? Z??oczew", // 1 2
                3: "Id?? do Gronost??i?? mi??st?? S??u????w", // 2 2
                4: "Id?? do Nied??wiedzia mi??st?? Kr??ienk??", // 1 3
                5: "Id?? do Wydry miast?? Zadybie", // 2 3
                6: "Id?? do Liszki mi??st?? Orch??w", // 3 3
                7: "Id?? do Wilk?? mi??st?? Bnin", // 1 4
                8: "Id?? do Kuny mi??st?? Dobra", // 2 4
                9: "Id?? do Bobru mi??st?? Wielopole", // 3 4
                10: "Id?? do Rysi?? mi??st?? Zb??rasz", // 4 4
                11: "Id?? do Sobol?? mi??st?? J??roczewo", // 1 5
                12: "Id?? do Kozy mi??st?? J??drzei??w", // 2 5
                13: "Id?? do Bar??n?? mi??st?? Leszczysko", // 3 5
                14: "Id?? do Borsuk?? mi??st?? J??cymierz", // 4 5
                15: "Id?? do Tchorz?? mi??st?? Br??g", // 5 5
                16: "Id?? do Wiewi??rki mi??st?? Drohobicz", // 1 6
                17: "Id?? do L????ice mi??st?? Znin", // 2 6
                18: "Id?? do Z??i??c?? mi??st?? Szubin", // 3 6
                19: "Id?? do Krzeczk?? mi??st?? Brze??nic??", // 4 6
                20: "Id?? do Nowogr??dk?? mi??st?? Bedlno", // 5 6 ???
                21: "Id?? do Rosomak?? mi??st?? K??mie??sko" // 6 6
            },
            
            16: { //Tarcza 16 Piegz??
                1: "Id?? do Kuny mi??st?? Przytyk", // 1 1
                2: "Id?? do Bobru mi??st?? J??slisk??", // 1 2
                3: "Id?? do Rysi?? mi??st?? K??pno", // 2 2
                4: "Id?? do Sobol?? mi??st?? Z??rnow??", // 1 3
                5: "Id?? do Kozy miast?? Prasznysz", // 2 3
                6: "Id?? do Bar??n?? mi??st?? Tuszyn", // 3 3
                7: "Id?? do Borsuk?? mi??st?? Czepie????w", // 1 4
                8: "Id?? do Tchorz?? mi??st?? Ostrzesz??w", // 2 4
                9: "Id?? do Wiewi??rki mi??st?? Syroczec", // 3 4
                10: "Id?? do L????ice mi??st?? Sienno", // 4 4
                11: "Id?? do Z??i??c?? mi??st?? Wa??ni??w", // 1 5
                12: "Id?? do Krzeczk?? mi??st?? Turek", // 2 5
                13: "Id?? do Nowogr??dk?? mi??st?? Skierbiesz??w", // 3 5
                14: "Id?? do Rosomak?? mi??st?? Miedzyb??rz", // 4 5
                15: "Id?? do Kr??lik?? mi??st?? R??d??i????w", // 5 5
                16: "Id?? do Popielice mi??st?? Knyszowo", // 1 6
                17: "Id?? do Gronost??i?? mi??st?? Szoch??w", // 2 6
                18: "Id?? do Nied??wiedzia mi??st?? Woys????wice", // 3 6
                19: "Id?? do Wydry mi??st?? Felsztyn", // 4 6
                20: "Id?? do Liszki mi??st?? Dolsko", // 5 6 ???
                21: "Id?? do Wilk?? mi??st?? Cieszylesy" // 6 6
            },
            
            17: { //Tarcza 17 Paw
                1: "Id?? do Popielice mi??st?? O??ieczno", // 1 1
                2: "Id?? do Gronost??i?? mi??st?? Bydlin", // 1 2
                3: "Id?? do Nied??wiedzia mi??st?? Go??up", // 2 2
                4: "Id?? do Wydry mi??st?? Pop??w", // 1 3
                5: "Id?? do Liszki miast?? Woynicz", // 2 3
                6: "Id?? do Wilk?? mi??st?? Zg??obie??", // 3 3
                7: "Id?? do Kuny mi??st?? ??ob??enic??", // 1 4
                8: "Id?? do Bobru mi??st?? Mielszyno", // 2 4
                9: "Id?? do Rysi?? mi??st?? Pr??chnik", // 3 4
                10: "Id?? do Sobol?? mi??st?? Siedlec", // 4 4
                11: "Id?? do Kozy mi??st?? Grodzi??c", // 1 5
                12: "Id?? do Bar??n?? mi??st?? B??brk??", // 2 5
                13: "Id?? do Borsuk?? mi??st?? Wierusz??w", // 3 5
                14: "Id?? do Tchorz?? mi??st?? Gr??b??w", // 4 5
                15: "Id?? do Wiewi??rki mi??st?? Krzywcza", // 5 5
                16: "Id?? do L????ice mi??st?? Brze??sk", // 1 6
                17: "Id?? do Z??i??c?? mi??st?? Bodz??n??w", // 2 6
                18: "Id?? do Krzeczk?? mi??st?? ??om??a", // 3 6
                19: "Id?? do Nowogr??dk?? mi??st?? D??bic??", // 4 6
                20: "Id?? do Rosomak?? mi??st?? Bu??enin", // 5 6 ???
                21: "Id?? do Kr??lik?? mi??st?? W??lcz" // 6 6
            },
            
            18: { //Tarcza 18 Zoraw
                1: "Id?? do Popielice mi??st?? Szyd??owiec", // 1 1
                2: "Id?? do Gronost??i?? mi??st?? Lowicz", // 1 2
                3: "Id?? do Nied??wiedzia mi??st?? Brodnica", // 2 2
                4: "Id?? do Wydry mi??st?? Ostr??da", // 1 3
                5: "Id?? do Liszki miast?? Nur", // 2 3
                6: "Id?? do Wilk?? mi??st?? K??ocko", // 3 3
                7: "Id?? do Kuny mi??st?? Kutno", // 1 4
                8: "Id?? do Bobru mi??st?? O??iek", // 2 4
                9: "Id?? do Rysi?? mi??st?? Miech??w", // 3 4
                10: "Id?? do Sobol?? mi??st?? Mor??czewo", // 4 4
                11: "Id?? do Kozy mi??st?? ????kno", // 1 5
                12: "Id?? do Bar??n?? mi??st?? D??browno", // 2 5
                13: "Id?? do Borsuk?? mi??st?? Sm??lino", // 3 5
                14: "Id?? do Tchorz?? mi??st?? Czyrwie??sko", // 4 5
                15: "Id?? do Wiewi??rki mi??st?? Lel??w", // 5 5
                16: "Id?? do L????ice mi??st?? R??dymno", // 1 6
                17: "Id?? do Z??i??c?? mi??st?? K??mie??", // 2 6
                18: "Id?? do Krzeczk?? mi??st?? Golina", // 3 6
                19: "Id?? do Nowogr??dk?? mi??st?? J??worniczek", // 4 6
                20: "Id?? do Rosomak?? mi??st?? Drobnin", // 5 6 ???
                21: "Id?? do Kr??lik?? mi??st?? Mrocza" // 6 6
            },

            19: { //Tarcza 19 Kaczor
                1: "Id?? do Wiewi??rki mi??st?? Sob??tka", // 1 1
                2: "Id?? do L????ice mi??st?? Z??br??w", // 1 2
                3: "Id?? do Z??i??c?? mi??st?? P??bij??nice", // 2 2
                4: "Id?? do Krzeczk?? mi??st?? Syc??w", // 1 3
                5: "Id?? do Nowogr??dk?? miast?? My??limice", // 2 3
                6: "Id?? do Rosomak?? mi??st?? I??kusz", // 3 3
                7: "Id?? do Kr??lik?? mi??st?? Tuliszk??w", // 1 4
                8: "Id?? do Popielice mi??st?? W??oc????w", // 2 4
                9: "Id?? do Gronost??i?? mi??st?? L??towi??", // 3 4
                10: "Id?? do Nied??wiedzia mi??st?? S??choczyn", // 4 4
                11: "Id?? do Wydry mi??st?? Br????sk", // 1 5
                12: "Id?? do Liszki mi??st?? G??bin", // 2 5
                13: "Id?? do Wilk?? mi??st?? R??dziei??w", // 3 5
                14: "Id?? do Kuny mi??st?? Ogrod??ieniec", // 4 5
                15: "Id?? do Bobru mi??st?? K????dnic??", // 5 5
                16: "Id?? do Rysi?? mi??st?? Be??z", // 1 6
                17: "Id?? do Sobol?? mi??st?? Dobrzyc??", // 2 6
                18: "Id?? do Kozy mi??st?? W??rk??", // 3 6
                19: "Id?? do Bar??n?? mi??st?? Sz??dek", // 4 6
                20: "Id?? do Borsuk?? mi??st?? Pniewy", // 5 6 ???
                21: "Id?? do Tchorz?? mi??st?? Mo????isk??" // 6 6
            },
            
            20: { //Tarcza 20 Bo??ian
                1: "Id?? do Tchorz?? mi??st?? Sk??rmierz", // 1 1
                2: "Id?? do Wiewi??rki mi??st?? Kop??nice", // 1 2
                3: "Id?? do L????ice mi??st?? Petulic??", // 2 2
                4: "Id?? do Z??i??c?? mi??st?? M??k??w", // 1 3
                5: "Id?? do Krzeczk?? miast?? R??doszyce", // 2 3
                6: "Id?? do Nowogr??dk?? mi??st?? W??gr??w", // 3 3
                7: "Id?? do Rosomak?? mi??st?? U??cie", // 1 4
                8: "Id?? do Kr??lik?? mi??st?? Kliff??w", // 2 4
                9: "Id?? do Popielice mi??st?? Przedecz", // 3 4
                10: "Id?? do Gronost??i?? mi??st?? Bukowiec", // 4 4
                11: "Id?? do Nied??wiedzia mi??st?? Kromo????w", // 1 5
                12: "Id?? do Wydry mi??st?? K????czug??", // 2 5
                13: "Id?? do Liszki mi??st?? ????g??w", // 3 5
                14: "Id?? do Wilk?? mi??st?? Oborniki", // 4 5
                15: "Id?? do Kuny mi??st?? N??d??rzyn", // 5 5
                16: "Id?? do Bobru mi??st?? Brzostek", // 1 6
                17: "Id?? do Rysi?? mi??st?? Kr??kowiec", // 2 6
                18: "Id?? do Sobol?? mi??st?? Iutroszyn", // 3 6
                19: "Id?? do Kozy mi??st?? Krzywin", // 4 6
                20: "Id?? do Bar??n?? mi??st?? Zmigr??d", // 5 6 ???
                21: "Id?? do Borsuk?? mi??st?? Lod??ia" // 6 6
            },
            
            21: { //Tarcza 21 Sow??
                1: "Id?? do L????ice mi??st?? Zegan", // 1 1
                2: "Id?? do Z??i??c?? mi??st?? Zegrze", // 1 2
                3: "Id?? do Krzeczk?? mi??st?? Po????niec", // 2 2
                4: "Id?? do Nowogr??dk?? mi??st?? Krobia", // 1 3
                5: "Id?? do Rosomak?? miast?? Lw??wek", // 2 3
                6: "Id?? do Kr??lik?? mi??st?? Zagor??w", // 3 3
                7: "Id?? do Popielice mi??st?? J??s??o", // 1 4
                8: "Id?? do Gronost??i?? mi??st?? Ko????czyce", // 2 4
                9: "Id?? do Nied??wiedzia mi??st?? Zarki", // 3 4
                10: "Id?? do Wydry mi??st?? Go??ancz??", // 4 4
                11: "Id?? do Liszki mi??st?? P??????sko", // 1 5
                12: "Id?? do Wilk?? mi??st?? Grod??isko", // 2 5
                13: "Id?? do Kuny mi??st?? Piaseczno", // 3 5
                14: "Id?? do Bobru mi??st?? Peplin", // 4 5
                15: "Id?? do Rysi?? mi??st?? Cieszkowice", // 5 5
                16: "Id?? do Sobol?? mi??st?? Sulumrzyce", // 1 6
                17: "Id?? do Kozy mi??st?? Srzem", // 2 6
                18: "Id?? do Bar??n?? mi??st?? Stryyk??w", // 3 6
                19: "Id?? do Borsuk?? mi??st?? Obrzyw????", // 4 6
                20: "Id?? do Tchorz?? mi??st?? W??rzym??w", // 5 6 ???
                21: "Id?? do Wiewi??rki mi??st?? Bobowa" // 6 6
            },


    }

    const animalWheels = {
        Bar??n??: {
            K??mionk??: ["Sybill?? 12. wiersz 1.", 0.01],		// 1
            B??brk??: ["Sybill?? 12. wiersz 2.", 1], 		// 2
            D??browno: ["Sybill?? 12. wiersz 3.", 2], 		// 3
            Leszczysko: ["Sybill?? 12. wiersz 4.", 3], 		// 4
            K??nin: ["Sybill?? 12. wiersz 5.", 4], 		// 5
            G??odkowice: ["Sybill?? 12. wiersz 6.", 5],		// 6
            Sk??win??: ["Sybill?? 12. wiersz 7.", 6],		// 7 
            Krzemieniec: ["Sybill?? 12. wiersz 8.", 7], 		// 8
            Stryyk??w: ["Sybill?? 12. wiersz 9.", 8],		// 9
            W??rt??: ["Sybill?? 12. wiersz 10.", 9], 		// 10
            Sz??dek: ["Sybill?? 12. wiersz 11.", 10],		// 11
            Zmigr??d: ["Sybill?? 12. wiersz 12.", 11],		// 12
            Szczekocin: ["Sybill?? 12. wiersz 13.", 12],		//13
            Opol??: ["Sybill?? 11. wiersz 30.", 13],		// 14
            Mogilnic??: ["Sybill?? 11. wiersz 31.", 14],		// 15
            Rypin: ["Sybill?? 11. wiersz 32.", 15],		// 16
            Tuszyn: ["Sybill?? 11. wiersz 33.", 16],		// 17
            Wid??w??: ["Sybill?? 11. wiersz 34.", 	17],	// 18
            Pokrzywnic??: ["Sybill?? 11. wiersz 35.", 18],		// 19
            Smotrzyc: ["Sybill?? 11. wiersz 36.", 19],		// 20
            W??soszyn: ["Sybill?? 11. wiersz 37.", 20],		// 21
            },
        
        Borsuk??: {
            Pomorz??ny: ["Sybill?? 11. wiersz 16.", 0.01], 		// 1
            Sz??motu??y: ["Sybill?? 11. wiersz 17.", 1], 		// 2
            Wierusz??w: ["Sybill?? 11. wiersz 18.", 2], 		// 3
            Sm??lino: ["Sybill?? 11. wiersz 19.", 3], 		// 4
            J??cymierz: ["Sybill?? 11. wiersz 20.", 4], 		// 5
            Che??mno: ["Sybill?? 11. wiersz 21.", 5], 		// 6
            Bobrowniki: ["Sybill?? 11. wiersz 22.", 6], 		// 7 
            Szorstyn: ["Sybill?? 11. wiersz 23.", 7], 		// 8
            Wyszogr??d: ["Sybill?? 11. wiersz 24.", 8], 		// 9
            Obrzyw????: ["Sybill?? 12. wiersz 25.", 9], 		// 10
            Trzemeszno: ["Sybill?? 12. wiersz 26.", 10], 		// 11
            Pniewy: ["Sybill?? 12. wiersz 27.", 11], 		// 12
            Lod??ia: ["Sybill?? 12. wiersz 28.", 12], 		//13
            ??????cut: ["Sybill?? 11. wiersz 29.", 13], 		// 14
            Pod??ycz??: ["Sybill?? 11. wiersz 9.", 14], 		// 15
            St????yc??: ["Sybill?? 11. wiersz 10.", 15], 		// 16
            Buk: ["Sybill?? 11. wiersz 11.", 16], 		// 17
            Czepie????w: ["Sybill?? 11. wiersz 12.", 17], 		// 18
            Krocko: ["Sybill?? 11. wiersz 13.", 18], 		// 19
            Skrzynno: ["Sybill?? 11. wiersz 14.", 19], 		// 20
            W??w??lnic??: ["Sybill?? 11. wiersz 15.", 20], 		// 21
        },
        
        Bobru: {
            Peplin: ["Sybill?? 2. wiersz 22.", 0.01], 		// 1
            Secemin: ["Sybill?? 2. wiersz 23.", 1], 		// 2
            K????dnic??: ["Sybill?? 2. wiersz 24.", 2], 		// 3
            Brzostek: ["Sybill?? 2. wiersz 25.", 3], 		// 4
            Chodel: ["Sybill?? 2. wiersz 26.", 4], 		// 5
            Chmielnik: ["Sybill?? 2. wiersz 6.", 5], 		// 6
            Be????yce: ["Sybill?? 2. wiersz 7.", 6], 		// 7 
            Kobylno: ["Sybill?? 2. wiersz 8.", 7], 		// 8
            J??slisk??: ["Sybill?? 2. wiersz 9.", 8], 		// 9
            Bircza: ["Sybill?? 12. wiersz 10.", 9], 		// 10
            Lubomla: ["Sybill?? 12. wiersz 11.", 10], 		// 11
            Dubiecko: ["Sybill?? 12. wiersz 12.", 11], 		// 12
            Pobied??isk??: ["Sybill?? 12. wiersz 13.", 12], 		//13
            Strzelec: ["Sybill?? 2. wiersz 14.", 13], 		// 14
            Mielszyno: ["Sybill?? 2. wiersz 15.", 14], 		// 15
            O??iek: ["Sybill?? 2. wiersz 16.", 15], 		// 16
            Wielopole: ["Sybill?? 2. wiersz 17.", 16], 		// 17
            Z??rszyn: ["Sybill?? 2. wiersz 18.", 17], 		// 18
            Olesznic??: ["Sybill?? 2. wiersz 19.", 18], 		// 19
            Mi??os??aw: ["Sybill?? 2. wiersz 20.", 19], 		// 20
            Wyszk??w: ["Sybill?? 2. wiersz 21.", 20], 		// 21
        },
        
        Gronost??i??: {
            Ko????czyce: ["Sybill?? 5. wiersz 37.", 0.01], 		// 1
            Gorzk??w: ["Sybill?? 6. wiersz 1.", 1], 		// 2
            L??towi??: ["Sybill?? 6. wiersz 2.", 2], 		// 3
            Bukowiec: ["Sybill?? 6. wiersz 3.", 3], 		// 4
            J??rz??b: ["Sybill?? 6. wiersz 4.", 4], 		// 5
            Kozprza: ["Sybill?? 5. wiersz 21.", 5], 		// 6
            Szczyrcz: ["Sybill?? 5. wiersz 22.", 6], 		// 7 
            Wolborz: ["Sybill?? 5. wiersz 23.", 7], 		// 8
            Szoch??w: ["Sybill?? 5. wiersz 24.", 8], 		// 9
            Przedb??rz: ["Sybill?? 5. wiersz 25.", 9], 		// 10
            Stemberg: ["Sybill?? 5. wiersz 26.", 10], 		// 11
            B??rczyn: ["Sybill?? 5. wiersz 27.", 11], 		// 12
            S??owacz??w: ["Sybill?? 5. wiersz 28.", 12], 		//13
            Kur??w: ["Sybill?? 5. wiersz 29.", 13], 		// 14
            Bydlin: ["Sybill?? 5. wiersz 30.", 14], 		// 15
            Lowicz: ["Sybill?? 5. wiersz 31.", 15], 		// 16
            S??u????w: ["Sybill?? 5. wiersz 32.", 16], 		// 17
            Przec??aw: ["Sybill?? 5. wiersz 33.", 17], 		// 18
            Odal??now: ["Sybill?? 5. wiersz 34.", 18], 		// 19
            Smigiel: ["Sybill?? 5. wiersz 35.", 19], 		// 20
            Busko: ["Sybill?? 5. wiersz 36.", 20], 		// 21
        },
        
        Kozy: {
            Srzem: ["Sybill?? 12. wiersz 30.", 0.01], 		// 1
            Rypno: ["Sybill?? 12. wiersz 31.", 1], 		// 2
            W??rt??: ["Sybill?? 12. wiersz 32.", 2], 		// 3
            Krzywin: ["Sybill?? 12. wiersz 33.", 3], 		// 4
            Kierno??ia: ["Sybill?? 12. wiersz 34.", 4], 		// 12
            Osmolin: ["Sybill?? 12. wiersz 14.", 5], 		// 6
            Ro??an: ["Sybill?? 12. wiersz 15.", 6], 		// 7 
            Sz??rk??w: ["Sybill?? 12. wiersz 16.", 7], 		// 8
            Prasznysz: ["Sybill?? 12. wiersz 17.", 8], 		// 9
            Solec: ["Sybill?? 12. wiersz 18.", 9], 		// 10
            W??growiec: ["Sybill?? 12. wiersz 19.", 10], 		// 11
            Sokal: ["Sybill?? 12. wiersz 20.", 11], 		// 12
            Brudzowo: ["Sybill?? 12. wiersz 21.", 12], 		//13
            Kurnik: ["Sybill?? 12. wiersz 22.", 13], 		// 14
            Grodzi??c: ["Sybill?? 12. wiersz 23.", 14], 		// 15
            ????kno: ["Sybill?? 12. wiersz 24.", 15], 		// 16
            J??drzei??w: ["Sybill?? 12. wiersz 25.", 16], 		// 17
            Koszyczki: ["Sybill?? 12. wiersz 26.", 17], 		// 18
            K????i????: ["Sybill?? 12. wiersz 27.", 18], 		// 19
            Wieczb??rz: ["Sybill?? 12. wiersz 28.", 19], 		// 20
            K????imierz: ["Sybill?? 12. wiersz 29.", 20], 		// 21
        },
        
        Kr??lik??: {
            Opor??w: ["Sybill?? 6. wiersz 31.", 0.01], 		// 1
            P??cz??n??w: ["Sybill?? 6. wiersz 30.", 1], 		// 2
            R??dziei??w: ["Sybill?? 6. wiersz 29.", 2], 		// 3
            Oleszko: ["Sybill?? 6. wiersz 28.", 3], 		// 4
            Tuchola: ["Sybill?? 6. wiersz 27.", 4], 		// 12
            Szyrniki: ["Sybill?? 6. wiersz 26.", 5], 		// 6
            B??bin: ["Sybill?? 7. wiersz 9.", 6], 		// 7 
            Kliff??w: ["Sybill?? 7. wiersz 8.", 7], 		// 8
            Tuliszk??w: ["Sybill?? 7. wiersz 7.", 8], 		// 9
            Rychwa??: ["Sybill?? 7. wiersz 6.", 9], 		// 10
            Zagor??w: ["Sybill?? 7. wiersz 5.", 10], 		// 11
            Wil??n??w: ["Sybill?? 7. wiersz 4.", 11], 		// 12
            Tyczyn: ["Sybill?? 7. wiersz 3.", 12], 		//13
            Sk??pe: ["Sybill?? 7. wiersz 2.", 13], 		// 14
            Ryn??rz??w: ["Sybill?? 7. wiersz 1.", 14], 		// 15
            Pie??sko: ["Sybill?? 6. wiersz 37.", 15], 		// 16
            Mrocza: ["Sybill?? 6. wiersz 36.", 16], 		// 17
            W??lcz: ["Sybill?? 6. wiersz 35.", 17], 		// 18
            R??dz??n??w: ["Sybill?? 6. wiersz 34.", 18], 		// 19
            S??d??isz??w: ["Sybill?? 6. wiersz 33.", 19], 		// 20
            Tyr??w??: ["Sybill?? 6. wiersz 32.", 20], 		// 21
        },
        
        Krzeczk??: {
            W??od??imi??rz: ["Sybill?? 6. wiersz 21.", 0.01], 		// 1
            S??upia: ["Sybill?? 8. wiersz 20.", 1], 		// 2
            Ko??o: ["Sybill?? 8. wiersz 19.", 2], 		// 3
            Turek: ["Sybill?? 8. wiersz 18.", 3], 		// 4
            Proszkowice: ["Sybill?? 8. wiersz 17.", 4], 		// 12
            Rubiesz??w: ["Sybill?? 8. wiersz 16.", 5], 		// 6
            Z??wichost: ["Sybill?? 8. wiersz 15.", 6], 		// 7 
            Nowytarg: ["Sybill?? 8. wiersz 35.", 7], 		// 8
            R??doszyce: ["Sybill?? 8. wiersz 34.", 8], 		// 9
            Syc??w: ["Sybill?? 8. wiersz 33.", 9], 		// 10
            W??kocko: ["Sybill?? 8. wiersz 32.", 10], 		// 11
            Po????niec: ["Sybill?? 8. wiersz 31.", 11], 		// 12
            Namys??ow: ["Sybill?? 8. wiersz 30.", 12], 		//13
            Ropczyce: ["Sybill?? 8. wiersz 29.", 13], 		// 14
            H??licz: ["Sybill?? 8. wiersz 28.", 14], 		// 15
            Cz??omniki: ["Sybill?? 8. wiersz 27.", 15], 		// 16
            Brze??nic??: ["Sybill?? 8. wiersz 26.", 16], 		// 17
            Golina: ["Sybill?? 8. wiersz 25.", 17], 		// 18
            ??om??a: ["Sybill?? 8. wiersz 24.", 18], 		// 19
            Chodecz: ["Sybill?? 8. wiersz 23.", 19], 		// 20
            Grzebo????w: ["Sybill?? 8. wiersz 22.", 20], 		// 21
        },
        
        Kuny: {
            Tyszkowice: ["Sybill?? 3. wiersz 5.", 0.01], 		// 1
            M????w??: ["Sybill?? 3. wiersz 4.", 1], 		// 2
            Czyrkaszno: ["Sybill?? 3. wiersz 3.", 2], 		// 3
            Jw??nowice: ["Sybill?? 3. wiersz 2.", 3], 		// 4
            Dobra: ["Sybill?? 3. wiersz 1.", 4], 		// 12
            Kutno: ["Sybill?? 2. wiersz 37.", 5], 		// 6
            ??ob??enic??: ["Sybill?? 2. wiersz 36.", 6], 		// 7 
            Borek: ["Sybill?? 2. wiersz 35.", 7], 		// 8
            Chrzan??w: ["Sybill?? 2. wiersz 34.", 8], 		// 9
            ????biszyn: ["Sybill?? 2. wiersz 33.", 9], 		// 10
            G??rk??: ["Sybill?? 2. wiersz 32.", 10], 		// 11
            Krzesz??w: ["Sybill?? 2. wiersz 31.", 11], 		// 12
            Przytyk: ["Sybill?? 2. wiersz 30.", 12], 		//13
            Syroczko: ["Sybill?? 2. wiersz 29.", 13], 		// 14
            Op??towice: ["Sybill?? 2. wiersz 28.", 14], 		// 15
            Zyd??cz??w: ["Sybill?? 2. wiersz 27.", 15], 		// 16
            Z??kroczym: ["Sybill?? 3. wiersz 10.", 16], 		// 17
            N??d??rzyn: ["Sybill?? 3. wiersz 9.", 17], 		// 18
            Ogrod??ieniec: ["Sybill?? 3. wiersz 8.", 18], 		// 19
            Zw??radz: ["Sybill?? 3. wiersz 7.", 19], 		// 20
            Piaseczno: ["Sybill?? 3. wiersz 6.", 20], 		// 21
        },
        
        Liszki: {
            Czyrsk: ["Sybill?? 3. wiersz 32.", 0.01], 		// 1
            Lepno: ["Sybill?? 3. wiersz 33.", 1], 		// 2
            Bi??le: ["Sybill?? 3. wiersz 34.", 2], 		// 3
            Dolsko: ["Sybill?? 3. wiersz 35.", 3], 		// 4
            Gosty??: ["Sybill?? 3. wiersz 36.", 4], 		// 12
            S??mbor: ["Sybill?? 3. wiersz 37.", 5], 		// 6
            Msk??w: ["Sybill?? 4. wiersz 1.", 6], 		// 7 
            Pi????: ["Sybill?? 4. wiersz 2.", 7], 		// 8
            Z??bno: ["Sybill?? 4. wiersz 3.", 8], 		// 9
            Woynicz: ["Sybill?? 4. wiersz 4.", 9], 		// 10
            Nur: ["Sybill?? 4. wiersz 5.", 10], 		// 11
            Orch??w: ["Sybill?? 4. wiersz 6.", 11], 		// 12
            Zb??szyn: ["Sybill?? 4. wiersz 7.", 12], 		//13
            T??rczyn: ["Sybill?? 4. wiersz 8.", 13], 		// 14
            P????kpie: ["Sybill?? 4. wiersz 9.", 14], 		// 15
            M??k??w: ["Sybill?? 4. wiersz 10.", 15], 		// 16
            P??????sko: ["Sybill?? 4. wiersz 11.", 16], 		// 17
            Brzysk??: ["Sybill?? 4. wiersz 12.", 17], 		// 18
            G??bin: ["Sybill?? 4. wiersz 13.", 18], 		// 19
            ????g??w: ["Sybill?? 4. wiersz 14.", 19], 		// 20
            G??rno: ["Sybill?? 4. wiersz 15.", 20], 		// 21
        },
        
        L????ice: {
            Wielu??: ["Sybill?? 9. wiersz 32.", 0.01], 		// 1
            Znin: ["Sybill?? 9. wiersz 31.", 1], 		// 2
            R??dymno: ["Sybill?? 9. wiersz 30.", 2], 		// 3
            Brze??sk: ["Sybill?? 9. wiersz 29.", 3], 		// 4
            J??s??owiec: ["Sybill?? 9. wiersz 28.", 4], 		// 12
            Sol: ["Sybill?? 9. wiersz 27.", 5], 		// 6
            Kufl??w: ["Sybill?? 9. wiersz 26.", 6], 		// 7 
            Den??w: ["Sybill?? 9. wiersz 25.", 7], 		// 8
            Boles????wiec: ["Sybill?? 9. wiersz 24.", 8], 		// 9
            Sienno: ["Sybill?? 9. wiersz 23.", 9], 		// 10
            Leszko: ["Sybill?? 9. wiersz 22.", 10], 		// 11
            Kulit??w: ["Sybill?? 9. wiersz 21.", 11], 		// 12
            Striy: ["Sybill?? 9. wiersz 20.", 12], 		//13
            Kieb??ow: ["Sybill?? 10. wiersz 3.", 13], 		// 14
            Petulic??: ["Sybill?? 10. wiersz 2.", 14], 		// 15
            Z??br??w: ["Sybill?? 10. wiersz 1.", 15], 		// 16
            Sulei??w: ["Sybill?? 9. wiersz 37.", 16], 		// 17
            Zegan: ["Sybill?? 9. wiersz 36.", 17], 		// 18
            Pincz??w: ["Sybill?? 9. wiersz 35.", 18], 		// 19
            Zywiec: ["Sybill?? 9. wiersz 34.", 19], 		// 20
            Milczyce: ["Sybill?? 9. wiersz 33.", 20], 		// 21
        },
        
        Nied??wiedzia: {
            Zarki: ["Sybill?? 5. wiersz 16.", 0.01], 		// 1
            Wrze??nia: ["Sybill?? 5. wiersz 17.", 1], 		// 2
            S??choczyn: ["Sybill?? 5. wiersz 18.", 2], 		// 3
            Kromo????w: ["Sybill?? 5. wiersz 19.", 3], 		// 4
            Bucz??c: ["Sybill?? 5. wiersz 22.", 4], 		// 12
            Sanok: ["Sybill?? 4. wiersz 37.", 5], 		// 6
            P??niec: ["Sybill?? 5. wiersz 1.", 6], 		// 7 
            R??w??: ["Sybill?? 5. wiersz 2.", 7], 		// 8
            Woys????wice: ["Sybill?? 5. wiersz 3.", 8], 		// 9
            Ostrowia: ["Sybill?? 5. wiersz 4.", 9], 		// 10
            Z??rnowiec: ["Sybill?? 5. wiersz 5.", 10], 		// 11
            Pako????: ["Sybill?? 5. wiersz 6.", 11], 		// 12
            Bodzi????in: ["Sybill?? 5. wiersz 7.", 12], 		//13
            K??obucko: ["Sybill?? 5. wiersz 8.", 13], 		// 14
            Go??up: ["Sybill?? 5. wiersz 9.", 14], 		// 15
            Brodnica: ["Sybill?? 5. wiersz 10.", 15], 		// 16
            Kr??ienk??: ["Sybill?? 5. wiersz 11.", 16], 		// 17
            Sleszyn: ["Sybill?? 5. wiersz 12.", 17], 		// 18
            Pilc??: ["Sybill?? 5. wiersz 13.", 18], 		// 19
            My??sk: ["Sybill?? 5. wiersz 14.", 19], 		// 20
            Powidz: ["Sybill?? 5. wiersz 15.", 20], 		// 21
        },
        
        Nowogr??dk??: {
            Brzysk??: ["Sybill?? 7. wiersz 35.", 0.01], 		// 1
            Skierbiesz??w: ["Sybill?? 7. wiersz 34.", 1], 		// 2
            Tr??bowla: ["Sybill?? 7. wiersz 33.", 2], 		// 3
            Urz??d??w: ["Sybill?? 7. wiersz 32.", 3], 		// 4
            Rzesz??w: ["Sybill?? 7. wiersz 31.", 4], 		// 12
            Gowocz??w: ["Sybill?? 8. wiersz 14.", 5], 		// 6
            W??gr??w: ["Sybill?? 8. wiersz 13.", 6], 		// 7 
            My??limice: ["Sybill?? 8. wiersz 12.", 7], 		// 8
            Sie??iech??w: ["Sybill?? 8. wiersz 11.", 8], 		// 9
            Krobia: ["Sybill?? 8. wiersz 10.", 9], 		// 10
            Biel??wy: ["Sybill?? 8. wiersz 9.", 10], 		// 11
            F??lk??w: ["Sybill?? 8. wiersz 8.", 11], 		// 12
            Janowiec: ["Sybill?? 8. wiersz 7.", 12], 		//13
            G????boczek: ["Sybill?? 8. wiersz 6.", 13], 		// 14
            Bedlno: ["Sybill?? 8. wiersz 5.", 14], 		// 15
            J??worniczek: ["Sybill?? 8. wiersz 4.", 15], 		// 16
            D??bic??: ["Sybill?? 8. wiersz 3.", 16], 		// 17
            Gieln??w: ["Sybill?? 8. wiersz 2.", 17], 		// 18
            Czch??w: ["Sybill?? 8. wiersz 1.", 18], 		// 19
            Ho??bok: ["Sybill?? 7. wiersz 37.", 19], 		// 20
            J??wor??w: ["Sybill?? 7. wiersz 36.", 20], 		// 21
        },
        
        Popielice: {
            J??s??o: ["Sybill?? 6. wiersz 21.", 0.01], 		// 1
            Sielu??: ["Sybill?? 6. wiersz 22.", 1], 		// 2
            W??oc????w: ["Sybill?? 6. wiersz 23.", 2], 		// 3
            Przedecz: ["Sybill?? 6. wiersz 24.", 3], 		// 4
            Z????oszce: ["Sybill?? 6. wiersz 25.", 4], 		// 12
            Brz????ek: ["Sybill?? 6. wiersz 5.", 5], 		// 6
            Che??m: ["Sybill?? 6. wiersz 6.", 6], 		// 7 
            Szczebrzeszyn: ["Sybill?? 6. wiersz 7.", 7], 		// 8
            Knyszowo: ["Sybill?? 6. wiersz 8.", 8], 		// 9
            B??bimost: ["Sybill?? 6. wiersz 9.", 9], 		// 10
            Staw: ["Sybill?? 6. wiersz 10.", 10], 		// 11
            W??soczyn: ["Sybill?? 6. wiersz 11.", 11], 		// 12
            Stesz??w: ["Sybill?? 6. wiersz 12.", 12], 		//13
            Mielec: ["Sybill?? 6. wiersz 13.", 13], 		// 14
            O??ieczno: ["Sybill?? 6. wiersz 14.", 14], 		// 15
            Szyd??owiec: ["Sybill?? 6. wiersz 15.", 15], 		// 16
            Z??oczew: ["Sybill?? 6. wiersz 16.", 16], 		// 17
            Wyszkowo: ["Sybill?? 6. wiersz 17.", 17], 		// 18
            Glini??ny: ["Sybill?? 6. wiersz 18.", 18], 		// 19
            Lut??w: ["Sybill?? 6. wiersz 19.", 19], 		// 20
            Kurzel??w: ["Sybill?? 6. wiersz 20.", 20], 		// 21
        },
        
        Rosomak??: {
            Lw??wek: ["Sybill?? 7. wiersz 26.", 0.01], 		// 1
            Kolno: ["Sybill?? 7. wiersz 27.", 1], 		// 2
            I??kusz: ["Sybill?? 7. wiersz 28.", 2], 		// 3
            U??cie: ["Sybill?? 7. wiersz 29.", 3], 		// 4
            Trz??i??l: ["Sybill?? 7. wiersz 30.", 4], 		// 12
            Szelech??w: ["Sybill?? 7. wiersz 10.", 5], 		// 6
            W??wrzinczyce: ["Sybill?? 7. wiersz 11.", 6], 		// 7 
            Opalenic??: ["Sybill?? 7. wiersz 12.", 7], 		// 8
            Miedzyb??rz: ["Sybill?? 7. wiersz 13.", 8], 		// 9
            Zychlin: ["Sybill?? 7. wiersz 14.", 9], 		// 10
            Przyr??w: ["Sybill?? 7. wiersz 15.", 10], 		// 11
            Szyszk??w: ["Sybill?? 7. wiersz 16.", 11], 		// 12
            G??s??w??: ["Sybill?? 7. wiersz 17.", 12], 		//13
            Ch??ciny: ["Sybill?? 7. wiersz 18.", 13], 		// 14
            Bu??enin: ["Sybill?? 7. wiersz 19.", 14], 		// 15
            Drobnin: ["Sybill?? 7. wiersz 20.", 15], 		// 16
            K??mie??sko: ["Sybill?? 7. wiersz 21.", 16], 		// 17
            J??ros??aw: ["Sybill?? 7. wiersz 22.", 17], 		// 18
            Grocholice: ["Sybill?? 7. wiersz 23.", 18], 		// 19
            Lopienno: ["Sybill?? 7. wiersz 24.", 19], 		// 20
            Ko??min: ["Sybill?? 7. wiersz 25.", 20], 		// 21
        },
        
        Rysi??: {
            Cieszkowice: ["Sybill?? 2. wiersz 1.", 0.01], 		// 1
            Hucha??: ["Sybill?? 2. wiersz 2.", 1], 		// 2
            Be??z: ["Sybill?? 2. wiersz 3.", 2], 		// 3
            Kr??kowiec: ["Sybill?? 2. wiersz 4.", 3], 		// 4
            La??ko: ["Sybill?? 2. wiersz 5.", 4], 		// 12
            Grodek: ["Sybill?? 1. wiersz 22.", 5], 		// 6
            Fordan: ["Sybill?? 1. wiersz 23.", 6], 		// 7 
            ??ubin: ["Sybill?? 1. wiersz 24.", 7], 		// 8
            K??pno: ["Sybill?? 1. wiersz 25.", 8], 		// 9
            Dobczyce: ["Sybill?? 1. wiersz 26.", 9], 		// 10
            B??bic??: ["Sybill?? 1. wiersz 27.", 10], 		// 11
            K??od??w??: ["Sybill?? 1. wiersz 28.", 11], 		// 12
            Rym??n??w: ["Sybill?? 1. wiersz 29.", 12], 		//13
            S????wk??w: ["Sybill?? 1. wiersz 30.", 13], 		// 14
            Pr??chnik: ["Sybill?? 1. wiersz 31.", 14], 		// 15
            Miech??w: ["Sybill?? 1. wiersz 32.", 15], 		// 16
            Zb??rasz: ["Sybill?? 1. wiersz 33.", 16], 		// 17
            Ryd??in??: ["Sybill?? 1. wiersz 34.", 17], 		// 18
            Wi??ni??: ["Sybill?? 1. wiersz 35.", 18], 		// 19
            Tuch??w: ["Sybill?? 1. wiersz 36.", 19], 		// 20
            Ostr??w: ["Sybill?? 1. wiersz 37.", 20], 		// 21
        },
        
        Sobol??: {
            Brzostek: ["Sybill?? 1. wiersz 7.", 0.01], 		// 1
            D??ierg??w: ["Sybill?? 1. wiersz 6.", 1], 		// 2
            Go??og??ry: ["Sybill?? 1. wiersz 5.", 2], 		// 3
            Z??rnow??: ["Sybill?? 1. wiersz 4.", 3], 		// 4
            K??szk??w: ["Sybill?? 1. wiersz 3.", 4], 		// 12
            Ko??irynek: ["Sybill?? 1. wiersz 2.", 5], 		// 6
            Bochnia: ["Sybill?? 1. wiersz 1.", 6], 		// 7 
            Fry??lno: ["Sybill?? 1. wiersz 21.", 7], 		// 8
            Iutroszyn: ["Sybill?? 1. wiersz 20.", 8], 		// 9
            Dobrzyc??: ["Sybill?? 1. wiersz 19.", 9], 		// 10
            Zduny: ["Sybill?? 1. wiersz 18.", 10], 		// 11
            Sulumrzyce: ["Sybill?? 1. wiersz 17.", 11], 		// 12
            Szymb??rk: ["Sybill?? 1. wiersz 16.", 12], 		//13
            Turobin: ["Sybill?? 1. wiersz 15.", 13], 		// 14
            Plesz??w: ["Sybill?? 1. wiersz 14.", 14], 		// 15
            Dobrogoszcz: ["Sybill?? 1. wiersz 13.", 15], 		// 16
            J??roczewo: ["Sybill?? 1. wiersz 12.", 16], 		// 17
            Mor??czewo: ["Sybill?? 1. wiersz 11.", 17], 		// 18
            Siedlec: ["Sybill?? 1. wiersz 10.", 18], 		// 19
            Kwiatk??w: ["Sybill?? 1. wiersz 9.", 19], 		// 20
            Krotyszyn: ["Sybill?? 1. wiersz 8.", 20], 		// 21
        },
        
        Tchorz??: {
            W??rzym??w: ["Sybill?? 2. wiersz 4.", 0.01], 		// 1
            Szr??kowo: ["Sybill?? 2. wiersz 5.", 1], 		// 2
            Mo????isk??: ["Sybill?? 2. wiersz 6.", 2], 		// 3
            Sk??rmierz: ["Sybill?? 2. wiersz 7.", 3], 		// 4
            Wolbran: ["Sybill?? 2. wiersz 8.", 4], 		// 12
            Swierc??w: ["Sybill?? 10. wiersz 25.", 5], 		// 6
            Ro??tyn: ["Sybill?? 10. wiersz 26.", 6], 		// 7 
            Zwole??: ["Sybill?? 10. wiersz 27.", 7], 		// 8
            Ostrzesz??w: ["Sybill?? 10. wiersz 28.", 8], 		// 9
            Mosin??: ["Sybill?? 10. wiersz 29.", 9], 		// 10
            Niebylec: ["Sybill?? 10. wiersz 30.", 10], 		// 11
            Grzegorz??w: ["Sybill?? 10. wiersz 31.", 11], 		// 12
            I??????: ["Sybill?? 10. wiersz 32.", 12], 		//13
            Ko??omyia: ["Sybill?? 10. wiersz 33.", 13], 		// 14
            Gr??b??w: ["Sybill?? 10. wiersz 34.", 14], 		// 15
            Czyrwie??sko: ["Sybill?? 10. wiersz 35.", 15], 		// 16
            Br??g: ["Sybill?? 10. wiersz 36.", 16], 		// 17
            Lubacz??w: ["Sybill?? 10. wiersz 37.", 17], 		// 18
            Czucz: ["Sybill?? 2. wiersz 1.", 18], 		// 19
            I????w: ["Sybill?? 2. wiersz 2.", 19], 		// 20
            Stobnica: ["Sybill?? 2. wiersz 3.", 20], 		// 21
        },
        
        Wiewi??rki: {
            S??pelbork: ["Sybill?? 10. wiersz 9.", 0.01], 		// 1
            Klecz??w: ["Sybill?? 10. wiersz 10.", 1], 		// 2
            Brzoz??w: ["Sybill?? 10. wiersz 11.", 2], 		// 3
            St??ro??cianki: ["Sybill?? 10. wiersz 12.", 3], 		// 4
            Krzywcza: ["Sybill?? 10. wiersz 13.", 4], 		// 12
            Lel??w: ["Sybill?? 10. wiersz 14.", 5], 		// 6
            Drohobicz: ["Sybill?? 10. wiersz 15.", 6], 		// 7 
            Stawiszyn: ["Sybill?? 10. wiersz 16.", 7], 		// 8
            Grzymisz??w: ["Sybill?? 10. wiersz 17.", 8], 		// 9
            Smiel??w: ["Sybill?? 10. wiersz 18.", 9], 		// 10
            Krasnostaw: ["Sybill?? 10. wiersz 19.", 10], 		// 11
            Bobowa: ["Sybill?? 10. wiersz 20.", 11], 		// 12
            Liw: ["Sybill?? 10. wiersz 21.", 12], 		//13
            Sob??tka: ["Sybill?? 10. wiersz 22.", 13], 		// 14
            Kop??nice: ["Sybill?? 10. wiersz 23.", 14], 		// 15
            J??rocin: ["Sybill?? 10. wiersz 24.", 15], 		// 16
            Przeworsko: ["Sybill?? 10. wiersz 4.", 16], 		// 17
            Striyk??w: ["Sybill?? 10. wiersz 5.", 17], 		// 18
            Rzemie??: ["Sybill?? 10. wiersz 6.", 18], 		// 19
            Syroczec: ["Sybill?? 10. wiersz 7.", 19], 		// 20
            Wysoki??: ["Sybill?? 10. wiersz 8.", 20], 		// 21
        },
        
        Wilk??: {
            Grod??isko: ["Sybill?? 3. wiersz 27.", 0.01], 		// 1
            Kostrzyn: ["Sybill?? 3. wiersz 28.", 1], 		// 2
            R??dziei??w: ["Sybill?? 3. wiersz 29.", 2], 		// 3
            Oborniki: ["Sybill?? 3. wiersz 30.", 3], 		// 4
            M????ogoszcz: ["Sybill?? 3. wiersz 31.", 4], 		// 12
            Cz??rnk??w: ["Sybill?? 3. wiersz 11.", 5], 		// 6
            Legonice: ["Sybill?? 3. wiersz 12.", 6], 		// 7 
            G??bic??: ["Sybill?? 3. wiersz 13.", 7], 		// 8
            Cieszylesy: ["Sybill?? 3. wiersz 14.", 8], 		// 9
            Op??towek: ["Sybill?? 3. wiersz 15.", 9], 		// 10
            Ni????nkowice: ["Sybill?? 3. wiersz 16.", 10], 		// 11
            M??rgonin: ["Sybill?? 3. wiersz 17.", 11], 		// 12
            Wieliczk??: ["Sybill?? 3. wiersz 18.", 12], 		//13
            Pi??tek: ["Sybill?? 3. wiersz 19.", 13], 		// 14
            Zg??obie??: ["Sybill?? 3. wiersz 20.", 14], 		// 15
            K??ocko: ["Sybill?? 3. wiersz 21.", 15], 		// 16
            Bnin: ["Sybill?? 3. wiersz 22.", 16], 		// 17
            La??k??rz??w: ["Sybill?? 3. wiersz 23.", 17], 		// 18
            Kielce: ["Sybill?? 3. wiersz 24.", 18], 		// 19
            Che??m??a: ["Sybill?? 3. wiersz 25.", 19], 		// 20
            Dukl??: ["Sybill?? 3. wiersz 26.", 20], 		// 21
        },
        
        Wydry: {
            Go??ancz??: ["Sybill?? 4. wiersz 32.", 0.01], 		// 1
            Ko??ieg??owy: ["Sybill?? 4. wiersz 33.", 1], 		// 2
            Br????sk: ["Sybill?? 4. wiersz 34.", 2], 		// 3
            K????czug??: ["Sybill?? 4. wiersz 35.", 3], 		// 4
            Horynin: ["Sybill?? 4. wiersz 36.", 4], 		// 12
            Lutomiersko: ["Sybill?? 4. wiersz 16.", 5], 		// 6
            Ciechan??w: ["Sybill?? 4. wiersz 17.", 6], 		// 7 
            G??rwolin: ["Sybill?? 4. wiersz 18.", 7], 		// 8
            Felsztyn: ["Sybill?? 4. wiersz 19.", 8], 		// 9
            Drzewic??: ["Sybill?? 4. wiersz 20.", 9], 		// 10
            Ryszkowo: ["Sybill?? 4. wiersz 21.", 10], 		// 11
            Inow????dz: ["Sybill?? 4. wiersz 22.", 11], 		// 12
            Nowotaniec: ["Sybill?? 4. wiersz 23.", 12], 		//13
            Strze????w: ["Sybill?? 4. wiersz 24.", 13], 		// 14
            Pop??w: ["Sybill?? 4. wiersz 25.", 14], 		// 15
            Ostr??da: ["Sybill?? 4. wiersz 26.", 15], 		// 16
            Zadybie: ["Sybill?? 4. wiersz 27.", 16], 		// 17
            R??tno: ["Sybill?? 4. wiersz 28.", 17], 		// 18
            Wr??nki: ["Sybill?? 4. wiersz 29.", 18], 		// 19
            Olsztynek: ["Sybill?? 4. wiersz 30.", 19], 		// 20
            Mi??dzych??d: ["Sybill?? 4. wiersz 31.", 20], 		// 21
        },
        
        Z??i??c??: {
            Radomskie: ["Sybill?? 9. wiersz 1.", 0.01], 		// 1
            O??ieczno: ["Sybill?? 8. wiersz 37.", 1], 		// 2
            Mie????isko: ["Sybill?? 8. wiersz 36.", 2], 		// 3
            R??ina: ["Sybill?? 9. wiersz 19.", 3], 		// 4
            M??k??w: ["Sybill?? 9. wiersz 18.", 4], 		// 12
            P??bij??nice: ["Sybill?? 9. wiersz 17.", 5], 		// 6
            W??sosze: ["Sybill?? 9. wiersz 16.", 6], 		// 7 
            Zegrze: ["Sybill?? 9. wiersz 15.", 7], 		// 8
            Sk????a: ["Sybill?? 9. wiersz 14.", 8], 		// 9
            Wilczyno: ["Sybill?? 9. wiersz 13.", 9], 		// 10
            Pczew: ["Sybill?? 9. wiersz 12.", 10], 		// 11
            Rywotycz: ["Sybill?? 9. wiersz 11.", 11], 		// 12
            Szubin: ["Sybill?? 9. wiersz 10.", 12], 		//13
            K??mie??: ["Sybill?? 9. wiersz 9.", 13], 		// 14
            Bodz??n??w: ["Sybill?? 9. wiersz 8.", 14], 		// 15
            Go????in: ["Sybill?? 9. wiersz 7.", 15], 		// 16
            Frystag: ["Sybill?? 9. wiersz 6.", 16], 		// 17
            B??dzy??: ["Sybill?? 9. wiersz 5.", 17], 		// 18
            Grod??ec: ["Sybill?? 9. wiersz 4.", 18], 		// 19
            Kra??nik: ["Sybill?? 9. wiersz 3.", 19], 		// 20
            Wa??ni??w: ["Sybill?? 9. wiersz 2.", 20], 		// 21
        },
        
    }

    const firstScreenTitles = {
        1: "Je??li kto d??ugo b??dzie ??yw",
        2: "Je??li kto b??dzie duchownym",
        3: "Je??li kto b??dzie podwy??szon",
        4: "Je??li kto b??dzie fortunny",
        5: "Je??li si?? czyje my??lenie spe??ni",
        6: "Je??li si?? dobrze o??eni??",
        7: "Je??li kto komu jest prawie",
        8: "Je??li kto b??dzie co wys??u??y n?? panie",
        9: "Je??li co dobrze czyni??",
        10: "Je??li kto b??dzie czego ????da",
        11: "Je??li si?? kto n?? mi??o??ci dobrze ma",
        12: "Je??li dobrze do kt??rego pana przysta??",
        13: "Je??li kt??ra porodzi syna albo dziewk??",
        14: "Je??li kt??r?? bia???? g??ow?? mi??uj??",
        15: "Je??li kt??ra pojmie dobrego m????a",
        16: "Je??li kt??ra rych??o z?? m???? p??jdzie",
        17: "Je??li kto b??dzie bog??tym",
        18: "Je??li dobrze by?? kupcem",
        19: "Jesli drog?? b??dzie szcze??liwa",
        20: "Je??li kto zgub?? najdzie",
        21: "Je??li kto z ??wi??t?? zejdzie",
    }

    const wr????by = {
        1: {
        1:"??adnemu B??g nie raczy?? da?? tego, <br/>I??by wiedzia?? wiek zdrowia swego.<br/>Wszak??e to powiem i??cie tobie,<br/>??e ty pomieszkasz na ??wiecie sobie.",
        
        2:"Ty masz my??li rozdwojone,<br/>Chcesz by?? popem, chcesz mie?? ??on??.<br/>Para as??w tobie prorokuje,  <br/>??e ci?? kurwa uczaruje.",
        
        3:"Sprawiedliwie?? ??ycz?? tego,<br/>Dojdziesz rz??du wysokiego,<br/>B??dziesz podwy??szon nad sw??j stan,<br/>Ze si?? temu b??dziesz dziwowa?? sam.",
        
        4:"Aby?? i??cie temu wierzy?? chcia??a,<br/>Nie b??dziesz ty rych??o m????a mia??a.<br/>Musz??-?? teraz prawd?? doj????.<br/>Z??a??, rozpustna, nie ??mie ci?? nikt poj????.",
        
        5:"Masz mie?? szcz????cie w rzeczy ka??dej<br/>W m??odo??ci i w staro??ci swej.<br/>Przyjdziesz ku stanu wysokiemu,<br/>Uczynisz cze???? domowi swemu.",
        
        6:"Chceszli w tym mej rady u??y??,<br/>Nie radz??-?? tu d??u??ej s??u??y??,<br/>Bo acz ty w tym panie nadziej?? masz,<br/>Wiecznie jednak po??ytku nie doznasz.",
        
        7:"Dobry panie, b??d?? w tym upewnieniu,<br/>My??li twoje przyjd?? ku sko??czeniu.<br/>Acz ty o tym ma??e dufanie masz,<br/>B??dzie?? lepiej, ni??li si?? nadziewasz.",
        
        8:"Ten, kt??ry ci?? poj???? obiecuje,<br/>Ju?? temu wierz, ??e ci?? nie mi??uje.<br/>Tak si?? to on tylko z ciebie ??mieje,<br/>Nie miej w nim ??adnej nadzieje.",
        
        9:"Cz??sto pomy??lasz o ??enie,<br/>A mnie te?? ????dasz o poradzenie.<br/>Je??li?? si?? bogata nagodzi,<br/>Wier???? jej poj???? nie szkodzi.",
        
        10:"Mo??esz o tym nik??ska nie my??li??,<br/>Aby?? kiedy mia?? panem by??,<br/>Bo si?? ku statku nic nie chcesz mie??, <br/>Jedno by te?? pi??, sra?? a je????.",
        
        11:"Bracie mi??y, miej si?? do kupiectwa, <br/>A poniechaj wszelkiego rzemios??a.<br/>B??dziesz li rzemie??lnikiem, wszytko stracisz,<br/>Kupcem b??d??c, tedy si?? zbogacisz.",
        
        12:"Bacz??, ??e?? si?? tym nie zachowam,<br/>Bo?? tu prawd?? w oczy wyznam,<br/>Wszytko wa??ysz na g??adkiego,<br/>A musisz mie?? ch??opa mierzioneg.",
        
        13:"Masz mie?? fortun?? w swej rzeczy,<br/>Kt??r?? teraz masz na pieczy.<br/>A w tym namniej nie pochybuj,<br/>Lecz si?? tu ju?? ku posesyjej gotuj.",
        
        14:"Kochasz si?? barzo w swej mi??ej,<br/>A rad czynisz wszytko dla niej.<br/>Ona te?? na ci?? silno ??askawa,<br/>Rada by ci?? w wychodzie widzia??a.",
        
        15:"Je??li chcesz rozkoszy u??y??,<br/>Radz??-?? duchownemu s??u??y??.<br/>B??dziesz mia?? wiele ku woli swej,<br/>Podzi??kujesz mi z rady mej.",
        
        16:"Ty by?? rada tego doczeka??a,<br/>Aby?? tym po??ogiem syna mia??a,<br/>Ale b??d?? upewniona w tym:<br/>B??dzie dziewka, nie b??dzie syn.",
        
        17:"Na??laduj w tym Boskiego uczenia,<br/>Nie daj z siebie nigdy pogorszenia,<br/>Dobremu si?? zaw??dy dobrze stanie,<br/>Miewa ka??dy dobre dokonanie.",
        
        18:"Ty by przysi??g??, ??e to przyja???? prawa,<br/>Gdy z tob?? kto ??askawie co sprawia.<br/>Ale ty mnie wierz, je??li chcesz,<br/>Kto co li??e, tego si?? strze??.",
        
        19:"Za to?? pewnie ??lubi?? mog??,<br/>??e masz mie?? szcz????liw?? drog??;<br/>Jedno wyjed?? co narychlej<br/>A nie odw??aczaj woley swej.",
        
        20:"Mo??esz przesta?? o tym my??li??,<br/>Aby?? za?? mia?? ku tej rzeczy przyd??,<br/>Kt??r???? zgubi?? niedbalstwem swym;<br/>B??dzie si?? inszy kocha?? w tym.",
        
        21:"Co?? przedsi??wzi???? ??miele konaj,<br/>A odradza?? sobie nie daj.<br/>B??dziesz mie?? po??ytek z tego<br/>I cze???? wi??ksz??, ni?? z czego inszego.",
        
        22:"B??d?? pokorny co mo??esz nawi??cej,<br/>A chciej si?? strzec zwady wszelkiej,<br/>Barzo mi?? twe fata strasz??,<br/>By?? nie przyszed?? o ??ywot przez czasu.",
        
        23:"Radz??-??, miej si?? ku ??wi??ceniu,<br/>Tak przyjdziesz i dobremu mieniu,<br/>Kap??a??stwo-?? dobro?? przystoi,<br/>Gdy?? si?? w tobie gamractwo ukoi.",
        
        24:"Powiem ci pewnymi s??owy,<br/>Niechaj??c tej pr????nej wymowy,<br/>Ty na wieki nie powstaniesz,<br/>Jeszcze rychlej lekko??ci dostaniesz. ",
        
        25:"Wiedz to, panno, za pewn?? wie????,<br/>Tobie rych??o przy m????u sie????.<br/>Nie wynidzie spe??na ??wier?? roku,<br/>B??dzie?? lega?? ma????onek przy boku.",
        
        26:"Cokolwiek b??dziesz pocz???? chcia??,<br/>Nigdy szcz????cia nie b??dziesz mia??,<br/>Bo?? barzo silnem gamratem,<br/>A u ka??dej statecznej ingratem.",
        
        27:"Miej nadziej?? w swoim panie:<br/>Dosy?? ci si?? za s??u??b?? dostanie,<br/>Ale b??d?? co najpilniejszy,<br/>Tego?? trzeba w czas dzisiejszy.",
        
        28:"My??lisz pr????no barzo wiele,<br/>Nie potka ci?? i??cie to wesele.<br/>A radz??-??, my??l co inszego,<br/>A poniechaj my??lenia pierwszego.",
        
        29:"S??uchaj pilnie, bia??a g??owo,<br/>Masz us??ysze?? wdzi??czne s??owo,<br/>Mi??uje ci?? panic nad wsze insze,<br/>Nie jest mu ??adne stworzenie milsze.",
        
        30:"S??uchaj pilnie, co poradz??,<br/>Wierz mi, ??e ci?? w tym nie zdradz??,<br/>Nie pojmuj ty nigdy ??ony,<br/>Patrz obe??cia z innej strony.",
        
        31:"B??dziesz Panem w rych??ym czasie,<br/>Jedno?? powiem drugie zasi??,<br/>Pami??taj mi??emu Bogu s??u??y??,<br/>Aby-?? da?? pa??stwa we zdrowiu u??y??.",
        
        32:"Lepiej by tobie buty szy??,<br/>Ni??liby mia?? kupczykiem by??,<br/>Bo?? pacho??ek barzo g??upi,<br/>Nie zyszczesz ty nic na kupi.",
        
        33:"S??u?? Bogu a b??d?? cnotliw??,<br/>Powiem ci nowin?? mi????,<br/>B??dziesz mie?? m????a pi??knego,<br/>Dobrego, m??drego i bogatego.",
        
        34:"Ta rzecz, o kt??r?? si?? starasz,<br/>Nie dojdzie ci?? sam to poznasz,<br/>A te?? nie masz o co prosi??,<br/>B??dziesz tego po chwili mie?? dosy??.",
        
        35:"B??d?? wes???? w swojej mi??o??ci,<br/>Bo w niej u??ywiesz rado??ci.<br/>Na tym ci jest mi??a twoja,<br/>Aby?? na wol?? czyni??a.",
        
        36:"Porucz si?? Bogu mi??emu,<br/>S??u?? przedsi?? panu pierwszemu,<br/>A nie przystaj do inszego,<br/>Chceszli potym nie ??a??owa?? tego.",
        
        37:"Aby?? temu zupe??nie wierzy??a,<br/>B??dziesz mia??a nadobnego syna,<br/>A dziewk?? te?? w drugim roce,<br/>B??dzie li kto lega?? przy twym boce.",
        },
        
        2: {
        1:"Od m??odo??ci zaw??dy?? z??ym by??,<br/>Ka??dy to po tobie baczy??.<br/>Przeto musisz marnie zgin????, <br/>Ha??ba ci?? nie mo??e min????.",
        
        2:"Aby?? tak ka??dy dobrze by??, <br/>Jako ten co?? na?? pomy??li??,<br/>Tedy by si?? u ludzi dobrze mia??,<br/>??eby w tym z ka??dym por??wna??.",
        
        3:"Ja by tobie chcia??a radzi??,<br/>By?? mi w tym chcia?? powolen by??,<br/>Aby?? da?? pok??j tej drodze,<br/>Nie chcesz li mie?? rany w nodze.",
        
        4:"Nie chciej tego powiedzie?? nikomu,<br/>Jest twa zguba u jednego w domu,<br/>A ma-?? si?? za?? i??cie wr??ci??,<br/>Jedno tego chciej pilen by??.",
        
        5:"U??ywaj w tym rady ludzkiej,<br/>Nie chciej nigdy rzeczy takiej,<br/>Kt??ra rada pr????ni mieszki  <br/>Kto utraci, niecudne to ??mieszki.",
        
        6:"Ty?? przyrodzenia trwa??ego<br/>I ??o????dka barzo wybornego,<br/>B??dzieszli si?? chowa?? miernie,<br/>Dojdziesz sta lat, to wiedz pewnie.",
        
        7:"Czysta?? rzecz jest kap??anem by??, <br/>Panu Bogu wiernie s??u??y??,<br/>Ale ja tak o tobie rozumiem,<br/>??e ty nigdy nie b??dziesz duchownem.",
        
        8:"Bacz?? to po twej postawie,<br/>Ze?? jest baczny w ka??dej sprawie,<br/>Przeto dla tej twej baczno??ci,<br/>Dojdziesz silnej dostojno??ci.",
        
        9:"Przejdzie jeszcze czasu wiele,<br/>Ni??li u ciebie b??dzie wesele.<br/>Tw?? rozpustno???? s??ysze?? wsz??dzie,<br/>??adny m??dry twym m????em nie b??dzie.",
        
        10:"Szcz????cie-?? wielkie obiecuj??, <br/>Na d??ugi czas to?? ??lubuj??,<br/>Cokolwiek b??dziesz chcia?? dzia??a??,<br/>W ka??dej rzeczy masz szcz????cie zna??.",
        
        11:"Miej ku tym s??owom pilne uszy,<br/>Wiem, ??e?? tw??j pan si??a tuszy,<br/>Ale dam si?? osra?? na krzy??,<br/>Je??li na nim co wys??u??ysz.",
        
        12:"Powiedz??-?? dryje, je??li chcesz:<br/>W swym my??leniu dobry koniec we??miesz,<br/>Jedno si?? ku temu pilnie miej,<br/>Panu swemu us??ugowa?? umiej.",
        
        13:"Daj ty pok??j m??odzie??cowi temu,<br/>Bo?? nier??wna niewymownie ku niemu.<br/> A te?? to wiedz, ??e ci?? nie mi??uje, <br/>??aski-?? nieco na ??art okazuje.",
        
        14:"Przeb??g pofolguj my??li swej,<br/>A o??e?? si?? co mo??esz najrychlej,<br/>Bo?? to b??dzie ku twemu polepszeniu,<br/>I przyjacielom ku pocieszeniu.",
        
        15:"C???? bych ci mia?? pr????no tuszy??,<br/>Panem wiecznie nie mo??esz by??,<br/>Leda z ??otrem ty si?? zbracisz,<br/>Tak, ??e co masz, z nim utracisz.",
        
        16:"Kupiectwa ja nie odradzam tobie,<br/>Bo w nim mo??esz si??a zwy??i?? sobie,<br/>Ale?? radz?? nic borgowa??,<br/>Chceszli na tym nie szkodowa??.",
        
        17:"Nie tak si?? to trzeba rz??dzi??,<br/>Kto ma ku dobremu m????u przyd??,<br/>Ale?? ty ju?? w rozpustno???? wst??pi??a<br/>I sromu?? ju?? barzo natraci??a.",
        
        18:"Nie troszcz si?? nic synu mi??y,<br/>Ta rzecz ciebie nic pochybi,<br/>Mo??esz si?? o ni?? nie troska??,<br/>Masz jej bez w??tpienia dosta??.",
        
        19:"Obacz si??, dudku, w swej g??upo??ci,<br/>Nie barzo?? poczesny ku mi??o??ci,<br/>Przesta?? serca kazi?? sobie,<br/>Bo?? nier??wna silno ku tobie.",
        
        20:"Nie s??u?? panu niewdzi??cznemu,<br/>Przysta?? ??miele ku inszemu.<br/>Rychlej zwy??szysz ni?? u tego,<br/>Dostaniesz czego wiecznego.",
        
        21:"Powiedz mi, co by?? woli??a,<br/>Je??li dziewk??, je??li syna?<br/>B??dziesz i??cie syna mia??a,<br/>Z tak?? dziur?? jako?? sama.",
        
        22:"Dla twojej sprawiedliwo??ci,<br/>B??dziesz mie?? dosy?? rado??ci.<br/>Na tym i na onym ??wiecie<br/>I z pami??ci?? wyborn?? umrzecie.",
        
        23:"Gdy?? to chcesz ode mnie wiedzie??,<br/>Musz??-?? to teraz powiedzie??:<br/>Ten, kt??rego?? teraz my??li??,<br/>Rad by ci?? w ??y??ce wody utopi??.",
        
        24:"Wiem, ??e si?? na drog?? bierzesz,<br/>A powiem ci, ??e nie??le chcesz,<br/>Bo to b??dzie ku powstaniu twemu <br/>I ku po??ytkowi niema??emu.",
        
        25:"Miej prac?? o inszej rzeczy,<br/>A zguby nie miej na pieczy,<br/>Bo by?? si?? na wieki troska??,<br/>Tedy nie wiem, by?? jej zasi?? dosta??.",
        
        26:"Jedno Boga pro?? o zdrowie,<br/>A miej wszystko pogotowie.<br/>Pocznisz sw?? rzecz, gdy jedno chcesz,<br/>I??cie z niej po??ytek we??miesz.",
        
        27:"Ten ??wiata d??ugo po??ywie,<br/>Je??li go kto nie zabije,<br/>Ale mu trudno byd?? tego,<br/>Bo nie czyni nic dobrego.",
        
        28:"Barzo pr??dkie dziwne my??li twoje,<br/>My??lisz drugdy na dwoj??, na troj??,<br/>Ale to niechaj ode mnie s??ynie,<br/>??e ci?? szara kapica nie minie.",
        
        29:"Acz si?? ty nad insze wynosisz,<br/>Jednak nic takiego nie uprosisz,<br/>Czym by?? mia?? nad insze s??yn????,<br/>Jeszcze ku temu waruj marnie zgin????.",
        
        30:"Tego maja, kt??ry ma przyd??,<br/>Masz i??cie za starego id??, <br/>Ale na tym nie b??dziesz szkodowa??,<br/>B??dziesz m??odsze od niego mi??owa??.",
        
        31:"Gdy?? to chcesz ode mnie wiedzie??,<br/>Ninacz szcz????cia nie b??dziesz m??e??,<br/>Jeszcze-?? musz?? ten strach zada??,<br/>Waruj gard??a marnie strada??.",
        
        32:"To jest pewna, synaczku, nowina,<br/>Mi??uje ci?? tw??j pan jako syna.<br/>Z jego r??ki masz panem by??,<br/>Jedno mu chciej wiernie s??u??y??.",
        
        33:"Wielka g??upo???? jest to my??li??,<br/>Ku czemu cz??owiek nie mo??e przyd??.<br/>Takowe ty my??lenie masz,<br/>Przeto te?? w nim wesela nie uznasz.",
        
        34:"Nie w??tp namniej w swoim mi??ym,<br/>Ma ci?? g????boko w sercu swym.<br/>Nie b??dzie mu taka ??adna mi??a,<br/>Kt??ra by ci?? do niego skazi??a.",
        
        35:"Radz??-??, aby?? nie pomy??la??,<br/>By?? si?? kiedy o??eni?? mia??,<br/>Bo?? ??ona zaw??dy na??aje,<br/>B??dziesz u niej sta?? za jaje.",
        
        36:"Pierwej nie b??dziesz skarbu mie??,<br/>A?? musisz na swym chlebie sie????.<br/>Po tym dojdziesz zacnej ??ony,<br/>B??dzie?? ros??o z ka??dej strony.",
        
        37:"To wiedz, ??e ty z kupiectwa nic nie masz,<br/>A te?? z rodu s??owa nierad trzymasz,<br/>A tacy wi??c wszytko utracaj??,<br/>Co w kupiectwie s??owa nie trzymaj??.",
        },
        
        3: {
        1:"Kiedy by?? mi wierzy?? chcia??a,<br/>B??dziesz w rychle m????a mia??a,<br/>A po??ywiesz z nim bytu dobrego,<br/>Nie b??dziesz li patrzy??a inszego.",
        
        2:"Pi??knie twa rzecz z przodku pojdzie,<br/>Lecz ci?? na koniec nie dojdzie,<br/>Bo?? przekazi towarzysz tw??j,<br/>Ka??dy woli po??ytek sw??j. ",
        
        3:"B??d?? w tej mi??o??ci serca dobrego,<br/>Dostaniesz u mi??ej wszego.<br/>A umiem powiedzie?? tobie,<br/>??e?? nie ma milszego sobie.",
        
        4:" Umy??li??e?? sobie indzie przysta??,<br/>Ale tam nic nie masz zyska??.<br/>Cynek z asem tobie wiernie radzi??,<br/>By?? si?? na obietnicy nie sadzi??.",
        
        5:" Mi??a pani, b??d?? weso??a z tego,<br/>Doczkasz wrichle p??odu nadobnego.<br/>A taki p????d b??dziesz mia??a,<br/>Jakiego?? od Boga po????da??a.",
        
        6:"Synaczku, s??uchaj co?? powiem,<br/>To?? m??wi??, o czym dobrze wiem,<br/>Nie by??e?? za m??odu w grozie,<br/>Boj?? si??, by?? nie by?? na powrozie.",
        
        7:"Ten, o kt??rym teraz pytasz,<br/>Mi??uje ci??, sam dobrze znasz,<br/>Ale go ty nie mi??ujesz zasi??,<br/>Ukazujesz sw?? niecnot?? na si??. ",
        
        8:"Droga, kt??r?? masz przed sob??,<br/>Chc?? si?? ja za??o??y?? z tob??,<br/>Ze?? b??dzie ku wielkiej szkodzie<br/>I sam przyjdziesz ku dziwnej przygodzie.",
        
        9:"Chceszli dosta?? zguby swojej,<br/>S??uchaj??e w tym rady mojej,<br/>Chciej szuka?? w kupie kamienia,<br/>Tam j?? najdziesz bez w??tpienia.",
        
        10:"Je??li mi?? w tym chcesz pos??ucha??,<br/>Radz??-?? tej rzeczy pok??j da??,<br/>Kt??r?? teraz na my??li masz,<br/>Je??li poczniesz, ??le jej dokonasz.",
        
        11:"Chcesz li, aby?? d??ugo ??yw by??,<br/>Radz??-??, aby?? Bogu s??u??y??,<br/>Bo je??li nie umrzesz lecie,<br/>Pomieszkasz d??ugo na ??wiecie.",
        
        12:"B??dziesz duchownym, ale z??ym,<br/>Zgorszysz wiele ludzi przyk??adem swym,<br/>A to?? ma nawi??cej szkodzi??,<br/>Ze ci?? kurwa za nos b??dzie wodzi??.",
        
        13:"??adny jak ??yw z rodu twego<br/>Nie dost??pi?? miejsca tak zacnego,<br/>Jakiego ty masz dost??pi??,<br/>Jedno nie chciej nazbyt sk??pi??.",
        
        14:"Mo??esz o tym ni k??ska nie my??li??<br/>Aby?? mia??a rych??o za kogo id??,<br/>Bo?? za m??odu barzo przebiera??a,<br/>Tak ??e?? te?? ju?? sobie podstarza??a.",
        
        15:"B??d?? pocieszon z powie??ci mej:<br/>Masz mie?? szcz????cie z ??aski Bo??ej.<br/>W ka??dej swej pobo??nej sprawie,<br/>Wszytko?? si?? szcz????liwie stanie.",
        
        16:"Wiecznie w tym nadziej?? nie miej,<br/>By?? wzi???? po??ytek z s??u??by swej,<br/>Bo tw??j pan jest barzo ??cis??y,<br/>A dzi?? dziwne lata przysz??y.",
        
        17:"My??lenie twe jest ci s??uszne dosy??,<br/>Spe??ni si??, b??dziesz li rych??o prosi??.<br/>Jedno w tym poczynaj ??miele,<br/>B??j zaspa?? gruszki w popiele.",
        
        18:"Pan, na kt??rego?? ty pomy??li??a,<br/>Na wieki nie b??dzie taki wi??a,<br/>Aby ciebie mi??owa?? mia??,<br/>Bo niesta??o???? w tobie pozna??.",
        
        19:"O??e?? si??, radz??-??, za m??odu,<br/>Chcesz li doczka?? nieco p??odu,<br/>Je??li omieszkasz do roku,<br/>Omierznie-?? ??ona przy boku.",
        
        20:"Tobie wiecznie n??dznikiem by??,<br/>Bo kto z m??odu nie chce robi??,<br/>Na to mu po tym przychodzi,<br/>??e wi??c z mantykami chodzi.",
        
        21:"Chceszli, synaczku, kupcem by??, <br/>Mo??esz kupcz??c ku chlebu przyd??,<br/>Ale chciej by?? nieleniwy,<br/>Sprawny, baczny a nie ????ywy.",
        
        22:"??al by si?? Bo??e kogo dobrego,<br/>By mia?? ????da?? towarzystwa twego,<br/>Gdy?? tak jest mierziona i leniwa,<br/>A to gorsza, ??e?? niesromi????liwa.",
        
        23:"Chceszli mie?? sw?? rzecz powoli, <br/>Napraw??e swe przyjacio??y,<br/>A sam przed si?? pilno???? dzia??aj,<br/>Towarzyszom si?? nie zwierzaj.",
        
        24:"Wiedz ty o tym, i?? tam, gdzie mi??ujesz,<br/>Na mi??o??ci namniej nie zyskujesz,<br/>A prawie si?? twoja mi??a wstydzi,<br/>Gdy ci?? kolwiek w swoim domu widzi.",
        
        25:"Radz??-?? do m??odszego przysta??,<br/>Chcesz li nieco w s??u??bie zyska??,<br/>Bo m??ody pospolicie utraca,<br/>Tam s??uga zwy??i, kt??ry nie straca.",
        
        26:"Aby?? temu wierzy?? chcia??a,<br/>Ty nie b??dziesz syna mia??a,<br/>Ale dziewczysko szkarade,<br/>Lisowate, ku temu zaw??dy blade.",
        
        27:"Na saniach si?? nie chciej wozi??,<br/>To?? by mia??o zdrowiu szkodzi??,<br/>B??dziesz li si?? tej wo??by strzedz,<br/>Umrzesz dobrze, to i??cie wiedz.",
        
        28:"Cz??owiek, kt??rego w my??li masz,<br/>Jest zakryty, a tego nie znasz.<br/>Mo??e?? si?? stawi?? ??askawie,<br/>Ale?? z ??adnym nigdy nie jest prawie.",
        
        29:"Na t?? drog?? prze??piecznie jed??,<br/>Masz mie?? szcz????cie, to i??cie wiedz.<br/>A radz??-??: chciej rych??o jecha??,<br/>Masz tam siln?? fortun?? zna??.",
        
        30:"Co?? straci??, ju?? nie my??l o tym, <br/>Przyrzekam ci to s??owem swym, <br/>??e?? si?? to ju?? wr??ci?? nie ma,<br/>Bo ten, co wzi????, du??e trzyma.",
        
        31:"S??uszn?? ty rzecz na my??li masz,<br/>A ??le czynisz, ??e jej mieszkasz,<br/>Przeto nie odk??adaj wi??cej,<br/>Bo b??dziesz mie?? po??ytek z niej.",
        
        32:"Nie wiem, jako?? to mam zjawi??,<br/>Nie chcia??a?? bym serca kazi??,<br/>Radz???? si?? konia barzo strzedz,<br/>Nie chcesz li przed czasem umrze??.",
        
        33:"Duchownym by?? jest rzecz czysta,<br/>Ty nim b??dziesz, to jest ista,<br/>A jedziesz prawie na gody,<br/>B??dziesz mie?? dobre dochody.",
        
        34:"Bacz?? dobrze, na kt??ry stan godzisz,<br/>Ka??dy to zna, a tym sobie szkodzisz,<br/>Bo?? ju?? podni??s?? wysoki umys?? sw??j,<br/>Ubie??y ci?? w tym nieprzyjaciel tw??j.",
        
        35:"Ju?? si?? twa rzecz nie odwlecze,<br/>P??jdziesz za m???? w przysz??ym lecie,<br/>Wszak??e?? radz??, by?? milcza??a,<br/>By ci?? insza w tym nie ubie??a??a.",
        
        36:"Zna??, ??e?? si?? w czepku nie urodzi??,<br/>Nie w czase?? po szcz????cie chodzi??,<br/>Przeto?? si?? go nie dosta??o<br/>I rozumu te?? masz ma??o.",
        
        37:"S??u?? przedsi?? z wielk?? pilno??ci??,<br/>We??miesz zap??at?? z rado??ci??,<br/>Czy??cie to po twym panie zna??,<br/>Ze?? ma dosy?? za s??u??b?? da??.",
        },
        
        4: {
        1:"Nie my??l pyszno, mi??y bracie,<br/>Ju?? mi?? jest srom barzo za ci??.<br/>Jednak z twego my??lenia nic,<br/>Jeszcze ku temu waruj o rozum przyd??.",
        
        2:"By?? ty temu wierzy?? chcia??a,<br/>Nigdy?? wi??kszej wierno??ci nie zna??a,<br/>Jak?? ten ma naprzeciwko tobie,<br/>Co?? go teraz pomy??li??a sobie.",
        
        3:"My??lisz ty pilno o ??enie,<br/>I??by-?? si?? z ni?? dosta??o imienie.<br/>Ale by-?? mia??a po sobie tysi??c,<br/>Nie radz?? jej tobie poj????.",
        
        4:"B??dziesz panem znamienitym<br/>I w swym pa??stwie tak obfitym,<br/>I?? ka??d?? rzecz b??dziesz m??g?? mie??,<br/>Kt??r?? jedno b??dziesz sam chcie??.",
        
        5:"Kupcem by?? ani pomy??laj,<br/>In??dy obchodu szukaj.<br/>Je??li b??dziesz, b??d?? w nadziei,<br/>??e masz zgin???? od z??odziei.",
        
        6:"Chceszli mie?? m????a dobrego,<br/>Bierz porad?? od starego,<br/>A nie b??d?? harda ??adnemu,<br/>Bogatemu i te?? ubogiemu.",
        
        7:"Si??a w tym cz??owjeku dufasz,<br/>Przez kt??rego sw?? rzecz jednasz,<br/>A m??g?? ci by pom??c czy??cie,<br/>Ale?? nie chce, to wiedz i??cie.",
        
        8:"Nie troszcz si?? nic w mi??o??ci swej,<br/>Nie mo??esz si?? u ??adnej mie?? lepiej.<br/>W dobrej jest a woli z sob??,<br/>B??dzie rych??o w jednym ??o??u z tob??.",
        
        9:"Nie chc???? radzi?? tam przystawa??,<br/>Gdzie nic nie chc?? z ??aski dawa??,<br/>A ty chcesz by?? u takiego,<br/>Co nie dawa i uroczystego.",
        
        10:"Pana Boga nie przestajesz prosi??,<br/>By ci?? raczy?? synaczkiem pocieszy??,<br/>Ot???? za proszenie twoje,<br/>Da-?? ich Pan B??g razem dwoje.",
        
        11:"To nagorszy obyczaj masz,<br/>??e si?? z kurwami przemieniasz,<br/>Dzi?? jedna, a jutro wt??ra,<br/> Strze??, by ci?? nie otru??a kt??ra.",
        
        12:"Wiem, ??e ci?? nie omyl?? w tym,<br/>Nie w??tp nic w przyjacielu swym,<br/>Bo?? si?? silno kocha w tobie,<br/>Inaczej nie daj powiada?? sobie.",
        
        13:"Nie jed??, radz??-??, gdzie?? umy??li??,<br/>Boby jednak nic nie zwy??i??,<br/>Jeszcze to tak chc?? powiedzie??,<br/>Musia??by w wi??zieniu siedzie??.",
        
        14:"Chciej by?? serca weso??ego,<br/>Masz nale???? z??odzieja swego,<br/>W poniedzia??ek, ni??li s??o??ce zajdzie,<br/>Przy kt??rym si?? twoja zguba najdzie.",
        
        15:"Chceszli nie ??a??owa?? potym,<br/>Niechaj tego, co masz w umy??le swym,<br/>Bo na tym utracisz si??a,<br/>Zab??aznujesz by naczystszy wi??a.",
        
        16:"Bacz??c twoje przyrodzenie,<br/>Czas pocz??cia, narodzenie,<br/>Mog??-?? to pewnie ??lubowa??,<br/>??e masz dobrze przez sto lat trwa??.",
        
        17:"Kap??anem tym nie b??dziesz i??cie,<br/>A te?? ci tak barzo czy??cie,<br/>Zw??aszcza gdy te lata nastawai??,<br/>I?? te?? na kap??any i wrony krakaj??.",
        
        18:"B??d?? pocieszon z powie??ci mej, <br/>Uczynisz cze???? rodzinie swej,<br/>Bo masz zacnym cz??ekiem zosta??,<br/>Bracia twoi maj?? przez ci?? powsta??.",
        
        19:"Pyszna??, z??a,  ku temu plugawa,<br/>Niewdzi??czna, a smrodzisz rada,<br/>NI??eby jaki ch??op szalony,<br/>To?? by sobie ????da?? takiej ??ony.",
        
        20:"Dufaj szcz????ciu, cokolwiek chcesz czyni??,<br/>Nie zdradzi ci??, nie b??dziesz go wini??,<br/>B??dzie?? we wszem folgowa??o,<br/>By te?? i z powinno??ci dzia??a??o.",
        
        21:"Mo??esz dobrze sam pobaczy??,<br/>??e tu nie masz nic wys??u??y??. <br/>Poniewa?? ci pan nie daje,<br/>To zwy??isz, co?? pr????no ??aje.",
        
        22:"Pro?? Boga, a miej si?? ku temu,<br/>A s??u?? pilnie panu swemu.<br/>Spe??ni si?? twoje my??lenie,<br/>Przez jednego pana przyczynienie.",
        
        23:"Nie miej nadzieje w swym mi??ym,<br/>Nie wierz jego s??owom pi??knym,<br/>Na to?? si?? pilnie nasadzi??,<br/>Aby ci?? na twej czci przyzdradzi??.",
        
        24:"Je??li chcesz mnie starej s??ucha??,<br/>Radz??-?? rychlej ??ony szuka??,<br/>Bo niewolny si??a za rok stoi,<br/>I barzo rad ku rt??ci przystoi.",
        
        25:"Ty na wieki panem nie mo??esz by??<br/>I to, co masz, wszytko masz utraci??,<br/>Bo tw??j przodek nabywa?? barzo ??le,<br/>Tak ??e?? te?? to imienie odejdzie.",
        
        26:"Dzier???? ja si??a o tobie,<br/>Gdy z m??odu my??lisz o sobie,<br/>Radz??-?? tym rychlej kupcem by??,<br/>Masz kupiectwie ku pa??stwu przyd??.",
        
        27:"Przez tw?? pych?? i pierzchliwo????<br/>Odp??oszysz sobie m??????w do????,<br/>Wszak mi to jeden powiada??,<br/>Gdy ci?? pozna??, by mu po g??bie da??.",
        
        28:"W swej rzeczy si?? nic nie troszczy,<br/>Jedno jeszcze ma???? chwil?? po??d??y.<br/>Nie mo??e?? to inaczej by??,<br/>Ta rzecz ciebie nie ma chybi??.",
        
        29:"Ty w swej szalonej mi??o??ci,<br/>Masz przyd?? ku wielkiej lekko??ci.<br/>A musz??-?? jawnie powiedzie??:<br/>B??dzie?? o tym wiele ludzi wiedzie??.",
        
        30:"Nie dawaj sobie rozradza??,<br/>Aby?? nie mia?? indzie przysta??,<br/>Gdy tw??j pan pr????no swarzy,<br/>A zali?? si?? indzie lepiej zdarzy.",
        
        31:"Wier?? nic wiem, by?? ty syna mia??a,<br/>Bo?? m????owi nic folgowa??a.<br/>Wi??cej?? godzi??a sobie,<br/>Przeto dziewk?? obiecuj?? tobie.",
        
        32:"Nic chciej nazbyt gmyra?? w tym,<br/>Bo?? takowe dyjabe?? bierze.<br/>Miej nadziej?? w Bodze sta????,<br/>Zejdziesz z ??wiata z wielk?? chwa????.",
        
        33:"Przeb??g, b??d?? opatrzniejszy w tym,<br/>Nie wierz nigdy s??owom pi??knym,<br/>Nic trzeba si?? nic na s??owa kwapi??,<br/>Bo kto g??aszcze ten wi??c chce u??api??.",
        
        34:"Kiedy chcesz, wyjecha?? mo??esz<br/>Na tej drodze si?? wspomo??esz.<br/>Wszytko?? p??jdzie po woli twej,<br/>Podzi??kujesz mi z rady mej.",
        
        35:"Pr????no by?? mia?? kogo wini??,<br/>Nie chcia??e?? pilno??ci czyni??,<br/>P??ki by??a ??acniejsza rzecz,<br/>Lecz ju?? zgub?? wieziono precz.",
        
        36:"Powiadam to tobie, dobry panie,<br/>Twa rzecz ma mie?? dobre dokonanie,<br/>A chceszli to wrychle pozna??,<br/>Chciej nak??adu nie ??a??owa??.",
        
        37:"By si?? ciebie i Apollo podj????,<br/>By?? te?? wszytk?? aptek?? wzi????,<br/>Tedy z tego ??wiata zejdziesz,<br/>Skoro w pierwsz?? niemoc przyjdziesz.", 
        },
        
        5: {
        1:"Panu Bogu barzo dzi??kuj?? z tego,<br/>??e rych??o b??dziesz piastunem jego,<br/>A ju?? si?? ku temu gotuj,<br/>Pocieszysz tym wszytek r??d sw??j.",
        
        2:"Nie przyjdziesz na wieki ku temu,<br/>By?? uczyni?? cze???? domowi swemu,<br/>Bo sam przez si?? chcesz dojd?? tego,<br/>Wa??nisz sobie na ??wiecie ka??dego.",
        
        3:"Jako skoro przysz??e ??wi??ta przyjd??,<br/>Tedy si?? do was gamraci zejd??.<br/>Tam si?? jeden pi??kny trafi,<br/>Kt??ry ciebie do matki po??api.",
        
        4:"Nie my??l o tym, aby?? fortun?? mia??,<br/>Sam to poznasz, kiedy b??dziesz igra??,<br/>??e?? szcz????cie ma przeciwne by??,<br/>Tak ??e zaw??dy musisz nieco straci??.",
        
        5:"Potrwa?? jeszcze d??ugo musisz,<br/>Ni??li szcz????cia przy swym panie skusisz,<br/>Ale je??li tw??j pan nie utraci,<br/>Wierz mi, ??e?? s??u??b?? dobrze zap??aci.",
        
        6:"Powiem ci kr??tkimi s??owy,<br/>Nie my??l pr????no, nie psuj sobie g??owy,<br/>Bo cokolwiek tw??j rozumek stroi,<br/>Wszystko to za g??wno stoi.",
        
        7:"Ten cz??owiek, co my??lisz o nim,<br/>Jest ci przyjacielem prawym,<br/>Masz by?? prawie ??askawa na niego,<br/>Bo?? ??yczy czci i wszego dobrego.",
        
        8:"Niechaj ??ony, panie bracie mi??y,<br/>Bo ja bacz??, ??e w tobie nie masz si??y,<br/>A ta rzecz chce wielkiej mocy,<br/>Robi?? zimie, lecie, we dnie, w nocy.",
        
        9:"To proroctwo ciebie nie omyli,<br/>B??dziesz panem w rych??ej chwili,<br/>Ale si?? strze?? by?? nie upad??,<br/>Kiedy?? b??dzie pi????dziesi??t lat.",
        
        10:"Synu, nie radz??-?? kupcem by??,<br/>Chceszli wszego nie utraci??,<br/>Bo co ociec z matk?? naby??,<br/>To by ty kupcz??c utraci??.",
        
        11:"Twa cudno????, dobro??, mierno???? w mowie,<br/>Ta zjedna dobrego m????a tobie,<br/>Bo?? jest godna m????a szlachetnego,<br/>Jedno si?? nie zgarszaj z chwalenia mojego.",
        
        12:"By?? najwi??ksz?? pilno???? dzia??a??,<br/>Tedy tego nie b??dziesz mia??,<br/>Na co z dawna pilnie godzisz,<br/>Uporem swym sobie szkodzisz.",
        
        13:"Mi??uj prze??piecznie, ale taj,<br/>Towarzyszom si?? nie zwierzaj,<br/>Bo?? si?? na to nasadzili,<br/>By ci?? u mi??ej skazili.",
        
        14:"Nic przystawaj ty do ??onatego,<br/>Trafisz pani?? zadku wa??niwego,<br/>Nie b??dzieszli na ni?? ??azi??,<br/>B??dzie ci?? do pana kazi??.",
        
        15:"Pani, b??d?? w rado??ci z swoim panem,<br/>Syna nosisz, zdziej mu Janem,<br/>Doczekasz po nim rado??ci,<br/>Jedno go miej za m??odu w karno??ci.",
        
        16:"W ka??dej zwadzie ciebie znajdzie,<br/>Lub we dnie, lub s??o??ce zajdzie,<br/>Nie b??dzieszli si?? tych zwad strzedz,<br/>Zabij?? ci??, to i??cie wiedz.",
        
        17:"Nie wiem, aby?? jednego mia??,<br/>Co?? by tak wiele sprzyja??,<br/>Jako ten, co o nim my??lisz.<br/>Na tym si?? nic nie omylisz.",
        
        18:"Prosz?? ci??, radzi?? sobie daj,<br/>Tej drogi teraz poniechaj,<br/>P??jdzieszli, nie lza mi tego prze??,<br/>??e masz na tej drodze umrze??.",
        
        19:"Wiem, ??e b??dziesz rad nowinie,<br/>Zguba twoja ju?? nie zginie,<br/>Bo o niej dobry cz??owiek wie,<br/>Ale?? jeszcze tak rych??o nie powie.",
        
        20:"Powiadam to tobie prawie,<br/>Nie miej nadzieje w swej sprawie,<br/>Aby?? mia??a szcz????liwie id??,<br/>Musisz pr????no o nak??ad przyd??.",
        
        21:"Strze?? si?? apteki co mo??esz,<br/>Bo tym wi??cej skazisz, ni?? pomo??esz.<br/>Je??li si?? w lekarstwa nie wdasz,<br/>Dziewi????dziesi??t lat doczekasz.",
        
        22:"Je??li si?? mo??esz z tego wykr??ci??,<br/>Mi??y bracie, nie dawaj si?? ??wi??ci??,<br/>??le czyni, kto ci?? do kielicha stroi,<br/>Lepiej ci z konewk?? przystoi.",
        
        23:"Dobry panie, prawd??-?? powiem,<br/>Masz by?? podwyszon w stanie swym.<br/>B??d???? chcie?? niekt??rzy kazi??,<br/>Ale?? to nie ma nic wadzi??.",
        
        24:"O tym, dziewko, za pewne wiedz,<br/>B??dzie si?? ciebie ka??dy strzec,<br/>Bo?? nazbyt ??wiebodna w mowie,<br/>A to nie przys??usze bia??ejg??owie.",
        
        25:"Matka, ociec i czas fortunny by??,<br/>Dzie??, godzina, w kt??r???? si?? narodzi??,<br/>Masz pocieszy?? swych przyjaci???? wiele,<br/>B??d?? z ciebie mie?? wielkie wesele.",
        
        26:"??al mi ci??, m??j mi??y bracie,<br/>??e tw??j pan ??le baczy na ci??.<br/>Radz??-?? pomy??li?? o sobie,<br/>Bo?? ten pan nic nie da tobie.",
        
        27:"Dziwne ty przyrodzenie masz,<br/>Wiele my??lisz, ma??o dzia??asz,<br/>Wszak??e ci?? w tym nie chc?? wini??<br/>Ma cz??ek d??ugo my??li??, rych??o czyni??.",
        
        28:"Wiedz, ??e ci?? tw??j panic nie mi??uje,<br/>Chocia?? nazbyt wiele obiecuje,<br/>Daszli si?? mu za nos wodzi??,<br/>B??dzie twej czci barzo szkodzi??.",
        
        29:"Powiem ci pewnymi s??owy:<br/>Pojmiesz dziewk??, nie dostaniesz wdowy,<br/>A je??li wi??c tego nie omieszkasz,<br/>W rado??ci z ??onk?? pomieszkasz.",
        
        30:"To si?? ten ub??stwa barzo boi,<br/>A pa??stwo mu namniej nie przystoi,<br/>I trudno by mia?? ku temu przy????,<br/>Musi wiecznie n??dznikiem by??.",
        
        31:"Gdy twe fata praktykuj??,<br/>Kupcem masz by??, tobie obiecuj??,<br/>Ale musisz gard??o wa??y??,<br/>Chceszli z kupiectwa panem by??.",
        
        32:"S??uchaj, c??rko, pilnie tego,<br/>Nie masz mie?? m????a dobrego,<br/>Sama go skazisz sw?? z??o??ci??,<br/>Ale tego po??ywiesz z lekko??ci??.",
        
        33:"Na to mo??esz przespiecznie spa??,<br/>Nie trzeba?? si?? namniej troska??,<br/>Twoja si?? rzecz dobrze ??ciele,<br/>Doko??czy si?? do wielkiej niedziele.",
        
        34:"Hamuj si?? od swojej mi??o??ci,<br/>Nie ukazuj na si?? tej g??upo??ci,<br/>Nie baczysz nic, co si?? dzieje,<br/>Wszak si?? ma??pa z ciebie ??mieje.",
        
        35:"Id?? s??u??y??, gdzie dawno my??lisz,<br/>Bo tam i??cie si??a zwysysz,<br/>Masz mie?? pana ??askawego<br/>I ku temu barzo datnego.",
        
        36:"Prawda, ??e by?? dziewk?? wola??a,<br/>Ale to wiedz, ??e b??dziesz syna mia??a.<br/>Mocniejszy jest tw??j pan ni?? ty w ??o??u,<br/>Przeto si?? po nim synowie mno????.",
        
        37:"Jedno m????atkom daj pok??j,<br/>Tedy si?? nic z??ego nie b??j,<br/>Umrzesz jako dobremu przys??usze,<br/>A nie zawiedziesz swej dusze.",
        },
        
        6: {
        1:"Z tym cz??owiekiem, co na my??li masz,<br/>Nie towarzysz, bo na tym nie wygrasz. <br/>Bo?? dobrego twego nie sprzyjaje,<br/>Gdy je widzi, serce mu si?? kraje.",
        
        2:"Gdzie?? umy??li??, ju?? wi??c wsiadaj,<br/>Na dalszy czas nie odk??adaj,<br/>Chceszli tego po??ytek mie??,<br/>Nab??dziesz tam, co b??dziesz chcie??.",
        
        3:"Upewniam ci?? jako brata,<br/>Nie wr??ci si?? twoja strata,<br/>Bo ju?? w dziwne r??ce wpad??a,<br/>A tam na wieki przepad??a.",
        
        4:"W rzeczy, kt??r?? przed sob?? masz,<br/>I??cie szcz????cie wielkie uznasz.<br/>Jedno w??dy z ni?? po??pieszy?? chciej,<br/>We??miesz wielki po??ytek z niej.",
        
        5:"Za to ty sobie pewnie masz,<br/>??e?? to zdrowo, i?? si?? tak opijasz,<br/>Ale tego chciej pewien by??,<br/>??e masz w rychle ??ywot przepi??.",
        
        6:"Radz??-??, zosta?? ju?? kap??anem lecie,<br/>Chceszli u??y?? rozkoszy na ??wiecie,<br/>Ale chciej by?? przyk??adu dobrego,<br/>Nie chceszli wzi???? upadku dusznego.",
        
        7:"Tobie na wieki nie powsta??,<br/>Musisz tak w swej jusze zosta??,<br/>Pr????no si?? wysoko wznosisz,<br/>Nic zacnego sobie nie uprosisz.",
        
        8:"Ku czemu masz przyd??, by?? wiedzia??a,<br/>I??cie by si?? barzo radowa??a,<br/>Ju?? mo??esz na gody prosi??,<br/>Masz tych czas??w za wdowca i????.",
        
        9:"Ty masz szcz????cia barzo ma??o,<br/>Tak mi si?? o tobie zda??o,<br/>A w??dy si?? wi??c na nie sadzisz,<br/>Nie dufaj mu, i??cie si?? sam zdradzisz.",
        
        10:"Ty na swej s??u??bie dzisiejszej,<br/>Nie masz podj???? szkody ??adnej, <br/>To jest w tym otucha twoja,<br/>Zap??aci-?? si?? dobrze s??u??ba twoja.",
        
        11:"Ten si??a my??li za m??odu,<br/>Rad by przyszed?? ku dobremu obchodu,<br/>Ale mu tak zez, cynki prorokuje,<br/>??e on pr????no sobie g??ow?? psuje.",
        
        12:"Przez tw?? wielk?? mierno???? w mowie<br/>Ka??dy b??dzie przyjacielem tobie.<br/>I ten, co?? go teraz pomy??li??a,<br/>Jest ci dobrze, to?? pewna nowina.",
        
        13:"Nie kwap si?? pojmowa?? ??ony,<br/>Bo?? ten szach nie ma obrony,<br/>Kto raz pojmie, ju?? si?? nie wywierci,<br/>Musi z ??on?? mieszka?? a?? do ??mierci.",
        
        14:"Ty si?? mo??esz nic nie troska??,<br/>Bo masz w rychle panem osta??,<br/>Umrze jeden pan bogaty,<br/>Spadn?? na ci?? jego p??aty.",
        
        15:"Prosz?? ci??, niechaj kupiectwa,<br/>Radszej si?? miej do rzemios??a,<br/>Bo?? w kupiectwie potrzeba chytro??ci,<br/>A w rzemie??le zejd?? si?? i pro??ci.",
        
        16:"B??d?? pocieszona z mej mowy,<br/>Chciej mie?? posag gotowy.<br/>Barzo rych??o masz za m???? id??,<br/>A m???? ma nazbyt dobry by??.",
        
        17:"W tej swej rzeczy, kt??r???? pocz????,<br/>Ja nie tusz??, by?? rado???? wzi????,<br/>Bo tw??j towarzysz nie le??y,<br/>Pewnie, ??e ci?? w tym ubie??y.",
        
        18:"Co mi dasz, ??e?? prawd?? powiem?<br/>To?? m??wi??, o czym dobrze wiem,<br/>O tym twoja mi??a my??li,<br/>By??cie ku sobie rych??o przyszli.",
        
        19:"Mi??y bracie, s??uchaj mi?? w tym,<br/>A nie dufaj w rozumie swym,<br/>Nie radz??-?? indzie przystawa??,<br/>Bo?? tam nie b??d?? nic dawa??.",
        
        20:"Ta mi?? dosz??a nowina o tobie,<br/>??e ty masz urodzi?? syna sobie,<br/>Kt??ry b??dzie to szcz????cie mia??,<br/>B??dzie go ka??dy mi??owa??.",
        
        21:"Radz??-?? koni si?? wystrzega??,<br/>Chceszli gard??a ??le nie strada??.<br/>Zw??aszcza, kt??ry sier??ci siwej,<br/>Tego si?? strze??, co nawi??cej.",
        
        22:"Synu mi??y, wiernie radz?? tobie,<br/>Tego, o kim my??lisz, nie tra?? sobie,<br/>Bo?? jest przyjacielem silnym,<br/> <br/>By-?? mia?? by?? bratem rodzonym.",
        
        23:"By?? wiedzia??, co ci?? ma potka??,<br/>Nie kwapi??by?? si?? precz jecha??.<br/>Maj?? ci?? tam silno zdradzi??,<br/>Przeto nie je??d??, daj sobie poradzi??.",
        
        24:"S??uchaj pilnie tych moich s????w:<br/>Szukaj swej zguby u ??yd??w,<br/>A kt??ry ??yd siwizn?? w brodzie ma,<br/>U tego?? jest w zastawie zguba twa.",
        
        25:"Prawdziwie?? powiem swe zdanie,<br/>Co si?? w twojej rzeczy stanie,<br/>Nie ma?? i??cie szcz????liwie id??,<br/>Musisz dla niej ku szkodzie przyd??.",
        
        26:"Ty mocne przyrodzenie masz,<br/>A rad si?? te?? miernie chowasz,<br/>B??dzieszli tak zaw??dy dzia??a??,<br/>B??dziesz ??yw, dok??d b??dziesz chcia??.",
        
        27:"Kap??anem ty na wieki nie b??dziesz,<br/>A w mie??cie te?? nigdy nie osi??dziesz,<br/>Jedno si?? po ??wiatu b??dziesz w????czy??,<br/>Patrz??c, gdzie by g??b?? w piwie moczy??.",
        
        28:"Z ??aski Boga wszechmocnego,<br/>Masz dost??pi?? rz??du wysokiego,<br/>A masz ku tej dostojno??ci przyd??,<br/>??e ci?? wszyscy b??d?? powinni czci??.",
        
        29:"Odpu??????e mi, bia??ag??owo,<br/>Musz?? rzec prawdziwe s??owo,<br/>Tobie nigdy za m???? nie i????,<br/>Musisz wiecznie bez m????a by??.",
        
        30:"Szcz????liwie?? si?? wszytko b??dzie wodzi??,<br/>Sam mi??y B??g z tob?? b??dzie chodzi??,<br/>Ale go nie gniewaj, chceszli,<br/>Aby?? mia?? szcz????cie do ??mierci.",
        
        31:"Synu mi??y, by?? wierzy?? chcia??,<br/>Nie b??dziesz tu wys??ugi mia??,<br/>Bo tw??j pan ma dziwne obyczaje,<br/>Obiecuje??, ale nic nie daje.",
        
        32:"Co?? umy??li??, z tym po??pieszaj,<br/>A nikomu si?? nie zwierzaj,<br/>Bo, jako?? ja zin??d s??ysz??,<br/>Chc???? przekazi?? towarzysze.",
        
        33:"My??lisz pilno o swym mi??ym,<br/>Aby?? by??a weso??a z nim.<br/>A on jest takowy b??azen,<br/>Rad by ci?? by?? wiecznie pro??en.",
        
        34:"O??enisz si?? w rych??ym czasie,<br/>Leczby?? si?? rad potym rozwi??d?? zasi??.<br/>Nie trzeba?? nic Boga prosi??,<br/>B??dziesz mie?? przyjaci???? dosy??.",
        
        35:"Miasto tego, co by?? mia?? by?? panem,<br/>B??dziesz rych??o ??ebraczym hetmanem,<br/>B??dziesz baby po odpu??ciech wodzi??,<br/>Z??ym przyk??ade b??dziesz inszym szkodzi??.",
        
        36:"Tobie dozwalam kupcem by??,<br/>Bo masz przez nie ku chlebu przyd??.<br/>Ale by-?? te?? nawi??cej da??,<br/>Radz???? sprawne s??ugi chowa??.",
        
        37:"C??rko, pilnie tego s??uchaj,<br/>A cze???? i chwa???? Bogu daj,<br/>B??dziesz mie?? m????a dobrego<br/>I syna w rok nadobnego."
        },
        
        7: {
        1:"Nie troszczy si??, a wes???? b??d??,<br/>Masz w rychle pocieszenie wzi????,<br/>Ta rzecz ciebie nie ma min????,<br/>B??dziesz dla niej barzo s??yn????.",
        
        2:"Witaj, bracie, co tam s??ychasz,<br/>A snad?? po swej mi??ej wzdychasz,<br/>Szaty sprawiasz, dajesz dosy??,<br/>Jednak ona da inszym uprosi??.",
        
        3:"Je??li chcesz mej rady u??y??,<br/>Nie radz???? tu d??u??ej s??u??y??,<br/>Bo tu nie b??dziesz mie?? zysku,<br/>Opr??cz tego, co wyniesiesz w pysku.",
        
        4:"Tak mi si?? zda, a w tym si?? nie myl??,<br/>??e ty bez syn??w pomieszkasz chwil??,<br/>Chyba je??liby stadnika odmieni??a,<br/>Tedy by wszytko syny rodzi??a.",
        
        5:"Jedno chciej mi??osiernym by??,<br/>Tedy masz z ??wiata dobrze zy????.<br/>A i??by?? mia?? ??ask?? Bo????,<br/>Daj ubogim, wszak ci?? nie zubo????.",
        
        6:"Ten cz??owiek, o kt??rym pytasz,<br/>Dobrzeli si?? w jego przyja??ni masz,<br/>Tak barzo jest ??askaw na ci??,<br/>Nie da??by pieni??dza za ci??.",
        
        7:"Je??li tymi czasy na ko?? wsi??dziesz,<br/>Wiedz to i??cie, ??e fortunny b??dziesz.<br/>Wi??kszy b??dziesz mie?? po??ytek,<br/>Ni??by ??eglowa?? rok wszytek.",
        
        8:"O tym ci nie trzeba my??li??,<br/>By-?? si?? zguba mia??a wr??ci??,<br/>Bo ta rzecz ju?? dziwno chodzi,<br/>Ska??ono j??, a?? si?? czertu godzi.",
        
        9:"Ta rzecz, kt??r???? teraz my??li??,<br/>Kiedy?? kwater z dryj?? rzuci??,<br/>Ma by?? ku sk??raniu tobie,<br/>Zwysisz barzo wiele na niej sobie.",
        
        10:"Radz????, by?? si?? po wodzie nie wozi??<br/>A i??by?? te?? sam w drog?? nie chodzi??,<br/>Bowiem si?? ja barzo boj?? tego,<br/>By?? ty w drodze nie zby?? gard??a swego.",
        
        11:"B??d?? duchownym a ju?? nie odw??oczy,<br/>Szcz????liwie?? si?? wszytko w tym potoczy,<br/>B??dziesz mia?? dosy?? duchownego chleba,<br/>Jedno nie wiem, aby?? szed?? do nieba.",
        
        12:"Przesta?? si?? za dworem w????czy??,<br/>Ju?? nie mo??esz wyszej wskoczy??,<br/>Jednake?? te?? ju?? nie g??odzien,<br/>Da?? ci Pan B??g tyle, ile?? godzien.",
        
        13:"Pomy??li??a?? teraz na jednego,<br/>A o tym wiedz ??? masz mie?? m????a z niego, <br/>A b??dzie to barzo w rych??ym czasie,<br/>B??dzieta ??askawa silno na si??.",
        
        14:"Bracie mi??y, nie barzo?? szcz????liwy,<br/>Ku temu?? g??upi a barzo zwadliwy.<br/>Nie b??dzieszli si?? zwady strzec,<br/>Ur??baj?? ci??, to i??cie wiedz.",
        
        15:"By?? te?? nie wiem komu s??u??y??,<br/>Nie wiem, by?? takiej fortuny u??y??,<br/>Jak?? masz mie?? przy tym panie,<br/>Imienie-?? si?? od niego dostanie.",
        
        16:"Ostrzegam ci??, bracie mi??y,<br/>Pr????no si?? my??l w tobie sili,<br/>My??l co inszego, je??li chcesz,<br/>Tego pierwszego nie dojdziesz.",
        
        17:"Miej nadziej?? zupe??n?? w swym mi??ym,<br/>??e?? do ko??ca przyjacielem prawym.<br/>A tak ci?? prawie mi??uje,<br/>Zdrowia, gard??a przez ci?? nielituje.",
        
        18:"O??eni?? si?? ??adny nie obroni tobie,<br/>Bo?? to ju?? dawno umy??li?? sobie,<br/>Ale nie wiesz, niebo??e, czego chcesz,<br/>I??cie si?? ty nad dziur?? nap??aczesz.",
        
        19:"To jest pewna a dobra nowina,<br/>??e ty b??dziesz panem co godzina,<br/>Bo to tw??j pan ju?? umy??li??,<br/>Aby ci?? wrychle opatrzy??.",
        
        20:"Nie kupcz, by-?? te?? mnichem zosta??,<br/>Nie b??dziesz m??g?? temu sprosta??,<br/>Bo rozumu ma??o w tobie,<br/>Z innej strony, radz????, my??l o sobie.",
        
        21:"Masz mie?? m????a dobrzuchnego,<br/>Mi??ego, r??czego, ch??dogiego,<br/>Po??ywiesz z nim rozkoszy na ??wiecie,<br/>Na ka??dy dzie?? tob?? dom umiecie.",
        
        22:"Miej co inszego na pieczy,<br/>A poniechaj pierwszcj rzeczy,<br/>Ten, kt??rego?? si?? w tym radzi??,<br/>Ten ci?? w tej rzeczy przyzdradzi??.",
        
        23:"Wiem, ??e?? si?? nie uprzykrz?? w tym,<br/>Bo?? barzo wdzi??czn?? rzecz powiem:<br/>Twa mi??a jest barzo wierna tobie,<br/>A wi??cej ci folguje ni?? sobie.",
        
        24:"Radz????, dzier?? si?? ty rady mej,<br/>Nie opuszczaj s??u??by pirwszej.<br/>Opu??ciszli, ju??e?? zgin????,<br/>Nie b??dziesz tak indzie s??yn????.",
        
        25:"Mi??a pani, nie troszcz si?? nic,<br/>B??dziesz ty i syny rodzi??,<br/>Pocieszy ci?? Pan B??g mi??y,<br/>Po tej dziewce urodzisz dwa syny.",
        
        26:"Kto nie b????dzi w krze??cija??skiej wierze,<br/>Tego Pan B??g od z??ego strze??e,<br/>Ale i?? ty Lutra na??ladujesz,<br/>Przeto sobie z???? ??mier?? zas??ugujesz.",
        
        27:"Upewniam ci?? jako brata swego:<br/>Masz to przyjaciela niepospolitego.<br/>A miej o nim to dufanie,<br/>Ze?? si?? jego rad?? dobrze stanie.",
        
        28:"Nie jed?? synu na t?? drog??!<br/>Niech to u ciebie wymog??,<br/>Bo tam szcz????liwym nie b??dziesz<br/>I ku temu zdrowia pozb??dziesz.",
        
        29:"Po tym b??dziesz pilniejszy rzeczy swych,<br/>Gdy obaczysz, i?? dzi?? niema??o tych,<br/>Co radzi cudze chapaj??,<br/>A gdy wezm??, nieradzi wracaj??.",
        
        30:"S??uchaj, ale si?? na mi?? nie gniewaj,<br/>Takiej ty rzeczy zaw??dy pok??j daj,<br/>Kt??rej tw??j rozum nie mo??e sprosta??,<br/>Nie chceszli kpem wiecznym zosta??.",
        
        31:"Witaj mi??y bracie, bo??y s??ugo,<br/>Ty b??dziesz ??yw na tym ??wiecie d??ugo,<br/>Lecz chceszli mie?? dobre dokonanie,<br/>Pami??taj na Bo??e przykazanie.",
        
        32:"Nie chc????, synku, pr????no tuszy??,<br/>Z??y??, krn??brny, nie chcesz si?? uczy??,<br/>Przeto kap??anem nie b??dziesz<br/>I na ??wiecie si?? nie zb??dziesz.",
        
        33:"Chciej to wiedzie??, panie mi??y,<br/>??e ty wsk??rasz w rych??ej chwili.<br/>Takie ma by?? twe wsk??ranie,<br/>??e tw??j dom przez ci?? powstanie.",
        
        34:"Po twej ch??ci ??acno baczy??,<br/>Chcia??aby?? rych??o za m???? i????,<br/>A ty?? jest ka??demu pyszna,<br/>Nie wiem, by-?? ta hardo???? w dobre wysz??a.",
        
        35:"Jedno chciej by?? sprawiedliwy,<br/>B??dziesz a?? nazbyt szcz????liwy,<br/>Pomno??y ci?? Pan B??g mi??y,<br/>B??dziesz panem w rych??ej chwili.",
        
        36:"Nie chc?? z tob?? dzieli?? tego,<br/>Co wys??u??ysz u pana swojego,<br/>Masz wzi???? kijem na odprawie,<br/>P??jdziesz dalej o swej strawie.",
        
        37:"My??lisz pr????no a trudn?? rzecz,<br/>Wszak??e to jednak mo??esz mie??,<br/>Jedno si?? dzier?? mojej rady -<br/>Strze?? si?? z towarzyszmi zwady.",
        },
        
        8: {
        1:"??al mi twego rozumu g??upiego,<br/>Chcesz mi??owa?? sobie nier??wnego,<br/>A ty?? szpetna i ku temu niem??oda,<br/>A to gorsza, ??e?? nie jest ch??doga.",
        
        2:"Co si?? ma????e??stwa dotycze,<br/>Powiem ci dzisia nieskrycie:<br/>Dostaniesz ty ??ony dobrej,<br/>B??dziesz Bogu dzi??kowa?? z niej.",
        
        3:"Urzuci??e?? sze???? a troje,<br/>Oto masz proroctwo moje:<br/>Jeste?? barzo zuchwa?? na bli??niego,<br/>Przeto?? Pan B??g nie da nic dobrego.",
        
        4:"Tako doma, jako te?? na drogach,<br/>Tak w lesie, w polu i w gospodach,<br/>B??dziesz kupcz??c fortun?? mia??,<br/>Jedno?? radz??, by?? kamienia nie kupowa??.",
        
        5:"Pojmie ci?? rych??o dobry pan,<br/>Lecz mu sama na ci?? kij dam.<br/>Niech??e ci?? nim dobrze bija,<br/>Bo?? z??a, krn??brna, warkotliwa.",
        
        6:"Potrwasz jeszcze z miesi??c namniej,<br/>Ni??li b??dziesz wdzi??czen w rzeczy swej.<br/>A radz???? s??ugom jego ugadza??,<br/>Tedy?? nie b??d?? przeszkadza??.",
        
        7:"Biedasz tobie z tw?? mi??o??ci??,<br/>Co jej u??ywasz z lekko??ci??,<br/>Kurwa ciebie prawie ??upi,<br/>A ty dawasz, b??a??nie g??upi.",
        
        8:"Powiedam ci, synu, swoje zdanie,<br/>Masz wys??u??y?? si??a na swym panie,<br/>Kt??remu?? pomy??li?? s??u??y??,<br/>I masz przy nim ??wiata u??y??.",
        
        9:"Wiecznie tak nie b??dziesz syna mia??a,<br/>Je??li jedno sobie b??dziesz ugadza??a,<br/>Chciej te?? m????owi godzi??,<br/>Chceszli parobka urodzi??.",
        
        10:"Wiesz, synu, co?? mam powiedzie??,<br/>Ty by?? nie mia?? dobrze umrze??.<br/>S??dz???? wed??ug zas??ugi twej,<br/>Ale nie w??tp w ??asce Bo??ej.",
        
        11:"Towarzyszu, tak o tym wiedz:<br/>Chciej si?? zaw??dy takiego strzec,<br/>A nie miewaj go rad z sob??,<br/>Co?? m??wi o inszych z tob??.",
        
        12:"Wielk?? sobie szkod?? dzia??asz,<br/>I?? tak wiele drodze mieszkasz,<br/>Przeto s??uchaj porady mej:<br/>Wyjed?? co mo??esz narychlej.",
        
        13:"Ju?? ??adnej nadzieje nie miej,<br/>By?? to nalaz??, co wzi???? z??odziej.<br/>Jeszcze?? co lepszego zginie,<br/>Ni??li ??wier?? roku przeminie.",
        
        14:"B??d?? pocieszon z mej powie??ci,<br/>A chciej s??ucha?? istych wie??ci,<br/>Z tej to rzeczy, kt??r?? my??lisz pocz????,<br/>To wiedz, ??e masz wielki po??ytek wzi????.",
        
        15:"Barzo kr??tki czas ??ywota twego,<br/>Nie doczekasz miesi??ca ??smego.<br/>Przeto?? radz??, by?? by?? got??w,<br/>Nie dbaj na to, ??e?? teraz dobrze zdr??w.",
        
        16:"Dzi??kuj Bogu z daru tego,<br/>Dojdziesz rz??du duchownego,<br/>Ale wiedz, ??e mnichem b??dziesz,<br/>Po tym na probostwie si??dziesz.",
        
        17:"Za??o???? si?? ??miele z tob?? o to,<br/>Chocia dawasz srebro i te?? z??oto,<br/>??e ty nie masz tego dosta??,<br/>Czym by?? mia?? nad insze powsta??.",
        
        18:"Zimie, b??dzieli dobra sanica,<br/>P??jdziesz, panno, i??cie za panica,<br/>A jest pi??kny, ku temu nie ubogi,<br/>Jedno czeka dobrej sannej drogi.",
        
        19:"Bracie mi??y, liche szcz????cie twoje,<br/>A wysoko wznosisz my??li swoje,<br/>Chcesz zr??wna?? z wi??kszymi pany,<br/>A ty?? jest kiep wyjebany.",
        
        20:"Dok??de?? ??yw, dzier?? si?? pana tego,<br/>Bo nie trafisz wiecznie na lepszego,<br/>Wys??u??y?? masz na nim dosy??,<br/>Jedno go ??miej o co prosi??.",
        
        21:"My??lenie twe prost?? drog?? idzie,<br/>A ku dobremu ko??cu rych??o przyjdzie,<br/>I t???? fortun?? obiecam,<br/>B??dzie?? lepiej ni??li chcesz sam.",
        
        22:"Bia??ag??owo, tak si?? mnie zda,<br/>??e tw??j panic o ci?? namniej nie dba.<br/>Abych prawd?? powiedzie?? chcia??,<br/>Nierad by ci?? wiecznie widzia??.",
        
        23:"C???? w??dy tobie po ??onie, powiedz mi,<br/>Ty?? ju?? jest pacho??ek letni,<br/>By-?? nalepsza twoja ??ona by??a,<br/>Tedy?? b??dzie m??odszego woli??a.",
        
        24:"Synaczku m??j, daj si?? n??dzy,<br/>B??dziesz mia?? dosy?? pieni??dzy,<br/>Jedno je umiej dobrze szafowa??,<br/>Mo??esz ich si??a nachowa??.",
        
        25:"Radszej si?? im ko??uch??w szy??,<br/>Ni??liby ty mia?? kupcem by??,<br/>Bo?? jest ch??op tak barzo g??upi <br/>Nie wiesz, co za pieni??dz myd??a kupi.",
        
        26:"Dobrego ty m????a b??dziesz mia??a,<br/>A lepszego ni??li?? sama chcia??a,<br/>Jedno?? powiem: nie da-?? rozpustnie ??y??,<br/>B??dzieszli z??a, b??dzie ci?? barzo bi??.",
        
        27:"Barzo silno o swej rzeczy pilisz,<br/>Lecz ja bacz??, ??e si?? w tym omylisz.<br/>O tym ci my??li?? nie trzeba,<br/>Szkoda by te?? psu bia??ego chleba.",
        
        28:"Nie w??tp namniej w swojej mi??ej,<br/>I??cie masz przyjaciela z niej,<br/>Ale?? powiem, co?? ma wadzi??:<br/>Chce ci?? z ni?? towarzysz zwadzi??.",
        
        29:"Ostrzegam ci?? jako brata swego, <br/>Nie przystawaj do pana ??wieckiego,<br/>Bo na tym nic nie utyjesz, <br/>Chyba tego, co zjesz i spijesz.",
        
        30:"Dobra ??ono, b??d?? ty ista tego,<br/>B??dziesz mia??a syna nadobnego.<br/>A ju?? mu mo??esz kom???? szy??,<br/>Bo ma i??cie kap??anem by??.",
        
        31:"Nie chcesz przesta?? z??o??liwym by??,<br/>Musisz z???? ??mierci?? z ??wiata zi????.<br/>B??dzie Pan B??g swej krzywdy m??ci??,<br/>Jeszcze si?? strze??, aby?? w piekle nie by??.",
        
        32:"Ten cz??owiek, co?? o nim my??li??,<br/>Ni??li?? cynk, kwater urzuci??,<br/>Jest ci lepiej ni?? kto inszy,<br/>Bo?? mu nade wszytko milszy.",
        
        33:"Droga twoja ma-?? si??a zawadzi??,<br/>Towarzysz tw??j ma ci?? zdradzi??.<br/>Przyjdziesz ku lekko??ci silnej,<br/>Przeto nie jed??, odejm si?? woli swej.",
        
        34:"Zna?? po tobie czy??cie, mi??y bracie,<br/>??e ty my??lisz pilnie o swej stracie.<br/>Ale si?? namniej nie trzeba troska??,<br/>Masz jej bez w??tpienia dosta??.",
        
        35:"By-?? ma rada wdzi??czna by??a,<br/>Ja bych tobie wiernie poradzi??a,<br/>By?? poniecha?? swoich my??li, <br/>Aby?? po tym ku lekko??ci nie przysz??y.",
        
        36:"Musz?? ci?? nieco przestraszy??,<br/>Nie mia??by ty d??ugo ??yw by??,<br/>Nie w??tp jednak w ??asce Bo??ej,<br/>Bo?? on wi??cej ni?? proroctwo mo??e.",
        
        37:"Chocia duchowny chleb trzymasz,<br/>Jednak w??dy z tego nic ni?? masz,<br/>Aby?? kiedy dobrym duchownym by??,<br/>Bo?? si?? z??ego pisma napi??.",
        },
        
        9: {
        1:"Panie m??j, racz o tym wiedzie??,<br/>Da?? ci to kwater z dryj?? powiedzie??:<br/>Masz urz??du wrychle dosta??,<br/>Przez kt??ry masz barzo powsta??.",
        
        2:"Kiedyby jaki szalony,<br/>G??uchy, ??lepy albo chromy,<br/>Taki by si?? tobie godzi??,<br/>By ci?? po odpu??ciech wodzi??.",
        
        3:"W ka??dej rzeczy swej cnotliwej,<br/>W szcz????ciu zaw??dy nadziej?? miej,<br/>Chocia?? insze b??d?? przeszkadza?? chcie??,<br/>Jednak b??dziesz wszytko na wol?? mie??.",
        
        4:"Towarzyszu, musz?? ci?? przestraszy??,<br/>Nie masz na tym panie nic wys??u??y??,<br/>Bo?? leniwy a k temu niepilny,<br/>By?? mia?? co da??, by??by to dziw silny.",
        
        5:"My??l przedsi?? a nie przestawaj,<br/>Prze mi??y B??g nieco zaw??dy dawaj.<br/>Ten sprawi, ??e twe my??lenie<br/>Przyjdzie w dobre doko??czenie.",
        
        6:"Pomy??li??a?? teraz na jednego,<br/>Mi??uje ci?? z serca prawego.<br/>Nie omyl?? ja w tym ciebie,<br/>Mi??uje ci?? wi??cej ni??li siebie.",
        
        7:"Dostaniesz nadobnej ??ony,<br/>Jedno?? powiem z drugiej strony:<br/>Musisz jej barzo pilnie strzec,<br/>Je??li z niej chcesz cnotliw?? mie??.",
        
        8:"Nie kaza?? ci ze?? as tuszy??,<br/>Aby?? kiedy mia?? panem by??,<br/>Bo si?? nie masz ku ??adnej rz??dnej rzeczy,<br/>Jedno kostki, karty masz na pieczy.",
        
        9:"Je??li jeden fortunny kupiec by??,<br/>Tedy ty, b??dzieszli kupczy??.<br/>A radz???? co rychlej pocz????,<br/>Chceszli wielki po??ytek wzi????.",
        
        10:"Ty si?? barzo kwapisz za m????a i????,<br/>Bowiem nie wiesz, ku czemu masz przy????;<br/>Lecz, niebogo, gdyby?? wieszcz?? by??a,<br/>I??cie by si?? za m???? nie kwapi??a.",
        
        11:"Nie w??tp namniej w rzeczy swojej,<br/>Da-?? j?? Pan B??g z ??aski swojej,<br/>Ale?? si?? jeszcze odwlecze,<br/>Ta grzanka si?? za rok nie upiecze.",
        
        12:"Niewymowne g??upstwo twoje,<br/>??e ty pr????no kazisz serce swoje,<br/>Gdy to wszyscy dobrze znaj??,<br/>??e tam o ci?? nic nie dbaj??.",
        
        13:"Przysta?? ??miele ku panu inszemu,<br/>Uczy?? dosy?? umys??owi swemu,<br/>Mo??esz za silnym zyskiem by??,<br/>Masz na nim si??a wys??u??y??.",
        
        14:"Ty o syna zaw??dy Boga prosisz,<br/>Ale wiedz, ??e dziewk?? nosisz,<br/>A to ja z tego poznawam,<br/>Chciwsza?? w ??o??u ni??li tw??j pan.",
        
        15:"Ty?? jest na ubogie luto??ciwy,<br/>A tak nam rozkaza?? Pan B??g mi??y.<br/>Dla tego?? da dobre dokonanie<br/>I w swej chwale wieczne przebywanie.",
        
        16:"Za to ty masz, i?? ten czyni prawie,<br/>Co z tob?? rozmawia ??askawie.<br/>Ale si?? ty nigdy na to nie sad??,<br/>Zdradziwszy ci??, b??dzie si?? z ciebie ??mia??.",
        
        17:"Jed?? na drog??, kiedy raczysz.<br/>Tam wi??c, je??li nie przebaczysz<br/>Dosy?? pieni??dzy nab??dziesz,<br/>Przyjechawszy imienie osi??dziesz.",
        
        18:"Synaczku, ja tobie ??lubuj??,<br/>Ze ty najdziesz swoj?? zgub??.<br/>A nie trzeba?? barzo szuka?? <br/>Ma-?? j?? jeden cz??owiek w r??ce da??.",
        
        19:"Poczni rzecz sw?? kiedy raczysz.<br/>Sam to okiem swym obaczysz,<br/>??e?? wszytko p??jdzie fortunnie.<br/>Przyjdziesz po tym o porad?? ku mnie.",
        
        20:"Prawd?? ja powiadam tobie,<br/>Nie pok??adaj d??ugiego ??ywota sobie,<br/>Bo acz dufasz w swoim zdrowiu wiele,<br/>Jednak zdr??w nie b??dziesz do niedziele.",
        
        21:"B??d?? tego ist jako czego,<br/>Dojdziesz stanu duchownego.<br/>A b??dziesz pre??atur?? mia??,<br/>Je??li b??dziesz pilno???? dzia??a??.",
        
        22:"Silne szcz????cie ciebie wznios??o,<br/>Nad tw??j stan barzo podnios??o.<br/>Ale?? si?? ju?? odmieni??o,<br/>Nie b??dzie?? wi??cej s??u??y??o.",
        
        23:"B??dziesz w rychle m????a mia??a,<br/>B??dzieszli za wdowca chcia??a,<br/>Nie dostanie?? si?? panica,<br/>Bo?? niedobra tanecznica.",
        
        24:"W ka??dej twej wielkiej potrzebie<br/>Prawie si?? szcz????cie na??mieje z ciebie,<br/>B??dziesz mniema??, aby ju?? je????,<br/>Ali twojej rzeczy na koniec sie????.",
        
        25:"Nie dbaj nic, ??e ci?? pan swarzy,<br/>Jednak ci si?? przy nim dobrze zdarzy.<br/>Wys??u??ysz u niego dosy?? chleba,<br/>Jedno wiernym a pilnym by?? trzeba.",
        
        26:"Wiele my??li w twojej g??owie szkodzi,<br/>My??lisz drugdy to, co si?? nie godzi,<br/>Tak te?? z nich wi??c nie bywa nic,<br/>A ty si?? strze?? kiedy o lekko???? przysc.",
        
        27:"Wiedzie?? tego barzo ????dasz,<br/>Je??li si?? u panica dobrze masz.<br/>Prawd???? w tym powiedzie?? musz??:<br/>Mi??uje ci?? jako w??asn?? dusz??.",
        
        28:"Kwater z dryj?? tobie prorokowa??,<br/>Ze ty wdzi??cznej ??ony nie b??dziesz mia??.<br/>A te?? ci by szkoda cudnej ??ony,<br/>Bo?? sam ch??op silno mierziony.",
        
        29:"Jedno si?? rz??d??, jako?? pocz????:<br/>Dobry?? pochop ku pa??stwu wzi????.<br/>Nab??dziesz imienia dosy??,<br/>Ale si?? nie chciej podnosi??.",
        
        30:"Kupiec, kt??ry chce dojd?? chleba,<br/>Silnej mu chytro??ci trzeba,<br/>Ale jej w tobie nie masz nic,<br/>Przeto?? nie radz?? kupcem by??.",
        
        31:"Bia??a g??owo, mo??esz weso??a by??:<br/>Masz ku dobremu m????u przyd??.<br/>B??dzieta si?? tak cnotliwie chowa??,<br/>Inszy ludzie b??d?? z was przyk??ad bra??.",
        
        32:"Pr????no pilisz, pr????no dary nosisz,<br/>O tym wiedz, ??e tego nie uprosisz,<br/>Ju?? inszy da?? dobrze wi??cej,<br/>B??dzie wys??uchan w pro??bie swej.",
        
        33:"W mi??owaniu swym dzisiejszym<br/>Mo??esz nie frymarczy?? z ??adnym;<br/>A mo??esz ku po??ytku przyd??,<br/>Jedno patrz, by?? umia?? tai??.",
        
        34:"Umy??li??e?? do pana jednego,<br/>Ale?? radz??, nie przystaj do niego.<br/>Obiecuje?? si??a, lecz ob??udnie,<br/>Rzy?? napasiesz, ale mieszek schudnie.",
        
        35:"Pani mi??a, to jest prawdziwa nowina,<br/>??e ty b??dziesz mie?? pi??knego syna.<br/>Mie?? mu Janem, co go bywa lecie,<br/>Tedy?? b??dzie szcz????liwy na ??wiecie.",
        
        36:"Nie chcesz si?? swej z??o??ci odj????,<br/>Musisz za to zap??at?? wzi????,<br/>Nie przepomni Pan B??g tego,<br/>??e ty na??ladujesz Lutra z??ego.",
        
        37:"Silno si?? ku temu cz??owieku chylisz,<br/>A temu wierz, ??e si?? w tym nie mylisz,<br/>Bo co wiem barzo dowodnie,<br/>??e?? jest dobrze niewymownie.",
        },
        
        10: {
        1:"Prze B??g, chciej mi powolen by??,<br/>Nie racz na t?? drog?? je??dzi??,<br/>Bo pojedzieszli przez wod??,<br/>Masz wzi???? barzo wielk?? szkod??.",
        
        2:"Prawda, ??e?? teraz nie??mieszno,<br/>??e ci?? po twej zgubie t??skno,<br/>Ale?? nie trzeba w tym w??tpi??,<br/>Ma-?? si?? zasi?? i??cie wr??ci??.",
        
        3:"Masz umys?? ku rzeczy jednej<br/>A w tym ????dasz porady mej.<br/>Ja bych rzek??a, by?? pok??j da??,<br/>Chceszli, aby?? potym nie ??a??owa??.",
        
        4:"Patrzaj, aby?? Bogu s??u??y??,<br/>Chceszli, aby?? ??wiata u??y??.<br/>Ale si?? nie k??p na wodzie,<br/>By?? nie przyszed?? ku jakiej przygodzie.",
        
        5:"Nie my??l o tym, aby?? duchownym by??,<br/>Z??y?? by?? z m??odu, niepilnie?? si?? uczy??,<br/>Przeto si?? odejmij swej wolej,<br/>Gdy?? ch??op prosty, miej??e si?? do role.",
        
        6:"Pierwej nie masz podwy??szon by??,<br/>A?? masz wiele ??wiata zje??dzi??,<br/>Przyjdzie?? potym wszytko snadnie,<br/>Sam nie zwiesz, sk??d ci przypadnie.",
        
        7:"Chciej to dzi?? za pewne wiedzie??:<br/>Tobie m????a wiecznie nie mie??.<br/>A to?? siedm ok za znak daj??,<br/>??e ci?? wszyscy za zuchwa???? maj??.",
        
        8:"Radz???? si?? na gr?? gotowa??,<br/>Zyszczesz wiele, jedno umiej chowa??.<br/>Lecz si?? strze??, by?? zaw??dy w tym nie le??a??,<br/>By?? r??ki na stole nie odbie??a??.",
        
        9:"Nie mia??by ty nic wys??u??y??,<br/>Bo nie umiesz sobie w tym podru??yc,<br/>Chcesz sw?? cnot?? nazbyt chowa??,<br/>Nie chcesz si?? j???? pochlebowa??.",
        
        10:"My??l twoja jest przy trudniejszym,<br/>Zw??aszcza w tym czasie dzisiejszym,<br/>Wszak??e w??dy miej to dufanie,<br/>??e?? si?? po twej woli zstanie.",
        
        11:"Przesta??, radz????, tej mi??o??ci,<br/>Aby?? nie przysz??a ku lekko??ci.<br/>Bo ci?? nie mi??uje panicz,<br/>Ma ci?? sobie prosto za nic.",
        
        12:"B??dziesz mie?? ??on?? nadobn??<br/>A i??cie silno podobn??,<br/>Jedno nie chciej oktaw ??wi??ci??,<br/>Chceszli inszych do niej nie przy????czy??.",
        
        13:"Ostrzegam ci??, brata swego:<br/>Nie b??dziesz mia?? nic dobrego,<br/>Za m??odu b??dziesz dworakiem,<br/>A na staro???? za?? ??ebrakiem.",
        
        14:"B??d?? kupcem, ja tobie radz??,<br/>B??dzieszli nim, r??k?? na to sadz??,<br/>??e masz ku takiemu pa??stwu przyd??,<br/>??e b??dziesz m??g?? i za morze kupczy??.",
        
        15:"Plugawa??, z??a, rozpustna, leniwa,<br/>G??upia, nierobotna, warchotliwa,<br/>Pokusi-li si?? jaki m???? o ci??,<br/>Tedy kij b??dzie cz??sto w robocie.",
        
        16:"Radz???? siln?? pilno???? czyni??,<br/>Chceszli ku tej swej rzeczy przyd??,<br/>Pracuje si?? o ni?? inszy,<br/>Wszak??e ty b??dziesz szcz????liwszy.",
        
        17:"Si??a?? wa??y??, a ma??o zyskujesz,<br/>Tob?? gardz??, ty przdsi?? mi??ujesz,<br/>Ale?? powiem, zacz ci?? dziewki maj??<br/>Natr??tem ci?? wszytki nazywaj??.",
        
        18:"Nie odradzam ci s??u??y?? m??odemu, <br/>Podru??ysz tam mieszkowi swojemu.<br/>Ale nie s??u?? bia??ejg??owie,<br/>Nie chceszli przyd?? ku obmowie.",
        
        19:"Aby?? temu wierzy?? chcia??a,<br/>Nie b??dziesz ty syna mia??a<br/>Ani teraz, ani potym,<br/>Wiem barzo dowodnie o tym.",
        
        20:"Jedno si?? ognia barzo strze??,<br/>U puszkarza w domu nie le??,<br/>Nie b??j??e si?? ??mierci nag??ej,<br/>Opr??cz onej przyrodzonej dawnej.",
        
        21:"W takim nigdy nie miewaj nadzieje,<br/>Co?? si?? to przez z??by ??mieje,<br/>Bo?? to jest ka??dy ??otr czysty,<br/>Nigdy nie bywa przyjaciel isty.",
        
        22:"Na t?? drog?? mo??esz ??miele jecha??.<br/>Nie daj sobie nikomu rozradza??,<br/>Bo?? to z twym po??ytkiem b??dzie,<br/>B??dziesz mie?? fortun?? wsz??dzie.",
        
        23:"Zguba twoja nie wr??ci si?? i??cie,<br/>A te?? to tak na ci?? barzo czy??cie,<br/>Bo twa mi??o???? ??le swe rzeczy chowa,<br/>A to ku straceniu przyczyna gotowa.",
        
        24:"Co?? umy??li??, ju?? poczynaj,<br/>A m??w tak: Bo??e pomagaj!<br/>Bowiem bez pomocy jego<br/>Nie sprawi cz??ek nic dobrego.",
        
        25:"Chceszli d??ugo ??wiata u??y??,<br/>Nie radz???? przy dworze s??u??y??.<br/>A b??dzieszli, ju?? o tym wiedz,<br/>??e masz barzo rych??o umrze??.",
        
        26:"B??d?? pocieszon z tej nowiny:<br/>B??dzie z ciebie cz??owiek inny.<br/>Odmienisz si?? w duchownego,<br/>Dojdziesz stanu wysokiego.",
        
        27:"Ka??dy?? to m??dry za z??e ma,<br/>I?? to ??akomstwo w tobie zna:<br/>Masz ju?? dosy??, w??dy dworujesz.<br/>Abo na dyszlu umrze?? chcesz?",
        
        28:"Nie trzeba?? si?? o to troska??,<br/>Masz m????atk?? wrychle zosta??,<br/>Stara-?? si?? o to jeden pan,<br/>By ci?? sobie za ??on?? wzi????.",
        
        29:"Synaczku, b??d?? ju?? tego ist:<br/>Nie omyli ciebie tenlist.<br/>Nie masz szcz????cia na ??adn?? rzecz,<br/>Jeszcze?? wrychle pan ka??e precz.",
        
        30:"Nie chciej jedno utratnym by??,<br/>Mo??esz tu si??a wys??u??y??,<br/>Kto chce co mie??, musi chowa??,<br/>Musi nie pi??, nie gra??, nie ??otrowa??.",
        
        31:"Mo??esz mi za dobre nie mie??,<br/>Kaza??y?? siedm ok powiedzie??,<br/>Aby?? pr????no przesta?? my??li??,<br/>Nie chceszli ku lekko??ci przy????.",
        
        32:"Pomy??li??a?? na panica swego,<br/>Mi??uje ci?? wi??cej ni?? ty jego,<br/>A ty namniej o to nie dbasz.<br/>Odda-?? si?? to zin??d, sama poznasz.",
        
        33:"Nie wiem, by?? ty ma????onkiem by??,<br/>Jednakby?? te?? ma??o zwy??i??,<br/>Bo w ma????e??stwie niewczesno??ci wiele,<br/>D??ugi smutek za kr??tkie wesele.",
        
        34:"Mog?? na to gard??o sadzi??,<br/>??e ty masz silnym panem by??.<br/>Jedno radz??: wdowy si?? dzier??,<br/>B??dzie?? dawa??, a ty wi??c bierz.",
        
        35:"Ani kupcem, ani rzemie??lnikiem<br/>Ty nie b??dziesz, opr??cz by rze??nikiem<br/>Onym, co w rynku, w ulicach poluje,<br/>Czy??ci??c miasto, wychody szufluje.",
        
        36:"Nadalej o drugim roku,<br/>I?? b??dziesz mie?? ma????onka przy boku.<br/>A pi??knego i barzo dobrego;<br/>B??dziesz Bogu dzi??kowa?? z niego.",
        
        37:"??al mi tego, ??e?? b??aznem takowym,<br/>??e si?? nie chcesz obaczy?? w g??upstwie swym,<br/>Tego ????dasz, czego nie masz dosta??,<br/>Przeto masz u ludzi w ??miechu zosta??.",
        },
        
        11: {
        1:"Kiedy?? mnie niem??odej pytasz, <br/>Dobrzeli si?? w mi??o??ci masz, <br/>Umiem ci powiedzie?? tobie: <br/>Masz mi???? po woli sobie.",
        
        2:"Mo??esz do m??odego przysta??,<br/>Ale nie masz na tym zyska??,<br/>B??dzie tob?? robi?? jako wo??em, <br/>A musisz si?? ??le miewa?? za sto??em.",
        
        3:"Dobra pani, weso??a b??d??,<br/>Masz pociech?? od Boga wzi????:<br/>Urodzi-?? si?? syn nadobny, <br/>Dobry, m??dry, cichy i pokorny.",
        
        4:"Jeszczem nie zna??a ??adnego<br/>Nad ci?? na ??wiecie gorszego,<br/>Przeto nie ujdziesz lekko??ci,<br/>Zginiesz marnie dla mi??o??ci.",
        
        5:"Ani siostra, ani w??asny brat,<br/>Nie b??dzie ci?? mi??owa?? tak <br/>Jako ten, co my??lisz o nim -<br/>Masz zna?? wielk?? przyja???? po nim.",
        
        6:"By?? mej rady pos??ucha?? chcia??,<br/>Radz????, by?? tej drogi niecha??,<br/>Bo sobie zdrowia ukr??cisz, <br/>A nie wiem wi??c, je??li si?? za?? wr??cisz.",
        
        7:"Przyjdziesz zasi?? ku swej zgubie,<br/>Ale si?? masz zwadzi?? grubie<br/>Z tym cz??owiekiem, co wzi???? t?? rzecz,<br/>A pan mu przeto ka??e precz.",
        
        8:"Poniewa?? si?? mnie w tym radzisz,<br/>Nie poczynaj to, co my??lisz.<br/>Powiem ci: pr????no si?? kusisz,<br/>Ze sromot?? tego przesta?? musisz.",
        
        9:"B??dziesz d??ugo ??yw, o tym wiedz, <br/>Jedno?? si?? tego trzeba strzec,<br/>I??by?? nigdy ma????e??stwa nie ????czy??,<br/>By ci?? ch??op od ??ony nie zatraci??.",
        
        10:"Musz?? ci?? nieco zatroska??:<br/>Nie mo??esz ty popem zosta??,<br/>Bo jako?? zwyk?? z m??odu z??ym by??,<br/>Tak-??e si?? nie chcesz polepszy??.",
        
        11:"Urzuci??e?? dryj?? z tuzem sobie, <br/>Ot???? ci tak prorokuj?? tobie, <br/>??e u dworu masz urz??du dosta??,<br/>Przez kt??ry masz silno powsta??.",
        
        12:"Nie chc???? tego przed tob?? prze??,<br/>Ze ty masz przez m????a umrze??,<br/>Bo ci?? ??adny nie b??dzie chcia??,<br/>Chyba ten, co by wisie?? mia??.",
        
        13:"Ni w tobie statku, nie troski,<br/>Prawie?? ??upi?? i dr?? koczki, <br/>Tak ??e ci?? szcz????cie wewszem ominie, <br/>Co nab??dziesz, wszytko?? marnie zginie.",
        
        14:"Je??li chcesz, mej rady s??uchaj:<br/>Wlitwie sobie pana szukaj,<br/>Ty w Polszcze nie wys??u??ysz nic,<br/>Musisz wiecznie n??dznikiem by??.",
        
        15:"Masz teraz my??lenia dosy??,<br/>Bo chcesz o jedn?? rzecz prosi??,<br/>A i??cie?? to pan uczyni,<br/>Je??li?? si?? kto za tob?? przyczyni.",
        
        16:"Ten, kt??rego?? ty pomy??li??a,<br/>Ni??li?? cynk, tus urzuci??a,<br/>Kiedy idzie tu, o tobie ??uje,<br/>Rozumiej??e, je??li ci?? mi??uje.",
        
        17:"Radz???? obie dryje sprawiedliwie:<br/>Pojmi ??on?? wnet po ??niwie,<br/>Bo ondzie zimie za mrozu,<br/>Cieplej dwiema spo??em w ??o??u.",
        
        18:"Jako ci?? znam, z??yme?? robotnikiem,<br/>A dla tego musisz by?? n??dznikiem;<br/>Wiecznie tak nic nie b??dziesz mia??,<br/>Jeszcze si?? strze??, by?? nie wisia??.",
        
        19:"Mo??esz prze??piecznie handel wie????,<br/>Bo to mo??e tw??j dowcip znie????.<br/>A b??dzieszli pilen tego,<br/>Mo??esz si??a zebra?? z niego.",
        
        20:"Ju??e?? sobie barzo podstarza??a,<br/>W??dy by?? jeszcze rada m????a mia??a,<br/>Zaden nie jest tak barzo g??upi,<br/>Ka??dy radszej now?? sukni?? kupi.",
        
        21:"Przez przyczyn?? paniej jednej<br/>Masz by?? wys??uchan w pro??bie swej,<br/>Ale?? radz??, by?? nie le??a??, <br/>By ci?? w tym kto nie ubie??a??.",
        
        22:"Masz si?? barzo za chytrego,<br/>W??dy nie mo??esz pozna?? tego,<br/>??e twa mi??a z ciebie szudzi,<br/>Tak ??e?? przyszed?? w ??miech u ludzi.",
        
        23:"Ju?? przysta?? do tego pana,<br/>Bo?? jest dobry sam i sama,<br/>B??dzie ci?? oboje mi??owa??o, <br/>Wys??u??ysz tam pieni??dzy niema??o.",
        
        24:"Bacz?? to, pani, po tobie, <br/>Ze ty dziewk?? masz urodzi?? sobie,<br/>Ale jej ??ywot nie b??dzie d??ugi,<br/>Nie b??dziesz mie?? z niej ??adnej pos??ugi.",
        
        25:"Bracie mi??y, gdy wiedzie?? chcesz,<br/>Ty sw?? w??asn?? ??mierci?? umrzesz,<br/>A nie umrzesz a?? w staro??ci,<br/>Ale?? podagra doch??o??ci.",
        
        26:"Ten, o kt??rym my??lisz, powiem tobie,<br/>??yczy-?? wszego tak jako sam sobie, <br/>W nim nie trzeba w??tpi?? namniej,<br/>Masz go mie?? zaw??dy ku woli swej.",
        
        27:"Acze?? umy??li?? precz jecha??,<br/>Radz???? tego teraz niecha??,<br/>Nie masz mie?? szcz????liwej drogi,<br/>P??jdzieszli, masz na??omi?? nogi.",
        
        28:"Chcesz, ??e?? powiem o twej zgubie:<br/>Szukaj w piwnicy i w grubie,<br/>Najdziesz, b??dzieszli szuka?? wczas,<br/>Na ??wietle?? jej nigdy niemasz.",
        
        29:"Dobrze mi si?? w tym podobasz,<br/>??e takowe umys??y masz,<br/>Z kt??rych po??ytek by?? mo??e,<br/>Daj??e-?? szcz????cie, mi??y Bo??e!",
        
        30:"Id?? do spowiednika rychlej,<br/>A spowiadaj si?? z??o??ci swej,<br/>Oto ??mier?? za tob?? chodzi,<br/>Na ka??dy dzie?? zagryzn???? ci?? godz",
        
        31:"??wi???? si?? co mo??esz narychlej,<br/>Dojdziesz plebanijej dobrej<br/>I k temu czego lepszego,<br/>Jedno pro?? Boga mi??ego.",
        
        32:"O tym wiedz, ??e si?? sam zdradzisz,<br/>Gdy si?? na sw?? chytro???? sadzisz.<br/>A ta?? ma nawi??cej szkodzi??,<br/>Musisz dla niej poni??on by??.",
        
        33:"Siostro, radz????, b??d?? gotowa,<br/>Ma by?? o ci?? wrychle zmowa.<br/>Ma ci?? jeden dobry cz??owiek ????da??<br/>A maj?? ci?? i??cie za?? da??.",
        
        34:"Szcz????cia ja tobie nie obiecuj??,<br/>Tak z twego narodzenia najduj??,<br/>W ka??dej rzeczy, kt??r?? zaczniesz,<br/>Zaw??dy jak?? szkod?? we??miesz.",
        
        35:"S??u?? powolnie, wiernie, a pilen b??d??,<br/>Masz za s??u??b?? dobr?? zap??at?? wzi????.<br/>Tw??j dobry pan my??li o tym,<br/>By?? si?? te?? ty mia?? dobrze na potym.",
        
        36:"Barzo wiele my??li miewasz sobie,<br/>A statku ??adnego niemasz w tobie.<br/>Tak??e i teraz co my??lisz,<br/>Na tym i??cie nic nie zwy??isz.",
        
        37:"B??d??, siostro, serca dobrego,<br/>Masz po woli przyjaciela swego,<br/>A nie chciej go sobie wa??ni??,<br/>Mo??esz potym jego ma????onk?? by??.",
        },
        
        12: {
        1:"Radszej si?? daj komu zabi??,<br/>Ni??liby?? mia?? ma????onkiem by??.<br/>Bo je??liby?? ??ony dosta??,<br/>Na wieki by?? jej nie sprosta??.",
        
        2:"Bracie mi??y, o ci?? si?? nie staram,<br/>B??dziesz panem, to ja po tobie znam.<br/>Jedno si?? za?? troszcz?? o ci??,<br/>By nie by?? powr??z w robocie.",
        
        3:"Sk??d ty masz kupiectwo pocz????,<br/>A ty nie masz gdzie grosza wzi????.<br/>Odejm si?? oto swej wolej,<br/>A radz????: miej si?? ku rolej.",
        
        4:"Dla s??awy ojca twojego<br/>Dojdziesz m????a szlachetnego,<br/>Jedno si?? strze??, by?? go nie gniewa??a, <br/>By?? z niego z??ego nie udzia??a??a.",
        
        5:"Radz????: daj tej rzeczy pok??j,<br/>Pr????no sobie g??owy nie psuj.,<br/>Acze?? ty dary obieca??,<br/>Psie g??wno za to b??dziesz mia??.",
        
        6:"Tobie dopuszczam mi??owa??,<br/>Gdy si?? tak umiesz sprawowa??:<br/>Umiesz przywie???? po swej woli,<br/>Ka??da?? na wszytko przyzwoli.",
        
        7:"Przysta?? tamo nie chc???? radzi??,<br/>Mog??o?? by to si??a wadzi??,<br/>Przyszed??by?? tam ku dziwnej ranie,<br/>Mia??by?? przez twarz szpetne znami??.",
        
        8:"??ycz???? tego, dobra pani,<br/>??e mi??y B??g ??ask?? z wami:<br/>Urodzi-?? si?? syn nadobny,<br/>A b??dzie z niego duchowny.",
        
        9:"Witaj??e panie luteryjanie,<br/>Wa??ysz sobie dusz?? tanie,<br/>Na??ladujesz z??o??ci jego,<br/>Przeto ci?? zabij?? jako z??ego.",
        
        10:"Dziwni si?? dzi?? ludzie rodz??,<br/>Zdradnie si?? z sob?? obchodz??,<br/>Tak-??e?? te?? tw??j, acz ci m??wi cudnie,<br/>To wiedz i??cie, i?? czyni ob??udnie.",
        
        11:"Gdzie?? umy??li??, ju?? jed?? w imi?? Bo??e,<br/>Pan B??g ci?? na tej drodze wspomo??e.<br/>B??dziesz mia?? po??ytku dosy??,<br/>Jedno?? radz??: chciej swego pilen by??.",
        
        12:"??al mi ci??, mi??y niebo??e,<br/>Zguba twoja wr??ci?? si?? nie mo??e;<br/>Abowiem to wiadoma rzecz,<br/>I?? ten, co wzi????, ju?? jecha?? precz.",
        
        13:"Brzespiecznie czy??, co?? przed si?? wzi????:<br/>B??dziesz dla tej rzeczy barzo s??yn????.<br/>I masz na tym zwyszy?? wiele,<br/>Jedno w tym poczynaj ??miele.",
        
        14:"Ten wiersz tobie i??cie powie:<br/>Nie troszcz si?? nic o swe zdrowie,<br/>Miej w tym zupe??ne wesele,<br/>Przetrwasz nieprzyjaci???? wiele.",
        
        15:"Nie tak by to Bogu s??u??y??,<br/>Je??liby chcia?? duchownym by??,<br/>Ale si?? z kurwami wodzisz,<br/>Z??ym przyk??adem inszym szkodzisz.",
        
        16:"Skoro umrze jeden cz??owiek,<br/>Nie mieni?? go, kt??ry??kolwiek,<br/>Tedy?? dadz?? pa??stwo jego,<br/>Dojdziesz miejsca wysokiego.",
        
        17:"Mo??esz ju?? prosi?? na gody,<br/>Pojmie ci?? parobek m??ody.<br/>B??dziesz si?? z nim wybornie mie??,<br/>B??dzieszli jedno sama chcie??.",
        
        18:"W szcz????ciu ty nadzieje nie miej,<br/>Szanuj, radz????, ojczyzny swej.<br/>Je??li?? si?? jako noga powinie,<br/>Wiedz, ??e?? zaraz wszytko zginie.",
        
        19:"Acz ci radz?? inszy aby?? odsta??,<br/>Ja radz??, aby?? na miejscu zosta??,<br/>Przyjdzie ten czas, to jest pewna,<br/>??e si?? tobie s??u??ba odda.",
        
        20:"Ten pi??kny sza??c, kwater z dryj??,<br/>Niejednego wi??c bez ??ugu zmyj??<br/>I te?? kazali tobie powiedzie??,<br/>Ze z swej my??li nic nie masz mie??.",
        
        21:"Ni k??ska w tym nie pochybuj.<br/>Mi??uje ci?? przyjaciel tw??j<br/>Wi??cej ni??li wszyscy inszy.<br/>Niech??e?? b??dzie ze wszech milszy!",
        
        22:"Nigdy nie miej nadzieje w tym,<br/>Aby?? kiedy?? by?? ma????onkiem,<br/>A te?? nie masz po czym tu??y??,<br/>Lepiej wolnie ??wiata u??y??.",
        
        23:"Mo??esz pa??stwa snadnie naby??,<br/>Ale za?? masz wszytko straci??,<br/>Mi??o???? i gra a my??listwo,<br/>To ci?? przyprawi w ub??stwo.",
        
        24:"Je??li ty b??dziesz kupczy?? chcia??,<br/>By?? jedn?? dziesi???? z??otych mia??,<br/>B??dzie?? szcz????cie silno s??u??y??,<br/>Jedno go wi??c umiej u??y??.",
        
        25:"Prawie we dwudziestym lecie<br/>Masz by?? ma????onk?? na ??wiecie.<br/>A b??dziesz mie?? m????a niem??odego,<br/>Ale barzo poradneg i dobrego.",
        
        26:"Acz si?? o swoj?? rzecz stara?? b??dziesz,<br/>Nie masz jej mie??, a rozumu zb??dziesz,<br/>Bo to ma mie?? cz??owiek inszy,<br/>Zaw??dy przyrodzony milszy.",
        
        27:"Wiem, ??e?? si?? tym nie zachowam, <br/>Zaw??dy?? g??upi, jako ci?? znam,<br/>A w??dy sobie radzi?? nie dasz,<br/>Mi??ujesz, gdzie ??aski nie znasz.",
        
        28:"Radz???? o tym ani my??li??,<br/>By?? mia?? kiedy wlitwie s??u??y??,<br/>Bo je??li tam s??u??y?? b??dziesz,<br/>Wiedz, ??e gard??a marnie zb??dziesz.",
        
        29:"Chceszli synaczka donosi??<br/> Ka??ysz za si?? Boga prosi??,<br/>A gniewu si?? barzo strze??y<br/>I urazu, na tym ci zale??y.",
        
        30:"Ju?? poniechaj z??o??ci twojej,<br/>B??dzie B??g m??ci?? krzywdy swojej,<br/>Je??li si?? ty z??ego nie odejmiesz,<br/>Wiedz, ??e z ??wiata marnie zejdziesz.",
        
        31:"Ma??o takich na ??wiecie dzi??,<br/>Jaki ten, co o nim my??lisz,<br/>A to?? przyrzekam s??owem swym,<br/>Ze tobie jest przyjacielem prawym.",
        
        32:"Nie jed??, radz????, gdzie masz wol??,<br/>Bo ci?? tam szpetnie ogol??,<br/>A nie tylko na cze??nym imieniu,<br/>Ale si?? strze?? rany na ramieniu.",
        
        33:"Taka jest nadzieja moja,<br/>??e?? si?? wr??ci zguba twoja,<br/>Ale?? radz??, chowaj lepiej,<br/>Chceszli nie mie?? szkody wi??kszej.",
        
        34:"Radz???? i??cie przyjacielskie:<br/>Nie poczynaj sobie kiepskie,<br/>Daj pok??j sprawie takowej,<br/>Co jest w??tpliwy koniec w niej.",
        
        35:"Nie miej nadzieje w d??ugim ??ywocie,<br/>Wszak??e nie chciej by?? w k??opocie,<br/>Bo ten d??ug ka??dy p??aci?? ma,<br/>A kto p????niej, ma??o na tym wygra.",
        
        36:"Kap??anem ty wybornie mo??esz by??,<br/>Jedno si?? chciej co napilniej uczy??,<br/>Aby?? si?? wed??ug moich s????w sta??o,<br/>Bo teraz masz pisma barzo ma??o.",
        
        37:"Jeste?? ty cz??owiek barzolichy,<br/>Przeto?? radz?? wst??pi?? w mnichy,<br/>A je??li wi??c nim zostaniesz,<br/>Na opactwo tam powstaniesz.",
        },
        
        
    };

    const sybillaNrConversion = {
        1:"22",
        2:"23",
        3:"24",
        4:"25",
        5:"25",
        6:"26",
        7:"16",
        8:"15",
        9:"25",
        10:"26",
        11:"25",
        12:"14",
    };

    const sybillaNames = {
        1:"Sybilla Persyka I",
        2:"Sybilla Libika II",
        3:"Delphika III",
        4:"Sybilla Cymeria IV",
        5:"Sybilla Erytrea V",
        6:"Sybilla Samia VI",
        7:"Sybilla Kumana VII",
        8:"Sybilla Hellespontica VIII",
        9:"Sybilla Phrygia IX",
        10:"Sybilla Tiburtina X",
        11:"Sybilla Kumea XI",
        12:"Sybilla Agrypina XII",
    };

    const opisyPostaci = {
        1: "*Nestor ??? w mitologii greckiej najstarszy w??dz walcz??cy podczas wojny troja??skiej, mityczny kr??l miasta Pylos. On jeden ocala?? z syn??w Neleusa i Chloris, zamordowanych przez Heraklesa. Ju?? za m??odu bohater uczestniczy?? w wyprawie Argonaut??w. Bra?? udzia?? w ??owach na dzika kalido??skiego i licznych walkach przeciw centaurom. Jako starzec poszed?? przeciw Troi, gdzie ws??awi?? si?? jako dobry doradca, znany z ogromnego do??wiadczenia i wiedzy. Po zdobyciu grodu wr??ci?? szcz????liwie do ojczyzny. Nestor prze??y?? 3 pokolenia ludzkie.<br/>Nestorem nazywa si?? obecnie do??wiadczonego starca lub najstarszego cz??onka jakiego?? towarzystwa.",
        2: "*Numa Pompilius ??? legendarny drugi kr??l Rzymu (nast??pca Romulusa), organizator ??ycia religijnego w Rzymie. By?? znany ze swej m??dro??ci, pobo??no??ci i pokojowego nastawienia. Wed??ug tradycji zapocz??tkowa?? w Rzymie pa??stwowy kult bog??w. Wprowadzi?? mi??dzy innymi kult Westy, bogini ogniska domowego, dla kt??rej wybudowa?? ??wi??tyni?? (datowan?? przez archeolog??w na podstawie bada?? stratygrafii Forum Romanum na ok. 650 rok p.n.e.). Za jego panowania powsta?? dwunastomiesi??czny kalendarz. Wprowadzi?? r??wnie?? podzia?? na dni robocze (dies fasti) i ??wi??teczne (dies nefasti). Jego nast??pc?? by?? Tullus Sostilusz.",
        3: "*Tullus Hostiliusz ??? kr??l, trzeci w??adca Rzymu w latach 673 p.n.e.???642 p.n.e., nast??pca Numy Pompiliusza. Tullus Hostiliusz by?? wnukiem Hostusa Hostiliusza, kt??ry zgin???? w czasie inwazji Sabin??w na Rzym. By?? zwolennikiem polityki ekspansjonistycznej, pokona?? kr??la alba??skiego Mettiusa, zdoby?? miasto Alba Longa oraz pokona?? Sabin??w. Wybudowa?? miejsce posiedze?? senatu (kuria Hostiliusza) i w????czy?? do miasta wzg??rze Celius, kt??re wed??ug Liwiusza wybra?? za siedzib?? kr??lewsk??. Po wygranej wojnie z Sabinami miasto nawiedzi??a zaraza, o kt??r?? obwiniano kr??la i jego niespokojne rz??dy. Liwiusz twierdzi, ??e aby przeb??aga?? bog??w, Tulliusz uczestniczy?? w tajemnym kulcie Jowisza. Niestaranno???? obrz??du rozgniewa??a jednak boga i kr??l sp??on???? w po??arze w??asnego domu, kt??ry zapali?? si?? od uderzenia pioruna.",
        4: "*Tymoteusz ??? strategii i polityk ate??ski.",
        5: "*Kwintus Fabiusz Maksimus (ur. ok. 280 p.n.e. w Rzymie, zm. 203 p.n.e. w Rzymie) ??? rzymski polityk i w??dz, pi??ciokrotnie konsul, dwukrotnie dyktator (w roku 221 p.n.e. i ponownie w 217 p.n.e.). Przydomek Verrucosus oznacza pokryty brodawkami, z powodu brodawek, jakie mia?? nad g??rn?? warg??. Drugi przydomek ??? Kunktator (??ac. zwlekaj??cy) ??? wywodzi?? si?? od jego strategii w rozmieszczaniu wojsk podczas II wojny punickiej.",
        6: "*Admet ??? w mitologii greckiej syn Feresa i Klimeny, kr??l Feraj w Tesalii. Bra?? udzia?? w wyprawie Argonaut??w i polowaniu na s??ynnego dzika kalido??skiego. Na jego dworze dziewi???? lat musia?? sp??dzi?? Apollo ukarany przez Zeusa. S??u??y?? jako pasterz-niewolnik, pokutuj??c za zabicie Cyklopa. Gospodarz okazywa?? boskiemu pasterzowi wiele wzgl??d??w, co mu si?? p????niej sowicie op??aci??o. Admet poprosi?? o r??k?? Alkestis (Alcesta), c??rki kr??la Jolkosu ??? Peliasa, ten zgodzi?? si?? na ma????e??stwo pod warunkiem, ??e konkurent przyjedzie w odwiedziny wozem zaprz????onym w lwa i dzika. Apollo wytresowa?? zaprz??g dzikich zwierz??t dla Admeta, dzi??ki czemu umo??liwi?? mu upragnione ma????e??stwo. W dzie?? ??lubu Admet zapomnia?? z??o??y?? ofiar?? Artemidzie, kt??ra w akcie zemsty nas??a??a do jego ma????e??skiej sypialni w????e, lecz czujny Apollo uratowa?? ??ycie ma????onkom. Nast??pnie u mojr (rzymskie Parki) uzyska?? przyrzeczenie, ??e Admetowi zostanie przed??u??one ??ycie, je??li w wyznaczonej, ostatniej godzinie jego ??ycia, kto?? z rodziny zgodzi si?? umrze?? za niego. Ze wszystkich bliskich tylko Alkestis zgodzi??a si?? na to bez wahania i dobrowolnie zesz??a do grobu ??? sk??d, w uznaniu jej czynu, przywr??ci?? j?? do ??ycia Herakles (wed??ug innej wersji mitu: wzruszona jej po??wi??ceniem Persefona).",
        7: "*Orestes ??? w mitologii greckiej syn Agamemnona i Klitajmestry, kt??ry pom??ci?? ojca, zabijaj??c matk?? (jego morderczyni??) i jej kochanka. Postaci Orestesa po??wi??cone s?? liczne antyczne dzie??a literackie, przede wszystkim tragedie.<br/>Pyledes ??? syn w??adcy Fokidy, Strofiosa i Anaksibii, kuzyn Orestesa. Pylades zosta?? najwierniejszym przyjacielem Orestesa i pomaga?? mu w trudnych sytuacjach. Po siedmiu latach od ??mierci Agamemnona wyruszy?? z Orestesem do jego ojczyzny. Rozwia?? w??tpliwo??ci Orestesa i wr??cz przymusi?? go, aby pom??ci?? ojca i zabi?? matk??. Pylades towarzyszy?? tak??e Orestesowi w wyprawie po pos??g Artemidy. Pom??g?? krewnemu i jego siostrze ??? Ifigenii ??? opracowa?? plan wykradni??cia pos??gu.",
        8: "*Narses ??? pierwotnie eunuch cesarski, nast??pnie wysoki urz??dnik i dow??dca bizanty??ski. Pochodzi?? z Persarmenii, cz????ci Armenii zaj??tej w 384 roku przez Pers??w. Zosta?? dow??dc?? armii bizanty??skiej w Italii, mimo ??e nie posiada?? wykszta??cenia wojskowego i by?? w podesz??ym wieku, odni??s?? szereg zwyci??stw. W latach 552???555 rozbi?? Ostrogot??w (Busta Gallorum 552, Cumae 555, Werona 562). Od 567 roku piastowa?? stanowisko prefekta Italii. W czasie walk z Ostrogotami korzysta?? z pomocy Longobard??w. Wed??ug Historii Longobard??w Paw??a Diakona popad??szy w nie??ask??, nak??oni?? ich do opanowania Italii. Zosta?? odwo??any z urz??du na skutek skarg o nadu??ycia. By?? ma??ego wzrostu i s??abego zdrowia.",
        9: "*Kalchas ??? obok Mopsosa i Tejrezjasza jeden z najs??ynniejszych wieszcz??w greckich, s??yn??cy z wr????enia z lotu ptak??w. Znanych jest kilka jego przepowiedni:<br/>Kiedy Achajowie sk??adali ofiar?? bogom przed rozpocz??ciem obl????enia Ilionu, spod o??tarza wype??z?? w????, wspi???? si?? na pobliskie drzewo i po??ar?? znajduj??ce si?? w gnie??dzie osiem piskl??t i ich matk??. Nast??pnie w???? zamieni?? si?? w kamie??. Kalchas trafnie zinterpretowa?? to wydarzenie jako znak od Zeusa. Zapowiada?? on, ??e Achajowie b??d?? bezskutecznie oblega?? mury Troi przez dziewi???? lat i zdob??d?? je dopiero w dziesi??tym roku.<br/>Przepowiedzia?? Agamemnonowi, ??e ??adne okr??ty wojenne nie b??d?? mog??y wyp??yn???? do Troi, dop??ki nie u??mierzy gniewu Artemidy. W tym celu poleci?? z??o??y?? w ofierze c??rk?? Agamemnona, Ifigeni??.<br/>Potrafi?? wyja??ni??, dlaczego w dziesi??tym roku obl????enia na Achaj??w spad??a zaraza. Okaza??o si??, ??e zes??a?? j?? Apollon, na pro??b?? swojego kap??ana, Chryzesa, kt??remu Agamemnon porwa?? c??rk??, Chryzejd??. Jedynym wyj??ciem by??o oddanie porwanej ojcu.<br/>Przepowiedzia?? r??wnie??, ??e mury Troi pozostan?? niezdobyte tak d??ugo, jak w troja??skiej ??wi??tyni Ateny b??dzie znajdowa?? si?? Palladion. Pos????ek zosta?? ukradziony przez Diomedesa i Odyseusza.<br/>Jego mniej znane przepowiednie m??wi??y o tym, ??e do zwyci??stwa nad Troj?? konieczna jest przy obl????eniu obecno???? dw??ch wojownik??w: Achillesa i Filokteta.<br/>Kalchas przepowiedzia?? sam sobie, ??e umrze wtedy, gdy spotka wieszcza m??drzejszego od siebie. Pokonany zosta?? w sztuce wieszczenia dopiero przez Mopsosa, wnuka Terezjasza. Zobaczywszy macior??, kt??ra si?? prosi??a, starali si?? przewidzie??, ile urodzi prosi??t. Kalchas przewidzia?? narodziny o??miu, Mopsos - dziewi??ciu. Kiedy okaza??o si??, ??e racj?? ma ten drugi, Kalchas umar?? ze zmartwienia.<br/>??wi??tynia po??wi??cona Kalchasowi znajdowa??a si?? w Apulii, gdzie wyznawcy we ??nie usyskiwali wyrok wyroczni.",
        10: "*Giges ??? kr??l Lidii. Wed??ug mitu przekazanego przez Platona by?? w??a??cicielem pier??cienia, dzi??ki kt??remu stawa?? si?? niewidzialny (J. Kilia??czyk-Zi??ba, s. 91.)",
        11: "*Euryalos ??? w mitologii greckiej syn Mekisteusa, uczestnik wyprawy Argonaut??w, epigon??w przeciw Tebom i wojny troja??skiej, jeden z bohater??w <i>Eneidy<i> Wirgiliusza. Jego ukochanym i przyjacielem jest Nisus",
        12: "*Publiusz Wentydiusz Bassus ??? rzymski genera?? i jeden z podopiecznych Juliusza Cezara. Odni??s?? kluczowe zwyci??stwa przeciwko Partom, kt??re doprowadzi??y do ??mierci kluczowych dow??dc??w Part??w. Zwyci??stwa te odkupi??y straty Krassusa i utorowa??y drog?? najazdom Antoniusza. Wentydiusz za swoje zwyci??stwa nad Partami otrzyma?? prawo odbycia triumfu w Rzymie.",
        13: "*Niobe ??? w mitologii greckiej kr??lowa Teb, ma????onka Amfiona, z kt??rym mia??a 7 syn??w i 7 c??rek, zwanych Niobidami.",
        14: "*Helena ??? w mitologii greckiej kr??lewna i kr??lowa Sparty; bohaterka Iliady Homera. Z wielu staraj??cych si?? o jej r??k?? zalotnik??w wybra??a Menelaosa, ksi??cia Myken i brata Agamemnona, kr??la Myken, kt??ry by?? ??onaty z Klitajmestr??, siostr?? Heleny. Aby zapobiec wa??niom, jej przybrany ojciec Tyndareos, kr??l Sparty (by?? to pomys?? Odyseusza), zobowi??za?? innych, by w razie potrzeby po??pieszyli z pomoc?? wybranemu przez Helen?? oblubie??cowi. Kiedy Tyndareos zmar??, Menelaos zosta?? kr??lem Sparty. Helena mia??a z Menelaosem c??rk?? Hermion??. W wyniku wywo??anego przez Eris sporu trzech bogi??: Hery, Afrodyty i Ateny o to, kt??ra z nich jest najpi??kniejsza, zosta??a przyrzeczona kr??lewiczowi troja??skiemu Parysowi, kt??ry sp??r rozs??dzi?? na korzy???? Afrodyty. Parys porwa?? Helen?? do swojej ojczystej Troi. Menelaos, by odbi?? ukochan??, zorganizowa?? wypraw?? przeciw Troi, pod dow??dztwem swego brata, Agamemnona. W czasie wojny Parys zosta?? zabity, a Helena zosta??a ??on?? jego brata, Deifobosa. Wreszcie, po 10 latach wojny, Troja zosta??a zdobyta, a Menelaos ujrzawszy pi??kno ??ony, niezmienione mimo up??ywu czasu, wybaczy?? jej niewierno???? i lata roz????ki i zabra?? jako ma????onk?? na sw??j dw??r w Sparcie.",
        15: "*Aspazja ??? mieszkanka Miletu, kt??ra zas??yn????a swym zwi??zkiem z Peryklesem, ate??skim m????em stanu. Wed??ug niekt??rych autor??w by??a jego ??on??. Niewiele wiadomo o szczeg????ach jej ??ycia. Wi??ksz?? cz?????? doros??ych lat sp??dzi??a w Atenach, prawdopodobnie wywieraj??c wp??yw na Peryklesa i ate??sk?? polityk??. Jest o niej mowa w dzie??ach Platona, Arystofanesa, Ksenofonta i innych autor??w tego czasu. Staro??ytni pisarze wspominaj?? r??wnie??, ??e Aspazja prowadzi??a dom publiczny i sama by??a nierz??dnic??, jednak??e wsp????cze??ni naukowcy kwestionuj?? te relacje, kt??re mia??yby pochodzi?? od komediopisarzy zainteresowanych znies??awianiem Peryklesa. Niekt??rzy badacze kwestionuj?? nawet historyczn?? tradycj??, zgodnie z kt??r?? mia??a by?? ona heter?? albo kurtyzan??. Zasugerowali, ??e w rzeczywisto??ci mog??a by?? ??on?? Peryklesa. Aspazja mia??a z Peryklesem syna, Peryklesa M??odszego, kt??ry p????niej, b??d??c strategiem w armii greckiej, zosta?? stracony po bitwie pod Arginuzami. Przyjmuje si??, ??e po ??mierci Peryklesa Starszego zosta??a kurtyzan?? Lizyklesa, innego ate??skiego dow??dcy i m????a stanu.",
        16: "*Chione ??? w mitologii greckiej nimfa ??niegu. By??a c??rk?? Boreasza, boga p????nocnego wiatru, i Orejtyji. Mia??a by?? matk?? Eumolposa, tw??rcy misteri??w eleuzyjskich, kt??rego mia??a z Posejdonem.",
        17: "*Krezus ??? ostatni kr??l Lidii, kraju na zachodzie Azji Mniejszej. Jego imi?? jest synonimem bogacza od staro??ytno??ci. Pochodzi?? z dynastii Mermnad??w. By?? synem Alyattesa. Obj???? tron oko??o 560 roku p.n.e. By?? mecenasem poet??w, uczonych i filozof??w, kt??rych ch??tnie go??ci?? na swoim dworze.",
        18: "*Toranius ??? znany staro??ytny handlarz niewolnik??w.",
        19: "*Iazon ??? w mitologii greckiej Argonauta, heros, syn Ajzona, kr??la Jolkos w Tesalii.",
        20: "*Polikratesa ??? tyran Samos w latach 537-522 p.n.e., Polikrates by?? przez staro??ytnych uwa??any za cz??owieka niezwykle szcz????liwego. Wzbudzi??o to zaniepokojenie Amasisa ??? sojusznika i przyjaciela tyrana ??? kt??ry wierzy??, ??e kto??, komu powodzi si?? nazbyt dobrze we wszystkim, musi marnie zako??czy?? ??ywot. Jest to przejaw silnie zaznaczonej u Herodota wiary w Ananke ??? zr??wnuj??c?? moc przeznaczenia, kt??ra nazbyt pomy??lne losy odwraca w ko??cu na niekorzy????. Jak podaje Herodot, Amasis poradzi?? Polikratesowi, by ten dobrowolnie wyrzek?? si?? czego??, co jest dla niego cenne. Uznawszy s??uszno???? tej rady, Polikrates wyrzuca do morza pi??kny sygnet, dzie??o Teodorosa z Samos. Bogowie nie przyjmuj?? jednak tej dobrowolnej ofiary i pier??cie?? powraca do w??adcy w brzuchu ryby podarowanej mu przez jednego z poddanych.",
        21: "*??mier??",
    }
