// ALL OF THE MAIN CODE GOES

import { BasicScreen } from "./entities/BasicScreen";

const basicScreen = new BasicScreen(
  new Transform({
    position: new Vector3(8,2,8),
    scale: new Vector3(5, 3, 1)
  }),'images/alpha_circle.jpg')

const basicScreen2 = new BasicScreen(new Transform({
  position: new Vector3(8,5,8),
  scale: new Vector3(5, 3, 1)
  }),'images/alpha_dots1.jpg')

const basicScreen3 = new BasicScreen(new Transform({
  position: new Vector3(8,8,8),
  scale: new Vector3(5, 3, 1)
  }),'images/alpha_scrape.jpg')