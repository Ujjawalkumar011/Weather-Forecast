function handleFormsubmit(event){
    console.log("form was submitted");
}
export default function Form(){
    return(
        <form>
            < input  placeholder="enter something"/>
            <button onClick={handleFormsubmit}></button>
        </form>
    );
}