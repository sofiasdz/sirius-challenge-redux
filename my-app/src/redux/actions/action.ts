export const CHARACTER_REQUEST = 'CHARACTER_REQUEST';
export const CHARACTER_RESPONSE = 'CHARACTER_RESPONSE';
export const CHARACTER_ERROR = 'CHARACTER_ERROR';

  const characters = {
      characterRequest: (page:number) => ({type: CHARACTER_REQUEST, page}),
      characterResponse: (response:any[]) => ({type: CHARACTER_RESPONSE, response}),
      characterError: (error:string) => ({type: CHARACTER_ERROR, error}),
  }
  export default characters;