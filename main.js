// cxcheck v3 


var title = document.getElementsByClassName("ilc_qtitle_Title")[0].outerText 
var trig = false


window.addEventListener("keydown",(e) =>{
    if (e.key == 'a'){
        if (document.getElementsByClassName("ilc_page_title_PageTitle")[0].innerText == "Diff_3")
        {
            document.getElementsByClassName("ilc_qinput_TextInput")[0].value = -100
        }

        if (document.getElementsByClassName("ilc_page_title_PageTitle")[0].innerText == "Diff_4")
        {
            document.getElementsByClassName("ilc_qinput_TextInput")[0].value = -135
        }

        if (document.getElementsByClassName("ilc_page_title_PageTitle")[0].innerText == "DV Berechnung")
        {
            document.getElementsByClassName("ilc_qinput_TextInput")[0].value = 0.25
            setTimeout(function(){
                document.getElementsByName("ilc_qinput_TextInput")[1].value = 40
             },2000);
        }

        if (document.getElementsByClassName("ilc_page_title_PageTitle")[0].innerText == "DV Berechnung (2)")
        {
            document.getElementsByClassName("ilc_qinput_TextInput")[0].value = 0.125
            setTimeout(function(){
                document.getElementsByName("ilc_qinput_TextInput")[1].value = 25
             },2000);
        }

        if (document.getElementsByClassName("ilc_page_title_PageTitle")[0].innerText == "StromQ")
        {
            document.getElementsByClassName("ilc_qinput_TextInput")[0].value = 5406.3
            setTimeout(function(){
                document.getElementsByName("ilc_qinput_TextInput")[1].value = 50.4
             },2000);
        }

        if (document.getElementsByClassName("ilc_page_title_PageTitle")[0].innerText == "DV Berechnung 0")
        {
            document.getElementsByClassName("ilc_qinput_TextInput")[0].value = 17000
        }
        
            switch (title)
        {
            case 'Welche der nachfolgenden Aussagen zum OP sind richtig':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "besteht aus DV, Vst, LeistungVst";
                var a2 = "besteht aus DV, E-Scha, GegentaktEndStufe"
                var a3 = "die E-Stufe des OPs hat die Verstärkung beta*Rc"
                var a4 = "die Verstärkung des OPs liegt bei über 10^6"
                var a5 = "die Gegentaktendstufe zieht besser nach - wie eine Kollektorschaltung"
                var a6 = "der Totbereich der Gegentaktendstufe wird durch Dioden und Ruheströme behoben"
                var a7 = "OPs werden normal mit +-15V versorgt"
                var a8 = "OPs werden immer mit Beschaltung eingesetzt"
                var a9 = "beschaltete OPs stellen Regelkreise dar"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7 || con == a8 || con == a9){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche Aussagen zur Schwingbedingung sind richtig?':
            {
                // type of answer
                var aTags = document.getElementsByClassName("answertext");

                // solutions
                var a1 = "OP Schaltungen gehören zu den Regelkreisen";
                var a2 = "der Phasenrand ist bei L=1 zu messen"
                var a3 = "der Phasenrand ist der Abstand von phiL nach -180° bei |L|=1"
                var a4 = "Oszillatoren erfüllen die Schwingbedingung"
                var a5 = "L=1 im Schnittpunkt von A und 1/K"
                var a6 = "die Phase von K beeinflusst die Phase von L"
                var a7 = "StabBestimmung: A, dann 1/K zeichnen, L eintragen, phiL konstruieren, phir ablesen"

                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                var con = aTags[i].innerText;


                if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7){
                aTags[i].click();
                }
                }  
            }
            
            case 'welche Aussagen zur FGang-Korrektur sind richtig:':
            {
                // type of answer
                var aTags = document.getElementsByClassName("answertext");

                // solutions
                var a1 = "die RC-Glieder in den Verstärkerstufen sind Ersatzschaltbilder";
                var a2 = "der DV hat die tiefste, die E-Stufe die mittlere und DerPVst die höchste Eckfreq"
                var a3 = "das Rückkoppelnetzwerk wird für die Universalkomp ohmsch angenommen"
                var a4 = "Tiefpässe im Rückkoppelnetzwerk verschlechtern die Stabilität"
                var a5 = "K->1 ist kritisch bzgl. der Stabilität"
                var a6 = "1/K höher schieben verbessert die Stab"
                var a7 = "L nach links rutschen verbessert normal die stabilität"

                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                var con = aTags[i].innerText;


                if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7){
                aTags[i].click();
                }
                }   
            }

            case 'Frequenzgangkomp\n\nKlicken Sie vom kompensierten  OP w1,  L=1  und  das K an':
            {
                // type of answer
                var aTags = document.getElementsByClassName("preventDoubleSubmission");

                // coord
                var pos1 = '97,21,132,65';
                var pos2 = '502,263,524,296';

                // positions

                var lpos1;
                var lpos2; 

                // check
                for (var i = 0; i < aTags.length; i++){
                    if (aTags[i].coords == pos1){
                        lpos1 = i;
                    }
                    
                    if(aTags[i].coords == pos2){
                        lpos2 = i; 
                    }
                }

                aTags[lpos1].click();

//!!            second action not working 
                setTimeout(function(){
                    aTags[lpos2].click();
                },2000);
                
            }

            case 'Frequenzgangkomp\n\nKlicken Sie w1 vom ursprünglichen unkompensierten OP und L>1  und A vom ursprünglichen unkompensierten OP an':
            {
                // type of answer
                var aTags = document.getElementsByClassName("preventDoubleSubmission");

                // coord
                var pos1 = '151,8,213,48';
                var pos2 = '240,20,279,67';
                var pos3 = '258,184,309,240';

                // positions

                var lpos1;
                var lpos2; 
                var lpos3;

                // check
                for (var i = 0; i < aTags.length; i++){
                    if (aTags[i].coords == pos1){
                        lpos1 = i;
                    }
                    
                    if(aTags[i].coords == pos2){
                        lpos2 = i; 
                    }

                    if(aTags[i].coords == pos3){
                        lpos3 = i; 
                    }
                }

                aTags[lpos1].click();

//!!            second action not working 
                setTimeout(function(){
                    aTags[lpos2].click();
                },2000);
            }
            
            case 'Frequenzgangkomp\n\nKlicken Sie w2 vom ursprünglichen unkompensierten OP und L<1  an':
            {
                // type of answer
                var aTags = document.getElementsByClassName("preventDoubleSubmission");

                // coord
                var pos1 = '359,76,400,133';
                var pos2 = '580,288,609,328';

                // positions

                var lpos1;
                var lpos2; 
                // check
                for (var i = 0; i < aTags.length; i++){
                    if (aTags[i].coords == pos1){
                        lpos1 = i;
                    }
                    
                    if(aTags[i].coords == pos2){
                        lpos2 = i; 
                    }

    
                }

                aTags[lpos1].click();

//!!            second action not working 
                setTimeout(function(){
                    aTags[lpos2].click();
                },2000);
            }

            case 'Frequenzgangkomp\n\nKlicken Sie die Eckfrequenz an, die aufgrund der Verkleinerung des Ausgangwiderstandes entstanden ist und Klicken Sie L=1 an':
            {
               // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '469,212,500,253';
               var pos2 = '502,263,524,296';

               // positions

               var lpos1;
               var lpos2; 
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   
                   if(aTags[i].coords == pos2){
                       lpos2 = i; 
                   }

   
               }

               aTags[lpos1].click();

