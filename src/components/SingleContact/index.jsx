const SingleContact = (props) =>{
    const data = props.data || {
        firstName: "John",
        lastName: "Smith",
        phoneNumber: "(+39) 3456667788",
    };
    return (
        <>
            <h3>{data.firstName}</h3>
            <h3>{data.lastName}</h3>
            <h4>{data.phoneNumber}</h4>

        </>
    )
}
export default SingleContact