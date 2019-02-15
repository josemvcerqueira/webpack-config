import HelloWorld from "./components/hello_world/hello-world";
import Heading from "./components/heading/heading";
import React from "react";

const heading = new Heading();
heading.render("hello world");

const helloWorld = new HelloWorld();
helloWorld.render();

const ten = 10;
