/* tslint:disable */

declare var Object: any;
export interface UploadForUPPHNInterface {
  "id"?: number;
}

export class UploadForUPPHN implements UploadForUPPHNInterface {
  "id": number;
  constructor(data?: UploadForUPPHNInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UploadForUPPHN`.
   */
  public static getModelName() {
    return "UploadForUPPHN";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UploadForUPPHN for dynamic purposes.
  **/
  public static factory(data: UploadForUPPHNInterface): UploadForUPPHN{
    return new UploadForUPPHN(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'UploadForUPPHN',
      plural: 'UploadForUPPHNs',
      path: 'UploadForUPPHNs',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
