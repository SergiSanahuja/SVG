export function crearElement(tipus, atributs, contingut) {
    var element = document.createElement(tipus);
    let text = document.createTextNode(contingut);
    for (var key in atributs) {
        // if (key == "class") {
        //     element.classList.add.apply(element.classList, atributs[key]);
        // } else {
        //     element[key] = atributs[key];
        // }
        element.setAttribute(key, atributs[key]);
    }
    if (text != null) {
        element.appendChild(text);
    }
    return element;
}
export function crearText(text) {
    return document.createTextNode(text);
}
export function up(element) {
    if (element.previousElementSibling)
        element.parentNode.insertBefore(element, element.previousElementSibling);
}
export function down(element) {
    if (element.nextElementSibling)
        element.parentNode.insertBefore(element.nextElementSibling, element);
}
export function first(element) {
    if (element.previousElementSibling)
        element.parentNode.insertBefore(element, element.parentNode.firstChild);
}
export function last(element) {
    if (element.nextElementSibling)
        element.parentNode.insertBefore(element, element.parentNode.lastChild);
    down(element);
}
export function modificarCella(fila, columna, text, id) {
    let taula = document.getElementById(id);
    if (taula != null) {
        let td = taula.getElementsByTagName("tr")[fila].getElementsByTagName("td")[columna];
        td.innerHTML = text;
    }
}
/**
 *
 * @param taula
 * @param direccio
 * Comprova quina direcció s'ha clicat i crida a la funció corresponent agafant la id del botó
 */
export function moureDireccionsTaula(taula, direccio) {
    switch (direccio.id) {
        case "up":
            moureAdalt(taula);
            break;
        case "down":
            moureAbaix(taula);
            break;
        case "left":
            moureEsquerra(taula);
            break;
        case "right":
            moureDreta(taula);
            break;
        default:
            alert("Error");
            break;
    }
}
/*
Funcions per moure les columnes de la taula cap a la dreta
*/
export function moureDreta(taula) {
    for (let i = 0; i < taula.getElementsByTagName("tr").length; i++) {
        let td = taula.getElementsByTagName("tr")[i].lastElementChild;
        taula.getElementsByTagName("tr")[i].insertBefore(td, taula.getElementsByTagName("tr")[i].firstElementChild);
    }
}
/*
Funcions per moure les columnes de la taula cap a l'esquerra
*/
export function moureEsquerra(taula) {
    for (let i = 0; i < taula.getElementsByTagName("tr").length; i++) {
        let td = taula.getElementsByTagName("tr")[i].getElementsByTagName("td")[0];
        taula.getElementsByTagName("tr")[i].appendChild(td);
    }
}
/**
    * Funcions per moure les files de la taula cap amunt
    * @param taula
*/
export function moureAdalt(taula) {
    let tr = taula.getElementsByTagName("tr")[0];
    taula.appendChild(tr);
}
/**
 * Funcions per moure les files de la taula cap avall
 * @param taula
 *
 */
export function moureAbaix(taula) {
    let tr = taula.rows[taula.rows.length - 1];
    taula.insertBefore(tr, taula.firstChild);
}
// Obtenir estils de determinats arxius
function getStyles(arxius) {
    let styles = "";
    // Agafar els estils de cada full
    for (const fullEstil of document.styleSheets) {
        const href = fullEstil.href;
        const arxiu = href.substring(href.lastIndexOf('/') + 1);
        if (arxius.includes(arxiu)) {
            const estils = fullEstil.cssRules;
            for (const estil of estils) {
                styles += estil.cssText + '\n';
            }
        }
    }
    return "<style>\n" + styles + "</style>\n";
}
/**
 * Funcions per Maximitzar la pantalla
 */
export function fullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen();
    }
}
const svgNS = "http://www.w3.org/2000/svg";
export function createElementNS(tipus, atributs) {
    var element = document.createElementNS(svgNS, tipus);
    for (var key in atributs) {
        element.setAttribute(key, atributs[key]);
    }
    return element;
}
export function addText(g, x, y, text) {
    let t = document.createElementNS("text", "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("font-family", "Verdana");
    t.setAttribute("font-size", "20");
    t.setAttribute("fill", "black");
    t.setAttribute("transform", "scale(1,-1)");
    t.textContent = text;
    g.appendChild(t);
}
export function addLine(g, x1, y1, x2, y2, atributs) {
    let l = createElementNS("line", { id: "line1" });
    l.setAttribute("x1", x1);
    l.setAttribute("y1", y1);
    l.setAttribute("x2", x2);
    l.setAttribute("y2", y2);
    for (var key in atributs) {
        l.setAttribute(key, atributs[key]);
    }
    g.appendChild(l);
}
export function colorRGB() {
    var coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
    return "rgb" + coolor;
}
function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
}
//# sourceMappingURL=lib.js.map