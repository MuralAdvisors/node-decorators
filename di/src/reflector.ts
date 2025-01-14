import 'reflect-metadata';
import { Injectable, Type } from './types';
import { InjectionToken } from './injection-token';

export class Reflector {
  /**
   * Get injectable id
   */
  static getId(type: Type): InjectionToken {
    return Reflect.getMetadata('__meta_di__', type);
  }

  /**
   * Set id for the type
   */
  static setId(type: Type): InjectionToken {
    const id: InjectionToken = new InjectionToken(type.name);

    Reflect.defineMetadata('__meta_di__', id, type);

    return id;
  }

  /**
   * Get injectable's param types
   */
  static paramTypes(target: Type): Injectable[] {
    return Reflect.getMetadata('design:paramtypes', target) || [];
  }
}
