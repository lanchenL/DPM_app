/* tslint:disable */

declare var Object: any;
export interface DPMUPPHNDETAILInterface {
  "syncid"?: number;
  "syncdate"?: Date;
  "syncaction"?: string;
  "period"?: string;
  "periodtype"?: string;
  "site"?: string;
  "plant"?: string;
  "mfgtype"?: string;
  "line"?: string;
  "shiftid"?: string;
  "shifttype"?: string;
  "customer"?: string;
  "output"?: number;
  "presenthour"?: number;
}

export class DPMUPPHNDETAIL implements DPMUPPHNDETAILInterface {
  "syncid": number;
  "syncdate": Date;
  "syncaction": string;
  "period": string;
  "periodtype": string;
  "site": string;
  "plant": string;
  "mfgtype": string;
  "line": string;
  "shiftid": string;
  "shifttype": string;
  "customer": string;
  "output": number;
  "presenthour": number;
  constructor(data?: DPMUPPHNDETAILInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DPMUPPHNDETAIL`.
   */
  public static getModelName() {
    return "DPMUPPHNDETAIL";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DPMUPPHNDETAIL for dynamic purposes.
  **/
  public static factory(data: DPMUPPHNDETAILInterface): DPMUPPHNDETAIL{
    return new DPMUPPHNDETAIL(data);
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
      name: 'DPMUPPHNDETAIL',
      plural: 'dpmupphndetail',
      path: 'dpmupphndetail',
      idName: 'syncid',
      properties: {
        "syncid": {
          name: 'syncid',
          type: 'number'
        },
        "syncdate": {
          name: 'syncdate',
          type: 'Date'
        },
        "syncaction": {
          name: 'syncaction',
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
        "site": {
          name: 'site',
          type: 'string'
        },
        "plant": {
          name: 'plant',
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
        "shiftid": {
          name: 'shiftid',
          type: 'string'
        },
        "shifttype": {
          name: 'shifttype',
          type: 'string'
        },
        "customer": {
          name: 'customer',
          type: 'string'
        },
        "output": {
          name: 'output',
          type: 'number'
        },
        "presenthour": {
          name: 'presenthour',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
