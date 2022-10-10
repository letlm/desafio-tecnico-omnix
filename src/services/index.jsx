import axios from "axios";

export const viaCEP = axios.create({
  baseURL: "viacep.com.br/ws/",
});
