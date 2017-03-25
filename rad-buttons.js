Template.afRadioGroup_buttonGroup.helpers({
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);
    atts.checked = this.selected;
    // remove data-schema-key attribute because we put it
    // on the entire group
    delete atts['data-schema-key'];
    return atts;
  },
  dsk: function dsk() {
    return {
      'data-schema-key': this.atts['data-schema-key']
    };
  }
});
