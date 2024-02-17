import {EBD_DTO} from "src/services/dto/trefpp";

export class RodVagType {
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

  public get imageFileName(): string {
    if (this.code == "00") return "-1.png";
    if (this.code < "10") return '12.png';
    if (this.code < "20") return '13.png';
    if (this.code < "30") return '0.png';
    if (this.code < "40") return '3.png';
    if (this.code < "60") return '1.png';
    if (this.code < "70") return '2.png';
    if (this.code < "75") return '3.png';
    if (this.code == "75") return '3-6.png';
    if (this.code == "76") return '3-8.png';
    if (this.code == "77") return '3-6.png';
    if (this.code == "78") return '3-8.png';
    if (this.code < "82") return '3.png';
    if (this.code < "90") return '4.png';
    return "-1.png";
  }

  public get source(): string {
    return 'src/assets/img/cars/' + this.imageFileName;
  }
}


