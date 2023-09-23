# use-value-persist - react `useValuePersist` hook

use persist to prevent unnecessary re-attach event handlers

## Usage

```jsx
import { useValuePersist } from '@-ft/use-value-persist';

function MyComponent() {
  const { enabled } = useContext(MyContext);
  const enabledPersist = useValuePersist(enabled);
  const handlePress = useCallback(() => {
    if (enabledPersist.current) alert('button is pressed when enabled');
  }, [enabledPersist]);
  // instead of below which will cause re-attach event handler
  const DONT_DO_THIS_badHandlePress = useCallback(() => {
    if (enabled) alert('button is pressed when enabled');
  }, [enabled]);

  return <button onPress={handlePress}>Click me!</button>;
}
```
