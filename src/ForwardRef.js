import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

export default FancyButton;


class Child extends React.Component {
  
  render() {
    return (
      <div ref={this.props.forwardedRef}>子组件DOM</div>
    )
  }
}

const wrapper = function(InnerComponent) {
  return React.forwardRef((props, ref) => {
    return (
      <InnerComponent forwardedRef={ref} {...props} />
    );
  });
}

const W = wrapper(Child);

class ParentComponent extends React.Compoent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          console.info(this.myRef.current);
        }}>按钮</button>
        <W ref={this.myRef} {...this.props} />
      </div>
    );
  }
}

export {ParentComponent};