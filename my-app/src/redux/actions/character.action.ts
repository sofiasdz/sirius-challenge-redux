import {CharacterType} from "../../Types/Types";

export const CHARACTER_REQUEST = 'CHARACTER_REQUEST';
export const CHARACTER_RESPONSE = 'CHARACTER_RESPONSE';
export const CHARACTER_ERROR = 'CHARACTER_ERROR';

  const characters = {
      characterRequest: (pageNumber:number,name:String) => ({type: CHARACTER_REQUEST, pageNumber,name}),
      characterResponse: (response:CharacterType[]) => ({type: CHARACTER_RESPONSE, response}),
      characterError: (error:string) => ({type: CHARACTER_ERROR, error}),
  }
  export default characters;