import { PetCard } from "@/components/pet-card";
import { adoptablePets } from "@/lib/data";

export default function AdoptablesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Amigos en Adopción</h1>
        <p className="mt-2 text-lg text-muted-foreground">Encuentra a tu compañero de vida. Cada uno de ellos espera un hogar lleno de amor.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {adoptablePets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
