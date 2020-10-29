/* tslint:disable */

declare var Object: any;
export interface UploadForPDInterface {
  "id"?: number;
}

export class UploadForPD implements UploadForPDInterface {
  "id": number;
  constructor(data?: UploadForPDInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UploadForPD`.
   */
  public static getModelName() {
    return "UploadForPD";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UploadForPD for dynamic purposes.
  **/
  public static factory(data: UploadForPDInterface): UploadForPD{
    return new UploadForPD(data);
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
      name: 'UploadForPD',
      plural: 'UploadForPDs',
      path: 'UploadForPDs',
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
