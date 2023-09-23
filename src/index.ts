import { usePersist, UsePersist } from '@-ft/use-persist';

export function useValuePersist<T>(value: T): UsePersist<T> {
  const result = usePersist(() => value);
  result.current = value;
  return result;
}
