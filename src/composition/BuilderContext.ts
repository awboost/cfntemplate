/**
 * Represents a constructor for an object which can provide extra context during
 * a CloudFormation template build.
 */
export interface ContextConstructor<T> {
  ContextKey: string;
  new (): T;
}

/**
 * Represents a collection of objects which can provide extra context during a
 * CloudFormation template build.
 */
export interface BuilderContext {
  get<T>(ctor: ContextConstructor<T>): T;
}

/**
 * Represents a collection of objects which can provide extra context during a
 * CloudFormation template build.
 */
export class BuilderContextProvider implements BuilderContext {
  private readonly ctx = new Map<string, any>();

  public get<T>(ctor: ContextConstructor<T>): T {
    let value = this.ctx.get(ctor.ContextKey);
    if (!value) {
      value = new ctor();
      this.ctx.set(ctor.ContextKey, value);
    }
    return value;
  }
}
