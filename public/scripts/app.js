"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('react-container');

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleVisibility = _this.handleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: "handleVisibility",
        value: function handleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container text-center" },
                React.createElement(
                    "h1",
                    { className: "center" },
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { id: "toggleDetails",
                        className: "center btn btn-default",
                        onClick: this.handleVisibility },
                    this.state.visibility ? 'Hide Details' : 'Show Details'
                ),
                React.createElement(
                    "h3",
                    { className: "center" },
                    "The secret, you will see in his eye's below:"
                ),
                this.state.visibility && React.createElement(
                    "div",
                    { id: "secret",
                        className: "center" },
                    React.createElement("img", { className: "img-thumbnail",
                        alt: "puppy picture",
                        src: "./assets/bulldog.jpg" })
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

var renderApp = function renderApp() {
    ReactDOM.render(React.createElement(VisibilityToggle, null), appRoot);
};

renderApp();
