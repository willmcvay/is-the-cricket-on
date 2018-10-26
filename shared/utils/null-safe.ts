export const nullSafe = <TResult, TObj>(
  valueIfFail: TResult,
  unsafeDataOperation: (x: TObj) => TResult,
  obj: TObj
) => {
  try {
    const item = unsafeDataOperation(obj)
    return item && item !== null ? item : valueIfFail
  } catch (error) {
    return valueIfFail
  }
}
