import Card from "./Card";


const Product = () => {
    const products = [
        {
            id: 1,
            name: 'Make up brush set',
            price: 310,
            image: 'https://images.meesho.com/images/products/443002233/zxx3v_1200.jpg',
        },
        {
            id: 2,
            name: 'Eye shadow palette',
            price: 250,
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST41ZO1Tqmv_gZ4b3tWdwMdjxcpGrKWsQi4vgl7yHr588fDs_12kMLE-LbjWJyp1s4hwZVRIYSPNjOe4jHbVHVJcZ9vUZMQvZ2-hARXf_X',
        },
        {
            id: 3,
            name: 'Matte lipstick',
            price: 239,
            image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdSVPBIyTEtLwk-w79oG6IoXFzeuk6PUD1xi-bQOMXWUfk8w7l2n5IKxETGCYy_8tz40BR43QL6_Uu5h2wr96DAATuvL8uYng8n2NivEgeHfJ4pa6T2mK2QA',
        },
        {
            id: 4,
            name: 'Eye liner',
            price: 158,
            image: 'https://m.media-amazon.com/images/I/41JaRhOS3CL.jpg',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-blue-600 p-6">
            <h1 className="text-5xl font-bold text-center text-white mb-10">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>

    )
}

export default Product

