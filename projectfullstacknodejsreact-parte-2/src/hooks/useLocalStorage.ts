import { ItemProps, ItemPropsCart } from "@/typesObjects/ItemProps";
import { ResponseAuthBody } from "@/typesObjects/ResponseAuthBody";
import { ResponseAuthType } from "@/typesObjects/ResponseAuthType";

export const useLocalStorage = <T>(item: string, valueInitial: T) => {
  const setLocalStorageAuth = (newValue: { token: string }) => {
    localStorage.setItem(item, JSON.stringify(newValue.token));
  };

  const setDataLoginAuth = (newValue: ResponseAuthBody) => {
    localStorage.setItem("login", JSON.stringify(newValue));
  };

  const getDataLoginAuth = (): ResponseAuthType | undefined => {
    const tokenExisting = localStorage.getItem("login");
    if (tokenExisting) {
      return JSON.parse(tokenExisting);
    }
  };

  const getLocalStorageAuth = () => {
    const tokenExisting = localStorage.getItem(item);
    if (tokenExisting) return JSON.parse(tokenExisting);
    return "";
  };

  const deleteLocalStorageAuth = () => {
    localStorage.removeItem("token");
  };

  const RemoveItemLS = (idItem: number) => {
    const datalocal = localStorage.getItem(item);
    if (datalocal) {
      let data: ItemProps[] = JSON.parse(datalocal);
      const valueIndex = data.filter((item) => item.idItem != idItem);
      if (valueIndex) localStorage.setItem(item, JSON.stringify(valueIndex));
      else [];
    }
  };

  const setDataLS = (newValue: ItemPropsCart) => {
    //localStorage.setItem(item, JSON.stringify(newValue));
    const datalocal = localStorage.getItem(item);
    if (datalocal) {
      let data: ItemPropsCart[] = JSON.parse(datalocal);
      const existingItem = data.findIndex(
        (item) => item.idItem === newValue.idItem
      );
      if (existingItem != -1) {
        //const targetItem = data[existingItem];
        const withoutItem = data.filter((item, index) => index != existingItem);
        localStorage.setItem(
          item,
          JSON.stringify([...withoutItem, { ...newValue }])
        );
      } else {
        if (data)
          data.push({
            ...newValue,
            //@ts-ignore
            qtdItem: 1,
          });

        localStorage.setItem(item, JSON.stringify(data));
      }
    } else {
      const results = [{ ...newValue, qtdItem: 1 }];
      localStorage.setItem(item, JSON.stringify(results));
    }
  };

  const getDataLS = () => {
    const dataExisting = localStorage.getItem(item);
    if (dataExisting) {
      return JSON.parse(dataExisting);
    }
  };
  const existingItem = (idItem:number) => {
    const datalocal = localStorage.getItem(item);
    if (datalocal) {
      let data: ItemPropsCart[] = JSON.parse(datalocal);
      const existingItem = data.findIndex(
        (item) => item.idItem === idItem
      );
      if(existingItem != -1) return true
    }
    return false
  };

  return {
    setLocalStorageAuth,
    setDataLoginAuth,
    getDataLoginAuth,
    getLocalStorageAuth,
    deleteLocalStorageAuth,
    setDataLS,
    getDataLS,
    RemoveItemLS,
    existingItem
  };
};
