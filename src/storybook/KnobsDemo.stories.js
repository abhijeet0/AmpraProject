import React from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object,
} from "@storybook/addon-knobs";
import { Button } from "grommet";
export default {
  title: "Storybook Knobs",
  decorators: [withKnobs],
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};

export const DropDownKnob = () => {
  const options = {
    Red: "red",
    Blue: "blue",
    Yellow: "yellow",
    Rainbow: ["red", "orange", "etc"],
    None: null,
  };
  return <button>{select(`Button Name`, options, `red`, `Button-Id1`)}</button>;
};

export const StyleKnob = () => {
  const defaultValue = {
    backgroundColor: "red",
  };
  const value = object(`style`, defaultValue, `styleId-1`);
  return <button style={value}> Click me</button>;
};

export const GrommetButton = () => {
  return <Button color = {text('color', 'green')} label = "Welcome to Knobs" primary />
}