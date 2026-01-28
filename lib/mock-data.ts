export interface Product {
    id: string;
    name: string;
    image: string;
    category: string;
    subcategory: string;
    price: number;
    sold: number;
    rating: number;
    stock: "available" | "out_of_stock";
}

export const mockProducts: Product[] = [
    {
        id: "P123456",
        name: "Samsung Galaxy S25",
        image: "/products/phone.jpg",
        category: "Electronics",
        subcategory: "Smart Phone",
        price: 129999,
        sold: 120,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P234567",
        name: "Organic Quinoa Salad",
        image: "/products/food.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 120,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P345678",
        name: "Artisan Cheese Platter",
        image: "/products/cheese.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 85,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P456789",
        name: "Vegan Chocolate Brownies",
        image: "/products/brownies.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 150,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P567890",
        name: "Handcrafted Granola Bars",
        image: "/products/granola.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 200,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P678901",
        name: "Savory Herb Infused Olive Oil",
        image: "/products/oil.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 95,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P789012",
        name: "Freshly Baked Sourdough Bread",
        image: "/products/bread.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 110,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P890123",
        name: "Exotic Fruit Jam",
        image: "/products/jam.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 130,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P901234",
        name: "Spicy Roasted Nut Mix",
        image: "/products/nuts.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 160,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P012345",
        name: "Homemade Pasta Sauce",
        image: "/products/sauce.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 175,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
    {
        id: "P135792",
        name: "Food Item",
        image: "/products/food-item.jpg",
        category: "Groceries",
        subcategory: "Snacks",
        price: 250,
        sold: 150,
        rating: 8.8,
        stock: "available",
    },
];

export interface Order {
    id: string;
    customerName: string;
    orderedDate: string;
    totalItems: number;
    totalAmount: number;
    deliveryDate: string;
    status: "Delivered" | "Pending";
}

export const mockOrders: Order[] = [
    {
        id: "Or-9845",
        customerName: "Courtney Henry",
        orderedDate: "2078/02/15",
        totalItems: 3,
        totalAmount: 2600,
        deliveryDate: "2081/5/15",
        status: "Delivered",
    },
    {
        id: "Or-9845",
        customerName: "Annette Black",
        orderedDate: "2078/11/12",
        totalItems: 4,
        totalAmount: 3750,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Annette Black",
        orderedDate: "2078/12/21",
        totalItems: 4,
        totalAmount: 3750,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Dianne Russell",
        orderedDate: "2078/09/14",
        totalItems: 1,
        totalAmount: 3600,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Cody Fisher",
        orderedDate: "2078/03/10",
        totalItems: 8,
        totalAmount: 2300,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Ralph Edwards",
        orderedDate: "2078/10/27",
        totalItems: 2,
        totalAmount: 4100,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Darrell Steward",
        orderedDate: "2078/05/30",
        totalItems: 9,
        totalAmount: 1750,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Savannah Nguyen",
        orderedDate: "2078/07/17",
        totalItems: 3,
        totalAmount: 3200,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Guy Hawkins",
        orderedDate: "2078/08/29",
        totalItems: 10,
        totalAmount: 1950,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
    {
        id: "Or-9845",
        customerName: "Ronald Richards",
        orderedDate: "2078/06/25",
        totalItems: 5,
        totalAmount: 2900,
        deliveryDate: "2081/5/15",
        status: "Pending",
    },
];
