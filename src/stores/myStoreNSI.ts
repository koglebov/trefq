import {defineStore} from 'pinia';
import {useNSI_EBD} from "src/services/api/getNSI_EBD";
import {RodVagType} from "src/models/RodVagType";
import {DorType} from "src/models/DorType";
import {OperVagType} from "src/models/OperVagType";

export const useStoreNSI = defineStore('nsi', {
  state: () => ({
    rodVagList: [] as RodVagType[],
    dorList: [] as DorType[],
    operVagList: [] as OperVagType[],
  }),

  // getters: {
  //   doubleCount (state) {
  //     return state.counter * 2;
  //   }
  // },

  actions: {
    async loadRodVag() {
      if (this.rodVagList && this.rodVagList.length > 0) return;
      const ebdList = await useNSI_EBD().getNSI_EBD('rodvag');
      if (ebdList) ebdList.forEach((ebd) => {
          this.rodVagList.push(new RodVagType(ebd))
        }
      );
    },
    async loadDor() {
      if (this.dorList && this.dorList.length > 0) return;
      const ebdList = await useNSI_EBD().getNSI_EBD('dor');
      if (ebdList) ebdList.forEach((ebd) => {
          this.dorList.push(new DorType(ebd))
        }
      );
    },
    async loadOperVag() {
      if (this.operVagList && this.operVagList.length > 0) return;
      const ebdList = await useNSI_EBD().getNSI_EBD('oper');
      if (ebdList) ebdList.forEach((ebd) => {
          this.operVagList.push(new OperVagType(ebd))
        }
      );
    }
  }
});
