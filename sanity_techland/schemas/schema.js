import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import speaker from './speaker';
import pod from './pod';
import tab from './Tab';
import headphone from "./Headphone"
import cover from './cover';
import pc from './pc';
import charger from './charger';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner,  speaker, pod, tab, headphone, cover, pc, charger ]),
})