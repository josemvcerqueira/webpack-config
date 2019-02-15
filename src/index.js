import HelloWorld from "./components/hello_world/hello-world";
import addImage from "./image.js";
import Heading from "./components/heading/heading";

const helloWorld = new HelloWorld();
helloWorld.render();

const heading = new Heading();
heading.render();

addImage();

const ten = 10;
