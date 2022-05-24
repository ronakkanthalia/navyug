import React from "react";
import {connect} from "react-redux";

class ChildTree extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    handleClick = (id) => {
        this.props.addChild(id);
    }
    render() {
        return (
            <>                
                {
                    this.props.tree.length ? this.props.tree.map((item, index) => 
                        <span key={item.nodeId+item.childId+index}><button onClick={()=>this.handleClick(item.nodeId)}>Add item + {item.childId}</button>{item.nodeId !="0" ? <button onClick={()=>this.props.delete(item.nodeId)}>x</button> : null }<div style={{'marginLeft':'50px'}}><ConnectedTree  tree={item.childrens} /></div></span>
                    ) 
                    : null 
                }
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addChild:(id) => dispatch({type:"add", nodeId:id}),
        delete:(id) => dispatch({type:"delete", nodeId:id})
    }
}

const ConnectedTree = connect(null, mapDispatchToProps)(ChildTree);

export default ConnectedTree;