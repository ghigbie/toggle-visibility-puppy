"use strict";

var visibility = false;

var onToggleVisibility = function onToggleVisibility() {
    visibility = !visibility;
    renderReactElements();
};

var renderReactElements = function renderReactElements() {
    var appRoot = document.getElementById('react-container');
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { className: "center" },
            "Visibity Toggle"
        ),
        React.createElement(
            "button",
            { id: "toggleDetails",
                className: "center btn btn-default",
                onClick: onToggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        React.createElement(
            "h3",
            { className: "center" },
            "The secret you will see in his eyes below:"
        ),
        visibility && React.createElement(
            "div",
            { id: "secret",
                className: "center" },
            React.createElement("img", { className: "img-thumbnail",
                src: "./assets/bulldog.jpg" })
        )
    );
    ReactDOM.render(template, appRoot);
};

renderReactElements();
