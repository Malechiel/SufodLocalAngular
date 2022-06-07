export class Personne {
  public constructor(
    private _nom?: string,
    private _prenom?: string,
    private _niveau?: number,
    private _classe?: string,
    private _defense?: number,
    private _pv?: number
  ) {}

  get nom(): string | undefined {
    return this._nom;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  get prenom(): string | undefined {
    return this._prenom;
  }

  set prenom(value: string | undefined) {
    this._prenom = value;
  }

  get niveau(): number | undefined {
    return this._niveau;
  }

  set niveau(value: number | undefined) {
    this._niveau = value;
  }

  get classe(): string | undefined {
    return this._classe;
  }

  set classe(value: string | undefined) {
    this._classe = value;
  }

  get defense(): number | undefined {
    return this._defense;
  }

  set defense(value: number | undefined) {
    this._defense = value;
  }

  get pv(): number | undefined {
    return this._pv;
  }

  set pv(value: number | undefined) {
    this._pv = value;
  }
}
