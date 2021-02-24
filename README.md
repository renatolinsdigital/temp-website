# Renato Lins Website

This is the temporary version of my Website. Below there are some project´s considerations:

## File extensions

 * React components should always have __.tsx__ extension, as it represents Typescript with JSX. Other Typescript files, should be named with just __.ts__
 * Every interface should have the extension __.model.ts__
 * Every styled component should include __styled__ on it´s name, and also have the __.ts__ extension
 * Every enum should have the extension __.enum.ts__
 * Every model applied to styled components only, shoud have the extension __.styled.model.ts__
 * In certain justified scenarios, styled components can have __.ts__ extension (without type check), but the idea is to have everything properly typed

## Imports/exports

* Every group of resource (components, models, styles, etc) should have an entry point, an __index__ file re-exporting the entire gorup
* Imports within the __shared__ fold should always be relative, as it can become a library in the future
* Imports ocurring outside the __shared__ folder should be absolute, as it is better for readability and organization

## Module resolution

For a matter of consistency and a more predictable behavior, this project follows some rules for importing/exporting modules. These rules are:

* 1 - Any Javascript or Sass file can be used as a module. Because of that, inside the file __next-env.d.ts__ we have the following declaration: 

```
declare module '*.js';
declare module '*.scss';
```

* 2 - Every Javascript(.js) imported must include __.js__ extension in file name, whether it contains just logic or is a styled component file. This will ensure we are using a Javascript module. Examples:

```
export { default as AppContainerStyled } from './AppContainerStyled/AppContainer.styled.js';
```

* 3 - Every __index__ file should have the __.ts__ extension. This will help on module importation, and also on identificating the type of file

## Importing React

At this time, this project is importing React everywhere it is being used, even considering that Next.js is injecting it.

## Components

A few practices for components creation are:

* Desconstruct props in arguments. Ex: ```MyComponent({prop1, prop2}: MyProps){}```
* Avoid business logic directly inside components(including domain specific components) as dummy components are way easier to test. Instead, try and move business logic to a custom hook

## Theming

Every single component with text or colors is using theme properties. It meanings that once the theme is injected within styled components, we can use theme properties like so:

```
const { fontFamilies, colors, variantColors, fontSizes, lineHeights } = theme;
```
That being said, we wil diferentiate between theme default colors (colors) and colors that might vary within the theme (variantColors), for example, when using dark mode. Theme properties are already setup, typed and injected with this idea in mind.

