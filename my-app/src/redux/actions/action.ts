

  export enum CHARACTER_REQUEST  {CHARACTER_REQUEST='CHARACTER_REQUEST'};
  export enum CHARACTER_RESPONSE {CHARACTER_RESPONSE='CHARACTER_RESPONSE'};
  export enum CHARACTER_ERROR { CHARACTER_ERROR ='CHARACTER_ERROR'};
  const session = {
      characterRequest: (page:number) => ({type: CHARACTER_REQUEST, page}),
      characterResponse: (response:string[]) => ({type: CHARACTER_RESPONSE, response: response}),
      characterError: (error:string) => ({type: CHARACTER_ERROR, error}),
  }
  export default session;