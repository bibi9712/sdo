import {EntiteUser} from '../../profil/EntiteUser';
import {} from '../../drinks/drink/drink'

export class entiteGroup{
    public id : number;
    public name :string;
    public users: EntiteUser[];
    public priceTotal : number;
    public status : boolean;
}