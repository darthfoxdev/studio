import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PetCard } from "@/components/pet-card";
import { adoptablePets, lostPets, campaigns, ourWork } from "@/lib/data";
import { Megaphone, Heart, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4">
            Bienvenido a Patitas Felices
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-6">
            Tu centro de confianza para el bienestar animal. Conectamos corazones y reunimos familias.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/adoptables">Adoptar un amigo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/extraviados">Buscar a mi mascota</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="campaigns" className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">Campañas y Anuncios</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  <Megaphone className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{campaign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Adoptable Pets Section */}
      <section id="adopt" className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-headline font-bold">Amigos para Adoptar</h2>
            <Button asChild variant="link">
              <Link href="/adoptables">Ver todos <Heart className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {adoptablePets.slice(0, 4).map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </section>

      {/* Lost Pets Section */}
      <section id="lost" className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-headline font-bold">Ayúdales a Volver a Casa</h2>
             <Button asChild variant="link">
              <Link href="/extraviados">Ver todos <Search className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lostPets.slice(0, 4).map((pet) => (
              <PetCard key={pet.id} pet={pet} isLost={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">Nuestro Trabajo</h2>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-headline font-bold">{ourWork.title}</h3>
              <p className="text-muted-foreground">{ourWork.description}</p>
            </div>
            <div>
              <Image
                src={ourWork.imageUrl}
                alt="Nuestro Trabajo"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="animal shelter volunteers"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
