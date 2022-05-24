import React from "react";
import {connect} from "react-redux";
import ChildTree from "./ChildTree";

class Tree extends React.Component {
    render() {
        return <ChildTree tree={this.props.tree}/>
    }
}

const mapStateToProps = (state) => {
    return {
        tree:state.tree
    }
}
export default connect(mapStateToProps)(Tree);