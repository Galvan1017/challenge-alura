const textArea=document.querySelector(".areaPrincipal");

const mnsj=document.querySelector(".mnsj");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const encript=encriptar(textArea.value);
    mnsj.value=encript;
    textArea.value="";
    mnsj.style.backgroundImage="none";


}
function btnDesencriptar(){
    const encript2=desencriptar(textArea.value);
    textArea.value=encript2;

}

function encriptar(textoEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes",],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado=textoEncriptado.toLowerCase()


    for(let i=0;i<matrizCodigo.length;i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            

        }

    }
    return textoEncriptado;

}

function desencriptar(textoDesencriptado){
    let matrizCodigo2=[["e","enter"],["i","imes",],["a","ai"],["o","ober"],["u","ufat"]];
    


    for(let i=0;i<matrizCodigo2.length;i++){
        if(textoDesencriptado.includes(matrizCodigo2[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo2[i][1],matrizCodigo2[i][0])
            

        }

    }
    return textoDesencriptado;
}

function copiar(){
    mnsj.select();
    mnsj.setSelectionRange(0,999);
    navigator.clipboard.writeText(mnsj.value);
    mnsj.value="";
    
}