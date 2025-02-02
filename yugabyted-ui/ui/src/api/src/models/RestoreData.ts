// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { RestoreInfo } from './RestoreInfo';
// eslint-disable-next-line no-duplicate-imports
import type { RestoreSpec } from './RestoreSpec';


/**
 * Restore Backup data
 * @export
 * @interface RestoreData
 */
export interface RestoreData  {
  /**
   * 
   * @type {RestoreSpec}
   * @memberof RestoreData
   */
  spec?: RestoreSpec;
  /**
   * 
   * @type {RestoreInfo}
   * @memberof RestoreData
   */
  info?: RestoreInfo;
}



