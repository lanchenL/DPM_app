/* tslint:disable */
import {
  LINE
} from '../index';

declare var Object: any;
export interface LineMappingInterface {
  "id"?: number;
  "smtLineId"?: number;
  "dipLineId"?: number;
  smtLines?: LINE;
  dipLines?: LINE;
}

export class LineMapping implements LineMappingInterface {
  "id": number;
  "smtLineId": number;
  "dipLineId": number;
  smtLines: LINE;
  dipLines: LINE;
  constructor(data?: LineMappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LineMapping`.
   */
  public static getModelName() {
    return "LineMapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LineMapping for dynamic purposes.
  **/
  public static factory(data: LineMappingInterface): LineMapping{
    return new LineMapping(data);
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
      name: 'LineMapping',
      plural: 'LineMappings',
      path: 'LineMappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "smtLineId": {
          name: 'smtLineId',
          type: 'number'
        },
        "dipLineId": {
          name: 'dipLineId',
          type: 'number'
        },
      },
      relations: {
        smtLines: {
          name: 'smtLines',
          type: 'LINE',
          model: 'LINE',
          relationType: 'belongsTo',
                  keyFrom: 'smtLineId',
          keyTo: 'id'
        },
        dipLines: {
          name: 'dipLines',
          type: 'LINE',
          model: 'LINE',
          relationType: 'belongsTo',
                  keyFrom: 'dipLineId',
          keyTo: 'id'
        },
      }
    }
  }
}
