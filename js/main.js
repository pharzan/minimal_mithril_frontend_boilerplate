import Test from "./components/test.js";
import m from "./lib/mithril/mithril.js";
import "../css/styles.css";

const mount_point = document.getElementById("main");

m.mount(mount_point, Test);

