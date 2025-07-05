import Link from "next/link";
import { PawPrint } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">
              Unidad de Control y Bienestar Animal
            </span>
          </div>
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>Unidad de Control y Bienestar Animal</p>
            <p>Contacto: (123) 456-7890 | info@controlanimal.org</p>
            <p>&copy; {new Date().getFullYear()} Unidad de Control y Bienestar Animal. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
