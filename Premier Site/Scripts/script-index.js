// JavaScript source code

const sin60 = 0.866;
const cos60 = 0.5;



function triangleEqu(cX, cY, r) {
    let rayon = r;
    let centreX = cX;
    let centreY = cY;


    let pointH_X = centreX;
    let pointH_Y = centreY - rayon;
    let pointBD_X = Math.round(centreX - rayon * sin60);
    let pointBD_Y = Math.round(centreY + rayon * cos60);
    let pointBG_X = Math.round(centreX + rayon * sin60);
    let pointBG_Y = Math.round(centreY + rayon * cos60);

    console.log("Point Haut:       (" + pointH_X + ", " + pointH_Y + ")");
    console.log("Point Bas Droite: (" + pointBD_X + ", " + pointBD_Y + ")");
    console.log("Point Bas Gauche: (" + pointBG_X + ", " + pointBG_Y + ")");

}



