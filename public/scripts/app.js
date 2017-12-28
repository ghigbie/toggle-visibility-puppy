"use strict";

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
                className: "center",
                onClick: "onToggleDetails" },
            "Hide Details"
        ),
        React.createElement(
            "div",
            { id: "secret",
                className: "center" },
            React.createElement(
                "h3",
                null,
                "The secret you will see in his eyes below"
            ),
            React.createElement("img", { src: "https://c1.staticflickr.com/5/4058/4577136658_1b58bb02d9_z.jpg" })
        )
    );
    ReactDOM.render(template, appRoot);
};

renderReactElements();
