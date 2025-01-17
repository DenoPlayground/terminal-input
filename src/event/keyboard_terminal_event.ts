/**
 * This interface represents a keyboard event inside of the terminal.
 */
export interface KeyboardTerminalEvent {
  /**
   * The code sequence that was send to the terminal.
   * 
   * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code)
   */
  sequence : string,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) */
  key : string | undefined,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) */
  code : string | undefined,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey) */
  shiftKey : boolean,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/ctrlKey) */
  ctrlKey : boolean,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/altKey) */
  altKey : boolean
}