//!!            second action not working 
               setTimeout(function(){
                   aTags[lpos2].click();
               },2000); 
            }

            case 'Frequenzgangkomp\n\nKlicken Sie die Eckfrequenz an, diesowohl durch Ck1 oder auch event. durch Ck2 verschoben wurde':
            {
                 // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '97,21,132,65';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();

            }

            case 'Klicken Sie auf den Phasenrand und auf die Stelle L=1 der stabilen Schaltung ':
            {
                // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '422,90,467,162';
               var pos2 = '416,567,459,633';

               // positions

               var lpos1;
               var lpos2; 
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   
                   if(aTags[i].coords == pos2){
                       lpos2 = i; 
                   }

   
               }

               aTags[lpos1].click();

//!!            second action not working 
               setTimeout(function(){
                   aTags[lpos2].click();
               },2000); 
            }

            case 'Klicken Sie auf den Phasenrand der instabilen Schaltung ':
            {
                  // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '549,589,636,669';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
            }

            case 'Welche der nachfolgenden Aussagen sind richtig:':
            {
                // type of answer
                var aTags = document.getElementsByClassName("answertext");

                // solutions
                var a1 = "Ck1 verschlechtert die Bandbreite";
                var a2 = "Ck1 verschlechtert die Bandbreite mehr als Ck2"
                var a3 = "Ck1 erzwingt Stabilitä indem L=1 nach links rutscht"
                var a4 = "der Ladestrom von Ck1 wird von der DV_Stromquelle vorgegeben"
                var a5 = "mit 1/K höher schieben wandert L=1 nach links"

                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                var con = aTags[i].innerText;


                if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5){
                aTags[i].click();
                }
                }  
            }

            case 'welche der nachfolgenden Antworten ist richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "Ck2 ist klein und damit leicht auf dem IC integrierbar";
                var a2 = "nicht kompensierte OPs können meist extern kompensiert werden"
                var a3 = "die Gegekopplung verkleinert den Ausgangswiderstand"
                var a4 = "Ck2 erzwingt Stabilitä indem die Phase an der Stelle L=1 verbessert wird"
                var a5 = "Ck2 verschiebt die 2. Eckfreq. nach rechts"
                var a6 = "sehr schnelle OPs sollten nicht kompensiert sein"
                var a7 = "ck2 verschiebt w1"
                var a8 = "die meisten OPs sind intern kompensiert"
                var a9 = "w2=1/(ra2*Ck2)"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7 || con == a8 || con == a9){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche der nachfolgenden Aussagen sind richtig?':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "T=A/(1+AK)";
                var a2 = "T=L/[(1+L)*K]"
                var a3 = "das Verhalten der Schaltung im Nutzbereich wird durch1/K bestimmt"
                var a4 = "L=1 ist beim Schnittpunkt von A und dem 1/ K"
                var a5 = "der Phasenrand ist der Abstand von phiL nach -180 bei |L|=1"
                var a6 = "L ist der Abstand von A und 1/K"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6){
                    aTags[i].click();
                    }
                } 
            }

            case 'Zwei Rückkoppelnetzwerke sind eingezeichnet. Klicken SIe auf jenes das eine stabile Schaltung ergibt und auf den dort vorhandenen Phasenrand':
            {
                // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '513,79,794,167';
               var pos2 = '436,582,453,632';

               // positions

               var lpos1;
               var lpos2; 
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   
                   if(aTags[i].coords == pos2){
                       lpos2 = i; 
                   }

   
               }

               aTags[lpos1].click();

