<<<<<<< HEAD
(function () {
// notequalto extra validators
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.validators = window.ParsleyConfig.validators || {};

// Greater than validator
window.ParsleyConfig.validators.notequalto = {
  fn: function (value, requirement) {
    return value !== ($(requirement).length ? $(requirement).val() : requirement);
  },
  priority: 256
};
})();
=======
(function () {
// notequalto extra validators
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.validators = window.ParsleyConfig.validators || {};

// Greater than validator
window.ParsleyConfig.validators.notequalto = {
  fn: function (value, requirement) {
    return value !== ($(requirement).length ? $(requirement).val() : requirement);
  },
  priority: 256
};
})();
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
