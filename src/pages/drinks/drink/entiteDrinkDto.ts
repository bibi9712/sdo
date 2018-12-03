import { EntiteCategorie } from "./entiteCategorie";
import { EntiteSubCategorie } from "./entiteSubCategorie";
import { EntitePrice } from "./entitePrice";

export class EntiteDrinkDto{
     name : string;
     image:string;
     icon: string;
     description:string;
     categorie: number;
     subCategorie:number;
     montant:number;
     quantite: number;
}