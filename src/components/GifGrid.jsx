import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    // CUSTOM HOOKS!!
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                    ? (<h2>Cargando...</h2>)
                    : null

                // isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    images.map((imagen) => (
                        // <>
                        //     <li key={id}>{title}</li>
                        //     <img src={url}></img>
                        // </>
                        <GifItem key={imagen.id}
                            // title={imagen.title}
                            // url={imagen.url}
                            // se pasan todos los datosde imagen separados para poder desestructurarlos
                            {...imagen}
                        />
                    ))
                }
            </div>
        </>
    )
}
