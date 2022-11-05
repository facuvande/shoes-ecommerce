const Cards = [
    {
        id: '1',
        img: 'https://i0.wp.com/noticiasmercedinas.com/site/wp-content/uploads/2021/06/delivery.jpg?resize=640%2C427&ssl=1',
        title: 'Entrega inmediata',
        subtitle: 'Realizamos una entrega inmediata en menos de 24horas'
    },
    {
        id: '2',
        img: 'https://andro4all.com/hero/2021/11/Las-8-mejores-webs-para-comprar-zapatos-y-zapatillas-baratas-online.jpg?width=1200&aspect_ratio=16:9',
        title: 'Variedad de productos',
        subtitle: 'Contamos con amplia variedad de Zapatillas a un precio accesible!'
    },
    {
        id: '3',
        img: 'https://www.plasticaucho.com.pe/blog/wp-content/uploads/2021/02/C%C3%B3mo-iniciar-un-negocio-enfocado-en-la-venta-de-zapatillas-en-Lima.jpg',
        title: 'Calidad Original',
        subtitle: 'Productos totalmente Originales importados de la fabrica!'
    }
]


export const products = () =>{
    return new Promise ((resolve) =>{
        resolve(Cards)
    })
}