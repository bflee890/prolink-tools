import * as React from 'react';

import {AppStore, createAppStore} from '.';

const defaultStore = createAppStore();

/**
 * The StoreContext type is used when providing an application store to React
 * components
 */
export const StoreContext = React.createContext<AppStore>(defaultStore);
