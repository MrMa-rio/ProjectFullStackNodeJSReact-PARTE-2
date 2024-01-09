import { ToggleLogin } from "@/typesObjects";
import { ResponseAuthBody } from "@/typesObjects/ResponseAuthBody";
import { ResponseAuthType } from "@/typesObjects/ResponseAuthType";
import { ResponseStatus } from "@/typesObjects/ResponseStatus";
import { headers } from "@/utils/HeaderApi";

const url_usuario = process.env.NEXT_PUBLIC_API_URL_AUTH_USUARIO as string;
const url_cliente = process.env.NEXT_PUBLIC_API_URL_AUTH_CLIENTE as string;


export const authLogin = async (toggleLogin:ToggleLogin,login:ResponseAuthBody)=> {
  
  try {
    const url = toggleLogin === ToggleLogin.usuario ? url_usuario : url_cliente
    const response = await fetch(url, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(login),
  });
    const results = await response.json();
    const result: ResponseAuthType = results;
    return result;
  } catch (err:any) {
  }
};
