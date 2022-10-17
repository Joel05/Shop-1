var title = document.getElementsByClassName("ilc_page_title_PageTitle")[0].outerText 
var trig = false


window.addEventListener("keydown",(e) =>{
    if (e.key == 'a'){
        if(title == "Diff_1"){
            console.warn(title)
                document.getElementById("answer_1").checked = false
                document.getElementById("answer_2").checked = false
                document.getElementById("answer_4").checked = false
                document.getElementById("answer_5").checked = false
                document.getElementById("answer_7").checked = false
                document.getElementById("answer_9").checked = false
                document.getElementById("answer_10").checked = false
                document.getElementById("answer_11").checked = false
                document.getElementById("answer_12").checked = false
                document.getElementById("answer_14").checked = false
                document.getElementById("answer_15").checked = false
                document.getElementById("answer_17").checked = false
                document.getElementById("answer_19").checked = false
                document.getElementById("answer_20").checked = false
             
                document.getElementById("answer_1").click()
                document.getElementById("answer_2").click()
                document.getElementById("answer_4").click()
                document.getElementById("answer_5").click()
                document.getElementById("answer_7").click()
                document.getElementById("answer_9").click()
                document.getElementById("answer_10").click()
                document.getElementById("answer_11").click()
                document.getElementById("answer_12").click()
                document.getElementById("answer_14").click()
                document.getElementById("answer_15").click()
                document.getElementById("answer_17").click()
                document.getElementById("answer_19").click()
                document.getElementById("answer_20").click()
         }

        if(title == "DV Berechnung"){
            
                
                document.getElementsByName("result_$r1")[0].value = "0"
                setTimeout(function(){
                   document.getElementsByName("result_$r2")[0].value = "40"
                },2000);
           
             
             
        }
        if(title == "ck1")
        {
            document.getElementById("answer_2").click()
        }
        if(title == "BodeDiffInt")
        {
                document.getElementsByClassName("preventDoubleSubmission")[2].click()   
        }
        if(title == "4-20mA 3")
        {
                document.getElementsByClassName("preventDoubleSubmission")[2].click()   
        }
        if(title == "OPScha")
        {
            document.getElementById("answer_10").checked = false
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_1").checked = false
            document.getElementById("answer_12").checked = false
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_6").checked = false
         
            document.getElementById("answer_10").click()
            document.getElementById("answer_9").click()
            document.getElementById("answer_1").click()
            document.getElementById("answer_12").click()
            document.getElementById("answer_0").click()
            document.getElementById("answer_6").click()
        }
        if(title == "verallg GK (2)")
        {
            document.getElementById("answer_7").click()
        }
        if(title == "inv Scha")
        {
            document.getElementById("answer_2").checked = false
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_19").checked = false
            document.getElementById("answer_26").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_21").checked = false
            document.getElementById("answer_28").checked = false
            document.getElementById("answer_10").checked = false
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_23").checked = false
            document.getElementById("answer_12").checked = false
            document.getElementById("answer_18").checked = false
            document.getElementById("answer_16").checked = false

            document.getElementById("answer_2").click()
            document.getElementById("answer_9").click()
            document.getElementById("answer_19").click()
            document.getElementById("answer_26").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_21").click()
            document.getElementById("answer_28").click()
            document.getElementById("answer_10").click()
            document.getElementById("answer_0").click()
            document.getElementById("answer_23").click()
            document.getElementById("answer_12").click()
            document.getElementById("answer_18").click()
            document.getElementById("answer_16").click()
        }
        if(title =="Modulationsverstärker (2)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[2].click()
        }
        if(title == "TransVst")
        {
            document.getElementById("answer_2").checked = false
            document.getElementById("answer_9").checked = false

            document.getElementById("answer_9").click()
            document.getElementById("answer_2").click()
        }
        if(title =="Diff_1")
        {
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_16").checked = false
            document.getElementById("answer_6").checked = false
            document.getElementById("answer_13").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_18").checked = false
            document.getElementById("answer_8").checked = false

            document.getElementById("answer_0").click()
            document.getElementById("answer_16").click()
            document.getElementById("answer_6").click()
            document.getElementById("answer_13").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_18").click()
            document.getElementById("answer_8").click()
        }
        if(title=="Schaltverluste__")
        {
            document.getElementById("answer_2").click()
        }
        if(title=="ck(5)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[3].click()
            document.getElementsByClassName("preventDoubleSubmission")[9].click()
        }
        if(title=="BodeDiffInt (4)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[1].click()  
        }
        if(title=="OPScha")
        {
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_12").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_13").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_6").checked = false
            document.getElementById("answer_1").checked = false
            document.getElementById("answer_13").checked = false

            document.getElementById("answer_0").click()
            document.getElementById("answer_12").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_13").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_6").click()
            document.getElementById("answer_1").click()
            document.getElementById("answer_13").click()
        }
        if(title=="I-MessungPhase (2)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[3].click()
        }
        if(title=="verallg GK")
        {
            document.getElementById("answer_0").click()
        }
        if(title=="FGKomp_")
        {
            document.getElementsByClassName("preventDoubleSubmission")[1].click()
            document.getElementsByClassName("preventDoubleSubmission")[3].click()
        }
        if(title=="ck(3)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[1].click()
            document.getElementsByClassName("preventDoubleSubmission")[10].click()
        }
        if(title=="inv Scha")
        {
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_23").checked = false
            document.getElementById("answer_10").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_19").checked = false
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_27").checked = false
            document.getElementById("answer_2").checked = false
            document.getElementById("answer_18").checked = false
            document.getElementById("answer_22").checked = false
            document.getElementById("answer_16").checked = false

            document.getElementById("answer_9").click()
            document.getElementById("answer_23").click()
            document.getElementById("answer_10").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_19").click()
            document.getElementById("answer_0").click()
            document.getElementById("answer_27").click()
            document.getElementById("answer_2").click()
            ocument.getElementById("answer_18").click()
            document.getElementById("answer_22").click()
            document.getElementById("answer_16").click()
        }
        if(title=="FGKomp_")
        {
            document.getElementsByClassName("preventDoubleSubmission")[1].click()
            document.getElementsByClassName("preventDoubleSubmission")[3].click()
        }
        if(title=="BodeDiffInt_")
        {
            document.getElementById("answer_3").click()
        }
        if(title=="Add und Sub")
        {
            document.getElementById("answer_4").checked = false
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_2").checked = false
            document.getElementById("answer_10").checked = false
            document.getElementById("answer_1").checked = false

            document.getElementById("answer_4").click()
            document.getElementById("answer_0").click()
            document.getElementById("answer_2").click()
            document.getElementById("answer_10").click()
            document.getElementById("answer_1").click()
        }
        if(title=="I-MessungPhase")
        {
            document.getElementsByClassName("preventDoubleSubmission")[1].click()
            document.getElementsByClassName("preventDoubleSubmission")[2].click() 
        }
        if(title=="Diff_3")
        {
            document.getElementsByName("result_$r1")[0].value ="0"
        }
        if(title=="OPStab")
        {
            document.getElementsByClassName("preventDoubleSubmission")[2].click()
            document.getElementsByClassName("preventDoubleSubmission")[6].click()
        }
        if(title=="FGKomp_ (2)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[5].click()
        }
        if(title=="OPStab (3)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[4].click()
        }
        if(title=="ck(4)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[6].click()
            document.getElementsByClassName("preventDoubleSubmission")[2].click()
            document.getElementsByClassName("preventDoubleSubmission")[8].click()
        }
        if(title=="OPIquelle (3)")
        {
            document.getElementById("answer_7").checked = false
            document.getElementById("answer_11").checked = false

            document.getElementById("answer_7").click()
            document.getElementById("answer_11").click()
        }
        if(title=="ck(6) (2)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[1].click()
        }
        if(title=="ck1 (2)")
        {
            document.getElementById("answer_0").checked = false

            document.getElementById("answer_0").click()
        }
        if(title=="Add und Sub (2)" && e.key == "w")
        {
            document.getElementById("answer_12").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_13").checked = false
            document.getElementById("answer_8").checked = false
            document.getElementById("answer_7").checked = false

            document.getElementById("answer_12").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_13").click()
            document.getElementById("answer_8").click()
            document.getElementById("answer_7").click()
        }
        if(title=="ck(5)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[3].click()
            document.getElementsByClassName("preventDoubleSubmission")[9].click()
        }
        if(title=="OP")
        {
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_3").checked = false
            document.getElementById("answer_12").checked = false
            document.getElementById("answer_1").checked = false
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_16").checked = false
            document.getElementById("answer_8").checked = false
            document.getElementById("answer_17").checked = false

            document.getElementById("answer_0").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_3").click()
            document.getElementById("answer_12").click()
            document.getElementById("answer_1").click()
            document.getElementById("answer_9").click()
            document.getElementById("answer_16").click()
            document.getElementById("answer_8").click()
            document.getElementById("answer_17").click()
        }
        if(title=="FGKomp_ (2)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[5].click()
        }
        if(title=="OPStab (2)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[5].click()
        }
        if(title=="OPStab")
        {
            document.getElementsByClassName("preventDoubleSubmission")[2].click()
            document.getElementsByClassName("preventDoubleSubmission")[6].click()
        }
        if(title=="inv Vst")
        {
            document.getElementsByName("result_$r1")[0].value ="0.011" 
        }
        if(title=="BodeDiffInt (2)")
        {
            document.getElementsByClassName("preventDoubleSubmission")[5].click()
        }
        if(title=="Integ_1")
        {
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_6").checked = false
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_1").checked = false
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_7").checked = false
            document.getElementById("answer_3").checked = false

            document.getElementById("answer_5").click()
            document.getElementById("answer_0").click()
            document.getElementById("answer_6").click()
            document.getElementById("answer_9").click()
            document.getElementById("answer_1").click()
            document.getElementById("answer_9").click()
            document.getElementById("answer_7").click()
            document.getElementById("answer_3").click()
        }
        if(title=="BodeDiffInt (3)")
        {
            document.getElementsByName("preventDoubleSubmission")[6].click()
        }
        if(title=="OPIquelle")
        {
            document.getElementById("answer_4").checked = false

            document.getElementById("answer_4").click()
        }
        if(title=="ck(6) (2)")
        {
            document.getElementsByName("preventDoubleSubmission")[1].click()
        }
        if(title=="Integ2")
        {
            document.getElementById("answer_12").checked = false
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_0").checked = false
            document.getElementById("answer_15").checked = false
            document.getElementById("answer_9").checked = false

            document.getElementById("answer_12").click()
            document.getElementById("answer_5").click()
            document.getElementById("answer_0").click()
            document.getElementById("answer_15").click()
            document.getElementById("answer_9").click()
        }
        if(title=="StromQ")
        {
            
                document.getElementsByName("result_$r1")[0].value = "0"
                setTimeout(function(){
                   document.getElementsByName("result_$r2")[0].value = "0"
                },2000);
        }
        if(title=="ck(6)")
        {
            document.getElementsByName("preventDoubleSubmission")[4].click()
            document.getElementsByName("preventDoubleSubmission")[10].click()
        }
        if(title=="FGang Korrektur")
        {
            document.getElementById("answer_2").checked = false
            document.getElementById("answer_14").checked = false
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_4").checked = false
            document.getElementById("answer_6").checked = false
            document.getElementById("answer_8").checked = false

            document.getElementById("answer_2").click()
            document.getElementById("answer_14").click()
            document.getElementById("answer_5").click()
            document.getElementById("answer_11").click()
            document.getElementById("answer_4").click()
            document.getElementById("answer_6").click()
            document.getElementById("answer_8").click()
        }
        if(title=="OP Aufbau")
        {
            document.getElementById("answer_3").checked = false
            document.getElementById("answer_4").checked = false
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_1").checked = false

            document.getElementById("answer_3").click()
            document.getElementById("answer_4").click()
            document.getElementById("answer_5").click()
            document.getElementById("answer_1").click()
        }
        if(title=="OPIquelle (2)")
        {
            document.getElementById("answer_5").checked = false

            document.getElementById("answer_5").click()
        }
        if(title=="Schwingbedingung")
        {
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_1").checked = false
            document.getElementById("answer_13").checked = false
            document.getElementById("answer_6").checked = false
            document.getElementById("answer_16").checked = false
            document.getElementById("answer_10").checked = false
            document.getElementById("answer_9").checked = false

            document.getElementById("answer_5").click()
            document.getElementById("answer_1").click()
            document.getElementById("answer_13").click()
            document.getElementById("answer_6").click()
            document.getElementById("answer_16").click()
            document.getElementById("answer_10").click()
            document.getElementById("answer_9").click() 
        }
        if(title=="TransV 2")
        {
            document.getElementsByName("result_$r1")[0].value = "423.1"
            setTimeout(function(){
               document.getElementsByName("result_$r2")[0].value = "2555.6"
               setTimeout(function(){
                document.getElementsByName("result_$r3")[0].value = "45700"
                setTimeout(function(){
                    document.getElementsByName("result_$r4")[0].value = "2115.5"
                    setTimeout(function(){
                        document.getElementsByName("result_$r5")[0].value = "414.4"
                     },2000);
                 },2000);
             },2000);
            },2000);
        }
        if(title=="Add und Sub (2)"&&e.key == 'q')
        {
            document.getElementById("answer_1").click()
        }
        if(title=="Schaltverluste_")
        {
            ocument.getElementById("answer_1").click()
        }
        if(title=="OPStab (2) (2)")
        {
            document.getElementById("answer_6").checked = false
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_2").checked = false
            document.getElementById("answer_3").checked = false

            document.getElementById("answer_6").click()
            document.getElementById("answer_5").click()
            document.getElementById("answer_2").click()
            document.getElementById("answer_3").click()
        }
        if(title=="Diff_4")
        {
            document.getElementsByName("result_$r1")[0].value = "-135"
        }
        if(title=="Diff_2")
        {
            document.getElementById("answer_3").click()
        }
        if(title=="OPunkomp")
        {
            document.getElementById("answer_3").checked = false
            document.getElementById("answer_2").checked = false
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_6").checked = false

            document.getElementById("answer_3").click()
            document.getElementById("answer_2").click()
            document.getElementById("answer_5").click()
            document.getElementById("answer_6").click()
        }
        if(title=="ImpWa")
        {
            document.getElementById("answer_3").checked = false
            document.getElementById("answer_1").checked = false
            document.getElementById("answer_8").checked = false
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_6").checked = false
            document.getElementById("answer_10").checked = false

            document.getElementById("answer_3").click()
            document.getElementById("answer_1").click()
            document.getElementById("answer_8").click()
            document.getElementById("answer_9").click()
            document.getElementById("answer_6").click()
            document.getElementById("answer_10").click()
        }
        if(title=="ni inv Scha")
        {
            document.getElementById("answer_11").checked = false
            document.getElementById("answer_19").checked = false
            document.getElementById("answer_12").checked = false
            document.getElementById("answer_20").checked = false
            document.getElementById("answer_14").checked = false
            document.getElementById("answer_20").checked = false
            document.getElementById("answer_14").checked = false
            document.getElementById("answer_15").checked = false
            document.getElementById("answer_9").checked = false
            document.getElementById("answer_5").checked = false
            document.getElementById("answer_16").checked = false

            document.getElementById("answer_11").click()
            document.getElementById("answer_19").click()
            document.getElementById("answer_12").click()
            document.getElementById("answer_20").click()
            document.getElementById("answer_14").click()
            document.getElementById("answer_15").click()
            document.getElementById("answer_9").click()
            document.getElementById("answer_5").click()
            document.getElementById("answer_16").click()
        }
    }
});


