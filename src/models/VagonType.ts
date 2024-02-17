import {Vag_DTO} from "src/services/dto/trefpp";

export class VagonType {
  private myV: Vag_DTO;

  constructor(parV: Vag_DTO) {
    this.myV = parV;
  }

  public get nomvag(): string {
    return this.myV.nv;
  }

  public get esrStNazn(): string {
    return this.myV.sn;
  }

  public get nameStNazn(): string {
    return this.myV.nn;
  }

  public get rodVagCode(): string {
    return this.myV.rv;
  }

  //true - груженый
  public get prgrFlag(): boolean {
    return this.myV.pg;
  }

  //true - неисправный
  public get nsprFlag(): boolean {
    return this.myV.nspr;
  }

  public get model(): string {
    return this.myV.mdl;
  }

  public get gruzCode(): string {
    return this.myV.cg;
  }

  public get gruzRod(): string {
    return this.myV.rg;
  }

  public get gruzName(): string {
    return this.myV.ng;
  }

  public get dorStDisl(): string {
    return this.myV.dd;
  }

  public get esrStDisl(): string {
    return this.myV.sd;
  }

  public get nameStDisl(): string {
    return this.myV.nd;
  }

  public get esrStPogr(): string {
    return this.myV.sp;
  }

  public get nameStPogr(): string {
    return this.myV.np;
  }

  public get park(): string {
    return this.myV.prk;
  }

  public get put(): string {
    return this.myV.put;
  }

  public get operCode(): string {
    return this.myV.op;
  }

  public get operDate(): string {
    return this.myV.dop;
  }

  public get dostDate(): string {
    return this.myV.ddst;
  }

  public get vesGruz(): number {
    return this.myV.ves;
  }

  public get indexPoezd(): string {
    return this.myV.ipo;
  }

  public get nomPoezd(): string {
    return this.myV.npo;
  }

  public get obKuz(): number {
    return this.myV.ok;
  }

  //Остаточный пробег вагона.
  public get probegOst(): number {
    return this.myV.po;
  }

  //Пробег до станции назначения вагона.
  public get probegNazn(): number {
    return this.myV.pn;
  }
}


