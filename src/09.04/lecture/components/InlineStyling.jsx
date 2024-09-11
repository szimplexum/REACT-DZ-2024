// Inline styling in React

const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
  padding: '20px',
  textAlign: 'center',
};

export default function InlineStyling() {
  return (
    <div style={divStyle}>
      <h1>Inline Styling in React</h1>
      <p>This text is styled using inline styling</p>
    </div>
  );
}
