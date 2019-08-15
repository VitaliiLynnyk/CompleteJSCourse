const budgetController = (() => {

  const Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

})();

const UIController = (() => {

})();

const controller = ((budgetCtrl, UICtrl) => {
  return {
    init: function () {
      console.log('Application has started.');
    }
  };
})(budgetController, UIController);

controller.init();
