export class zettaUtils {

  // window reference
  getNativeWindow() {
    return window;
  }
  //  creating U Id
  generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };

  deepCloneObject(obj) {
    // return value is input is not an Object or Array.
    if (typeof (obj) !== 'object' || obj === null) {
      return obj;
    }

    let clone;

    if (Array.isArray(obj)) {
      clone = obj.slice();  // unlink Array reference.
    } else {
      clone = Object.assign({}, obj); // Unlink Object reference.
    }

    let keys = Object.keys(clone);

    for (let i = 0; i < keys.length; i++) {
      clone[keys[i]] = this.deepCloneObject(clone[keys[i]]); // recursively unlink reference to nested objects.
    }

    return clone; // return unlinked clone.
  }
  // array Sort
  sortList(a, b) {
    if (a.label === b.label)
      return 0;
    else
      return (a.label < b.label) ? -1 : 1;
  }
}