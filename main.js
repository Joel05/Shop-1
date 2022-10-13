var title = document.getElementsByClassName("ilc_page_title_PageTitle")[0].outerText 
var trig = false

window.addEventListener("keydown",(e) =>{
    if (e.key == 'a'){

        alert("obacht chef, stüti mach d auga zua")

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
            console.warn(title)
            
                console.warn("type")
                document.getElementsByName("result_$r1")[0].value = "0"
                setTimeout(function(){
                   document.getElementsByName("result_$r2")[0].value = "40"
                },2000);
           
             
             
         }
    }
    if (e.key == 's'){
        alert("off")
    }
});


