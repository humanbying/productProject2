
const TableStuff = React.createClass({
  getInitialState: function(){
    return{
      name: '',
      description: '',
      price: ''
    }
  },
  render: function() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <h1>Name</h1>
        <input id = "name" type="text" ref="text"/>
        <h1>Description</h1>
        <input id = "description" type="text" ref="text"/>
        <h1>Price</h1>
        <input id = "price" type="text" ref="text"/>
        <button>Submit</button>
        </form>
      </div>
    )
  },
  onSubmit: function(e){
    e.preventDefault();
    var text = this.refs.text.value;

    if(!text){
      alert('enter an item');
      return;
    }
  }
});

ReactDOM.render(
  <TableStuff />,
  document.getElementById('example')
);
