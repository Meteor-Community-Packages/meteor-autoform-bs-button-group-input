Template["afBooleanRadioGroup_buttonGroup"].helpers({
  falseAtts: function falseAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value === false) {
      atts.checked = "";
    }
    return atts;
  },
  trueAtts: function trueAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value === true) {
      atts.checked = "";
    }
    return atts;
  },
  nullAtts: function nullAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value !== true && this.value !== false) {
      atts.checked = "";
    }
    return atts;
  },
  isTrue: function () {
    return this.value === true;
  },
  isFalse: function () {
    return this.value === false;
  },
  isNull: function () {
    return this.value !== true && this.value !== false;
  },
  dsk: function () {
    return {'data-schema-key': this.atts['data-schema-key']};
  }
});
