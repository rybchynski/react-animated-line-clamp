# react-animated-line-clamp

React animated line clamp is a lightweight and zero-dependency package with React functional component for animating text truncation with line clamping.

## Description

`react-animated-line-clamp` provides a simple way to create animated line clamping effects for text content in React applications. It works by dynamically limiting the number of lines of text shown and animates the transition when the text is clamped or expanded. This package is designed to be lightweight, with no external dependencies, making it ideal for performance-conscious applications.

## Key Features

- **React Component**: Easy integration into any React app.
- **No Dependencies**: No external libraries required.
- **Lightweight**: Optimized for minimal impact on performance.
- **Functional Component**: Uses React hooks for simplicity and modern React patterns.
- **Animated**: Smooth transition when clamping or expanding content.

## Demo

[React Animated Line Clamp](https://react-animated-line-clamp-demo-ub1r.vercel.app)

## Installation

You can install the package with following command:

```bash
npm install react-animated-line-clamp
# or
yarn add react-animated-line-clamp
```

Note the following peer dependencies:

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)

## Usage

Here is a basic usage example:

```tsx
import { ReactLineClamp } from 'react-animated-line-clamp';
import styles from './MyFancyComponent.module.css';

const MyFancyComponent = () => {
  return (
    <div>
      <ReactLineClamp
        content={content}
        showMoreButtonContent={'Show More'}
        showLessButtonContent={'Show Less'}
        lineClamp={5}
        duration={600}
        easing="ease-in"
        hideExpandedButton={true}
        classes={{
          blockWrapper: styles.blockWrapperClass,
          contentWrapper: styles.contentWrapperClass,
          button: styles.buttonClass,
          content: styles.contentClass
        }}
      />
    </div>
  );
};

export default MyFancyComponent;
```

## Props

| Prop name              | Is required | Type                    | Default value | Description                                      |
| ---------------------- | ----------- | ----------------------- | ------------- | ------------------------------------------------ |
| content                | **\***      | {String \| JSX.Element} |               | Content you wish to be clamped                   |
| showMoreButtonContent  | **\***      | {String \| JSX.Element} |               | Content for `showMore` button                    |
| showLessButtonContent  |             | {String \| JSX.Element} | `Show Less`   | Content for `showLess` button                    |
| lineClamp              |             | {Number}                | `4`           | The count of visible lines                       |
| duration               |             | {Number}                | `500`         | The number of animation duration in ms           |
| easing                 |             | {String}                | `ease-in-out` | The name of easing function                      |
| hideExpandedButton     |             | {Boolean}               | `false`       | Flag to hide `showLess` button                   |
| classes.blockWrapper   |             | {String}                |               | CSS className for the block wrapper element      |
| classes.contentWrapper |             | {String}                |               | CSS className for content wrapper element        |
| classes.button         |             | {String}                |               | CSS className for `Show More / Show Less` button |
| classes.content        |             | {String}                |               | CSS className for the content element            |

## License

MIT License
