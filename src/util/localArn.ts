import { IntrinsicValue } from '../template/Fn.js';
import { formatArn } from './formatArn.js';

/**
 * Build a valid ARN using the given parameters. The values `accountId`,
 * `partition` and `region` are set to the values for the stack being deployed.
 *
 * @see  {@link https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html | Amazon Resource Names (ARNs)}
 */
export function localArn(service: string, resourceId: string): IntrinsicValue;
export function localArn(
  service: string,
  resourceType: string,
  resourceId: string,
): IntrinsicValue;
export function localArn(
  service: string,
  resourceTypeOrId: string,
  resourceId?: string,
): IntrinsicValue {
  return formatArn({
    service,
    resourceType: resourceId ? resourceTypeOrId : undefined,
    resourceId: resourceId ? resourceId : resourceTypeOrId,
  });
}
