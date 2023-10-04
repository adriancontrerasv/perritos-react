import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { PuppyCard } from '../components/PuppyCard'
import { useEffect, useState } from 'react';

export const ListaRazas = ({ lista }) => {
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        if (lista.length > 0) {
            setShowList(true);
        } else {
            setShowList(false);
        }
    }, [lista]);
    return (
        <Row className='justify-content-center mb-4 col-11' data-testid='lista-container'>
            {
                lista.map((element, index) => {
                    return (
                        <PuppyCard key={index} raza={element} />
                    );
                })
            }
            {
                !showList && (
                    <div className='col-12 row justify-content-center align-content-start text-justify mt-5'>
                        <Alert key={'warning'} variant={'warning'}>
                            <Alert.Heading>Lo sentimos, no hay perritos para mostrar.</Alert.Heading>
                            Te invitamos a revisar la página original <Alert.Link href="https://dog.ceo/dog-api/breeds-list" target='_blank'>página original</Alert.Link> para buscar tu perrito favorito.
                        </Alert>
                    </div>
                )
            }
        </Row>
    )
}
