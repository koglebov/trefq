import {api as Api} from 'src/services/http';
import {type Vag_DTO} from 'src/services/dto/trefpp';
import {useCommon} from "src/composable/common";


export const useVags_trefpp = () => {
  const getVagsTrefpp = async () => {
    try {
      return await Api.get('vags').json<Vag_DTO[]>();
    } catch (e: any) {
      useCommon().showError(e);
      throw e;
    }
  };
  return {
    getVagsTrefpp,
  };
};
