"use client";

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase'; // Adjust the import path if necessary
import { PetCard } from "@/components/pet-card";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component for loading state

type LostPet = {
  id: string;
  imageUrl: string;
  name: string;
  lastSeen: string;
  guardian: {
    name: string;
    contact: string;
  };
  description: string;
};

export default function LostPetsPage() {
  const [lostPets, setLostPets] = useState<LostPet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostPets = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "extraviados"));
        const fetchedLostPets: LostPet[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            imageUrl: data.photoUrl, // Map photoUrl from Firestore to imageUrl for PetCard
            name: data.name,
            lastSeen: data.lastSeen,
            guardian: {
              name: data.guardianName, // Map guardianName from Firestore
              contact: data.guardianContact, // Map guardianContact from Firestore
            },
            description: data.description,
          };
        });
        setLostPets(fetchedLostPets);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lost pets: ", error);
        setLoading(false);
        // Optionally show an error message to the user
      }
    };

    fetchLostPets();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Mascotas Extraviadas</h1>
        <p className="mt-2 text-lg text-muted-foreground">Ayúdanos a reunir a estas mascotas con sus familias. Tu ayuda es invaluable.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          // Display loading skeletons while data is loading
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-[300px] w-full rounded-lg" />
          ))
        ) : lostPets.length > 0 ? (
          lostPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} isLost={true} />
          ))
        ) : (
          <p>No hay reportes de mascotas extraviadas en este momento.</p>
        ))}
      </div>
    </div>
  );
}
