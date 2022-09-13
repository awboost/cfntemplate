import { OutputDefinition } from '../template/OutputDefinition.js';
import { makeOutput } from './makeOutput.js';
import { TemplateBuilder } from './TemplateBuilder.js';
import { TemplateFragment } from './TemplateFragment.js';

/**
 * Make multiple outputs in a CloudFormation template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html | Outputs}
 */
export function makeOutputs<K extends string = string>(
  spec: Record<K, OutputDefinition>,
): [TemplateBuilder] {
  return [
    TemplateFragment.compose(
      ...Object.entries(spec).map(
        ([k, v]) => makeOutput(k, v as OutputDefinition)[0],
      ),
    ),
  ];
}
