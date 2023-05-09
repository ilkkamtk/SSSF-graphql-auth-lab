interface ServerToClientEvents {
  newAnimal: (message: string) => void;
  newSpecies: (message: string) => void;
}

interface ClientToServerEvents {
  update: (animalOrSpecies: string) => void;
}

interface InterServerEvents {
  ping: () => void;
}

export {ServerToClientEvents, ClientToServerEvents, InterServerEvents};
