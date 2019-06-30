import * as React from 'react';

export default class MyUpload extends React.Component {
    componentDidMount() {
        this.refs.up.directory = true;
        this.refs.up.webkitdirectory = true;
    }

    render() {
        return (
            <div>
                <input type="file" ref="up" onChange={ (e) => console.log(e.target.value)}/>
            </div>
        )
    }
}