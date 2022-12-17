var Occu_id = 0, Name_id = 1

const Person = (props) => {
  Occu_id += 2;
  Name_id += 2;
  return React.createElement('div', {}, [
    React.createElement('h1', {key: `${Name_id}`}, props.name),
    React.createElement('p', {key: `${Occu_id}`}, props.occupation)
  ]);
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {className: 'title', key: '1'}, "React is rendered"),
    React.createElement(Person, {name: 'Yihua', occupation: 'instrucyor', key: '2'}, null),
    React.createElement(Person, {name: 'Andrei', occupation: 'Lead instrucyor', key: '3'}, null),
    React.createElement(Person, {name: 'Emily', occupation: 'teacher', key: '4'}, null)
  ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App))