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
import type { EventTypeEnum } from './EventTypeEnum';
// eslint-disable-next-line no-duplicate-imports
import type { ResourceTypeEnum } from './ResourceTypeEnum';


/**
 * Audit Event Category
 * @export
 * @interface AuditEventCategory
 */
export interface AuditEventCategory  {
  /**
   * 
   * @type {ResourceTypeEnum}
   * @memberof AuditEventCategory
   */
  resource_type: ResourceTypeEnum;
  /**
   * 
   * @type {EventTypeEnum[]}
   * @memberof AuditEventCategory
   */
  event_types: EventTypeEnum[];
}



