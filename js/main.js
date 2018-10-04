import App from "./components/App.js";
import m from "./lib/mithril/mithril.js";
import "../css/styles.css";
import "../css/skeleton/normalize.css";
import "../css/skeleton/skeleton.css";


const mount_point = document.getElementById("main");

m.mount(mount_point, App);

