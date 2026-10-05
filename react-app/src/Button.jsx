function printHello(event){
    console.log("hello");
    console.log(event)
}
function printByee(){
    console.log("byee!")
}
function doubleclick(){
    console.log("u dobule click");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printByee}>hello this is jnu</p>
            <button onDoubleClick={doubleclick}>double click</button>
        </div>
    )
}