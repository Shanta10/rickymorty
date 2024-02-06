import {fetchRickAndMorty, rickAndMortyLocalizations} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface Car {
    id: number;
    description: string;
    brand: string;
    price: number;
    stock: number;
}

export const Localizations: React.FC = () => {
    const { data, error } = useSWR<Car[]>(rickAndMortyLocalizations, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>
                {data && data.map((character: any) => (
                    <AntCard
                        key={character.id}
                        description={character.description}
                        brand={character.brand}
                        price={character.price}
                        stock={character.stock}
                    />
                ))}
            </div>


        </>
    );
};

