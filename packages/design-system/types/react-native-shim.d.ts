declare namespace JSX {
  interface Element { readonly __jsxElement?: true }
  interface ElementChildrenAttribute { children: {} }
  interface IntrinsicAttributes { key?: string | number }
}

declare module 'react' {
  export type ReactNode = JSX.Element | string | number | boolean | null | undefined | readonly ReactNode[];
  export type ComponentType<P = Record<string, unknown>> = (props: P) => JSX.Element | null;
  export function createElement(type: unknown, props?: unknown, ...children: unknown[]): JSX.Element;
}

declare module 'react/jsx-runtime' {
  export const Fragment: (props: { children?: unknown }) => JSX.Element;
  export function jsx(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export function jsxs(type: unknown, props: unknown, key?: unknown): JSX.Element;
}

declare module 'react-native' {
  export type ViewStyle = Readonly<Record<string, string | number | boolean | undefined>>;
  export type TextStyle = Readonly<Record<string, string | number | boolean | undefined>>;
  export type ImageStyle = Readonly<Record<string, string | number | boolean | undefined>>;
  export type StyleProp<T> = T | ReadonlyArray<T | false | null | undefined> | false | null | undefined;
  export const View: (props: any) => JSX.Element;
  export const Text: (props: any) => JSX.Element;
  export const Pressable: (props: any) => JSX.Element;
  export const ScrollView: (props: any) => JSX.Element;
  export const Image: (props: any) => JSX.Element;
  export const StyleSheet: { create<T extends Record<string, any>>(styles:T): T };
}

declare module 'node:test' {
  const test: (name: string, fn: () => void | Promise<void>) => void;
  export default test;
}

declare module 'node:assert/strict' {
  interface Assert {
    equal(actual: unknown, expected: unknown): void;
    ok(value: unknown): void;
    match(value: string, regexp: RegExp): void;
    doesNotMatch(value: string, regexp: RegExp): void;
    throws(fn: () => unknown): void;
    doesNotThrow(fn: () => unknown): void;
  }
  const assert: Assert;
  export default assert;
}
