const valorX = document.getElementById("x")
const valorY = document.getElementById("y")
const botao = document.querySelector("button")

botao.addEventListener("click", function(){
    const x = Number(valorX.value)
    const y = Number(valorY.value)

    if( x === 0 && y === 0){
        alert("Origem")
    }
    else if( x > 0 && y > 0){
        alert("Q1")
    }
    else if( x < 0 && y > 0){
        alert("Q2")
    }
    else if( x < 0 && y < 0){
        alert("Q3")
    }
    else if( x > 0 && y < 0){
        alert("Q4")
    }
    else if( x === 0 && y !== 0){
        alert("Eixo Y")
    }
    else{
        alert("Eixo X")
    }
})