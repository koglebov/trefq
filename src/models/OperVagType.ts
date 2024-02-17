import {EBD_DTO} from "src/services/dto/trefpp";

export class OperVagType {
  private myEBD: EBD_DTO;

  constructor(parEBD: EBD_DTO) {
    this.myEBD = parEBD;
  }

  public get code(): string {
    return this.myEBD.id;
  }

  public get shortName(): string {
    return this.myEBD.cd;
  }

  public get fullName(): string {
    return this.myEBD.nm;
  }
}


