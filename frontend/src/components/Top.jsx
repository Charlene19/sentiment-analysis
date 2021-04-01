import React from 'react';
import ReactDOM, {render} from "react-dom";

var Iframe = React.createClass({
    render: function() {
        return(
            <div>
                <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Iframe src="https://trends24.in/" height="500" width="500"/>,
    document.getElementById('top')
);
