import Test from "./components/test.js";
import m from "./lib/mithril/mithril.js";

const mount_point = document.getElementById("mount");

m.mount(mount_point, Test);

