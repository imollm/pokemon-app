export interface Pokemon {
    _id: string;
    name: string;
    type: Array<string>;
    HP: number;
    attack: number;
    defense: number;
    SPAttack: number;
    SPDefense: number;
    speed: number;
    image: string;
};