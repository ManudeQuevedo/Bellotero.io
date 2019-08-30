import store from "../redux/store/store";
import { getData } from "./actions/actions";

window.store = store;
window.getData = getData;