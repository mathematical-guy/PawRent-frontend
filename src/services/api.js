import { baseUrl, petList } from "./constants";
import axios from "axios";

export async function getPetListService() {
    return axios(`${baseUrl}${petList}`);
}