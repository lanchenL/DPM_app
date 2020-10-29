/* tslint:disable */

declare var Object: any;
export interface YieldRateInterface {
  "plant"?: string;
  "mfgType"?: string;
  "line"?: string;
  "stage"?: string;
  "modelFamily"?: string;
  "model"?: string;
  "trnDate"?: string;
  "period"?: string;
  "inputQty"?: number;
  "outputQty"?: number;
  "defectQty"?: number;
  "updated"?: Date;
  "id"?: number;
}

export class YieldRate implements YieldRateInterface {
  "plant": string;
  "mfgType": string;
  "line": string;
  "stage": string;
  "modelFamily": string;
  "model": string;
  "trnDate": string;
  "period": string;
  "inputQty": number;
  "outputQty": number;
  "defectQty": number;
  "updated": Date;
  "id": number;
  constructor(data?: YieldRateInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `YieldRate`.
   */
  public static getModelName() {
    return "YieldRate";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of YieldRate for dynamic purposes.
  **/
  public static factory(data: YieldRateInterface): YieldRate{
    return new YieldRate(data);
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
      name: 'YieldRate',
      plural: 'YieldRates',
      path: 'YieldRates',
      idName: 'id',
      properties: {
        "plant": {
          name: 'plant',
          type: 'string'
        },
        "mfgType": {
          name: 'mfgType',
          type: 'string'
        },
        "line": {
          name: 'line',
          type: 'string'
        },
        "stage": {
          name: 'stage',
          type: 'string'
        },
        "modelFamily": {
          name: 'modelFamily',
          type: 'string'
        },
        "model": {
          name: 'model',
          type: 'string'
        },
        "trnDate": {
          name: 'trnDate',
          type: 'string'
        },
        "period": {
          name: 'period',
          type: 'string'
        },
        "inputQty": {
          name: 'inputQty',
          type: 'number'
        },
        "outputQty": {
          name: 'outputQty',
          type: 'number'
        },
        "defectQty": {
          name: 'defectQty',
          type: 'number'
        },
        "updated": {
          name: 'updated',
          type: 'Date'
        },
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
