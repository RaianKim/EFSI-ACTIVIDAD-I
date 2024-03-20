    let mate = document.getElementById("NotaMatematica");
    let lengua = document.getElementById("NotaLengua");
    let efsi = document.getElementById("NotaEfsi");

mate.onkeyup = () =>
{
    materiaValor = parseInt(document.getElementById("NotaMatematica").value);
    if(materiaValor >= 1 && materiaValor <= 10)
    {
        mate.style.backgroundColor = "green"
    }
    else
    {
        mate.style.backgroundColor= "red"
    }
}

lengua.onkeyup = () =>
{
    materiaValor = parseInt(document.getElementById("NotaLengua").value);
    if(materiaValor >= 1 && materiaValor <= 10)
    {
        lengua.style.backgroundColor = "green"
    }
    else
    {
        lengua.style.backgroundColor= "red"
    }
}
efsi.onkeyup = () =>
{
    materiaValor = parseInt(document.getElementById("NotaEfsi").value);
    if(materiaValor >= 1 && materiaValor <= 10)
    {
        efsi.style.backgroundColor = "green"
    }
    else
    {
        efsi.style.backgroundColor= "red"
    }
}


function MejorMateria(){
    const mate = parseInt(document.getElementById("NotaMatematica").value);
    const lengua = parseInt(document.getElementById("NotaLengua").value);
    const efsi = parseInt(document.getElementById("NotaEfsi").value);
    let mayorNota = 0;
    let output = "La Materia con la mejor nota es/son: ";
    if(mate >= lengua && mate >= efsi) mayorNota = mate;
    else if(efsi >= lengua && efsi >= mate) mayorNota = efsi;
    else mayorNota = lengua;
    if(mayorNota == mate){
        output += "Matematica "; 
        imagenResultado.src = 'Mate.jpg';
    } 
    if(mayorNota == lengua){
        output +="Lengua ";
        imagenResultado.src = 'Lengua.png';
    } 
    if(mayorNota == efsi){
        output +="Efsi";
        imagenResultado.src = 'EFSI.png';
    } 
    document.getElementById("resultado2").innerHTML = `<h3>${output}</h3>`;
    document.getElementById("resultado2").style.color = "blue";
}
function calcularPromedio(){
    const mate = parseInt(document.getElementById("NotaMatematica").value);
    const lengua = parseInt(document.getElementById("NotaLengua").value);
    const efsi = parseInt(document.getElementById("NotaEfsi").value);
    let res = (mate+lengua+efsi)/3;
    document.getElementById("resultado").innerHTML = `<h3>Promedio : ${res}</h3>`
    PromedioColor(res);
}

function PromedioColor(numero)
{
    const colores = document.getElementById("resultado");
    if(numero >= 6)
    {
        colores.style.color= "green";
        imagenResultado.src = 'Aprobado.jpg';
    }
    else if(numero>=1 && numero <6)
    {
        colores.style.color= "red";
        imagenResultado.src = 'Desaprobado.png';
    }
    else{
        colores.style.color= "black";
        imagenResultado.src = 'NoCompletoDatos.jpg';
    }
}

