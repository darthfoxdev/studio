import { PetCard } from "@/components/pet-card";
import { lostPets } from "@/lib/data";

export default function LostPetsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Mascotas Extraviadas</h1>
        <p className="mt-2 text-lg text-muted-foreground">Ayúdanos a reunir a estas mascotas con sus familias. Tu ayuda es invaluable.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {lostPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} isLost={true} />
        ))}
      </div>
    </div>
  );
}
