import React, {useState} from 'react';
import Clock from './Clock';
import FileInput from './FileInput';
import {SplitPane} from './Composition';
import FilterableProductTable from './SearchProductTable';
import {ThemeContext, themes} from './theme-context';
// import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';
import {ErrorBoundary, BuggyCounter} from './ErrorBoundary';
import CustomTextInput from './CustomTextInput';
import AutoFocusTextInput from './AutoFocusTextInput';
import Parent from './DomRefForwardingAlternatives';
import FancyButton, {ParentComponent} from './ForwardRef';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function Toolbar(props) {
  return (
    <ThemeTogglerButton />
  );
}

function App() {
  const [text, setText] = useState('');
  const [themeState, setThemeState] = useState({
    theme: themes.light,
    toggleTheme
  });
  function toggleTheme (theme) {
    console.log(themeState);
    console.log(themes.dark);
    console.log(themes.light);
    console.log(themeState.theme === themes.dark);
    const newTheme = {...themeState, theme: theme === themes.dark ? themes.light : themes.dark};
    console.log(newTheme);
    setThemeState(newTheme);
  };
  
  const sTag = <script>console.log('test');</script>;

  const ref = React.createRef();

  return (
    <div className="App">
      <input onChange={(e) => {
        console.log(e.target.value);
        setText(e.target.value);
      }} />
      <Welcome name='zhangsan&lt;' />
      <Clock />
      {text}
      {sTag}
      My JavaScript variable is {true}
      <FileInput />
      <SplitPane
        left="left"
        right="right"
      />
      <FilterableProductTable products={PRODUCTS} />
      <ThemeContext.Provider value={themeState}>
        <Toolbar />
      </ThemeContext.Provider>
      <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <CustomTextInput />
      <AutoFocusTextInput />
      <Parent />
      <br/>
      <br/>
      <FancyButton ref={ref}>Click me!</FancyButton>
      <ParentComponent />
    </div>
    </div>
  );
}

export default App;
