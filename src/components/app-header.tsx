"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PawPrint, PlusCircle, Home, Heart, Search, Menu, X } from "lucide-react";
import AdoptableFormDialog from "@/components/adoptable-form-dialog";
import LostPetFormDialog from "@/components/lost-pet-form-dialog";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function AppHeader() {
  const [isAdoptableFormOpen, setAdoptableFormOpen] = useState(false);
  const [isLostPetFormOpen, setLostPetFormOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/adoptables", label: "Adoptables", icon: Heart },
    { href: "/extraviados", label: "Extraviados", icon: Search },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">
              Patitas Felices
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex"
              onClick={() => setAdoptableFormOpen(true)}
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Registrar Adoptable
            </Button>
            <Button
              size="sm"
              className="hidden sm:flex"
              onClick={() => setLostPetFormOpen(true)}
            >
              Reportar Extraviado
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-4 p-4">
                     <Link href="/" className="mr-6 flex items-center gap-2 mb-4">
                        <PawPrint className="h-6 w-6 text-primary" />
                        <span className="font-headline text-xl font-bold">
                          Patitas Felices
                        </span>
                      </Link>
                    {navLinks.map(({ href, label, icon: Icon }) => (
                      <SheetClose asChild key={label}>
                        <Link
                          href={href}
                          className="flex items-center gap-2 rounded-md p-2 text-lg font-medium hover:bg-accent"
                        >
                           <Icon className="h-5 w-5" /> {label}
                        </Link>
                      </SheetClose>
                    ))}
                    <hr className="my-4" />
                     <Button
                        onClick={() => {
                          setAdoptableFormOpen(true);
                        }}
                      >
                       Registrar Adoptable
                      </Button>
                      <Button
                         onClick={() => {
                           setLostPetFormOpen(true);
                         }}
                      >
                       Reportar Extraviado
                      </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <AdoptableFormDialog
        isOpen={isAdoptableFormOpen}
        setIsOpen={setAdoptableFormOpen}
      />
      <LostPetFormDialog
        isOpen={isLostPetFormOpen}
        setIsOpen={setLostPetFormOpen}
      />
    </>
  );
}
