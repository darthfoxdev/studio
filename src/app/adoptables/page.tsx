"use client";

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase'; // Adjust the import path if necessary
import { PetCard } from "@/components/pet-card";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component for loading state

type Pet = {
  id: string;
  imageUrl: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  description: string;
};

export default function AdoptablesPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "adoptables"));
        const fetchedPets: Pet[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            imageUrl: data.photoUrl, // Map photoUrl from Firestore to imageUrl for PetCard
            name: data.name,
            type: data.type,
            breed: data.breed,
            age: data.age,
            description: data.description,
          };
        });
        setPets(fetchedPets);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching adoptable pets: ", error);
        setLoading(false);
        // Optionally show an error message to the user
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Amigos en Adopción</h1>
        <p className="mt-2 text-lg text-muted-foreground">Encuentra a tu compañero de vida. Cada uno de ellos espera un hogar lleno de amor.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          // Display loading skeletons while data is loading
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-[300px] w-full rounded-lg" />
          ))
        ) : pets.length > 0 ? (
          pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))
        ) : (
          <p>No hay mascotas disponibles para adopción en este momento.</p>
        )}
      </div>
    </div>
  );
}
