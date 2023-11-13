import React from 'react';

class Komponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ime: 'Suad' };
  }
  componentDidMount() {
    console.log('did mount');
  }

  render() {
    console.log('render');
    return (
      <div>
        {this.state.ime}
        <button
          onClick={() =>
            this.setState({ ime: 'drugo ime' })
          }
        >
          Ovo je dugme
        </button>
      </div>
    );
  }
}

export default Komponent;
