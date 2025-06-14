
const List = ()=>{
    const fruits = ['Apple','Banana','Mango','Guava'];

    const items = fruits.map(fruit => 
        <li>{fruit}</li>
    );

    return(
        <ul>
            {items}
        </ul>
    )
};

export default List;