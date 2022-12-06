function PropsExample()
{
    function getData()
    {
        alert("Hello Pranav!!!!!!")
    }
    return (
        <div>
            <h1>PropsExample</h1>
            <PropsExample2 data={getData}/>
        </div>
    )
}

export default PropsExample