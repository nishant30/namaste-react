/**
 * 
 * <div id="parent">
 *   <div id = "child">
 *    <h1> I am H1 Tag</h1>
 *    <h2> I am h2 tag</h2>
 *   </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
    )); 



console.log(parent); // object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);