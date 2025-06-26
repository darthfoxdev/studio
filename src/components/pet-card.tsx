import Image from "next/image";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Pet, LostPet } from "@/lib/data";
import { Dog, Cat, MapPin, Phone } from "lucide-react";

type PetCardProps = {
  pet: Pet | LostPet;
  isLost?: boolean;
};

export function PetCard({ pet, isLost = false }: PetCardProps) {
  const lostPet = isLost ? (pet as LostPet) : null;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          <Image
            src={pet.imageUrl}
            alt={pet.name}
            fill
            className="object-cover"
            data-ai-hint={pet.type === 'Perro' ? 'dog portrait' : 'cat portrait'}
          />
          {isLost && (
             <Badge variant="destructive" className="absolute top-2 right-2 text-sm">¡AYÚDAME A VOLVER!</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 text-center">
        <h3 className="font-headline text-2xl font-bold text-primary">{pet.name}</h3>
        <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm my-2">
            {pet.type === 'Perro' ? <Dog className="h-4 w-4" /> : <Cat className="h-4 w-4" />}
            <span>{pet.type} &middot; {pet.breed} &middot; {pet.age}</span>
        </div>
        <p className="text-sm text-foreground/80">{pet.description}</p>
      </CardContent>
      {lostPet && (
        <CardFooter className="flex flex-col items-start gap-2 p-4 pt-0 text-sm bg-destructive/10">
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-destructive" /> 
                <span className="font-semibold">Visto por última vez:</span> {lostPet.lastSeen}
            </div>
            <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-destructive" /> 
                <span className="font-semibold">Contacto:</span> {lostPet.guardian.name} ({lostPet.guardian.contact})
            </div>
        </CardFooter>
      )}
    </Card>
  );
}
