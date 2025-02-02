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
import type { BuildInfo } from './BuildInfo';
// eslint-disable-next-line no-duplicate-imports
import type { RuntimeInfo } from './RuntimeInfo';


/**
 * 
 * @export
 * @interface HealthCheckInfo
 */
export interface HealthCheckInfo  {
  /**
   * 
   * @type {BuildInfo}
   * @memberof HealthCheckInfo
   */
  build_info: BuildInfo;
  /**
   * 
   * @type {RuntimeInfo}
   * @memberof HealthCheckInfo
   */
  runtime_info: RuntimeInfo;
}



