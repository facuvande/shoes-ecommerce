const products = [
    {
        id: '1',
        nombre: 'Nike Printers',
        stock: 5,
        img: '/images/product-1.png',
        price: 15999.99,
        precio: 10000,
        descripcion: 'Zapatillas ideales para uso del dia a dia.',
        category: 'nuevo',
    },
    {
        id: '2',
        nombre: 'Nike Solved',
        stock: 3,
        img: '/images/product-2.png',
        price: 20000.99,
        precio: 18000,
        descripcion: 'Zapatillas ideales para deporte.',
        category: 'usado',
    },
    {
        id: '3',
        nombre: 'Nike White',
        stock: 10,
        img: '/images/product-3.png',
        price: 12589.99,
        precio: 10000,
        descripcion: 'Zapatillas ideales para deportistas profesionales.',
        category: 'usado',
    },
    {
        id: '4',
        nombre: 'Nike Spacials',
        stock: 3,
        img: '/images/product-4.png',
        price: 58523.99,
        precio: 40000,
        descripcion: 'Zapatillas ideales para deportistas profesionales que quieren ir a la luna.',
        category: 'usado',
    },
    {
        id: '5',
        nombre: 'Nike White and Red',
        stock: 6,
        img: '/images/product-5.png',
        price: 150000.99,
        precio: 120000,
        descripcion: 'Zapatillas ideales para runners.',
        category: 'nuevo',
    },
    {
        id: '6',
        nombre: 'Nike Blue',
        stock: 8,
        img: '/images/product-6.png',
        price: 5999.99,
        precio: 3500,
        descripcion: 'Zapatillas ideales para deportistas destacados.',
        category: 'nuevo',
    }

]

export const getProducts = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(products.filter(prod=>prod.category===categoryId))
        }, 500)
    })
}