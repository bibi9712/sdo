import { EntiteDrinkDto } from "../drinks/drink/entiteDrinkDto";

export class Order{
    public id : number ;
    public user : string;
    public group : number;
    public montant : number;
    public drinks : EntiteDrinkDto[];
}