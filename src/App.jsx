const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {

    return (
        <div className={"container"}>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

function Header() {
    // const headerStyle = {color:"red", fontSize: "48px", textTransform: "uppercase"};
    const headerStyle = {};
    return (
        <header className={"header"}>
            <h1 style={headerStyle}>Pizza with Code</h1>
        </header>
    )
}

function Menu() {
    const pizza = pizzaData;
    const numPizza = pizza.length;
    return (
        <main className={"menu"}>
            <h2>Our Menu</h2>

            {numPizza > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from out stone oven, all
                        organic, all
                        delicious.
                    </p>
                    <ul className={"pizzas"}>
                        {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/>))}
                    </ul>
                </>
            ) : <p>We are currently working on our menu. Please check back later.</p>
            }


            {/*<Pizza name={"Pizza Spinaci"} ingredients={"Tomato, mozarella, spinach, and ricotta cheese"}*/}
            {/*       photoSrc={"../public/pizzas/spinaci.jpg"} price={9.99}/>*/}
            {/*<Pizza name={"Pizza Funghi"} ingredients={"Tomato, mushrooms"} price={11.99}*/}
            {/*       photoSrc={"../public/pizzas/margherita.jpg"}/>*/}
        </main>
    )
}

function Pizza({pizzaObj}) {

    // if (pizzaObj.soldOut) {
    //     return null;
    // }

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 21;
    const isShopOpen = hour >= openHour && hour <= closeHour;
    console.log(isShopOpen);
    return (
        <footer className={"footer"}>{isShopOpen ? <Order/>
            : <p>We are happy to welcome you between 9 A.M. to 9 P.M.</p>
        }</footer>
    )
}

function Order() {
    return (
        <div className={"order"}>
            <p>
                We're open until 8 P.M. Come visit us or order online.
            </p>
            <button className={"btn"}>Order</button>
        </div>
    )
}

export default App
