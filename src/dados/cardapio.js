import path from "node:path";
import { lerCardapioCsv } from "./importarCardapio.js";

const CARDAPIO = await lerCardapioCsv(path.join(import.meta.dirname, "cardapio.csv"));

export default CARDAPIO;