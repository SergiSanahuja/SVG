import * as lib from './lib.js';
let svg = lib.createElementNS("svg", { id: "svg", width: "50%", height: "50%", viewBox: "0 0 1000 1000" });
let g = lib.createElementNS("g", { id: "g" });
//lib.addText(g, "x1", "y1", x2, y2 , { id: "line1" });
lib.addLine(g, "500", "0", "500", "1000", { id: "line1", stroke: "black", "stroke-width": "1" });
lib.addLine(g, "0", "500", "1000", "500", { id: "line2", stroke: "black", "stroke-width": "1" });
svg.appendChild(g);
document.getElementById("Contenidor_funcions").appendChild(svg);
document.getElementById("dibuixar").addEventListener("click", dibuix);
function dibuix() {
    let f = document.getElementById("funcio").value;
    let xMin = document.getElementById("nmin").value;
    let xMax = document.getElementById("nmax").value;
    let nPunts = document.getElementById("punts").value;
    if (f == "" || xMin == "" || xMax == "" || nPunts == "") {
        return alert("Falten dades");
    }
    let color = lib.colorRGB();
    let posicio = [];
    for (let x = xMin; x < xMax; x += nPunts) {
        let fun2 = f.replaceAll("x", x);
        let y = Function(`return ${fun2}`)();
        posicio.push([x, y]);
    }
    for (let i = 0; i < posicio.length - 1; i++) {
        lib.addLine(g, posicio[i][0], posicio[i][1], posicio[i + 1][0], posicio[i + 1][1], { id: "line1", stroke: color, "stroke-width": "1" });
    }
    const div = lib.crearElement("div", { id: "f_contain" }, "");
    div.textContent = f;
    div.style.color = color;
    document.body.appendChild(div);
    svg.appendChild(g);
}
function eliminarLinea() {
    let line = document.getElementById("line1");
    line?.remove();
}
//# sourceMappingURL=svg.js.map
//# sourceMappingURL=svg.js.map