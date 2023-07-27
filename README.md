# sphera-ui-components

Sphera's UI components library.
Storybook: https://storybook.monday.beer/sphera-ui-components/

## Installation

Install the component library

```
$ yarn install @mondaydotcomorg/sphera-ui-components
```

## Styling

We enforce all our components in this package to implement style using [CSS modules](https://github.com/css-modules/css-modules).
This is because we aspire to make all our components' classes and animation names scoped locally by default. For example, we'd like to allow two micro-fronts to use two different versions of the same component from this package without any style overrides between them.
To use CSS modules in your component, please name your `.scss` file according to the following format:

```
YourStyleFile.module.scss
```

Then you can import your style file into your `.js` or `.jsx` file as follows:

```
import styles from "YourStyleFile.module.scss"
```

And finally you can use your styles object like so:

```
<Component className={styles.componentClass}/>
```

## Storybook

We are using storybook in order to develop the components independently from any consumer.
run this to build & run the storybook locally:

```
yarn storybook
```

the storybook will hosted on http://localhost:7006

## Developing locally with your consumer application

When developing locally we are using a npm functionality called yarn link, this allows us to
work locally on our package and use it in a different project without publishing.
This functionality basically overrides the npm mapping between package name to its repo, and points it to where the package is located locally.

### Troubleshooting local development

- If you are using NVM, make sure both packages are using the same version.
- Because we are using react hooks and having react as a peerDependency - if you want to develop locally and encounter issues with "invalid hook call" [See this github thread](https://github.com/facebook/react/issues/13991). The quick fix is in your webpack config file alias react to resolve the node_modules path

go to the project's directory and run:

```
nvm use
yarn unlink
yarn link
npm start
```

## Adding new components

In order to add new components we use plop.
Simply run:
`yarn plop`
in the root dir of the project and enter your component name - this will create all the needed files.
