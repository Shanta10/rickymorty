import { fetchRickAndMorty, rickAndMortyCharacter } from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css';

interface Car {
    id: number;
    description: string;
    brand: string;
    price: number;
    stock: number;
}

export const Character: React.FC = () => {
    const { data, error } = useSWR<Car[]>(rickAndMortyCharacter, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Character</h1>

            <div className={styles.container}>
                {data && data.map((character) => (
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
