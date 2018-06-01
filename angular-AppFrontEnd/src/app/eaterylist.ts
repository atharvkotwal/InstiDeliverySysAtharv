import { Eatery } from './eatery';

import { MenuAmul } from './menus/menuamul';
import { MenuBB } from './menus/menub&b';
import { MenuCampusHub } from './menus/menucampushub';
import { MenuGullu } from './menus/menugullu';

export const EATERIES: Eatery[] = [
  { Eid: 11, name: 'AMUL', details: MenuAmul },
  { Eid: 12, name: 'B&B', details: MenuBB },
  { Eid: 13, name: 'Campus Hub', details: MenuCampusHub },
  { Eid: 14, name: 'Gulmohar', details: MenuGullu }
  

];