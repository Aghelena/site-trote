function calculatePoints(){
        let kit = Number(document.getElementById("kit").value)
        let supplement = Number(document.getElementById("supplement").value)
        let rice = Number(document.getElementById("rice").value)
        let rice2 = Number(document.getElementById("rice2").value)
        let beans = Number(document.getElementById("beans").value)
        let beans2 = Number(document.getElementById("beans2").value)
        let pasta = Number(document.getElementById("pasta").value)
        let oil = Number(document.getElementById("oil").value)
        let total = (25*kit) + (10*supplement) + (1*rice) + (5*rice2) + (1*beans) + (2*beans2) + (1/2*pasta) + (1*oil)
        alert("O resultado de sua equipe é " + total)
    }
   
    