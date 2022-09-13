import { AwsParam } from '../template/AwsParam.js';
import { Fn, IntrinsicValue } from '../template/Fn.js';

/**
 * Represents one or more parts of an ARN.
 *
 * @see {@link https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html | Amazon Resource Names (ARNs)}
 */
export interface ArnParts {
  accountId?: string | null;
  delimiter?: string;
  partition?: string;
  region?: string | null;
  resourceId: string;
  resourceType?: string;
  service: string;
}

/**
 * Build a valid ARN using the given parameters, with `accountId`, `partition`
 * and `region` defaulting to the values for the stack being deployed.
 *
 * @see {@link https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html | Amazon Resource Names (ARNs)}
 */
export function formatArn({
  accountId = AwsParam.AccountId,
  delimiter = '/',
  partition = AwsParam.Partition,
  region = AwsParam.Region,
  resourceId,
  resourceType,
  service,
}: ArnParts): IntrinsicValue {
  if (resourceType) {
    return Fn.Join(':', [
      'arn',
      partition,
      service,
      region ?? '',
      accountId ?? '',
      Fn.Join(delimiter, [resourceType, resourceId]),
    ]);
  } else {
    return Fn.Join(':', [
      'arn',
      partition,
      service,
      region ?? '',
      accountId ?? '',
      resourceId,
    ]);
  }
}
