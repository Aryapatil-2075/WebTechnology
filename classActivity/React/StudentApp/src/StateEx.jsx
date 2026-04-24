// function StateEx() {
//     const fname = "Arya Patil";
//     const age = 21;
//     const course = "AIML";
//     return (<div>
//         <h1>First Name: {fname}</h1>
//         <h1>Age: {age}</h1>
//         <h1>Course: {course}</h1>
//     </div>
//     );
// }
// export default StateEx;

//props
function StateEx(props) {
    // const fname = "Arya Patil";
    // const age = 21;
    // const course = "AIML";
    return (<div>
        <h1>{props.fname}</h1>
        <h1>{props.age}</h1>
        <h1>{props.course}</h1>
    </div>
    );
}
export default StateEx;