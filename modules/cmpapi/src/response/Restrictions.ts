import {RestrictionType} from '@cookiehub/core';

export interface Restrictions {

  [purposeId: string]: {
    [vendorId: string]: RestrictionType;
  } | string;

}
