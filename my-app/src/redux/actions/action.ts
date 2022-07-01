

  export const CHARACTER_REQUEST = 'CHARACTER_REQUEST';
  export const CHARACTER_RESPONSE = 'CHARACTER_RESPONSE';
  export const CHARACTER_ERROR = 'CHARACTER_ERROR';
  const session = {
      characterRequest: () => ({type: CHARACTER_REQUEST}),
      characterResponse: (response:string[]) => ({type: CHARACTER_RESPONSE, response: response}),
      characterError: (error:string) => ({type: CHARACTER_ERROR, error}),
  }
  export default session;