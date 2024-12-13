import k from "../kaplayCtx";
import { makeSonic } from "../entities/sonic";

export default function mainMenu() {
    if(!k.getData("best-score")) k.setData("best-score", 0);
    k.onButtonPress("jump", () => k.go("game"));

    const bgPieceWidth = 1920;
    const bgPieces = [
        k.add([
            k.sprite("chemical-bg"),
            k.pos(0,0),
            k.scale(2),
            k.opacity(0.8)
        ]),
        k.add([
            k.sprite("chemical-bg"),
            k.pos(bgPieceWidth * 2,0),
            k.scale(2),
            k.opacity(0.8)
        ])
    ];

    const platformsWidth = 1280;

    const platForms = [
            k.add([
            k.sprite("platforms"),
            k.pos(0, 450),
            k.scale(4)
        ]),
        k.add([
            k.sprite("platforms"),
            k.pos(platformsWidth * 4, 450),
            k.scale(4)
        ])
    ];

    k.add([
        k.text("SONIC RING RUN", 
        { font: "mania",
          size: 96
        }),
        k.pos(k.center().x, 200),
        k.anchor("center"),
    ])

    k.add([
        k.text("Press Space/Click/UP/Touch to PLAY", 
        { font: "mania",
          size: 64
        }),
        k.pos(k.center().x, k.center().y - 200),
        k.anchor("center"),
    ])



    makeSonic(k.vec2(200, 745))

    k.onUpdate(() => {
        if(bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }

    bgPieces[0].move(-100, 0)
    bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);

    if(platForms[1].pos.x < 0) {
        platForms[0].moveTo(platForms[1].pos.x + platForms[1].width * 4, 450);
        platForms.push(platForms.shift());
    }

    platForms[0].move(-3000, 0);
    platForms[1].moveTo(platForms[0].pos.x + platForms[1].width * 4, 450)

    });
}