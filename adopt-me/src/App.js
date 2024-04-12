const Pet = (props) => {
    return React.createElement("div", {}, [
        // An array of components to return
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h3", {}, props.breed),
        ]   
        // NOTE: If we have a single element, no need to include "[Square Brackets]"
    )
}

const App = () => {
    return React.createElement(
        "div",                  // Element type
        { id: "my-id"},         // Attributes of the element like id, class,
        [         
            React.createElement("h1", {}, "Adopt me..."),        
            React.createElement(Pet, {
                name: 'Luna',
                animal: 'Dog',
                breed: 'Havanese'
            }),
            React.createElement(Pet, {
                name: 'Pepper',
                animal: 'Bird',
                breed: 'Cockatiel'
            }),
            React.createElement(Pet, {
                name: 'Doink',
                animal: 'Cat',
                breed: 'Mixed'
            }),
        ]    
    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

