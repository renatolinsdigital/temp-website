# Renato Lins Website

This is the temporary version of my Website. Below there are some project´s considerations:

## File extensions

 * React components should always have __.tsx__ extension, as it represents Typescript with JSX. Other Typescript files, should be named with just __.ts__
 * Every interface should have the extension __.model.js__
 * Every styled component should include __styled__ on it´s name, and also have the __.js__ extension, as there is no intention to type styles at this moment. Ex: ```AppContainer.styled.js```
 * Every enum should have the extension __.enum.ts__

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

* 3 - Every __index__ file (entry point for re-exporting modules) should have the __.ts__ extension. This will help on module importation, and also on identificating the type of file

## Importing React

At this time, this project is importing React everywhere it is being used, even considering that Next.js is injecting it.
