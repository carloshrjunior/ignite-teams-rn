export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // nome da rota: se tem parâmetro e qual o tipo
      groups: undefined;
      new: undefined;
      players: {
        // parâmetro "group" do tipo "string"
        group: string;
      }
    }
  }
}