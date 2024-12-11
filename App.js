// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz: "abc"},
//     "Hello World from React"
// );

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},[
            React.createElement("h1",{},"I am an h1 tag mate"),
            React.createElement("h2",{},"I am an h2 tag mate")
        ]) ,
        React.createElement(
            "div",
            {id: "child2"},[
            React.createElement("h1",{},"I am an h1 tag mate"),
            React.createElement("h2",{},"I am an h2 tag mate")
        ])
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);