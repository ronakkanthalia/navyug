const initialState = {
    tree:[{
        nodeId:"0",
        childrens:[]
    }]
};
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "add":
            let arr = [...state.tree]
            const iterate = (arr) => {
                arr.forEach((v,i) => {
                    if (v.nodeId == action.nodeId) {
                        let new_child_id ="";
                        if(v.childrens.length > 0) {
                            let child_ids = [];
                            v.childrens.forEach(cv => child_ids.push(cv.childId));
                            child_ids.sort();
                            new_child_id = child_ids.length;
                            for(var i = 0; i < child_ids.length; i++) {
                                if(child_ids[i] != i) {
                                    new_child_id =i; break;
                                }
                            }
                        }
                        let postfix = new_child_id == "" ? 0 : new_child_id;
                        v.childrens.push({
                            nodeId:action.nodeId +"-"+postfix,
                            childId: postfix,
                            childrens:[]
                        })
                        return;
                    }
                    if(v.childrens.length) iterate(v.childrens)
                    return;
                })
            }
            iterate(arr);
            return {...state, tree: JSON.parse(JSON.stringify([...arr]))};
        case "delete":
            let arr1 = [...state.tree]
            const iterate1 = (arr) => {
                arr.forEach((v,i) => {
                    if (v.nodeId == action.nodeId) {
                        arr.splice(i,1);
                        return;
                    }
                    if(v.childrens.length) iterate1(v.childrens)
                    return;
                })
            }
            iterate1(arr1);
            return {...state, tree: JSON.parse(JSON.stringify([...arr1]))};
        default: return state;
    }
 }
 export default reducer;