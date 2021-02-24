# Renato Lins Website

This is the temporary version of my Website. Below there are some project´s conventions:

## File extensions

* React components should always have __.tsx__ extension, as it represents Typescript with JSX. Other Typescript files, should be named with just __.ts__
* Every interface should have the extension __.model.ts__
* Every styled component should include __styled__ on it´s name, and also have the __.ts__ extension
* Every enum should have the extension __.enum.ts__
* Every model applied to styled components only, shoud have the extension __.styled.model.ts__
* In certain justified scenarios, styled components can have __.ts__ extension (without type check). For example, when starting a new styled component, we might not predict props at first. Anyways, a component is only considered ready when it is fully typed. It is considered important to have __type hints__ on editor, avoiding incorrect types or values

## Naming conventions

* Every React component should be named in upper camel case, as well as the folder containing it. Ex: ```MyComponent -> MyComponent.ts```
* Every Styled components component folder should be named in upper camel case, followed by the suffix __Styled__. The component itself, shoube be named in uppper camel case, having the extension mentioned above. Ex: ```MyComponentStyled -> MyComponent.styled.ts```
* Every folder that does not hold a self-contained component (that can be exported/imported) should be named in slug case. Ex: ```pages```, ```models```, ```containers```, etc.
* Every Model(Interfaces, enums, etc) should be named in upper camel case, having the extension mentioned above. Ex: ```MyComponent.model.ts```, ```MyValues.enum.ts```
  
## Imports/exports

* Every group of resource (components, models, styles, etc) should have an entry point, an __index__ file re-exporting the entire gorup
* Imports within the __shared__ folder should always be relative, as anything inside this fold has the potential to becoming a library in the future
* Imports ocurring outside the __shared__ folder should be absolute, as it is better for readability and organization

## Module resolution

* Any Javascript or Sass file can be used as a module. Because of that, inside the file __next-env.d.ts__ we have the following declaration: 

```
declare module '*.js';
declare module '*.scss';
```

* Every Javascript(.js) imported must include __.js__ extension in file name, whether it contains just logic or is a styled component file. This will ensure we are using a Javascript module. Examples:

```
export { default as AppContainerStyled } from './AppContainerStyled/AppContainer.styled.js';
```

* Every __index__ file should have the __.ts__ extension. This will help on module importation, and also on identificating the type of file

## Importing React

* At this time, this project is importing React everywhere it is being used, even considering that Next.js is injecting it.

## Components

* __Everything we see in screen must be a component, either from React or from Styled Components__. This will ensure a lot of benefits like theme or design systems adherence, testability, maintainability, shareability, composition over inheritance, clean coding, etc. No loose elements with a ```className``` should be placed in this project
* Components based on Styled components should use Javascript syntax over Sass syntax. This brings a cleaner syntax for components using ```props``` + conditional styling, and makes styling more similar to platforms outside the Browser (ex. React Native)
* Desconstruct props in arguments. Ex: ```MyComponent({prop1, prop2}: MyProps){}```
* Avoid business logic directly inside components(including domain specific components) as dummy components are way easier to test. Instead, try and move business logic to a custom hook
* As long as this project uses a Javascript syntax on styled components, we can extend styles very easily, by simply creating a Javascript object to be merged within other styled components. 
* If a set of props is known but not it´s values, we can create and extend a props interface joining it within our components with __&__. We can see this approach inside __TextStyled.styled.ts__ component, which makes use of a shared prop interface called ```PaddingBoxStyledProps```

## Theming

* Every single component with text or colors is using theme properties. That being said, we wil diferentiate between theme default colors (colors) and colors that might vary within the theme (variantColors), for example, when using dark mode. Theme properties are already setup, typed and injected with this idea in mind.

