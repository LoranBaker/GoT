export class Families {
    public constructor(init?: Partial<Families>) {
        Object.assign(this, init);
    }
    id?: number;
    naziv = "";
    predstavnik = "";
    grb = "";
}