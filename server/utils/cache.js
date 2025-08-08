import NodeCache from 'node-cache';

export const chartCache = new NodeCache({ stdTTL: 604800, checkperiod: 120 });
