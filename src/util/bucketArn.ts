import { IntrinsicValue } from '../template/Fn.js';
import { formatArn } from './formatArn.js';

/**
 * Create a valid ARN for an S3 bucket, from the bucket name and optionally an
 * object path.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html | S3 ARN Format}
 */
export function bucketArn(bucketName: string, path?: string): IntrinsicValue {
  return formatArn({
    accountId: null,
    region: null,
    resourceId: path ? path : bucketName,
    resourceType: path ? bucketName : undefined,
    service: 's3',
  });
}
