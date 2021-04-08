# Renato Lins Website

This is the temporary version of my Website. Below there are some project´s conventions:

## Project Structure

* All models should be in it´s own separate file, however, models for components created with Styled Components can be defined into the component itself

## File extensions

* React components should always have __.tsx__ extension, as it represents Typescript with JSX. Other Typescript files, should be named with just __.ts__
* Every model/interface should have the extension __.model.ts__
* Every styled component should include __styled__ on it´s name, and also have the __.ts__ extension
* Every enum should have the extension __.enum.ts__
* In certain justified scenarios, styled components can have __.ts__ extension (without type check). For example, when starting a new styled component, we might not predict props at first. Anyways, a component is only considered ready when it is fully typed. It is considered important to have __type hints__ on editor, avoiding incorrect types or values

## Naming conventions

* Every React component should be named in upper camel case, as well as the folder containing it. Ex: ```MyComponent -> MyComponent.ts```
* Every Styled components component folder should be named in upper camel case, followed by the suffix __Styled__. The component itself, should be named in upper camel case, having the extension mentioned above. Ex: ```MyComponentStyled -> MyComponent.styled.ts```
* Every folder that does not hold a self-contained component (that can be exported/imported) should be named in slug case. Ex: ```pages```, ```models```, ```containers```, etc.
* Every Model(Interfaces, enums, etc) should be named in upper camel case, having the extension mentioned above. Ex: ```MyComponent.model.ts```, ```MyValues.enum.ts```
  
## Imports/exports

* Every group of resource (components, models, styles, etc) should have an entry point, an __index__ file re-exporting the entire group
* Imports within the __shared__ folder should always be relative, as anything inside this fold has the potential to becoming a library in the future
* Imports occurring outside the __shared__ folder should be absolute, as it is better for readability and organization

## Module resolution

* Any Javascript or Sass file can be used as a module. Because of that, inside the file __next-env.d.ts__ we have the following declaration: 

```
declare module '*.js';
declare module '*.scss';
```

* Every Javascript(.js) imported must include __.js__ extension in file name, whether it contains just logic or is a styled component file. This will ensure we are using a Javascript module.

* Every __index__ file should have the __.ts__ extension. This will help on module importation, and also on identifying the type of file

## Importing React

* At this time, this project is importing React everywhere it is being used, even considering that Next.js is injecting it.

## Components

* __Everything we see in screen must be a component, either from React or from Styled Components__. This will ensure a lot of benefits like theme or design systems adherence, testability, maintainability, shareability, composition over inheritance, clean coding, etc. No loose elements with a ```className``` should be placed in this project
* Components based on Styled components should use Javascript syntax over Sass syntax. This brings a cleaner syntax for components using ```props``` + conditional styling, will allow more patterns and notations, as well as making styling similar to platforms outside the Browser (ex. React Native)
* Deconstruct props in arguments. Ex: ```MyComponent({prop1, prop2}: MyProps){}```
* Avoid business logic directly inside components(including domain specific components) as dummy components are way easier to test. Instead, try and move business logic to a custom React Hook
* As long as this project uses a Javascript syntax on styled components, we can extend styles very easily, by simply creating an object to be merged within other styled components. 
* It will be considered a best practice to extend interfaces with __&__, and models can also be part of the __shared__ folder. We can see this approach inside __TextStyled.styled.ts__ for example, which makes use of a shared prop interface called ```PaddingBoxStyledProps```

## General React´s best practices

* As per new JSX Transform(React 17+), it is not necessary anymore to import React while using JSX

## Dealing with Typescript

* Ignoring a Typescript rule(with __// @ts-ignore__) can __ONLY__ be made for Styled components that are also a compound component. This is necessary because these types of components demands a mandatory property that is only assigned after component´s definitions. 

## Theming

* Every single component with text or colors is using theme properties. That being said, we will differentiate between theme default colors (colors) and colors that might vary within the theme (variantColors), for example, when using dark mode. Theme properties are already setup, typed and injected with this idea in mind.

## Linting [TBD - Not fully configured yet]

This project is configured with ESLint in __.eslintrc.json__ file. AirBnB style guides for Typescript(__eslint-config-airbnb-typescript__) is applied as a plugin. Be sure to also have ESLint plugin installed on your code editor. To run linter and have output results, use this command: __npx eslint . --ext .js,.jsx,.ts,.tsx__ [To be configured]

