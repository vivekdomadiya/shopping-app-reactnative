import monent from 'moment';

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get redableDate() {
    // return this.date.toLocaleDateString('en-En', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });

    return monent(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
