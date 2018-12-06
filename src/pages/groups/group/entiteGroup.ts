import {EntiteUser} from '../../profil/EntiteUser';
import {} from '../../drinks/drink/drink'
import { EntiteDrink } from '../../drinks/drink/entiteDrink';
import { Order } from '../../panier/order';

export class entiteGroup{
    public id : number;
    public name :string;
    public admin : EntiteUser;
    public users: EntiteUser[];
    public montantGroup : number;
    public status : boolean;
    public code : string;
    public orders : Order[];
    public img : string;
}