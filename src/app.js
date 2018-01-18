class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleVisibility(){
      this.setState((prevState) => {
          return {
              visibility: !prevState.visibility
          };
      });
    }
    
    render(){
        return(
            <div className="container text-center">
                <h1 className="center">Visibility Toggle</h1>
                <button id="toggleDetails"
                        className="center btn btn-default"
                        onClick={this.handleVisibility}>
                        {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                <h3 className="center">The secret, you will see in his eye's below:</h3>
                {
                    this.state.visibility && (
                        <div id="secret"
                             className="center">
                             <img className="img-thumbnail"
                                  alt="puppy picture"
                                  src="./assets/bulldog.jpg" />
                        </div>
                    )
                }
            </div>
        );
    }
}

const appRoot = document.getElementById('react-container');
ReactDOM.render(<VisibilityToggle />, appRoot);
