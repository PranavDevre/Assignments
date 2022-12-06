import { Component } from "react"

class Composition extends Component
{
    rendor()
    {    return (
                <div>
                    <h1>Composition</h1>
                    <Sidebar/>
                </div>
        )
    }
}

function Sidebar()
{
    return (
        <div>
            <h1>Side Bar1</h1>
            <h1>Side Bar2</h1>
            <h1>Side Bar3</h1>
            <h1>Side Bar4</h1>
        </div>
    )
}

export default Composition