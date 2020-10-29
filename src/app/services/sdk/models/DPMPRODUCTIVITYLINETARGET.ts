/* tslint:disable */

declare var Object: any;
export interface DPMPRODUCTIVITYLINETARGETInterface {
  "id"?: number;
  "site"?: string;
  "plant"?: string;
  "type"?: string;
  "mfgtype"?: string;
  "line"?: string;
  "period"?: string;
  "periodtype"?: string;
  "functiontype"?: string;
  "target"?: number;
  "createdate"?: Date;
  "createuser"?: string;
  "updatedate"?: Date;
  "updateuser"?: string;
}

export class DPMPRODUCTIVITYLINETARGET implements DPMPRODUCTIVITYLINETARGETInterface {
  "id": number;
  "site": string;
  "plant": string;
  "type": string;
  "mfgtype": string;
  "line": string;
  "period": string;
  "periodtype": string;
  "functiontype": string;
  "target": number;
  "createdate": Date;
  "createuser": string;
  "updatedate": Date;
  "updateuser": string;
  constructor(data?: DPMPRODUCTIVITYLINETARGETInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DPMPRODUCTIVITYLINETARGET`.
   */
  public static getModelName() {
    return "DPMPRODUCTIVITYLINETARGET";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DPMPRODUCTIVITYLINETARGET for dynamic purposes.
  **/
  public static factory(data: DPMPRODUCTIVITYLINETARGETInterface): DPMPRODUCTIVITYLINETARGET{
    return new DPMPRODUCTIVITYLINETARGET(data);
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
      name: 'DPMPRODUCTIVITYLINETARGET',
      plural: 'DPMPRODUCTIVITYLINETARGET',
      path: 'DPMPRODUCTIVITYLINETARGET',
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
        "line": {
          name: 'line',
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
