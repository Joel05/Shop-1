// cxcheck v6 

window.addEventListener("keydown", (e) => {

    if (e.key == 'c') {
        localStorage.clear();

    }
    if (e.key == 'a') {
        switch (document.getElementsByClassName("ilc_qtitle_Title")[0].outerText) {
            case 'Welche der nachfolgenden Aussagen sind richtig?':
                {

                    // type of answer
                    var aTags = document.getElementsByClassName("answertext");

                    // solutions
                    var a1 = "rail to rail OPS sind unbedingt nötig";
                    var a2 = "die Verstärkung der ersten Stufe ist im Bereich von 100 -10000"
                    var a3 = "die erste Stufe hat Ihren Bezugspunkt bei der Gleichtaktspannung"
                    var a4 = "Die Zenerdiode könnte durch eine 7805 ersetzt werden"

                    // check solutions 
                    for (var i = 0; i < aTags.length; i++) {
                        var con = aTags[i].innerText;


                        if (con == a1 || con == a2 || con == a3 || con == a4) {
                            aTags[i].click();
                        }
                    }
                    break;
                }

            case 'Über welche Formel steuert die Brückendifferenzspannung den Stromhub?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("answertext");

                    // solutions
                    var a1 = "U1 / R3 = 16mA*50/500k";

                    // check solutions 
                    for (var i = 0; i < aTags.length; i++) {
                        var con = aTags[i].innerText;


                        if (con == a1) {
                            aTags[i].click();
                        }
                    }
                    break;
                }

            case 'Welche der nachfolgenden Formeln legt den Ruhestrom/Offsetstrom fest?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("answertext");

                    // solutions
                    var a1 = "5.6V/RNP=4mA*50/500k";

                    // check solutions 
                    for (var i = 0; i < aTags.length; i++) {
                        var con = aTags[i].innerText;


                        if (con == a1) {
                            aTags[i].click();
                        }
                    }
                    break;
                }

            case 'Welche der nachfolgenden Formeln bestimmt die Verstärkung des Instrumentenverstärkers?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("answertext");

                    // solutions
                    var a1 = "UD/R2=II =U1/( 2R1+R2)";

                    // check solutions 
                    for (var i = 0; i < aTags.length; i++) {
                        var con = aTags[i].innerText;


                        if (con == a1) {
                            aTags[i].click();
                        }
                    }
                    break;
                }

            case 'Welche der nachfolgenden Aussagen sind richtig:':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("answertext");

                    // solutions
                    var a1 = "die Schaltung ist unenmpfindlich gegenüber Offsetfehlern und Driftfehlern";
                    var a2 = "die Amplitude der Sinusspannung muss sehr stabil sein"
                    // check solutions 
                    for (var i = 0; i < aTags.length; i++) {
                        var con = aTags[i].innerText;


                        if (con == a1 || con == a2) {
                            aTags[i].click();
                        }
                    }
                }

            case 'Welche der nachfolgenden Aussagen zum sC-Verstärker sind richtig:':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("answertext");

                    // solutions
                    var a1 = "die Schaltung ist empfindlich gegenüber höheren Eingagnssignalfrequenzen";
                    var a2 = "der nicht invertierende AC Verstärker bestimmt die Geschwindigkeit des Ausgangssignales"
                    var a3 = "der nicht invertierende Integrator bestimmt die Genauigkeit"
                    var a4 = "der nicht invertierende Integrator bestimmt die Gescdhwindigkeit des Ausgangssignales mit"
                    // check solutions 
                    for (var i = 0; i < aTags.length; i++) {
                        var con = aTags[i].innerText;


                        if (con == a1 || con == a2 || con == a3 || con == a4) {
                            aTags[i].click();
                        }
                    }
                }


            case 'Wo geschieht die Messung des Iststromes ?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '529,196,574,248';

                    if (localStorage.getItem('step1cache') == null) {
                        localStorage.setItem('step1cache', '0');
                    }

                    var step = localStorage.getItem('step1cache');


                    // check
                    for (var i = 0; i < 99999999; i++) {
                        if (aTags[i].coords == pos1 && step == 0) {
                            lpos1 = i;
                            step++;
                            localStorage.setItem('step1cache', step);
                            aTags[i].click();
                        }
                    }


                }

            case 'Wo geschieht der Abbau der Gleichtaktspannung?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '344,103,431,215';


                    if (localStorage.getItem('step2cache') == null) {
                        localStorage.setItem('step2cache', '0');
                    }

                    var step = localStorage.getItem('step2cache');


                    // check
                    for (var i = 0; i < 99999999; i++) {
                        if (aTags[i].coords == pos1 && step == 0) {
                            lpos1 = i;
                            step++;
                            localStorage.setItem('step2cache', step);
                            aTags[i].click();
                        }
                    }

                }

            case 'Die Verstärkerschaltung hat hoche Qualität. Welcher Schaltungsteil ist dafür vorwiegend verantwortlich?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '166,95,251,230';

                    if (localStorage.getItem('step3cache') == null) {
                        localStorage.setItem('step3cache', '0');
                    }

                    var step = localStorage.getItem('step3cache');


                    // check
                    for (var i = 0; i < 99999999; i++) {
                        if (aTags[i].coords == pos1 && step == 0) {
                            lpos1 = i;
                            step++;
                            localStorage.setItem('step3cache', step);
                            aTags[i].click();
                        }
                    }
                }

            case 'Wo wird die Versorgungsspannung der Schaltung erzeugt?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '537,127,577,174';

                    if (localStorage.getItem('step4cache') == null) {
                        localStorage.setItem('step4cache', '0');
                    }

                    var step = localStorage.getItem('step4cache');


                    // check
                    for (var i = 0; i < 99999999; i++) {
                        if (aTags[i].coords == pos1 && step == 0) {
                            lpos1 = i;
                            step++;
                            localStorage.setItem('step4cache', step);
                            aTags[i].click();
                        }
                    }
                }

            case 'Welcher Widerstand steuert beim Stromregler die 0-16mA ?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '440,152,470,174';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();

                }

            case 'Wo geschieht die Gleichtaktunterdrückung?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '42,39,113,175';
                    var pos2 = '143,55,289,57,287,97,231,99,211,168,137,166';

                    if (localStorage.getItem('step5cache') == null) {
                        localStorage.setItem('step5cache', '0');
                    }

                    var step = localStorage.getItem('step5cache');


                    // check
                    for (var i = 0; i < 99999999; i++) {
                        if (aTags[i].coords == pos1 && step == 0) {
                            lpos1 = i;
                            step++;
                            localStorage.setItem('step5cache', step);
                            aTags[i].click();
                        }

                        if (aTags[i].coords == pos2 && step == 1) {
                            lpos2 = i;
                            step++;
                            aTags[i].click();
                        }
                    }
                }

            case 'Wo erfolgt die Verstärkung des Nutzsignals?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '237,113,280,195';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();
                }

            case 'Wo stellt sich Ugl ein?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '135,68,162,90';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();
                }

            case 'Auf welchen Drähten erfolgt die so wichtige Impedanzwandlung?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '61,9,130,56';
                    var pos2 = '50,90,128,140';

                    if (localStorage.getItem('step6cache') == null) {
                        localStorage.setItem('step6cache', '0');
                    }

                    var step = localStorage.getItem('step6cache');


                    // check
                    for (var i = 0; i < 99999999; i++) {
                        if (aTags[i].coords == pos1 && step == 0) {
                            lpos1 = i;
                            step++;
                            localStorage.setItem('step6cache', step);
                            aTags[i].click();
                        }

                        if (aTags[i].coords == pos2 && step == 1) {
                            lpos2 = i;
                            step++;
                            aTags[i].click();
                        }
                    }
                }

            case 'Wo könnte alternativ auch ein Präzisionsgleichrichter eingebaut werden?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '221,38,286,97';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();
                }

            case 'Wo erfolgt die Modulation?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '68,5,161,127';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();
                }

            case 'Wo wird die Geschwindigkeit des Einstellvorganges des Ausgangsstromes eingestellt?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '330,17,370,94';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();
                }

            case 'Wo geschieht die Wechselrichtung?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '170,2,218,51';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();
                }

            case 'Wo geschieht die Demodulation?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    if (aTags.length == 8) {
                        // coord
                        var pos1 = '330,17,370,94';

                        // positions

                        var lpos1;
                        // check
                        for (var i = 0; i < aTags.length; i++) {
                            if (aTags[i].coords == pos1) {
                                lpos1 = i;
                            }
                        }
                    }
                    else if (aTags.length == 12) {
                        // coord
                        var pos1 = '526,11,614,100';

                        // positions

                        var lpos1;
                        // check
                        for (var i = 0; i < aTags.length; i++) {
                            if (aTags[i].coords == pos1) {
                                lpos1 = i;
                            }
                        }
                    }


                    aTags[lpos1].click();
                }

            case 'Wo geschieht die Demodulation?':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");



                    aTags[lpos1].click();
                }

            case 'Wo passiert die Gleichtaktunterdrückung':
                {
                    // type of answer
                    var aTags = document.getElementsByClassName("preventDoubleSubmission");

                    // coord
                    var pos1 = '101,18,171,157';

                    // positions

                    var lpos1;
                    // check
                    for (var i = 0; i < aTags.length; i++) {
                        if (aTags[i].coords == pos1) {
                            lpos1 = i;
                        }



                    }

                    aTags[lpos1].click();
                }

        }


    }
});


