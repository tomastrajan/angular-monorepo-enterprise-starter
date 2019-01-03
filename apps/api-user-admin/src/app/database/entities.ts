const contexts = (require as any).context('../../', true, /\.entity.ts$/);
export const entities = contexts
  .keys()
  .map(modulePath => contexts(modulePath))
  .reduce(
    (result, entityModule) =>
      result.concat(Object.keys(entityModule).map(key => entityModule[key])),
    []
  );
