
const TableStuff = React.createClass({
  getInitialState: function(){
    return{
      name: '',
      description: '',
      price: '',
      items: []
    }
  },
  addItem: function(text){
    var newItem = {
      name: name,
      description: description,
      price: price,
      items: this.state.item.length + 1,
    }
    this.setState({items: this.state.items.concat(newItem)});
  },
  render: function() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <h1>Name</h1>
        <input id = "name" type="text" ref="name"/><button>edit</button><button>X</button>
        <h1>Description</h1>
        <input id = "description" type="text" ref="description"/><button>edit</button><button>X</button>
        <h1>Price</h1>
        <input id = "price" type="number" ref="price"/><button>edit</button><button>X</button>
        <br/>
        <button type="submit">Submit</button>
        </form>
        <h3><span>Total items:</span>
        <br/>
        <span>Total Price:</span></h3>
      </div>
    )
  },
  onSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var price = this.refs.price.value;

    if(!name){
      alert('enter an item');
      return;
    }
  }
});

ReactDOM.render(
  <TableStuff />,
  document.getElementById('example')
);
