/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface OAlert {

    }
  }

  interface HTMLOAlertElement extends StencilComponents.OAlert, HTMLStencilElement {}

  var HTMLOAlertElement: {
    prototype: HTMLOAlertElement;
    new (): HTMLOAlertElement;
  };
  interface HTMLElementTagNameMap {
    'o-alert': HTMLOAlertElement;
  }
  interface ElementTagNameMap {
    'o-alert': HTMLOAlertElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'o-alert': JSXElements.OAlertAttributes;
    }
  }
  namespace JSXElements {
    export interface OAlertAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;