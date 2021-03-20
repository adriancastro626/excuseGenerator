/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generarExcusa();
  });
  console.log("Hello Rigo from the console! ");
};

let generarExcusa = () => {
  let pronoun = ["El", "Un", "Este", "Ese", "Mi"];
  let subject = ["perro", "gato", "mono", "elefante"];
  let action = ["rompio mi", "se comio mi", "se escapo de la", "se perdio mi"];
  let thing = ["tarea", "codigo", "papel", "comida"];
  let where = ["en la casa", "en el mall", "en el zoo", "en el bar"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let thingIndex = Math.floor(Math.random() * thing.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    thing[thingIndex] +
    " " +
    where[whereIndex]
  );
};
