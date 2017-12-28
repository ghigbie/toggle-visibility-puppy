let visibility = false;

const onToggleVisibility = () => {
    visibility = !visibility;
    renderReactElements();
};

const renderReactElements = () => {
    const appRoot = document.getElementById('react-container');
    const template = (
        <div>
            <h1 className="center">Visibity Toggle</h1>
            <button id="toggleDetails"
                    className="center btn btn-default"
                    onClick={onToggleVisibility}>
                    {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            <div id="secret"
                 visibility={visibility}
                 className="center">
                <h3>The secret you will see in his eyes below</h3>
                <img className="img-thumbnail"
                     src="./assets/bulldog.jpg"/>
            </div>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderReactElements();
