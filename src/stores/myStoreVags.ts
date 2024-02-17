import {defineStore} from 'pinia';
import {VagonType} from 'src/models/VagonType';
import {useVags_trefpp} from 'src/services/api/getVags';
import {useStoreNSI} from 'stores/myStoreNSI';


export const useStoreVags = defineStore('vag', {
  state: () => ({
    vagList: [] as VagonType[],
    loadedTime: null as Date | null,
    isLoading: false as boolean,
  }),

  getters: {
    vagCount(state) {
      return state.vagList.length;
    },
    // loadedTimeString(state) : string {
    //   if (!state.loadedTime) return '-';
    //   console.log(state.loadedTime.toLocaleString());
    //   return state.loadedTime.toLocaleTimeString();
    // },
  },

  actions: {
    async loadVags() {
      try {
        if (this.vagList && this.vagList.length > 0) return;
        console.log('loadVagsStart', this.vagList.length);
        this.isLoading = true;
        const nsiStore = useStoreNSI();
        await nsiStore.loadRodVag().then();
        console.log('loadRodVag', nsiStore.rodVagList.length);
        await nsiStore.loadOperVag();
        console.log('loadOperVag', nsiStore.operVagList.length);
        await nsiStore.loadDor();
        console.log('loadDor', nsiStore.dorList.length);
        const vList = await useVags_trefpp().getVagsTrefpp();
        if (vList) {
          vList.forEach((v) => {
            this.vagList.push(new VagonType(v));
          });
          if (this.loadedTime) this.loadedTime.setTime(Date.now());
          else this.loadedTime = new Date();
        }
        this.isLoading = false;
        console.log('loadVags', this.vagList.length);
      } catch (e) {
        console.log(e);
        this.isLoading = false;
      }
    },

    async forceLoadVags() {
      this.vagList.length = 0;
      await this.loadVags();
    },
  },
});
