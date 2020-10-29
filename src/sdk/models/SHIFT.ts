/* tslint:disable */

declare var Object: any;
export interface SHIFTInterface {
  "id"?: number;
  "site"?: string;
  "plantname"?: string;
  "line"?: string;
  "process"?: string;
  "shiftid"?: string;
  "type"?: string;
}

export class SHIFT implements SHIFTInterface {
  "id": number;
  "site": string;
  "plantname": string;
  "line": string;
  "process": string;
  "shiftid": string;
  "type": string;
  constructor(data?: SHIFTInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SHIFT`.
   */
  public static getModelName() {
    return "SHIFT";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SHIFT for dynamic purposes.
  **/
  public static factory(data: SHIFTInterface): SHIFT{
    return new SHIFT(data);
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
      name: 'SHIFT',
      plural: 'SHIFTS',
      path: 'SHIFTS',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "site": {
          name: 'site',
          type: 'string'
        },
        "plantname": {
          name: 'plantname',
          type: 'string'
        },
        "line": {
          name: 'line',
          type: 'string'
        },
        "process": {
          name: 'process',
          type: 'string'
        },
        "shiftid": {
          name: 'shiftid',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
