import { Game as Model } from "./model/game.js"
import { Game as Controller  } from "./controller/game.js"
import { Console } from "./view/console.js"


const gameModel = new Model()

const view = new Console(gameModel)

const gameController = new Controller(gameModel, view)

gameController.run()
