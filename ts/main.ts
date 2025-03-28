namespace Escola{
    

    const calc = document.getElementById("calc") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;
    const campoCPF = document.getElementById("campoCPF") as  HTMLInputElement;
    const campoEndereço = document.getElementById("campoEndereço") as HTMLInputElement;
    const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;
    const campoMatricula = document.getElementById("campoMatricula") as HTMLInputElement;
    const cursoEscola =  document.getElementById("campoEscola") as HTMLInputElement;
    const campoNota1 = document.getElementById("campoNota1") as HTMLInputElement;
    const campoNota2 = document.getElementById("campoNota2") as HTMLInputElement;
    const campoNota3 = document.getElementById("campoNota3") as HTMLInputElement;
    const campoNota4 = document.getElementById("campoNota4") as HTMLInputElement;
    const campomedia = document.getElementById("campomedia") as HTMLInputElement;

    let p: Pessoa;
    
    calc.addEventListener("Aluno", ()=>{
   
    