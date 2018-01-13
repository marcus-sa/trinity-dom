// From https://developer.mozilla.org/en-US/docs/Web/Events

export default {
  // Global events
  onCached: 'cached',
  onChange: 'change',
  onCanPlay: 'canplay',
  onError: 'error',
  onAbort: 'abort',
  onLoad: 'load',
  onOpen: 'open',
  onMessage: 'message',

  // Misc events
  onOnline: 'online',
  onOffline: 'offline',
  onPopState: 'popstate',
  onShow: 'show',
  onToggle: 'toggle',

  // Touch events
  onTouchCancel: 'touchcancel',
  onTouchEnd: 'touchend',
  onTouchMove: 'touchmove',
  onTouchStart: 'touchstart',

  // Focus events
  onFocus: 'focus',
  onBlur: 'blur',
  onFocusIn: 'focusin',
  onFocusOut: 'focusout',

  // Drag & Drop events
  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragEnter: 'dragenter',
  onDragOver: 'dragover',
  onDragLeave: 'dragleave',
  onDrop: 'drop',

  // Clipboard events
  onCopy: 'copy',
  onCut: 'cut',
  onPaste: 'paste',

  // Animation events
  onAnimationEnd: 'animationend',
  onAnimationIteration: 'animationiteration',
  onAnimationStart: 'animationstart',

  // Transition events
  onTransitionEnd: 'transitionend',

  // Media events
  onDurationChange: 'durationchange',
  onLoadedMetadata: 'loadedmetadata',
  onLoadedData: 'loadeddata',
  onCanPlayThrough: 'canplaythrough',
  onEnded: 'ended',
  onEmptied: 'emptied',
  onStalled: 'stalled',
  onSuspend: 'suspend',
  onPlay: 'play',
  onPlaying: 'playing',
  onPause: 'pause',
  onWaiting: 'waiting',
  onSeeking: 'seeking',
  onSeeked: 'seeked',
  onRateChange: 'ratechange',
  onTimeUpdate: 'timeupdate',
  onVolumeChange: 'volumechange',
  onComplete: 'complete',
  onAudioProcess: 'audioprocess',

  // Progress events
  onLoadStart: 'loadstart',
  onProgress: 'progress',
  onTimeout: 'timeout',
  onLoadEnd: 'loadend',

  // Storage events,
  onChange: 'change',
  onStorage: 'storage',

  // Update events
  onChecking: 'checking',
  onDownloading: 'downloading',
  onNoUpdate: 'noupdate',
  onObsolete: 'obsolete',
  onUpdateReady: 'updateready',

  // Form events
  onInput: 'input',
  onInvalid: 'invalid',
  onReset: 'reset',
  onSearch: 'search',
  onSelect: 'select',
  onSubmit: 'submit',

  // Keyboard events
  onKeyDown: 'keydown',
  onKeyPress: 'keypress',
  onKeyUp: 'keyup',

  // Mouse events
  onClick: 'click',
  onMouseEnter: 'mouseenter',
  onMouseMove: 'mousemove',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onAuxClick: 'auxclick',
  onDblClick: 'dblclick',
  onContextMenu: 'contextmenu',
  onWheel: 'wheel',
  onMouseLeave: 'mouseleave',
  onMouseOut: 'mouseout',
  onSelect: 'select',
  onPointerLockChange: 'pointerlockchange',
  onPointerLockError: 'pointerlockerror'
}