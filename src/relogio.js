// src/relogio.js
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";

dayjs.locale("pt-br");

// A hora de agora, de 0 a 23, para a regra do horário
export function horaAgora() {
  return dayjs().hour();
}

// "quinta-feira, 19/11/2026 às 09:53"
export function formatarData(data) {
  return dayjs(data).format("dddd, DD/MM/YYYY [às] HH:mm");
}