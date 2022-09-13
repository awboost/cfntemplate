import { IntrinsicValue } from '../template/Fn.js';

/**
 * Represents an instance of a resource in a template.
 */
export interface ResourceInstanceType<Attribs extends object> {
  name: string;
  out: Attribs;
  ref: IntrinsicValue;
}
