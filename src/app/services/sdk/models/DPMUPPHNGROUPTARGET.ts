/* tslint:disable */

declare var Object: any;
export interface DPMUPPHNGROUPTARGETInterface {
  "id"?: number;
  "site"?: string;
  "plant"?: string;
  "type"?: string;
  "mfgtype"?: string;
  "group"?: string;
  "period"?: string;
  "periodtype"?: string;
  "functiontype"?: string;
  "target"?: number;
  "createdate"?: Date;
  "createuser"?: string;
  "updatedate"?: Date;
  "updateuser"?: string;
}

export class DPMUPPHNGROUPTARGET implements DPMUPPHNGROUPTARGETInterface {
  "id": number;
  "site": string;
  "plant": string;
  "type": string;
  "mfgtype": string;
  "group": string;
  "period": string;
  "periodtype": string;
  "functiontype": string;
  "target": number;
  "createdate": Date;
  "createuser": string;
  "updatedate": Date;
  "updateuser": string;
  constructor(data?: DPMUPPHNGROUPTARGETInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DPMUPPHNGROUPTARGET`.
   */
  public static getModelName() {
    return "DPMUPPHNGROUPTARGET";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DPMUPPHNGROUPTARGET for dynamic purposes.
  **/
  public static factory(data: DPMUPPHNGROUPTARGETInterface): DPMUPPHNGROUPTARGET{
    return new DPMUPPHNGROUPTARGET(data);
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
      name: 'DPMUPPHNGROUPTARGET',
      plural: 'DPMUPPHNGROUPTARGET',
      path: 'DPMUPPHNGROUPTARGET',
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
        "plant": {
          name: 'plant',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "mfgtype": {
          name: 'mfgtype',
          type: 'string'
        },
        "group": {
          name: 'group',
          type: 'string'
        },
        "period": {
          name: 'period',
          type: 'string'
        },
        "periodtype": {
          name: 'periodtype',
          type: 'string'
        },
        "functiontype": {
          name: 'functiontype',
          type: 'string'
        },
        "target": {
          name: 'target',
          type: 'number'
        },
        "createdate": {
          name: 'createdate',
          type: 'Date'
        },
        "createuser": {
          name: 'createuser',
          type: 'string'
        },
        "updatedate": {
          name: 'updatedate',
          type: 'Date'
        },
        "updateuser": {
          name: 'updateuser',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