//!!            second action not working 
               setTimeout(function(){
                   aTags[lpos2].click();
               },2000); 
            }

            case 'Zwei Rückkoppelnetzwerke sind eingezeichnet. Klicken auf L=1 der instabilen Variante':
            {
                  // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '548,235,583,307';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
            }

            case 'Leiten sie die Näherung und die exakte Lösung für T der invertierenden Verstärkerschaltung her.  Welche der nachfolgenden Lösungen sind richtig':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "T=~R2/R1";
                var a2 = "T=A/(1+A*K) mit K=(1+1/A)R1/R2"
                var a3 = "re=R1"
                var a4 = "ra=sehr klein"
                var a5 = "der Verlauf von T kann frei mit R, L und C in K fixiert werden"
                var a6 = "iR1=iR2"
                var a7 = "Schaltung kann als ideales Amperemeter verwendet werden"
                var a8 = "Schwankungen von K spürt man im T"
                var a9 = "die Ausgangsspannung hat ein hartes Verhalten"
                var a11 = "für ue=0 muss der Ruhestrom über R2 fliessen"
                var a12 = "T=~Y1/Y2 gilt immer"
                var a13 = "Schaltung für Luxmeter geeignet"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7 || con == a8 || con == a9 || con == a11 || con == a12 || con == a13){
                    aTags[i].click();
                    }
                } 
            }

            case 'Leiten sie die Näherung und die exakte Lösung für T der nicht invertierenden Verstärkerschaltung her.  Welche der nachfolgenden Aussagen sind richtig':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "re=sehr hoch";
                var a2 = "ra=sehr klein"
                var a3 = "ir1=iR2"
                var a4 = "K=R1/(R1+R2)"
                var a5 = "T=1+R2/R1"
                var a6 = "ud=ue-ug"
                var a7 = "Schaltung kann als ideales Voltmeter verwendet werden"
                var a8 = "Schwankungen von K spürt man im T"
                var a9 = "die Ausgangsspannung hat ein hartes Verhalten"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7 || con == a8 || con == a9 || con == a10 || con == a11 || con == a12 || con == a13){
                    aTags[i].click();
                    }
                } 
            }

            case 'Der Kurzschlussübertragungsleitwert der 1. nachfolgenden sym. Schaltung ist zu rechnen. Welche der angegebenen Lösungen sind richtig?':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "Y=1/((1+s*R*C/2)*2R)";
                
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 ){
                    aTags[i].click();
                    }
                } 
            }

            case 'Der Kurzschlussübertragungsleitwert der 2. nachfolgenden sym. Schaltung ist zu rechnen. Welche der angegebenen Lösungen sind richtig?':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "Y=1/{R// [R+1/(sC)]}";
                
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 ){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche der nachfolgenden Aussagen zum Impedanzwandler sind richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "T=1";
                var a2 = "re=sehr hoch"
                var a3 = "ra=sehr klein"
                var a4 = "die Schaltung ist schwinggefährdet"
                var a5 = "nicht kompensierte OPs können nicht eingesetzt werden"
                var a6 = "kann z.B. zwei Tiefpässe entkoppeln"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 ){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche der nachfolgenden Aussagen für den Addierer sind richtig?\n\n':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "ia=i1+i2";
                var a2 = "u-=~0"
                var a3 = "i1=ue1/R1"
                var a4 = "ua=ia*R3"
                var a5 = "u3=~ua"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 ){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche der nachfolgenden Aussagen für den Subtrahierer sind richtig?\n\n':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "u- =ue2*R4/(R4+R2)";
                var a2 = "u+ =ue2*R4/(R4+R2)"
                var a3 = "u3=~(ue1 - u+)*R3/R1"
                var a4 = "u3=~(ue1 - u-)*R3/R1"
                var a5 = "ua=u+ - u3"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 ){
                    aTags[i].click();
                    }
                } 
            }

            case 'Zwei Rückkoppelnetzwerke sind eingezeichnet. Klicken SIe in der stabilen Version an die Stelle der oberen Grenzfrequenz der Schaltung':
            {
                  // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '416,82,467,169';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
            }

            case 'Wo ist die durch den Stabilisierungswiderstand erzeugt Eckfreckuenz?':
            {
                  // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '179,65,200,98';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
            }

            case 'Wie gross ist der Phasenrand bei nachfolgendem Beispiel?':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "ca 40";
                
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 ){
                    aTags[i].click();
                    }
                } 
            }

            case 'Wo ist die Loopgain ablesbar?':
            {
                  // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '101,61,127,117';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
            }

            case 'An welcher Stelle wird ist die für die Stabilität kritische Phase zu finden?':
            {
                  // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '178,255,204,314';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
            }

            case 'An welcher Stelle befindet sich die die Differantiatorwirkung bestimmende Frequenz?':
            {
                  // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '155,92,174,123';

               // positions

               var lpos1;
               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
            }

            case 'Leiten Sie K her-\nWelche der nachfolgenden Aussagen ist richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "R1 und C bestimmen w1";
                var a2 = "R2 und C bestimmen w0"
                var a3 = "R1 wirkt stabilisierend"
                var a4 = "K=(1+sCR1)/(scR2)"
                var a5 = "T=A/(1+AK)"
                var a6 = "T=A/(1+L)"
                var a7 = "T=1/K nur für L>"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7){
                    aTags[i].click();
                    }
                } 
            }

            case 'Leiten Sie K her-\nWelche der nachfolgenden Aussagen ist richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "die Schaltung hat keine nennenswerten Driftprobleme";
                
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 ){
                    aTags[i].click();
                    }
                } 
            }

            case 'Wo geschieht die Gleichtaktunterdrückung?':
            {
                   // type of answer
               var aTags = document.getElementsByClassName("preventDoubleSubmission");

               // coord
               var pos1 = '42,39,113,175';
               var pos2 = '143,55,289,57,287,97,231,99,211,168,137,166';

               // positions

               var lpos1;
               var lpos2; 

               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
//!!            second action not working 
               setTimeout(function(){
                aTags[lpos2].click();
            },2000); 
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
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
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
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
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

               // positions

               var lpos1;
               var lpos2; 

               // check
               for (var i = 0; i < aTags.length; i++){
                   if (aTags[i].coords == pos1){
                       lpos1 = i;
                   }
                   

   
               }

               aTags[lpos1].click();
//!!            second action not working 
               setTimeout(function(){
                aTags[lpos2].click();
            },2000); 
            }

            case '\nWelche der nachfolgenden Aussagen ist für einen Integratorschaltung richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "der Ruhestrom führt zu einer grossen Drift der Schaltung";
                var a2 = "die Offsetspannung führt zur Drift der Schaltung"
                var a3 = "die Grunddrift der Schaltung  aufgrund von Ruhestrom und Offsetspannung wird mit Rp kompensiert"
                var a4 = "RP=R1 ist ein Grundeinstellung, wenn der Rp nicht als Poti ausgeführt wird"
                var a5 = "Rpp kompensiert die Drift des Ruhestromes und die Drift der Offsetspannung"
                var a6 = "ohne Rpp ist die Schaltung nicht praktisch einsetzbar"
                var a7 = "die Grunddrift der Schaltung  aufgrund von Ruhestrom und Offsetspannung wird mit Rp kompensiert"

                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a6 || con == a7){
                    aTags[i].click();
                    }
                } 
            }

            case 'Integrator: leiten Sie K her; leiten Sie den Zusammenhang zwischen der EIngangs und der Ausgangsspannung im Zeitbereich her.\nWelche der nachfolgenden Aussagen sind richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "K=sRC";
                var a2 = "Ue/R=C*dua/dt"
                var a3 = "T=1/(sRC) fürL >"
                var a4 = "Rpp ist für die Driftkomp. nötig"
                var a5 = "die Schaltung hat keine Stabilitätsprobleme"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche Aussagen zur nachfolgenden 1. Schaltung sind richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "Iq= Uz/(R1)"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche Aussagen zur nachfolgenden 2. Schaltung sind richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "Iq= Ue/R1"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche Aussagen zur nachfolgenden 3. Schaltung sind richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "Iq= Ue*R2/[(R1+R2)Ri)";
                var a2 = "ein invert. Verstärker wäre auch halbwegs möglich"
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2){
                    aTags[i].click();
                    }
                } 
            }

            case 'Welche der nachfolgenden Aussagen zum Differenzverstärker sind richtig:':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "Ad soll möglichst gross sein";
                var a2 = "rd soll gross sein"
                var a3 = "Ic = ca. Ie/2"
                var a4 = "Re soll möglichst gross sein"
                var a5 = "Eingangsoffset = Gleichtaktspannung"
                
                var a11 = "offsetspannung wird am Eingang angelegt, sodass der Ausgang dann gewünscht zu liegen kommt";
                var a21 = "Offsetfehler entstehen durch die Streuung der Transistoren"
                var a31 = "Offsetfehler können immer behoben werden"
                var a41 = "die Offsetdrift kann nicht behoben werden"
                var a51 = "die Driften entstehen hauptsächlich durch Temperaturschwankungen"
                var a61 = "Stromspiegel haben weniger Spannungsbedarf als normale TransistorstromQ"

                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1 || con == a2 || con == a3 || con == a4 || con == a5 || con == a11 || con == a21 || con == a31 || con == a41 || con == a51 || con == a61){
                    aTags[i].click();
                    }
                } 
            }

            case 'Vorteile der normalen Transistorstromquelle gegenüber dem Stromspiegel':
            {

                // type of answer
                var aTags = document.getElementsByClassName("answertext");
    
                // solutions
                var a1 = "benötigt nur einen Transistor";
                
                // check solutions 
                for (var i = 0; i < aTags.length; i++) {
                    var con = aTags[i].innerText;
                
                
                    if ( con == a1){
                    aTags[i].click();
                    }
                } 
            }

            
        
        }
        
        

    }
});


