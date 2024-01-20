var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function zt(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var n = function t() {
      return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(r).forEach(function(t) {
    var i = Object.getOwnPropertyDescriptor(r, t);
    Object.defineProperty(n, t, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[t];
      }
    });
  }), n;
}
var it = { exports: {} };
function Rt(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var re = { exports: {} };
const Ht = {}, $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ht
}, Symbol.toStringTag, { value: "Module" })), Pt = /* @__PURE__ */ zt($t);
var yr;
function N() {
  return yr || (yr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t();
    })(O, function() {
      var n = n || function(t, i) {
        var l;
        if (typeof window < "u" && window.crypto && (l = window.crypto), typeof self < "u" && self.crypto && (l = self.crypto), typeof globalThis < "u" && globalThis.crypto && (l = globalThis.crypto), !l && typeof window < "u" && window.msCrypto && (l = window.msCrypto), !l && typeof O < "u" && O.crypto && (l = O.crypto), !l && typeof Rt == "function")
          try {
            l = Pt;
          } catch {
          }
        var A = function() {
          if (l) {
            if (typeof l.getRandomValues == "function")
              try {
                return l.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof l.randomBytes == "function")
              try {
                return l.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, d = Object.create || /* @__PURE__ */ function() {
          function c() {
          }
          return function(u) {
            var p;
            return c.prototype = u, p = new c(), c.prototype = null, p;
          };
        }(), s = {}, a = s.lib = {}, x = a.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(c) {
              var u = d(this);
              return c && u.mixIn(c), (!u.hasOwnProperty("init") || this.init === u.init) && (u.init = function() {
                u.$super.init.apply(this, arguments);
              }), u.init.prototype = u, u.$super = this, u;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var c = this.extend();
              return c.init.apply(c, arguments), c;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(c) {
              for (var u in c)
                c.hasOwnProperty(u) && (this[u] = c[u]);
              c.hasOwnProperty("toString") && (this.toString = c.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), E = a.WordArray = x.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(c, u) {
            c = this.words = c || [], u != i ? this.sigBytes = u : this.sigBytes = c.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(c) {
            return (c || f).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(c) {
            var u = this.words, p = c.words, m = this.sigBytes, g = c.sigBytes;
            if (this.clamp(), m % 4)
              for (var b = 0; b < g; b++) {
                var F = p[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                u[m + b >>> 2] |= F << 24 - (m + b) % 4 * 8;
              }
            else
              for (var H = 0; H < g; H += 4)
                u[m + H >>> 2] = p[H >>> 2];
            return this.sigBytes += g, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var c = this.words, u = this.sigBytes;
            c[u >>> 2] &= 4294967295 << 32 - u % 4 * 8, c.length = t.ceil(u / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var c = x.clone.call(this);
            return c.words = this.words.slice(0), c;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(c) {
            for (var u = [], p = 0; p < c; p += 4)
              u.push(A());
            return new E.init(u, c);
          }
        }), o = s.enc = {}, f = o.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(c) {
            for (var u = c.words, p = c.sigBytes, m = [], g = 0; g < p; g++) {
              var b = u[g >>> 2] >>> 24 - g % 4 * 8 & 255;
              m.push((b >>> 4).toString(16)), m.push((b & 15).toString(16));
            }
            return m.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(c) {
            for (var u = c.length, p = [], m = 0; m < u; m += 2)
              p[m >>> 3] |= parseInt(c.substr(m, 2), 16) << 24 - m % 8 * 4;
            return new E.init(p, u / 2);
          }
        }, h = o.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(c) {
            for (var u = c.words, p = c.sigBytes, m = [], g = 0; g < p; g++) {
              var b = u[g >>> 2] >>> 24 - g % 4 * 8 & 255;
              m.push(String.fromCharCode(b));
            }
            return m.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(c) {
            for (var u = c.length, p = [], m = 0; m < u; m++)
              p[m >>> 2] |= (c.charCodeAt(m) & 255) << 24 - m % 4 * 8;
            return new E.init(p, u);
          }
        }, B = o.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(c) {
            try {
              return decodeURIComponent(escape(h.stringify(c)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(c) {
            return h.parse(unescape(encodeURIComponent(c)));
          }
        }, v = a.BufferedBlockAlgorithm = x.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new E.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(c) {
            typeof c == "string" && (c = B.parse(c)), this._data.concat(c), this._nDataBytes += c.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(c) {
            var u, p = this._data, m = p.words, g = p.sigBytes, b = this.blockSize, F = b * 4, H = g / F;
            c ? H = t.ceil(H) : H = t.max((H | 0) - this._minBufferSize, 0);
            var y = H * b, D = t.min(y * 4, g);
            if (y) {
              for (var k = 0; k < y; k += b)
                this._doProcessBlock(m, k);
              u = m.splice(0, y), p.sigBytes -= D;
            }
            return new E.init(u, D);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var c = x.clone.call(this);
            return c._data = this._data.clone(), c;
          },
          _minBufferSize: 0
        });
        a.Hasher = v.extend({
          /**
           * Configuration options.
           */
          cfg: x.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(c) {
            this.cfg = this.cfg.extend(c), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            v.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(c) {
            return this._append(c), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(c) {
            c && this._append(c);
            var u = this._doFinalize();
            return u;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(c) {
            return function(u, p) {
              return new c.init(p).finalize(u);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(c) {
            return function(u, p) {
              return new C.HMAC.init(c, p).finalize(u);
            };
          }
        });
        var C = s.algo = {};
        return s;
      }(Math);
      return n;
    });
  }(re)), re.exports;
}
var te = { exports: {} }, gr;
function X0() {
  return gr || (gr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function(t) {
        var i = n, l = i.lib, A = l.Base, d = l.WordArray, s = i.x64 = {};
        s.Word = A.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(a, x) {
            this.high = a, this.low = x;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), s.WordArray = A.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(a, x) {
            a = this.words = a || [], x != t ? this.sigBytes = x : this.sigBytes = a.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var a = this.words, x = a.length, E = [], o = 0; o < x; o++) {
              var f = a[o];
              E.push(f.high), E.push(f.low);
            }
            return d.create(E, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var a = A.clone.call(this), x = a.words = this.words.slice(0), E = x.length, o = 0; o < E; o++)
              x[o] = x[o].clone();
            return a;
          }
        });
      }(), n;
    });
  }(te)), te.exports;
}
var ne = { exports: {} }, mr;
function It() {
  return mr || (mr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var t = n, i = t.lib, l = i.WordArray, A = l.init, d = l.init = function(s) {
            if (s instanceof ArrayBuffer && (s = new Uint8Array(s)), (s instanceof Int8Array || typeof Uint8ClampedArray < "u" && s instanceof Uint8ClampedArray || s instanceof Int16Array || s instanceof Uint16Array || s instanceof Int32Array || s instanceof Uint32Array || s instanceof Float32Array || s instanceof Float64Array) && (s = new Uint8Array(s.buffer, s.byteOffset, s.byteLength)), s instanceof Uint8Array) {
              for (var a = s.byteLength, x = [], E = 0; E < a; E++)
                x[E >>> 2] |= s[E] << 24 - E % 4 * 8;
              A.call(this, x, a);
            } else
              A.apply(this, arguments);
          };
          d.prototype = l;
        }
      }(), n.lib.WordArray;
    });
  }(ne)), ne.exports;
}
var ie = { exports: {} }, br;
function Ot() {
  return br || (br = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.WordArray, A = t.enc;
        A.Utf16 = A.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(s) {
            for (var a = s.words, x = s.sigBytes, E = [], o = 0; o < x; o += 2) {
              var f = a[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
              E.push(String.fromCharCode(f));
            }
            return E.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(s) {
            for (var a = s.length, x = [], E = 0; E < a; E++)
              x[E >>> 1] |= s.charCodeAt(E) << 16 - E % 2 * 16;
            return l.create(x, a * 2);
          }
        }, A.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(s) {
            for (var a = s.words, x = s.sigBytes, E = [], o = 0; o < x; o += 2) {
              var f = d(a[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
              E.push(String.fromCharCode(f));
            }
            return E.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(s) {
            for (var a = s.length, x = [], E = 0; E < a; E++)
              x[E >>> 1] |= d(s.charCodeAt(E) << 16 - E % 2 * 16);
            return l.create(x, a * 2);
          }
        };
        function d(s) {
          return s << 8 & 4278255360 | s >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(ie)), ie.exports;
}
var ae = { exports: {} }, Dr;
function A0() {
  return Dr || (Dr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.WordArray, A = t.enc;
        A.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(s) {
            var a = s.words, x = s.sigBytes, E = this._map;
            s.clamp();
            for (var o = [], f = 0; f < x; f += 3)
              for (var h = a[f >>> 2] >>> 24 - f % 4 * 8 & 255, B = a[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255, v = a[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, C = h << 16 | B << 8 | v, c = 0; c < 4 && f + c * 0.75 < x; c++)
                o.push(E.charAt(C >>> 6 * (3 - c) & 63));
            var u = E.charAt(64);
            if (u)
              for (; o.length % 4; )
                o.push(u);
            return o.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(s) {
            var a = s.length, x = this._map, E = this._reverseMap;
            if (!E) {
              E = this._reverseMap = [];
              for (var o = 0; o < x.length; o++)
                E[x.charCodeAt(o)] = o;
            }
            var f = x.charAt(64);
            if (f) {
              var h = s.indexOf(f);
              h !== -1 && (a = h);
            }
            return d(s, a, E);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function d(s, a, x) {
          for (var E = [], o = 0, f = 0; f < a; f++)
            if (f % 4) {
              var h = x[s.charCodeAt(f - 1)] << f % 4 * 2, B = x[s.charCodeAt(f)] >>> 6 - f % 4 * 2, v = h | B;
              E[o >>> 2] |= v << 24 - o % 4 * 8, o++;
            }
          return l.create(E, o);
        }
      }(), n.enc.Base64;
    });
  }(ae)), ae.exports;
}
var xe = { exports: {} }, Fr;
function Ut() {
  return Fr || (Fr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.WordArray, A = t.enc;
        A.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(s, a) {
            a === void 0 && (a = !0);
            var x = s.words, E = s.sigBytes, o = a ? this._safe_map : this._map;
            s.clamp();
            for (var f = [], h = 0; h < E; h += 3)
              for (var B = x[h >>> 2] >>> 24 - h % 4 * 8 & 255, v = x[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, C = x[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, c = B << 16 | v << 8 | C, u = 0; u < 4 && h + u * 0.75 < E; u++)
                f.push(o.charAt(c >>> 6 * (3 - u) & 63));
            var p = o.charAt(64);
            if (p)
              for (; f.length % 4; )
                f.push(p);
            return f.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(s, a) {
            a === void 0 && (a = !0);
            var x = s.length, E = a ? this._safe_map : this._map, o = this._reverseMap;
            if (!o) {
              o = this._reverseMap = [];
              for (var f = 0; f < E.length; f++)
                o[E.charCodeAt(f)] = f;
            }
            var h = E.charAt(64);
            if (h) {
              var B = s.indexOf(h);
              B !== -1 && (x = B);
            }
            return d(s, x, o);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function d(s, a, x) {
          for (var E = [], o = 0, f = 0; f < a; f++)
            if (f % 4) {
              var h = x[s.charCodeAt(f - 1)] << f % 4 * 2, B = x[s.charCodeAt(f)] >>> 6 - f % 4 * 2, v = h | B;
              E[o >>> 2] |= v << 24 - o % 4 * 8, o++;
            }
          return l.create(E, o);
        }
      }(), n.enc.Base64url;
    });
  }(xe)), xe.exports;
}
var oe = { exports: {} }, _r;
function C0() {
  return _r || (_r = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function(t) {
        var i = n, l = i.lib, A = l.WordArray, d = l.Hasher, s = i.algo, a = [];
        (function() {
          for (var B = 0; B < 64; B++)
            a[B] = t.abs(t.sin(B + 1)) * 4294967296 | 0;
        })();
        var x = s.MD5 = d.extend({
          _doReset: function() {
            this._hash = new A.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(B, v) {
            for (var C = 0; C < 16; C++) {
              var c = v + C, u = B[c];
              B[c] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360;
            }
            var p = this._hash.words, m = B[v + 0], g = B[v + 1], b = B[v + 2], F = B[v + 3], H = B[v + 4], y = B[v + 5], D = B[v + 6], k = B[v + 7], S = B[v + 8], $ = B[v + 9], P = B[v + 10], I = B[v + 11], K = B[v + 12], j = B[v + 13], V = B[v + 14], q = B[v + 15], w = p[0], z = p[1], R = p[2], T = p[3];
            w = E(w, z, R, T, m, 7, a[0]), T = E(T, w, z, R, g, 12, a[1]), R = E(R, T, w, z, b, 17, a[2]), z = E(z, R, T, w, F, 22, a[3]), w = E(w, z, R, T, H, 7, a[4]), T = E(T, w, z, R, y, 12, a[5]), R = E(R, T, w, z, D, 17, a[6]), z = E(z, R, T, w, k, 22, a[7]), w = E(w, z, R, T, S, 7, a[8]), T = E(T, w, z, R, $, 12, a[9]), R = E(R, T, w, z, P, 17, a[10]), z = E(z, R, T, w, I, 22, a[11]), w = E(w, z, R, T, K, 7, a[12]), T = E(T, w, z, R, j, 12, a[13]), R = E(R, T, w, z, V, 17, a[14]), z = E(z, R, T, w, q, 22, a[15]), w = o(w, z, R, T, g, 5, a[16]), T = o(T, w, z, R, D, 9, a[17]), R = o(R, T, w, z, I, 14, a[18]), z = o(z, R, T, w, m, 20, a[19]), w = o(w, z, R, T, y, 5, a[20]), T = o(T, w, z, R, P, 9, a[21]), R = o(R, T, w, z, q, 14, a[22]), z = o(z, R, T, w, H, 20, a[23]), w = o(w, z, R, T, $, 5, a[24]), T = o(T, w, z, R, V, 9, a[25]), R = o(R, T, w, z, F, 14, a[26]), z = o(z, R, T, w, S, 20, a[27]), w = o(w, z, R, T, j, 5, a[28]), T = o(T, w, z, R, b, 9, a[29]), R = o(R, T, w, z, k, 14, a[30]), z = o(z, R, T, w, K, 20, a[31]), w = f(w, z, R, T, y, 4, a[32]), T = f(T, w, z, R, S, 11, a[33]), R = f(R, T, w, z, I, 16, a[34]), z = f(z, R, T, w, V, 23, a[35]), w = f(w, z, R, T, g, 4, a[36]), T = f(T, w, z, R, H, 11, a[37]), R = f(R, T, w, z, k, 16, a[38]), z = f(z, R, T, w, P, 23, a[39]), w = f(w, z, R, T, j, 4, a[40]), T = f(T, w, z, R, m, 11, a[41]), R = f(R, T, w, z, F, 16, a[42]), z = f(z, R, T, w, D, 23, a[43]), w = f(w, z, R, T, $, 4, a[44]), T = f(T, w, z, R, K, 11, a[45]), R = f(R, T, w, z, q, 16, a[46]), z = f(z, R, T, w, b, 23, a[47]), w = h(w, z, R, T, m, 6, a[48]), T = h(T, w, z, R, k, 10, a[49]), R = h(R, T, w, z, V, 15, a[50]), z = h(z, R, T, w, y, 21, a[51]), w = h(w, z, R, T, K, 6, a[52]), T = h(T, w, z, R, F, 10, a[53]), R = h(R, T, w, z, P, 15, a[54]), z = h(z, R, T, w, g, 21, a[55]), w = h(w, z, R, T, S, 6, a[56]), T = h(T, w, z, R, q, 10, a[57]), R = h(R, T, w, z, D, 15, a[58]), z = h(z, R, T, w, j, 21, a[59]), w = h(w, z, R, T, H, 6, a[60]), T = h(T, w, z, R, I, 10, a[61]), R = h(R, T, w, z, b, 15, a[62]), z = h(z, R, T, w, $, 21, a[63]), p[0] = p[0] + w | 0, p[1] = p[1] + z | 0, p[2] = p[2] + R | 0, p[3] = p[3] + T | 0;
          },
          _doFinalize: function() {
            var B = this._data, v = B.words, C = this._nDataBytes * 8, c = B.sigBytes * 8;
            v[c >>> 5] |= 128 << 24 - c % 32;
            var u = t.floor(C / 4294967296), p = C;
            v[(c + 64 >>> 9 << 4) + 15] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, v[(c + 64 >>> 9 << 4) + 14] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, B.sigBytes = (v.length + 1) * 4, this._process();
            for (var m = this._hash, g = m.words, b = 0; b < 4; b++) {
              var F = g[b];
              g[b] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360;
            }
            return m;
          },
          clone: function() {
            var B = d.clone.call(this);
            return B._hash = this._hash.clone(), B;
          }
        });
        function E(B, v, C, c, u, p, m) {
          var g = B + (v & C | ~v & c) + u + m;
          return (g << p | g >>> 32 - p) + v;
        }
        function o(B, v, C, c, u, p, m) {
          var g = B + (v & c | C & ~c) + u + m;
          return (g << p | g >>> 32 - p) + v;
        }
        function f(B, v, C, c, u, p, m) {
          var g = B + (v ^ C ^ c) + u + m;
          return (g << p | g >>> 32 - p) + v;
        }
        function h(B, v, C, c, u, p, m) {
          var g = B + (C ^ (v | ~c)) + u + m;
          return (g << p | g >>> 32 - p) + v;
        }
        i.MD5 = d._createHelper(x), i.HmacMD5 = d._createHmacHelper(x);
      }(Math), n.MD5;
    });
  }(oe)), oe.exports;
}
var se = { exports: {} }, wr;
function at() {
  return wr || (wr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.WordArray, A = i.Hasher, d = t.algo, s = [], a = d.SHA1 = A.extend({
          _doReset: function() {
            this._hash = new l.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(x, E) {
            for (var o = this._hash.words, f = o[0], h = o[1], B = o[2], v = o[3], C = o[4], c = 0; c < 80; c++) {
              if (c < 16)
                s[c] = x[E + c] | 0;
              else {
                var u = s[c - 3] ^ s[c - 8] ^ s[c - 14] ^ s[c - 16];
                s[c] = u << 1 | u >>> 31;
              }
              var p = (f << 5 | f >>> 27) + C + s[c];
              c < 20 ? p += (h & B | ~h & v) + 1518500249 : c < 40 ? p += (h ^ B ^ v) + 1859775393 : c < 60 ? p += (h & B | h & v | B & v) - 1894007588 : p += (h ^ B ^ v) - 899497514, C = v, v = B, B = h << 30 | h >>> 2, h = f, f = p;
            }
            o[0] = o[0] + f | 0, o[1] = o[1] + h | 0, o[2] = o[2] + B | 0, o[3] = o[3] + v | 0, o[4] = o[4] + C | 0;
          },
          _doFinalize: function() {
            var x = this._data, E = x.words, o = this._nDataBytes * 8, f = x.sigBytes * 8;
            return E[f >>> 5] |= 128 << 24 - f % 32, E[(f + 64 >>> 9 << 4) + 14] = Math.floor(o / 4294967296), E[(f + 64 >>> 9 << 4) + 15] = o, x.sigBytes = E.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var x = A.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        t.SHA1 = A._createHelper(a), t.HmacSHA1 = A._createHmacHelper(a);
      }(), n.SHA1;
    });
  }(se)), se.exports;
}
var ce = { exports: {} }, kr;
function je() {
  return kr || (kr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      return function(t) {
        var i = n, l = i.lib, A = l.WordArray, d = l.Hasher, s = i.algo, a = [], x = [];
        (function() {
          function f(C) {
            for (var c = t.sqrt(C), u = 2; u <= c; u++)
              if (!(C % u))
                return !1;
            return !0;
          }
          function h(C) {
            return (C - (C | 0)) * 4294967296 | 0;
          }
          for (var B = 2, v = 0; v < 64; )
            f(B) && (v < 8 && (a[v] = h(t.pow(B, 1 / 2))), x[v] = h(t.pow(B, 1 / 3)), v++), B++;
        })();
        var E = [], o = s.SHA256 = d.extend({
          _doReset: function() {
            this._hash = new A.init(a.slice(0));
          },
          _doProcessBlock: function(f, h) {
            for (var B = this._hash.words, v = B[0], C = B[1], c = B[2], u = B[3], p = B[4], m = B[5], g = B[6], b = B[7], F = 0; F < 64; F++) {
              if (F < 16)
                E[F] = f[h + F] | 0;
              else {
                var H = E[F - 15], y = (H << 25 | H >>> 7) ^ (H << 14 | H >>> 18) ^ H >>> 3, D = E[F - 2], k = (D << 15 | D >>> 17) ^ (D << 13 | D >>> 19) ^ D >>> 10;
                E[F] = y + E[F - 7] + k + E[F - 16];
              }
              var S = p & m ^ ~p & g, $ = v & C ^ v & c ^ C & c, P = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), I = (p << 26 | p >>> 6) ^ (p << 21 | p >>> 11) ^ (p << 7 | p >>> 25), K = b + I + S + x[F] + E[F], j = P + $;
              b = g, g = m, m = p, p = u + K | 0, u = c, c = C, C = v, v = K + j | 0;
            }
            B[0] = B[0] + v | 0, B[1] = B[1] + C | 0, B[2] = B[2] + c | 0, B[3] = B[3] + u | 0, B[4] = B[4] + p | 0, B[5] = B[5] + m | 0, B[6] = B[6] + g | 0, B[7] = B[7] + b | 0;
          },
          _doFinalize: function() {
            var f = this._data, h = f.words, B = this._nDataBytes * 8, v = f.sigBytes * 8;
            return h[v >>> 5] |= 128 << 24 - v % 32, h[(v + 64 >>> 9 << 4) + 14] = t.floor(B / 4294967296), h[(v + 64 >>> 9 << 4) + 15] = B, f.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = d.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        i.SHA256 = d._createHelper(o), i.HmacSHA256 = d._createHmacHelper(o);
      }(Math), n.SHA256;
    });
  }(ce)), ce.exports;
}
var fe = { exports: {} }, Sr;
function Nt() {
  return Sr || (Sr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), je());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.WordArray, A = t.algo, d = A.SHA256, s = A.SHA224 = d.extend({
          _doReset: function() {
            this._hash = new l.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var a = d._doFinalize.call(this);
            return a.sigBytes -= 4, a;
          }
        });
        t.SHA224 = d._createHelper(s), t.HmacSHA224 = d._createHmacHelper(s);
      }(), n.SHA224;
    });
  }(fe)), fe.exports;
}
var ue = { exports: {} }, Tr;
function xt() {
  return Tr || (Tr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), X0());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.Hasher, A = t.x64, d = A.Word, s = A.WordArray, a = t.algo;
        function x() {
          return d.create.apply(d, arguments);
        }
        var E = [
          x(1116352408, 3609767458),
          x(1899447441, 602891725),
          x(3049323471, 3964484399),
          x(3921009573, 2173295548),
          x(961987163, 4081628472),
          x(1508970993, 3053834265),
          x(2453635748, 2937671579),
          x(2870763221, 3664609560),
          x(3624381080, 2734883394),
          x(310598401, 1164996542),
          x(607225278, 1323610764),
          x(1426881987, 3590304994),
          x(1925078388, 4068182383),
          x(2162078206, 991336113),
          x(2614888103, 633803317),
          x(3248222580, 3479774868),
          x(3835390401, 2666613458),
          x(4022224774, 944711139),
          x(264347078, 2341262773),
          x(604807628, 2007800933),
          x(770255983, 1495990901),
          x(1249150122, 1856431235),
          x(1555081692, 3175218132),
          x(1996064986, 2198950837),
          x(2554220882, 3999719339),
          x(2821834349, 766784016),
          x(2952996808, 2566594879),
          x(3210313671, 3203337956),
          x(3336571891, 1034457026),
          x(3584528711, 2466948901),
          x(113926993, 3758326383),
          x(338241895, 168717936),
          x(666307205, 1188179964),
          x(773529912, 1546045734),
          x(1294757372, 1522805485),
          x(1396182291, 2643833823),
          x(1695183700, 2343527390),
          x(1986661051, 1014477480),
          x(2177026350, 1206759142),
          x(2456956037, 344077627),
          x(2730485921, 1290863460),
          x(2820302411, 3158454273),
          x(3259730800, 3505952657),
          x(3345764771, 106217008),
          x(3516065817, 3606008344),
          x(3600352804, 1432725776),
          x(4094571909, 1467031594),
          x(275423344, 851169720),
          x(430227734, 3100823752),
          x(506948616, 1363258195),
          x(659060556, 3750685593),
          x(883997877, 3785050280),
          x(958139571, 3318307427),
          x(1322822218, 3812723403),
          x(1537002063, 2003034995),
          x(1747873779, 3602036899),
          x(1955562222, 1575990012),
          x(2024104815, 1125592928),
          x(2227730452, 2716904306),
          x(2361852424, 442776044),
          x(2428436474, 593698344),
          x(2756734187, 3733110249),
          x(3204031479, 2999351573),
          x(3329325298, 3815920427),
          x(3391569614, 3928383900),
          x(3515267271, 566280711),
          x(3940187606, 3454069534),
          x(4118630271, 4000239992),
          x(116418474, 1914138554),
          x(174292421, 2731055270),
          x(289380356, 3203993006),
          x(460393269, 320620315),
          x(685471733, 587496836),
          x(852142971, 1086792851),
          x(1017036298, 365543100),
          x(1126000580, 2618297676),
          x(1288033470, 3409855158),
          x(1501505948, 4234509866),
          x(1607167915, 987167468),
          x(1816402316, 1246189591)
        ], o = [];
        (function() {
          for (var h = 0; h < 80; h++)
            o[h] = x();
        })();
        var f = a.SHA512 = l.extend({
          _doReset: function() {
            this._hash = new s.init([
              new d.init(1779033703, 4089235720),
              new d.init(3144134277, 2227873595),
              new d.init(1013904242, 4271175723),
              new d.init(2773480762, 1595750129),
              new d.init(1359893119, 2917565137),
              new d.init(2600822924, 725511199),
              new d.init(528734635, 4215389547),
              new d.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(h, B) {
            for (var v = this._hash.words, C = v[0], c = v[1], u = v[2], p = v[3], m = v[4], g = v[5], b = v[6], F = v[7], H = C.high, y = C.low, D = c.high, k = c.low, S = u.high, $ = u.low, P = p.high, I = p.low, K = m.high, j = m.low, V = g.high, q = g.low, w = b.high, z = b.low, R = F.high, T = F.low, X = H, M = y, Q = D, U = k, w0 = S, y0 = $, J0 = P, k0 = I, t0 = K, Y = j, U0 = V, S0 = q, N0 = w, T0 = z, ee = R, z0 = T, n0 = 0; n0 < 80; n0++) {
              var e0, c0, j0 = o[n0];
              if (n0 < 16)
                c0 = j0.high = h[B + n0 * 2] | 0, e0 = j0.low = h[B + n0 * 2 + 1] | 0;
              else {
                var cr = o[n0 - 15], g0 = cr.high, R0 = cr.low, At = (g0 >>> 1 | R0 << 31) ^ (g0 >>> 8 | R0 << 24) ^ g0 >>> 7, fr = (R0 >>> 1 | g0 << 31) ^ (R0 >>> 8 | g0 << 24) ^ (R0 >>> 7 | g0 << 25), ur = o[n0 - 2], m0 = ur.high, H0 = ur.low, Ct = (m0 >>> 19 | H0 << 13) ^ (m0 << 3 | H0 >>> 29) ^ m0 >>> 6, lr = (H0 >>> 19 | m0 << 13) ^ (H0 << 3 | m0 >>> 29) ^ (H0 >>> 6 | m0 << 26), dr = o[n0 - 7], yt = dr.high, gt = dr.low, hr = o[n0 - 16], mt = hr.high, vr = hr.low;
                e0 = fr + gt, c0 = At + yt + (e0 >>> 0 < fr >>> 0 ? 1 : 0), e0 = e0 + lr, c0 = c0 + Ct + (e0 >>> 0 < lr >>> 0 ? 1 : 0), e0 = e0 + vr, c0 = c0 + mt + (e0 >>> 0 < vr >>> 0 ? 1 : 0), j0.high = c0, j0.low = e0;
              }
              var bt = t0 & U0 ^ ~t0 & N0, pr = Y & S0 ^ ~Y & T0, Dt = X & Q ^ X & w0 ^ Q & w0, Ft = M & U ^ M & y0 ^ U & y0, _t = (X >>> 28 | M << 4) ^ (X << 30 | M >>> 2) ^ (X << 25 | M >>> 7), Br = (M >>> 28 | X << 4) ^ (M << 30 | X >>> 2) ^ (M << 25 | X >>> 7), wt = (t0 >>> 14 | Y << 18) ^ (t0 >>> 18 | Y << 14) ^ (t0 << 23 | Y >>> 9), kt = (Y >>> 14 | t0 << 18) ^ (Y >>> 18 | t0 << 14) ^ (Y << 23 | t0 >>> 9), Er = E[n0], St = Er.high, Ar = Er.low, J = z0 + kt, f0 = ee + wt + (J >>> 0 < z0 >>> 0 ? 1 : 0), J = J + pr, f0 = f0 + bt + (J >>> 0 < pr >>> 0 ? 1 : 0), J = J + Ar, f0 = f0 + St + (J >>> 0 < Ar >>> 0 ? 1 : 0), J = J + e0, f0 = f0 + c0 + (J >>> 0 < e0 >>> 0 ? 1 : 0), Cr = Br + Ft, Tt = _t + Dt + (Cr >>> 0 < Br >>> 0 ? 1 : 0);
              ee = N0, z0 = T0, N0 = U0, T0 = S0, U0 = t0, S0 = Y, Y = k0 + J | 0, t0 = J0 + f0 + (Y >>> 0 < k0 >>> 0 ? 1 : 0) | 0, J0 = w0, k0 = y0, w0 = Q, y0 = U, Q = X, U = M, M = J + Cr | 0, X = f0 + Tt + (M >>> 0 < J >>> 0 ? 1 : 0) | 0;
            }
            y = C.low = y + M, C.high = H + X + (y >>> 0 < M >>> 0 ? 1 : 0), k = c.low = k + U, c.high = D + Q + (k >>> 0 < U >>> 0 ? 1 : 0), $ = u.low = $ + y0, u.high = S + w0 + ($ >>> 0 < y0 >>> 0 ? 1 : 0), I = p.low = I + k0, p.high = P + J0 + (I >>> 0 < k0 >>> 0 ? 1 : 0), j = m.low = j + Y, m.high = K + t0 + (j >>> 0 < Y >>> 0 ? 1 : 0), q = g.low = q + S0, g.high = V + U0 + (q >>> 0 < S0 >>> 0 ? 1 : 0), z = b.low = z + T0, b.high = w + N0 + (z >>> 0 < T0 >>> 0 ? 1 : 0), T = F.low = T + z0, F.high = R + ee + (T >>> 0 < z0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var h = this._data, B = h.words, v = this._nDataBytes * 8, C = h.sigBytes * 8;
            B[C >>> 5] |= 128 << 24 - C % 32, B[(C + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), B[(C + 128 >>> 10 << 5) + 31] = v, h.sigBytes = B.length * 4, this._process();
            var c = this._hash.toX32();
            return c;
          },
          clone: function() {
            var h = l.clone.call(this);
            return h._hash = this._hash.clone(), h;
          },
          blockSize: 1024 / 32
        });
        t.SHA512 = l._createHelper(f), t.HmacSHA512 = l._createHmacHelper(f);
      }(), n.SHA512;
    });
  }(ue)), ue.exports;
}
var le = { exports: {} }, zr;
function jt() {
  return zr || (zr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), X0(), xt());
    })(O, function(n) {
      return function() {
        var t = n, i = t.x64, l = i.Word, A = i.WordArray, d = t.algo, s = d.SHA512, a = d.SHA384 = s.extend({
          _doReset: function() {
            this._hash = new A.init([
              new l.init(3418070365, 3238371032),
              new l.init(1654270250, 914150663),
              new l.init(2438529370, 812702999),
              new l.init(355462360, 4144912697),
              new l.init(1731405415, 4290775857),
              new l.init(2394180231, 1750603025),
              new l.init(3675008525, 1694076839),
              new l.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var x = s._doFinalize.call(this);
            return x.sigBytes -= 16, x;
          }
        });
        t.SHA384 = s._createHelper(a), t.HmacSHA384 = s._createHmacHelper(a);
      }(), n.SHA384;
    });
  }(le)), le.exports;
}
var de = { exports: {} }, Rr;
function qt() {
  return Rr || (Rr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), X0());
    })(O, function(n) {
      return function(t) {
        var i = n, l = i.lib, A = l.WordArray, d = l.Hasher, s = i.x64, a = s.Word, x = i.algo, E = [], o = [], f = [];
        (function() {
          for (var v = 1, C = 0, c = 0; c < 24; c++) {
            E[v + 5 * C] = (c + 1) * (c + 2) / 2 % 64;
            var u = C % 5, p = (2 * v + 3 * C) % 5;
            v = u, C = p;
          }
          for (var v = 0; v < 5; v++)
            for (var C = 0; C < 5; C++)
              o[v + 5 * C] = C + (2 * v + 3 * C) % 5 * 5;
          for (var m = 1, g = 0; g < 24; g++) {
            for (var b = 0, F = 0, H = 0; H < 7; H++) {
              if (m & 1) {
                var y = (1 << H) - 1;
                y < 32 ? F ^= 1 << y : b ^= 1 << y - 32;
              }
              m & 128 ? m = m << 1 ^ 113 : m <<= 1;
            }
            f[g] = a.create(b, F);
          }
        })();
        var h = [];
        (function() {
          for (var v = 0; v < 25; v++)
            h[v] = a.create();
        })();
        var B = x.SHA3 = d.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: d.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var v = this._state = [], C = 0; C < 25; C++)
              v[C] = new a.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, C) {
            for (var c = this._state, u = this.blockSize / 2, p = 0; p < u; p++) {
              var m = v[C + 2 * p], g = v[C + 2 * p + 1];
              m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, g = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
              var b = c[p];
              b.high ^= g, b.low ^= m;
            }
            for (var F = 0; F < 24; F++) {
              for (var H = 0; H < 5; H++) {
                for (var y = 0, D = 0, k = 0; k < 5; k++) {
                  var b = c[H + 5 * k];
                  y ^= b.high, D ^= b.low;
                }
                var S = h[H];
                S.high = y, S.low = D;
              }
              for (var H = 0; H < 5; H++)
                for (var $ = h[(H + 4) % 5], P = h[(H + 1) % 5], I = P.high, K = P.low, y = $.high ^ (I << 1 | K >>> 31), D = $.low ^ (K << 1 | I >>> 31), k = 0; k < 5; k++) {
                  var b = c[H + 5 * k];
                  b.high ^= y, b.low ^= D;
                }
              for (var j = 1; j < 25; j++) {
                var y, D, b = c[j], V = b.high, q = b.low, w = E[j];
                w < 32 ? (y = V << w | q >>> 32 - w, D = q << w | V >>> 32 - w) : (y = q << w - 32 | V >>> 64 - w, D = V << w - 32 | q >>> 64 - w);
                var z = h[o[j]];
                z.high = y, z.low = D;
              }
              var R = h[0], T = c[0];
              R.high = T.high, R.low = T.low;
              for (var H = 0; H < 5; H++)
                for (var k = 0; k < 5; k++) {
                  var j = H + 5 * k, b = c[j], X = h[j], M = h[(H + 1) % 5 + 5 * k], Q = h[(H + 2) % 5 + 5 * k];
                  b.high = X.high ^ ~M.high & Q.high, b.low = X.low ^ ~M.low & Q.low;
                }
              var b = c[0], U = f[F];
              b.high ^= U.high, b.low ^= U.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, C = v.words;
            this._nDataBytes * 8;
            var c = v.sigBytes * 8, u = this.blockSize * 32;
            C[c >>> 5] |= 1 << 24 - c % 32, C[(t.ceil((c + 1) / u) * u >>> 5) - 1] |= 128, v.sigBytes = C.length * 4, this._process();
            for (var p = this._state, m = this.cfg.outputLength / 8, g = m / 8, b = [], F = 0; F < g; F++) {
              var H = p[F], y = H.high, D = H.low;
              y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, b.push(D), b.push(y);
            }
            return new A.init(b, m);
          },
          clone: function() {
            for (var v = d.clone.call(this), C = v._state = this._state.slice(0), c = 0; c < 25; c++)
              C[c] = C[c].clone();
            return v;
          }
        });
        i.SHA3 = d._createHelper(B), i.HmacSHA3 = d._createHmacHelper(B);
      }(Math), n.SHA3;
    });
  }(de)), de.exports;
}
var he = { exports: {} }, Hr;
function Wt() {
  return Hr || (Hr = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(t) {
        var i = n, l = i.lib, A = l.WordArray, d = l.Hasher, s = i.algo, a = A.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), x = A.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), E = A.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), o = A.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), f = A.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), h = A.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), B = s.RIPEMD160 = d.extend({
          _doReset: function() {
            this._hash = A.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(g, b) {
            for (var F = 0; F < 16; F++) {
              var H = b + F, y = g[H];
              g[H] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360;
            }
            var D = this._hash.words, k = f.words, S = h.words, $ = a.words, P = x.words, I = E.words, K = o.words, j, V, q, w, z, R, T, X, M, Q;
            R = j = D[0], T = V = D[1], X = q = D[2], M = w = D[3], Q = z = D[4];
            for (var U, F = 0; F < 80; F += 1)
              U = j + g[b + $[F]] | 0, F < 16 ? U += v(V, q, w) + k[0] : F < 32 ? U += C(V, q, w) + k[1] : F < 48 ? U += c(V, q, w) + k[2] : F < 64 ? U += u(V, q, w) + k[3] : U += p(V, q, w) + k[4], U = U | 0, U = m(U, I[F]), U = U + z | 0, j = z, z = w, w = m(q, 10), q = V, V = U, U = R + g[b + P[F]] | 0, F < 16 ? U += p(T, X, M) + S[0] : F < 32 ? U += u(T, X, M) + S[1] : F < 48 ? U += c(T, X, M) + S[2] : F < 64 ? U += C(T, X, M) + S[3] : U += v(T, X, M) + S[4], U = U | 0, U = m(U, K[F]), U = U + Q | 0, R = Q, Q = M, M = m(X, 10), X = T, T = U;
            U = D[1] + q + M | 0, D[1] = D[2] + w + Q | 0, D[2] = D[3] + z + R | 0, D[3] = D[4] + j + T | 0, D[4] = D[0] + V + X | 0, D[0] = U;
          },
          _doFinalize: function() {
            var g = this._data, b = g.words, F = this._nDataBytes * 8, H = g.sigBytes * 8;
            b[H >>> 5] |= 128 << 24 - H % 32, b[(H + 64 >>> 9 << 4) + 14] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, g.sigBytes = (b.length + 1) * 4, this._process();
            for (var y = this._hash, D = y.words, k = 0; k < 5; k++) {
              var S = D[k];
              D[k] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            return y;
          },
          clone: function() {
            var g = d.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        function v(g, b, F) {
          return g ^ b ^ F;
        }
        function C(g, b, F) {
          return g & b | ~g & F;
        }
        function c(g, b, F) {
          return (g | ~b) ^ F;
        }
        function u(g, b, F) {
          return g & F | b & ~F;
        }
        function p(g, b, F) {
          return g ^ (b | ~F);
        }
        function m(g, b) {
          return g << b | g >>> 32 - b;
        }
        i.RIPEMD160 = d._createHelper(B), i.HmacRIPEMD160 = d._createHmacHelper(B);
      }(), n.RIPEMD160;
    });
  }(he)), he.exports;
}
var ve = { exports: {} }, $r;
function qe() {
  return $r || ($r = 1, function(r, e) {
    (function(n, t) {
      r.exports = t(N());
    })(O, function(n) {
      (function() {
        var t = n, i = t.lib, l = i.Base, A = t.enc, d = A.Utf8, s = t.algo;
        s.HMAC = l.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(a, x) {
            a = this._hasher = new a.init(), typeof x == "string" && (x = d.parse(x));
            var E = a.blockSize, o = E * 4;
            x.sigBytes > o && (x = a.finalize(x)), x.clamp();
            for (var f = this._oKey = x.clone(), h = this._iKey = x.clone(), B = f.words, v = h.words, C = 0; C < E; C++)
              B[C] ^= 1549556828, v[C] ^= 909522486;
            f.sigBytes = h.sigBytes = o, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var a = this._hasher;
            a.reset(), a.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(a) {
            return this._hasher.update(a), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(a) {
            var x = this._hasher, E = x.finalize(a);
            x.reset();
            var o = x.finalize(this._oKey.clone().concat(E));
            return o;
          }
        });
      })();
    });
  }(ve)), ve.exports;
}
var pe = { exports: {} }, Pr;
function Lt() {
  return Pr || (Pr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), je(), qe());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.Base, A = i.WordArray, d = t.algo, s = d.SHA256, a = d.HMAC, x = d.PBKDF2 = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: l.extend({
            keySize: 128 / 32,
            hasher: s,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(E) {
            this.cfg = this.cfg.extend(E);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(E, o) {
            for (var f = this.cfg, h = a.create(f.hasher, E), B = A.create(), v = A.create([1]), C = B.words, c = v.words, u = f.keySize, p = f.iterations; C.length < u; ) {
              var m = h.update(o).finalize(v);
              h.reset();
              for (var g = m.words, b = g.length, F = m, H = 1; H < p; H++) {
                F = h.finalize(F), h.reset();
                for (var y = F.words, D = 0; D < b; D++)
                  g[D] ^= y[D];
              }
              B.concat(m), c[0]++;
            }
            return B.sigBytes = u * 4, B;
          }
        });
        t.PBKDF2 = function(E, o, f) {
          return x.create(f).compute(E, o);
        };
      }(), n.PBKDF2;
    });
  }(pe)), pe.exports;
}
var Be = { exports: {} }, Ir;
function v0() {
  return Ir || (Ir = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), at(), qe());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.Base, A = i.WordArray, d = t.algo, s = d.MD5, a = d.EvpKDF = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: l.extend({
            keySize: 128 / 32,
            hasher: s,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(x) {
            this.cfg = this.cfg.extend(x);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(x, E) {
            for (var o, f = this.cfg, h = f.hasher.create(), B = A.create(), v = B.words, C = f.keySize, c = f.iterations; v.length < C; ) {
              o && h.update(o), o = h.update(x).finalize(E), h.reset();
              for (var u = 1; u < c; u++)
                o = h.finalize(o), h.reset();
              B.concat(o);
            }
            return B.sigBytes = C * 4, B;
          }
        });
        t.EvpKDF = function(x, E, o) {
          return a.create(o).compute(x, E);
        };
      }(), n.EvpKDF;
    });
  }(Be)), Be.exports;
}
var Ee = { exports: {} }, Or;
function Z() {
  return Or || (Or = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), v0());
    })(O, function(n) {
      n.lib.Cipher || function(t) {
        var i = n, l = i.lib, A = l.Base, d = l.WordArray, s = l.BufferedBlockAlgorithm, a = i.enc;
        a.Utf8;
        var x = a.Base64, E = i.algo, o = E.EvpKDF, f = l.Cipher = s.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: A.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(y, D) {
            return this.create(this._ENC_XFORM_MODE, y, D);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(y, D) {
            return this.create(this._DEC_XFORM_MODE, y, D);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(y, D, k) {
            this.cfg = this.cfg.extend(k), this._xformMode = y, this._key = D, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            s.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(y) {
            return this._append(y), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(y) {
            y && this._append(y);
            var D = this._doFinalize();
            return D;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function y(D) {
              return typeof D == "string" ? H : g;
            }
            return function(D) {
              return {
                encrypt: function(k, S, $) {
                  return y(S).encrypt(D, k, S, $);
                },
                decrypt: function(k, S, $) {
                  return y(S).decrypt(D, k, S, $);
                }
              };
            };
          }()
        });
        l.StreamCipher = f.extend({
          _doFinalize: function() {
            var y = this._process(!0);
            return y;
          },
          blockSize: 1
        });
        var h = i.mode = {}, B = l.BlockCipherMode = A.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(y, D) {
            return this.Encryptor.create(y, D);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(y, D) {
            return this.Decryptor.create(y, D);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(y, D) {
            this._cipher = y, this._iv = D;
          }
        }), v = h.CBC = function() {
          var y = B.extend();
          y.Encryptor = y.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(k, S) {
              var $ = this._cipher, P = $.blockSize;
              D.call(this, k, S, P), $.encryptBlock(k, S), this._prevBlock = k.slice(S, S + P);
            }
          }), y.Decryptor = y.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(k, S) {
              var $ = this._cipher, P = $.blockSize, I = k.slice(S, S + P);
              $.decryptBlock(k, S), D.call(this, k, S, P), this._prevBlock = I;
            }
          });
          function D(k, S, $) {
            var P, I = this._iv;
            I ? (P = I, this._iv = t) : P = this._prevBlock;
            for (var K = 0; K < $; K++)
              k[S + K] ^= P[K];
          }
          return y;
        }(), C = i.pad = {}, c = C.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(y, D) {
            for (var k = D * 4, S = k - y.sigBytes % k, $ = S << 24 | S << 16 | S << 8 | S, P = [], I = 0; I < S; I += 4)
              P.push($);
            var K = d.create(P, S);
            y.concat(K);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(y) {
            var D = y.words[y.sigBytes - 1 >>> 2] & 255;
            y.sigBytes -= D;
          }
        };
        l.BlockCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: f.cfg.extend({
            mode: v,
            padding: c
          }),
          reset: function() {
            var y;
            f.reset.call(this);
            var D = this.cfg, k = D.iv, S = D.mode;
            this._xformMode == this._ENC_XFORM_MODE ? y = S.createEncryptor : (y = S.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == y ? this._mode.init(this, k && k.words) : (this._mode = y.call(S, this, k && k.words), this._mode.__creator = y);
          },
          _doProcessBlock: function(y, D) {
            this._mode.processBlock(y, D);
          },
          _doFinalize: function() {
            var y, D = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (D.pad(this._data, this.blockSize), y = this._process(!0)) : (y = this._process(!0), D.unpad(y)), y;
          },
          blockSize: 128 / 32
        });
        var u = l.CipherParams = A.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(y) {
            this.mixIn(y);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(y) {
            return (y || this.formatter).stringify(this);
          }
        }), p = i.format = {}, m = p.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(y) {
            var D, k = y.ciphertext, S = y.salt;
            return S ? D = d.create([1398893684, 1701076831]).concat(S).concat(k) : D = k, D.toString(x);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(y) {
            var D, k = x.parse(y), S = k.words;
            return S[0] == 1398893684 && S[1] == 1701076831 && (D = d.create(S.slice(2, 4)), S.splice(0, 4), k.sigBytes -= 16), u.create({ ciphertext: k, salt: D });
          }
        }, g = l.SerializableCipher = A.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: A.extend({
            format: m
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(y, D, k, S) {
            S = this.cfg.extend(S);
            var $ = y.createEncryptor(k, S), P = $.finalize(D), I = $.cfg;
            return u.create({
              ciphertext: P,
              key: k,
              iv: I.iv,
              algorithm: y,
              mode: I.mode,
              padding: I.padding,
              blockSize: y.blockSize,
              formatter: S.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(y, D, k, S) {
            S = this.cfg.extend(S), D = this._parse(D, S.format);
            var $ = y.createDecryptor(k, S).finalize(D.ciphertext);
            return $;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(y, D) {
            return typeof y == "string" ? D.parse(y, this) : y;
          }
        }), b = i.kdf = {}, F = b.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(y, D, k, S, $) {
            if (S || (S = d.random(64 / 8)), $)
              var P = o.create({ keySize: D + k, hasher: $ }).compute(y, S);
            else
              var P = o.create({ keySize: D + k }).compute(y, S);
            var I = d.create(P.words.slice(D), k * 4);
            return P.sigBytes = D * 4, u.create({ key: P, iv: I, salt: S });
          }
        }, H = l.PasswordBasedCipher = g.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: g.cfg.extend({
            kdf: F
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(y, D, k, S) {
            S = this.cfg.extend(S);
            var $ = S.kdf.execute(k, y.keySize, y.ivSize, S.salt, S.hasher);
            S.iv = $.iv;
            var P = g.encrypt.call(this, y, D, $.key, S);
            return P.mixIn($), P;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(y, D, k, S) {
            S = this.cfg.extend(S), D = this._parse(D, S.format);
            var $ = S.kdf.execute(k, y.keySize, y.ivSize, D.salt, S.hasher);
            S.iv = $.iv;
            var P = g.decrypt.call(this, y, D, $.key, S);
            return P;
          }
        });
      }();
    });
  }(Ee)), Ee.exports;
}
var Ae = { exports: {} }, Ur;
function Vt() {
  return Ur || (Ur = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.mode.CFB = function() {
        var t = n.lib.BlockCipherMode.extend();
        t.Encryptor = t.extend({
          processBlock: function(l, A) {
            var d = this._cipher, s = d.blockSize;
            i.call(this, l, A, s, d), this._prevBlock = l.slice(A, A + s);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(l, A) {
            var d = this._cipher, s = d.blockSize, a = l.slice(A, A + s);
            i.call(this, l, A, s, d), this._prevBlock = a;
          }
        });
        function i(l, A, d, s) {
          var a, x = this._iv;
          x ? (a = x.slice(0), this._iv = void 0) : a = this._prevBlock, s.encryptBlock(a, 0);
          for (var E = 0; E < d; E++)
            l[A + E] ^= a[E];
        }
        return t;
      }(), n.mode.CFB;
    });
  }(Ae)), Ae.exports;
}
var Ce = { exports: {} }, Nr;
function Mt() {
  return Nr || (Nr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.mode.CTR = function() {
        var t = n.lib.BlockCipherMode.extend(), i = t.Encryptor = t.extend({
          processBlock: function(l, A) {
            var d = this._cipher, s = d.blockSize, a = this._iv, x = this._counter;
            a && (x = this._counter = a.slice(0), this._iv = void 0);
            var E = x.slice(0);
            d.encryptBlock(E, 0), x[s - 1] = x[s - 1] + 1 | 0;
            for (var o = 0; o < s; o++)
              l[A + o] ^= E[o];
          }
        });
        return t.Decryptor = i, t;
      }(), n.mode.CTR;
    });
  }(Ce)), Ce.exports;
}
var ye = { exports: {} }, jr;
function Kt() {
  return jr || (jr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var t = n.lib.BlockCipherMode.extend();
        function i(d) {
          if ((d >> 24 & 255) === 255) {
            var s = d >> 16 & 255, a = d >> 8 & 255, x = d & 255;
            s === 255 ? (s = 0, a === 255 ? (a = 0, x === 255 ? x = 0 : ++x) : ++a) : ++s, d = 0, d += s << 16, d += a << 8, d += x;
          } else
            d += 1 << 24;
          return d;
        }
        function l(d) {
          return (d[0] = i(d[0])) === 0 && (d[1] = i(d[1])), d;
        }
        var A = t.Encryptor = t.extend({
          processBlock: function(d, s) {
            var a = this._cipher, x = a.blockSize, E = this._iv, o = this._counter;
            E && (o = this._counter = E.slice(0), this._iv = void 0), l(o);
            var f = o.slice(0);
            a.encryptBlock(f, 0);
            for (var h = 0; h < x; h++)
              d[s + h] ^= f[h];
          }
        });
        return t.Decryptor = A, t;
      }(), n.mode.CTRGladman;
    });
  }(ye)), ye.exports;
}
var ge = { exports: {} }, qr;
function Gt() {
  return qr || (qr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.mode.OFB = function() {
        var t = n.lib.BlockCipherMode.extend(), i = t.Encryptor = t.extend({
          processBlock: function(l, A) {
            var d = this._cipher, s = d.blockSize, a = this._iv, x = this._keystream;
            a && (x = this._keystream = a.slice(0), this._iv = void 0), d.encryptBlock(x, 0);
            for (var E = 0; E < s; E++)
              l[A + E] ^= x[E];
          }
        });
        return t.Decryptor = i, t;
      }(), n.mode.OFB;
    });
  }(ge)), ge.exports;
}
var me = { exports: {} }, Wr;
function Xt() {
  return Wr || (Wr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.mode.ECB = function() {
        var t = n.lib.BlockCipherMode.extend();
        return t.Encryptor = t.extend({
          processBlock: function(i, l) {
            this._cipher.encryptBlock(i, l);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(i, l) {
            this._cipher.decryptBlock(i, l);
          }
        }), t;
      }(), n.mode.ECB;
    });
  }(me)), me.exports;
}
var be = { exports: {} }, Lr;
function Zt() {
  return Lr || (Lr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(t, i) {
          var l = t.sigBytes, A = i * 4, d = A - l % A, s = l + d - 1;
          t.clamp(), t.words[s >>> 2] |= d << 24 - s % 4 * 8, t.sigBytes += d;
        },
        unpad: function(t) {
          var i = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= i;
        }
      }, n.pad.Ansix923;
    });
  }(be)), be.exports;
}
var De = { exports: {} }, Vr;
function Qt() {
  return Vr || (Vr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.pad.Iso10126 = {
        pad: function(t, i) {
          var l = i * 4, A = l - t.sigBytes % l;
          t.concat(n.lib.WordArray.random(A - 1)).concat(n.lib.WordArray.create([A << 24], 1));
        },
        unpad: function(t) {
          var i = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= i;
        }
      }, n.pad.Iso10126;
    });
  }(De)), De.exports;
}
var Fe = { exports: {} }, Mr;
function Yt() {
  return Mr || (Mr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.pad.Iso97971 = {
        pad: function(t, i) {
          t.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(t, i);
        },
        unpad: function(t) {
          n.pad.ZeroPadding.unpad(t), t.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(Fe)), Fe.exports;
}
var _e = { exports: {} }, Kr;
function Jt() {
  return Kr || (Kr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.pad.ZeroPadding = {
        pad: function(t, i) {
          var l = i * 4;
          t.clamp(), t.sigBytes += l - (t.sigBytes % l || l);
        },
        unpad: function(t) {
          for (var i = t.words, l = t.sigBytes - 1, l = t.sigBytes - 1; l >= 0; l--)
            if (i[l >>> 2] >>> 24 - l % 4 * 8 & 255) {
              t.sigBytes = l + 1;
              break;
            }
        }
      }, n.pad.ZeroPadding;
    });
  }(_e)), _e.exports;
}
var we = { exports: {} }, Gr;
function en() {
  return Gr || (Gr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(we)), we.exports;
}
var ke = { exports: {} }, Xr;
function rn() {
  return Xr || (Xr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), Z());
    })(O, function(n) {
      return function(t) {
        var i = n, l = i.lib, A = l.CipherParams, d = i.enc, s = d.Hex, a = i.format;
        a.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(x) {
            return x.ciphertext.toString(s);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(x) {
            var E = s.parse(x);
            return A.create({ ciphertext: E });
          }
        };
      }(), n.format.Hex;
    });
  }(ke)), ke.exports;
}
var Se = { exports: {} }, Zr;
function tn() {
  return Zr || (Zr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), A0(), C0(), v0(), Z());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.BlockCipher, A = t.algo, d = [], s = [], a = [], x = [], E = [], o = [], f = [], h = [], B = [], v = [];
        (function() {
          for (var u = [], p = 0; p < 256; p++)
            p < 128 ? u[p] = p << 1 : u[p] = p << 1 ^ 283;
          for (var m = 0, g = 0, p = 0; p < 256; p++) {
            var b = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
            b = b >>> 8 ^ b & 255 ^ 99, d[m] = b, s[b] = m;
            var F = u[m], H = u[F], y = u[H], D = u[b] * 257 ^ b * 16843008;
            a[m] = D << 24 | D >>> 8, x[m] = D << 16 | D >>> 16, E[m] = D << 8 | D >>> 24, o[m] = D;
            var D = y * 16843009 ^ H * 65537 ^ F * 257 ^ m * 16843008;
            f[b] = D << 24 | D >>> 8, h[b] = D << 16 | D >>> 16, B[b] = D << 8 | D >>> 24, v[b] = D, m ? (m = F ^ u[u[u[y ^ F]]], g ^= u[u[g]]) : m = g = 1;
          }
        })();
        var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], c = A.AES = l.extend({
          _doReset: function() {
            var u;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var p = this._keyPriorReset = this._key, m = p.words, g = p.sigBytes / 4, b = this._nRounds = g + 6, F = (b + 1) * 4, H = this._keySchedule = [], y = 0; y < F; y++)
                y < g ? H[y] = m[y] : (u = H[y - 1], y % g ? g > 6 && y % g == 4 && (u = d[u >>> 24] << 24 | d[u >>> 16 & 255] << 16 | d[u >>> 8 & 255] << 8 | d[u & 255]) : (u = u << 8 | u >>> 24, u = d[u >>> 24] << 24 | d[u >>> 16 & 255] << 16 | d[u >>> 8 & 255] << 8 | d[u & 255], u ^= C[y / g | 0] << 24), H[y] = H[y - g] ^ u);
              for (var D = this._invKeySchedule = [], k = 0; k < F; k++) {
                var y = F - k;
                if (k % 4)
                  var u = H[y];
                else
                  var u = H[y - 4];
                k < 4 || y <= 4 ? D[k] = u : D[k] = f[d[u >>> 24]] ^ h[d[u >>> 16 & 255]] ^ B[d[u >>> 8 & 255]] ^ v[d[u & 255]];
              }
            }
          },
          encryptBlock: function(u, p) {
            this._doCryptBlock(u, p, this._keySchedule, a, x, E, o, d);
          },
          decryptBlock: function(u, p) {
            var m = u[p + 1];
            u[p + 1] = u[p + 3], u[p + 3] = m, this._doCryptBlock(u, p, this._invKeySchedule, f, h, B, v, s);
            var m = u[p + 1];
            u[p + 1] = u[p + 3], u[p + 3] = m;
          },
          _doCryptBlock: function(u, p, m, g, b, F, H, y) {
            for (var D = this._nRounds, k = u[p] ^ m[0], S = u[p + 1] ^ m[1], $ = u[p + 2] ^ m[2], P = u[p + 3] ^ m[3], I = 4, K = 1; K < D; K++) {
              var j = g[k >>> 24] ^ b[S >>> 16 & 255] ^ F[$ >>> 8 & 255] ^ H[P & 255] ^ m[I++], V = g[S >>> 24] ^ b[$ >>> 16 & 255] ^ F[P >>> 8 & 255] ^ H[k & 255] ^ m[I++], q = g[$ >>> 24] ^ b[P >>> 16 & 255] ^ F[k >>> 8 & 255] ^ H[S & 255] ^ m[I++], w = g[P >>> 24] ^ b[k >>> 16 & 255] ^ F[S >>> 8 & 255] ^ H[$ & 255] ^ m[I++];
              k = j, S = V, $ = q, P = w;
            }
            var j = (y[k >>> 24] << 24 | y[S >>> 16 & 255] << 16 | y[$ >>> 8 & 255] << 8 | y[P & 255]) ^ m[I++], V = (y[S >>> 24] << 24 | y[$ >>> 16 & 255] << 16 | y[P >>> 8 & 255] << 8 | y[k & 255]) ^ m[I++], q = (y[$ >>> 24] << 24 | y[P >>> 16 & 255] << 16 | y[k >>> 8 & 255] << 8 | y[S & 255]) ^ m[I++], w = (y[P >>> 24] << 24 | y[k >>> 16 & 255] << 16 | y[S >>> 8 & 255] << 8 | y[$ & 255]) ^ m[I++];
            u[p] = j, u[p + 1] = V, u[p + 2] = q, u[p + 3] = w;
          },
          keySize: 256 / 32
        });
        t.AES = l._createHelper(c);
      }(), n.AES;
    });
  }(Se)), Se.exports;
}
var Te = { exports: {} }, Qr;
function nn() {
  return Qr || (Qr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), A0(), C0(), v0(), Z());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.WordArray, A = i.BlockCipher, d = t.algo, s = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], a = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], x = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], E = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], o = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], f = d.DES = A.extend({
          _doReset: function() {
            for (var C = this._key, c = C.words, u = [], p = 0; p < 56; p++) {
              var m = s[p] - 1;
              u[p] = c[m >>> 5] >>> 31 - m % 32 & 1;
            }
            for (var g = this._subKeys = [], b = 0; b < 16; b++) {
              for (var F = g[b] = [], H = x[b], p = 0; p < 24; p++)
                F[p / 6 | 0] |= u[(a[p] - 1 + H) % 28] << 31 - p % 6, F[4 + (p / 6 | 0)] |= u[28 + (a[p + 24] - 1 + H) % 28] << 31 - p % 6;
              F[0] = F[0] << 1 | F[0] >>> 31;
              for (var p = 1; p < 7; p++)
                F[p] = F[p] >>> (p - 1) * 4 + 3;
              F[7] = F[7] << 5 | F[7] >>> 27;
            }
            for (var y = this._invSubKeys = [], p = 0; p < 16; p++)
              y[p] = g[15 - p];
          },
          encryptBlock: function(C, c) {
            this._doCryptBlock(C, c, this._subKeys);
          },
          decryptBlock: function(C, c) {
            this._doCryptBlock(C, c, this._invSubKeys);
          },
          _doCryptBlock: function(C, c, u) {
            this._lBlock = C[c], this._rBlock = C[c + 1], h.call(this, 4, 252645135), h.call(this, 16, 65535), B.call(this, 2, 858993459), B.call(this, 8, 16711935), h.call(this, 1, 1431655765);
            for (var p = 0; p < 16; p++) {
              for (var m = u[p], g = this._lBlock, b = this._rBlock, F = 0, H = 0; H < 8; H++)
                F |= E[H][((b ^ m[H]) & o[H]) >>> 0];
              this._lBlock = b, this._rBlock = g ^ F;
            }
            var y = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = y, h.call(this, 1, 1431655765), B.call(this, 8, 16711935), B.call(this, 2, 858993459), h.call(this, 16, 65535), h.call(this, 4, 252645135), C[c] = this._lBlock, C[c + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function h(C, c) {
          var u = (this._lBlock >>> C ^ this._rBlock) & c;
          this._rBlock ^= u, this._lBlock ^= u << C;
        }
        function B(C, c) {
          var u = (this._rBlock >>> C ^ this._lBlock) & c;
          this._lBlock ^= u, this._rBlock ^= u << C;
        }
        t.DES = A._createHelper(f);
        var v = d.TripleDES = A.extend({
          _doReset: function() {
            var C = this._key, c = C.words;
            if (c.length !== 2 && c.length !== 4 && c.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var u = c.slice(0, 2), p = c.length < 4 ? c.slice(0, 2) : c.slice(2, 4), m = c.length < 6 ? c.slice(0, 2) : c.slice(4, 6);
            this._des1 = f.createEncryptor(l.create(u)), this._des2 = f.createEncryptor(l.create(p)), this._des3 = f.createEncryptor(l.create(m));
          },
          encryptBlock: function(C, c) {
            this._des1.encryptBlock(C, c), this._des2.decryptBlock(C, c), this._des3.encryptBlock(C, c);
          },
          decryptBlock: function(C, c) {
            this._des3.decryptBlock(C, c), this._des2.encryptBlock(C, c), this._des1.decryptBlock(C, c);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        t.TripleDES = A._createHelper(v);
      }(), n.TripleDES;
    });
  }(Te)), Te.exports;
}
var ze = { exports: {} }, Yr;
function an() {
  return Yr || (Yr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), A0(), C0(), v0(), Z());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.StreamCipher, A = t.algo, d = A.RC4 = l.extend({
          _doReset: function() {
            for (var x = this._key, E = x.words, o = x.sigBytes, f = this._S = [], h = 0; h < 256; h++)
              f[h] = h;
            for (var h = 0, B = 0; h < 256; h++) {
              var v = h % o, C = E[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              B = (B + f[h] + C) % 256;
              var c = f[h];
              f[h] = f[B], f[B] = c;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(x, E) {
            x[E] ^= s.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function s() {
          for (var x = this._S, E = this._i, o = this._j, f = 0, h = 0; h < 4; h++) {
            E = (E + 1) % 256, o = (o + x[E]) % 256;
            var B = x[E];
            x[E] = x[o], x[o] = B, f |= x[(x[E] + x[o]) % 256] << 24 - h * 8;
          }
          return this._i = E, this._j = o, f;
        }
        t.RC4 = l._createHelper(d);
        var a = A.RC4Drop = d.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: d.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            d._doReset.call(this);
            for (var x = this.cfg.drop; x > 0; x--)
              s.call(this);
          }
        });
        t.RC4Drop = l._createHelper(a);
      }(), n.RC4;
    });
  }(ze)), ze.exports;
}
var Re = { exports: {} }, Jr;
function xn() {
  return Jr || (Jr = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), A0(), C0(), v0(), Z());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.StreamCipher, A = t.algo, d = [], s = [], a = [], x = A.Rabbit = l.extend({
          _doReset: function() {
            for (var o = this._key.words, f = this.cfg.iv, h = 0; h < 4; h++)
              o[h] = (o[h] << 8 | o[h] >>> 24) & 16711935 | (o[h] << 24 | o[h] >>> 8) & 4278255360;
            var B = this._X = [
              o[0],
              o[3] << 16 | o[2] >>> 16,
              o[1],
              o[0] << 16 | o[3] >>> 16,
              o[2],
              o[1] << 16 | o[0] >>> 16,
              o[3],
              o[2] << 16 | o[1] >>> 16
            ], v = this._C = [
              o[2] << 16 | o[2] >>> 16,
              o[0] & 4294901760 | o[1] & 65535,
              o[3] << 16 | o[3] >>> 16,
              o[1] & 4294901760 | o[2] & 65535,
              o[0] << 16 | o[0] >>> 16,
              o[2] & 4294901760 | o[3] & 65535,
              o[1] << 16 | o[1] >>> 16,
              o[3] & 4294901760 | o[0] & 65535
            ];
            this._b = 0;
            for (var h = 0; h < 4; h++)
              E.call(this);
            for (var h = 0; h < 8; h++)
              v[h] ^= B[h + 4 & 7];
            if (f) {
              var C = f.words, c = C[0], u = C[1], p = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, m = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, g = p >>> 16 | m & 4294901760, b = m << 16 | p & 65535;
              v[0] ^= p, v[1] ^= g, v[2] ^= m, v[3] ^= b, v[4] ^= p, v[5] ^= g, v[6] ^= m, v[7] ^= b;
              for (var h = 0; h < 4; h++)
                E.call(this);
            }
          },
          _doProcessBlock: function(o, f) {
            var h = this._X;
            E.call(this), d[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, d[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, d[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, d[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
            for (var B = 0; B < 4; B++)
              d[B] = (d[B] << 8 | d[B] >>> 24) & 16711935 | (d[B] << 24 | d[B] >>> 8) & 4278255360, o[f + B] ^= d[B];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function E() {
          for (var o = this._X, f = this._C, h = 0; h < 8; h++)
            s[h] = f[h];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < s[7] >>> 0 ? 1 : 0;
          for (var h = 0; h < 8; h++) {
            var B = o[h] + f[h], v = B & 65535, C = B >>> 16, c = ((v * v >>> 17) + v * C >>> 15) + C * C, u = ((B & 4294901760) * B | 0) + ((B & 65535) * B | 0);
            a[h] = c ^ u;
          }
          o[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, o[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, o[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, o[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, o[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, o[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, o[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, o[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        t.Rabbit = l._createHelper(x);
      }(), n.Rabbit;
    });
  }(Re)), Re.exports;
}
var He = { exports: {} }, et;
function on() {
  return et || (et = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), A0(), C0(), v0(), Z());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.StreamCipher, A = t.algo, d = [], s = [], a = [], x = A.RabbitLegacy = l.extend({
          _doReset: function() {
            var o = this._key.words, f = this.cfg.iv, h = this._X = [
              o[0],
              o[3] << 16 | o[2] >>> 16,
              o[1],
              o[0] << 16 | o[3] >>> 16,
              o[2],
              o[1] << 16 | o[0] >>> 16,
              o[3],
              o[2] << 16 | o[1] >>> 16
            ], B = this._C = [
              o[2] << 16 | o[2] >>> 16,
              o[0] & 4294901760 | o[1] & 65535,
              o[3] << 16 | o[3] >>> 16,
              o[1] & 4294901760 | o[2] & 65535,
              o[0] << 16 | o[0] >>> 16,
              o[2] & 4294901760 | o[3] & 65535,
              o[1] << 16 | o[1] >>> 16,
              o[3] & 4294901760 | o[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              E.call(this);
            for (var v = 0; v < 8; v++)
              B[v] ^= h[v + 4 & 7];
            if (f) {
              var C = f.words, c = C[0], u = C[1], p = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, m = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, g = p >>> 16 | m & 4294901760, b = m << 16 | p & 65535;
              B[0] ^= p, B[1] ^= g, B[2] ^= m, B[3] ^= b, B[4] ^= p, B[5] ^= g, B[6] ^= m, B[7] ^= b;
              for (var v = 0; v < 4; v++)
                E.call(this);
            }
          },
          _doProcessBlock: function(o, f) {
            var h = this._X;
            E.call(this), d[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, d[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, d[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, d[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
            for (var B = 0; B < 4; B++)
              d[B] = (d[B] << 8 | d[B] >>> 24) & 16711935 | (d[B] << 24 | d[B] >>> 8) & 4278255360, o[f + B] ^= d[B];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function E() {
          for (var o = this._X, f = this._C, h = 0; h < 8; h++)
            s[h] = f[h];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < s[7] >>> 0 ? 1 : 0;
          for (var h = 0; h < 8; h++) {
            var B = o[h] + f[h], v = B & 65535, C = B >>> 16, c = ((v * v >>> 17) + v * C >>> 15) + C * C, u = ((B & 4294901760) * B | 0) + ((B & 65535) * B | 0);
            a[h] = c ^ u;
          }
          o[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, o[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, o[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, o[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, o[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, o[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, o[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, o[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        t.RabbitLegacy = l._createHelper(x);
      }(), n.RabbitLegacy;
    });
  }(He)), He.exports;
}
var $e = { exports: {} }, rt;
function sn() {
  return rt || (rt = 1, function(r, e) {
    (function(n, t, i) {
      r.exports = t(N(), A0(), C0(), v0(), Z());
    })(O, function(n) {
      return function() {
        var t = n, i = t.lib, l = i.BlockCipher, A = t.algo;
        const d = 16, s = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], a = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var x = {
          pbox: [],
          sbox: []
        };
        function E(v, C) {
          let c = C >> 24 & 255, u = C >> 16 & 255, p = C >> 8 & 255, m = C & 255, g = v.sbox[0][c] + v.sbox[1][u];
          return g = g ^ v.sbox[2][p], g = g + v.sbox[3][m], g;
        }
        function o(v, C, c) {
          let u = C, p = c, m;
          for (let g = 0; g < d; ++g)
            u = u ^ v.pbox[g], p = E(v, u) ^ p, m = u, u = p, p = m;
          return m = u, u = p, p = m, p = p ^ v.pbox[d], u = u ^ v.pbox[d + 1], { left: u, right: p };
        }
        function f(v, C, c) {
          let u = C, p = c, m;
          for (let g = d + 1; g > 1; --g)
            u = u ^ v.pbox[g], p = E(v, u) ^ p, m = u, u = p, p = m;
          return m = u, u = p, p = m, p = p ^ v.pbox[1], u = u ^ v.pbox[0], { left: u, right: p };
        }
        function h(v, C, c) {
          for (let b = 0; b < 4; b++) {
            v.sbox[b] = [];
            for (let F = 0; F < 256; F++)
              v.sbox[b][F] = a[b][F];
          }
          let u = 0;
          for (let b = 0; b < d + 2; b++)
            v.pbox[b] = s[b] ^ C[u], u++, u >= c && (u = 0);
          let p = 0, m = 0, g = 0;
          for (let b = 0; b < d + 2; b += 2)
            g = o(v, p, m), p = g.left, m = g.right, v.pbox[b] = p, v.pbox[b + 1] = m;
          for (let b = 0; b < 4; b++)
            for (let F = 0; F < 256; F += 2)
              g = o(v, p, m), p = g.left, m = g.right, v.sbox[b][F] = p, v.sbox[b][F + 1] = m;
          return !0;
        }
        var B = A.Blowfish = l.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var v = this._keyPriorReset = this._key, C = v.words, c = v.sigBytes / 4;
              h(x, C, c);
            }
          },
          encryptBlock: function(v, C) {
            var c = o(x, v[C], v[C + 1]);
            v[C] = c.left, v[C + 1] = c.right;
          },
          decryptBlock: function(v, C) {
            var c = f(x, v[C], v[C + 1]);
            v[C] = c.left, v[C + 1] = c.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        t.Blowfish = l._createHelper(B);
      }(), n.Blowfish;
    });
  }($e)), $e.exports;
}
(function(r, e) {
  (function(n, t, i) {
    r.exports = t(N(), X0(), It(), Ot(), A0(), Ut(), C0(), at(), je(), Nt(), xt(), jt(), qt(), Wt(), qe(), Lt(), v0(), Z(), Vt(), Mt(), Kt(), Gt(), Xt(), Zt(), Qt(), Yt(), Jt(), en(), rn(), tn(), nn(), an(), xn(), on(), sn());
  })(O, function(n) {
    return n;
  });
})(it);
var cn = it.exports;
const Pe = /* @__PURE__ */ nt(cn), fn = (r) => {
  console.log({ number: r });
  const e = Buffer.alloc(8);
  return e.writeBigUInt64LE(r), e;
}, tt = (r) => {
  const e = fn(r), n = Pe.enc.Hex.parse(e.toString("hex"));
  return Pe.SHA256(n).toString(Pe.enc.Hex);
}, Z0 = "0x697a0d0c7719dc30d67d7d9debda8fe2f983217ed66aa25e6a6f5d3e3b962e91";
function un(r) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), n = 0; n < e.length; n++)
    e[n] = 255;
  for (var t = 0; t < r.length; t++) {
    var i = r.charAt(t), l = i.charCodeAt(0);
    if (e[l] !== 255)
      throw new TypeError(i + " is ambiguous");
    e[l] = t;
  }
  var A = r.length, d = r.charAt(0), s = Math.log(A) / Math.log(256), a = Math.log(256) / Math.log(A);
  function x(f) {
    if (f instanceof Uint8Array || (ArrayBuffer.isView(f) ? f = new Uint8Array(f.buffer, f.byteOffset, f.byteLength) : Array.isArray(f) && (f = Uint8Array.from(f))), !(f instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (f.length === 0)
      return "";
    for (var h = 0, B = 0, v = 0, C = f.length; v !== C && f[v] === 0; )
      v++, h++;
    for (var c = (C - v) * a + 1 >>> 0, u = new Uint8Array(c); v !== C; ) {
      for (var p = f[v], m = 0, g = c - 1; (p !== 0 || m < B) && g !== -1; g--, m++)
        p += 256 * u[g] >>> 0, u[g] = p % A >>> 0, p = p / A >>> 0;
      if (p !== 0)
        throw new Error("Non-zero carry");
      B = m, v++;
    }
    for (var b = c - B; b !== c && u[b] === 0; )
      b++;
    for (var F = d.repeat(h); b < c; ++b)
      F += r.charAt(u[b]);
    return F;
  }
  function E(f) {
    if (typeof f != "string")
      throw new TypeError("Expected String");
    if (f.length === 0)
      return new Uint8Array();
    for (var h = 0, B = 0, v = 0; f[h] === d; )
      B++, h++;
    for (var C = (f.length - h) * s + 1 >>> 0, c = new Uint8Array(C); f[h]; ) {
      var u = e[f.charCodeAt(h)];
      if (u === 255)
        return;
      for (var p = 0, m = C - 1; (u !== 0 || p < v) && m !== -1; m--, p++)
        u += A * c[m] >>> 0, c[m] = u % 256 >>> 0, u = u / 256 >>> 0;
      if (u !== 0)
        throw new Error("Non-zero carry");
      v = p, h++;
    }
    for (var g = C - v; g !== C && c[g] === 0; )
      g++;
    for (var b = new Uint8Array(B + (C - g)), F = B; g !== C; )
      b[F++] = c[g++];
    return b;
  }
  function o(f) {
    var h = E(f);
    if (h)
      return h;
    throw new Error("Non-base" + A + " character");
  }
  return {
    encode: x,
    decodeUnsafe: E,
    decode: o
  };
}
var ln = un;
const dn = ln, hn = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var vn = dn(hn);
const ot = /* @__PURE__ */ nt(vn), Q0 = (r) => ot.encode(r), We = (r) => ot.decode(r);
function pn(r) {
  return r > 64 && r < 91 ? r - 65 : r > 96 && r < 123 ? r - 71 : r > 47 && r < 58 ? r + 4 : r === 43 ? 62 : r === 47 ? 63 : 0;
}
function Le(r, e) {
  for (var n = r.replace(/[^A-Za-z0-9+/]/g, ""), t = n.length, i = e ? Math.ceil((t * 3 + 1 >> 2) / e) * e : t * 3 + 1 >> 2, l = new Uint8Array(i), A, d, s = 0, a = 0, x = 0; x < t; x++)
    if (d = x & 3, s |= pn(n.charCodeAt(x)) << 6 * (3 - d), d === 3 || t - x === 1) {
      for (A = 0; A < 3 && a < i; A++, a++)
        l[a] = s >>> (16 >>> A & 24) & 255;
      s = 0;
    }
  return l;
}
function q0(r) {
  return r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r === 62 ? 43 : r === 63 ? 47 : 65;
}
function Y0(r) {
  for (var e = 2, n = "", t = r.length, i = 0, l = 0; l < t; l++)
    e = l % 3, i |= r[l] << (16 >>> e & 24), (e === 2 || r.length - l === 1) && (n += String.fromCodePoint(
      q0(i >>> 18 & 63),
      q0(i >>> 12 & 63),
      q0(i >>> 6 & 63),
      q0(i & 63)
    ), i = 0);
  return n.slice(0, n.length - 2 + e) + (e === 2 ? "" : e === 1 ? "=" : "==");
}
function B0(r) {
  const e = r.startsWith("0x") ? r.slice(2) : r, t = (e.length % 2 === 0 ? e : `0${e}}`).match(/.{2}/g)?.map((i) => parseInt(i, 16)) ?? [];
  return Uint8Array.from(t);
}
function h0(r) {
  return r.reduce((e, n) => e + n.toString(16).padStart(2, "0"), "");
}
function Ve(r) {
  let e = [], n = 0;
  if (r === 0)
    return [0];
  for (; r > 0; )
    e[n] = r & 127, (r >>= 7) && (e[n] |= 128), n += 1;
  return e;
}
function Bn(r) {
  let e = 0, n = 0, t = 0;
  for (; ; ) {
    let i = r[t];
    if (t += 1, e |= (i & 127) << n, !(i & 128))
      break;
    n += 7;
  }
  return {
    value: e,
    length: t
  };
}
class st {
  /**
   * @param {Uint8Array} data Data to use as a buffer.
   */
  constructor(e) {
    this.bytePosition = 0, this.dataView = new DataView(e.buffer);
  }
  /**
   * Shift current cursor position by `bytes`.
   *
   * @param {Number} bytes Number of bytes to
   * @returns {this} Self for possible chaining.
   */
  shift(e) {
    return this.bytePosition += e, this;
  }
  /**
   * Read U8 value from the buffer and shift cursor by 1.
   * @returns
   */
  read8() {
    let e = this.dataView.getUint8(this.bytePosition);
    return this.shift(1), e;
  }
  /**
   * Read U16 value from the buffer and shift cursor by 2.
   * @returns
   */
  read16() {
    let e = this.dataView.getUint16(this.bytePosition, !0);
    return this.shift(2), e;
  }
  /**
   * Read U32 value from the buffer and shift cursor by 4.
   * @returns
   */
  read32() {
    let e = this.dataView.getUint32(this.bytePosition, !0);
    return this.shift(4), e;
  }
  /**
   * Read U64 value from the buffer and shift cursor by 8.
   * @returns
   */
  read64() {
    let e = this.read32(), t = this.read32().toString(16) + e.toString(16).padStart(8, "0");
    return BigInt("0x" + t).toString(10);
  }
  /**
   * Read U128 value from the buffer and shift cursor by 16.
   */
  read128() {
    let e = BigInt(this.read64()), t = BigInt(this.read64()).toString(16) + e.toString(16).padStart(16, "0");
    return BigInt("0x" + t).toString(10);
  }
  /**
   * Read U128 value from the buffer and shift cursor by 32.
   * @returns
   */
  read256() {
    let e = BigInt(this.read128()), t = BigInt(this.read128()).toString(16) + e.toString(16).padStart(32, "0");
    return BigInt("0x" + t).toString(10);
  }
  /**
   * Read `num` number of bytes from the buffer and shift cursor by `num`.
   * @param num Number of bytes to read.
   */
  readBytes(e) {
    let n = this.bytePosition + this.dataView.byteOffset, t = new Uint8Array(this.dataView.buffer, n, e);
    return this.shift(e), t;
  }
  /**
   * Read ULEB value - an integer of varying size. Used for enum indexes and
   * vector lengths.
   * @returns {Number} The ULEB value.
   */
  readULEB() {
    let e = this.bytePosition + this.dataView.byteOffset, n = new Uint8Array(this.dataView.buffer, e), { value: t, length: i } = Bn(n);
    return this.shift(i), t;
  }
  /**
   * Read a BCS vector: read a length and then apply function `cb` X times
   * where X is the length of the vector, defined as ULEB in BCS bytes.
   * @param cb Callback to process elements of vector.
   * @returns {Array<Any>} Array of the resulting values, returned by callback.
   */
  readVec(e) {
    let n = this.readULEB(), t = [];
    for (let i = 0; i < n; i++)
      t.push(e(this, i, n));
    return t;
  }
}
function En(r, e) {
  switch (e) {
    case "base58":
      return Q0(r);
    case "base64":
      return Y0(r);
    case "hex":
      return h0(r);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function An(r, e) {
  switch (e) {
    case "base58":
      return We(r);
    case "base64":
      return Le(r);
    case "hex":
      return B0(r);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function ct(r, e = ["<", ">"]) {
  const [n, t] = e, i = [];
  let l = "", A = 0;
  for (let d = 0; d < r.length; d++) {
    const s = r[d];
    if (s === n && A++, s === t && A--, A === 0 && s === ",") {
      i.push(l.trim()), l = "";
      continue;
    }
    l += s;
  }
  return i.push(l.trim()), i;
}
class ft {
  constructor({ size: e = 1024, maxSize: n, allocateSize: t = 1024 } = {}) {
    this.bytePosition = 0, this.size = e, this.maxSize = n || e, this.allocateSize = t, this.dataView = new DataView(new ArrayBuffer(e));
  }
  ensureSizeOrGrow(e) {
    const n = this.bytePosition + e;
    if (n > this.size) {
      const t = Math.min(this.maxSize, this.size + this.allocateSize);
      if (n > t)
        throw new Error(
          `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${n}`
        );
      this.size = t;
      const i = new ArrayBuffer(this.size);
      new Uint8Array(i).set(new Uint8Array(this.dataView.buffer)), this.dataView = new DataView(i);
    }
  }
  /**
   * Shift current cursor position by `bytes`.
   *
   * @param {Number} bytes Number of bytes to
   * @returns {this} Self for possible chaining.
   */
  shift(e) {
    return this.bytePosition += e, this;
  }
  /**
   * Write a U8 value into a buffer and shift cursor position by 1.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write8(e) {
    return this.ensureSizeOrGrow(1), this.dataView.setUint8(this.bytePosition, Number(e)), this.shift(1);
  }
  /**
   * Write a U16 value into a buffer and shift cursor position by 2.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write16(e) {
    return this.ensureSizeOrGrow(2), this.dataView.setUint16(this.bytePosition, Number(e), !0), this.shift(2);
  }
  /**
   * Write a U32 value into a buffer and shift cursor position by 4.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  write32(e) {
    return this.ensureSizeOrGrow(4), this.dataView.setUint32(this.bytePosition, Number(e), !0), this.shift(4);
  }
  /**
   * Write a U64 value into a buffer and shift cursor position by 8.
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write64(e) {
    return Ie(BigInt(e), 8).forEach((n) => this.write8(n)), this;
  }
  /**
   * Write a U128 value into a buffer and shift cursor position by 16.
   *
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write128(e) {
    return Ie(BigInt(e), 16).forEach((n) => this.write8(n)), this;
  }
  /**
   * Write a U256 value into a buffer and shift cursor position by 16.
   *
   * @param {bigint} value Value to write.
   * @returns {this}
   */
  write256(e) {
    return Ie(BigInt(e), 32).forEach((n) => this.write8(n)), this;
  }
  /**
   * Write a ULEB value into a buffer and shift cursor position by number of bytes
   * written.
   * @param {Number} value Value to write.
   * @returns {this}
   */
  writeULEB(e) {
    return Ve(e).forEach((n) => this.write8(n)), this;
  }
  /**
   * Write a vector into a buffer by first writing the vector length and then calling
   * a callback on each passed value.
   *
   * @param {Array<Any>} vector Array of elements to write.
   * @param {WriteVecCb} cb Callback to call on each element of the vector.
   * @returns {this}
   */
  writeVec(e, n) {
    return this.writeULEB(e.length), Array.from(e).forEach((t, i) => n(this, t, i, e.length)), this;
  }
  /**
   * Adds support for iterations over the object.
   * @returns {Uint8Array}
   */
  *[Symbol.iterator]() {
    for (let e = 0; e < this.bytePosition; e++)
      yield this.dataView.getUint8(e);
    return this.toBytes();
  }
  /**
   * Get underlying buffer taking only value bytes (in case initial buffer size was bigger).
   * @returns {Uint8Array} Resulting bcs.
   */
  toBytes() {
    return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
  }
  /**
   * Represent data as 'hex' or 'base64'
   * @param encoding Encoding to use: 'base64' or 'hex'
   */
  toString(e) {
    return En(this.toBytes(), e);
  }
}
function Ie(r, e) {
  let n = new Uint8Array(e), t = 0;
  for (; r > 0; )
    n[t] = Number(r % BigInt(256)), r = r / BigInt(256), t += 1;
  return n;
}
var ut = (r, e, n) => {
  if (!e.has(r))
    throw TypeError("Cannot " + n);
}, a0 = (r, e, n) => (ut(r, e, "read from private field"), n ? n.call(r) : e.get(r)), V0 = (r, e, n) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, n);
}, M0 = (r, e, n, t) => (ut(r, e, "write to private field"), t ? t.call(r, n) : e.set(r, n), n), b0, $0, W0, u0;
const lt = class {
  constructor(r) {
    V0(this, b0, void 0), V0(this, $0, void 0), this.name = r.name, this.read = r.read, this.serializedSize = r.serializedSize ?? (() => null), M0(this, b0, r.write), M0(this, $0, r.serialize ?? ((e, n) => {
      const t = new ft({ size: this.serializedSize(e) ?? void 0, ...n });
      return a0(this, b0).call(this, e, t), t.toBytes();
    })), this.validate = r.validate ?? (() => {
    });
  }
  write(r, e) {
    this.validate(r), a0(this, b0).call(this, r, e);
  }
  serialize(r, e) {
    return this.validate(r), new yn(this, a0(this, $0).call(this, r, e));
  }
  parse(r) {
    const e = new st(r);
    return this.read(e);
  }
  transform({
    name: r,
    input: e,
    output: n
  }) {
    return new lt({
      name: r ?? this.name,
      read: (t) => n(this.read(t)),
      write: (t, i) => a0(this, b0).call(this, e(t), i),
      serializedSize: (t) => this.serializedSize(e(t)),
      serialize: (t, i) => a0(this, $0).call(this, e(t), i),
      validate: (t) => this.validate(e(t))
    });
  }
};
let x0 = lt;
b0 = /* @__PURE__ */ new WeakMap();
$0 = /* @__PURE__ */ new WeakMap();
const Cn = Symbol.for("@mysten/serialized-bcs");
class yn {
  constructor(e, n) {
    V0(this, W0, void 0), V0(this, u0, void 0), M0(this, W0, e), M0(this, u0, n);
  }
  // Used to brand SerializedBcs so that they can be identified, even between multiple copies
  // of the @mysten/bcs package are installed
  get [Cn]() {
    return !0;
  }
  toBytes() {
    return a0(this, u0);
  }
  toHex() {
    return h0(a0(this, u0));
  }
  toBase64() {
    return Y0(a0(this, u0));
  }
  toBase58() {
    return Q0(a0(this, u0));
  }
  parse() {
    return a0(this, W0).parse(a0(this, u0));
  }
}
W0 = /* @__PURE__ */ new WeakMap();
u0 = /* @__PURE__ */ new WeakMap();
function K0({
  size: r,
  ...e
}) {
  return new x0({
    ...e,
    serializedSize: () => r
  });
}
function Oe({
  readMethod: r,
  writeMethod: e,
  ...n
}) {
  return K0({
    ...n,
    read: (t) => t[r](),
    write: (t, i) => i[e](t),
    validate: (t) => {
      if (t < 0 || t > n.maxValue)
        throw new TypeError(
          `Invalid ${n.name} value: ${t}. Expected value in range 0-${n.maxValue}`
        );
      n.validate?.(t);
    }
  });
}
function Ue({
  readMethod: r,
  writeMethod: e,
  ...n
}) {
  return K0({
    ...n,
    read: (t) => t[r](),
    write: (t, i) => i[e](BigInt(t)),
    validate: (t) => {
      const i = BigInt(t);
      if (i < 0 || i > n.maxValue)
        throw new TypeError(
          `Invalid ${n.name} value: ${i}. Expected value in range 0-${n.maxValue}`
        );
      n.validate?.(i);
    }
  });
}
function gn({
  serialize: r,
  ...e
}) {
  const n = new x0({
    ...e,
    serialize: r,
    write: (t, i) => {
      for (const l of n.serialize(t).toBytes())
        i.write8(l);
    }
  });
  return n;
}
function mn({
  toBytes: r,
  fromBytes: e,
  ...n
}) {
  return new x0({
    ...n,
    read: (t) => {
      const i = t.readULEB(), l = t.readBytes(i);
      return e(l);
    },
    write: (t, i) => {
      const l = r(t);
      i.writeULEB(l.length);
      for (let A = 0; A < l.length; A++)
        i.write8(l[A]);
    },
    serialize: (t) => {
      const i = r(t), l = Ve(i.length), A = new Uint8Array(l.length + i.length);
      return A.set(l, 0), A.set(i, l.length), A;
    },
    validate: (t) => {
      if (typeof t != "string")
        throw new TypeError(`Invalid ${n.name} value: ${t}. Expected string`);
      n.validate?.(t);
    }
  });
}
function bn(r) {
  let e = null;
  function n() {
    return e || (e = r()), e;
  }
  return new x0({
    name: "lazy",
    read: (t) => n().read(t),
    serializedSize: (t) => n().serializedSize(t),
    write: (t, i) => n().write(t, i),
    serialize: (t, i) => n().serialize(t, i).toBytes()
  });
}
const _ = {
  /**
   * Creates a BcsType that can be used to read and write an 8-bit unsigned integer.
   * @example
   * bcs.u8().serialize(255).toBytes() // Uint8Array [ 255 ]
   */
  u8(r) {
    return Oe({
      name: "u8",
      readMethod: "read8",
      writeMethod: "write8",
      size: 1,
      maxValue: 2 ** 8 - 1,
      ...r
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 16-bit unsigned integer.
   * @example
   * bcs.u16().serialize(65535).toBytes() // Uint8Array [ 255, 255 ]
   */
  u16(r) {
    return Oe({
      name: "u16",
      readMethod: "read16",
      writeMethod: "write16",
      size: 2,
      maxValue: 2 ** 16 - 1,
      ...r
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 32-bit unsigned integer.
   * @example
   * bcs.u32().serialize(4294967295).toBytes() // Uint8Array [ 255, 255, 255, 255 ]
   */
  u32(r) {
    return Oe({
      name: "u32",
      readMethod: "read32",
      writeMethod: "write32",
      size: 4,
      maxValue: 2 ** 32 - 1,
      ...r
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 64-bit unsigned integer.
   * @example
   * bcs.u64().serialize(1).toBytes() // Uint8Array [ 1, 0, 0, 0, 0, 0, 0, 0 ]
   */
  u64(r) {
    return Ue({
      name: "u64",
      readMethod: "read64",
      writeMethod: "write64",
      size: 8,
      maxValue: 2n ** 64n - 1n,
      ...r
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 128-bit unsigned integer.
   * @example
   * bcs.u128().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
   */
  u128(r) {
    return Ue({
      name: "u128",
      readMethod: "read128",
      writeMethod: "write128",
      size: 16,
      maxValue: 2n ** 128n - 1n,
      ...r
    });
  },
  /**
   * Creates a BcsType that can be used to read and write a 256-bit unsigned integer.
   * @example
   * bcs.u256().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
   */
  u256(r) {
    return Ue({
      name: "u256",
      readMethod: "read256",
      writeMethod: "write256",
      size: 32,
      maxValue: 2n ** 256n - 1n,
      ...r
    });
  },
  /**
   * Creates a BcsType that can be used to read and write boolean values.
   * @example
   * bcs.bool().serialize(true).toBytes() // Uint8Array [ 1 ]
   */
  bool(r) {
    return K0({
      name: "bool",
      size: 1,
      read: (e) => e.read8() === 1,
      write: (e, n) => n.write8(e ? 1 : 0),
      ...r,
      validate: (e) => {
        if (r?.validate?.(e), typeof e != "boolean")
          throw new TypeError(`Expected boolean, found ${typeof e}`);
      }
    });
  },
  /**
   * Creates a BcsType that can be used to read and write unsigned LEB encoded integers
   * @example
   *
   */
  uleb128(r) {
    return gn({
      name: "uleb128",
      read: (e) => e.readULEB(),
      serialize: (e) => Uint8Array.from(Ve(e)),
      ...r
    });
  },
  /**
   * Creates a BcsType representing a fixed length byte array
   * @param size The number of bytes this types represents
   * @example
   * bcs.bytes(3).serialize(new Uint8Array([1, 2, 3])).toBytes() // Uint8Array [1, 2, 3]
   */
  bytes(r, e) {
    return K0({
      name: `bytes[${r}]`,
      size: r,
      read: (n) => n.readBytes(r),
      write: (n, t) => {
        for (let i = 0; i < r; i++)
          t.write8(n[i] ?? 0);
      },
      ...e,
      validate: (n) => {
        if (e?.validate?.(n), !("length" in n))
          throw new TypeError(`Expected array, found ${typeof n}`);
        if (n.length !== r)
          throw new TypeError(`Expected array of length ${r}, found ${n.length}`);
      }
    });
  },
  /**
   * Creates a BcsType that can ser/de string values.  Strings will be UTF-8 encoded
   * @example
   * bcs.string().serialize('a').toBytes() // Uint8Array [ 1, 97 ]
   */
  string(r) {
    return mn({
      name: "string",
      toBytes: (e) => new TextEncoder().encode(e),
      fromBytes: (e) => new TextDecoder().decode(e),
      ...r
    });
  },
  /**
   * Creates a BcsType that represents a fixed length array of a given type
   * @param size The number of elements in the array
   * @param type The BcsType of each element in the array
   * @example
   * bcs.fixedArray(3, bcs.u8()).serialize([1, 2, 3]).toBytes() // Uint8Array [ 1, 2, 3 ]
   */
  fixedArray(r, e, n) {
    return new x0({
      name: `${e.name}[${r}]`,
      read: (t) => {
        const i = new Array(r);
        for (let l = 0; l < r; l++)
          i[l] = e.read(t);
        return i;
      },
      write: (t, i) => {
        for (const l of t)
          e.write(l, i);
      },
      ...n,
      validate: (t) => {
        if (n?.validate?.(t), !("length" in t))
          throw new TypeError(`Expected array, found ${typeof t}`);
        if (t.length !== r)
          throw new TypeError(`Expected array of length ${r}, found ${t.length}`);
      }
    });
  },
  /**
   * Creates a BcsType representing an optional value
   * @param type The BcsType of the optional value
   * @example
   * bcs.option(bcs.u8()).serialize(null).toBytes() // Uint8Array [ 0 ]
   * bcs.option(bcs.u8()).serialize(1).toBytes() // Uint8Array [ 1, 1 ]
   */
  option(r) {
    return _.enum(`Option<${r.name}>`, {
      None: null,
      Some: r
    }).transform({
      input: (e) => e == null ? { None: !0 } : { Some: e },
      output: (e) => "Some" in e ? e.Some : null
    });
  },
  /**
   * Creates a BcsType representing a variable length vector of a given type
   * @param type The BcsType of each element in the vector
   *
   * @example
   * bcs.vector(bcs.u8()).toBytes([1, 2, 3]) // Uint8Array [ 3, 1, 2, 3 ]
   */
  vector(r, e) {
    return new x0({
      name: `vector<${r.name}>`,
      read: (n) => {
        const t = n.readULEB(), i = new Array(t);
        for (let l = 0; l < t; l++)
          i[l] = r.read(n);
        return i;
      },
      write: (n, t) => {
        t.writeULEB(n.length);
        for (const i of n)
          r.write(i, t);
      },
      ...e,
      validate: (n) => {
        if (e?.validate?.(n), !("length" in n))
          throw new TypeError(`Expected array, found ${typeof n}`);
      }
    });
  },
  /**
   * Creates a BcsType representing a tuple of a given set of types
   * @param types The BcsTypes for each element in the tuple
   *
   * @example
   * const tuple = bcs.tuple([bcs.u8(), bcs.string(), bcs.bool()])
   * tuple.serialize([1, 'a', true]).toBytes() // Uint8Array [ 1, 1, 97, 1 ]
   */
  tuple(r, e) {
    return new x0({
      name: `(${r.map((n) => n.name).join(", ")})`,
      serializedSize: (n) => {
        let t = 0;
        for (let i = 0; i < r.length; i++) {
          const l = r[i].serializedSize(n[i]);
          if (l == null)
            return null;
          t += l;
        }
        return t;
      },
      read: (n) => {
        const t = [];
        for (const i of r)
          t.push(i.read(n));
        return t;
      },
      write: (n, t) => {
        for (let i = 0; i < r.length; i++)
          r[i].write(n[i], t);
      },
      ...e,
      validate: (n) => {
        if (e?.validate?.(n), !Array.isArray(n))
          throw new TypeError(`Expected array, found ${typeof n}`);
        if (n.length !== r.length)
          throw new TypeError(`Expected array of length ${r.length}, found ${n.length}`);
      }
    });
  },
  /**
   * Creates a BcsType representing a struct of a given set of fields
   * @param name The name of the struct
   * @param fields The fields of the struct. The order of the fields affects how data is serialized and deserialized
   *
   * @example
   * const struct = bcs.struct('MyStruct', {
   *  a: bcs.u8(),
   *  b: bcs.string(),
   * })
   * struct.serialize({ a: 1, b: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
   */
  struct(r, e, n) {
    const t = Object.entries(e);
    return new x0({
      name: r,
      serializedSize: (i) => {
        let l = 0;
        for (const [A, d] of t) {
          const s = d.serializedSize(i[A]);
          if (s == null)
            return null;
          l += s;
        }
        return l;
      },
      read: (i) => {
        const l = {};
        for (const [A, d] of t)
          l[A] = d.read(i);
        return l;
      },
      write: (i, l) => {
        for (const [A, d] of t)
          d.write(i[A], l);
      },
      ...n,
      validate: (i) => {
        if (n?.validate?.(i), typeof i != "object" || i == null)
          throw new TypeError(`Expected object, found ${typeof i}`);
      }
    });
  },
  /**
   * Creates a BcsType representing an enum of a given set of options
   * @param name The name of the enum
   * @param values The values of the enum. The order of the values affects how data is serialized and deserialized.
   * null can be used to represent a variant with no data.
   *
   * @example
   * const enum = bcs.enum('MyEnum', {
   *   A: bcs.u8(),
   *   B: bcs.string(),
   *   C: null,
   * })
   * enum.serialize({ A: 1 }).toBytes() // Uint8Array [ 0, 1 ]
   * enum.serialize({ B: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
   * enum.serialize({ C: true }).toBytes() // Uint8Array [ 2 ]
   */
  enum(r, e, n) {
    const t = Object.entries(e);
    return new x0({
      name: r,
      read: (i) => {
        const l = i.readULEB(), [A, d] = t[l];
        return {
          [A]: d?.read(i) ?? !0
        };
      },
      write: (i, l) => {
        const [A, d] = Object.entries(i)[0];
        for (let s = 0; s < t.length; s++) {
          const [a, x] = t[s];
          if (a === A) {
            l.writeULEB(s), x?.write(d, l);
            return;
          }
        }
      },
      ...n,
      validate: (i) => {
        if (n?.validate?.(i), typeof i != "object" || i == null)
          throw new TypeError(`Expected object, found ${typeof i}`);
        const l = Object.keys(i);
        if (l.length !== 1)
          throw new TypeError(`Expected object with one key, found ${l.length}`);
        const [A] = l;
        if (!Object.hasOwn(e, A))
          throw new TypeError(`Invalid enum variant ${A}`);
      }
    });
  },
  /**
   * Creates a BcsType representing a map of a given key and value type
   * @param keyType The BcsType of the key
   * @param valueType The BcsType of the value
   * @example
   * const map = bcs.map(bcs.u8(), bcs.string())
   * map.serialize(new Map([[2, 'a']])).toBytes() // Uint8Array [ 1, 2, 1, 97 ]
   */
  map(r, e) {
    return _.vector(_.tuple([r, e])).transform({
      name: `Map<${r.name}, ${e.name}>`,
      input: (n) => [...n.entries()],
      output: (n) => {
        const t = /* @__PURE__ */ new Map();
        for (const [i, l] of n)
          t.set(i, l);
        return t;
      }
    });
  },
  /**
   * @deprecated
   *
   * Generics should be implemented as generic typescript functions instead:
   *
   * ```ts
   * function VecMap<K, V>, (K: BcsType<K>, V: BcsType<V>) {
   *   return bcs.struct('VecMap<K, V>', {
   *     keys: bcs.vector(K),
   *     values: bcs.vector(V),
   *   })
   * }
   * ```
   */
  generic(r, e) {
    return (...n) => e(...n).transform({
      name: `${e.name}<${n.map((t) => t.name).join(", ")}>`,
      input: (t) => t,
      output: (t) => t
    });
  },
  /**
   * Creates a BcsType that wraps another BcsType which is lazily evaluated. This is useful for creating recursive types.
   * @param cb A callback that returns the BcsType
   */
  lazy(r) {
    return bn(r);
  }
}, Dn = 32, P0 = class {
  /**
   * Construct a BCS instance with a prepared schema.
   *
   * @param schema A prepared schema with type definitions
   * @param withPrimitives Whether to register primitive types by default
   */
  constructor(r) {
    if (this.types = /* @__PURE__ */ new Map(), this.counter = 0, r instanceof P0) {
      this.schema = r.schema, this.types = new Map(r.types);
      return;
    }
    if (this.schema = r, this.registerAddressType(P0.ADDRESS, r.addressLength, r.addressEncoding), this.registerVectorType(r.vectorType), r.types && r.types.structs)
      for (let e of Object.keys(r.types.structs))
        this.registerStructType(e, r.types.structs[e]);
    if (r.types && r.types.enums)
      for (let e of Object.keys(r.types.enums))
        this.registerEnumType(e, r.types.enums[e]);
    if (r.types && r.types.aliases)
      for (let e of Object.keys(r.types.aliases))
        this.registerAlias(e, r.types.aliases[e]);
    r.withPrimitives !== !1 && Fn(this);
  }
  /**
   * Name of the key to use for temporary struct definitions.
   * Returns a temp key + index (for a case when multiple temp
   * structs are processed).
   */
  tempKey() {
    return `bcs-struct-${++this.counter}`;
  }
  /**
   * Serialize data into bcs.
   *
   * @example
   * bcs.registerVectorType('vector<u8>', 'u8');
   *
   * let serialized = BCS
   *   .set('vector<u8>', [1,2,3,4,5,6])
   *   .toBytes();
   *
   * console.assert(toHex(serialized) === '06010203040506');
   *
   * @param type Name of the type to serialize (must be registered) or a struct type.
   * @param data Data to serialize.
   * @param size Serialization buffer size. Default 1024 = 1KB.
   * @return A BCS reader instance. Usually you'd want to call `.toBytes()`
   */
  ser(r, e, n) {
    if (typeof r == "string" || Array.isArray(r)) {
      const { name: t, params: i } = this.parseTypeName(r);
      return this.getTypeInterface(t).encode(this, e, n, i);
    }
    if (typeof r == "object") {
      const t = this.tempKey();
      return new P0(this).registerStructType(t, r).ser(t, e, n);
    }
    throw new Error(`Incorrect type passed into the '.ser()' function. 
${JSON.stringify(r)}`);
  }
  /**
   * Deserialize BCS into a JS type.
   *
   * @example
   * let num = bcs.ser('u64', '4294967295').toString('hex');
   * let deNum = bcs.de('u64', num, 'hex');
   * console.assert(deNum.toString(10) === '4294967295');
   *
   * @param type Name of the type to deserialize (must be registered) or a struct type definition.
   * @param data Data to deserialize.
   * @param encoding Optional - encoding to use if data is of type String
   * @return Deserialized data.
   */
  de(r, e, n) {
    if (typeof e == "string")
      if (n)
        e = An(e, n);
      else
        throw new Error("To pass a string to `bcs.de`, specify encoding");
    if (typeof r == "string" || Array.isArray(r)) {
      const { name: t, params: i } = this.parseTypeName(r);
      return this.getTypeInterface(t).decode(this, e, i);
    }
    if (typeof r == "object") {
      const t = new P0(this), i = this.tempKey();
      return t.registerStructType(i, r).de(i, e, n);
    }
    throw new Error(`Incorrect type passed into the '.de()' function. 
${JSON.stringify(r)}`);
  }
  /**
   * Check whether a `TypeInterface` has been loaded for a `type`.
   * @param type Name of the type to check.
   * @returns
   */
  hasType(r) {
    return this.types.has(r);
  }
  /**
   * Create an alias for a type.
   * WARNING: this can potentially lead to recursion
   * @param name Alias to use
   * @param forType Type to reference
   * @returns
   *
   * @example
   * ```
   * let bcs = new BCS(getSuiMoveConfig());
   * bcs.registerAlias('ObjectDigest', BCS.BASE58);
   * let b58_digest = bcs.de('ObjectDigest', '<digest_bytes>', 'base64');
   * ```
   */
  registerAlias(r, e) {
    return this.types.set(r, e), this;
  }
  /**
   * Method to register new types for BCS internal representation.
   * For each registered type 2 callbacks must be specified and one is optional:
   *
   * - encodeCb(writer, data) - write a way to serialize data with BcsWriter;
   * - decodeCb(reader) - write a way to deserialize data with BcsReader;
   * - validateCb(data) - validate data - either return bool or throw an error
   *
   * @example
   * // our type would be a string that consists only of numbers
   * bcs.registerType('number_string',
   *    (writer, data) => writer.writeVec(data, (w, el) => w.write8(el)),
   *    (reader) => reader.readVec((r) => r.read8()).join(''), // read each value as u8
   *    (value) => /[0-9]+/.test(value) // test that it has at least one digit
   * );
   * console.log(Array.from(bcs.ser('number_string', '12345').toBytes()) == [5,1,2,3,4,5]);
   *
   * @param name
   * @param encodeCb Callback to encode a value.
   * @param decodeCb Callback to decode a value.
   * @param validateCb Optional validator Callback to check type before serialization.
   */
  registerType(r, e, n, t = () => !0) {
    const { name: i, params: l } = this.parseTypeName(r);
    return this.types.set(i, {
      encode(A, d, s, a) {
        const x = l.reduce((E, o, f) => Object.assign(E, { [o]: a[f] }), {});
        return this._encodeRaw.call(A, new ft(s), d, a, x);
      },
      decode(A, d, s) {
        const a = l.reduce((x, E, o) => Object.assign(x, { [E]: s[o] }), {});
        return this._decodeRaw.call(A, new st(d), s, a);
      },
      // these methods should always be used with caution as they require pre-defined
      // reader and writer and mainly exist to allow multi-field (de)serialization;
      _encodeRaw(A, d, s, a) {
        if (t(d))
          return e.call(this, A, d, s, a);
        throw new Error(`Validation failed for type ${i}, data: ${d}`);
      },
      _decodeRaw(A, d, s) {
        return n.call(this, A, d, s);
      }
    }), this;
  }
  /**
  	 * Method to register BcsType instances to the registry
  	 * Types are registered with a callback that provides BcsType instances for each generic
  	 * passed to the type.
  	 *
  	 * - createType(...generics) - Return a BcsType instance
  	 *
  	 * @example
  	 * // our type would be a string that consists only of numbers
  	 * bcs.registerType('Box<T>', (T) => {
  	 * 		return bcs.struct({
  	 * 			value: T
  	 * 		});
  	 * });
  
  	 * console.log(Array.from(bcs.ser('Box<string>', '12345').toBytes()) == [5,1,2,3,4,5]);
  	 *
  	 * @param name
  	 * @param createType a Callback to create the BcsType with any passed in generics
  	 */
  registerBcsType(r, e) {
    return this.registerType(
      r,
      (n, t, i) => {
        const l = i.map(
          (A) => new x0({
            name: String(A),
            write: (d, s) => {
              const { name: a, params: x } = this.parseTypeName(A), E = this.getTypeInterface(a), o = x.reduce((f, h, B) => Object.assign(f, { [h]: i[B] }), {});
              return E._encodeRaw.call(this, s, d, x, o);
            },
            read: () => {
              throw new Error("Not implemented");
            }
          })
        );
        return e(...l).write(t, n), n;
      },
      (n, t) => {
        const i = t.map(
          (l) => new x0({
            name: String(l),
            write: (A, d) => {
              throw new Error("Not implemented");
            },
            read: (A) => {
              const { name: d, params: s } = this.parseTypeName(l), a = this.getTypeInterface(d), x = s.reduce((E, o, f) => Object.assign(E, { [o]: t[f] }), {});
              return a._decodeRaw.call(this, A, s, x);
            }
          })
        );
        return e(...i).read(n);
      }
    ), this;
  }
  /**
   * Register an address type which is a sequence of U8s of specified length.
   * @example
   * bcs.registerAddressType('address', SUI_ADDRESS_LENGTH);
   * let addr = bcs.de('address', 'c3aca510c785c7094ac99aeaa1e69d493122444df50bb8a99dfa790c654a79af');
   *
   * @param name Name of the address type.
   * @param length Byte length of the address.
   * @param encoding Encoding to use for the address type
   * @returns
   */
  registerAddressType(r, e, n = "hex") {
    switch (n) {
      case "base64":
        return this.registerType(
          r,
          function(i, l) {
            return Le(l).reduce((A, d) => A.write8(d), i);
          },
          function(i) {
            return Y0(i.readBytes(e));
          }
        );
      case "hex":
        return this.registerType(
          r,
          function(i, l) {
            return B0(l).reduce((A, d) => A.write8(d), i);
          },
          function(i) {
            return h0(i.readBytes(e));
          }
        );
      default:
        throw new Error("Unsupported encoding! Use either hex or base64");
    }
  }
  /**
   * Register custom vector type inside the bcs.
   *
   * @example
   * bcs.registerVectorType('vector<T>'); // generic registration
   * let array = bcs.de('vector<u8>', '06010203040506', 'hex'); // [1,2,3,4,5,6];
   * let again = bcs.ser('vector<u8>', [1,2,3,4,5,6]).toString('hex');
   *
   * @param name Name of the type to register
   * @param elementType Optional name of the inner type of the vector
   * @return Returns self for chaining.
   */
  registerVectorType(r) {
    let { name: e, params: n } = this.parseTypeName(r);
    if (n.length > 1)
      throw new Error("Vector can have only one type parameter; got " + e);
    return this.registerType(
      r,
      function(i, l, A, d) {
        return i.writeVec(l, (s, a) => {
          let x = A[0];
          if (!x)
            throw new Error(`Incorrect number of type parameters passed a to vector '${r}'`);
          let { name: E, params: o } = this.parseTypeName(x);
          if (this.hasType(E))
            return this.getTypeInterface(E)._encodeRaw.call(this, s, a, o, d);
          if (!(E in d))
            throw new Error(
              `Unable to find a matching type definition for ${E} in vector; make sure you passed a generic`
            );
          let { name: f, params: h } = this.parseTypeName(d[E]);
          return this.getTypeInterface(f)._encodeRaw.call(
            this,
            s,
            a,
            h,
            d
          );
        });
      },
      function(i, l, A) {
        return i.readVec((d) => {
          let s = l[0];
          if (!s)
            throw new Error(`Incorrect number of type parameters passed to a vector '${r}'`);
          let { name: a, params: x } = this.parseTypeName(s);
          if (this.hasType(a))
            return this.getTypeInterface(a)._decodeRaw.call(this, d, x, A);
          if (!(a in A))
            throw new Error(
              `Unable to find a matching type definition for ${a} in vector; make sure you passed a generic`
            );
          let { name: E, params: o } = this.parseTypeName(A[a]);
          return this.getTypeInterface(E)._decodeRaw.call(
            this,
            d,
            o,
            A
          );
        });
      }
    );
  }
  /**
   * Safe method to register a custom Move struct. The first argument is a name of the
   * struct which is only used on the FrontEnd and has no affect on serialization results,
   * and the second is a struct description passed as an Object.
   *
   * The description object MUST have the same order on all of the platforms (ie in Move
   * or in Rust).
   *
   * @example
   * // Move / Rust struct
   * // struct Coin {
   * //   value: u64,
   * //   owner: vector<u8>, // name // Vec<u8> in Rust
   * //   is_locked: bool,
   * // }
   *
   * bcs.registerStructType('Coin', {
   *   value: bcs.U64,
   *   owner: bcs.STRING,
   *   is_locked: bcs.BOOL
   * });
   *
   * // Created in Rust with diem/bcs
   * // let rust_bcs_str = '80d1b105600000000e4269672057616c6c65742047757900';
   * let rust_bcs_str = [ // using an Array here as BCS works with Uint8Array
   *  128, 209, 177,   5,  96,  0,  0,
   *    0,  14,  66, 105, 103, 32, 87,
   *   97, 108, 108, 101, 116, 32, 71,
   *  117, 121,   0
   * ];
   *
   * // Let's encode the value as well
   * let test_set = bcs.ser('Coin', {
   *   owner: 'Big Wallet Guy',
   *   value: '412412400000',
   *   is_locked: false,
   * });
   *
   * console.assert(Array.from(test_set.toBytes()) === rust_bcs_str, 'Whoopsie, result mismatch');
   *
   * @param name Name of the type to register.
   * @param fields Fields of the struct. Must be in the correct order.
   * @return Returns BCS for chaining.
   */
  registerStructType(r, e) {
    for (let A in e) {
      let d = this.tempKey(), s = e[A];
      !Array.isArray(s) && typeof s != "string" && (e[A] = d, this.registerStructType(d, s));
    }
    let n = Object.freeze(e), t = Object.keys(n), { name: i, params: l } = this.parseTypeName(r);
    return this.registerType(
      r,
      function(d, s, a, x) {
        if (!s || s.constructor !== Object)
          throw new Error(`Expected ${i} to be an Object, got: ${s}`);
        if (a.length !== l.length)
          throw new Error(
            `Incorrect number of generic parameters passed; expected: ${l.length}, got: ${a.length}`
          );
        for (let E of t) {
          if (!(E in s))
            throw new Error(`Struct ${i} requires field ${E}:${n[E]}`);
          const { name: o, params: f } = this.parseTypeName(
            n[E]
          );
          if (!l.includes(o))
            this.getTypeInterface(o)._encodeRaw.call(
              this,
              d,
              s[E],
              f,
              x
            );
          else {
            const h = l.indexOf(o);
            let { name: B, params: v } = this.parseTypeName(a[h]);
            if (this.hasType(B)) {
              this.getTypeInterface(B)._encodeRaw.call(
                this,
                d,
                s[E],
                v,
                x
              );
              continue;
            }
            if (!(B in x))
              throw new Error(
                `Unable to find a matching type definition for ${B} in ${i}; make sure you passed a generic`
              );
            let { name: C, params: c } = this.parseTypeName(x[B]);
            this.getTypeInterface(C)._encodeRaw.call(
              this,
              d,
              s[E],
              c,
              x
            );
          }
        }
        return d;
      },
      function(d, s, a) {
        if (s.length !== l.length)
          throw new Error(
            `Incorrect number of generic parameters passed; expected: ${l.length}, got: ${s.length}`
          );
        let x = {};
        for (let E of t) {
          const { name: o, params: f } = this.parseTypeName(
            n[E]
          );
          if (!l.includes(o))
            x[E] = this.getTypeInterface(o)._decodeRaw.call(
              this,
              d,
              f,
              a
            );
          else {
            const h = l.indexOf(o);
            let { name: B, params: v } = this.parseTypeName(s[h]);
            if (this.hasType(B)) {
              x[E] = this.getTypeInterface(B)._decodeRaw.call(
                this,
                d,
                v,
                a
              );
              continue;
            }
            if (!(B in a))
              throw new Error(
                `Unable to find a matching type definition for ${B} in ${i}; make sure you passed a generic`
              );
            let { name: C, params: c } = this.parseTypeName(a[B]);
            x[E] = this.getTypeInterface(C)._decodeRaw.call(
              this,
              d,
              c,
              a
            );
          }
        }
        return x;
      }
    );
  }
  /**
   * Safe method to register custom enum type where each invariant holds the value of another type.
   * @example
   * bcs.registerStructType('Coin', { value: 'u64' });
   * bcs.registerEnumType('MyEnum', {
   *  single: 'Coin',
   *  multi: 'vector<Coin>',
   *  empty: null
   * });
   *
   * console.log(
   *  bcs.de('MyEnum', 'AICWmAAAAAAA', 'base64'), // { single: { value: 10000000 } }
   *  bcs.de('MyEnum', 'AQIBAAAAAAAAAAIAAAAAAAAA', 'base64')  // { multi: [ { value: 1 }, { value: 2 } ] }
   * )
   *
   * // and serialization
   * bcs.ser('MyEnum', { single: { value: 10000000 } }).toBytes();
   * bcs.ser('MyEnum', { multi: [ { value: 1 }, { value: 2 } ] });
   *
   * @param name
   * @param variants
   */
  registerEnumType(r, e) {
    for (let A in e) {
      let d = this.tempKey(), s = e[A];
      s !== null && !Array.isArray(s) && typeof s != "string" && (e[A] = d, this.registerStructType(d, s));
    }
    let n = Object.freeze(e), t = Object.keys(n), { name: i, params: l } = this.parseTypeName(r);
    return this.registerType(
      r,
      function(d, s, a, x) {
        if (!s)
          throw new Error(`Unable to write enum "${i}", missing data.
Received: "${s}"`);
        if (typeof s != "object")
          throw new Error(
            `Incorrect data passed into enum "${i}", expected object with properties: "${t.join(
              " | "
            )}".
Received: "${JSON.stringify(s)}"`
          );
        let E = Object.keys(s)[0];
        if (E === void 0)
          throw new Error(`Empty object passed as invariant of the enum "${i}"`);
        let o = t.indexOf(E);
        if (o === -1)
          throw new Error(
            `Unknown invariant of the enum "${i}", allowed values: "${t.join(
              " | "
            )}"; received "${E}"`
          );
        let f = t[o], h = n[f];
        if (d.write8(o), h === null)
          return d;
        let B = l.indexOf(h), v = B === -1 ? h : a[B];
        {
          let { name: C, params: c } = this.parseTypeName(v);
          return this.getTypeInterface(C)._encodeRaw.call(
            this,
            d,
            s[E],
            c,
            x
          );
        }
      },
      function(d, s, a) {
        let x = d.readULEB(), E = t[x], o = n[E];
        if (x === -1)
          throw new Error(
            `Decoding type mismatch, expected enum "${i}" invariant index, received "${x}"`
          );
        if (o === null)
          return { [E]: !0 };
        let f = l.indexOf(o), h = f === -1 ? o : s[f];
        {
          let { name: B, params: v } = this.parseTypeName(h);
          return {
            [E]: this.getTypeInterface(B)._decodeRaw.call(this, d, v, a)
          };
        }
      }
    );
  }
  /**
   * Get a set of encoders/decoders for specific type.
   * Mainly used to define custom type de/serialization logic.
   *
   * @param type
   * @returns {TypeInterface}
   */
  getTypeInterface(r) {
    let e = this.types.get(r);
    if (typeof e == "string") {
      let n = [];
      for (; typeof e == "string"; ) {
        if (n.includes(e))
          throw new Error(`Recursive definition found: ${n.join(" -> ")} -> ${e}`);
        n.push(e), e = this.types.get(e);
      }
    }
    if (e === void 0)
      throw new Error(`Type ${r} is not registered`);
    return e;
  }
  /**
   * Parse a type name and get the type's generics.
   * @example
   * let { typeName, typeParams } = parseTypeName('Option<Coin<SUI>>');
   * // typeName: Option
   * // typeParams: [ 'Coin<SUI>' ]
   *
   * @param name Name of the type to process
   * @returns Object with typeName and typeParams listed as Array
   */
  parseTypeName(r) {
    if (Array.isArray(r)) {
      let [d, ...s] = r;
      return { name: d, params: s };
    }
    if (typeof r != "string")
      throw new Error(`Illegal type passed as a name of the type: ${r}`);
    let [e, n] = this.schema.genericSeparators || ["<", ">"], t = r.indexOf(e), i = Array.from(r).reverse().indexOf(n);
    if (t === -1 && i === -1)
      return { name: r, params: [] };
    if (t === -1 || i === -1)
      throw new Error(`Unclosed generic in name '${r}'`);
    let l = r.slice(0, t), A = ct(
      r.slice(t + 1, r.length - i - 1),
      this.schema.genericSeparators
    );
    return { name: l, params: A };
  }
};
let L = P0;
L.U8 = "u8";
L.U16 = "u16";
L.U32 = "u32";
L.U64 = "u64";
L.U128 = "u128";
L.U256 = "u256";
L.BOOL = "bool";
L.VECTOR = "vector";
L.ADDRESS = "address";
L.STRING = "string";
L.HEX = "hex-string";
L.BASE58 = "base58-string";
L.BASE64 = "base64-string";
function Fn(r) {
  r.registerType(
    L.U8,
    function(e, n) {
      return e.write8(n);
    },
    function(e) {
      return e.read8();
    },
    (e) => e < 256
  ), r.registerType(
    L.U16,
    function(e, n) {
      return e.write16(n);
    },
    function(e) {
      return e.read16();
    },
    (e) => e < 65536
  ), r.registerType(
    L.U32,
    function(e, n) {
      return e.write32(n);
    },
    function(e) {
      return e.read32();
    },
    (e) => e <= 4294967296n
  ), r.registerType(
    L.U64,
    function(e, n) {
      return e.write64(n);
    },
    function(e) {
      return e.read64();
    }
  ), r.registerType(
    L.U128,
    function(e, n) {
      return e.write128(n);
    },
    function(e) {
      return e.read128();
    }
  ), r.registerType(
    L.U256,
    function(e, n) {
      return e.write256(n);
    },
    function(e) {
      return e.read256();
    }
  ), r.registerType(
    L.BOOL,
    function(e, n) {
      return e.write8(n);
    },
    function(e) {
      return e.read8().toString(10) === "1";
    }
  ), r.registerType(
    L.STRING,
    function(e, n) {
      return e.writeVec(Array.from(n), (t, i) => t.write8(i.charCodeAt(0)));
    },
    function(e) {
      return e.readVec((n) => n.read8()).map((n) => String.fromCharCode(Number(n))).join("");
    },
    (e) => !0
  ), r.registerType(
    L.HEX,
    function(e, n) {
      return e.writeVec(Array.from(B0(n)), (t, i) => t.write8(i));
    },
    function(e) {
      let n = e.readVec((t) => t.read8());
      return h0(new Uint8Array(n));
    }
  ), r.registerType(
    L.BASE58,
    function(e, n) {
      return e.writeVec(Array.from(We(n)), (t, i) => t.write8(i));
    },
    function(e) {
      let n = e.readVec((t) => t.read8());
      return Q0(new Uint8Array(n));
    }
  ), r.registerType(
    L.BASE64,
    function(e, n) {
      return e.writeVec(Array.from(Le(n)), (t, i) => t.write8(i));
    },
    function(e) {
      let n = e.readVec((t) => t.read8());
      return Y0(new Uint8Array(n));
    }
  );
}
function _n() {
  return {
    genericSeparators: ["<", ">"],
    vectorType: "vector",
    addressLength: Dn,
    addressEncoding: "hex"
  };
}
const dt = 32;
function F0(r, e = !1) {
  let n = r.toLowerCase();
  return !e && n.startsWith("0x") && (n = n.slice(2)), `0x${n.padStart(dt * 2, "0")}`;
}
function ht(r, e = !1) {
  return F0(r, e);
}
BigInt(1e9);
const wn = ht("0x6");
ht("0x5");
const kn = /^vector<(.+)>$/, Sn = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
class d0 {
  static parseFromStr(e, n = !1) {
    if (e === "address")
      return { address: null };
    if (e === "bool")
      return { bool: null };
    if (e === "u8")
      return { u8: null };
    if (e === "u16")
      return { u16: null };
    if (e === "u32")
      return { u32: null };
    if (e === "u64")
      return { u64: null };
    if (e === "u128")
      return { u128: null };
    if (e === "u256")
      return { u256: null };
    if (e === "signer")
      return { signer: null };
    const t = e.match(kn);
    if (t)
      return {
        vector: d0.parseFromStr(t[1], n)
      };
    const i = e.match(Sn);
    if (i)
      return {
        struct: {
          address: n ? F0(i[1]) : i[1],
          module: i[2],
          name: i[3],
          typeParams: i[5] === void 0 ? [] : d0.parseStructTypeArgs(i[5], n)
        }
      };
    throw new Error(`Encountered unexpected token when parsing type args for ${e}`);
  }
  static parseStructTypeArgs(e, n = !1) {
    return ct(e).map(
      (t) => d0.parseFromStr(t, n)
    );
  }
  static tagToString(e) {
    if ("bool" in e)
      return "bool";
    if ("u8" in e)
      return "u8";
    if ("u16" in e)
      return "u16";
    if ("u32" in e)
      return "u32";
    if ("u64" in e)
      return "u64";
    if ("u128" in e)
      return "u128";
    if ("u256" in e)
      return "u256";
    if ("address" in e)
      return "address";
    if ("signer" in e)
      return "signer";
    if ("vector" in e)
      return `vector<${d0.tagToString(e.vector)}>`;
    if ("struct" in e) {
      const n = e.struct, t = n.typeParams.map(d0.tagToString).join(", ");
      return `${n.address}::${n.module}::${n.name}${t ? `<${t}>` : ""}`;
    }
    throw new Error("Invalid TypeTag");
  }
}
const W = new L({
  ..._n(),
  types: {
    enums: {
      "Option<T>": {
        None: null,
        Some: "T"
      }
    }
  }
});
function vt(r) {
  return _.u64({
    name: "unsafe_u64",
    ...r
  }).transform({
    input: (e) => e,
    output: (e) => Number(e)
  });
}
function Tn(r) {
  return _.enum("Option", {
    None: null,
    Some: r
  });
}
function Me(r) {
  return r.transform({
    input: (e) => ({
      [e.kind]: e
    }),
    output: (e) => {
      const n = Object.keys(e)[0];
      return { kind: n, ...e[n] };
    }
  });
}
const o0 = _.bytes(dt).transform({
  input: (r) => typeof r == "string" ? B0(F0(r)) : r,
  output: (r) => F0(h0(r))
}), Ke = _.vector(_.u8()).transform({
  name: "ObjectDigest",
  input: (r) => We(r),
  output: (r) => Q0(new Uint8Array(r))
}), I0 = _.struct("SuiObjectRef", {
  objectId: o0,
  version: _.u64(),
  digest: Ke
}), Ge = _.struct("SharedObjectRef", {
  objectId: o0,
  initialSharedVersion: _.u64(),
  mutable: _.bool()
}), G0 = _.enum("ObjectArg", {
  ImmOrOwned: I0,
  Shared: Ge,
  Receiving: I0
}), Xe = _.enum("CallArg", {
  Pure: _.vector(_.u8()),
  Object: G0,
  ObjVec: _.vector(G0)
}), _0 = _.enum("TypeTag", {
  bool: null,
  u8: null,
  u64: null,
  u128: null,
  address: null,
  signer: null,
  vector: _.lazy(() => _0),
  struct: _.lazy(() => rr),
  u16: null,
  u32: null,
  u256: null
}), i0 = Me(
  _.enum("Argument", {
    GasCoin: null,
    Input: _.struct("Input", { index: _.u16() }),
    Result: _.struct("Result", { index: _.u16() }),
    NestedResult: _.struct("NestedResult", { index: _.u16(), resultIndex: _.u16() })
  })
), Ze = _.struct("ProgrammableMoveCall", {
  package: o0,
  module: _.string(),
  function: _.string(),
  type_arguments: _.vector(_0),
  arguments: _.vector(i0)
}).transform({
  input: (r) => {
    const [e, n, t] = r.target.split("::"), i = r.typeArguments.map(
      (l) => d0.parseFromStr(l, !0)
    );
    return {
      package: F0(e),
      module: n,
      function: t,
      type_arguments: i,
      arguments: r.arguments
    };
  },
  output: (r) => ({
    target: [r.package, r.module, r.function].join(
      "::"
    ),
    arguments: r.arguments,
    typeArguments: r.type_arguments.map(d0.tagToString)
  })
}), Qe = Me(
  _.enum("Transaction", {
    /**
     * A Move Call - any public Move function can be called via
     * this transaction. The results can be used that instant to pass
     * into the next transaction.
     */
    MoveCall: Ze,
    /**
     * Transfer vector of objects to a receiver.
     */
    TransferObjects: _.struct("TransferObjects", {
      objects: _.vector(i0),
      address: i0
    }),
    /**
     * Split `amount` from a `coin`.
     */
    SplitCoins: _.struct("SplitCoins", { coin: i0, amounts: _.vector(i0) }),
    /**
     * Merge Vector of Coins (`sources`) into a `destination`.
     */
    MergeCoins: _.struct("MergeCoins", { destination: i0, sources: _.vector(i0) }),
    /**
     * Publish a Move module.
     */
    Publish: _.struct("Publish", {
      modules: _.vector(_.vector(_.u8())),
      dependencies: _.vector(o0)
    }),
    /**
     * Build a vector of objects using the input arguments.
     * It is impossible to construct a `vector<T: key>` otherwise,
     * so this call serves a utility function.
     */
    MakeMoveVec: _.struct("MakeMoveVec", {
      type: Tn(_0),
      objects: _.vector(i0)
    }),
    /**  */
    Upgrade: _.struct("Upgrade", {
      modules: _.vector(_.vector(_.u8())),
      dependencies: _.vector(o0),
      packageId: o0,
      ticket: i0
    })
  })
), Ye = _.struct("ProgrammableTransaction", {
  inputs: _.vector(Xe),
  transactions: _.vector(Qe)
}), Je = _.enum("TransactionKind", {
  ProgrammableTransaction: Ye,
  ChangeEpoch: null,
  Genesis: null,
  ConsensusCommitPrologue: null
}), er = _.enum("TransactionExpiration", {
  None: null,
  Epoch: vt()
}), rr = _.struct("StructTag", {
  address: o0,
  module: _.string(),
  name: _.string(),
  typeParams: _.vector(_0)
}), tr = _.struct("GasData", {
  payment: _.vector(I0),
  owner: o0,
  price: _.u64(),
  budget: _.u64()
}), nr = _.struct("TransactionDataV1", {
  kind: Je,
  sender: o0,
  gasData: tr,
  expiration: er
}), ir = _.enum("TransactionData", {
  V1: nr
}), pt = _.struct("SenderSignedData", {
  data: ir,
  txSignatures: _.vector(_.vector(_.u8()))
}), ar = _.enum("CompressedSignature", {
  ED25519: _.fixedArray(64, _.u8()),
  Secp256k1: _.fixedArray(64, _.u8()),
  Secp256r1: _.fixedArray(64, _.u8()),
  ZkLogin: _.vector(_.u8())
}), xr = _.enum("PublicKey", {
  ED25519: _.fixedArray(32, _.u8()),
  Secp256k1: _.fixedArray(33, _.u8()),
  Secp256r1: _.fixedArray(33, _.u8()),
  ZkLogin: _.vector(_.u8())
}), or = _.struct("MultiSigPkMap", {
  pubKey: xr,
  weight: _.u8()
}), sr = _.struct("MultiSigPublicKey", {
  pk_map: _.vector(or),
  threshold: _.u16()
}), Bt = _.struct("MultiSig", {
  sigs: _.vector(ar),
  bitmap: _.u16(),
  multisig_pk: sr
}), zn = {
  ..._,
  U8: _.u8(),
  U16: _.u16(),
  U32: _.u32(),
  U64: _.u64(),
  U128: _.u128(),
  U256: _.u256(),
  ULEB128: _.uleb128(),
  Bool: _.bool(),
  String: _.string(),
  Address: o0,
  Argument: i0,
  CallArg: Xe,
  CompressedSignature: ar,
  GasData: tr,
  MultiSig: Bt,
  MultiSigPkMap: or,
  MultiSigPublicKey: sr,
  ObjectArg: G0,
  ObjectDigest: Ke,
  ProgrammableMoveCall: Ze,
  ProgrammableTransaction: Ye,
  PublicKey: xr,
  SenderSignedData: pt,
  SharedObjectRef: Ge,
  StructTag: rr,
  SuiObjectRef: I0,
  Transaction: Qe,
  TransactionData: ir,
  TransactionDataV1: nr,
  TransactionExpiration: er,
  TransactionKind: Je,
  TypeTag: _0,
  // preserve backwards compatibility with old bcs export
  ser: W.ser.bind(W),
  de: W.de.bind(W),
  getTypeInterface: W.getTypeInterface.bind(W),
  hasType: W.hasType.bind(W),
  parseTypeName: W.parseTypeName.bind(W),
  registerAddressType: W.registerAddressType.bind(W),
  registerAlias: W.registerAlias.bind(W),
  registerBcsType: W.registerBcsType.bind(W),
  registerEnumType: W.registerEnumType.bind(W),
  registerStructType: W.registerStructType.bind(W),
  registerType: W.registerType.bind(W),
  types: W.types
};
W.registerBcsType("utf8string", () => _.string({ name: "utf8string" }));
W.registerBcsType("unsafe_u64", () => vt());
W.registerBcsType("enumKind", (r) => Me(r));
[
  o0,
  i0,
  Xe,
  ar,
  tr,
  Bt,
  or,
  sr,
  G0,
  Ke,
  Ze,
  Ye,
  xr,
  pt,
  Ge,
  rr,
  I0,
  Qe,
  ir,
  nr,
  er,
  Je,
  _0
].forEach((r) => {
  W.registerBcsType(r.name, () => r);
});
function L0(r) {
  const e = zn.parseTypeName(r);
  return { typeName: e.name, typeArgs: e.params };
}
function D0(r) {
  return !r || typeof r != "object" || Array.isArray(r) ? !1 : "kind" in r;
}
function Rn(r) {
  return !(!D0(r) || r.kind === "Input" && r.type === "pure");
}
function r0(r, e) {
  return D0(e) ? e : r.object(e);
}
function G(r, e, n) {
  if (D0(e))
    return r0(r, e);
  function t(s) {
    const { typeName: a, typeArgs: x } = L0(s);
    switch (a) {
      case "0x1::string::String":
      case "0x1::ascii::String":
        return L.STRING;
      case "0x2::object::ID":
        return L.ADDRESS;
      case "0x1::option::Option":
        return `vector<${t(x[0])}>`;
      case "vector":
        return `vector<${t(x[0])}>`;
      default:
        return s;
    }
  }
  function i(s) {
    return Array.isArray(s) ? s.some((a) => i(a)) : D0(s);
  }
  function l(s, a) {
    const { typeName: x, typeArgs: E } = L0(a);
    return x === "0x1::option::Option" ? s === null ? [] : [l(s, E[0])] : x === "vector" && Array.isArray(s) ? s.map((o) => l(o, E[0])) : x === "0x2::object::ID" || x === "address" ? F0(s) : s;
  }
  const { typeName: A, typeArgs: d } = L0(n);
  switch (A) {
    case "0x1::option::Option":
      if (e === null)
        return r.pure([], `vector<${t(d[0])}>`);
      if (i(e))
        throw new Error("nesting TransactionArgument is not currently supported");
      break;
    case "vector":
      if (!Array.isArray(e))
        throw new Error("expected an array for vector type");
      if (e.length === 0)
        return r.pure([], `vector<${t(d[0])}>`);
      if (e.some((s) => Array.isArray(s) && i(s)))
        throw new Error("nesting TransactionArgument is not currently supported");
      if (D0(e[0]) && e.filter((s) => !D0(s)).length > 0)
        throw new Error("mixing TransactionArgument with other types is not currently supported");
      if (Rn(e[0]))
        return r.makeMoveVec({
          objects: e,
          type: d[0]
        });
  }
  return r.pure(l(e, n), t(n));
}
function Hn(r) {
  const e = r.split("0x").join("");
  for (let n = 0; n < e.length; n++)
    if (e[n] !== "0")
      return `0x${e.substring(n)}`;
  return "0x0";
}
function E0(r) {
  const { typeName: e, typeArgs: n } = L0(r);
  switch (e) {
    case "bool":
    case "u8":
    case "u16":
    case "u32":
    case "u64":
    case "u128":
    case "u256":
    case "address":
    case "signer":
      return e;
    case "vector":
      return `vector<${E0(n[0])}>`;
    default: {
      const t = e.split("::");
      t[0] = Hn(t[0]);
      const i = t.join("::");
      return n.length > 0 ? `${i}<${n.map((l) => E0(l)).join(",")}>` : i;
    }
  }
}
function $n(r, e) {
  return r.moveCall({
    target: `${Z0}::manage_gatherings::mint_poap`,
    arguments: [r0(r, e.gathering), r0(r, e.clock)]
  });
}
function Pn(r, e) {
  return r.moveCall({
    target: `${Z0}::manage_gatherings::create_gathering`,
    arguments: [
      G(r, e.string1, "0x1::string::String"),
      G(r, e.string2, "0x1::string::String"),
      G(r, e.u641, "u64"),
      G(r, e.u642, "u64"),
      G(r, e.string3, "0x1::string::String"),
      G(r, e.string4, "0x1::string::String"),
      G(r, e.string5, "0x1::string::String"),
      r0(r, e.association),
      r0(r, e.clock)
    ]
  });
}
function In(r, e) {
  return r.moveCall({
    target: `${Z0}::association::create`,
    arguments: [r0(r, e)]
  });
}
function On(r, e) {
  return r.moveCall({
    target: `${Z0}::verifier::verify_groth16_bn254`,
    arguments: [
      G(r, e.vecU81, "vector<u8>"),
      G(r, e.vecU82, "vector<u8>"),
      G(r, e.vecU83, "vector<u8>")
    ]
  });
}
const ri = {
  createAssociation: async (r, e) => {
    In(r, e.clock);
  },
  createGathering: async (r, e) => {
    Pn(r, {
      string1: e.name,
      string2: e.description,
      u641: BigInt(Math.floor(e.startAt.getTime())),
      u642: BigInt(Math.floor(e.endAt.getTime())),
      string3: e.poapName,
      string4: e.poapDescription,
      string5: e.poapImgUrl,
      association: e.association,
      clock: e.association
    });
  },
  mintPoap: $n,
  verify: async (r, e) => {
    On(r, {
      vecU81: e.vk,
      vecU82: e.publicInputs,
      vecU83: e.proof
    });
  }
}, Un = "0xb0ec2d94cc8e2d4158044fdf8af47024604bb05ada18a7115b5a60bd1be090ff";
function Nn(r, e) {
  return r.moveCall({
    target: `${Un}::poap::new`,
    arguments: [
      G(r, e.string1, "0x1::string::String"),
      G(r, e.string2, "0x1::string::String"),
      G(r, e.string3, "0x1::string::String"),
      G(r, e.string4, "0x1::string::String"),
      G(r, e.string5, "0x1::string::String"),
      G(r, e.string6, "0x1::string::String"),
      r0(r, e.clock)
    ]
  });
}
const ti = {
  mintPoap: (r, e) => Nn(r, {
    string1: e.name,
    string2: e.description,
    string3: e.imgUrl,
    string4: e.gatheringId,
    string5: e.projectUrl,
    string6: e.creatorName,
    clock: e.clock
  })
};
function jn(r) {
  return r = E0(r), r === "0x2::object::ID";
}
class s0 {
  static $typeName = "0x2::object::ID";
  static $numTypeParams = 0;
  static get bcs() {
    return _.struct("ID", {
      bytes: _.bytes(32).transform({
        input: (e) => B0(e),
        output: (e) => h0(e)
      })
    });
  }
  bytes;
  constructor(e) {
    this.bytes = e;
  }
  static fromFields(e) {
    return new s0(`0x${e.bytes}`);
  }
  static fromFieldsWithTypes(e) {
    if (!jn(e.type))
      throw new Error("not a ID type");
    return new s0(`0x${e.fields.bytes}`);
  }
  static fromBcs(e) {
    return s0.fromFields(s0.bcs.parse(e));
  }
}
function qn(r) {
  return r = E0(r), r === "0x2::object::UID";
}
class p0 {
  static $typeName = "0x2::object::UID";
  static $numTypeParams = 0;
  static get bcs() {
    return _.struct("UID", {
      id: s0.bcs
    });
  }
  id;
  constructor(e) {
    this.id = e;
  }
  static fromFields(e) {
    return new p0(s0.fromFields(e.id).bytes);
  }
  static fromFieldsWithTypes(e) {
    if (!qn(e.type))
      throw new Error("not a UID type");
    return new p0(e.fields.id);
  }
  static fromBcs(e) {
    return p0.fromFields(p0.bcs.parse(e));
  }
}
function Ne(r) {
  return r = E0(r), r === "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership_pointer::MembershipPointer";
}
class l0 {
  static $typeName = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership_pointer::MembershipPointer";
  static $numTypeParams = 0;
  static get bcs() {
    return _.struct("MembershipPointer", {
      id: p0.bcs,
      membership_id: s0.bcs,
      authenticator: _.bytes(32).transform({
        input: (e) => B0(e),
        output: (e) => h0(e)
      }),
      subject: _.bytes(32).transform({
        input: (e) => B0(e),
        output: (e) => h0(e)
      })
    });
  }
  id;
  membershipId;
  authenticator;
  subject;
  constructor(e) {
    this.id = e.id, this.membershipId = e.membershipId, this.authenticator = e.authenticator, this.subject = e.subject;
  }
  static fromFields(e) {
    return new l0({
      id: p0.fromFields(e.id).id,
      membershipId: s0.fromFields(e.membership_id).bytes,
      authenticator: `0x${e.authenticator}`,
      subject: `0x${e.subject}`
    });
  }
  static fromFieldsWithTypes(e) {
    if (!Ne(e.type))
      throw new Error("not a MembershipPointer type");
    return new l0({
      id: e.fields.id.id,
      membershipId: e.fields.membership_id,
      authenticator: `0x${e.fields.authenticator}`,
      subject: `0x${e.fields.subject}`
    });
  }
  static fromBcs(e) {
    return l0.fromFields(l0.bcs.parse(e));
  }
  static fromSuiParsedData(e) {
    if (e.dataType !== "moveObject")
      throw new Error("not an object");
    if (!Ne(e.type))
      throw new Error(`object at ${e.fields.id} is not a MembershipPointer object`);
    return l0.fromFieldsWithTypes(e);
  }
  static async fetch(e, n) {
    const t = await e.getObject({ id: n, options: { showContent: !0 } });
    if (t.error)
      throw new Error(`error fetching MembershipPointer object at id ${n}: ${t.error.code}`);
    if (t.data?.content?.dataType !== "moveObject" || !Ne(t.data.content.type))
      throw new Error(`object at id ${n} is not a MembershipPointer object`);
    return l0.fromFieldsWithTypes(t.data.content);
  }
}
const Et = async (r, e) => {
  const n = await r.getOwnedObjects({
    owner: e.address,
    filter: {
      MatchAll: [{ StructType: l0.$typeName }, { AddressOwner: e.address }]
    },
    options: {
      showType: !0,
      showOwner: !0,
      showPreviousTransaction: !0,
      showDisplay: !1,
      showContent: !1,
      showBcs: !1,
      showStorageRebate: !1
    }
  });
  return console.log(JSON.stringify(n, null, 2)), n?.data?.[0]?.data?.objectId ?? null;
}, Wn = async (r, e) => {
  const n = await Et(r, e);
  if (!n)
    return null;
  const t = await r.getObject({
    id: n,
    options: {
      showContent: !0,
      showOwner: !0
    }
  });
  return console.log(JSON.stringify(t, null, 2)), t.data?.content?.fields?.membership_id ?? null;
}, ni = {
  getOwnedMembershipPointerObjectId: Et,
  getOwnedMembershipObjectId: Wn
};
function Ln(r) {
  return r = E0(r), r === "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership::ContainsClaimEvent";
}
function Vn(r) {
  return r = E0(r), r === "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0::membership::BoundCheckEvent";
}
const ii = {
  verifyClaimDigest: (r, e) => {
    const n = r.events?.filter((A) => Ln(A.type)) ?? [];
    console.log(JSON.stringify(n, null, 2));
    const t = Array.from(n).every(
      (A) => A?.parsedJson?.authenticator === e.authenticator
    ), i = Array.from(n).every(
      (A) => A?.parsedJson?.is_verified ?? !1
    );
    return t && i;
  },
  verifyBoundCheck: (r, e) => {
    const n = r.events?.filter((A) => Vn(A.type)) ?? [], t = Array.from(n).every(
      (A) => A?.parsedJson?.authenticator === e.authenticator
    ), i = Array.from(n).every(
      (A) => A?.parsedJson?.is_verified ?? !1
    );
    return t && i;
  }
}, O0 = "0xeb4c51db47d14a40856b5bf2878c458b190eb4f0abf87cefecffbe3fbba4dfd0";
function Mn(r) {
  return r.moveCall({ target: `${O0}::membership_registry::create`, arguments: [] });
}
function Kn(r, e) {
  return r.moveCall({
    target: `${O0}::membership_registry::insert_member`,
    arguments: [
      r0(r, e.membershipRegistry),
      G(r, e.address, "address"),
      r0(r, e.clock)
    ]
  });
}
function Gn(r, e) {
  return r.moveCall({
    target: `${O0}::membership::insert_claim`,
    arguments: [
      r0(r, e.membership),
      G(r, e.string, "0x1::string::String"),
      G(r, e.vecU8, "vector<u8>")
    ]
  });
}
function Xn(r, e) {
  return r.moveCall({
    target: `${O0}::membership::contains_claim_digest`,
    arguments: [r0(r, e.membership), G(r, e.vecU8, "vector<u8>")]
  });
}
function Zn(r, e) {
  return r.moveCall({
    target: `${O0}::membership::bound_check`,
    arguments: [
      r0(r, e.membership),
      G(r, e.string, "0x1::string::String"),
      G(r, e.u641, "u64"),
      G(r, e.u642, "u64"),
      G(r, e.vecU81, "vector<u8>"),
      G(r, e.vecU82, "vector<u8>")
    ]
  });
}
const ai = {
  createMembershipRegister: async (r) => {
    Mn(r);
  },
  insertMember: async (r, e) => {
    Kn(r, {
      membershipRegistry: e.membershipRegistryId,
      address: e.memberAddress,
      clock: wn
    });
  },
  insertClaims: async (r, e) => {
    for (const n of e.claimList) {
      const t = tt(n.claim_value);
      Gn(r, {
        membership: e.membershipId,
        string: n.claim_key,
        vecU8: Array.from(Buffer.from(t, "hex"))
      });
    }
  },
  verifyClaimDigest: async (r, e) => {
    for (const n of e.claimValueList) {
      const t = tt(n);
      Xn(r, {
        membership: e.membershipId,
        vecU8: Array.from(Buffer.from(t, "hex"))
      });
    }
  },
  boundCheck: async (r, e) => {
    Zn(r, {
      membership: e.membershipId,
      string: e.claimKey,
      u641: e.lower_bound_gte,
      u642: e.upper_bound_le,
      vecU81: Array.from(e.proof),
      vecU82: Array.from(e.vk)
    });
  }
}, Qn = [
  {
    claim_key: "driving_distance",
    label: "走行距離",
    type: "meter",
    description: "中古車の価値判断や保険料算出に直接関係"
  },
  {
    claim_key: "rapid_acceleration_count",
    label: "急加速回数",
    type: "count",
    description: "エコドライブ適合度を示す項目"
  },
  {
    claim_key: "rapid_deceleration_count",
    label: "急減速回数",
    type: "count",
    description: "エコドライブ適合度を示す項目"
  },
  {
    claim_key: "sharp_steering_count",
    label: "急ハンドル回数",
    type: "count",
    description: "運転の荒さを示す項目"
  },
  // {
  //   claim_key: 'speeding_violation_count',
  //   label: '速度超過違反回数',
  //   type: 'number',
  //   description: '速度制限を守れているかどうか',
  // },
  // {
  //   claim_key: 'traffic_signal_violation_count',
  //   label: '信号無視・一時不停止違反回数',
  //   type: 'number',
  //   description: '交通規則遵守度を示す',
  // },
  {
    claim_key: "night_driving_distance_ratio",
    label: "夜間走行距離比率",
    type: "ratio",
    description: "夜間の運転リスクを示す"
  },
  {
    claim_key: "highway_driving_distance_ratio",
    label: "高速道路走行距離比率",
    type: "ratio",
    description: "高速安定性を示す"
  },
  {
    claim_key: "over_idle_time",
    label: "過怠速/アイドリング時間",
    type: "hour",
    description: "燃費や排気量と相関"
  },
  {
    claim_key: "overheat_count",
    label: "オーバーヒート回数",
    type: "count",
    description: "エンジンの故障履歴"
  }
  // {
  //   claim_key: 'maintenance_history',
  //   label: 'メンテナンス履歴',
  //   type: 'string',
  //   description: '定期点検やオイル交換のタイミング',
  // },
], Yn = [
  {
    claim_key: "stop_sign_violations",
    label: "一時停止違反回数",
    type: "number",
    description: "一時停止違反の回数"
  },
  {
    claim_key: "red_light_violations",
    label: "信号無視回数",
    type: "number",
    description: "信号無視の回数"
  },
  {
    claim_key: "speeding_violations",
    label: "速度超過違反回数",
    type: "number",
    description: "速度超過違反の回数"
  },
  {
    claim_key: "parking_violations",
    label: "駐車違反回数",
    type: "number",
    description: "駐車違反の回数"
  },
  {
    claim_key: "license_violations",
    label: "免許関連違反回数",
    type: "number",
    description: "免許証不携帯を含む免許関連違反の回数"
  },
  {
    claim_key: "accident_counts",
    label: "加害事故回数",
    type: "number",
    description: "加害事故の回数"
  },
  {
    claim_key: "drunk_driving_counts",
    label: "飲酒運転回数",
    type: "number",
    description: "飲酒運転の回数"
  },
  {
    claim_key: "reckless_driving_counts",
    label: "危険運転回数",
    type: "number",
    description: "危険運転（着陸違反など）の回数"
  },
  {
    claim_key: "phone_use_violations",
    label: "スマホ使用違反回数",
    type: "number",
    description: "操作中スマホ使用の違反回数"
  },
  {
    claim_key: "seatbelt_violations",
    label: "シートベルト違反回数",
    type: "number",
    description: "シートベルト着用違反の回数"
  },
  {
    claim_key: "vehicle_defects",
    label: "車検不良違反回数",
    type: "number",
    description: "車検不良や装備違反の回数"
  }
], Jn = {
  driving_distance: 1234456123456,
  rapid_acceleration_count: 2e6,
  rapid_deceleration_count: 3e6,
  sharp_steering_count: 5e6,
  // speeding_violation_count: 200000,
  // traffic_signal_violation_count: 100000,
  night_driving_distance_ratio: 354321,
  highway_driving_distance_ratio: 768901,
  over_idle_time: 2345543210,
  overheat_count: 0
  // maintenance_history: '20230301: オイル交換, 20221110: タイヤ交換',
}, ei = {
  stop_sign_violations: 3e5,
  red_light_violations: 2e5,
  speeding_violations: 15e4,
  parking_violations: 5e4,
  license_violations: 1e4,
  accident_counts: 25e4,
  drunk_driving_counts: 5e3,
  reckless_driving_counts: 4e4,
  phone_use_violations: 8e4,
  seatbelt_violations: 7e4,
  vehicle_defects: 2e4
}, xi = Qn.map((r) => {
  const e = Jn[r.claim_key];
  return {
    ...r,
    claim_value: BigInt(e)
  };
}), oi = Yn.map(
  (r) => {
    const e = ei[r.claim_key];
    return {
      ...r,
      claim_value: BigInt(e)
    };
  }
);
export {
  Qn as claimSchemaListDrivingBehavior,
  Yn as claimSchemaListTrafficViolation,
  ri as cocoMoveCall,
  ti as poapMoveCall,
  xi as sampleClaimDrivingBehavior,
  oi as sampleClaimTrafficViolation,
  ni as sionClient,
  ai as sionMoveCall,
  ii as sionTransactionResponseResolver,
  fn as u64ToLEBytes,
  tt as u64ToSha256Digest
};
