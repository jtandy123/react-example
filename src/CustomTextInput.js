import React, {useRef} from 'react';

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          ref={this.textInput}
        />
        <input 
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

function CustomTextInput2(props) {
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input 
        type="text"
        ref={textInput}
      />
      <input 
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
