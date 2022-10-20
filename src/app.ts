// Importáld be a HumanHero és TransformerHero osztályokat.

import { HumanHero } from './hero';
import { TransformerHero } from './transformer';


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: any[] = [{ id: 1, name: 'Joe', sex: 'male', age: 30, health: 100 },
{ id: 2, name: 'Jake', sex: 'male', age: 74, health: 82 },
{ id: 3, name: 'Agatha', sex: 'female', age: 22, health: 98 }];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [{ id: 1, name: 'Peter', wings: 2, wheels: 1, clan: 'elf' },
{ id: 2, name: 'Panna', wings: 4, wheels: 2, clan: 'dwarf' },
{ id: 3, name: 'Lea', wings: 6, wheels: 4, clan: 'fairy' }];
