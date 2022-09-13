/**
 * By default, access to resources is denied. To allow access to a resource, you
 * must set the `Effect` element to `Allow`. To override an allow (for example,
 * to override an allow that is otherwise in force), you set the `Effect`
 * element to `Deny`.
 *
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html | IAM JSON policy elements: Effect}
 */
export enum PolicyEffect {
  Allow = 'Allow',
  Deny = 'Deny',
}
