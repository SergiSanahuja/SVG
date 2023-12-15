
import * as lib from './lib.js';
let svg = lib.createElementNS("svg", { id: "svg", width: "100%", height: "100%", viewBox: "0 0 500 500" });
let g = lib.createElementNS("g", { id: "g" });

//lib.addText(g, "x1", "y1", x2, y2 , { id: "line1" });
lib.addLine(g, "150", "0", "150", "300", { id: "line1", stroke: "black", "stroke-width": "1" });
lib.addLine(g, "0", "150", "300", "150", { id: "line2", stroke: "black", "stroke-width": "1" });
svg.appendChild(g);
document.getElementById("Contenidor_funcions")!.appendChild(svg);



document.getElementById("dibuixar")!.addEventListener("click",dibuix);

/**
 * 
 * @returns g
 */

function dibuix(){
    //agafar la funcio y el maxim i minim
    let f = (<HTMLInputElement>document.getElementById("funcio")).value;
    let xMin : string|number = (<HTMLInputElement>document.getElementById("nmin")).value;
    let xMax : string|number = (<HTMLInputElement>document.getElementById("nmax")).value;
    let nPunts : string|number = (<HTMLInputElement>document.getElementById("punts")).value;

    
    xMin  = parseInt(xMin);
    xMax  = parseInt(xMax);
    nPunts  = parseInt(nPunts);
    //generar color aleatori per la linea
    let color = lib.colorRGB();
    
    //inicialitzar array de posicions
    let posicio = [];
    
    //calcular les posicions
    
    
    
    for (let x = xMin; x < xMax; x +=nPunts) {
        
        let fun2 = f.replaceAll("x", x.toString());
        let y = Function(`return ${fun2}`)();
        posicio.push([x,y]);       
        
    }

    let g = lib.createElementNS("g", { class: "g", transform: "scale(1,-1) translate(150,-150)" });

    for (let i = 0; i < posicio.length-1; i++) {
        lib.addLine(g,posicio[i][0],posicio[i][1],posicio[i+1][0],posicio[i+1][1],{id:"line1",stroke:color, "stroke-width":"1"});
    }

    const div = lib.crearElement("div",{id:"f_contain"},"")!;
    div.textContent = f
    div.style.color = color;

    document.body.appendChild(div);

    svg.appendChild(g);
}

function eliminarLinea(){
    let line = document.getElementById("line1");
    line?.remove();
}
//# sourceMappingURL=svg.js.map