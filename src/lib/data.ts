export type Guardian = {
  name: string;
  contact: string;
};

export type Pet = {
  id: number;
  name: string;
  type: 'Perro' | 'Gato';
  breed: string;
  age: string;
  imageUrl: string;
  description: string;
};

export type LostPet = Pet & {
  lastSeen: string;
  guardian: Guardian;
};

export const adoptablePets: Pet[] = [
  {
    id: 1,
    name: 'Bruno',
    type: 'Perro',
    breed: 'Mestizo',
    age: '2 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Amigable y juguetón, le encanta correr y jugar a la pelota. Ideal para una familia activa.',
  },
  {
    id: 2,
    name: 'Misha',
    type: 'Gato',
    breed: 'Siamés',
    age: '1 año',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Una gata tranquila y cariñosa que disfruta de las siestas al sol y los mimos.',
  },
  {
    id: 3,
    name: 'Rocky',
    type: 'Perro',
    breed: 'Labrador',
    age: '3 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Un perro leal y obediente, entrenado en comandos básicos. Genial con los niños.',
  },
  {
    id: 4,
    name: 'Luna',
    type: 'Gato',
    breed: 'Común Europeo',
    age: '6 meses',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Curiosa y llena de energía, Luna está lista para explorar cada rincón de su nuevo hogar.',
  },
  {
    id: 5,
    name: 'Max',
    type: 'Perro',
    breed: 'Pastor Alemán',
    age: '4 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Inteligente y protector, Max busca un dueño con experiencia que pueda guiarlo.',
  },
  {
    id: 6,
    name: 'Cleo',
    type: 'Gato',
    breed: 'Angora',
    age: '2 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Elegante y majestuosa, Cleo es una gata que aprecia la tranquilidad y el afecto.',
  },
];

export const lostPets: LostPet[] = [
  {
    id: 101,
    name: 'Toby',
    type: 'Perro',
    breed: 'Beagle',
    age: '5 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Se perdió cerca del parque central. Llevaba un collar rojo. Es muy amigable.',
    lastSeen: 'Parque Central, 15 de Mayo',
    guardian: { name: 'Juan Pérez', contact: '555-1234' },
  },
  {
    id: 102,
    name: 'Simba',
    type: 'Gato',
    breed: 'Naranja atigrado',
    age: '2 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Es un poco tímido con los extraños. Tiene una mancha blanca en el pecho.',
    lastSeen: 'Colonia Roma, 18 de Mayo',
    guardian: { name: 'Ana García', contact: '555-5678' },
  },
   {
    id: 103,
    name: 'Rex',
    type: 'Perro',
    breed: 'Husky',
    age: '3 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Tiene un ojo azul y uno marrón. Responde a su nombre. Recompensa por su regreso.',
    lastSeen: 'Cerca del mercado, 20 de Mayo',
    guardian: { name: 'Carlos Lopez', contact: '555-8765' },
  },
  {
    id: 104,
    name: 'Nala',
    type: 'Gato',
    breed: 'Calicó',
    age: '4 años',
    imageUrl: 'https://placehold.co/400x400.png',
    description: 'Pequeña y escurridiza. Le gusta esconderse en jardines. No lleva collar.',
    lastSeen: 'Barrio Gótico, 19 de Mayo',
    guardian: { name: 'Sofia Hernandez', contact: '555-4321' },
  },
];

export const campaigns = [
  {
    id: 1,
    title: 'Campaña de Esterilización Gratuita',
    description: 'Del 1 al 15 de Junio, trae a tu perro o gato para esterilización sin costo. ¡Agenda tu cita!',
  },
  {
    id: 2,
    title: 'Jornada de Vacunación Antirrábica',
    description: 'Protege a tu mascota y a tu comunidad. Vacunación gratuita el próximo fin de semana en el centro cívico.',
  },
  {
    id: 3,
    title: 'Adopta, No Compres',
    description: 'Este mes, todos nuestros adoptables tienen un descuento especial en su kit de bienvenida. ¡Encuentra a tu nuevo mejor amigo!',
  },
];

export const ourWork = {
  title: 'Comprometidos con el Bienestar Animal',
  description: 'Nuestra unidad trabaja incansablemente para rescatar, rehabilitar y reubicar a cientos de animales cada año. A través de nuestras campañas, educamos a la comunidad sobre la tenencia responsable y promovemos un ambiente seguro y amoroso para todas las mascotas.',
  imageUrl: 'https://placehold.co/600x400.png',
};
