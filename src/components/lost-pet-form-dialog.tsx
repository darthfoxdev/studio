"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres.").max(50),
  lastSeen: z.string().min(5, "Por favor describe dónde y cuándo fue visto por última vez.").max(100),
  contact: z.string().min(5, "Por favor ingresa información de contacto.").max(50),
  imageUrl: z.string().url("Por favor ingresa una URL válida de la imagen."),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres.").max(200),
});

type LostPetFormDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function LostPetFormDialog({ isOpen, setIsOpen }: LostPetFormDialogProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastSeen: "",
      contact: "",
      imageUrl: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "¡Reporte Recibido!",
      description: `El reporte de ${values.name} ha sido enviado. ¡Esperamos que regrese a casa pronto!`,
      variant: "default"
    });
    form.reset();
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Reportar Mascota Extraviada</DialogTitle>
          <DialogDescription>
            Completa el formulario para ayudarnos a encontrar a tu mascota. Juntos podemos traerla a casa.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
             <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la mascota</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Toby" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastSeen"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lugar y fecha donde fue visto por última vez</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Parque Central, 15 de Mayo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Información de Contacto</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre y teléfono" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL de la Foto</FormLabel>
                    <FormControl>
                      <Input placeholder="https://placehold.co/400x400.png" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Señas particulares</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe cualquier característica distintiva, como color, tamaño, collar, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
              <Button type="submit">Enviar Reporte</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
