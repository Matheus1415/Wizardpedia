export interface Student {
  id: string;
  name: string;
  species: string;
  gender: string;
  house: "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw" | string;
  wizard: boolean;
  alive: boolean;
  image: string;
}