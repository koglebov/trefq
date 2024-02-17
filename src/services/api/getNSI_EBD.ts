import {api as Api} from 'src/services/http';
import {type EBD_DTO} from 'src/services/dto/trefpp';
import {useCommon} from "src/composable/common";

export const useNSI_EBD = () => {
  // return await Api.get(mode, { prefixUrl: '/nsiebd' }).json<EBD_DTO[]>();
  // const rvList = ref<EBD_DTO[] | null>(null);
  // const getNSI_EBD = async () => {
  //   rvList.value = await Api.get(mode, {
  //     prefixUrl: 'http://192.168.2.227:8080/trefpp/nsiebd/',
  //   }).json<EBD_DTO[]>();
  //const rvList = ref<EBD_DTO[] | null>(null);
  const common = useCommon();
  const getNSI_EBD = async (mode: string) => {
    // await common.sleep(1000);
    try {
      return await Api.get('nsiebd/' + mode).json<EBD_DTO[]>();
    } catch (e: any) {
      common.showError(e);
      throw  e;
    }

  };
  return {
    getNSI_EBD,
    //rvList,
  };
};
