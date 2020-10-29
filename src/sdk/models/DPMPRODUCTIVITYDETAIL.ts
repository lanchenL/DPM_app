/* tslint:disable */

declare var Object: any;
export interface DPMPRODUCTIVITYDETAILInterface {
  "syncid"?: number;
  "syncaction"?: string;
  "syncdate"?: Date;
  "site"?: string;
  "plant"?: string;
  "shiftid"?: string;
  "shifttype"?: string;
  "mfgtype"?: string;
  "line"?: string;
  "period"?: string;
  "periodtype"?: string;
  "earnedhrs"?: number;
  "presenthrs"?: number;
}

export class DPMPRODUCTIVITYDETAIL implements DPMPRODUCTIVITYDETAILInterface {
  "syncid": number;
  "syncaction": string;
  "syncdate": Date;
  "site": string;
  "plant": string;
  "shiftid": string;
  "shifttype": string;
  "mfgtype": string;
  "line": string;
  "period": string;
  "periodtype": string;
  "earnedhrs": number;
  "presenthrs": number;
  constructor(data?: DPMPRODUCTIVITYDETAILInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DPMPRODUCTIVITYDETAIL`.
   */
  public static getModelName() {
    return "DPMPRODUCTIVITYDETAIL";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DPMPRODUCTIVITYDETAIL for dynamic purposes.
  **/
  public static factory(data: DPMPRODUCTIVITYDETAILInterface): DPMPRODUCTIVITYDETAIL{
    return new DPMPRODUCTIVITYDETAIL(data);
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
      name: 'DPMPRODUCTIVITYDETAIL',
      plural: 'dpmproductivitydetail',
      path: 'dpmproductivitydetail',
      idName: 'syncid',
      properties: {
        "syncid": {
          name: 'syncid',
          type: 'number'
        },
        "syncaction": {
          name: 'syncaction',
          type: 'string'
        },
        "syncdate": {
          name: 'syncdate',
          type: 'Date'
        },
        "site": {
          name: 'site',
          type: 'string'
        },
        "plant": {
          name: 'plant',
          type: 'string'
        },
        "shiftid": {
          name: 'shiftid',
          type: 'string'
        },
        "shifttype": {
          name: 'shifttype',
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
        "earnedhrs": {
          name: 'earnedhrs',
          type: 'number'
        },
        "presenthrs": {
          name: 'presenthrs',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
