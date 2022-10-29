var title = document.getElementsByClassName("ilc_page_title_PageTitle")[0].outerText 
var trig = false


window.addEventListener("keydown",(e) =>{
    if (e.key == 'a'){
        if(title == 'OP'){

            var aTags = document.getElementsByClassName("answertext");
            var a1 = "besteht aus DV, Vst, LeistungVst";
            var a2 = "besteht aus DV, E-Scha, GegentaktEndStufe"
            var a3 = "die E-Stufe des OPs hat die Verstärkung beta*Rc"
            var a4 = "die Verstärkung des OPs liegt bei über 10^6"
            var a5 = "die Gegentaktendstufe zieht besser nach - wie eine Kollektorschaltung"
            var a6 = "der Totbereich der Gegentaktendstufe wird durch Dioden und Ruheströme behoben"
            var a7 = "OPs werden normal mit +-15V versorgt"
            var a8 = "OPs werden immer mit Beschaltung eingesetzt"
            var a9 = "beschaltete OPs stellen Regelkreise dar"
            
            var found;

        for (var i = 0; i < aTags.length; i++) {
            var con = aTags[i].innerText;
            if ( con == a1 ){
            found = aTags[i];
            found.click();
            break;
            }
        }       
        }
    }
});


